import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/images/logo.png';

interface NavbarProps {
  onScrollToSection: (id: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'OUR STORY', id: 'about' },
    { name: 'MENU', id: 'menu' },
    { name: 'INFO', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md border-b border-jade-900/10 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center cursor-pointer" onClick={() => onScrollToSection('home')}>
            <img 
              src={logoImg} 
              alt="WAKi Logo" 
              className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onScrollToSection(link.id)}
                className="font-display text-xs font-bold tracking-widest text-jade-900/70 hover:text-jade-950 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => onScrollToSection('contact')}
              className="px-5 py-2 rounded bg-gold-500 text-jade-950 font-display font-bold text-xs tracking-widest hover:bg-gold-400 transition-colors shadow-sm cursor-pointer"
            >
              RESERVE
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-jade-950 hover:bg-jade-900/5 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-50 border-b border-jade-900/10 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    onScrollToSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left font-display text-sm font-bold tracking-widest text-jade-900/80 hover:text-jade-950 py-2 border-b border-jade-900/5"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onScrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-center mt-6 px-4 py-3 rounded bg-gold-500 text-jade-950 font-display font-bold text-sm tracking-widest shadow-sm"
              >
                RESERVE A TABLE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
