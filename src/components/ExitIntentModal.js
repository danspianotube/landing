import React from 'react';
import { X, AlertCircle } from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm.js';

export function ExitIntentModal({ isOpen, onClose, onSuccess }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-scale-in">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Warning Banner */}
        <div className="bg-gradient-to-r from-red-600 to-rose-600 px-6 py-4 text-white text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-yellow-200 mb-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Wait! Before You Leave…</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Claim Your 100% Free Novice Path Access!
          </h2>
          <p className="text-xs sm:text-sm text-red-100 mt-1">
            The launch window closes tonight. Don't go back to random YouTube videos.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6">
          <LeadCaptureForm
            id="exit-modal-form"
            variant="inline"
            onSuccess={(lead) => {
              if (onSuccess) onSuccess(lead);
              onClose();
            }}
            buttonText="Yes, Give Me Free Instant Access!"
            subText="Instant access • Short lessons • 30-day guarantee"
          />
        </div>
      </div>
    </div>
  );
}
