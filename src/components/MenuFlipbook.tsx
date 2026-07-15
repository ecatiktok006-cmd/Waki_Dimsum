import React, { useRef } from 'react';
import { motion } from 'motion/react';
import HTMLFlipBook from 'react-pageflip';
import { MENU_CATEGORIES } from '../data';
import logoImg from '../assets/images/logo.png';
import bgImg from '../assets/images/bg.png';
import menuFrontPageImg from '../assets/images/menu_front_page.png';
import mostLovedImg from '../assets/images/mostloved.png';
import harGowImg from '../assets/images/dish_har_gow_1783567535786.jpg';
import siewMaiImg from '../assets/images/dish_siew_mai_1783567518247.jpg';
import custardBunImg from '../assets/images/dish_custard_bun_1783567550286.jpg';
import steamImg from '../assets/images/about_steam_1783567485399.jpg';
import platterImg from '../assets/images/about_platter_1783567469486.jpg';
import ingredientsImg from '../assets/images/about_ingredients_1783567499817.jpg';
import heroDimSumImg from '../assets/images/hero_dim_sum_1783567454638.jpg';
import juiceImg from '../assets/images/juice_series_1784088829410.jpg';
import dessertImg from '../assets/images/dessert_series_1784088847264.jpg';

const catHeroImages: Record<string, string> = {
  'cat-0': ingredientsImg,
  'cat-1': platterImg,
  'cat-2': siewMaiImg,
  'cat-3': custardBunImg,
  'cat-4': steamImg,
  'cat-5': platterImg,
  'cat-6': harGowImg,
  'cat-7': heroDimSumImg,
  'cat-9': juiceImg,
  'cat-10': dessertImg,
  'cat-11': heroDimSumImg,
  'cat-12': steamImg,
};

// Need to suppress TypeScript errors for HTMLFlipBook because of missing types
const FlipBook = HTMLFlipBook as any;

const SteamAnimation = () => (
  <svg 
    className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-60 z-20"
    viewBox="0 0 100 100" 
    preserveAspectRatio="none"
  >
    <style>
      {`
        .steam-path {
          fill: none;
          stroke: #ffffff;
          stroke-linecap: round;
          filter: blur(5px);
          animation: steam-rise 6s infinite ease-in;
          transform-origin: bottom;
        }
        .s1 { stroke-width: 6; animation-duration: 7s; animation-delay: 0s; }
        .s2 { stroke-width: 8; animation-duration: 5s; animation-delay: 1.5s; }
        .s3 { stroke-width: 5; animation-duration: 8s; animation-delay: 3s; }
        
        @keyframes steam-rise {
          0% { opacity: 0; transform: translateY(10%) scale(1); }
          30% { opacity: 0.7; }
          100% { opacity: 0; transform: translateY(-40%) scale(1.5); }
        }
      `}
    </style>
    <path className="steam-path s1" d="M 30,100 Q 20,70 35,40 T 30,0" />
    <path className="steam-path s2" d="M 50,100 Q 65,75 45,40 T 55,0" />
    <path className="steam-path s3" d="M 70,100 Q 55,75 75,40 T 65,0" />
  </svg>
);

const DEFAULT_EXPLANATIONS: Record<string, string> = {
  // SILKY JOURNAL (cat-0)
  "Signature Steamed Rice Noodle With Prawn Spring Roll": "Crispy prawn spring rolls wrapped in silky-smooth steamed rice noodles.",
  "Steamed Rice Noodle With Prawn": "Succulent whole prawns nestled in delicate, freshly steamed rice noodle rolls.",
  "Steamed Rice Noodle With Chicken": "Savory tender chicken chunks wrapped in warm, soft steamed rice noodles.",
  "Steamed Rice Noodle": "Classic plain silky steamed rice noodles served with sweet-savory soy sauce.",

  // GOLDEN CRISP (cat-1)
  "Cheesy Prawn Roll": "Succulent prawns and melted gooey cheese fried inside crispy bean curd skin.",
  "Prawn Spring Roll": "Crispy golden spring rolls bursting with fresh shrimp and garden vegetables.",
  "Salad Prawn": "Golden-fried crispy prawns served with a sweet and creamy signature salad dressing.",
  "Deep Fry Yam Pastry": "Flaky, honeycomb pastry filled with a savory, perfectly spiced taro mixture.",
  "Fried Wanton": "Crisp golden-brown dumpling pockets filled with seasoned minced chicken.",
  "Deep Fry Radish Cake": "Savory turnip cake cubes lightly fried for a crisp exterior and soft center.",
  "Shanghai Dumpling": "Pan-fried crispy dumplings packed with succulent minced chicken and chives.",
  "Bamboo Charcoal Yam Bun": "Eye-catching black charcoal buns loaded with smooth, rich sweet yam paste.",
  "Spring Roll": "Crispy golden pastry shells generously stuffed with seasoned mixed vegetables.",
  "Mango Prawn Dumpling": "Delectable fried pockets blending sweet tropical mango with juicy prawns.",
  "Golden Sesame Ball": "Crispy fried sesame-coated glutinous balls with sweet, velvety red bean filling.",

  // STEAMY EDITION (cat-2)
  "Chicken & Shrimp Dumpling": "A delicious combination of minced chicken and plump shrimp steamed in siew mai skin.",
  "Shrimp Dumpling": "Plump, sweet shrimp steamed inside a classic delicate translucent crystal skin.",
  "Spicy Sauce Dumpling": "Juicy steamed dumplings drenched in an aromatic, spicy house-made chili oil.",

  // THE BAO TIMES (cat-3)
  "Golden Custard Bun": "Warm, fluffy steamed bun filled with smooth, sweet salted egg custard.",
  "BBQ Chicken Bun": "Classic soft bun stuffed with tender, sweet, and savory barbecued chicken.",
  "Shanghai Soup Dumpling": "Delicate wrappers holding a rich, savory broth and seasoned minced chicken.",
  "Vegetarian Charcoal Red Bean Bun": "Unique charcoal-infused steamed buns with sweet, earthy red bean filling.",
  "Vegetarian Yam Bun": "Soft, pillowy-white steamed buns loaded with aromatic sweet purple yam paste.",
  "Salted Egg Lotus Bun": "Fragrant steamed buns featuring a rich combination of lotus paste and salted egg.",

  // THE SIDE STORY (cat-4)
  "Stir Fried Radish Cake": "Savory radish cake wok-fried to smoky perfection with crunchy bean sprouts and egg.",
  "Chicken Glutinous Rice": "Sticky, savory glutinous rice steamed with tender marinated chicken and mushrooms.",
  "Chicken Porridge": "Warm, silky rice porridge topped with shredded chicken and fragrant sesame oil.",

  // THE RICE PRESS (cat-5)
  "Butter Milk Chicken Rice": "Crispy chicken cubes drenched in a rich, buttery, and slightly sweet cream sauce.",
  "Kampung Fried Rice": "Smoky village-style fried rice tossed with traditional anchovies and fiery chilies.",
  "Fried Chicken Nasi Lemak": "Fragrant coconut rice served with crunchy fried chicken, spicy sambal, and hardboiled egg.",
  "Dried Chilli Chicken Rice": "Stir-fried chicken tossed with sweet-and-spicy dried chilies, served with rice.",
  "Sweet And Sour Chicken Rice": "Tender chicken in a perfectly balanced tangy-sweet glaze with peppers and onions.",
  "Butter Milk Salted Egg Chicken Rice": "Crispy fried chicken tossed in a savory buttermilk sauce enhanced with rich salted egg yolk.",
  "Sambal Chicken Rice": "Zesty, robust chicken wok-fried in our signature spicy house sambal.",
  "Black Pepper Chicken Rice": "Sizzling wok-fried chicken in a bold, aromatic black pepper sauce with rice.",
  "Curry Buttermilk Chicken Rice": "Golden chicken breast slices simmered in a creamy, mildly spiced curry-infused buttermilk.",
  "Chinese Fried Rice": "Wok-fried rice with fluffy eggs, sweet corn, peas, and savory seasoned chicken.",
  "Tomyam Fried Rice": "Fragrant fried rice packed with hot, sour, and aromatic Thai Tom Yum spices.",
  "Nasi Lemak Biasa": "Traditional fragrant coconut rice served with sweet-spicy sambal, anchovies, and peanuts.",
  "Nasi Lemak With Sambal Prawn": "Coconut-infused rice paired with succulent prawns simmered in sweet-spicy sambal.",

  // THE WOK DISPATCH (cat-6)
  "Penang Fried Keow Teow": "Flat rice noodles wok-fried over intense heat with fresh prawns and savory chives.",
  "Cantonese Style Yee Mee": "Crisp Yee Mee noodles drowned in a silky, rich egg gravy with chicken and vegetables.",
  "Cantonese Style Keow Teow": "Velvety flat noodles smothered in a hot, luxurious Cantonese-style egg flower gravy.",
  "Cantonese Style Yuan Yang": "A texturally rich blend of crispy vermicelli and flat noodles in savory egg gravy.",
  "Signature Fried Noodle": "House-special noodles tossed in high-heat wok action with signature soy sauce.",
  "Cantonese Style Meehon": "Fine rice vermicelli stir-fried and covered in delicious, comforting egg gravy.",

  // THE TEA EDITION (cat-7)
  "Poh Lei": "A dark, rich, and earthy fermented black tea perfect for digesting hearty meals.",
  "Tie Guan Yin": "Fragrant, premium oolong tea with refreshing floral notes and a smooth finish.",
  "Tea King": "A balanced, full-bodied premium tea that offers a highly aromatic brew.",
  "Kok Poh": "A cooling, herbal tea blend that is light and incredibly refreshing in warm weather.",
  "Jasmine Tea": "Gentle, soothing green tea naturally infused with fragrant jasmine blossoms.",
  "Chrysanthemum Tea": "A mild, naturally sweet, caffeine-free herbal infusion made from whole yellow flowers.",
  "Own Tea": "Bring your own premium loose leaves and we will prepare hot water for your table.",

  // THE KOPITIAM POST (cat-8)
  "100 Plus": "Refreshing, carbonated local isotonic drink to quench your thirst.",
  "Coca-Cola": "The classic, world-famous sparkling soda served ice-cold.",
  "Soya": "Sweet, creamy, and nourishing chilled local soybean milk.",
  "Mineral Water": "Fresh, clean bottled mineral water for pure hydration.",
  "Kopi": "Traditional, robust local coffee brewed with sweet condensed milk.",
  "Kopi O": "Classic bold, sweet black coffee served hot or iced.",
  "Teh": "Fragrant local black tea brewed with sweet condensed milk.",
  "Teh O": "Sweet, aromatic black tea served hot or cold.",
  "Cham": "The perfect local hybrid blending rich coffee and fragrant milk tea.",
  "Milo": "Nostalgic, rich, and comforting chocolate malt drink.",
  "Sirap": "Sweet, fragrant rose syrup drink, beautifully pink and chilled.",
  "Sirap Limau": "Tangy local lime juice combined with sweet rose syrup.",
  "Sirap Limau Bandung": "Rich, creamy milk tea combined with sweet rose syrup and fresh lime.",
  "Honey Lemon": "Soothing natural honey paired with fresh, zesty lemon juice.",
  "Lemon Tea": "Brewed black tea infused with refreshing slices of real lemon.",
  "Chinese Tea": "Light, warm, or cold Chinese tea to cleanse the palate.",
  "Sky Juice": "Crisp, plain chilled drinking water.",

  // JUICE SERIES (cat-9)
  "Green Apple": "Freshly pressed green apples, yielding a crisp, sweet, and tart taste.",
  "Orange": "Sweet, vibrant, and packed with vitamin C, freshly squeezed.",
  "Carrot Milk": "Creamy sweet beverage blending fresh, nutritious carrot juice and milk.",
  "Lemon": "Zesty and refreshing ice-cold drink from real squeezed lemons.",
  "Limau": "Sharp and incredibly refreshing juice made from fresh local calamansi lime.",

  // DESSERT SERIES (cat-10)
  "Longan Sea Coconut": "A cooling, traditional sweet soup loaded with juicy longans and sea coconut.",
  "Bamboo Cane": "Traditionally boiled herbal drink featuring sweet bamboo cane and water chestnut.",

  // THE MOCKTAIL TIMES (cat-11)
  "Pink Guava Soda": "Sparkling soda blended with tropical pink guava fruit nectar.",
  "Peach Lemon Fizz": "Crisp, bubbly soda infused with sweet peach puree and zesty fresh lemon.",
  "Lychee Lime Soda": "Effervescent soda packed with plump, sweet lychees and a splash of lime.",
  "Tropical Passion Cooler": "An exotic, refreshing sparkling blend of passion fruit and tangy citrus.",
  "Watermelon Mint Sparkler": "A refreshing ice-cold sparkler combining sweet watermelon juice and fresh mint.",
  "Blue Ocean Citrus": "A visually striking citrus soda with a splash of blue curacao and fresh lime.",

  // FROZEN FRESH (cat-12)
  "Chicken & Shrimp Dumplings (12 pcs)": "Premium chicken & shrimp siew mai, frozen to seal in freshness for home steaming.",
  "Shrimp Dumplings (9 pcs)": "Classic crystal har gao, frozen and ready to steam at your convenience at home.",
  "Salted Egg Dumplings (12 pcs)": "Rich siew mai dumplings with savory salted egg yolk, perfect for quick steaming.",
  "Coriander Dumplings (9 pcs)": "Fragrant coriander and chicken dumplings, frozen fresh for your home dining.",
  "Seaweed Roll (9 pcs)": "Savory seafood rolls wrapped in seaweed, great for steaming or light pan-frying.",
  "Original Dumplings (12 pcs)": "Our signature chicken dumplings, frozen fresh in a family-friendly pack.",
  "Tom Yum Dumplings (12 pcs)": "Tantalizing dumplings infused with hot and sour Tom Yum herbs, frozen fresh.",
  "Black Pepper Dumplings (12 pcs)": "Savory chicken dumplings spiced with cracked black pepper, ready to steam.",
  "Chicken Glutinous Rice (2 pcs)": "Classic Lo Mai Gai sticky rice with chicken and mushrooms, pre-cooked and frozen.",
  "Golden Custard Bun (6 pcs)": "Fluffy bao buns filled with rich golden custard, perfect for quick home breakfasts.",
  "Charcoal Red Bean Bun (6 pcs)": "Soft black charcoal buns with silky sweet red bean paste, ready to steam.",
  "BBQ Chicken Bun (6 pcs)": "Warm, fluffy buns stuffed with succulent sweet BBQ chicken filling, frozen fresh.",
  "Yam Bun (6 pcs)": "Fluffy white buns packed with creamy, aromatic purple yam paste, ready to steam.",
  "Salted Egg Lotus Bun (6 pcs)": "Delectable sweet lotus paste and savory salted egg yolk in a soft bun."
};

// A custom page component required by react-pageflip to use ref
const Page = React.forwardRef<HTMLDivElement, { title?: string; subtitle?: string; description?: string; children: React.ReactNode; number: number; noPadding?: boolean; bgClass?: string }>((props, ref) => {
  return (
    <div className={`${props.bgClass || 'bg-[#f8f5eb]'} h-full w-full shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] border-l border-r border-[#e2d5c3] relative overflow-hidden`} ref={ref}>
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }}
      />
      
      <div className={`${props.noPadding ? '' : 'p-6 md:p-8'} h-full flex flex-col relative z-10`}>
        {/* Double border like in the reference */}
        {!props.noPadding && (
          <>
            <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#1a362a]/10 pointer-events-none z-0" />
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#1a362a]/5 pointer-events-none z-0" />
            
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#8a2a2b]/60 z-0" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#8a2a2b]/60 z-0" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#8a2a2b]/60 z-0" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#8a2a2b]/60 z-0" />
          </>
        )}
        
        <div className="relative z-10 h-full flex flex-col">
          {props.title && (
            <div className="mb-4">
              <h2 className="font-serif text-[2.5rem] md:text-[3.25rem] font-black text-[#1a362a] uppercase tracking-wider leading-[0.9]" style={{ transform: 'scaleY(1.1)', transformOrigin: 'left' }}>
                {props.title}
              </h2>
              {props.subtitle && (
                <p className="font-serif italic text-[#8a2a2b] text-sm md:text-base mt-2">{props.subtitle}</p>
              )}
              
              {(props.title || props.subtitle) && (
                <div className="flex items-center my-3 w-1/3">
                   <div className="flex-1 h-px bg-[#8a2a2b]/20" />
                   <span className="mx-2 text-[10px] text-[#8a2a2b]">❖</span>
                   <div className="flex-1 h-px bg-[#8a2a2b]/20" />
                </div>
              )}
              
              {props.description && (
                 <p className="font-sans text-[#2c3e38]/80 text-xs md:text-sm max-w-[250px] leading-relaxed">{props.description}</p>
              )}
            </div>
          )}
          
          <div className="flex-1 overflow-y-auto hide-scrollbar">
            {props.children}
          </div>
          
          {!props.noPadding && (
            <div className="mt-auto pt-4 flex justify-between items-center font-serif text-[10px] uppercase tracking-widest font-bold text-[#8a2a2b]">
              <span className="flex-1 border-t border-[#8a2a2b]/20 mr-2" />
              <span>{props.number}</span>
              <span className="flex-1 border-t border-[#8a2a2b]/20 ml-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

const CoverPageContent = () => (
  <div className="relative z-10 flex flex-col h-full w-full">
    {/* Top Bar */}
    <div className="flex justify-between items-center text-[#1a362a]/80 font-sans text-[10px] tracking-widest uppercase mb-2 shrink-0">
      <span>Kuala Lumpur, Malaysia</span>
      <span>Est. 2024</span>
    </div>
    <div className="border-t border-b border-[#1a362a] h-1 mb-6 shrink-0"></div>

    {/* THE MENU */}
    <h1 className="font-serif text-[4rem] md:text-[4.5rem] font-black text-[#1a362a] text-center leading-none mb-6 shrink-0" style={{ transform: 'scaleY(1.1)' }}>
      THE MENU
    </h1>

    {/* Info Bar */}
    <div className="border-t border-b border-dashed border-[#8a2a2b]/40 py-4 mb-4 flex items-center justify-between shrink-0">
      <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-[#1a362a] text-left w-1/3 leading-tight">
        Handmade Halal<br/>Dim Sum,
      </p>
      <div className="flex-1 flex justify-center w-1/3">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a362a] rounded-full p-1 border border-[#8a2a2b]/30 flex items-center justify-center">
           <img src={logoImg} alt="WAKi Dim Sum" className="w-full h-full object-contain brightness-200" />
        </div>
      </div>
      <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-[#1a362a] text-right w-1/3 leading-tight">
        Served<br/>Fresh Daily
      </p>
    </div>

    {/* Ribbon Text */}
    <div className="text-center mb-4 shrink-0 flex items-center justify-center space-x-2">
       <span className="text-[#8a2a2b] text-[10px]">❖</span>
       <p className="font-serif italic text-[#1a362a] text-sm md:text-base">Modern Nostalgia on Every Plate</p>
       <span className="text-[#8a2a2b] text-[10px]">❖</span>
    </div>

    {/* Main Photo */}
    <div className="flex-1 min-h-0 mb-4 overflow-hidden bg-[#1a362a] mx-[-1rem] md:mx-[-1.5rem] border-y border-[#1a362a]">
      <img src={menuFrontPageImg} alt="Menu Cover" className="w-full h-full object-cover opacity-90" />
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-b border-[#1a362a] h-1 mt-auto mb-2 shrink-0"></div>
    <div className="flex justify-between items-center text-[#1a362a] font-sans text-[9px] md:text-[10px] tracking-widest uppercase shrink-0 pb-1">
      <span className="w-1/4 text-left leading-tight text-[#8a2a2b]">Freshly<br/>Made</span>
      <span className="flex-1 text-center font-bold tracking-[0.2em]">— Premium Halal Dim Sum —</span>
      <span className="w-1/4 text-right leading-tight text-[#8a2a2b]">Made With<br/>Care</span>
    </div>
  </div>
);

export default function MenuFlipbook() {
  const flipBookRef = useRef(null);
  
  return (
    <section id="menu" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-[#1a362a] uppercase tracking-widest"
            style={{ transform: 'scaleY(1.1)' }}
          >
            The Menu
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-[#8a2a2b] mx-auto rounded" 
          />
          <p className="mt-6 text-[#2c3e38]/80 font-sans max-w-2xl mx-auto text-sm tracking-wider uppercase">
            Flip through our digital menu book
          </p>
        </div>

        <div className="flex justify-center items-center drop-shadow-2xl hidden md:flex">
          <FlipBook
            width={550}
            height={750}
            size="stretch"
            minWidth={315}
            maxWidth={700}
            minHeight={400}
            maxHeight={900}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="flipbook-demo mx-auto"
            ref={flipBookRef}
          >
            {/* Cover Page */}
            <div className="bg-[#f8f5eb] h-full w-full flex flex-col p-4 md:p-6 border-r-[12px] border-[#1a362a] shadow-[inset_-2px_0_15px_rgba(0,0,0,0.1)] rounded-l relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', mixBlendMode: 'multiply' }}
              />
              <CoverPageContent />
            </div>

            {/* Inner Cover (Most Loved) */}
            <Page number={1} noPadding={true}>
              <div className="h-full w-full relative bg-[#f8f5eb] overflow-hidden">
                <img src={mostLovedImg} alt="Most Loved at Waki" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                
                {/* Text Overlay */}
                <div className="relative z-10 pt-10 px-6 flex flex-col items-center text-center">
                   <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] font-black text-[#f8f5eb] uppercase tracking-wide leading-[0.9] mt-2 mb-2 drop-shadow-md" style={{ transform: 'scaleY(1.1)' }}>
                     MOST LOVED<br />AT WAKI
                   </h2>
                   
                   <div className="flex items-center space-x-2 my-3">
                     <span className="text-[#8a2a2b] text-xs">❖</span>
                     <p className="font-serif italic text-[#f8f5eb] text-base md:text-xl drop-shadow">The Favorites Everyone Comes Back For</p>
                     <span className="text-[#8a2a2b] text-xs">❖</span>
                   </div>

                   <div className="text-[#8a2a2b] mb-4">❖</div>
                   
                   <p className="font-sans text-[#f8f5eb]/90 text-xs md:text-sm max-w-sm leading-relaxed px-4 drop-shadow">
                     Our signature handmade dim sum and comfort dishes loved by families, office crowds, and regulars every day.
                   </p>
                </div>

                {/* Legend */}
                <div className="absolute top-6 right-6 border border-[#f8f5eb]/30 p-2.5 bg-[#1a362a]/80 backdrop-blur-sm rounded-sm text-left">
                  <div className="flex items-center mb-1.5">
                    <span className="mr-2 text-xl leading-none">🥇</span>
                    <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#f8f5eb] font-bold">Most Ordered</span>
                  </div>
                  <div className="flex items-center mb-1.5">
                    <span className="mr-2 text-[#8a2a2b] font-serif font-black italic text-lg leading-none">//</span>
                    <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#f8f5eb] font-bold">Chef Recommend</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-xl leading-none">🔥</span>
                    <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#f8f5eb] font-bold">Crispy Favorite</span>
                  </div>
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-6 left-0 w-full text-center px-6">
                  <div className="inline-block border border-[#1a362a]/30 px-6 py-1.5 bg-[#f8f5eb]/90 backdrop-blur-sm">
                    <p className="font-sans text-[#1a362a] text-xs md:text-sm tracking-wide font-medium">Handmade with care. Steamed fresh. Shared with love.</p>
                  </div>
                </div>
              </div>
            </Page>

            {/* Menu Pages dynamically from categories */}
            {MENU_CATEGORIES.map((cat, index) => {
              const isKopitiam = cat.id === 'cat-8';
              const isHomeEdition = cat.id === 'cat-12';
              const bgClass = isHomeEdition ? 'bg-[#f0f4f8]' : 'bg-[#f8f5eb]';
              
              return (
              <Page key={cat.id} title={cat.name} subtitle={cat.subtitle} description={cat.description} number={index + 2} bgClass={bgClass}>
                
                {catHeroImages[cat.id] && (
                  <div className="w-full h-40 mb-6 border border-[#1a362a]/20 p-1 bg-[#f8f5eb] shrink-0 relative">
                    <div className="w-full h-full relative overflow-hidden">
                      <img src={catHeroImages[cat.id]} className="w-full h-full object-cover" alt={cat.name} />
                      {(cat.id === 'cat-2' || cat.id === 'cat-3') && <SteamAnimation />}
                    </div>
                  </div>
                )}
                
                {isHomeEdition && (
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-[#1a362a] text-sm">❄️</span>
                    <span className="font-sans uppercase tracking-[0.2em] text-[#1a362a] text-[10px] font-bold mx-3 border-b border-[#1a362a]">Frozen Fresh</span>
                    <span className="text-[#1a362a] text-sm">❄️</span>
                  </div>
                )}

                {isKopitiam ? (
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between border-b-2 border-[#1a362a] pb-1 mb-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#1a362a]">
                      <div className="w-1/2">Drink</div>
                      <div className="w-1/2 text-right">Option / Code</div>
                    </div>
                    {cat.dishes.map((dish) => {
                      const hotVariant = dish.variants?.find(v => v.type === 'Hot');
                      const coldVariant = dish.variants?.find(v => v.type === 'Cold');
                      const drinkDesc = dish.description || DEFAULT_EXPLANATIONS[dish.name];
                      
                      return (
                        <div key={dish.id} className="flex flex-col py-1 border-b border-[#1a362a]/5 last:border-0 group cursor-default hover:bg-[#8a2a2b]/5 px-1 -mx-1 rounded transition-colors">
                          <div className="flex justify-between items-center">
                            <div className="w-1/2 font-sans font-bold text-[#1a362a] text-[11px] uppercase leading-tight">{dish.name}</div>
                            
                            <div className="w-1/2 text-right flex flex-wrap justify-end gap-1.5 text-[10px]">
                              {hotVariant && (
                                <span className="bg-[#1a362a]/5 px-2 py-0.5 rounded text-[#1a362a] font-sans">
                                  ☕ Hot ({hotVariant.code})
                                </span>
                              )}
                              {coldVariant && (
                                <span className="bg-[#1a362a]/5 px-2 py-0.5 rounded text-[#1a362a] font-sans">
                                  🧊 Cold ({coldVariant.code})
                                </span>
                              )}
                            </div>
                          </div>
                          {drinkDesc && (
                            <p className="font-sans text-[#2c3e38]/60 text-[9px] leading-tight italic mt-0.5">
                              {drinkDesc}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-x-8 gap-y-0">
                    {cat.dishes.map((dish) => {
                      const dishDesc = dish.description || DEFAULT_EXPLANATIONS[dish.name];
                      return (
                        <div key={dish.id} className="flex flex-col group relative border-b border-[#1a362a]/10 py-3 last:border-0 [&:nth-last-child(2):nth-child(odd)]:border-0">
                          <div className="absolute -inset-x-3 inset-y-0 bg-[#8a2a2b]/0 group-hover:bg-[#8a2a2b]/[0.03] rounded-lg transition-colors duration-300 pointer-events-none" />
                          
                            <div className="relative z-10 flex flex-col h-full justify-center">
                              <div className="flex items-start justify-between mb-1 gap-2">
                                <div className="flex items-center flex-wrap gap-1.5">
                                  {dish.code && (
                                    <span className="font-sans text-[#1a362a] font-bold text-[9px] tracking-wider bg-[#1a362a]/10 px-1 py-0.5 rounded-sm shadow-sm transition-colors">{dish.code}</span>
                                  )}
                                  <h4 className="font-serif font-bold text-[#1a362a] text-[13px] leading-snug uppercase transition-colors">{dish.name}</h4>
                                </div>
                              </div>
                              
                              {dishDesc && (
                                 <p className="font-sans text-[#2c3e38]/70 text-[10px] leading-snug mb-2">{dishDesc}</p>
                              )}
                            
                            {dish.variants && (
                              <div className="flex flex-wrap gap-1.5 mt-1">
                                 {dish.variants.map((v, i) => (
                                    <span key={i} className="inline-block bg-[#1a362a]/5 px-2 py-0.5 rounded text-[9px] text-[#2c3e38]/80 font-sans">
                                       {v.type} ({v.code})
                                    </span>
                                 ))}
                              </div>
                            )}
                          </div>
                      </div>
                    );
                    })}
                  </div>
                )}
                
                {cat.addOns && (
                  <div className="mt-6 pt-4 border-t border-double border-[#8a2a2b]/20">
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-[#8a2a2b] text-[10px] mx-2">❖</span>
                      <h4 className="font-serif font-bold text-[#1a362a] text-[12px] tracking-widest uppercase text-center">Add On</h4>
                      <span className="text-[#8a2a2b] text-[10px] mx-2">❖</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {cat.addOns.map((addon, i) => (
                         <span key={i} className="inline-block bg-[#1a362a]/5 px-3 py-1 rounded-full font-sans uppercase text-[#2c3e38] text-[9px] font-bold tracking-wider">
                           {addon.name}
                         </span>
                      ))}
                    </div>
                  </div>
                )}
              </Page>
            );})}

            {/* Back Cover */}
            <div className="bg-[#1a362a] h-full w-full flex flex-col items-center justify-center p-8 border-l-[12px] border-[#0e1d17] shadow-[inset_10px_0_20px_rgba(0,0,0,0.4)] rounded-r relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }} />
              
              <div className="absolute top-4 left-6 right-4 bottom-4 border-2 border-[#8a2a2b]/40 pointer-events-none z-0" />
              <div className="absolute top-6 left-8 right-6 bottom-6 border border-[#8a2a2b]/20 pointer-events-none z-0" />
              
              <div className="relative z-10 w-full flex flex-col items-center justify-center h-full text-center">
                <div className="w-24 h-24 rounded-full border border-[#8a2a2b]/30 p-1 bg-[#1a362a] flex items-center justify-center overflow-hidden mb-8">
                  <img src={logoImg} alt="Waki Dim Sum Logo" className="w-full h-full object-contain rounded-full opacity-80 mix-blend-screen brightness-150" />
                </div>
                
                <h3 className="font-serif text-2xl font-black text-[#f8f5eb] uppercase tracking-[0.15em] mb-4">Thank You</h3>
                <p className="font-serif italic text-[#8a2a2b] text-sm mb-8 max-w-[200px]">For dining with us and sharing in our tradition.</p>
                
                <div className="text-center text-[#f8f5eb]/80 font-sans text-sm space-y-2 font-medium tracking-wider">
                  <p>2, Jalan USJ 1/1C</p>
                  <p>Regalia Business Centre</p>
                  <p>Subang Jaya, Selangor</p>
                  <p className="mt-4 font-mono text-[#8a2a2b]">016-663 4376</p>
                </div>
              </div>
            </div>

          </FlipBook>
        </div>
        
        {/* Mobile View fallback since Flipbook is tricky on very small screens */}
        <div className="md:hidden flex flex-col space-y-8 mt-8">
           <div className="bg-[#f8f5eb] p-6 rounded-xl shadow-lg border border-[#e2d5c3] relative overflow-hidden">
             <div 
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', mixBlendMode: 'multiply' }}
              />
              <div className="relative z-10">
                <div className="mb-10 w-full min-h-[500px]">
                  <CoverPageContent />
                </div>
                
                {MENU_CATEGORIES.map((cat, index) => {
                  const isKopitiam = cat.id === 'cat-8';
                  const isHomeEdition = cat.id === 'cat-12';
                  const bgClass = isHomeEdition ? 'bg-[#f0f4f8]' : 'bg-[#f8f5eb]';

                  return (
                  <div key={cat.id} className={`mb-10 ${bgClass} p-5 rounded-xl border border-[#e2d5c3] shadow-sm relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }} />
                    <div className="relative z-10">
                      {catHeroImages[cat.id] && (
                        <div className="w-full h-32 mb-6 border border-[#1a362a]/20 p-1 bg-[#f8f5eb] shrink-0 relative">
                          <div className="w-full h-full relative overflow-hidden">
                            <img src={catHeroImages[cat.id]} className="w-full h-full object-cover" alt={cat.name} />
                            {(cat.id === 'cat-2' || cat.id === 'cat-3') && <SteamAnimation />}
                          </div>
                        </div>
                      )}
                      <div className="mb-6 text-center">
                        <h3 className="font-serif text-2xl font-black text-[#1a362a] border-b border-[#8a2a2b]/30 inline-block pb-2 uppercase tracking-wide">{cat.name}</h3>
                        {cat.subtitle && <p className="font-serif italic text-[#8a2a2b] text-sm mt-3">{cat.subtitle}</p>}
                        {cat.description && <p className="font-sans text-[#2c3e38]/80 text-xs mt-3 max-w-[280px] mx-auto leading-relaxed">{cat.description}</p>}
                      </div>
                      
                      {isHomeEdition && (
                        <div className="flex items-center justify-center mb-6">
                          <span className="text-[#1a362a] text-sm">❄️</span>
                          <span className="font-sans uppercase tracking-[0.2em] text-[#1a362a] text-[10px] font-bold mx-3 border-b border-[#1a362a]">Frozen Fresh</span>
                          <span className="text-[#1a362a] text-sm">❄️</span>
                        </div>
                      )}
                      
                      {isKopitiam ? (
                        <div className="flex flex-col space-y-3">
                          <div className="flex justify-between border-b-2 border-[#1a362a] pb-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#1a362a]">
                            <div className="w-1/2">Drink</div>
                            <div className="w-1/2 text-right">Option / Code</div>
                          </div>
                          {cat.dishes.map((dish) => {
                            const hotVariant = dish.variants?.find(v => v.type === 'Hot');
                            const coldVariant = dish.variants?.find(v => v.type === 'Cold');
                            const drinkDesc = dish.description || DEFAULT_EXPLANATIONS[dish.name];
                            return (
                              <div key={dish.id} className="flex flex-col py-1.5 border-b border-[#1a362a]/5 last:border-0 group">
                                <div className="flex justify-between items-center">
                                  <div className="w-1/2 font-sans font-bold text-[#1a362a] text-[12px] uppercase leading-tight">{dish.name}</div>
                                  <div className="w-1/2 text-right flex flex-wrap justify-end gap-1.5 text-[10px]">
                                    {hotVariant && (
                                      <span className="bg-[#1a362a]/5 px-2 py-0.5 rounded text-[#1a362a] font-sans">
                                        ☕ Hot ({hotVariant.code})
                                      </span>
                                    )}
                                    {coldVariant && (
                                      <span className="bg-[#1a362a]/5 px-2 py-0.5 rounded text-[#1a362a] font-sans">
                                        🧊 Cold ({coldVariant.code})
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {drinkDesc && (
                                  <p className="font-sans text-[#2c3e38]/60 text-[10px] leading-tight italic mt-0.5">
                                    {drinkDesc}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="flex flex-col mt-4">
                          {cat.dishes.map((dish) => {
                            const dishDesc = dish.description || DEFAULT_EXPLANATIONS[dish.name];
                            return (
                              <div key={dish.id} className="flex flex-col border-b border-[#1a362a]/10 py-4 last:border-0">
                                <div className="flex items-start justify-between mb-1 gap-3">
                                  <div className="flex items-center flex-wrap gap-2">
                                    {dish.code && (
                                      <span className="font-sans text-[#1a362a] font-bold text-[10px] tracking-wider bg-[#1a362a]/10 px-1.5 py-0.5 rounded-sm mr-1">{dish.code}</span>
                                    )}
                                    <h4 className="font-serif font-bold text-[#1a362a] text-[15px] leading-tight uppercase">{dish.name}</h4>
                                  </div>
                                </div>
                                
                                {dishDesc && (
                                   <p className="font-sans text-[#2c3e38]/70 text-[12px] leading-relaxed mb-2">{dishDesc}</p>
                                )}
                                
                                {dish.variants && (
                                  <div className="flex flex-wrap gap-1.5 mt-2">
                                     {dish.variants.map((v, i) => (
                                        <span key={i} className="inline-block bg-[#1a362a]/5 px-2 py-0.5 rounded text-[10px] text-[#2c3e38]/90 font-sans">
                                           {v.type} ({v.code})
                                        </span>
                                     ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                      
                      {cat.addOns && (
                        <div className="mt-6 pt-5 border-t border-double border-[#8a2a2b]/20">
                          <h4 className="font-serif font-bold text-[#1a362a] mb-4 text-center text-sm tracking-widest uppercase">Add On</h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            {cat.addOns.map((addon, i) => (
                               <span key={i} className="inline-block bg-[#1a362a]/5 px-3 py-1 rounded-full font-sans uppercase text-[#2c3e38] text-[10px] font-bold tracking-wider">
                                 {addon.name}
                               </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );})}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
