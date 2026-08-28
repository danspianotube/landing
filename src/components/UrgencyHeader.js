import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';

export function UrgencyHeader() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num) => String(num).padStart(2, '0');

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-red-700 via-red-600 to-rose-700 text-white shadow-md border-b border-red-800/40">
      <div className="max-w-7xl mx-auto px-3 py-2 sm:py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm font-medium">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center justify-center p-1 rounded-full bg-white/20 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </span>
          <span>
            🚨 <strong className="font-bold text-yellow-200">Attention Church Musicians 🎹</strong>, aspiring Gospel keyboardists 🎶, and anyone tired of feeling stuck on the basics…
          </span>
        </div>

        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/15 text-xs font-mono shrink-0">
          <Clock className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
          <span className="text-white/80">Launch Access Closes:</span>
          <span className="font-bold text-amber-300">
            {format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </header>
  );
}
