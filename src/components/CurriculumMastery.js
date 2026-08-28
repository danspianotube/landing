import React from 'react';
import { CheckCircle, Award, Heart } from 'lucide-react';
import { CURRICULUM_POINTS, DANIEL_CREDENTIALS } from '../data.js';
import { InteractivePianoWidget } from './InteractivePianoWidget.js';

export function CurriculumMastery() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200 text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wide mb-3">
            <span>The 8-Step Blueprint</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 leading-tight mb-3">
            Here’s Exactly What You’ll Master Inside the Novice Path
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            This is not another random collection of tips. This is a proper foundation laid in the correct order:
          </p>
        </div>

        {/* 8 Curriculum Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10">
          {CURRICULUM_POINTS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-red-400/50 transition-all flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                0{item.id}
              </div>
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-red-600 mb-1">
                  {item.badge}
                </span>
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Piano Demo embedded here */}
        <InteractivePianoWidget />

        {/* Who's Teaching This? Section */}
        <div className="mt-14 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-7 sm:p-10 text-white shadow-xl border border-slate-800">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wide mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Meet Your Instructor</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
              Who’s Teaching This?
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-6">
              This system was created by Daniel.
            </h3>

            {/* Credentials Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {DANIEL_CREDENTIALS.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-slate-800/70 p-3.5 rounded-xl border border-slate-700/60"
                >
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200">
                    {cred}
                  </span>
                </div>
              ))}
            </div>

            {/* Devotional / Grace Note */}
            <div className="bg-red-950/40 border border-red-800/60 rounded-2xl p-5 text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600/30 border border-red-500/40 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-red-400 fill-red-400/30" />
              </div>
              <div>
                <h4 className="font-extrabold text-amber-200 text-base mb-1">
                  All of it by the SPIRIT and Grace of GOD ALMIGHTY.
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  He didn’t build this from abstract textbook theory. He built it from real church services, real stages, and real years of helping musicians stop feeling stuck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
