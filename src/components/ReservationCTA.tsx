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
    <section className="relative py-32 bg-[#FFFBE3] overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#061F1A 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#FFFBE3]/60 to-[#FFFBE3] opacity-90 z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Headline */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#061F1A] mb-6 leading-tight tracking-tight"
          >
            Ready for Fresh Handmade <span className="text-[#C5A059] italic font-script rotate-[-2deg] inline-block ml-2 text-5xl sm:text-6xl lg:text-7xl">Dim Sum?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-[#061F1A]/80 mb-10 max-w-md font-medium"
          >
            Skip the queue. Book your table now and we'll instantly confirm your reservation via WhatsApp.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center space-x-4 bg-white p-4 rounded-xl border border-[#ECE6D9] cursor-pointer hover:border-[#C5A059]/50 hover:shadow-lg transition-all shadow-sm"
            onClick={() => setShowAIChat(true)}
          >
            <div className="w-12 h-12 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#C5A059]">
               <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-[#061F1A] text-sm">Need help deciding?</p>
              <p className="text-[#061F1A]/50 text-xs">Chat with our AI Concierge</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Smart Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.08)] border border-[#ECE6D9] relative overflow-hidden"
        >
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center z-20 text-center px-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-[#1C6658] mb-6 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-serif font-black text-[#061F1A] mb-2 tracking-tight">Booking Confirmed!</h3>
                <p className="text-[#061F1A]/70 text-sm font-medium">We've just sent the details to your WhatsApp.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <h3 className="font-serif text-2xl font-bold text-[#061F1A] mb-6">Reserve a Table</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#061F1A]/60 uppercase tracking-widest mb-1">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#F9F6F0] border border-[#ECE6D9] rounded-sm px-4 py-3 text-[#061F1A] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#061F1A]/60 uppercase tracking-widest mb-1">WhatsApp Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#F9F6F0] border border-[#ECE6D9] rounded-sm px-4 py-3 text-[#061F1A] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors" 
                  placeholder="+60123456789" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#061F1A]/60 uppercase tracking-widest mb-1">Date & Time</label>
                <input 
                  type="datetime-local" 
                  required
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-[#F9F6F0] border border-[#ECE6D9] rounded-sm px-4 py-3 text-[#061F1A] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#061F1A]/60 uppercase tracking-widest mb-1">Guests</label>
                <select 
                  value={formData.guests}
                  onChange={e => setFormData({...formData, guests: e.target.value})}
                  className="w-full bg-[#F9F6F0] border border-[#ECE6D9] rounded-sm px-4 py-3 text-[#061F1A] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
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
              className="w-full mt-6 flex items-center justify-center space-x-2 px-8 py-4 bg-[#061F1A] hover:bg-black disabled:bg-[#061F1A]/50 text-white font-sans font-bold tracking-widest uppercase rounded-sm transition-colors shadow-md cursor-pointer text-sm"
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
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] z-50 overflow-hidden border border-[#ECE6D9] flex flex-col"
          >
            <div className="bg-white border-b border-[#ECE6D9] p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#C5A059] font-bold font-serif">W</div>
                <div>
                  <h4 className="text-[#061F1A] font-bold text-sm">WAKi Concierge</h4>
                  <p className="text-[#061F1A]/50 font-bold text-[10px] uppercase tracking-widest">AI Assistant</p>
                </div>
              </div>
              <button onClick={() => setShowAIChat(false)} className="text-[#061F1A]/40 hover:text-[#061F1A] transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 h-64 bg-[#FFFBE3] flex flex-col justify-end">
              {/* Mock Chat */}
              <div className="space-y-3 mb-4">
                <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-[#061F1A] max-w-[85%] border border-[#ECE6D9]">
                  Hi there! 👋 I'm your WAKi AI Concierge. How can I help you plan your visit?
                </div>
                <div className="bg-[#F9F6F0] p-3 rounded-xl rounded-tr-none shadow-sm text-sm text-[#061F1A] max-w-[85%] ml-auto border border-[#ECE6D9]">
                  Do you have vegetarian options for a group of 4?
                </div>
              </div>
              <div className="relative">
                <input type="text" placeholder="Type a message..." className="w-full bg-white border border-[#ECE6D9] rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:border-[#C5A059] text-[#061F1A]" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#C5A059] hover:text-[#061F1A] transition-colors">
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
