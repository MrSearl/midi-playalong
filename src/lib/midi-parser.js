// ---------- midi-parser.js (fixed wrapper for Parcel) ----------

// Import the real implementation
import * as parser from "./main.js";

// Attach to window (so the library behaves like upstream)
if (typeof window !== "undefined") {
  window.MidiParser = parser.MidiParser || parser.default || parser;
}

// Export for ES-module consumers
const MidiParser =
  window.MidiParser || parser.MidiParser || parser.default || parser;
export { MidiParser };
export default MidiParser;
