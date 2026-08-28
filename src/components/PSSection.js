import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm.js';

export function PSSection({ onSuccess }) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* PS Box */}
        <div className="bg-white border-2 border-red-500/30 rounded-3xl p-6 sm:p-10 shadow-lg mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Personal Note From Daniel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-4">
            P.S.
          </h2>

          <div className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed space-y-4">
            <p>
              The difference between musicians who stay limited and those who grow is <strong className="text-slate-950">almost never talent</strong>.
            </p>
            <p>
              It’s having a clear starting point and the discipline to walk it. You now have the clear starting point.
            </p>
            <p className="font-bold text-slate-900 text-lg">
              Grab it before this launch window closes and start your first short lesson today.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-red-600 font-bold text-sm">
            <ArrowDown className="w-4 h-4 animate-bounce" />
            <span>Claim your spot below:</span>
          </div>
        </div>

        {/* Final Lead Capture Form */}
        <div className="max-w-xl mx-auto">
          <LeadCaptureForm
            id="bottom-optin-form"
            variant="hero"
            onSuccess={onSuccess}
            buttonText="Give Me Instant Access"
            subText="Instant access • Short lessons • 30-day guarantee"
          />
        </div>
      </div>
    </section>
  );
}
