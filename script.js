// ---------- Globals ----------
const Tone = window.Tone;
const OpenSheetMusicDisplay = window.opensheetmusicdisplay.OpenSheetMusicDisplay;

// ---------- Elements ----------
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const status = document.getElementById("status");
const musicDiv = document.getElementById("music");
const keyboard = document.getElementById("keyboard");

// Volume sliders
const pianoSlider = document.getElementById("pianoVol");
const guitarSlider = document.getElementById("guitarVol");

// ---------- Variables ----------
let osmd;
let synthPiano, guitar;
let pianoVol, guitarVol;
let noteEvents = [];
let svgNoteMap = [];
window.svgNoteMap = svgNoteMap; // for debugging

let bpm = 120;
let audioReady = false;
let playbackStartTime = 0;
let currentIndex = 0;

// ---------- Init ----------
async function init() {
  // Unlock audio context on first click
  document.body.addEventListener(
    "click",
    async () => {
      if (!audioReady) {
        await Tone.start();
        audioReady = true;
        console.log("🔊 AudioContext unlocked.");
      }
    },
    { once: true }
  );

  status.innerText = "🎸 Loading instruments...";
  buildKeyboard(48, 72); // C3–C5
  await loadInstruments();
  await connectMIDIKeyboard();
  setupVolumeFaders();
  await loadXMLFile();
  playBtn.disabled = false;
  status.innerText = "✅ Ready.";
}

// ---------- Keyboard ----------
function buildKeyboard(midiStart, midiEnd) {
  keyboard.innerHTML = "";
  for (let midi = midiStart; midi <= midiEnd; midi++) {
    const step = midi % 12;
    const isBlack = [1, 3, 6, 8, 10].includes(step);
    if (!isBlack) {
      const group = document.createElement("div");
      group.className = "key-group";
      const wk = document.createElement("div");
      wk.className = "white-key";
      wk.dataset.midi = midi;
      group.appendChild(wk);
      keyboard.appendChild(group);
      const sharpMidi = midi + 1;
      const sharpStep = sharpMidi % 12;
      if ([1, 3, 6, 8, 10].includes(sharpStep) && sharpMidi <= midiEnd) {
        const bk = document.createElement("div");
        bk.className = "black-key";
        bk.dataset.midi = sharpMidi;
        group.appendChild(bk);
      }
    }
  }
}

function keyDivFor(midi) {
  return keyboard.querySelector(`[data-midi="${midi}"]`);
}

function lightKey(midi, color) {
  const key = keyDivFor(midi);
  if (!key) return;
  key.style.backgroundColor = color;
  setTimeout(() => (key.style.backgroundColor = ""), 300);
}

// ---------- Instruments ----------
async function loadInstruments() {
  pianoVol = new Tone.Gain(0.5).toDestination();
  guitarVol = new Tone.Gain(0.8).toDestination();

  guitar = new Tone.Sampler({
    urls: {
      E2: "8397__speedy__clean_e_str_pluck.wav",
      A2: "8383__speedy__clean_a_str_pluck.wav",
      D3: "8389__speedy__clean_d_str_pluck.wav",
      G3: "8403__speedy__clean_g_str_pluck.wav",
      B3: "8386__speedy__clean_b_str_pluck.wav",
      E4: "8394__speedy__clean_e1st_str_pluck.wav",
    },
    baseUrl: "./src/assets/guit/",
    onload: () => console.log("✅ Guitar samples loaded"),
  }).connect(guitarVol);

  synthPiano = new Tone.Sampler({
    urls: {
      A1: "A1.mp3",
      C2: "C2.mp3",
      C3: "C3.mp3",
      C4: "C4.mp3",
      C5: "C5.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/salamander/",
    onload: () => console.log("🎹 Piano ready"),
  }).connect(pianoVol);

  await Tone.loaded();
}

// ---------- Volume Faders ----------
// ---------- Volume Faders ----------
function setupVolumeFaders() {
  // Direct mapping: right = louder
  if (pianoSlider) {
    pianoSlider.addEventListener("input", (e) => {
      const value = parseFloat(e.target.value);
      pianoVol.gain.rampTo(value, 0.1);
    });
  }
  if (guitarSlider) {
    guitarSlider.addEventListener("input", (e) => {
      const value = parseFloat(e.target.value);
      guitarVol.gain.rampTo(value, 0.1);
    });
  }
}
// ---------- MIDI ----------
async function connectMIDIKeyboard() {
  if (!navigator.requestMIDIAccess) {
    status.innerText = "⚠️ Web MIDI not supported (use Chrome).";
    return;
  }
  const access = await navigator.requestMIDIAccess();
  for (let input of access.inputs.values()) {
    input.onmidimessage = handleMIDI;
  }
  status.innerText = "✅ MIDI connected.";
}

function handleMIDI(event) {
  const [cmd, note, vel] = event.data;
  const freq = Tone.Frequency(note, "midi").toFrequency();
  const isOn = cmd === 144 && vel > 0;
  if (isOn) synthPiano.triggerAttack(freq);
  else synthPiano.triggerRelease(freq);
  if (isOn) lightKey(note, "lightblue");
}

// ---------- XML + Note Extraction ----------
async function loadXMLFile() {
  const resp = await fetch("./src/assets/test.xml");
  const xmlText = await resp.text();

  // --- Parse XML ---
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");

  // 🧹 Remove tempo, metronome, and stray "words" directions
  xmlDoc.querySelectorAll("direction").forEach(dir => {
    if (dir.querySelector("metronome, sound, words")) dir.remove();
  });

  // 🧹 Remove part/instrument names (so OSMD doesn’t print "Instr. P1")
  xmlDoc.querySelectorAll(
    "part-name, part-abbreviation, instrument-name, score-instrument, midi-instrument, part-name-display"
  ).forEach(el => el.remove());

  // 🧹 Keep only the first <credit><credit-words> (main title)
  const creditWords = xmlDoc.querySelectorAll("credit-words");
  if (creditWords.length > 1) {
    creditWords.forEach((el, i) => {
      if (i > 0) el.remove(); // remove all but the first
    });
  }

  // 🧹 Ensure only one <credit> block remains
  const credits = xmlDoc.querySelectorAll("credit");
  if (credits.length > 1) {
    credits.forEach((el, i) => {
      if (i > 0) el.remove();
    });
  }

  // 🧹 Prefer the <credit> title, remove <work-title> duplicates
  const creditTitle = xmlDoc.querySelector("credit credit-words")?.textContent?.trim();
  if (creditTitle) {
    xmlDoc.querySelectorAll("work > work-title").forEach(el => el.remove());
  }

  // Serialize cleaned XML
  const cleanedXML = new XMLSerializer().serializeToString(xmlDoc);

  // --- Load into OSMD ---
  osmd = new OpenSheetMusicDisplay(musicDiv, {
    autoResize: true,
    drawTitle: true,          // ✅ Keep the main title
    drawPartNames: false,     // ✅ Remove "Instr. P1"
    drawMeasureNumbers: true, // ✅ Show bar numbers
  });

  await osmd.load(cleanedXML);
  await osmd.render();

  noteEvents = extractNotesFromXML(cleanedXML);
  await mapXmlNotesToSvg();
}



// Parse MusicXML, keeping document order
function extractNotesFromXML(xmlText) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");
  const divisions = parseFloat(xmlDoc.querySelector("divisions")?.textContent || "64");
  const tempoNode = xmlDoc.querySelector("sound[tempo]");
  bpm = tempoNode ? parseFloat(tempoNode.getAttribute("tempo")) : 120;
  const secPerQuarter = 60 / bpm;

  const allNotes = Array.from(xmlDoc.getElementsByTagName("note"));
  const events = [];
  let timeSec = 0;

  for (const n of allNotes) {
    const pitch = n.querySelector("pitch");
    const rest = n.querySelector("rest");
    const durationNode = n.querySelector("duration");
    const durDiv = parseFloat(durationNode?.textContent || "0");
    const durSec = (durDiv / divisions) * secPerQuarter;

    if (pitch && !rest) {
      const step = pitch.querySelector("step")?.textContent;
      const octave = parseInt(pitch.querySelector("octave")?.textContent || "4", 10);
      const midi = 12 * (octave + 1) + { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[step];
      events.push({ time: timeSec, midiPitch: midi, durSec });
    }

    timeSec += durSec; // advance even if rest
  }

  console.log(`🎼 Extracted ${events.length} notes (XML order)`);
  return events;
}

// ---------- SVG NOTE MAPPING ----------
async function mapXmlNotesToSvg() {
  const svg = await waitForSVG();
  if (!svg) {
    console.warn("⚠️ No SVG found under #music");
    svgNoteMap = [];
    return;
  }

  // Get all stavenote groups (these include heads, stems, flags, etc.)
  const noteGroups = Array.from(svg.querySelectorAll("g.vf-stavenote"));

  // Map to XML notes in order
  svgNoteMap = noteGroups.slice(0, noteEvents.length);

  console.log(`🎯 Mapped ${svgNoteMap.length}/${noteEvents.length} stavenote groups`);
}

// ---------- NOTE HIGHLIGHTING ----------
function highlightNoteSequential(index) {
  if (!svgNoteMap.length) return;

  // Remove highlights
  svgNoteMap.forEach(g => g.classList.remove("lit"));
  const stems = document.querySelectorAll("g.vf-stem");
  stems.forEach(s => s.classList.remove("lit"));

  // Highlight current note
  const group = svgNoteMap[index % svgNoteMap.length];
  if (!group) return;

  // Add highlight to this stavenote and its stem (if present)
  group.classList.add("lit");

  const stem = group.querySelector(".vf-stem");
  if (stem) stem.classList.add("lit");
}

// ---------- Playback ----------
playBtn.addEventListener("click", async () => {
  if (Tone.context.state !== "running") await Tone.context.resume();
  await mapXmlNotesToSvg();

  Tone.Transport.stop();
  Tone.Transport.cancel();

  currentIndex = 0;
  playbackStartTime = Tone.now();

  noteEvents.forEach((ev, i) => {
    Tone.Transport.scheduleOnce((time) => {
      currentIndex = i;
      const freq = Tone.Frequency(ev.midiPitch, "midi").toFrequency();
      guitar.triggerAttackRelease(freq, ev.durSec, time);
      highlightNoteSequential(i);
      lightKey(ev.midiPitch, "lightblue");
    }, ev.time);
  });

  const totalDur = noteEvents.at(-1)?.time + noteEvents.at(-1)?.durSec;
  Tone.Transport.scheduleOnce(() => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    currentIndex = 0;
    highlightNoteSequential(-1);
    status.innerText = "✅ Playback complete.";
  }, totalDur + 0.5);

  Tone.Transport.start("+0.1");
  status.innerText = `🎶 Playing at ${bpm} BPM...`;
});

stopBtn.addEventListener("click", () => {
  Tone.Transport.stop();
  Tone.Transport.cancel();
  synthPiano.releaseAll();
  currentIndex = 0;
  highlightNoteSequential(-1);
  status.innerText = "⏹ Stopped.";
});

// ---------- SVG Wait Helper ----------
async function waitForSVG(maxMs = 1500) {
  const start = performance.now();
  while (performance.now() - start < maxMs) {
    const svg = document.querySelector("#music svg");
    if (svg && svg.querySelector(".vf-notehead")) return svg;
    await new Promise(r => requestAnimationFrame(r));
  }
  return document.querySelector("#music svg");
}

// ---------- Go ----------
init();
