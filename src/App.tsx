import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import StoryHero from './components/StoryHero';
import MenuFlipbook from './components/MenuFlipbook';
import AboutTimeline from './components/AboutTimeline';
import Gallery from './components/Gallery';
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
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <Gallery />
        <ReservationCTA onReserveClick={() => scrollToSection('contact')} />
        <LocationAndFooter />
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/60166634376"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 md:bottom-6 left-6 z-40 p-4 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-xl shadow-green-900/50 hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-24 md:bottom-6 right-6 z-40 p-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-jade-950 border border-gold-300 shadow-xl shadow-jade-950/50 hover:shadow-gold-500/30 transition-all cursor-pointer active:scale-95 hidden md:block"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
      
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
