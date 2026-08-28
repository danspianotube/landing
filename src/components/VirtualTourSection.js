import React, { useState } from 'react';
import { Play, MonitorPlay, Music2, Headphones, Radio } from 'lucide-react';

export function VirtualTourSection({ onOpenOptin }) {
  const [activeTab, setActiveTab] = useState('studio');

  const views = {
    studio: {
      title: 'Main Masterclass Studio',
      desc: 'High-definition 4K multi-camera overhead rig capturing every finger motion, chord shape, and key illumination in crystal clarity.',
      icon: MonitorPlay,
      badge: '4K Multi-Cam View',
    },
    piano: {
      title: 'Grand Piano Acoustic Suite',
      desc: 'Concert-grade acoustics tuned specifically to capture gospel Hammond organ voicings, jazz extensions, and warm triad resonance.',
      icon: Music2,
      badge: 'Acoustic Suite',
    },
    soundboard: {
      title: 'Real-Time Key Visualizer',
      desc: 'Synchronized software overlays displaying exact chord formulas (e.g. 4+3 Triads, Inversions) in real-time as Daniel plays.',
      icon: Headphones,
      badge: 'Interactive Visualizer',
    },
  };

  const current = views[activeTab];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wide mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Behind The Scenes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-2">
            Explore Our Premises Through A Virtual Tour
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Press play below for a virtual walkthrough of Dan’s Gospel & Jazz Recording Studio
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-2 mb-6">
          {Object.keys(views).map((key) => {
            const Icon = views[key].icon;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{views[key].badge}</span>
              </button>
            );
          })}
        </div>

        {/* Video Simulation / Interactive Stage Screen */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-950 aspect-video max-w-4xl mx-auto flex flex-col justify-between p-6 group">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10 pointer-events-none" />

          {/* YouTube Video Background */}
          <div className="absolute inset-0 z-0">
            <iframe
              title="Virtual Tour Preview"
              src="https://www.youtube-nocookie.com/embed/0hY6MPhi-7U?autoplay=1&mute=1&loop=1&playlist=0hY6MPhi-7U&controls=0&showinfo=0&rel=0"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
              allow="autoplay; encrypted-media"
            />
          </div>

          {/* Top Stage Badge */}
          <div className="relative z-20 flex justify-between items-start">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs font-mono text-yellow-300">
              ● LIVE STUDIO FEED • {current.badge}
            </div>
            <div className="bg-red-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
              HD 4K 60FPS
            </div>
          </div>

          {/* Center Play Pulse */}
          <div className="relative z-20 flex justify-center items-center my-auto">
            <button
              type="button"
              onClick={onOpenOptin}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group-hover:ring-8 ring-red-500/30 cursor-pointer"
              aria-label="Claim Free Trial"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
            </button>
          </div>

          {/* Bottom Card Overlay */}
          <div className="relative z-20 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-0.5">
                {current.title}
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                {current.desc}
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenOptin}
              className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-md shrink-0 transition-transform active:scale-95 cursor-pointer"
            >
              Claim My Free Trial!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
