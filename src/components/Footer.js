import React from 'react';
import { Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 text-white font-bold text-base">
          <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
            <Music className="w-4 h-4" />
          </div>
          <span>Dan’s PianoTube</span>
        </div>

        {/* Disclaimer */}
        <p className="max-w-2xl mx-auto text-slate-500 text-[11px] leading-relaxed">
          Results may vary depending on practice time, individual dedication, and consistency. Testimonials displayed represent real student experiences. This site is not a part of YouTube, Google, or Facebook.
        </p>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 font-medium">
          <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <span>•</span>
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#support" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
            Support: support@danspianotube.com
          </a>
          <span>•</span>
          <a href="#guarantee" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
            30-Day Guarantee Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-900 text-slate-500">
          <p>Copyright © 2026 Dan's PianoTube | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
