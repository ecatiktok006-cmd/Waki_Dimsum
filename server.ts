import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Concierge API Route
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      const systemPrompt = `You are the friendly, knowledgeable, and polite AI Concierge for "WAKi Dim Sum" (Handmade Halal Dim Sum in Subang Jaya, Malaysia).
Your goal is to assist restaurant guests warmly, accurately, and concisely.

Restaurant Information:
- Restaurant Name: WAKi Dim Sum (Handcrafted Halal Dim Sum)
- Location: No. 2, Jalan USJ 1/1c, Regalia Business Centre, 47620 Subang Jaya, Selangor, Malaysia
- Operating Hours:
  * Monday & Tuesday: 9:00 AM – 9:00 PM
  * Wednesday: CLOSED
  * Thursday to Sunday: 9:00 AM – 9:00 PM
- Halal Status: 100% Halal certified ingredients, strictly no pork, no lard, no alcohol. All recipes handmade fresh daily.
- Reservations & Contact:
  * Phone/WhatsApp: +60 19-533 3827 / +60 16-663 4376
  * Online reservation requests can be submitted on the website form or via WhatsApp.
  * Weekend & Public Holiday reservations require pre-order and deposit.
  * Walk-ins are always welcomed (first-come, first-served basis).

Top Signature / Must-Try Dishes:
1. Chicken & Shrimp Dumplings (D01) - 🥇 Best Seller, juicy steamed dumplings with succulent prawn and chicken.
2. Chee Cheong Fun with Prawn Spring Roll (C01) - Crispy golden prawn spring roll wrapped inside silky handmade rice noodle rolls.
3. Cheesy Prawn Roll (F17) - Crispy fried roll packed with seasoned prawn and melted cheese.
4. Golden Custard Bun (B02) - 🥇 Steamed bun with molten golden salted egg custard (vegetarian-friendly).
5. Stir Fried Radish Cake (L03) - Wok-tossed radish cake with fragrant egg, bean sprouts, and chili paste.
6. Prawn Spring Roll (F06) - Deep-fried golden crispy roll filled with seasoned prawns.
7. Spicy Sauce Dumpling (D12) - Plump dumplings in spicy, tangy Sichuan-style aromatic chili sauce.
8. Signature Fried Noodle (M02) - Wok-hei infused Cantonese fried noodles with chicken and seafood.
9. Butter Milk Chicken Rice (R04) - Creamy, buttery, aromatic curry-leaf infused buttermilk chicken served with steamed rice.

Dietary Guidance:
- Vegetarian options: Golden Custard Bun (B02), Vegetable Spring Rolls, Century Egg Congee (can be prepared vegetarian), Steamed Mantou, Sweet Red Bean/Custard buns, herbal teas.
- Seafood-free options: Butter Milk Chicken Rice, Signature Chicken Pau, Steamed Chicken Dumplings, Fried Chicken Dim Sum items.
- Halal: 100% Muslim-friendly and Halal ingredients.

Style Guidelines:
- Keep answers warm, courteous, brief (2-4 sentences or clean bullet points), and appetizing.
- Add appropriate emojis (🥢, 🥟, ✨).
- Invite them to reserve a table or visit the restaurant in Subang Jaya if relevant.`;

      if (apiKey) {
        // List of candidate models to try in case of temporary 503 high demand spikes
        const candidateModels = ['gemini-3.7-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];
        let generatedReply: string | null = null;

        const ai = new GoogleGenAI({ apiKey });
        
        // Format conversation history for Gemini
        const contents: any[] = [];
        
        if (Array.isArray(history)) {
          for (const h of history) {
            if (h.role && h.content) {
              contents.push({
                role: h.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: h.content }]
              });
            }
          }
        }

        contents.push({
          role: 'user',
          parts: [{ text: message }]
        });

        for (const modelName of candidateModels) {
          try {
            const response = await ai.models.generateContent({
              model: modelName,
              contents: contents,
              config: {
                systemInstruction: systemPrompt,
                temperature: 0.7,
                maxOutputTokens: 500,
              }
            });

            if (response.text) {
              generatedReply = response.text;
              break; // Success, exit loop
            }
          } catch (modelErr: any) {
            // Check for 503 or transient errors and try next fallback model
            const isTransient = modelErr?.status === 503 || modelErr?.message?.includes('503') || modelErr?.message?.includes('demand') || modelErr?.status === 429;
            if (!isTransient) {
              console.warn(`Gemini generation on ${modelName} returned:`, modelErr?.message || modelErr);
            }
          }
        }

        if (generatedReply) {
          return res.json({ reply: generatedReply });
        }
      }

      // Intelligent Local Rule-Based Fallback Responder
      const msgLower = message.toLowerCase();
      let reply = '';

      if (msgLower.includes('vegetarian') || msgLower.includes('vegan') || msgLower.includes('meatless')) {
        reply = `Yes, we have delicious vegetarian-friendly selections! 🌱 You can enjoy our award-winning Golden Custard Buns (B02), crispy Vegetable Spring Rolls, Steamed Mantou Buns, and customizable Stir-Fried Radish Cake (L03) or Porridge. For a group of 4, we also recommend pairing these with our fragrant herbal teas and steamed sweets!`;
      } else if (msgLower.includes('halal') || msgLower.includes('pork') || msgLower.includes('muslim') || msgLower.includes('alcohol')) {
        reply = `Yes! WAKi Dim Sum is 100% Halal-certified and Muslim-friendly. All our dim sum is freshly handmade daily using only certified Halal ingredients with strictly no pork, no lard, and no alcohol. 🥟✨`;
      } else if (msgLower.includes('hour') || msgLower.includes('open') || msgLower.includes('time') || msgLower.includes('close')) {
        reply = `Our opening hours are: 
• Monday & Tuesday: 9:00 AM – 9:00 PM
• Wednesday: CLOSED
• Thursday to Sunday: 9:00 AM – 9:00 PM
Last order is at 8:30 PM. We'd love to have you over! 🕒`;
      } else if (msgLower.includes('location') || msgLower.includes('where') || msgLower.includes('address') || msgLower.includes('subang')) {
        reply = `We are located at:
📍 No. 2, Jalan USJ 1/1c, Regalia Business Centre, 47620 Subang Jaya, Selangor.
There is ample street and commercial parking available right in front of our restaurant! 🚗`;
      } else if (msgLower.includes('recommend') || msgLower.includes('must try') || msgLower.includes('signature') || msgLower.includes('best')) {
        reply = `Our top crowd favorites are:
🥇 Chicken & Shrimp Dumplings (D01)
✨ Chee Cheong Fun with Prawn Spring Roll (C01)
🧀 Cheesy Prawn Roll (F17)
🌟 Golden Molten Custard Bun (B02)
🍜 Signature Fried Noodle (M02)
🍗 Butter Milk Chicken Rice (R04)`;
      } else if (msgLower.includes('reserve') || msgLower.includes('booking') || msgLower.includes('table') || msgLower.includes('deposit')) {
        reply = `You can easily book a table using our reservation form on this page or via WhatsApp at +60 19-533 3827! Note that for weekends and public holidays, a pre-order and deposit are required to confirm your table. 📝`;
      } else {
        reply = `Welcome to WAKi Dim Sum! 👋 We serve fresh, handmade 100% Halal dim sum daily in Subang Jaya. Whether you'd like menu recommendations, dietary advice, or help with table bookings, I'm here to help!`;
      }

      return res.json({ reply });
    } catch (err: any) {
      console.error('Concierge chat error:', err);
      return res.status(500).json({ 
        reply: "I'm having a little trouble at the moment, but you can reach our team directly on WhatsApp at +60 19-533 3827! 🥟" 
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Vite middleware in dev mode / static files in production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`WAKi Dimsum server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
