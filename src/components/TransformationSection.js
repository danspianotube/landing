import React from 'react';
import { Eye, Clock, ShieldCheck, Zap } from 'lucide-react';

export function TransformationSection() {
  const shifts = [
    {
      icon: Eye,
      title: '1. You finally understand the keyboard instead of guessing',
      desc: 'No more memorizing finger shapes blindly. You will look at any octave on the piano and immediately see the notes, half steps, whole steps, and root keys with complete clarity.',
      color: 'text-amber-600 bg-amber-100',
    },
    {
      icon: Clock,
      title: '2. You know exactly what to practise for one focused hour',
      desc: 'After each short lesson, you have an exact 1-hour structured practice blueprint. No more aimless doodling or wasted hours wondering what to play next.',
      color: 'text-blue-600 bg-blue-100',
    },
    {
      icon: ShieldCheck,
      title: '3. You gain quiet, unshakeable musical confidence',
      desc: 'The next time you sit at the keyboard on Sunday morning or during band practice, you’re not hoping or praying you don’t hit a bad note… you’re ready.',
      color: 'text-emerald-600 bg-emerald-100',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wide mb-3">
            <Zap className="w-3.5 h-3.5 text-red-600" />
            <span>The Transformation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 leading-tight mb-4">
            What Changes When You Finally Have a Real Foundation?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            When you go through this Novice Path properly, three pivotal things happen:
          </p>
        </div>

        {/* 3 Shifts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {shifts.map((shift, i) => {
            const Icon = shift.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${shift.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {shift.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {shift.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conclusion Callout */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-6 sm:p-8 text-center shadow-lg max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl font-extrabold leading-snug">
            “This is the difference between <span className="text-yellow-200">‘I kind of know some chords’</span> and <span className="underline decoration-yellow-300 decoration-2">‘I actually understand what I’m doing.’</span>”
          </p>
        </div>
      </div>
    </section>
  );
}
