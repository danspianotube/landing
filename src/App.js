import React, { useState, useEffect } from 'react';
import { UrgencyHeader } from './components/UrgencyHeader.js';
import { HeroSection } from './components/HeroSection.js';
import { TestimonialsRow } from './components/TestimonialsRow.js';
import { ProblemSolutionSection } from './components/ProblemSolutionSection.js';
import { CurriculumMastery } from './components/CurriculumMastery.js';
import { TransformationSection } from './components/TransformationSection.js';
import { ValueStackSection } from './components/ValueStackSection.js';
import { StudentStoriesSection } from './components/StudentStoriesSection.js';
import { FeaturesGrid } from './components/FeaturesGrid.js';
import { VirtualTourSection } from './components/VirtualTourSection.js';
import { PSSection } from './components/PSSection.js';
import { Footer } from './components/Footer.js';
import { SuccessModal } from './components/SuccessModal.js';
import { ExitIntentModal } from './components/ExitIntentModal.js';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [activeLead, setActiveLead] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [hasTriggeredExit, setHasTriggeredExit] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Handle lead submission
  const handleLeadSuccess = (lead) => {
    setActiveLead(lead);
    setIsSuccessModalOpen(true);
    setIsExitModalOpen(false);
  };

  // Exit intent and scroll detection
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 10 && !hasTriggeredExit && !isSuccessModalOpen && !activeLead) {
        setIsExitModalOpen(true);
        setHasTriggeredExit(true);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggeredExit, isSuccessModalOpen, activeLead]);

  const scrollToHeroForm = () => {
    const el = document.getElementById('hero-optin-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-['Work_Sans',sans-serif]">
      {/* 1. Urgency Alert Header Bar */}
      <UrgencyHeader />

      <main className="flex-grow">
        {/* 2. Hero Section with Video & Lead Capture */}
        <HeroSection onSuccess={handleLeadSuccess} />

        {/* 3. Top Testimonials Row */}
        <TestimonialsRow />

        {/* 4. Problem & Solution Core */}
        <ProblemSolutionSection />

        {/* 5. 8-Step Blueprint + Interactive Piano + Instructor Bio */}
        <CurriculumMastery />

        {/* 6. The 3 Transformation Shifts */}
        <TransformationSection />

        {/* 7. Full Value Stack ($472 Value for $0) + 30-Day Guarantee */}
        <ValueStackSection onSuccess={handleLeadSuccess} />

        {/* 8. Additional Student Testimonials */}
        <StudentStoriesSection />

        {/* 9. Features Grid + Mid-page Opt-in */}
        <FeaturesGrid onSuccess={handleLeadSuccess} />

        {/* 10. Virtual Studio Tour */}
        <VirtualTourSection onOpenOptin={() => setIsExitModalOpen(true)} />

        {/* 11. P.S. Closing & Final Lead Capture Form */}
        <PSSection onSuccess={handleLeadSuccess} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Sticky Bottom Bar on Scroll */}
      {showStickyBar && !isSuccessModalOpen && !isExitModalOpen && (
        <div className="fixed bottom-0 inset-x-0 z-30 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 sm:py-3.5 shadow-2xl transition-all animate-fade-in">
          <div className="max-w-5xl mx-auto px-3 flex items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-2.5 text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <p className="text-xs font-bold text-yellow-300">
                  Special Launch Window Active ($0 Today)
                </p>
                <p className="text-[11px] text-slate-300">
                  Gospel & Jazz Piano Mastery: Novice Foundations
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={scrollToHeroForm}
                className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-600/30 uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Get Instant Free Access</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      {isSuccessModalOpen && (
        <SuccessModal
          lead={activeLead}
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}

      <ExitIntentModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
        onSuccess={handleLeadSuccess}
      />
    </div>
  );
}
