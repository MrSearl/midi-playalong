// ---------- Globals ----------
const Tone = window.Tone;
const OpenSheetMusicDisplay =
  window.opensheetmusicdisplay.OpenSheetMusicDisplay;

// ---------- Elements ----------
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
// const status = document.getElementById("status");
const musicDiv = document.getElementById("music");
const keyboard = document.getElementById("keyboard");
const pianoSlider = document.getElementById("pianoVol");
const guitarSlider = document.getElementById("guitarVol");
const startSel = document.getElementById("loopStart");
const endSel = document.getElementById("loopEnd");
const loopBtn = document.getElementById("loopBtn");

// ---------- Song List ----------
// You can easily update this list later (add/remove songs)
const songs = [
  { title: "Get Lucky Verse", path: "./src/assets/getluckyverse.xml" },

  { title: "Get Lucky Chorus", path: "./src/assets/getluckychorus.xml" },
  { title: "Three Little Birds", path: "./src/assets/threelittlebirds.xml" },
  { title: "When The Saints...", path: "./src/assets/saintsmelody.xml" },
  { title: "New World Chords", path: "./src/assets/newworldchords.xml" },
  { title: "The Final Countdown", path: "./src/assets/finalcountdown.xml" },
];

// ---------- Variables ----------
let osmd;
let synthPiano, guitar;
let pianoVol, guitarVol;
let noteEvents = [];
let svgNoteMap = [];
let bpm = 120;
let audioReady = false;
let currentIndex = 0;
let loopStartBar = 1;
let loopEndBar = 4;
let lastLitKey = null;
let loopEnabled = false;
let currentCleanedXML = "";


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

  // ---------- Spacebar Toggle ----------
  document.addEventListener("keydown", (e) => {
    // Ignore if typing in an input or textarea
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    if (e.code === "Space") {
      e.preventDefault(); // stop page from scrolling
      if (Tone.Transport.state === "started") {
        stopBtn.click(); // stop playback
      } else {
        playBtn.click(); // start playback
      }
    }
  });

  // status.innerText = "🎸 Loading instruments...";
  buildKeyboard(48, 84);
  await loadInstruments();
  await connectMIDIKeyboard();
  setupVolumeFaders();
  setupSongSelect();

  // await loadXMLFile(); // detects <sound tempo="">
  // setupTempoSelect(bpm);

  playBtn.disabled = false;
  // status.innerText = `✅ Ready (tempo ${bpm} BPM).`;
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
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
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

function unlightKey(midi) {
  const key = keyDivFor(midi);
  if (key) key.style.backgroundColor = "";
  if (lastLitKey === key) lastLitKey = null;
}

// ---------- Instruments ----------
// ---------- Instruments ----------
async function loadInstruments() {
  // 🎹 Piano volume & chain
  pianoVol = new Tone.Gain(0.8);
  synthPiano = new Tone.Sampler({
    urls: {
      A1: "A1.mp3",
      C2: "C2.mp3",
      C3: "C3.mp3",
      C4: "C4.mp3",
      C5: "C5.mp3",
    },
    baseUrl: "./src/assets/piano/", // 👈 now loads from your repo
    onload: () => console.log("🎹 Local piano loaded"),
  });
  synthPiano.connect(pianoVol);
  pianoVol.toDestination();

  // 🎸 Guitar volume & chain
  // 🎸 Full-range guitar (A1–G5) with missing notes removed
  const reverb = new Tone.Reverb({ decay: 3.5, wet: 0.15 });
  guitarVol = new Tone.Gain(0.3); // quieter on load

  guitar = new Tone.Sampler({
    urls: (() => {
      const notes = [
        "A1",
        "A#1",
        "B1",
        "C2",
        "C#2",
        "D2",
        "D#2",
        "E2",
        "F2",
        "G2", // removed F#2, G#2
        "A3",
        "A#3",
        "B3",
        "C3",
        "D3",
        "E3",
        "F3",
        "F#3",
        "G3", // removed C#3, D#3
        "A4",
        "A#4",
        "B4",
        "C4",
        "C#4",
        "D4",
        "D#4",
        "E4",
        "F4",
        "G4", // removed G#4
        "A5",
        "A#5",
        "B5",
        "C5",
        "C#5",
        "D5",
        "D#5",
        "E5",
        "F5",
        "F#5",
        "G5",
      ];
      const map = {};
      notes.forEach((n) => {
        const safeName = n.replace("#", "sharp");
        map[n] = `${safeName}.wav`;
      });
      return map;
    })(),
    baseUrl: "./src/assets/guit/full/",
    release: 1.8,
    attack: 0.02,
    curve: "exponential",
    onload: () =>
      console.log(
        "🎸 Full-range guitar loaded (missing F#2, G#2, C#3, D#3, G#4)"
      ),
  });

  // ✅ Proper signal chain
  guitar.connect(guitarVol);
  guitarVol.connect(reverb);
  reverb.toDestination();

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
async function loadXMLFile(filePath) {
  if (!filePath) return;

  const resp = await fetch(filePath);
  const xmlText = await resp.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");

  // Tempo
  const tempoNode = xmlDoc.querySelector("sound[tempo]");
  bpm = tempoNode ? parseFloat(tempoNode.getAttribute("tempo")) : 120;
  Tone.Transport.bpm.value = bpm;

  // Clean XML
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
  currentCleanedXML = cleanedXML;

  if (!osmd) {
    osmd = new OpenSheetMusicDisplay(musicDiv, {
      autoResize: true,
      drawTitle: true,
      drawPartNames: false,
      drawMeasureNumbers: true,
    });
  }

  await osmd.load(cleanedXML);
  await osmd.render();

  musicDiv.classList.remove("hidden");
  keyboard.classList.add("song-loaded");

  noteEvents = extractNotesFromXML(cleanedXML);
  await mapXmlNotesToSvg();

  setupLoopControls();
  setupTempoSelect(bpm);
}



// ---------- Extract Notes ----------
function extractNotesFromXML(xmlText) {

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");
  const divisions = parseFloat(
    xmlDoc.querySelector("divisions")?.textContent || "64"
  );

  const allNotes = Array.from(xmlDoc.getElementsByTagName("note"));
  const events = [];

  let timeBeats = 0;
  let lastBaseTime = 0;

  // Active ties keyed by midi pitch
  const activeTies = new Map();

  for (const n of allNotes) {
    const isChordTone = !!n.querySelector("chord");
    const durDiv = parseFloat(n.querySelector("duration")?.textContent || "0");
    const durBeats = durDiv / divisions;
    const measure = parseInt(
      n.closest("measure")?.getAttribute("number") || "0",
      10
    );

    // ---------- Rests ----------
    if (n.querySelector("rest")) {
      events.push({ type: "rest", timeBeats, durBeats, measure });
      timeBeats += durBeats;
      continue;
    }

    const pitchNode = n.querySelector("pitch");
    if (!pitchNode) {
      if (!isChordTone) timeBeats += durBeats;
      continue;
    }

    const step = pitchNode.querySelector("step")?.textContent;
    const alter = parseInt(
      pitchNode.querySelector("alter")?.textContent || "0",
      10
    );
    const octave = parseInt(
      pitchNode.querySelector("octave")?.textContent || "4",
      10
    );

    const midi =
      12 * (octave + 1) +
      { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[step] +
      alter;

    const tieStart = n.querySelector("tie[type='start'], tied[type='start']");
    const tieStop = n.querySelector("tie[type='stop'], tied[type='stop']");

    const startTime = isChordTone ? lastBaseTime : timeBeats;

    // ---------- Tie handling ----------
    if (tieStart && !tieStop) {
      // Start of a tie
      activeTies.set(midi, {
        type: "note",
        timeBeats: startTime,
        midiPitch: midi,
        durBeats,
        measure
      });

    } else if (tieStart && tieStop) {
      // Middle of a tie
      const ev = activeTies.get(midi);
      if (ev) ev.durBeats += durBeats;

      // Skip this rendered note visually

    } else if (tieStop) {
      // End of a tie
      const ev = activeTies.get(midi);
      if (ev) {
        ev.durBeats += durBeats;
        events.push(ev);
        activeTies.delete(midi);
      }

      // Skip this rendered note visually

    } else {
      // Normal untied note
      events.push({
        type: "note",
        timeBeats: startTime,
        midiPitch: midi,
        durBeats,
        measure
      });
    }

    // ---------- Advance time ----------
    if (!isChordTone) {
      lastBaseTime = timeBeats;
      timeBeats += durBeats;
    }
  }

  console.log(`🎼 Extracted ${events.length} events (ties merged, visuals aligned).`);
  return events;
}

function extractVisualOnsetsFromXML(xmlText) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");
  const divisions = parseFloat(
    xmlDoc.querySelector("divisions")?.textContent || "64"
  );

  const allNotes = Array.from(xmlDoc.getElementsByTagName("note"));

  let timeBeats = 0;
  let lastBaseTime = 0;

  const onsets = [];

  for (const n of allNotes) {
    const isChordTone = !!n.querySelector("chord");
    const durDiv = parseFloat(n.querySelector("duration")?.textContent || "0");
    const durBeats = durDiv / divisions;

    // rests advance time but still count as visual space
    if (n.querySelector("rest")) {
      timeBeats += durBeats;
      continue;
    }

    const pitchNode = n.querySelector("pitch");
    if (!pitchNode) {
      if (!isChordTone) timeBeats += durBeats;
      continue;
    }

    const tieStart = !!n.querySelector("tie[type='start'], tied[type='start']");
    const tieStop  = !!n.querySelector("tie[type='stop'],  tied[type='stop']");

    const startTime = isChordTone ? lastBaseTime : timeBeats;

    if (!isChordTone) {
      // New visual onset
      onsets.push({
        timeBeats: startTime,
        notes: [{ tieStart, tieStop }]
      });
      lastBaseTime = timeBeats;
      timeBeats += durBeats;
    } else {
      // Chord tone, attach to previous onset
      const last = onsets[onsets.length - 1];
      if (last) last.notes.push({ tieStart, tieStop });
    }
  }

  // Decide which onsets should be highlighted
  return onsets.map(o => {
    const hasNewOnset = o.notes.some(n =>
      // highlight if any note is a real onset
      !n.tieStop || (n.tieStart && !n.tieStop)
    );

    return {
      timeBeats: o.timeBeats,
      highlightable: hasNewOnset
    };
  });
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

  // Visual onsets in the same order OSMD prints them
if (!currentCleanedXML || !currentCleanedXML.includes("<note")) {
  console.warn("⚠️ No XML available for visual onset mapping");
  svgNoteMap = [];
  return;
}


const visualOnsets = extractVisualOnsetsFromXML(currentCleanedXML);

  // Filter out tie-continuation-only noteheads (but keep normal notes!)
  const highlightableSvg = stemQualified.filter((g, idx) => {
    const v = visualOnsets[idx];
    if (!v) return true; // fail-safe
    return v.highlightable;
  });

  // Playback onsets (your existing grouping from merged events)
  const playableEvents = noteEvents.filter((e) => e.type === "note");
  const groupedByTime = [];
  playableEvents.forEach((ev) => {
    const existing = groupedByTime.find(
      (g) => Math.abs(g.timeBeats - ev.timeBeats) < 1e-4
    );
    if (existing) existing.events.push(ev);
    else groupedByTime.push({ timeBeats: ev.timeBeats, events: [ev] });
  });

  svgNoteMap = highlightableSvg
    .slice(0, groupedByTime.length)
    .map((g, i) => ({
      eventGroup: groupedByTime[i],
      group: g
    }));

  console.log(
    `🎯 stemQualified=${stemQualified.length}, visualOnsets=${visualOnsets.length}, highlightableSvg=${highlightableSvg.length}, mapped=${svgNoteMap.length}`
  );
}






// ---------- Highlighter ----------
function highlightNoteSequentialByEvent(eventObj) {
  // Clear any previous highlights
  document.querySelectorAll(".lit").forEach((el) => el.classList.remove("lit"));
  if (!eventObj) return;

  // Find the matching group by its event time
  const mapItem = svgNoteMap.find(
    (m) => Math.abs(m.eventGroup.timeBeats - eventObj.timeBeats) < 1e-4
  );

  if (!mapItem) return;
  const group = mapItem.group;
  group.classList.add("lit");

  // Light all noteheads and stem in this stavenote
  group
    .querySelectorAll(".vf-notehead, .vf-stem")
    .forEach((el) => el.classList.add("lit"));
}

// ---------- Loop Controls ----------
function setupLoopControls() {
  if (!osmd) return;
  const measureCount =
    osmd?.GraphicalMusicSheet?.measureList?.flat()?.length ||
    osmd?.GraphicSheet?.MeasureList?.flat()?.length ||
    0;

  startSel.innerHTML = '<option value="" disabled selected>Start</option>';
  endSel.innerHTML = '<option value="" disabled selected>To End Of</option>';

  for (let i = 1; i <= measureCount; i++) {
    startSel.add(new Option(i, i));
    endSel.add(new Option(i, i));
  }

  loopEndBar = measureCount;
  endSel.value = measureCount;
  startSel.value = loopStartBar;

  startSel.addEventListener(
    "change",
    (e) => (loopStartBar = parseInt(e.target.value))
  );
  endSel.addEventListener(
    "change",
    (e) => (loopEndBar = parseInt(e.target.value))
  );
}

// ---------- MIDI ----------
async function connectMIDIKeyboard() {
  if (!navigator.requestMIDIAccess) {
    // status.innerText = "⚠️ Web MIDI not supported (use Chrome).";
    return;
  }
  const access = await navigator.requestMIDIAccess();
  for (let input of access.inputs.values()) input.onmidimessage = handleMIDI;
  // status.innerText = "✅ MIDI connected.";
}
function handleMIDI(event) {
  const [cmd, note, vel] = event.data;
  const freq = Tone.Frequency(note, "midi").toFrequency();

  const isNoteOn = cmd === 144 && vel > 0;
  const isNoteOff = cmd === 128 || (cmd === 144 && vel === 0);

  if (isNoteOn) {
    synthPiano.triggerAttack(freq);
    lightKey(note, "lightblue");
  } else if (isNoteOff) {
    synthPiano.triggerRelease(freq);
    unlightKey(note);
  }
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
  if (!playableEvents.length) return;

  const secPerBeat = 60 / bpm;
  const offset = playableEvents[0].timeBeats;

  // ---- Group notes by their onset time (for chords) ----
  const groupedByTime = [];
  playableEvents.forEach((ev) => {
    const existing = groupedByTime.find(
      (g) => Math.abs(g.timeBeats - ev.timeBeats) < 1e-4
    );
    if (existing) {
      existing.notes.push(ev);
    } else {
      groupedByTime.push({
        timeBeats: ev.timeBeats,
        durBeats: ev.durBeats,
        notes: [ev],
      });
    }
  });

  // ---- Track active notes to prevent early cutoff ----
  const activeNotes = new Set();

  groupedByTime.forEach((grp) => {
    const startSec = (grp.timeBeats - offset) * secPerBeat;
    const durSec = grp.durBeats * secPerBeat;

    Tone.Transport.scheduleOnce((time) => {
      grp.notes.forEach((n) => {
        const freq = Tone.Frequency(n.midiPitch, "midi").toFrequency();
        guitar.triggerAttack(freq, time);
        activeNotes.add(n.midiPitch);
        lightKey(n.midiPitch, "lightblue");
      });

      highlightNoteSequentialByEvent(grp.notes[0]);

      // schedule release without interrupting later same-pitch notes
      Tone.Transport.scheduleOnce(() => {
        grp.notes.forEach((n) => {
          // only release if still active
          if (activeNotes.has(n.midiPitch)) {
            const freq = Tone.Frequency(n.midiPitch, "midi").toFrequency();
            guitar.triggerRelease(freq);
            unlightKey(n.midiPitch);
            activeNotes.delete(n.midiPitch);
          }
        });
      }, startSec + durSec - 0.01); // small safety offset
    }, startSec);
  });

  // ---- Compute total duration for stop/reset ----
  const last = groupedByTime.at(-1);
  const totalDurSec = (last.timeBeats - offset + last.durBeats) * secPerBeat;

  if (loopEnabled) {
    Tone.Transport.scheduleOnce(() => playBtn.click(), totalDurSec + 0.1);
  } else {
    Tone.Transport.scheduleOnce(() => {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      highlightNoteSequentialByEvent(null);
      activeNotes.clear();
      document
        .querySelectorAll(".white-key, .black-key")
        .forEach((k) => (k.style.backgroundColor = ""));
    }, totalDurSec + 0.2);
  }

  Tone.Transport.start("+0.05");
  playBtn.classList.add("playing");
});

// ---------- Stop ----------
stopBtn.addEventListener("click", () => {
  Tone.Transport.stop();
  Tone.Transport.cancel();
  synthPiano.releaseAll();
  highlightNoteSequentialByEvent(null);
  // status.innerText = "⏹ Stopped.";
  playBtn.classList.remove("playing");
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
// ---------- Tempo Dropdown ----------
function setupTempoSelect(defaultBpm = 120) {
  const tempoSelect = document.getElementById("tempoSelect");
  if (!tempoSelect) return;

  // Populate dropdown with 40–200 BPM in 10-step increments
  tempoSelect.innerHTML = "";
  for (let bpmVal = 40; bpmVal <= 200; bpmVal += 10) {
    const opt = document.createElement("option");
    opt.value = bpmVal;
    opt.textContent = `${bpmVal} BPM`;
    tempoSelect.appendChild(opt);
  }

  // Set the default from XML tempo
  bpm = Math.round(defaultBpm / 10) * 10; // snap to nearest 10 for simplicity
  tempoSelect.value = bpm;
  Tone.Transport.bpm.value = bpm;

  // Update BPM live when changed
  tempoSelect.addEventListener("change", (e) => {
    bpm = parseInt(e.target.value, 10);
    Tone.Transport.bpm.value = bpm;
    console.log(`🎚 Tempo now ${bpm} BPM`);
  });
}

// ---------- Loop Button ----------
loopBtn.addEventListener("click", () => {
  loopEnabled = !loopEnabled;
  loopBtn.classList.toggle("loop-on", loopEnabled);
  loopBtn.classList.toggle("loop-off", !loopEnabled);
});

function setupSongSelect() {
  const songSelect = document.getElementById("songSelect");
  songSelect.innerHTML = "";

  // Placeholder first option
  const ph = document.createElement("option");
  ph.value = "";
  ph.textContent = "Choose a song…";
  ph.disabled = true;
  ph.selected = true;
  songSelect.appendChild(ph);

  // Populate from songs array
  songs.forEach((song) => {
    const opt = document.createElement("option");
    opt.value = song.path;
    opt.textContent = song.title;
    songSelect.appendChild(opt);
  });

  // Only load when user picks one
  songSelect.addEventListener("change", async (e) => {
    const selectedFile = e.target.value;
    console.log(`🎵 Loading: ${selectedFile}`);
    await loadXMLFile(selectedFile);
    tempoSelect.classList.remove("hidden");
  });
}

// function highlightChordGroup(notes) {
//   document.querySelectorAll(".lit").forEach((el) => el.classList.remove("lit"));
//   if (!notes || !notes.length) return;

//   // find all mapped SVG groups for these notes
//   notes.forEach((ev) => {
//     const mapItem = svgNoteMap.find((m) => m.event === ev);
//     if (!mapItem) return;
//     const group = mapItem.group;
//     group.classList.add("lit");
//     const stem = group.querySelector(".vf-stem");
//     if (stem) stem.classList.add("lit");
//   });
// }

// ---------- Go ----------
init();
