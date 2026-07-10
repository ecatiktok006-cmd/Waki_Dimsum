import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export default function LocationAndFooter() {
  return (
    <footer id="contact" className="bg-jade-900 border-t border-gold-500/20 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Restaurant Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          <div>
            <h3 className="font-serif text-3xl font-bold mb-8">Restaurant Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-gold-400 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Opening Hours</h4>
                  <p className="text-cream-200/70 text-sm leading-relaxed">Monday - Sunday<br/>10:00 am - 3:00 pm<br/>5:00 pm - 9:00 pm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-gold-400 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Contact</h4>
                  <p className="text-cream-200/70 text-sm leading-relaxed">Phone: +60 16-663 4376<br/>WhatsApp available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gold-400 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-cream-200/70 text-sm leading-relaxed">No. 2, Jalan USJ 1/1c, Regalia Business Centre<br/>47620 Subang Jaya, Selangor, Malaysia</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gold-500/10 flex flex-wrap gap-3">
                <span className="inline-block px-4 py-2 bg-green-900/50 text-green-400 border border-green-500/20 rounded font-display font-bold text-xs tracking-widest uppercase">
                  ✓ Halal Certified Kitchen
                </span>
                <span className="inline-block px-4 py-2 bg-jade-800 text-cream-200 border border-gold-500/10 rounded font-display font-bold text-xs tracking-widest uppercase">
                  ✓ Free Parking
                </span>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-xl overflow-hidden border-2 border-gold-500/20 shadow-2xl relative">
            <iframe
              title="WAKi Subang Jaya Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1118698114674!2d101.5833054!3d3.0378054000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d7df6395b05%3A0xe5a3637fa9d0121d!2sRegalia%20Business%20Centre!5e0!3m2!1sen!2smy!4v1783567600000!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(110deg) brightness(95%) contrast(90%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-jade-950 px-4 py-2 rounded shadow-lg border border-gold-500/20">
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-gold-400 font-bold text-xs flex items-center space-x-2">
                 <span>NAVIGATE</span>
                 <MapPin className="w-3 h-3" />
               </a>
            </div>
          </div>

        </div>

        {/* Footer Links & Copyright */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-gold-500/10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-full border border-gold-400 bg-jade-950 flex items-center justify-center text-gold-400 font-serif font-bold text-xs">W</div>
              <span className="font-display font-bold text-cream-50 tracking-widest">WAKi</span>
            </div>
            <p className="text-cream-200/50 text-sm leading-relaxed">Authentic Malaysian Dim Sum.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-cream-200/70">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#signature-menu" className="hover:text-gold-400 transition-colors">Signature Menu</a></li>
              <li><a href="#menu" className="hover:text-gold-400 transition-colors">Full Menu</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gold-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-200/70 hover:text-gold-400 transition-colors bg-jade-950 p-2 rounded-full border border-gold-500/10"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-cream-200/70 hover:text-gold-400 transition-colors bg-jade-950 p-2 rounded-full border border-gold-500/10"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-cream-200/70 hover:text-gold-400 transition-colors bg-jade-950 p-2 rounded-full border border-gold-500/10"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <p className="text-sm text-cream-200/50 mb-2">© {new Date().getFullYear()} WAKi Malaysian Dim Sum. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
