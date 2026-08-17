import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, X, Bot, User, Sparkles, Loader2 } from 'lucide-react';

interface ReservationCTAProps {
  onReserveClick: () => void;
}

interface ChatMessage {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  time: string;
}

export default function ReservationCTA({ onReserveClick }: ReservationCTAProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', guests: '2', specialRequest: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [dateError, setDateError] = useState('');

  // AI Concierge Chat States
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: "Hi there! 👋 I'm your WAKi AI Concierge. How can I help you plan your visit or explore our handmade dim sum menu today?",
      time: 'Just now'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to latest message
  useEffect(() => {
    if (showAIChat) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, showAIChat, isChatLoading]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = (customText || inputMessage).trim();
    if (!textToSend || isChatLoading) return;

    const userMsgId = `user-${Date.now()}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      role: 'user',
      content: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedHistory = [...chatMessages, userMsg];
    setChatMessages(updatedHistory);
    setInputMessage('');
    setIsChatLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: updatedHistory.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || "Thank you for asking! How else can I assist you with your dining experience?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.warn('Chat request failed, using intelligent offline response:', err);
      
      // Fallback offline response
      const lower = textToSend.toLowerCase();
      let fallbackText = "I'm always here to help! We serve 100% Halal fresh handmade dim sum daily (except Wednesdays). For immediate reservations, feel free to fill out the form here or WhatsApp us at +60 19-533 3827! 🥟✨";

      if (lower.includes('vegetarian') || lower.includes('vegan')) {
        fallbackText = "Yes! We offer delicious vegetarian options like our Golden Custard Buns (B02), Vegetable Spring Rolls, Steamed Mantou, and customizable Stir-Fried Radish Cake (L03). 🌱";
      } else if (lower.includes('halal') || lower.includes('pork')) {
        fallbackText = "100% Halal! All our dim sum is freshly handmade daily with certified Halal ingredients. We have strictly no pork, no lard, and no alcohol. 🥟";
      } else if (lower.includes('hour') || lower.includes('open') || lower.includes('time')) {
        fallbackText = "We are open Monday–Tuesday & Thursday–Sunday from 9:00 AM to 9:00 PM (Closed Wednesdays). Last order is at 8:30 PM! 🕒";
      }

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: fallbackText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, assistantMsg]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      const selectedDate = new Date(selectedValue);
      if (selectedDate.getDay() === 3) { // 3 is Wednesday
        setDateError('We are closed every Wednesday. Please select another date.');
        setFormData({ ...formData, date: '' });
        return;
      }
    }
    setDateError('');
    setFormData({ ...formData, date: selectedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the date & time safely
    let formattedDate = '-';
    let formattedTime = '-';
    if (formData.date) {
      const dateObj = new Date(formData.date);
      if (!isNaN(dateObj.getTime())) {
        formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
        formattedTime = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      } else {
        formattedDate = formData.date;
      }
    }

    // Construct the WhatsApp message for the admin
    const adminPhone = "60195333827"; // Admin phone number
    const text = `Hi 😊

Thank you for your interest in WAKI DIMSUM.

Kindly fill in the details below. Our team will check table availability and get back to you as soon as possible.

👤 Name: ${formData.name || '-'}
📞 Contact Number: ${formData.phone || '-'}
📅 Reservation Date: ${formattedDate}
🕒 Preferred Time: ${formattedTime}
👥 Number of Pax: ${formData.guests || '-'}
📝 Special Request (Optional): ${formData.specialRequest || '-'}

⚠️ *Please note that submitting this form does NOT confirm your reservation. Your booking is only confirmed after you receive a confirmation message from our team.*`;
    
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${adminPhone}?text=${encodedText}`;
    
    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', date: '', guests: '2', specialRequest: '' });
    }, 4000);
  };

  return (
    <section className="relative py-32 bg-[#FFFBE3] overflow-hidden" id="reservation">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#061F1A 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#FFFBE3]/60 to-[#FFFBE3] opacity-80 z-10" />
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[#061F1A]/80 mb-10 max-w-lg space-y-4"
          >
            <p className="text-xl font-bold text-[#061F1A]">Submit a Reservation Request</p>
            <p className="font-medium text-sm leading-relaxed text-[#061F1A]/80">
              Our team will review your request and confirm the availability via WhatsApp. Your reservation is only confirmed after you receive our confirmation message.
            </p>
            <p className="font-medium text-sm leading-relaxed text-[#061F1A]/80">
              Weekend & Public Holiday reservations require pre-order and deposit. Your table is not confirmed until both requirements are completed.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center space-x-4 bg-white p-4 rounded-xl border border-[#ECE6D9] cursor-pointer hover:border-[#C5A059]/50 hover:shadow-lg transition-all shadow-sm"
            onClick={() => setShowAIChat(prev => !prev)}
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
                  onChange={handleDateChange}
                  className={`w-full bg-[#F9F6F0] border ${dateError ? 'border-red-500 text-red-500' : 'border-[#ECE6D9] text-[#061F1A]'} rounded-sm px-4 py-3 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors`} 
                />
                {dateError && <p className="text-red-500 text-xs font-medium mt-1">{dateError}</p>}
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
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7">7 People</option>
                  <option value="8">8 People</option>
                  <option value="9">9 People</option>
                  <option value="10+">10+ People (We will WhatsApp you)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#061F1A]/60 uppercase tracking-widest mb-1">Special Request (Optional)</label>
              <input 
                type="text"
                value={formData.specialRequest}
                onChange={e => setFormData({...formData, specialRequest: e.target.value})}
                className="w-full bg-[#F9F6F0] border border-[#ECE6D9] rounded-sm px-4 py-3 text-[#061F1A] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
                placeholder="High chair, dietary restrictions, indoor seating, etc."
              />
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

      {/* Floating AI Concierge Modal */}
      <AnimatePresence>
        {showAIChat && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-20 md:bottom-24 right-4 sm:right-6 w-[92vw] sm:w-[380px] max-h-[520px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-50 overflow-hidden border border-[#ECE6D9] flex flex-col"
          >
            {/* Header */}
            <div className="bg-white border-b border-[#ECE6D9] p-3.5 sm:p-4 flex justify-between items-center bg-gradient-to-r from-white via-[#FFFBE3]/30 to-white">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#FFFBE3] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] font-bold font-serif shadow-sm">
                  W
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-[#061F1A] font-bold text-sm">WAKi Concierge</h4>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-[#061F1A]/60 font-bold text-[10px] uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
                    AI Assistant
                  </p>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setShowAIChat(false)} 
                className="p-1.5 rounded-full text-[#061F1A]/50 hover:text-[#061F1A] hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="Close Concierge"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Suggestions Chips */}
            <div className="px-3 pt-2.5 pb-1.5 bg-[#FFFBE3]/60 border-b border-[#ECE6D9]/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11px]">
              <button
                type="button"
                onClick={() => handleSendMessage("Do you have vegetarian options for a group of 4?")}
                className="shrink-0 bg-white/90 hover:bg-white text-[#061F1A] border border-[#ECE6D9] px-2.5 py-1 rounded-full font-medium transition-colors hover:border-[#C5A059]/50 shadow-2xs cursor-pointer"
              >
                🌱 Vegetarian options?
              </button>
              <button
                type="button"
                onClick={() => handleSendMessage("What are your top recommended signature dishes?")}
                className="shrink-0 bg-white/90 hover:bg-white text-[#061F1A] border border-[#ECE6D9] px-2.5 py-1 rounded-full font-medium transition-colors hover:border-[#C5A059]/50 shadow-2xs cursor-pointer"
              >
                🥇 Must try dishes
              </button>
              <button
                type="button"
                onClick={() => handleSendMessage("What are your opening hours and location?")}
                className="shrink-0 bg-white/90 hover:bg-white text-[#061F1A] border border-[#ECE6D9] px-2.5 py-1 rounded-full font-medium transition-colors hover:border-[#C5A059]/50 shadow-2xs cursor-pointer"
              >
                🕒 Hours & Location
              </button>
              <button
                type="button"
                onClick={() => handleSendMessage("Is WAKi Dim Sum 100% Halal?")}
                className="shrink-0 bg-white/90 hover:bg-white text-[#061F1A] border border-[#ECE6D9] px-2.5 py-1 rounded-full font-medium transition-colors hover:border-[#C5A059]/50 shadow-2xs cursor-pointer"
              >
                ✨ Halal status
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="p-4 flex-1 h-72 sm:h-80 overflow-y-auto bg-[#FFFBE3]/30 flex flex-col space-y-3">
              {chatMessages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 max-w-[88%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                  >
                    {!isUser && (
                      <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-serif">
                        W
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div
                        className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed border ${
                          isUser
                            ? 'bg-[#061F1A] text-white border-[#061F1A] rounded-tr-none shadow-sm'
                            : 'bg-white text-[#061F1A] border-[#ECE6D9] rounded-tl-none shadow-xs'
                        }`}
                      >
                        {msg.content}
                      </div>
                      <span className={`text-[9px] text-[#061F1A]/40 mt-1 px-1 ${isUser ? 'text-right' : 'text-left'}`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                );
              })}

              {isChatLoading && (
                <div className="flex items-start gap-2 mr-auto max-w-[85%]">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-serif">
                    W
                  </div>
                  <div className="bg-white border border-[#ECE6D9] p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-[#061F1A]/70 flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 text-[#C5A059] animate-spin" />
                    <span>WAKi Concierge is typing...</span>
                  </div>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-[#ECE6D9] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about menu, halal, booking..."
                disabled={isChatLoading}
                className="flex-1 bg-[#F9F6F0] border border-[#ECE6D9] rounded-full px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white text-[#061F1A] placeholder:text-[#061F1A]/40 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isChatLoading}
                className="w-9 h-9 rounded-full bg-[#061F1A] hover:bg-[#C5A059] disabled:opacity-40 text-white flex items-center justify-center shrink-0 transition-colors shadow-sm cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
