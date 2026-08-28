import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TOP_TESTIMONIALS } from '../data.js';

export function TestimonialsRow() {
  return (
    <section className="py-14 sm:py-16 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Verified Student Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Real Church Musicians Who Stopped Feeling Stuck
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOP_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition-all shadow-xl relative group"
            >
              <Quote className="w-8 h-8 text-red-500/20 absolute top-4 right-4 group-hover:text-red-500/40 transition-colors" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Bold Headline Quote */}
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  “{t.quote}”
                </h3>

                {/* Body Story */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {t.story}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700/60">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-500/60 shrink-0 shadow-md"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {t.author}, {t.gender}, {t.age} yrs
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
