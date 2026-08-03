export default async function handler(req: any, res: any) {
  const placeId = req.query?.placeId || 'ChIJu5fjyZRNzDERhlMsF4oloAQ';
  const apiKey = process.env.GOOGLE_MAPS_PLATFORM_KEY;

  if (!apiKey || apiKey === 'YOUR_API_KEY') {
    console.warn("API Error: Missing GOOGLE_MAPS_PLATFORM_KEY");
    return res.status(500).json({ error: 'Google Maps API key is missing on the server.' });
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating`;
    const response = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'Content-Type': 'application/json',
        // Forward the referer to pass Google Maps API key HTTP restrictions
        ...(req.headers.referer ? { 'Referer': req.headers.referer } : {})
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (response.status !== 403) {
        console.warn(`Google Places API Error (${response.status}):`, errorText);
      }
      return res.status(response.status).json({ error: 'Failed to fetch reviews from Google Places API.', status: response.status });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error: any) {
    console.warn("Internal Server Error fetching reviews:", error.message || error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
