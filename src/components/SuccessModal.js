import React from 'react';
import { CheckCircle2, X, Download, Play, Key, Sparkles } from 'lucide-react';

export function SuccessModal({ lead, onClose }) {
  if (!lead) return null;

  const firstName = (lead.name && lead.name.split(' ')[0]) || 'Friend';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex p-3 rounded-full bg-white/20 mb-3 shadow-inner">
            <CheckCircle2 className="w-8 h-8 text-yellow-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Welcome to the Novice Path, {firstName}!
          </h2>
          <p className="text-sm text-red-100 mt-1 max-w-lg mx-auto">
            Your instant access pass to Dan’s <strong>Gospel & Jazz Piano Mastery: Novice Foundations</strong> is now active.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Status Box */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 text-slate-800 text-sm">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-emerald-900">
                Member ID Activated: <span className="font-mono text-xs bg-emerald-100 px-2 py-0.5 rounded text-emerald-800">DAN-PIANO-{Math.floor(100000 + Math.random() * 900000)}</span>
              </p>
              <p className="text-xs text-emerald-700 mt-0.5">
                We sent a backup direct link and login key to <strong>{lead.email}</strong>.
              </p>
            </div>
          </div>

          {/* Quick Start Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Download Checklist */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Printable Checklist</h4>
                  <p className="text-xs text-slate-500">PDF Guide & 4+3 Triad Cheatsheet</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  const blob = new Blob([
                    `GOSPEL & JAZZ PIANO MASTERY - NOVICE FOUNDATIONS CHECKLIST\nStudent: ${lead.name}\nEmail: ${lead.email}\n\nLESSON CHECKLIST:\n[ ] Lesson 1: Black and White Key Pattern (Name any note in seconds)\n[ ] Lesson 2: Sharps & Flats One-Step Rule\n[ ] Lesson 3: Half-Step / Whole-Step Master Secret\n[ ] Lesson 4: Major Scale Formula (W-W-H-W-W-W-H)\n[ ] Lesson 5: 4 + 3 Major Triad Formula (Instant Church Chords)\n[ ] Lesson 6: The Tonic "Home Note" Resolution Secret\n[ ] Lesson 7: Root, 1st & 2nd Inversions\n[ ] Lesson 8: Soulful Gospel Melodies in Service\n\nDaily Practice Rule: 1 Short Lesson + 1 Focused Hour.\nGod Bless Your Musical Calling!`,
                  ], { type: 'text/plain;charset=utf-8' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `Novice_Path_Checklist_${firstName}.txt`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  setTimeout(() => URL.revokeObjectURL(url), 1000);
                }}
                className="w-full py-2 px-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download My Checklist</span>
              </button>
            </div>

            {/* Start Lesson 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Play className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Lesson 1: Key Patterns</h4>
                  <p className="text-xs text-slate-500">12 min video • Immediate stream</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onClose();
                }}
                className="w-full py-2 px-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Watch Lesson 1 Now</span>
              </button>
            </div>
          </div>

          {/* Value Summary Box */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-900 text-white">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5" />
              <span>Included In Your Free Access</span>
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Complete Structured Video Lesson Series ($147 Value)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Exact 1-Hour Daily Practice Plan ($67 Value)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Instant Clarity System & Progress Trackers ($97 Value)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Fast Action Bonus: Advanced Price Strategies Training ($1,997 Value)
              </li>
            </ul>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition-colors text-center cursor-pointer"
          >
            Continue Browsing Landing Page
          </button>
        </div>
      </div>
    </div>
  );
}
