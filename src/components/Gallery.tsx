import { GALLERY_ITEMS } from '../data';
import { motion } from 'motion/react';

export default function Gallery() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-jade-950 mb-4">WAKi Moments</h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded" />
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-lg shadow-md ${
                idx === 1 || idx === 4 ? 'row-span-2 h-[400px]' : 'h-[200px]'
              }`}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-jade-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-gold-400 font-display text-[10px] tracking-widest uppercase mb-1">{item.category}</span>
                <span className="text-white font-serif font-bold text-lg">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
