import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const PACKAGES = [
  {
    id: 'pkg-a',
    name: 'Standard Package',
    price: 49,
    description: 'Perfect for small gatherings and casual meetups.',
    features: [
      { name: '4 Signature Dim Sum Varieties', included: true },
      { name: 'Free Flow Chinese Tea', included: true },
      { name: 'Standard Table Setup', included: true },
      { name: 'Private Room', included: false },
      { name: 'Customized Menu', included: false },
      { name: 'Dedicated Server', included: false },
    ],
    highlighted: false,
  },
  {
    id: 'pkg-b',
    name: 'Premium Package',
    price: 79,
    description: 'A great choice for family celebrations.',
    features: [
      { name: '6 Signature Dim Sum Varieties', included: true },
      { name: 'Free Flow Premium Tea', included: true },
      { name: 'Standard Table Setup', included: true },
      { name: 'Private Room', included: true },
      { name: 'Customized Menu', included: false },
      { name: 'Dedicated Server', included: false },
    ],
    highlighted: false,
    isDecoy: true,
  },
  {
    id: 'pkg-c',
    name: 'WAKi Signature Experience',
    price: 85,
    description: 'The ultimate WAKi experience with massive value.',
    features: [
      { name: 'All 10 Signature Dim Sum Varieties', included: true },
      { name: 'Free Flow Premium Tea & Soft Drinks', included: true },
      { name: 'Premium Table Setup & Decorations', included: true },
      { name: 'Private VIP Room', included: true },
      { name: 'Customized Menu with Chef', included: true },
      { name: 'Dedicated Server', included: true },
    ],
    highlighted: true,
  },
];

export default function Occasions() {
  return (
    <section className="py-32 bg-jade-950 text-cream-50 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gold-500/5 blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-jade-800/30 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-gold-500 font-bold tracking-widest text-xs uppercase mb-4 block"
          >
            Events & Catering
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Celebrate with WAKi
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gold-500 mx-auto rounded" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative rounded-2xl overflow-hidden transition-transform duration-300 ${
                pkg.highlighted 
                  ? 'bg-gradient-to-b from-gold-500/10 to-transparent border-2 border-gold-500 shadow-[0_0_40px_rgba(197,160,89,0.15)] lg:-translate-y-4' 
                  : 'bg-jade-900/50 border border-gold-500/10 hover:border-gold-500/30'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 inset-x-0 bg-gold-500 text-jade-950 text-center py-1.5 font-display text-xs font-bold tracking-widest uppercase">
                  Most Popular & Best Value
                </div>
              )}
              
              <div className={`p-8 ${pkg.highlighted ? 'pt-12' : ''}`}>
                <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-cream-200/60 text-sm mb-6 h-10">{pkg.description}</p>
                
                <div className="mb-8 flex items-baseline">
                  <span className="text-sm font-bold text-gold-400 mr-1">RM</span>
                  <span className="text-5xl font-serif font-bold text-gold-400">{pkg.price}</span>
                  <span className="text-cream-200/40 ml-2">/ pax</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-cream-200/20 mr-3 shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-cream-50' : 'text-cream-200/30 line-through'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 rounded font-display font-bold text-xs tracking-widest uppercase transition-colors ${
                    pkg.highlighted
                      ? 'bg-gold-500 hover:bg-gold-400 text-jade-950 shadow-lg shadow-gold-500/20'
                      : 'bg-jade-800 hover:bg-jade-700 text-cream-50'
                  }`}
                >
                  Select Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
