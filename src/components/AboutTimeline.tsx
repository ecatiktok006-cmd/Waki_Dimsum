import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

import ingredientsImg from '../assets/images/ingredients_dimsum_1784099917619.jpg';
import rollingImg from '../assets/images/rolling_wrappers_1784099933601.jpg';
import fillingImg from '../assets/images/preparing_filling_1784099945958.jpg';
import foldingImg from '../assets/images/hand_folded_1784099957917.jpg';
import steamImg from '../assets/images/steamed_baskets_1784099970714.jpg';
import sharedImg from '../assets/images/family_enjoying_1784099982164.jpg';
import wrapperVideo from '../assets/images/wrapper.mp4';
import fillingVideo from '../assets/images/filling.mp4';
import foldingVideo from '../assets/images/folding.mp4';
import steamVideo from '../assets/images/steam.mp4';
import gatheringVideo from '../assets/images/gathering.mp4';

interface TimelineEvent {
  keyword: string;
  title: string;
  description: string;
  image: string;
  video?: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    keyword: "Selected",
    title: "Fresh Ingredients",
    description: "Every great dim sum begins with carefully selected ingredients. Fresh seafood, premium meats, seasonal vegetables, and quality flour lay the foundation for authentic flavor.",
    image: ingredientsImg,
  },
  {
    keyword: "Prepared",
    title: "Handmade Wrappers",
    description: "Our dough is prepared with precision and rolled to the perfect thickness, creating delicate wrappers that hold every filling beautifully.",
    image: rollingImg,
    video: wrapperVideo,
  },
  {
    keyword: "Crafted",
    title: "Crafted Filling",
    description: "Each filling is carefully seasoned and mixed to achieve the perfect balance of texture, aroma, and taste using traditional recipes.",
    image: fillingImg,
    video: fillingVideo,
  },
  {
    keyword: "Handcrafted",
    title: "Hand Folded",
    description: "Every dumpling is folded by hand with skill and care. Each shape reflects years of craftsmanship passed down through generations.",
    image: foldingImg,
    video: foldingVideo,
  },
  {
    keyword: "Steamed",
    title: "Steam to Perfection",
    description: "Steamed at precisely controlled temperatures, every basket preserves freshness while achieving the ideal texture and flavor.",
    image: steamImg,
    video: steamVideo,
  },
  {
    keyword: "Shared",
    title: "Served with Happiness",
    description: "The final destination is your table, where friends and families gather to share delicious food, meaningful conversations, and memorable moments.",
    image: sharedImg,
    video: gatheringVideo,
  }
];

const TIMELINE_NODES = [
  { y: 300, cardPos: 'bottom' as const },
  { y: 550, cardPos: 'top' as const },
  { y: 250, cardPos: 'bottom' as const },
  { y: 600, cardPos: 'top' as const },
  { y: 300, cardPos: 'bottom' as const },
  { y: 400, cardPos: 'end' as const },
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
  const ITEM_WIDTH = 300; // w-[300px]
  const GAP = 96; // gap-24
  const STEP = ITEM_WIDTH + GAP;
  const PADDING_LEFT = 160; // pl-40
  const PADDING_RIGHT = 400; // pr-[400px] for the end card

  const totalWidth = PADDING_LEFT + PADDING_RIGHT + ITEM_WIDTH * TIMELINE_EVENTS.length + GAP * (TIMELINE_EVENTS.length - 1);

  const pathParts = [];
  pathParts.push(`M 0 ${TIMELINE_NODES[0].y}`);
  pathParts.push(`C ${PADDING_LEFT/2} ${TIMELINE_NODES[0].y}, ${PADDING_LEFT} ${TIMELINE_NODES[0].y}, ${PADDING_LEFT + ITEM_WIDTH/2} ${TIMELINE_NODES[0].y}`);

  for (let i = 0; i < TIMELINE_NODES.length - 1; i++) {
    const x0 = PADDING_LEFT + ITEM_WIDTH/2 + i * STEP;
    const y0 = TIMELINE_NODES[i].y;
    const x1 = PADDING_LEFT + ITEM_WIDTH/2 + (i + 1) * STEP;
    const y1 = TIMELINE_NODES[i+1].y;
    const cx = x0 + STEP/2;
    pathParts.push(`C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`);
  }

  const lastX = PADDING_LEFT + ITEM_WIDTH/2 + (TIMELINE_NODES.length - 1) * STEP;
  const lastY = TIMELINE_NODES[TIMELINE_NODES.length - 1].y;
  pathParts.push(`C ${lastX + PADDING_RIGHT/4} ${lastY}, ${lastX + PADDING_RIGHT/2} ${lastY}, ${totalWidth} ${lastY}`);

  const pathD = pathParts.join(' ');

  return (
    <section id="about" className="pt-16 pb-24 bg-[#Fdfbf7] relative overflow-hidden" ref={containerRef}>
      
      {/* Background decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#061F1A 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#Fdfbf7]/60 to-[#Fdfbf7] opacity-90" />
      </div>

      {/* Header Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl md:max-w-5xl mb-4 flex flex-col items-center"
        >
          <span className="font-display text-jade-950/60 font-bold tracking-[0.3em] text-xs uppercase mb-4 block text-center">
            Our Journey
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-jade-950 leading-tight mb-4 flex flex-col items-center justify-center">
            <span className="md:whitespace-nowrap text-center">The Dimsum Journey of</span>
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
        <div className="relative h-[800px] flex gap-24 items-center pl-40 pr-[400px] w-max mx-auto">
          
          {/* Wavy SVG */}
          <svg className="absolute top-0 left-0 h-full pointer-events-none z-0" 
               style={{ width: totalWidth }}
               viewBox={`0 0 ${totalWidth} 800`} 
               preserveAspectRatio="none">
            {/* Shadow path */}
            <path d={pathD} fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="8" transform="translate(0, 6)" />
            
            {/* Main Path */}
            <motion.path 
              d={pathD}
              fill="none" 
              stroke="#1C6658" 
              strokeWidth="2"
              strokeDasharray="6 6"
              className="opacity-30"
            />
            
            {/* Highlight Path */}
            <motion.path 
              d={pathD}
              fill="none" 
              stroke="#C5A059" 
              strokeWidth="3"
              strokeLinecap="round"
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
              <div key={event.keyword} className="relative w-[300px] h-full shrink-0 flex justify-center z-10">
                
                {/* Node Circle */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute w-8 h-8 rounded-full bg-[#Fdfbf7] border-[3px] border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.3)] z-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2 flex items-center justify-center" 
                  style={{ top: node.y }}
                >
                  <div className="w-2.5 h-2.5 bg-[#061F1A] rounded-full" />
                  
                  {/* Pulsing ring */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-[#C5A059]"
                    animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Keyword Text */}
                <motion.div 
                  initial={{ opacity: 0, y: node.cardPos === 'bottom' || node.cardPos === 'end' ? -10 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className={`absolute flex flex-col items-center ${
                    node.cardPos === 'bottom' || node.cardPos === 'end' ? '-translate-y-full -mt-6 transform -translate-x-1/2 left-1/2' : 
                    node.cardPos === 'top' ? 'mt-6 transform -translate-x-1/2 left-1/2' :
                    '-translate-y-full -mt-6 transform -translate-x-1/2 left-1/2'
                  } whitespace-nowrap z-10`}
                  style={{ top: node.y }}
                >
                  <span className="font-script text-[#C5A059] text-3xl md:text-4xl font-bold rotate-[-5deg] px-4 drop-shadow-sm">
                    {event.keyword}
                  </span>
                </motion.div>

                {/* Polaroid Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20, rotate: isRotatedRight ? -6 : 6 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0, rotate: isRotatedRight ? 2 : -2 }}
                  viewport={{ margin: "0px -10% 0px -10%", once: true }}
                  transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                  className={`absolute w-[300px] bg-white p-4 pb-10 shadow-[0_15px_35px_rgb(0,0,0,0.08),_0_3px_10px_rgb(0,0,0,0.04)] border border-[#ECE6D9] z-10 transition-all hover:z-30 hover:scale-105 hover:shadow-[0_25px_50px_rgb(0,0,0,0.12)] cursor-default ${
                    node.cardPos === 'end' ? 'left-full ml-4 transform -translate-y-1/2' : 'transform -translate-x-1/2 left-1/2'
                  }`}
                  style={
                    node.cardPos === 'bottom' ? { top: node.y + 70 } : 
                    node.cardPos === 'top' ? { bottom: 800 - node.y + 70 } :
                    { top: node.y }
                  }
                >
                  {/* Tape 1 */}
                  <div className="absolute -top-3 left-1/4 w-12 h-6 bg-white/70 backdrop-blur-md rotate-[-10deg] shadow-sm z-20 border border-white/80 rounded-sm" />
                  {/* Tape 2 */}
                  <div className="absolute -top-4 right-1/4 w-14 h-6 bg-white/70 backdrop-blur-md rotate-[8deg] shadow-sm z-20 border border-white/80 rounded-sm" />
                  
                  <div className="relative overflow-hidden mb-5 bg-[#F9F6F0] p-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-[#ECE6D9]/50">
                    {event.video ? (
                      <motion.video 
                        src={event.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        initial={{ opacity: 0.85 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-[200px] object-cover rounded-sm"
                      />
                    ) : (
                      <motion.img 
                        src={event.image} 
                        alt={event.title} 
                        initial={{ opacity: 0.85 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-[200px] object-cover rounded-sm" 
                      />
                    )}
                  </div>
                  
                  <h4 className="font-serif text-xl font-bold text-[#061F1A] mb-2 leading-tight text-center px-2 pt-1">
                    {event.title}
                  </h4>
                  <p className="font-sans text-[13px] text-[#061F1A]/75 leading-relaxed font-medium text-center px-4">
                    {event.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none pb-8 flex flex-col items-center text-center mt-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif italic text-[#061F1A]/80 text-xl md:text-2xl max-w-2xl leading-relaxed"
        >
          "From fresh ingredients to every shared smile, every dim sum is crafted with heart."
        </motion.p>
      </div>
    </section>
  );
}
