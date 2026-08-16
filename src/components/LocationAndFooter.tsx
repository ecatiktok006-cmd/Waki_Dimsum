import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Star, Check, MessageSquare } from 'lucide-react';

export default function LocationAndFooter() {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <footer id="contact" className="bg-white border-t border-[#ECE6D9] text-[#061F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Restaurant Info & Map */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="font-script text-3xl text-[#C5A059] block mb-2 -rotate-2">Come visit us</span>
            <h3 className="font-serif text-4xl sm:text-5xl font-black tracking-tight text-[#061F1A] uppercase">Find Our Restaurant</h3>
            <div className="w-16 h-1 bg-[#C5A059] mx-auto mt-6 rounded-sm" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Location & Map */}
            <div className="bg-white p-8 rounded-3xl border border-[#ECE6D9] shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#F9F6F0] flex items-center justify-center mb-6 shrink-0">
                <MapPin className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h4 className="font-serif font-bold text-[#061F1A] text-2xl mb-3">Location</h4>
              <p className="text-[#061F1A]/70 text-sm leading-relaxed font-medium mb-8">
                No. 2, Jalan USJ 1/1c, Regalia Business Centre<br/>47620 Subang Jaya, Selangor
              </p>
              
              <div className="mt-auto relative h-48 rounded-2xl overflow-hidden border border-[#ECE6D9] group">
                <div className="absolute inset-0 bg-[#F9F6F0] pointer-events-none z-0" />
                <iframe
                  title="WAKi Subang Jaya Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1434406908716!2d101.60240037543437!3d3.056264153715647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d94c9e397bb%3A0x4a0258a172c5386!2sWaki%20Dim%20Sum!5e0!3m2!1sen!2smy!4v1786863992678!5m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.4) contrast(1.1) opacity(0.9)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10 transition-all duration-700 group-hover:filter-none"
                />
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="absolute bottom-3 right-3 z-20 bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-sm border border-[#ECE6D9] hover:scale-105 transition-transform text-[#061F1A] flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest pr-1">Maps</span>
                </a>
              </div>
            </div>

            {/* Card 2: Hours */}
            <div className="bg-white p-8 rounded-3xl border border-[#ECE6D9] shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#F9F6F0] flex items-center justify-center mb-6 shrink-0">
                <Clock className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h4 className="font-serif font-bold text-[#061F1A] text-2xl mb-1">Opening Hours</h4>
              <p className="text-[#C5A059] font-sans font-bold text-xs uppercase tracking-widest mb-6">
                Open Mon, Tue & Thu–Sun <span className="text-[#061F1A]/20 font-normal">|</span> Closed Wednesday
              </p>
              
              <div className="space-y-4 flex-1">
                <div className="bg-[#F9F6F0] p-5 rounded-2xl border border-[#ECE6D9]/50">
                  <span className="font-sans text-xs text-[#061F1A]/50 font-bold uppercase tracking-wider block mb-1">Lunch Service</span>
                  <span className="font-serif text-xl font-bold text-[#061F1A]">10:00 AM – 3:00 PM</span>
                </div>
                <div className="bg-[#F9F6F0] p-5 rounded-2xl border border-[#ECE6D9]/50">
                  <span className="font-sans text-xs text-[#061F1A]/50 font-bold uppercase tracking-wider block mb-1">Dinner Service</span>
                  <span className="font-serif text-xl font-bold text-[#061F1A]">5:00 PM – 9:00 PM</span>
                </div>
              </div>


            </div>

            {/* Card 3: Feedback Form */}
            <div className="bg-[#061F1A] p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col text-white min-h-[420px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1C6658]/40 via-transparent to-transparent opacity-50 pointer-events-none" />
              
              <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10 shrink-0">
                <MessageSquare className="w-5 h-5 text-[#C5A059]" />
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col flex-1">
                  <h4 className="font-serif font-bold text-white text-2xl mb-1">Send Us Feedback</h4>
                  <p className="text-white/60 text-xs font-medium mb-6">
                    Your opinions help us perfect our craft.
                  </p>
                  
                  {/* Rating selection */}
                  <div className="mb-4">
                    <label className="block text-[10px] font-bold text-white/50 tracking-widest uppercase mb-2">
                      Your Rating
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="focus:outline-none transition-transform active:scale-95"
                        >
                          <Star
                            className={`w-6 h-6 transition-colors duration-150 ${
                              star <= (hoverRating ?? rating)
                                ? 'fill-[#C5A059] text-[#C5A059]'
                                : 'text-white/20 hover:text-white/40'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Feedback Message */}
                  <div className="mb-4">
                    <label className="block text-[10px] font-bold text-white/50 tracking-widest uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Share your dining experience or suggestions..."
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#C5A059] focus:bg-white/10 text-white placeholder-white/30 resize-none transition-all duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-6">
                    <label className="block text-[10px] font-bold text-white/50 tracking-widest uppercase mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#C5A059] focus:bg-white/10 text-white placeholder-white/30 transition-all duration-200"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#C5A059] hover:bg-[#D4AF68] text-[#061F1A] font-bold py-3.5 px-6 rounded-xl transition-all duration-200 uppercase tracking-widest text-[11px] font-sans shadow-lg mt-auto hover:translate-y-[-1px] active:translate-y-[1px]"
                  >
                    Submit Feedback
                  </button>
                </form>
              ) : (
                <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 py-8">
                  <div className="w-16 h-16 rounded-full bg-[#1C6658]/30 flex items-center justify-center mb-6 animate-bounce">
                    <Check className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  <h4 className="font-serif font-bold text-white text-2xl mb-3">Thank You!</h4>
                  <p className="text-white/75 text-sm leading-relaxed max-w-[240px] mb-8">
                    We truly appreciate your feedback and hope to welcome you back again soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFeedback('');
                      setEmail('');
                      setRating(5);
                    }}
                    className="text-xs font-bold uppercase tracking-widest text-[#C5A059] hover:text-[#D4AF68] transition-colors border-b border-[#C5A059]/30 pb-0.5 hover:border-[#C5A059]"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Footer Links & Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-[#ECE6D9]">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#061F1A] bg-transparent flex items-center justify-center text-[#061F1A] font-serif font-black text-xs">W</div>
              <span className="font-serif font-black text-[#061F1A] tracking-wider uppercase">WAKI DIMSUM</span>
            </div>
            <div className="space-y-2 flex flex-col">
              <p className="font-montserrat font-semibold uppercase tracking-wider text-[#355B4C] text-xs md:text-[13px] lg:text-sm leading-relaxed">
                HANDMADE HALAL DIM SUM,<br />
                FRESHLY STEAMED DAILY.
              </p>
              <p className="font-cormorant italic text-[#6A4B3B] text-[11px] xs:text-[13px] sm:text-[15px] md:text-base lg:text-lg whitespace-nowrap leading-none pt-0.5">
                “Great Taste Unites The Differences Among Us.”
              </p>
            </div>
            <div className="pt-2">
              <h4 className="font-bold mb-3 text-[#061F1A] text-xs uppercase tracking-widest">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/WAKiDimSums" target="_blank" rel="noopener noreferrer" className="text-[#061F1A]/70 hover:text-[#061F1A] hover:bg-[#F9F6F0] transition-colors bg-white p-2.5 rounded-full border border-[#ECE6D9] shadow-sm"><Facebook className="w-4 h-4" /></a>
                <a href="https://www.instagram.com/wakidimsum/" target="_blank" rel="noopener noreferrer" className="text-[#061F1A]/70 hover:text-[#061F1A] hover:bg-[#F9F6F0] transition-colors bg-white p-2.5 rounded-full border border-[#ECE6D9] shadow-sm"><Instagram className="w-4 h-4" /></a>
                <a href="https://www.tiktok.com/@wakidimsum?lang=en" target="_blank" rel="noopener noreferrer" className="text-[#061F1A]/70 hover:text-[#061F1A] hover:bg-[#F9F6F0] transition-colors bg-white p-2.5 rounded-full border border-[#ECE6D9] shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#061F1A] text-xs uppercase tracking-widest">OPENING HOURS</h4>
            <div className="space-y-3 text-sm text-[#061F1A]/70 font-medium leading-relaxed">
              <p className="font-bold text-[#061F1A]">Mon, Tue & Thu–Sun</p>
              <p>10:00 AM–3:00 PM · 5:00 PM–9:00 PM</p>
              <p className="text-red-700 font-semibold">Closed on Wednesday</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#061F1A] text-xs uppercase tracking-widest">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm text-[#061F1A]/70 font-medium">
              <li><a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-[#C5A059] transition-colors">Full Menu</a></li>
              <li><a href="#contact" className="hover:text-[#C5A059] transition-colors">Reservations</a></li>
              <li><a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact & Location</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#ECE6D9] flex flex-col md:flex-row justify-between items-center text-sm text-[#061F1A]/50 font-medium">
          <p>© 2026 WAKI DIMSUM. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
