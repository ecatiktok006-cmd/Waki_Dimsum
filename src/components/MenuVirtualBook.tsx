import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';
import { MENU_CATEGORIES } from '../data';

export default function MenuVirtualBook() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = MENU_CATEGORIES.map(cat => ({
    ...cat,
    dishes: cat.dishes.filter(dish => 
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      dish.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.dishes.length > 0);

  const activeData = filteredCategories.find(c => c.id === activeCategory) || filteredCategories[0];

  return (
    <section id="menu" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-jade-950 mb-4">Our Full Menu</h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded mb-8" />
          
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-jade-900/10 rounded-full px-6 py-3 pl-12 text-jade-950 focus:outline-none focus:border-gold-500 shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-jade-900/40 w-5 h-5" />
          </div>
        </div>

        {/* Swipeable Tabs for Mobile */}
        <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar space-x-2">
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-display font-bold text-xs tracking-wider transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-jade-950 text-gold-400'
                  : 'bg-white text-jade-900/60 hover:bg-jade-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl border border-jade-900/5 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeData ? (
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8"
              >
                {activeData.dishes.map((dish) => (
                  <div key={dish.id} className="flex space-x-4 border-b border-jade-900/5 pb-6">
                    <img src={dish.image} alt={dish.name} className="w-24 h-24 rounded-lg object-cover flex-shrink-0 shadow-sm" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-serif font-bold text-lg text-jade-950">{dish.name}</h4>
                        <span className="font-mono text-gold-600 font-bold whitespace-nowrap ml-4">RM {dish.price.toFixed(2)}</span>
                      </div>
                      <p className="font-sans text-sm text-jade-900/60 mb-2">{dish.description}</p>
                      {dish.isHalal && (
                        <span className="inline-block px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold tracking-widest uppercase rounded border border-green-200">Halal</span>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20 text-jade-900/50 font-sans">
                No dishes found matching "{searchQuery}"
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
