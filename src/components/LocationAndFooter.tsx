import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export default function LocationAndFooter() {
  return (
    <footer id="contact" className="bg-white border-t border-[#ECE6D9] text-[#061F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Restaurant Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          <div>
            <h3 className="font-serif text-3xl font-black mb-8 tracking-tight">Restaurant Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F9F6F0] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div className="pt-2">
                  <h4 className="font-bold mb-1 text-sm uppercase tracking-widest">Opening Hours</h4>
                  <p className="text-[#061F1A]/70 text-sm leading-relaxed font-medium">Monday - Sunday<br/>10:00 am - 3:00 pm<br/>5:00 pm - 9:00 pm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F9F6F0] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div className="pt-2">
                  <h4 className="font-bold mb-1 text-sm uppercase tracking-widest">Contact</h4>
                  <p className="text-[#061F1A]/70 text-sm leading-relaxed font-medium">Phone: +60 16-663 4376<br/>WhatsApp available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F9F6F0] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div className="pt-2">
                  <h4 className="font-bold mb-1 text-sm uppercase tracking-widest">Address</h4>
                  <p className="text-[#061F1A]/70 text-sm leading-relaxed font-medium">No. 2, Jalan USJ 1/1c, Regalia Business Centre<br/>47620 Subang Jaya, Selangor, Malaysia</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#ECE6D9] flex flex-wrap gap-3">
                <span className="inline-block px-4 py-2 bg-[#Fdfbf7] text-[#1C6658] border border-[#1C6658]/20 rounded-sm font-sans font-bold text-[10px] tracking-widest uppercase shadow-sm">
                  ✓ Halal Certified Kitchen
                </span>
                <span className="inline-block px-4 py-2 bg-[#F9F6F0] text-[#061F1A] border border-[#ECE6D9] rounded-sm font-sans font-bold text-[10px] tracking-widest uppercase shadow-sm">
                  ✓ Free Parking
                </span>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden border border-[#ECE6D9] shadow-[0_15px_40px_rgb(0,0,0,0.08)] relative p-2 bg-[#F9F6F0]">
            <iframe
              title="WAKi Subang Jaya Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1118698114674!2d101.5833054!3d3.0378054000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d7df6395b05%3A0xe5a3637fa9d0121d!2sRegalia%20Business%20Centre!5e0!3m2!1sen!2smy!4v1783567600000!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.6) opacity(0.9)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            />
            <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-sm shadow-md border border-[#ECE6D9]">
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-[#061F1A] hover:text-[#C5A059] transition-colors font-bold text-[10px] uppercase tracking-widest flex items-center space-x-2">
                 <span>NAVIGATE</span>
                 <MapPin className="w-3 h-3 text-[#C5A059]" />
               </a>
            </div>
          </div>

        </div>

        {/* Footer Links & Copyright */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#ECE6D9]">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-full border-2 border-[#061F1A] bg-transparent flex items-center justify-center text-[#061F1A] font-serif font-black text-xs">W</div>
              <span className="font-serif font-black text-[#061F1A] tracking-wider uppercase">WAKi</span>
            </div>
            <p className="text-[#061F1A]/60 text-sm leading-relaxed font-medium">Authentic Malaysian Dim Sum.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#061F1A] text-xs uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[#061F1A]/70 font-medium">
              <li><a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a></li>
              <li><a href="#signature-menu" className="hover:text-[#C5A059] transition-colors">Signature Menu</a></li>
              <li><a href="#menu" className="hover:text-[#C5A059] transition-colors">Full Menu</a></li>
              <li><a href="#contact" className="hover:text-[#C5A059] transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#061F1A] text-xs uppercase tracking-widest">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#061F1A]/70 hover:text-[#061F1A] hover:bg-[#F9F6F0] transition-colors bg-white p-2.5 rounded-full border border-[#ECE6D9] shadow-sm"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-[#061F1A]/70 hover:text-[#061F1A] hover:bg-[#F9F6F0] transition-colors bg-white p-2.5 rounded-full border border-[#ECE6D9] shadow-sm"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-[#061F1A]/70 hover:text-[#061F1A] hover:bg-[#F9F6F0] transition-colors bg-white p-2.5 rounded-full border border-[#ECE6D9] shadow-sm"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <p className="text-sm text-[#061F1A]/50 mb-2 font-medium">© {new Date().getFullYear()} WAKi Malaysian Dim Sum. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
