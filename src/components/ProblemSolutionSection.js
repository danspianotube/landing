import React from 'react';
import { AlertTriangle, CheckCircle, Compass, Flame } from 'lucide-react';
import { IMAGES } from '../data.js';

export function ProblemSolutionSection() {
  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* The Problem */}
        <div className="bg-red-50/70 border-2 border-red-200/80 rounded-3xl p-6 sm:p-10 mb-16 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-extrabold uppercase tracking-wide mb-4">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span>The Brutal Sunday Morning Reality</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 leading-tight mb-6">
            You’ve Done the Videos. You’ve Tried to Copy the Guys on Stage. <span className="text-red-600">Why Do You Still Feel Lost?</span>
          </h2>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <p className="font-semibold text-slate-900 text-lg">
              Let’s be honest.
            </p>
            <p>
              You’ve watched countless YouTube tutorials. You’ve tried to copy the runs and chords you hear on Sunday. You’ve even sat at the keys for hours hoping something would finally click.
            </p>
            <p>
              Yet when it’s time to play — whether in service or just practising at home — you still feel lost. The notes don’t stick. You don’t know what to practise next. And that quiet voice keeps whispering: <em>“Maybe I’m just not gifted enough.”</em>
            </p>
            <div className="bg-white p-5 rounded-2xl border-l-4 border-red-600 shadow-sm">
              <p className="font-bold text-slate-900">
                That feeling is NOT a talent problem. It’s a structure problem.
              </p>
              <p className="text-slate-600 text-sm mt-1">
                Most free contents throw random tips at you with zero clear path. One video teaches a fill. The next teaches a chord. None of them start at the real beginning and build properly. So you stay stuck in the same place, week after week, month after month.
              </p>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wide">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>The Clear Way Forward</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 leading-tight">
              This Is the Missing Structured Foundation
            </h2>

            <p className="text-slate-700 text-base leading-relaxed">
              The <strong className="text-slate-950 font-bold">Gospel & Jazz Piano Mastery Course – Novice Path</strong> is the clear starting point most church musicians never get.
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              Short, focused video lessons that walk you step-by-step from <em>“what is a piano note?”</em> all the way to playing simple melodies and major chords with real understanding — not just copying.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-800">
                  <strong className="font-bold">No overwhelm:</strong> No 3-hour practice marathons that die after three days.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Flame className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-800">
                  <strong className="font-bold">The Golden Rule:</strong> Just <strong>one short lesson + one focused hour of practice</strong>.
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm italic">
              This is how real progress happens when you have a job, a church commitment, and a life.
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-amber-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <img
                src={IMAGES.courseBundle}
                alt="Gospel and Jazz Piano Mastery Course - Novice Path Bundle"
                className="relative rounded-2xl shadow-2xl border border-slate-200 object-cover w-full bg-white transform hover:scale-[1.02] transition-transform duration-300"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
