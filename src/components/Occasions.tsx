import { motion } from 'motion/react';
import { OCCASIONS } from '../data';

export default function Occasions() {
  return (
    <section className="py-24 bg-cream-50 text-jade-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">Perfect for Every Occasion</h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OCCASIONS.map((occ, idx) => (
            <motion.div
              key={occ.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-video rounded-xl overflow-hidden group shadow-lg cursor-pointer"
            >
              <img src={occ.image} alt={occ.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-jade-950/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-xl font-bold text-cream-50">{occ.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
