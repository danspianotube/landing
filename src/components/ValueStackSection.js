import React from 'react';
import { Gift, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { VALUE_STACK, IMAGES } from '../data.js';
import { LeadCaptureForm } from './LeadCaptureForm.js';

export function ValueStackSection({ onSuccess }) {
  const totalValue = VALUE_STACK.reduce((acc, item) => acc + item.value, 0);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-red-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Value Stack Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Complete Value Stack</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            Everything You Get Inside the Novice Path
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium">
            When you claim your access today, you receive this entire stack:
          </p>
        </div>

        {/* The Value Items List */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl mb-12">
          <div className="space-y-4">
            {VALUE_STACK.map((item) => (
              <div
                key={item.number}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                    {item.number}
                  </div>
                  <span className="font-bold text-white text-sm sm:text-base">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Value:</span>
                  <span className="font-mono font-bold text-amber-400 text-base">
                    ${item.value}.00
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Fast Action Bonus Card */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-red-500/20 to-amber-500/20 border-2 border-amber-400/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wide">
                <Gift className="w-3.5 h-3.5" />
                <span>Fast Action Launch Bonus</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Exclusive Bonus: Advanced Price Strategies & Church Musician Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Unlock lifetime access to our high-level ministry preparation principles.
              </p>
            </div>
            <div className="shrink-0 text-center">
              <span className="text-xs text-slate-400 block uppercase">Bonus Value</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">
                $1,997.00
              </span>
              <span className="text-[11px] text-emerald-400 font-bold block mt-0.5">
                (Included Free Today)
              </span>
            </div>
          </div>

          {/* Price Breakdown / Total Value Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Total Real-World Value</span>
              <span className="text-2xl font-black text-slate-400 line-through font-mono">
                ${totalValue + 1997}.00
              </span>
            </div>

            <div className="text-center sm:text-right">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Today’s Launch Price:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight font-mono">
                  $0.00
                </span>
                <span className="text-xs text-slate-300 font-bold uppercase">
                  (100% Free Special Access)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 30-Day Guarantee Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 text-slate-900 shadow-2xl mb-12 border-4 border-amber-400/50 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="shrink-0 flex justify-center">
            <img
              src={IMAGES.guaranteeSeal}
              alt="30-Day 100% Money Back Guarantee"
              className="w-36 h-36 sm:w-44 sm:h-44 object-contain drop-shadow-lg"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wide">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero-Risk 30-Day Guarantee</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Try It for 30 Days. If It Doesn’t Give You Clarity, Keep Everything.
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We want you to experience real transformation at the piano with absolute peace of mind. Go through the lessons, practise the 4+3 triad formula, and test every concept at your church or home. If it doesn't give you total clarity, you lose nothing.
            </p>
          </div>
        </div>

        {/* Value Stack Lead Capture Form */}
        <div className="max-w-xl mx-auto">
          <LeadCaptureForm
            id="stack-optin-form"
            variant="inline"
            onSuccess={onSuccess}
            buttonText="Claim My Free Instant Access Now"
            subText="Instant access • Short lessons • 30-day guarantee"
          />
        </div>
      </div>
    </section>
  );
}
