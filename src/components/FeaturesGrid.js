import React from 'react';
import { Video, CheckSquare, Calendar, Sparkles } from 'lucide-react';
import { IMAGES } from '../data.js';
import { LeadCaptureForm } from './LeadCaptureForm.js';

export function FeaturesGrid({ onSuccess }) {
  const features = [
    {
      icon: Video,
      title: 'Structured Lessons',
      desc: 'Full structured video lessons covering notes, keys, sharps & flats, half & whole steps, major scale formula, intervals, major triads, tonic, inversions, and simple melodies.',
      color: 'bg-red-50 text-red-600 border-red-200',
    },
    {
      icon: CheckSquare,
      title: 'Progress Checklist',
      desc: 'A progress checklist that keeps you informed of exactly where you are, what you’ve completed, and what you need to tackle next.',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      icon: Calendar,
      title: 'Daily Practice Plan',
      desc: 'Your exact daily practice plan—one short lesson plus one focused hour—so you’ll always know exactly what to practice next, without confusion or wasted time.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wide mb-3">
            <span>Instant Access Features</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 leading-tight mb-2">
            Here’s Everything You Get Instant Access To
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            This is the proper foundation that everything else in Gospel and Jazz playing is built on
          </p>
        </div>

        {/* 3 Main Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${feat.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Launch Access Callout Banner */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-yellow-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Limited Launch Window</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Special Launch Access
          </h3>
          <p className="text-base sm:text-lg text-red-50 max-w-2xl mx-auto leading-relaxed mb-4">
            A foundation system this clear would normally be priced at <strong>$147–$1,276</strong>. During this launch window you can get <strong>complete instant access for free</strong>.
          </p>
          <div className="inline-block bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold text-yellow-300">
            ⚠️ This special entry pricing is for the current launch group only. Once the next wave of students starts, the price returns to regular.
          </div>
        </div>

        {/* Fully Protected + Mid-Page Lead Capture Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <img
                src={IMAGES.guaranteeBadgeSmall}
                alt="Satisfaction Guarantee Badge"
                className="w-24 h-auto drop-shadow"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              You’re Fully Protected
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Complete the Novice section. If you don’t feel clearer on the keyboard and more confident playing basic scales and chords, simply let me know within 30 days and I’ll give you a full refund. The risk is entirely on me. <strong className="text-slate-900">You only lose if you stay stuck.</strong>
            </p>
            <div className="pt-2">
              <h4 className="text-lg font-bold text-slate-900">
                Start Your First Short Lesson Today
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                The musicians who progress the fastest are the ones who stop random YouTube scrolling and follow a clear path.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <LeadCaptureForm
              id="mid-page-optin-form"
              variant="inline"
              onSuccess={onSuccess}
              buttonText="Give Me Instant Access"
              subText="Instant access • Short lessons • 30-day guarantee"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
