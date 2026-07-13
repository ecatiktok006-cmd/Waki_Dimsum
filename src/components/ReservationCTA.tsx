import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, X } from 'lucide-react';

interface ReservationCTAProps {
  onReserveClick: () => void;
}

export default function ReservationCTA({ onReserveClick }: ReservationCTAProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', guests: '2' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

  // Mock Supabase Submission & Webhook Trigger
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate Supabase insert delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, this would be:
    // const { data, error } = await supabase.from('bookings').insert([formData]);
    // Then an Edge Function would listen to DB inserts and ping WhatsApp API
    
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', date: '', guests: '2' });
    }, 4000);
  };

  return (
    <section className="relative py-32 bg-jade-950 overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-jade-950/80 z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Headline */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 mb-6 leading-tight"
          >
            Ready for Fresh Handmade <span className="text-gold-400 italic">Dim Sum?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-cream-200/80 mb-10 max-w-md"
          >
            Skip the queue. Book your table now and we'll instantly confirm your reservation via WhatsApp.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center space-x-3 bg-jade-900/50 p-4 rounded-xl border border-gold-500/10 cursor-pointer hover:bg-jade-900/80 transition-colors"
            onClick={() => setShowAIChat(true)}
          >
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
               <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-cream-50 text-sm">Need help deciding?</p>
              <p className="text-cream-200/50 text-xs">Chat with our AI Concierge</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Smart Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-cream-50 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-jade-950 flex flex-col items-center justify-center z-20 text-center px-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-gold-500 mb-6 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-serif font-bold text-cream-50 mb-2">Booking Confirmed!</h3>
                <p className="text-cream-200/70 text-sm">We've just sent the details to your WhatsApp.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <h3 className="font-serif text-2xl font-bold text-jade-950 mb-6">Reserve a Table</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-jade-900/60 uppercase tracking-wider mb-1">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border border-jade-900/10 rounded px-4 py-3 text-jade-950 focus:outline-none focus:border-gold-500" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-jade-900/60 uppercase tracking-wider mb-1">WhatsApp Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white border border-jade-900/10 rounded px-4 py-3 text-jade-950 focus:outline-none focus:border-gold-500" 
                  placeholder="+60123456789" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-jade-900/60 uppercase tracking-wider mb-1">Date & Time</label>
                <input 
                  type="datetime-local" 
                  required
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-white border border-jade-900/10 rounded px-4 py-3 text-jade-950 focus:outline-none focus:border-gold-500" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-jade-900/60 uppercase tracking-wider mb-1">Guests</label>
                <select 
                  value={formData.guests}
                  onChange={e => setFormData({...formData, guests: e.target.value})}
                  className="w-full bg-white border border-jade-900/10 rounded px-4 py-3 text-jade-950 focus:outline-none focus:border-gold-500"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People (We will call you)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 flex items-center justify-center space-x-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-500/50 text-jade-950 font-display font-bold tracking-widest uppercase rounded transition-colors shadow-lg cursor-pointer"
            >
              {isSubmitting ? (
                <span>Confirming...</span>
              ) : (
                <>
                  <span>Book & Notify via WhatsApp</span>
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>

      {/* Floating AI Concierge Modal Placeholder */}
      <AnimatePresence>
        {showAIChat && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-jade-900/10 flex flex-col"
          >
            <div className="bg-jade-950 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-jade-950 font-bold font-serif">W</div>
                <div>
                  <h4 className="text-cream-50 font-bold text-sm">WAKi Concierge</h4>
                  <p className="text-gold-400 text-[10px]">AI Assistant</p>
                </div>
              </div>
              <button onClick={() => setShowAIChat(false)} className="text-cream-50/50 hover:text-cream-50 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 h-64 bg-cream-50 flex flex-col justify-end">
              {/* Mock Chat */}
              <div className="space-y-3 mb-4">
                <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-jade-950 max-w-[85%] border border-jade-900/5">
                  Hi there! 👋 I'm your WAKi AI Concierge. How can I help you plan your visit?
                </div>
                <div className="bg-gold-500/20 p-3 rounded-xl rounded-tr-none shadow-sm text-sm text-jade-950 max-w-[85%] ml-auto border border-gold-500/20">
                  Do you have vegetarian options for a group of 4?
                </div>
              </div>
              <div className="relative">
                <input type="text" placeholder="Type a message..." className="w-full bg-white border border-jade-900/10 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:border-gold-500" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gold-500 hover:text-gold-600">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
