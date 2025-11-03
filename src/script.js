// ---------- Globals ----------
const Tone = window.Tone;
const OpenSheetMusicDisplay =
  window.opensheetmusicdisplay.OpenSheetMusicDisplay;

// UI
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const modeBtn = document.getElementById("modeBtn");
const statusEl = document.getElementById("status");
const musicDiv = document.getElementById("music");
const keyboard = document.getElementById("keyboard");

// Audio & state
let osmd;
let guitar, synthPiano;
let pianoGain, guitarGain;

let noteEvents = []; // [{time, midiPitch, durSec}]
let bpm = 120;
let audioReady = false;

let mode = "practice"; // "practice" | "playback"

let playbackStartTime = 0; // Tone.now() at start
let currentIndex = 0; // index into noteEvents while playing

// ---------- Boot ----------
init();

async function init() {
  // Unlock AudioContext on first user gesture
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

  status("🎸 Loading instruments…");
  buildKeyboard(48, 72); // C3..C5
  await loadInstruments();
  await connectMIDIKeyboard();
  await loadXMLAndRender();

  playBtn.disabled = false;
  status("✅ Ready. Choose a mode and press Play, or use your MIDI keyboard.");
}

// ---------- Status helper ----------
function status(msg) {
  statusEl.textContent = msg;
}

// ---------- Keyboard (div-based) ----------
function buildKeyboard(midiStart, midiEnd) {
  keyboard.innerHTML = "";
  for (let midi = midiStart; midi <= midiEnd; midi++) {
    const step = midi % 12;
    const isBlack = [1, 3, 6, 8, 10].includes(step);

    // wrap each white key in a group to position its sharp
    if (!isBlack) {
      const group = document.createElement("div");
      group.className = "key-group";

      const wk = document.createElement("div");
      wk.className = "white-key";
      wk.dataset.midi = String(midi);
      group.appendChild(wk);
      keyboard.appendChild(group);

      // attach black keys right after C, D, F, G, A
      const sharpMidi = midi + 1;
      const sharpStep = sharpMidi % 12;
      if ([1, 3, 6, 8, 10].includes(sharpStep) && sharpMidi <= midiEnd) {
        const bk = document.createElement("div");
        bk.className = "black-key";
        bk.dataset.midi = String(sharpMidi);
        // adjust left dynamically to sit between whites
        // default left is set in CSS; we can tweak here if needed
        group.appendChild(bk);
      }
    }
  }
}

function keyDivFor(midi) {
  return keyboard.querySelector(`[data-midi="${midi}"]`);
}

function lightKey(midi, kind) {
  const key = keyDivFor(midi);
  if (!key) return;
  key.classList.add(`highlight-${kind}`, "active");
  setTimeout(() => {
    key.classList.remove(`highlight-${kind}`, "active");
  }, 300);
}

// ---------- Instruments ----------
async function loadInstruments() {
  // Gains to Destination
  pianoGain = new Tone.Gain(Tone.dbToGain(-6)).toDestination();
  guitarGain = new Tone.Gain(Tone.dbToGain(-6)).toDestination();

  // Guitar = your SpeedY pack (pluck samples) — baseUrl must match your folder
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
  }).connect(guitarGain);

  // Salamander piano for MIDI input
  synthPiano = new Tone.Sampler({
    urls: {
      A1: "A1.mp3",
      C2: "C2.mp3",
      C3: "C3.mp3",
      C4: "C4.mp3",
      C5: "C5.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/salamander/",
    onload: () => console.log("🎹 Piano ready for MIDI input"),
  }).connect(pianoGain);

  await Tone.loaded();

  // Hook up faders
  document.getElementById("pianoVol").addEventListener("input", (e) => {
    const valDb = parseFloat(e.target.value);
    pianoGain.gain.value = Tone.dbToGain(valDb);
  });
  document.getElementById("guitarVol").addEventListener("input", (e) => {
    const valDb = parseFloat(e.target.value);
    guitarGain.gain.value = Tone.dbToGain(valDb);
  });
}

// ---------- MIDI ----------
async function connectMIDIKeyboard() {
  if (!navigator.requestMIDIAccess) {
    status("⚠️ Web MIDI not supported in this browser.");
    return;
  }
  const access = await navigator.requestMIDIAccess();
  for (const input of access.inputs.values()) {
    input.onmidimessage = handleMIDI;
  }
  status("✅ MIDI keyboard connected.");
}

function handleMIDI(evt) {
  const [cmd, note, vel] = evt.data;
  const isOn = cmd === 144 && vel > 0;
  const freq = Tone.Frequency(note, "midi").toFrequency();

  if (mode === "practice") {
    if (isOn) {
      // sound and light blue, no assessment
      synthPiano.triggerAttack(freq);
      lightKey(note, "blue");
    } else {
      synthPiano.triggerRelease(freq);
    }
  } else {
    // playback mode: user can play along; optional feedback (green/red)
    if (isOn) {
      synthPiano.triggerAttack(freq);
      // simple optional feedback: compare to current expected pitch ±0.25s
      const expected = noteEvents[currentIndex] || null;
      if (expected) {
        const now = Tone.now();
        const elapsed = now - playbackStartTime;
        const dt = Math.abs(elapsed - expected.time);
        if (note === expected.midiPitch && dt <= 0.25) {
          lightKey(note, "green");
        } else {
          lightKey(note, "red");
        }
      } else {
        lightKey(note, "red");
      }
    } else {
      synthPiano.triggerRelease(freq);
    }
  }
}

// ---------- MusicXML ----------
async function loadXMLAndRender() {
  try {
    const resp = await fetch("./src/assets/test.xml");
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const xmlText = await resp.text();

    osmd = new OpenSheetMusicDisplay(musicDiv, { autoResize: true });
    await osmd.load(xmlText);
    await osmd.render();

    noteEvents = extractNotesFromXML(xmlText);
    status(`✅ Score loaded – Tempo ${bpm} BPM`);
  } catch (err) {
    console.error(err);
    status("⚠️ Could not load ./src/assets/test.xml");
  }
}

function extractNotesFromXML(xmlText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "application/xml");

  const divisions = parseFloat(
    doc.querySelector("divisions")?.textContent || "64"
  );
  const tempoNode = doc.querySelector("sound[tempo]");
  bpm = tempoNode ? parseFloat(tempoNode.getAttribute("tempo")) : 120;
  const secPerQuarter = 60 / bpm;

  const xmlNotes = [...doc.getElementsByTagName("note")].filter(
    (n) => n.getElementsByTagName("pitch").length > 0
  );

  let timeSec = 0;
  const events = [];

  for (const n of xmlNotes) {
    const step = n.querySelector("step")?.textContent;
    const octave = parseInt(n.querySelector("octave")?.textContent || "4", 10);
    const durDiv = parseFloat(n.querySelector("duration")?.textContent || "0");

    const durQuarters = durDiv / divisions;
    const durSec = durQuarters * secPerQuarter;

    const midi = pitchToMidi(step, octave);
    events.push({ time: timeSec, midiPitch: midi, durSec });

    timeSec += durSec;
  }
  return events;
}

function pitchToMidi(step, octave) {
  const map = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  return 12 * (octave + 1) + map[step];
}

// ---------- Playback ----------
playBtn.addEventListener("click", async () => {
  if (mode !== "playback") {
    status("ℹ️ You’re in Practice Mode. Click “Practice Mode” to toggle.");
    return;
  }
  if (Tone.context.state !== "running") await Tone.context.resume();

  // schedule notes
  Tone.Transport.stop();
  Tone.Transport.cancel();

  const start = Tone.now() + 0.2;
  playbackStartTime = start;
  currentIndex = 0;

  noteEvents.forEach((ev, i) => {
    Tone.Transport.scheduleOnce((time) => {
      currentIndex = i; // advance pointer to this note
      const freq = Tone.Frequency(ev.midiPitch, "midi").toFrequency();
      guitar.triggerAttackRelease(freq, ev.durSec, time);
      // light keyboard in blue for expected note
      lightKey(ev.midiPitch, "blue");
    }, start + ev.time);
  });

  Tone.Transport.start();
  status(`🎶 Playing (Guitar) at ${bpm} BPM`);
});

stopBtn.addEventListener("click", () => {
  Tone.Transport.stop();
  Tone.Transport.cancel();
  status("⏹ Stopped.");
});

// ---------- Mode toggle ----------
modeBtn.addEventListener("click", () => {
  mode = mode === "practice" ? "playback" : "practice";
  modeBtn.textContent = mode === "practice" ? "Practice Mode" : "Playback Mode";
  status(
    mode === "practice"
      ? "🎹 Practice mode: play freely; keys light blue."
      : "🎼 Playback mode: guitar plays; expected keys light blue; your presses show green/red."
  );
});
