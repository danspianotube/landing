import React from 'react';
import { ShieldCheck, Award, Users } from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm.js';
import { HERO_HEADLINE, HERO_SUBHEADLINE } from '../data.js';

export function HeroSection({ onSuccess }) {
  return (
    <section className="relative pt-6 pb-14 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden border-b border-slate-200">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-red-500/5 via-amber-500/5 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <span>✨ Special Free Launch Access</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-4">
            {HERO_HEADLINE}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            {HERO_SUBHEADLINE}
          </p>
        </div>

        {/* Video & Form 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: YouTube Video Showcase */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-white aspect-video group">
              <iframe
                title="Gospel and Jazz Piano Mastery - Novice Path Video"
                src="https://www.youtube-nocookie.com/embed/0hY6MPhi-7U?autoplay=1&mute=0&rel=0&modestbranding=1&controls=1&showinfo=0"
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Subtitle & Trust Points */}
            <div className="w-full mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-red-600" />
                <span className="font-semibold text-slate-800">15+ Yrs Church Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-red-600" />
                <span className="font-semibold text-slate-800">10,000+ Audience Platforms</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-800">30-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Lead Capture Form */}
          <div className="lg:col-span-5 w-full">
            <LeadCaptureForm
              id="hero-optin-form"
              variant="hero"
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
