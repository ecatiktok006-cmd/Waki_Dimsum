import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface StoryHeroProps {
  onLearnMore: () => void;
  onExploreMenu: () => void;
  onOrderNow: () => void;
}

export default function StoryHero({ onLearnMore, onExploreMenu, onOrderNow }: StoryHeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-cream-50">
      
      {/* Decorative background sketch (simulated) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
           <path d="M100 500 Q 400 450 700 500 M200 400 L 200 200 L 300 100 L 400 200 L 400 400 M 350 200 L 350 150 M 200 400 Q 400 300 700 400" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-10"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-jade-950 leading-tight mb-6">
              Welcome Home to <br/>
              Authentic <span className="font-script text-gold-500 text-6xl sm:text-7xl lg:text-8xl inline-block -rotate-2 ml-2 -mt-4">Malaysian</span><br/>
              Flavours!
            </h1>
            
            <p className="font-sans text-jade-900/70 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              We're a family from the vibrant streets of Subang Jaya, sharing the beloved 
              flavours of our childhood. At our table, you'll find the warmth of mom's 
              dim sum, the brightness of fresh ingredients, and the satisfying crunch of 
              golden spring rolls — all served with the spirit of home. Every dish is a 
              tribute to our humble roots, handcrafted with care each day.
            </p>

            <button 
              onClick={onLearnMore}
              className="inline-flex items-center px-6 py-3 bg-gold-500 hover:bg-gold-400 text-jade-950 font-display font-bold text-xs tracking-widest uppercase rounded shadow-lg transition-transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </motion.div>

          {/* Right Column: Collage */}
          <div className="relative mt-12 lg:mt-0 lg:h-[600px] flex items-center justify-center">
            
            {/* Top Image (Stamp) */}
            <motion.div 
              initial={{ opacity: 0, y: -20, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 sm:left-10 w-48 sm:w-64 aspect-[4/5] bg-white p-3 shadow-2xl z-20 stamp-mask"
            >
              <img 
                src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600" 
                alt="Steaming Dim Sum" 
                className="w-full h-full object-cover rounded-sm"
              />
            </motion.div>

            {/* Bottom Image (Stamp) */}
            <motion.div 
              initial={{ opacity: 0, x: 20, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-10 right-0 sm:right-10 w-56 sm:w-72 aspect-square bg-white p-3 shadow-xl z-30 stamp-mask"
            >
              <img 
                src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600" 
                alt="Making Dumplings" 
                className="w-full h-full object-cover rounded-sm"
              />
            </motion.div>

            {/* Right Side Text Block */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-1/3 -right-4 sm:-right-10 text-right z-40 hidden sm:block"
            >
              <div className="font-script text-gold-500 text-5xl rotate-2">Dim Sum</div>
              <div className="font-serif font-bold text-3xl text-jade-950 leading-none mb-4">Made<br/>fresh <span className="font-script text-gold-500 text-4xl">Daily</span></div>
              <p className="font-sans text-[10px] text-jade-900/60 max-w-[150px] ml-auto leading-relaxed mb-4">
                For Mr. WAKi, every meal is a shared memory. Taste the authentic dishes we grew up loving — prepared daily with fresh ingredients and care.
              </p>
              
              <div className="flex justify-end space-x-2">
                <button 
                  onClick={onExploreMenu}
                  className="px-4 py-2 bg-jade-950 text-gold-400 font-display font-bold text-[10px] tracking-wider rounded"
                >
                  EXPLORE OUR MENU
                </button>
                <button 
                  onClick={onOrderNow}
                  className="px-4 py-2 bg-gold-500 text-jade-950 font-display font-bold text-[10px] tracking-wider rounded"
                >
                  ORDER NOW
                </button>
              </div>
            </motion.div>

            {/* Mobile Text Block (Visible only on small screens) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-16 w-full text-center z-40 sm:hidden"
            >
              <div className="font-script text-gold-500 text-4xl">Dim Sum</div>
              <div className="font-serif font-bold text-2xl text-jade-950 leading-none mb-3">Made fresh <span className="font-script text-gold-500 text-3xl">Daily</span></div>
              <div className="flex justify-center space-x-2">
                <button onClick={onExploreMenu} className="px-3 py-1.5 bg-jade-950 text-gold-400 font-display font-bold text-[10px] tracking-wider rounded">MENU</button>
                <button onClick={onOrderNow} className="px-3 py-1.5 bg-gold-500 text-jade-950 font-display font-bold text-[10px] tracking-wider rounded">ORDER</button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
