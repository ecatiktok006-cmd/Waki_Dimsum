import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
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
    title: "A Passion for Dim Sum",
    description: "Founded to serve authentic handmade dim sum. Every dish begins with care and craftsmanship.",
    image: aboutIngredients,
  },
  {
    year: 2022,
    title: "First Kitchen",
    description: "Focused on hand-making dim sum with fresh ingredients. Every fold reflects our commitment.",
    image: aboutSteam,
  },
  {
    year: 2023,
    title: "Welcoming Families",
    description: "Expanded our dining experience while preserving handmade quality. A destination to reconnect.",
    image: gatheringImg,
  },
  {
    year: 2024,
    title: "Perfecting Every Bite",
    description: "Our production expanded, but every dumpling is still handcrafted with precision.",
    image: aboutPlatter,
  },
  {
    year: 2025,
    title: "A Fresh Identity",
    description: "Refreshed visual identity while staying true to our philosophy—bringing people together.",
    image: heroDimSum,
  },
  {
    year: 2026,
    title: "Growing Into the Future",
    description: "Continuing to innovate and serve, honoring the craftsmanship that started it all.",
    image: gatheringImg,
    promises: [
      "Handmade with care",
      "Fresh ingredients",
      "Warm hospitality",
      "Delicious food"
    ]
  }
];

const TIMELINE_NODES = [
  { year: 2021, y: 300, cardPos: 'bottom' as const },
  { year: 2022, y: 550, cardPos: 'top' as const },
  { year: 2023, y: 250, cardPos: 'bottom' as const },
  { year: 2024, y: 600, cardPos: 'top' as const },
  { year: 2025, y: 200, cardPos: 'bottom' as const },
  { year: 2026, y: 400, cardPos: 'bottom' as const },
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPausedRef.current && scrollRef.current) {
        // Slow continuous scroll speed
        scrollRef.current.scrollLeft += delta * 0.04;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Dynamic SVG Path Calculation
  const ITEM_WIDTH = 288; // w-72
  const GAP = 96; // gap-24
  const STEP = ITEM_WIDTH + GAP;
  const PADDING = 160; // px-40

  const totalWidth = PADDING * 2 + ITEM_WIDTH * TIMELINE_EVENTS.length + GAP * (TIMELINE_EVENTS.length - 1);

  const pathParts = [];
  pathParts.push(`M 0 ${TIMELINE_NODES[0].y}`);
  pathParts.push(`C ${PADDING/2} ${TIMELINE_NODES[0].y}, ${PADDING} ${TIMELINE_NODES[0].y}, ${PADDING + ITEM_WIDTH/2} ${TIMELINE_NODES[0].y}`);

  for (let i = 0; i < TIMELINE_NODES.length - 1; i++) {
    const x0 = PADDING + ITEM_WIDTH/2 + i * STEP;
    const y0 = TIMELINE_NODES[i].y;
    const x1 = PADDING + ITEM_WIDTH/2 + (i + 1) * STEP;
    const y1 = TIMELINE_NODES[i+1].y;
    const cx = x0 + STEP/2;
    pathParts.push(`C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`);
  }

  const lastX = PADDING + ITEM_WIDTH/2 + (TIMELINE_NODES.length - 1) * STEP;
  const lastY = TIMELINE_NODES[TIMELINE_NODES.length - 1].y;
  pathParts.push(`C ${lastX + PADDING/2} ${lastY}, ${totalWidth - PADDING/2} ${lastY}, ${totalWidth} ${lastY}`);

  const pathD = pathParts.join(' ');

  return (
    <section id="about" className="pt-16 pb-24 bg-[#Fdfbf7] relative overflow-hidden" ref={containerRef}>
      
      {/* Background decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5f1e8] via-[#Fdfbf7] to-[#Fdfbf7] opacity-50 z-0 pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mb-4 flex flex-col items-center"
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
      <div 
        className="w-full overflow-x-auto overflow-y-visible no-scrollbar pb-32 -mt-16 sm:-mt-24 cursor-pointer"
        ref={scrollRef}
        onClick={() => { isPausedRef.current = !isPausedRef.current; }}
      >
        <div className="relative h-[800px] flex gap-24 items-center px-40 w-max mx-auto">
          
          {/* Wavy SVG */}
          <svg className="absolute top-0 left-0 h-full pointer-events-none z-0 text-[#1a3826]" 
               style={{ width: totalWidth }}
               viewBox={`0 0 ${totalWidth} 800`} 
               preserveAspectRatio="none">
            {/* Main Path */}
            <motion.path 
              d={pathD}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
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
              <div key={event.year} className="relative w-72 h-full shrink-0 flex justify-center z-10">
                
                {/* Node Circle */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute w-8 h-8 rounded-full bg-[#Fdfbf7] border-[3px] border-[#1a3826] ring-4 ring-[#1a3826]/10 shadow-[0_0_15px_rgba(210,84,0,0.3)] z-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2 flex items-center justify-center" 
                  style={{ top: node.y }}
                >
                  <div className="w-2.5 h-2.5 bg-[#d35400] rounded-full" />
                </motion.div>

                {/* Year Text */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className={`absolute font-serif text-5xl text-[#1a3826] font-bold ${node.cardPos === 'bottom' ? '-translate-y-full mb-6' : 'translate-y-full mt-6'} transform -translate-x-1/2 left-1/2 whitespace-nowrap z-10`}
                  style={{ top: node.y }}
                >
                  {event.year}
                </motion.div>

                {/* Polaroid Card */}
                <motion.div
                  initial={{ opacity: 0.4, scale: 0.9, rotate: isRotatedRight ? -4 : 4 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: isRotatedRight ? 2 : -2 }}
                  viewport={{ margin: "0px -35% 0px -35%", once: false }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`absolute w-[280px] bg-[#Fdfbf7] p-4 pb-8 rounded-sm shadow-[0_8px_20px_rgb(0,0,0,0.08)] border border-jade-900/5 z-10 transform -translate-x-1/2 left-1/2 transition-all hover:z-30 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgb(0,0,0,0.12)] cursor-default`}
                  style={node.cardPos === 'bottom' ? { top: node.y + 60 } : { bottom: 800 - node.y + 60 }}
                >
                  {/* Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#e6dfcf] opacity-90 rotate-[-4deg] shadow-sm z-20" />
                  
                  <motion.img 
                    src={event.image} 
                    alt={event.title} 
                    initial={{ filter: 'grayscale(100%) brightness(0.85)' }}
                    whileInView={{ filter: 'grayscale(0%) brightness(1)' }}
                    viewport={{ margin: "0px -35% 0px -35%", once: false }}
                    transition={{ duration: 0.8 }}
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
    </section>
  );
}
