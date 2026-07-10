import { motion } from 'motion/react';

interface ReservationCTAProps {
  onReserveClick: () => void;
}

export default function ReservationCTA({ onReserveClick }: ReservationCTAProps) {
  return (
    <section className="relative py-32 bg-jade-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/about_platter_1783567469486.jpg"
          alt="Dim Sum Platter"
          className="w-full h-full object-cover filter brightness-40"
        />
        <div className="absolute inset-0 bg-jade-950/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl sm:text-6xl font-bold text-cream-50 mb-6 leading-tight"
        >
          Ready for Fresh Handmade<br />
          <span className="text-gold-400 italic">Dim Sum?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-lg sm:text-xl text-cream-200/90 mb-10 max-w-2xl mx-auto"
        >
          Reserve your table today and enjoy authentic flavours with your family and friends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button
            onClick={onReserveClick}
            className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-jade-950 font-display font-bold tracking-wider rounded transition-colors shadow-lg cursor-pointer"
          >
            RESERVE NOW
          </button>
          <a
            href="https://wa.me/60166634376"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-display font-bold tracking-wider rounded transition-colors shadow-lg cursor-pointer"
          >
            WHATSAPP US
          </a>
        </motion.div>
      </div>
    </section>
  );
}
