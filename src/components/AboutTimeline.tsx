import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TIMELINE_EVENTS = [
  {
    year: 2021,
    title: "The Humble Beginnings.",
    description: "WAKi started as a small family recipe tested in a home kitchen. The passion for authentic Malaysian dim sum sparked the idea of sharing these flavours with the community.",
    images: [
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    year: 2022,
    title: "First kitchen established.",
    description: "WAKi was founded with one simple mission: to serve authentic handmade dim sum that families and friends can enjoy together. Inspired by traditional recipes and Malaysian hospitality, every dish begins with care and craftsmanship.",
    images: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600",
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    year: 2023,
    title: "Expanding our reach.",
    description: "With overwhelming support from our loyal customers, we expanded our menu and opened our doors to a larger audience, offering catering services for special occasions.",
    images: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600"
    ]
  }
];

export default function AboutTimeline() {
  const [activeYear, setActiveYear] = useState(2022);
  const activeEvent = TIMELINE_EVENTS.find(e => e.year === activeYear) || TIMELINE_EVENTS[0];

  return (
    <section id="about" className="py-24 bg-cream-50 overflow-hidden relative flex flex-col justify-between border-t border-jade-900/5">
      
      {/* Background Big Year */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 pointer-events-none z-0 select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-serif text-[18rem] sm:text-[25rem] lg:text-[32rem] leading-none text-jade-900 tracking-tighter"
          >
            {activeYear}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        
        <div className="text-center mb-12 sm:mb-20">
            <span className="font-display text-gold-500 font-bold tracking-widest text-xs uppercase mb-2 block">Our Story</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-jade-950">A Journey of Flavours</h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Collage Area */}
            <div className="relative h-64 sm:h-96 w-full max-w-4xl mb-12 flex justify-center items-center">
                {activeEvent.video ? (
                    <>
                        <motion.div 
                            initial={{ rotate: -2, x: -40 }}
                            animate={{ rotate: -4, x: -30 }}
                            className="absolute z-20 bg-white p-3 shadow-xl w-56 sm:w-80"
                        >
                            <video 
                                src={activeEvent.video} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                className="w-full h-auto object-cover border border-cream-200"
                            />
                            {/* Tape */}
                            <div className="absolute -top-3 right-4 w-12 h-5 bg-cream-100/80 backdrop-blur-md rotate-[15deg] shadow-sm" />
                            <div className="absolute -bottom-4 left-4 w-14 h-5 bg-cream-100/80 backdrop-blur-md rotate-[30deg] shadow-sm" />
                        </motion.div>
                        {activeEvent.images[0] && (
                            <motion.div 
                                initial={{ rotate: 5, x: 40 }}
                                animate={{ rotate: 8, x: 70 }}
                                className="absolute z-10 bg-white p-3 shadow-md w-48 sm:w-64 mt-12"
                            >
                                <img src={activeEvent.images[0]} alt="" className="w-full h-auto object-cover border border-cream-200" />
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-cream-100/80 backdrop-blur-md rotate-[-5deg] shadow-sm" />
                            </motion.div>
                        )}
                    </>
                ) : (
                    <>
                        {activeEvent.images[0] && (
                            <motion.div 
                                initial={{ rotate: -5, x: -50 }}
                                animate={{ rotate: -3, x: -40 }}
                                className="absolute z-20 bg-white p-3 shadow-xl w-56 sm:w-80"
                            >
                                <img src={activeEvent.images[0]} alt="" className="w-full h-auto object-cover border border-cream-200" />
                                <div className="absolute -top-3 right-8 w-12 h-5 bg-cream-100/80 backdrop-blur-md rotate-[12deg] shadow-sm" />
                            </motion.div>
                        )}
                        {activeEvent.images[1] && (
                            <motion.div 
                                initial={{ rotate: 10, x: 50 }}
                                animate={{ rotate: 5, x: 60 }}
                                className="absolute z-10 bg-white p-3 shadow-md w-48 sm:w-72 mt-16"
                            >
                                <img src={activeEvent.images[1]} alt="" className="w-full h-auto object-cover border border-cream-200" />
                                <div className="absolute -bottom-3 left-6 w-10 h-5 bg-cream-100/80 backdrop-blur-md rotate-[-15deg] shadow-sm" />
                            </motion.div>
                        )}
                    </>
                )}
            </div>

            {/* Text Content */}
            <div className="text-center max-w-2xl mx-auto px-4 bg-cream-50/90 backdrop-blur rounded-xl p-6 shadow-sm border border-jade-900/5">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-jade-950 mb-4">{activeEvent.title}</h3>
              <p className="font-sans text-jade-900/80 text-sm sm:text-base leading-relaxed">
                {activeEvent.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline Controls */}
      <div className="w-full max-w-3xl mx-auto px-8 pb-12 pt-24 relative z-10">
        <div className="relative flex justify-between items-center">
            {/* The line */}
            <div className="absolute left-0 right-0 top-3 h-0.5 bg-jade-900 z-0" />
            
            {TIMELINE_EVENTS.map((event) => (
                <div 
                    key={event.year} 
                    className="relative z-10 flex flex-col items-center cursor-pointer group"
                    onClick={() => setActiveYear(event.year)}
                >
                    <div className="w-6 h-6 rounded-full border-[3px] border-jade-950 flex items-center justify-center bg-jade-950">
                        {activeYear === event.year && (
                            <motion.div layoutId="activeDot" className="w-2.5 h-2.5 rounded-full bg-gold-500" />
                        )}
                    </div>
                    <span className={`mt-4 font-serif text-xl sm:text-2xl transition-colors ${activeYear === event.year ? 'text-jade-950 font-bold' : 'text-jade-900/50 group-hover:text-jade-900'}`}>
                        {event.year}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
