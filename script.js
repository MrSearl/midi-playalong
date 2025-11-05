// ---------- Globals ----------
const Tone = window.Tone;
const OpenSheetMusicDisplay = window.opensheetmusicdisplay.OpenSheetMusicDisplay;

// ---------- Elements ----------
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const status = document.getElementById("status");
const musicDiv = document.getElementById("music");
const keyboard = document.getElementById("keyboard");
const pianoSlider = document.getElementById("pianoVol");
const guitarSlider = document.getElementById("guitarVol");
const loopBox = document.getElementById("loopEnabled");
const startSel = document.getElementById("loopStart");
const endSel = document.getElementById("loopEnd");

// ---------- Variables ----------
let osmd;
let synthPiano, guitar;
let pianoVol, guitarVol;
let noteEvents = [];
let svgNoteMap = [];
let bpm = 120;
let audioReady = false;
let currentIndex = 0;
let loopEnabled = false;
let loopStartBar = 1;
let loopEndBar = 4;
let skipPitchedIdx = new Set();
let lastLitKey = null;

// ---------- Init ----------
async function init() {
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
  buildKeyboard(48, 72);
  await loadInstruments();
  await connectMIDIKeyboard();
  setupVolumeFaders();
  await loadXMLFile(); // detects <sound tempo="">
  setupTempoSlider(bpm);

  playBtn.disabled = false;
  status.innerText = `✅ Ready (tempo ${bpm} BPM).`;
}

// ---------- Keyboard ----------
function buildKeyboard(midiStart, midiEnd) {
  keyboard.innerHTML = "";
  for (let midi = midiStart; midi <= midiEnd; midi++) {
    const step = midi % 12;
    const isBlack = [1, 3, 6, 8, 10].includes(step);
    const noteName = midiToNoteName(midi);

    if (!isBlack) {
      const group = document.createElement("div");
      group.className = "key-group";

      const whiteKey = document.createElement("div");
      whiteKey.className = "white-key";
      whiteKey.dataset.midi = midi;

      const whiteLabel = document.createElement("span");
      whiteLabel.className = "key-label";
      whiteLabel.textContent = noteName;
      whiteKey.appendChild(whiteLabel);
      group.appendChild(whiteKey);

      const nextMidi = midi + 1;
      const nextStep = nextMidi % 12;
      if ([1, 3, 6, 8, 10].includes(nextStep) && nextMidi <= midiEnd) {
        const blackKey = document.createElement("div");
        blackKey.className = "black-key";
        blackKey.dataset.midi = nextMidi;

        const blackLabel = document.createElement("span");
        blackLabel.className = "key-label black-label";
        blackLabel.textContent = midiToNoteName(nextMidi);
        blackKey.appendChild(blackLabel);
        group.appendChild(blackKey);
      }
      keyboard.appendChild(group);
    }
  }
}

function midiToNoteName(midi) {
  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const name = notes[midi % 12];
  const octave = Math.floor(midi / 12) - 1;
  return `${name}${octave}`;
}

function keyDivFor(midi) {
  return keyboard.querySelector(`[data-midi="${midi}"]`);
}

function lightKey(midi, color = "#9df") {
  const key = keyDivFor(midi);
  if (!key) return;

  // Turn off previous key highlight (even if same note)
  if (lastLitKey) lastLitKey.style.backgroundColor = "";

  // Short delay before lighting to create a visible gap
  setTimeout(() => {
    key.style.backgroundColor = color;
    lastLitKey = key;
  }, 50); // 50 ms delay creates a subtle re-flash
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
function setupVolumeFaders() {
  if (pianoSlider)
    pianoSlider.addEventListener("input", (e) =>
      pianoVol.gain.rampTo(parseFloat(e.target.value), 0.1)
    );
  if (guitarSlider)
    guitarSlider.addEventListener("input", (e) =>
      guitarVol.gain.rampTo(parseFloat(e.target.value), 0.1)
    );
}

// ---------- Load XML ----------
async function loadXMLFile() {
  const resp = await fetch("./src/assets/test2.xml");
  const xmlText = await resp.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");

  const workTitle = xmlDoc.querySelector("work > work-title")?.textContent?.trim();
  const creditTitle = xmlDoc.querySelector("credit > credit-words")?.textContent?.trim();
  const titleText = workTitle || creditTitle || "Untitled Score";

  // 🎵 Detect tempo
  const tempoNode = xmlDoc.querySelector("sound[tempo]");
  bpm = tempoNode ? parseFloat(tempoNode.getAttribute("tempo")) : 120;
  Tone.Transport.bpm.value = bpm;
  console.log(`🎚 Detected tempo from XML: ${bpm} BPM`);

  // 🧹 Clean XML
  xmlDoc.querySelectorAll("credit").forEach((el) => el.remove());
  xmlDoc.querySelectorAll("direction").forEach((dir) => {
    if (dir.querySelector("metronome, sound, words")) dir.remove();
  });
  xmlDoc
    .querySelectorAll(
      "part-name, part-abbreviation, instrument-name, score-instrument, midi-instrument, part-name-display"
    )
    .forEach((el) => el.remove());

  const cleanedXML = new XMLSerializer().serializeToString(xmlDoc);

  // 🎼 Load OSMD
  osmd = new OpenSheetMusicDisplay(musicDiv, {
    autoResize: true,
    drawTitle: true,
    drawPartNames: false,
    drawMeasureNumbers: true,
  });
  await osmd.load(cleanedXML);
  await osmd.render();

  // 🪶 Apply layout tweaks
  const rules = osmd.EngravingRules;
  rules.PageTopMargin = 2;
  rules.PageBottomMargin = 0;
  rules.PageLeftMargin = 1;
  rules.PageRightMargin = 1;
  rules.SystemDistance = 2;
  rules.StaffDistance = 1;
  await osmd.render();

  // 🎨 Title formatting function
  function styleTitle(svg) {
    if (!svg) return;
    const allText = Array.from(svg.querySelectorAll("text"));
    if (!allText.length) return;

    // Find text around 40px, or largest
    let titleEl = allText.find(t => {
      const size = parseFloat(t.getAttribute("font-size") || "0");
      return size >= 38 && size <= 42;
    });
    if (!titleEl) {
      titleEl = allText.reduce((a, b) =>
        parseFloat(a.getAttribute("font-size") || 0) >
        parseFloat(b.getAttribute("font-size") || 0)
          ? a
          : b
      );
    }

    if (titleEl) {
      const oldSize = titleEl.getAttribute("font-size");
      console.log(`🎨 Title detected: "${titleEl.textContent}" (was ${oldSize})`);
      titleEl.setAttribute("font-size", "30px");
      titleEl.setAttribute("font-family", "Roboto, sans-serif");
      titleEl.setAttribute("font-weight", "400");
      titleEl.setAttribute("fill", "#111");
    }
  }

  // ✅ 1) Run on renderFinished
  osmd.renderFinishedCallback = () => {
    const svg = musicDiv.querySelector("svg");
    styleTitle(svg);
  };

  // ✅ 2) Also run again shortly after to catch late-loaded text
  setTimeout(() => {
    const svg = musicDiv.querySelector("svg");
    styleTitle(svg);
  }, 300);

  // 🎵 Continue rest of setup
  noteEvents = extractNotesFromXML(cleanedXML);
  await mapXmlNotesToSvg();
  setupLoopControls();
  setupTempoSlider(bpm);
}


// ---------- Extract Notes ----------
function extractNotesFromXML(xmlText) {
  skipPitchedIdx = new Set();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");
  const divisions = parseFloat(xmlDoc.querySelector("divisions")?.textContent || "64");
  const allNotes = Array.from(xmlDoc.getElementsByTagName("note"));
  const events = [];
  let timeBeats = 0;
  const tieMap = new Map();
  let pitchedVisualIdx = 0;

  for (const n of allNotes) {
    const durDiv = parseFloat(n.querySelector("duration")?.textContent || "0");
    const durBeats = durDiv / divisions;
    const measure = parseInt(n.closest("measure")?.getAttribute("number") || "0", 10);

    if (n.querySelector("rest")) {
      events.push({ type: "rest", timeBeats, durBeats, measure });
      timeBeats += durBeats;
      continue;
    }

    const pitchNode = n.querySelector("pitch");
    if (!pitchNode) {
      timeBeats += durBeats;
      continue;
    }

    const step = pitchNode.querySelector("step")?.textContent;
    const alter = parseInt(pitchNode.querySelector("alter")?.textContent || "0", 10);
    const octave = parseInt(pitchNode.querySelector("octave")?.textContent || "4", 10);
    const midi = 12 * (octave + 1) + { C:0, D:2, E:4, F:5, G:7, A:9, B:11 }[step] + alter;
    const pitchKey = `${step}${alter}${octave}`;
    const tieStart = n.querySelector("tie[type='start'], tied[type='start']");
    const tieStop = n.querySelector("tie[type='stop'], tied[type='stop']");

    if (tieStart && !tieStop) {
      const entry = tieMap.get(pitchKey) || { startBeats: timeBeats, accBeats: 0 };
      entry.accBeats += durBeats;
      tieMap.set(pitchKey, entry);
      pitchedVisualIdx++;
    } else if (tieStart && tieStop) {
      const entry = tieMap.get(pitchKey) || { startBeats: timeBeats, accBeats: 0 };
      entry.accBeats += durBeats;
      events.push({
        type: "note",
        timeBeats: entry.startBeats,
        midiPitch: midi,
        durBeats: entry.accBeats,
        measure,
      });
      tieMap.delete(pitchKey);
      skipPitchedIdx.add(pitchedVisualIdx);
      pitchedVisualIdx++;
    } else if (!tieStart && tieStop) {
      const entry = tieMap.get(pitchKey);
      const startBeats = entry ? entry.startBeats : timeBeats - durBeats;
      const totalBeats = (entry ? entry.accBeats : 0) + durBeats;
      events.push({
        type: "note",
        timeBeats: startBeats,
        midiPitch: midi,
        durBeats: totalBeats,
        measure,
      });
      tieMap.delete(pitchKey);
      skipPitchedIdx.add(pitchedVisualIdx);
      pitchedVisualIdx++;
    } else {
      events.push({ type: "note", timeBeats, midiPitch: midi, durBeats, measure });
      pitchedVisualIdx++;
    }

    timeBeats += durBeats;
  }
  console.log(`🎼 Extracted ${events.length} events (beats-based).`);
  return events;
}

// ---------- SVG Mapping ----------
async function mapXmlNotesToSvg() {
  const svg = await waitForSVG();
  if (!svg) {
    console.warn("⚠️ No SVG found");
    svgNoteMap = [];
    return;
  }

  const allGroups = Array.from(svg.querySelectorAll("g.vf-stavenote[id]"));
  const stemQualified = allGroups.filter((g) =>
    svg.querySelector(`[id^="${CSS.escape(g.id)}-"]`)
  );

  const keptGroups = [];
  let pitchedIdx = 0;
  for (const g of stemQualified) {
    if (skipPitchedIdx.has(pitchedIdx)) {
      pitchedIdx++;
      continue;
    }
    keptGroups.push(g);
    pitchedIdx++;
  }

  const playableEvents = noteEvents.filter((e) => e.type === "note");
  const len = Math.min(keptGroups.length, playableEvents.length);
  svgNoteMap = [];
  for (let i = 0; i < len; i++) svgNoteMap.push({ event: playableEvents[i], group: keptGroups[i] });

  console.log(`🎯 Mapped ${svgNoteMap.length}/${playableEvents.length} notes to SVG.`);
}

// ---------- Highlighter ----------
function highlightNoteSequentialByEvent(eventObj) {
  document.querySelectorAll(".lit").forEach((el) => el.classList.remove("lit"));
  if (!eventObj) return;
  const mapItem = svgNoteMap.find((m) => m.event === eventObj);
  if (!mapItem) return;
  const group = mapItem.group;
  group.classList.add("lit");
  const stem = group.querySelector(".vf-stem");
  if (stem) stem.classList.add("lit");
}

// ---------- Loop Controls ----------
function setupLoopControls() {
  if (!osmd) return;
  const measureCount =
    osmd?.GraphicalMusicSheet?.measureList?.flat()?.length ||
    osmd?.GraphicSheet?.MeasureList?.flat()?.length ||
    0;

  startSel.innerHTML = "";
  endSel.innerHTML = "";
  for (let i = 1; i <= measureCount; i++) {
    startSel.add(new Option(i, i));
    endSel.add(new Option(i, i));
  }
  loopEndBar = measureCount;
  endSel.value = measureCount;
  startSel.value = loopStartBar;

  startSel.addEventListener("change", (e) => (loopStartBar = parseInt(e.target.value)));
  endSel.addEventListener("change", (e) => (loopEndBar = parseInt(e.target.value)));
  loopBox.addEventListener("change", (e) => (loopEnabled = e.target.checked));
}

// ---------- MIDI ----------
async function connectMIDIKeyboard() {
  if (!navigator.requestMIDIAccess) {
    status.innerText = "⚠️ Web MIDI not supported (use Chrome).";
    return;
  }
  const access = await navigator.requestMIDIAccess();
  for (let input of access.inputs.values()) input.onmidimessage = handleMIDI;
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

// ---------- Playback ----------
playBtn.addEventListener("click", async () => {
  Tone.Transport.bpm.value = bpm;
  if (Tone.context.state !== "running") await Tone.context.resume();
  await mapXmlNotesToSvg();
  Tone.Transport.stop();
  Tone.Transport.cancel();

  const selectedEvents = noteEvents.filter(
    (ev) => ev.measure >= loopStartBar && ev.measure <= loopEndBar
  );
  const playableEvents = selectedEvents.filter((ev) => ev.type === "note");
  if (!playableEvents.length) {
    status.innerText = "⚠️ No playable notes.";
    return;
  }

  const secPerBeat = 60 / bpm;
  const offset = playableEvents[0].timeBeats;
  playableEvents.forEach((ev) => {
    const startSec = (ev.timeBeats - offset) * secPerBeat;
    const durSec = ev.durBeats * secPerBeat;
    Tone.Transport.scheduleOnce((time) => {
      const freq = Tone.Frequency(ev.midiPitch, "midi").toFrequency();
      guitar.triggerAttackRelease(freq, durSec, time);
      highlightNoteSequentialByEvent(ev);
      lightKey(ev.midiPitch, "lightblue");
    }, startSec);
  });

  const last = playableEvents.at(-1);
  const totalDurSec = (last.timeBeats - offset + last.durBeats) * secPerBeat;
  if (loopEnabled) {
    Tone.Transport.scheduleOnce(() => playBtn.click(), totalDurSec + 0.1);
  } else {
    Tone.Transport.scheduleOnce(() => {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      highlightNoteSequentialByEvent(null);
      status.innerText = "✅ Playback complete.";
    }, totalDurSec + 0.2);
  }

  Tone.Transport.start("+0.05");
  status.innerText = loopEnabled
    ? `🔁 Looping bars ${loopStartBar}–${loopEndBar} at ${bpm} BPM...`
    : `🎶 Playing bars ${loopStartBar}–${loopEndBar} at ${bpm} BPM...`;
});

// ---------- Stop ----------
stopBtn.addEventListener("click", () => {
  Tone.Transport.stop();
  Tone.Transport.cancel();
  synthPiano.releaseAll();
  highlightNoteSequentialByEvent(null);
  status.innerText = "⏹ Stopped.";
});

// ---------- SVG Wait ----------
async function waitForSVG(maxMs = 1500) {
  const start = performance.now();
  while (performance.now() - start < maxMs) {
    const svg = document.querySelector("#music svg");
    if (svg && svg.querySelector(".vf-notehead")) return svg;
    await new Promise((r) => requestAnimationFrame(r));
  }
  return document.querySelector("#music svg");
}

// ---------- Tempo Slider ----------
function setupTempoSlider(defaultBpm = 120) {
  const slider = document.getElementById("tempoSlider");
  const display = document.getElementById("tempoValue");
  if (!slider || !display) return;
  bpm = defaultBpm;
  slider.value = bpm;
  display.textContent = `${bpm} BPM`;
  Tone.Transport.bpm.value = bpm;
  const apply = (val) => {
    bpm = parseInt(val, 10);
    display.textContent = `${bpm} BPM`;
    Tone.Transport.bpm.value = bpm;
    console.log(`🎚 Tempo now ${bpm} BPM`);
  };
  slider.addEventListener("input", (e) => apply(e.target.value));
  slider.addEventListener("change", (e) => apply(e.target.value));
}

// ---------- Go ----------
init();
