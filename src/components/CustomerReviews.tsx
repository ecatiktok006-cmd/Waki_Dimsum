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

function ReviewsList({ reviews, placeRating }: { reviews: any[], placeRating: number }) {
  return (
    <>
      <div className="flex items-center justify-center space-x-2 mb-16">
        <div className="flex text-[#D4AF37]">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
        </div>
        <span className="font-sans font-bold">{placeRating.toFixed(1)}/5 on Google Reviews</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-xl border border-[#e2d5c3] shadow-sm text-left flex flex-col"
          >
            <div className="flex text-[#D4AF37] mb-4">
              {[...Array(Math.floor(review.rating))].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="font-sans text-[#2c3e38]/90 mb-6 flex-grow leading-relaxed line-clamp-5">
              "{review.text}"
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#1a362a]/10 text-[#1a362a] flex items-center justify-center font-bold font-serif shrink-0">
                {review.initials}
              </div>
              <div className="min-w-0">
                <h4 className="font-sans font-bold text-sm text-[#1a362a] truncate">{review.name}</h4>
                <span className="text-xs text-[#1a362a]/60">{review.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-[#FFFBE3] text-[#1a362a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">What Our Guests Say</h2>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded mb-6" />
        
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
