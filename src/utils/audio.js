// Web Audio Synthesizer for piano tones & gospel chord demo
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

const NOTE_FREQS = {
  'C4': 261.63,
  'C#4': 277.18,
  'D4': 293.66,
  'D#4': 311.13,
  'E4': 329.63,
  'F4': 349.23,
  'F#4': 369.99,
  'G4': 392.00,
  'G#4': 415.30,
  'A4': 440.00,
  'A#4': 466.16,
  'B4': 493.88,
  'C5': 523.25,
  'D5': 587.33,
  'E5': 659.25,
  'F5': 698.46,
  'G5': 783.99,
};

export function playPianoNote(noteName, duration = 1.2) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const freq = NOTE_FREQS[noteName] || 440;
    const now = ctx.currentTime;

    // Harmonic synthesis for warm, acoustic piano-like timber
    const fundamental = ctx.createOscillator();
    const overtone1 = ctx.createOscillator();
    const overtone2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    fundamental.type = 'triangle';
    fundamental.frequency.setValueAtTime(freq, now);

    overtone1.type = 'sine';
    overtone1.frequency.setValueAtTime(freq * 2, now);

    overtone2.type = 'sine';
    overtone2.frequency.setValueAtTime(freq * 3, now);

    // Piano attack and exponential decay envelope
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.4, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.18, now + 0.3);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    fundamental.connect(gainNode);
    overtone1.connect(gainNode);
    overtone2.connect(gainNode);
    gainNode.connect(ctx.destination);

    fundamental.start(now);
    overtone1.start(now);
    overtone2.start(now);

    fundamental.stop(now + duration);
    overtone1.stop(now + duration);
    overtone2.stop(now + duration);
  } catch (e) {
    // Audio Context might be blocked until user gesture
  }
}

export function playChord(notes) {
  if (!Array.isArray(notes)) return;
  notes.forEach((note, index) => {
    setTimeout(() => {
      playPianoNote(note, 2.0);
    }, index * 35);
  });
}
