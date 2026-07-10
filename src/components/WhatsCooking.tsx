import { motion } from 'motion/react';
import { Coffee, Utensils, Flame, Wheat } from 'lucide-react';

export default function WhatsCooking() {
  return (
    <section className="py-24 bg-cream-50 overflow-hidden border-t border-jade-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-jade-950 mb-4">
            <span className="font-script text-gold-500 text-6xl mr-3 -rotate-2 inline-block">See what's</span>
            cooking!
          </h2>
          <p className="font-sans text-jade-900/60 max-w-sm text-sm leading-relaxed">
            From simmering steamers to sizzling woks, take a peek behind the scenes 
            and discover what's freshly prepared from our kitchen.
          </p>
        </div>

        <div className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center">
          
          {/* Decorative Sketch (Left Side) */}
          <div className="absolute left-0 bottom-0 md:bottom-20 w-64 md:w-96 opacity-30 pointer-events-none">
             <svg viewBox="0 0 300 500" className="w-full h-auto stroke-jade-950 stroke-1 fill-none">
               {/* Simplified Vendor Sketch */}
               <path d="M100 100 Q 150 50 200 100 Q 250 150 200 200 L 150 400 L 100 400 Z" />
               <circle cx="150" cy="80" r="30" />
               <path d="M 50 250 L 250 250 M 80 250 L 80 450 M 220 250 L 220 450" />
             </svg>
          </div>

          {/* Central Collage Area */}
          <div className="relative w-full max-w-4xl h-full flex flex-col md:flex-row items-center justify-end z-10 space-y-12 md:space-y-0">
            
            {/* Top Dish */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-0 right-10 md:right-32 flex items-center"
            >
              <div className="w-48 h-48 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10">
                <img src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=400" alt="Dim Sum" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:flex flex-col ml-8 max-w-[150px]">
                <div className="flex items-center space-x-2 text-jade-950 font-bold mb-1">
                  <Flame className="w-4 h-4 text-gold-500" />
                  <span className="font-serif">Steamed Fresh</span>
                </div>
                <p className="text-[10px] text-jade-900/60 leading-relaxed">A different flavour for every craving, straight from the steamer.</p>
              </div>
              {/* Pointing Line */}
              <svg className="absolute -left-16 top-1/2 w-16 h-4 hidden md:block" viewBox="0 0 100 20" preserveAspectRatio="none">
                <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" className="text-jade-900/30" strokeDasharray="4 4"/>
              </svg>
            </motion.div>

            {/* Middle Dish */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute top-1/3 right-4 md:right-10 flex items-center"
            >
              <div className="hidden md:flex flex-col mr-8 max-w-[150px] text-right items-end">
                <div className="flex items-center space-x-2 text-jade-950 font-bold mb-1">
                  <span className="font-serif">Rice & Wok</span>
                  <Wheat className="w-4 h-4 text-gold-500" />
                </div>
                <p className="text-[10px] text-jade-900/60 leading-relaxed">Freshly tossed, generously served with signature wok hei.</p>
              </div>
              <div className="w-56 h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-20">
                <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=400" alt="Fried Rice" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Bottom Dish */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 right-20 md:right-48 flex items-center"
            >
              <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden relative z-30">
                <img src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=400" alt="Spring Rolls" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:flex flex-col ml-8 max-w-[150px]">
                <div className="flex items-center space-x-2 text-jade-950 font-bold mb-1">
                  <Utensils className="w-4 h-4 text-gold-500" />
                  <span className="font-serif">Rolls & Bites</span>
                </div>
                <p className="text-[10px] text-jade-900/60 leading-relaxed">Crunch & tenderness in every bite.</p>
              </div>
            </motion.div>

            {/* Coffee / Drink */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-0 right-0 hidden md:flex items-center space-x-4 bg-white p-4 rounded-xl shadow-lg z-40 border border-jade-900/5"
            >
              <div className="w-16 h-16 rounded overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&q=80&w=200" alt="Coffee" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center space-x-2 text-jade-950 font-bold mb-1">
                  <Coffee className="w-4 h-4 text-gold-500" />
                  <span className="font-serif">Local Coffee</span>
                </div>
                <p className="text-[10px] text-jade-900/60 max-w-[100px]">Slow-dripped to satisfaction</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
