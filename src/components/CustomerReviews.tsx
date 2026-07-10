import { REVIEWS } from '../data';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-jade-950 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">What Our Guests Say</h2>
        <div className="w-16 h-1 bg-gold-400 mx-auto rounded mb-6" />
        
        <div className="flex items-center justify-center space-x-2 mb-16">
          <div className="flex text-gold-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <span className="font-sans font-bold">4.8/5 on Google Reviews</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-jade-900 p-8 rounded-xl border border-gold-500/10 text-left flex flex-col"
            >
              <div className="flex text-gold-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-sans text-cream-200/90 mb-6 flex-grow leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center font-bold font-serif">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm">{review.name}</h4>
                  <span className="text-xs text-cream-200/50">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
