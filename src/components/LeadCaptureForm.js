import React, { useState } from 'react';
import { User, Phone, Mail, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function LeadCaptureForm({
  id = 'optin-form',
  variant = 'hero',
  onSuccess,
  buttonText = 'Give Me Instant Access',
  subText = 'Instant access • Short lessons • 30-day guarantee',
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save lead in localStorage for persistence
      try {
        const saved = JSON.parse(localStorage.getItem('piano_leads') || '[]');
        saved.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('piano_leads', JSON.stringify(saved));
      } catch (err) {
        console.error('Storage error', err);
      }

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Confetti fallback
      }

      if (onSuccess) {
        onSuccess(formData);
      }
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-500/40 rounded-2xl p-6 text-center animate-fade-in shadow-lg">
        <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">
          Access Granted, {formData.name.split(' ')[0]}!
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          We’ve prepared your Novice Foundations bundle. Your welcome materials and Lesson 1 link have been activated.
        </p>
        <button
          type="button"
          onClick={() => onSuccess && onSuccess(formData)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-transform active:scale-95 text-sm"
        >
          <span>Open My Member Portal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`w-full rounded-2xl transition-all ${
        variant === 'hero'
          ? 'bg-gradient-to-b from-slate-900 to-slate-950 text-white p-5 sm:p-7 shadow-2xl border border-slate-800'
          : variant === 'inline'
          ? 'bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-amber-400/40 text-slate-900'
          : 'bg-slate-900/95 text-white p-5 rounded-xl border border-slate-800'
      }`}
    >
      <div className="text-center mb-5">
        <h3
          className={`text-lg sm:text-xl font-extrabold tracking-tight ${
            variant === 'inline' ? 'text-slate-900' : 'text-white'
          }`}
        >
          Fill in your details to claim your access:
        </h3>
        <p
          className={`text-xs mt-1 ${
            variant === 'inline' ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          100% Free Special Launch Access • No Credit Card Required
        </p>
      </div>

      <div className="space-y-3.5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="e.g. David Adeyemi"
              className={`w-full pl-10 pr-3.5 py-3 rounded-xl text-sm font-medium transition-all outline-none ${
                variant === 'inline'
                  ? 'bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600/20'
                  : 'bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:bg-slate-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
              } ${errors.name ? 'border-red-500 ring-1 ring-red-500' : ''}`}
            />
          </div>
          {errors.name && (
            <p className="text-red-400 text-xs mt-1 font-medium">{errors.name}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              placeholder="e.g. +1 (555) 234-5678"
              className={`w-full pl-10 pr-3.5 py-3 rounded-xl text-sm font-medium transition-all outline-none ${
                variant === 'inline'
                  ? 'bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600/20'
                  : 'bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:bg-slate-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
              } ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : ''}`}
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1 font-medium">{errors.phone}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="e.g. david@churchmusic.com"
              className={`w-full pl-10 pr-3.5 py-3 rounded-xl text-sm font-medium transition-all outline-none ${
                variant === 'inline'
                  ? 'bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600/20'
                  : 'bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:bg-slate-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
              } ${errors.email ? 'border-red-500 ring-1 ring-red-500' : ''}`}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 font-medium">{errors.email}</p>
          )}
        </div>

        {/* Big High-Converting CTA Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold shadow-lg shadow-red-600/35 hover:shadow-xl hover:shadow-red-600/50 transform transition-all active:scale-[0.98] py-4 px-5 flex flex-col items-center justify-center border-t border-red-400/40 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-black tracking-wide uppercase">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Preparing Your Access...</span>
                </>
              ) : (
                <>
                  <span>{buttonText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-red-100 mt-1 opacity-90">
              {subText}
            </span>
          </button>
        </div>

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1 text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Your information is 100% secure. Zero spam guarantee.</span>
        </div>
      </div>
    </form>
  );
}
