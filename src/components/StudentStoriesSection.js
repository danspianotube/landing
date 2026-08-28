import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { MORE_TESTIMONIALS } from '../data.js';

export function StudentStoriesSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-100 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wide mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-red-600" />
            <span>More Stories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 leading-tight mb-3">
            Everyday People Making Real Progress
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            From teenagers to working moms and busy business owners:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MORE_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all shadow-sm relative group"
            >
              <Quote className="w-8 h-8 text-slate-200 absolute top-4 right-4 group-hover:text-red-300 transition-colors" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  “{t.quote}”
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {t.story}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-red-500/40 shrink-0 shadow-sm"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {t.author}, {t.gender}, {t.age} yrs
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
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
