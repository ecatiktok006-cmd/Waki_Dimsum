import { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { Check } from 'lucide-react';

import aboutIngredients from '../assets/images/about_ingredients_1783567499817.jpg';
import aboutSteam from '../assets/images/about_steam_1783567485399.jpg';
import gatheringImg from '../assets/images/gathering.png';
import aboutPlatter from '../assets/images/about_platter_1783567469486.jpg';
import heroDimSum from '../assets/images/hero_dim_sum_1783567454638.jpg';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image: string;
  stats?: { value: string; label: string }[];
  promises?: string[];
  closing?: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 2021,
    title: "A Passion for Authentic Dim Sum",
    description: "WAKi was founded with one simple mission: to serve authentic handmade dim sum that families and friends can enjoy together. Inspired by traditional recipes and Malaysian hospitality, every dish begins with care and craftsmanship.",
    image: aboutIngredients,
  },
  {
    year: 2022,
    title: "First Kitchen Established",
    description: "From our earliest days, we focused on making our dim sum by hand using fresh, quality ingredients. Rather than taking shortcuts, we believe every fold, every filling, and every steam basket should reflect our commitment to quality.",
    image: aboutSteam,
  },
  {
    year: 2023,
    title: "Welcoming More Families",
    description: "Growing community support inspired WAKi to expand its dining experience while preserving the same handmade quality. We became a destination where families celebrate, friends reconnect, and memories are created.",
    image: gatheringImg,
  },
  {
    year: 2024,
    title: "Perfecting Every Bite",
    description: "Our kitchen and production expanded, but one thing never changed—every dumpling is still handcrafted with care and precision.",
    image: aboutPlatter,
  },
  {
    year: 2025,
    title: "A Fresh Brand Identity",
    description: "WAKi introduced a refreshed visual identity while staying true to our original philosophy—bringing people together through authentic dim sum.",
    image: heroDimSum,
  },
  {
    year: 2026,
    title: "Growing Into the Future",
    description: "Today, WAKi continues to innovate, serve, and create memorable dining experiences while honoring the craftsmanship that started it all.",
    image: gatheringImg,
    promises: [
      "Handmade with care",
      "Fresh ingredients every day",
      "Warm Malaysian hospitality",
      "Delicious food worth sharing"
    ]
  }
];

const TIMELINE_NODES = [
  { year: 2021, x: 150, y: 300, cardPos: 'bottom' as const },
  { year: 2022, x: 400, y: 550, cardPos: 'top' as const },
  { year: 2023, x: 650, y: 250, cardPos: 'bottom' as const },
  { year: 2024, x: 900, y: 600, cardPos: 'top' as const },
  { year: 2025, x: 1150, y: 200, cardPos: 'bottom' as const },
  { year: 2026, x: 1400, y: 400, cardPos: 'bottom' as const },
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-24 bg-[#Fdfbf7] relative overflow-hidden" ref={containerRef}>
      
      {/* Background decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5f1e8] via-[#Fdfbf7] to-[#Fdfbf7] opacity-50 z-0 pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12 flex flex-col items-center"
        >
          <span className="font-display text-jade-950/60 font-bold tracking-[0.3em] text-xs uppercase mb-4 block text-center">
            Our Journey
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-jade-950 leading-tight mb-4 flex flex-col items-center justify-center">
            <span>The Journey of</span>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="text-jade-900 italic font-medium">WAKi</span> 
              <span className="bg-red-800 text-white text-sm md:text-base px-2 py-1 rounded-sm shadow-md inline-flex flex-col items-center justify-center transform -translate-y-1 md:-translate-y-2">
                <span className="font-bold">点</span>
                <span className="font-bold">心</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-jade-900/60 font-sans font-bold pt-2 md:pt-4">Dim Sum</span>
            </div>
          </h2>
          <p className="font-sans text-jade-900/80 text-lg max-w-md leading-relaxed font-medium text-center mt-2">
            From a humble kitchen to your table, every step of our journey is filled with passion, craftsmanship and the love of our community.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Area for Timeline */}
      <div className="w-full overflow-x-auto overflow-y-visible no-scrollbar pb-32 pt-10">
        <div className="relative w-[1600px] h-[800px] mx-auto px-10">
          
          {/* Wavy SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 text-[#1a3826]" viewBox="0 0 1600 800" preserveAspectRatio="none">
            {/* Main Path */}
            <motion.path 
              d="M 0 300 C 75 300, 75 300, 150 300 C 275 300, 275 550, 400 550 C 525 550, 525 250, 650 250 C 775 250, 775 600, 900 600 C 1025 600, 1025 200, 1150 200 C 1275 200, 1275 400, 1400 400 C 1500 400, 1600 400, 1600 400"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Nodes and Cards */}
          {TIMELINE_EVENTS.map((event, index) => {
            const node = TIMELINE_NODES[index];
            const isRotatedRight = index % 2 === 0;
            return (
              <div key={event.year} className="absolute" style={{ left: node.x, top: node.y }}>
                
                {/* Node Circle */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  className="absolute w-12 h-12 rounded-full bg-[#1a3826] border-[8px] border-[#Fdfbf7] ring-[3px] ring-[#d35400] shadow-md z-20 transform -translate-x-1/2 -translate-y-1/2" 
                />

                {/* Year Text */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 + 0.2 }}
                  className={`absolute font-serif text-5xl text-[#1a3826] font-bold ${node.cardPos === 'bottom' ? 'bottom-full mb-6' : 'top-full mt-6'} transform -translate-x-1/2 whitespace-nowrap z-10`}
                >
                  {event.year}
                </motion.div>

                {/* Polaroid Card */}
                <motion.div
                  initial={{ opacity: 0, y: node.cardPos === 'bottom' ? 20 : -20, rotate: -3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: isRotatedRight ? 2 : -2 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 + 0.4, duration: 0.6 }}
                  className={`absolute w-[280px] bg-[#Fdfbf7] p-4 pb-8 rounded-sm shadow-[0_8px_20px_rgb(0,0,0,0.08)] border border-jade-900/5 z-10 transform -translate-x-1/2 ${
                    node.cardPos === 'bottom' ? 'top-14' : 'bottom-14'
                  } hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_15px_40px_rgb(0,0,0,0.12)] transition-all duration-300 cursor-default`}
                >
                  {/* Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#e6dfcf] opacity-90 rotate-[-4deg] shadow-sm z-20" />
                  
                  <motion.img 
                    src={event.image} 
                    alt={event.title} 
                    initial={{ filter: 'grayscale(100%)' }}
                    whileInView={{ filter: 'grayscale(0%)' }}
                    viewport={{ margin: "0px -40% 0px -40%", once: false }}
                    transition={{ duration: 1 }}
                    className="w-full h-[180px] object-cover mb-5 rounded-[2px]" 
                  />
                  
                  <h4 className="font-serif text-[1.35rem] font-bold text-[#1a3826] mb-3 leading-snug">
                    {event.title}
                  </h4>
                  <p className="font-sans text-xs text-[#1a3826]/80 leading-relaxed font-medium">
                    {event.description}
                  </p>
                  
                  {event.promises && (
                    <div className="mt-4 pt-4 border-t border-[#1a3826]/10">
                      <ul className="space-y-1.5">
                        {event.promises.map((promise, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-[#d35400] shrink-0 mt-0.5 stroke-[3]" />
                            <span className="font-sans text-xs text-[#1a3826] font-medium leading-tight">
                              {promise}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Footer "Thank you" decorative text */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12 flex justify-end pointer-events-none">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 2.0, duration: 0.8 }}
           className="max-w-sm text-right"
         >
            <h3 className="font-serif text-5xl italic font-bold text-[#1a3826] mb-2">Thank you <span className="text-[#d35400] not-italic">♥</span></h3>
            <p className="font-sans text-[#1a3826]/80 mb-4 font-medium">to our amazing customers for being part of our story.</p>
            <div className="inline-flex items-center space-x-2">
              <span className="font-serif text-3xl font-bold text-[#1a3826] italic pr-1">WAKi</span>
              <span className="bg-red-800 text-white text-xs px-1.5 py-0.5 rounded-sm shadow-sm inline-flex flex-col items-center justify-center">
                <span className="font-bold">点</span>
                <span className="font-bold">心</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#1a3826]/60 font-sans font-bold ml-1">Dim Sum</span>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
