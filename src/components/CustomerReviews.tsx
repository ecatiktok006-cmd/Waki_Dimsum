import { useEffect, useState } from 'react';
import { APIProvider, useMapsLibrary } from '@vis.gl/react-google-maps';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { REVIEWS as FALLBACK_REVIEWS } from '../data';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

// Using the user's provided place ID
const DEFAULT_PLACE_ID = 'ChIJu5fjyZRNzDERhlMsF4oloAQ';

function ReviewsFetcher() {
  const placesLib = useMapsLibrary('places');
  const [reviews, setReviews] = useState<any[]>([]);
  const [placeRating, setPlaceRating] = useState<number>(4.8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!placesLib) return;

    async function fetchReviews() {
      try {
        const place = new placesLib.Place({ id: DEFAULT_PLACE_ID });
        await place.fetchFields({ fields: ['reviews', 'rating'] });
        
        if (place.rating) setPlaceRating(place.rating);
        if (place.reviews) {
          // Sort by highest rating or just take first 3
          const sortedReviews = [...place.reviews].sort((a, b) => b.rating - a.rating);
          setReviews(sortedReviews.slice(0, 3));
        }
        setLoading(false);
      } catch (err: any) {
        console.error("Failed to fetch Google Reviews:", err);
        setError(true);
        if (err.message?.includes('PERMISSION_DENIED') || err.message?.includes('blocked')) {
          setErrorMsg("Places API (New) is not enabled for your API key. Please go to Google Cloud Console, find your project, search for 'Places API (New)' and enable it.");
        } else {
          setErrorMsg("Failed to load reviews. Please check your API key configuration.");
        }
        setLoading(false);
      }
    }

    fetchReviews();
  }, [placesLib]);

  if (error && errorMsg) {
    return (
      <div className="py-8 bg-red-50 border border-red-200 rounded-xl max-w-2xl mx-auto shadow-sm text-red-800">
        <h3 className="font-serif text-lg font-bold mb-2">Google Maps API Error</h3>
        <p className="font-sans text-sm mb-4 px-8">{errorMsg}</p>
        <p className="font-sans text-xs italic opacity-80">Showing fallback reviews below.</p>
        <div className="mt-6 pt-6 border-t border-red-200/50">
          <ReviewsList reviews={FALLBACK_REVIEWS} placeRating={4.8} />
        </div>
      </div>
    );
  }

  const displayReviews = (reviews.length > 0 && !error) ? reviews.map(r => ({
    id: r.name,
    name: r.authorAttribution?.displayName || 'Google User',
    initials: r.authorAttribution?.displayName?.substring(0, 1) || 'G',
    rating: r.rating || 5,
    text: r.text || '',
    date: r.publishTime ? new Date(r.publishTime).toLocaleDateString() : 'Recent',
  })) : FALLBACK_REVIEWS;

  return <ReviewsList reviews={displayReviews} placeRating={placeRating} />;
}

function ReviewCard({ review, idx }: { review: any; idx: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text && review.text.length > 150;

  return (
    <motion.div
      key={review.id || idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="bg-white/80 backdrop-blur-sm p-8 lg:p-10 border border-[#1a362a]/10 hover:border-[#8a2a2b]/30 transition-colors duration-500 text-left flex flex-col h-full relative group shadow-sm hover:shadow-md"
    >
      <div className="absolute top-4 right-6 text-[#1a362a]/5 font-serif text-[8rem] leading-none font-black select-none pointer-events-none group-hover:text-[#8a2a2b]/5 transition-colors duration-500">
        "
      </div>
      
      <div className="flex text-[#D4AF37] mb-6 relative z-10">
        {[...Array(Math.floor(review.rating))].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <div className="mb-8 flex-grow relative z-10">
        <p className={`font-serif italic text-[#1a362a] text-lg lg:text-xl leading-relaxed ${!expanded && isLong ? 'line-clamp-4' : ''}`}>
          "{review.text}"
        </p>
        {isLong && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-[10px] font-bold font-sans text-[#8a2a2b] uppercase tracking-widest mt-4 hover:text-[#1a362a] transition-colors focus:outline-none flex items-center"
          >
            <span className="w-4 h-[1px] bg-current inline-block mr-2"></span>
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
      <div className="flex items-center space-x-4 mt-auto relative z-10 border-t border-[#1a362a]/10 pt-6">
        <div className="w-12 h-12 rounded-full bg-[#1a362a] text-[#f8f5eb] flex items-center justify-center font-bold font-serif text-lg shrink-0 border border-[#8a2a2b]/30">
          {review.initials}
        </div>
        <div className="min-w-0">
          <h4 className="font-sans font-bold text-[13px] tracking-wider uppercase text-[#1a362a] truncate">{review.name}</h4>
          <span className="text-[10px] font-sans tracking-widest uppercase text-[#1a362a]/50">{review.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewsList({ reviews, placeRating }: { reviews: any[], placeRating: number }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex text-[#D4AF37] mb-3">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
        </div>
        <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a362a]/70">
          Rated {placeRating.toFixed(1)}/5 on Google Reviews
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-start">
        {reviews.map((review, idx) => (
          <ReviewCard key={review.id || idx} review={review} idx={idx} />
        ))}
      </div>
    </>
  );
}

export default function CustomerReviews() {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFBE3] text-[#1a362a] relative border-t border-[#ECE6D9]">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1a362a 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col items-center mb-10">
          <span className="font-sans text-[10px] tracking-widest uppercase text-[#8a2a2b] font-bold mb-3">Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-[#1a362a] uppercase tracking-wide">What Our Guests Say</h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto rounded"></div>
        </div>
        
        {!hasValidKey ? (
          <div className="py-12 bg-white/50 border border-[#e2d5c3] rounded-xl max-w-2xl mx-auto shadow-sm">
            <h3 className="font-serif text-xl font-bold mb-4 text-[#8a2a2b]">Google Maps API Key Required</h3>
            <p className="font-sans text-sm mb-4 px-8 text-[#2c3e38]">
              To fetch live reviews from Google Maps, you need to add your Google Maps Platform API key.
            </p>
            <ol className="text-left max-w-md mx-auto font-sans text-sm space-y-2 mb-6 text-[#1a362a]">
              <li><strong>1.</strong> Get an API Key from Google Cloud Console.</li>
              <li><strong>2.</strong> Open <strong>Settings</strong> (⚙️) in the top-right corner.</li>
              <li><strong>3.</strong> Select <strong>Secrets</strong>.</li>
              <li><strong>4.</strong> Add <code>GOOGLE_MAPS_PLATFORM_KEY</code> with your key.</li>
            </ol>
            <p className="font-sans text-xs opacity-70 italic">
              Showing fallback reviews preview below...
            </p>
            <div className="mt-8 border-t border-[#e2d5c3] pt-8 px-4">
               <ReviewsList reviews={FALLBACK_REVIEWS} placeRating={4.8} />
            </div>
          </div>
        ) : (
          <APIProvider apiKey={API_KEY} version="weekly">
            <ReviewsFetcher />
          </APIProvider>
        )}
      </div>
    </section>
  );
}
