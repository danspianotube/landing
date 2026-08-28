import React, { useState } from 'react';
import { Music, Volume2, Sparkles, HelpCircle } from 'lucide-react';
import { playPianoNote, playChord } from '../utils/audio.js';

const WHITE_KEYS = [
  { note: 'C4', label: 'C' },
  { note: 'D4', label: 'D' },
  { note: 'E4', label: 'E' },
  { note: 'F4', label: 'F' },
  { note: 'G4', label: 'G' },
  { note: 'A4', label: 'A' },
  { note: 'B4', label: 'B' },
  { note: 'C5', label: 'C5' },
];

const BLACK_KEYS = [
  { note: 'C#4', label: 'C#', left: '12.5%' },
  { note: 'D#4', label: 'D#', left: '25.0%' },
  { note: 'F#4', label: 'F#', left: '50.0%' },
  { note: 'G#4', label: 'G#', left: '62.5%' },
  { note: 'A#4', label: 'A#', left: '75.0%' },
];

const PRESET_CHORDS = [
  { name: 'C Major Triad (4 + 3)', notes: ['C4', 'E4', 'G4'], formula: 'C (Root) + 4 half steps = E + 3 half steps = G' },
  { name: 'F Major Triad (4 + 3)', notes: ['F4', 'A4', 'C5'], formula: 'F (Root) + 4 half steps = A + 3 half steps = C' },
  { name: 'G Major Triad (4 + 3)', notes: ['G4', 'B4', 'D5'], formula: 'G (Root) + 4 half steps = B + 3 half steps = D' },
];

export function InteractivePianoWidget() {
  const [activeNotes, setActiveNotes] = useState([]);
  const [activeExplanation, setActiveExplanation] = useState(
    'Click any key or select a triad preset to hear the 4+3 church formula in action.'
  );

  const handleKeyClick = (note) => {
    playPianoNote(note);
    setActiveNotes([note]);
    setActiveExplanation(`Single Note: ${note.replace('4', '').replace('5', '')} sounded.`);
  };

  const handlePlayChord = (chord) => {
    playChord(chord.notes);
    setActiveNotes(chord.notes);
    setActiveExplanation(`Church-Ready Triad: ${chord.formula}`);
  };

  return (
    <div className="my-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-400/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-wide mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Foundation Preview</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Lesson 5 In Action: The “4 + 3” Major Triad Formula
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Test the exact rule that creates bright, resonant, church-ready chords anywhere on the keyboard.
          </p>
        </div>

        {/* Quick Chord Buttons */}
        <div className="flex flex-wrap gap-2">
          {PRESET_CHORDS.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => handlePlayChord(c)}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-400 rounded-xl text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Music className="w-3.5 h-3.5" />
              <span>{c.name.split(' ')[0]} Triad</span>
            </button>
          ))}
        </div>
      </div>

      {/* Piano Keyboard Visual */}
      <div className="relative max-w-2xl mx-auto h-48 sm:h-56 bg-slate-950 p-2 sm:p-3 rounded-2xl border-4 border-slate-800 shadow-inner flex justify-center select-none overflow-hidden">
        <div className="relative w-full h-full">
          {/* White Keys */}
          <div className="flex w-full h-full">
            {WHITE_KEYS.map((k) => {
              const isHighlighted = activeNotes.includes(k.note);
              return (
                <button
                  key={k.note}
                  type="button"
                  onClick={() => handleKeyClick(k.note)}
                  className={`relative flex-1 h-full rounded-b-lg border-r border-slate-300 transition-all flex flex-col justify-end items-center pb-3 cursor-pointer ${
                    isHighlighted
                      ? 'bg-amber-400 text-slate-950 shadow-inner translate-y-1'
                      : 'bg-white hover:bg-slate-100 text-slate-700 active:bg-amber-200'
                  }`}
                >
                  <span className="text-xs font-bold font-mono pointer-events-none">
                    {k.label}
                  </span>
                  {isHighlighted && (
                    <span className="absolute top-2 w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Black Keys */}
          <div className="absolute inset-0 pointer-events-none">
            {BLACK_KEYS.map((k) => {
              const isHighlighted = activeNotes.includes(k.note);
              return (
                <button
                  key={k.note}
                  type="button"
                  onClick={() => handleKeyClick(k.note)}
                  style={{ left: k.left }}
                  className={`pointer-events-auto absolute top-0 h-28 sm:h-34 w-[7.8%] sm:w-[8.2%] -translate-x-1/2 rounded-b-md z-10 transition-all cursor-pointer flex flex-col justify-end items-center pb-2 shadow-md ${
                    isHighlighted
                      ? 'bg-red-600 text-white shadow-lg translate-y-1 ring-2 ring-amber-300'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border-x border-b border-black'
                  }`}
                >
                  <span className="text-[10px] font-bold font-mono">
                    {k.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Explanation Banner */}
      <div className="mt-4 bg-slate-950/80 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-mono">{activeExplanation}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
          <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Synthesized Web Audio</span>
        </div>
      </div>
    </div>
  );
}
