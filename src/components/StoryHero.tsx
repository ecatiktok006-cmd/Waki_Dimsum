import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, UtensilsCrossed } from 'lucide-react';
import gatheringImg from '../assets/images/gathering.png';
import bgImg from '../assets/images/bg.png';

interface StoryHeroProps {
  onLearnMore: () => void;
  onExploreMenu: () => void;
  onOrderNow: () => void;
}

export default function StoryHero({ onLearnMore, onExploreMenu, onOrderNow }: StoryHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax and scale effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const circleScale = useTransform(scrollYProgress, [0, 1], [1, 2.8]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#FCFCFA] flex flex-col items-center justify-start pt-32"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      
      {/* Central Circular Background */}
      <motion.div 
        style={{ 
          scale: circleScale,
          x: "-50%",
          y: "-65%"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] rounded-full z-0 bg-[#F2F3F2] origin-center"
      />

      {/* Text Lockup */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-30 flex flex-col items-center text-center px-4 w-full max-w-5xl mt-8 sm:mt-12"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-[#1A1A1A] text-lg md:text-2xl font-bold tracking-wide mb-6"
        >
          Welcome to
        </motion.div>
        
        <div className="relative flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-[4rem] sm:text-[6rem] md:text-[7.5rem] font-bold text-[#D4AF37] tracking-tight leading-none z-10"
            style={{ textShadow: '1px 1px 0px rgba(255,255,255,1)' }}
          >
            Authentic
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
            className="font-script text-[5rem] sm:text-[8rem] md:text-[11rem] text-[#1A1A1A] leading-none absolute top-[25%] sm:top-[28%] z-20 w-[120%]"
            style={{ transform: 'rotate(-3deg)' }}
          >
            Malaysian
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-serif text-[4rem] sm:text-[6rem] md:text-[7.5rem] font-bold text-[#D4AF37] tracking-tight leading-none mt-8 sm:mt-12 md:mt-16 z-10"
            style={{ textShadow: '1px 1px 0px rgba(255,255,255,1)' }}
          >
            Flavours
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 sm:mt-16 z-20 flex items-center justify-center space-x-3 sm:space-x-6 w-full px-4"
        >
          {/* Left Line */}
          <div className="h-[1.5px] bg-jade-900/20 w-10 sm:w-16 md:w-24" />
          
          {/* Slogan Text */}
          <p className="font-sans text-[#2A3C35] text-xs sm:text-sm md:text-base font-extrabold tracking-[0.25em] sm:tracking-[0.35em] uppercase flex items-center whitespace-nowrap">
            <span>HANDMADE</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] mx-3 sm:mx-4 inline-block" />
            <span>HALAL</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] mx-3 sm:mx-4 inline-block" />
            <span>FRESHLY STEAM</span>
          </p>
          
          {/* Right Line */}
          <div className="h-[1.5px] bg-jade-900/20 w-10 sm:w-16 md:w-24" />
        </motion.div>
        
        {/* Call to Actions (Not strictly in the text area in original sketch, but we keep them accessible) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 flex items-center justify-center space-x-4 z-40"
        >
          <button 
            onClick={onOrderNow}
            className="px-6 py-3 bg-[#1A1A1A] hover:bg-black text-white font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded shadow-md"
          >
            Reserve Table
          </button>
          
          <button 
            onClick={onExploreMenu}
            className="group flex items-center px-6 py-3 bg-transparent border border-[#1A1A1A]/20 hover:border-[#D4AF37] text-[#1A1A1A] font-display font-bold text-xs tracking-widest uppercase transition-colors rounded"
          >
            <UtensilsCrossed className="w-4 h-4 mr-2 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-[#D4AF37] transition-colors">See Menu</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Illustrated Dining Group */}
      <motion.div 
        style={{ y: imageY }}
        className="relative w-full max-w-4xl mt-auto z-10 flex justify-center px-4 pt-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="w-full relative"
        >
          <img 
            src={gatheringImg} 
            alt="Family enjoying Dim Sum" 
            className="w-full h-[25vh] sm:h-[35vh] md:h-[45vh] object-cover object-top"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-jade-900/40" />
        </motion.div>
      </motion.div>

    </section>
  );
}

