import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import StoryHero from './components/StoryHero';
import MenuFlipbook from './components/MenuFlipbook';
import AboutTimeline from './components/AboutTimeline';
import CustomerReviews from './components/CustomerReviews';
import LocationAndFooter from './components/LocationAndFooter';
import ReservationCTA from './components/ReservationCTA';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70; 
      const topOfElement = el.getBoundingClientRect().top;
      const currentScrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const targetY = topOfElement + currentScrollPosition + yOffset;
      
      try {
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      } catch (err) {
        // Safe cross-platform fallback for sandboxed embeds and older mobile browsers
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-cream-50 font-sans text-jade-950 selection:bg-gold-500 selection:text-jade-950 overflow-x-hidden pb-16 md:pb-0">
      
      <Navbar onScrollToSection={scrollToSection} />

      <main>
        <StoryHero 
          onLearnMore={() => scrollToSection('about')} 
          onExploreMenu={() => scrollToSection('menu')} 
          onOrderNow={() => scrollToSection('contact')} 
        />
        <AboutTimeline />
        <div id="whats-cooking">
          <MenuFlipbook />
        </div>
        <CustomerReviews />
        <ReservationCTA onReserveClick={() => scrollToSection('contact')} />
        <LocationAndFooter />
      </main>

      {/* Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-24 md:bottom-22 right-6 z-40 p-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-jade-950 border border-gold-300 shadow-xl shadow-jade-950/50 hover:shadow-gold-500/30 transition-all cursor-pointer active:scale-95 hidden md:block"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/60166634376?text=Hi%20WAKI%20DIMSUM%2C%20I%20would%20like%20to%20make%20an%20enquiry."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-45 flex items-center justify-center p-3.5 md:px-5 md:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm tracking-wide shadow-xl shadow-green-600/30 transition-all hover:scale-105 active:scale-95 border border-[#1ebd53]/40"
        title="WhatsApp Us"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:mr-2 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="hidden md:inline">WhatsApp Us</span>
      </motion.a>
      
      {/* Mobile Sticky Reserve Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-cream-50/95 backdrop-blur border-t border-jade-900/10 z-50 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
        <button
          onClick={() => scrollToSection('contact')}
          className="w-full py-3 bg-gold-500 text-jade-950 font-bold tracking-widest rounded shadow-lg"
        >
          RESERVE A TABLE
        </button>
      </div>

    </div>
  );
}
