import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HTMLFlipBook from 'react-pageflip';
import { MENU_CATEGORIES } from '../data';
import logoImg from '../assets/images/logo.png';
import bgImg from '../assets/images/bg.png';
import menuFrontPageImg from '../assets/images/menu_front_page.png';
import mostLovedImg from '../assets/images/mostloved.png';
import harGowImg from '../assets/images/dish_har_gow_1783567535786.jpg';
import siewMaiImg from '../assets/images/steamy_edition_cover_prawn_siew_mai_1786859999733.jpg';
import custardBunImg from '../assets/images/dish_custard_bun_1783567550286.jpg';
import steamImg from '../assets/images/about_steam_1783567485399.jpg';
import platterImg from '../assets/images/about_platter_1783567469486.jpg';
import ingredientsImg from '../assets/images/about_ingredients_1783567499817.jpg';
import heroDimSumImg from '../assets/images/hero_dim_sum_1783567454638.jpg';
import juiceImg from '../assets/images/juice_series_1784088829410.jpg';
import dessertImg from '../assets/images/dessert_series_1784088847264.jpg';
import top10BgImg from '../assets/images/top10_bg.png';
import img01 from '../assets/images/Chicken dumpling.png';
import img02 from '../assets/images/Cheongfan.png';
import img03 from '../assets/images/Cheesy Prawn Roll.png';
import img04 from '../assets/images/Golden Custard bun.png';
import img05 from '../assets/images/Stir Radish Cake.png';
import img06 from '../assets/images/Prawn Spring Roll.png';
import img07 from '../assets/images/Spicy Sauce dumpling.png';
import img08 from '../assets/images/Signature Fried Noodle.png';
import img09 from '../assets/images/Buttermilk Chicken Rice.png';

// Newly Generated Images
import cheeCheongFunImg from '../assets/images/chee_cheong_fun_new_1786798471175.jpg';
import friedDimSumImg from '../assets/images/fried_dim_sum_1784880537552.jpg';
import congeeSidesImg from '../assets/images/congee_sides_1784880591182.jpg';
import nasiLemakImg from '../assets/images/nasi_lemak_chicken_rice_1784880558182.jpg';
import wokNoodlesImg from '../assets/images/wok_noodles_1784880572372.jpg';
import kopitiamDrinksImg from '../assets/images/kopitiam_drinks_1784880507463.jpg';
import mocktailsImg from '../assets/images/mocktails_1784880606773.jpg';
import frozenDimSumImg from '../assets/images/frozen_dim_sum_1784880624167.jpg';

const catHeroImages: Record<string, string> = {
  'cat-1': friedDimSumImg,
  'cat-2': siewMaiImg,
  'cat-3': custardBunImg,
  'cat-4': congeeSidesImg,
  'cat-5': nasiLemakImg,
  'cat-6': wokNoodlesImg,
  'cat-7': heroDimSumImg,
  'cat-8': kopitiamDrinksImg,
  'cat-9': juiceImg,
  'cat-10': dessertImg,
  'cat-11': mocktailsImg,
  'cat-12': frozenDimSumImg,
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
  "Chee Cheong Fun With Prawn Spring Roll": "Handmade halal silky chee cheong fun paired with crispy fresh prawn beancurd roll.",
  "Chee Cheong Fun With Prawn": "Handmade halal smooth rice rolls filled with juicy fresh prawns and savoury sauce.",
  "Chee Cheong Fun With Chicken Char-Siu": "Handmade halal chee cheong fun filled with sweet savoury chicken char-siu.",
  "Chee Cheong Fun": "Handmade halal silky smooth rice rolls served with fragrant special soy sauce.",

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
  "Shanghai Soup Dumpling 上海小笼包": "Handmade halal soup dumplings bursting with rich savoury broth and juicy filling.",
  "Golden Custard Bun 流沙包": "Handmade halal fluffy buns with rich molten salted egg custard centre.",
  "Charcoal Red Bean Bun 豆沙包": "Handmade halal charcoal buns filled with smooth sweet red bean paste.",
  "Chicken Char-Siu Bun 密汁鸡叉烧包": "Handmade halal fluffy buns packed with sweet savoury chicken char-siu filling.",
  "Yam Bun 芋香包": "Handmade halal steamed buns with creamy chef yam filling.",
  "Salty Egg Lotus Bun 咸蛋莲蓉包": "Handmade halal fluffy buns filled with smooth lotus paste and rich salted egg flavour.",

  // THE SIDE STORY (cat-4)
  "Chicken Glutinous Rice 糯米鸡": "Handmade halal glutinous rice steamed with tender chicken and savoury seasoning.",
  "Chicken Porridge 鸡丝粥": "Warm comforting handmade halal porridge topped with tender shredded chicken.",
  "Stir Fried Radish Cake 酱炒萝卜糕": "Handmade halal radish cake wok-fried with crunchy bean sprouts and our homemade dried shrimp sambal for an extra fragrant smoky flavour.",

  // THE RICE PRESS (cat-5)
  "Dried Chilli Chicken Rice 宫保鸡饭": "Halal chicken stir-fried with dried chilli and savoury soy sauce.",
  "Sweet And Sour Chicken Rice 酸甜咕噜鸡饭": "Halal crispy chicken coated in sweet and sour glaze.",
  "Butter Milk Salted Egg Chicken Rice 咸蛋奶油鸡饭": "Halal crispy chicken covered in rich, creamy salted egg butter milk.",
  "Butter Milk Chicken Rice 奶油鸡饭": "Halal crispy chicken tossed in smooth and fragrant butter milk sauce.",
  "Sambal Chicken Rice 参巴鸡炒饭": "Halal spicy sambal chicken packed with rich local seasonings and robust flavor.",
  "Black Pepper Chicken Rice 黑胡椒鸡饭": "Halal chicken stir-fried with aromatic black pepper sauce.",
  "Curry Butter Milk Chicken Rice 咖喱奶油鸡饭": "Halal crispy chicken combined with creamy butter milk and aromatic curry flavour.",
  "Kampung Fried Rice 马来家乡炒饭": "Halal kampung fried rice cooked with anchovies and spicy bird's eye chilies.",
  "Chinese Fried Rice 扬州炒饭": "Halal classic Yang Zhou fried rice wok-tossed with fresh eggs and vegetables.",
  "Tom Yam Fried Rice 东炎炒饭": "Halal fried rice infused with spicy and sour tom yam flavors.",

  // THE WOK DISPATCH (cat-6)
  "Penang Fried Keow Teow 槟城炒果条": "Halal Penang-style fried kuey teow.",
  "Signature Fried Noodle 招牌炒面": "Halal signature fried noodles stir-fried with fresh ingredients and rich sauce.",
  "Cantonese Style Meehon 广府米粉": "Halal silky rice vermicelli served with smooth egg gravy.",
  "Cantonese Style YeeMee 广府伊面": "Halal yee mee cooked with smooth egg gravy.",
  "Cantonese Style Keow Teow 广府果条": "Halal flat rice noodles served with silky egg gravy.",
  "Cantonese Style Yuan Yang 广府鸳鸯": "Halal combination of fried mee hoon and flat rice noodles in rich egg gravy.",

  // THE TEA EDITION (cat-7)
  "Poh Lei 普洱茶": "Traditional Chinese tea with rich earthy aroma, perfect for enjoying with dim sum.",
  "Tie Guan Yin 铁观音": "Premium Chinese tea with floral aroma and smooth roasted aftertaste.",
  "Tea King 茶王": "Rich and balanced premium Chinese tea with smooth traditional flavour.",
  "Kok Poh Tea 菊堡": "Light and soothing tea with refreshing chrysanthemum aroma.",
  "Jasmine Tea 香片": "Fragrant jasmine tea with floral aroma and light smooth taste.",
  "Chrysanthemum Tea 菊花": "Classic chrysanthemum tea with light floral sweetness and soothing flavour.",

  // THE KOPITIAM POST (cat-8)
  "Kopi": "Rich and aromatic local coffee with a smooth traditional kopitiam taste.",
  "Kopi O": "Classic black local coffee with deep roasted aroma and stronger coffee flavour.",
  "Teh": "Smooth and creamy milk tea with comforting traditional flavour.",
  "Teh O": "Classic black tea with fragrant aroma and smooth finish.",
  "Teh O Limau": "Warm black tea mixed with fresh lime for a refreshing citrusy flavour.",
  "Cham": "Perfect mix of coffee and tea for a rich and balanced local favourite.",
  "Milo": "Rich and chocolatey Milo served warm for a comforting treat.",
  "Sirap": "Sweet rosy syrup drink with nostalgic Malaysian flavour.",
  "Sirap Limau": "Sweet sirap mixed with fresh lime for a balanced fruity taste.",
  "Sirap Bandung": "Creamy rose syrup milk drink with smooth and fragrant sweetness.",
  "Honey Lemon": "Warm honey lemon drink that’s soothing, fragrant and refreshing.",
  "Lemon Tea": "Fragrant tea combined with fresh lemon for a smooth citrusy taste.",
  "Organic Soya": "Warm and comforting organic soy drink with a smooth, creamy texture. Available with no added sugar upon request.",

  // JUICE SERIES (cat-9)
  "Green Apple": "Refreshing green apple juice with sweet and slightly tangy flavour.",
  "Orange": "Fresh orange juice bursting with natural citrus sweetness.",
  "Carrot Milk": "Smooth carrot milk juice with creamy texture and natural sweetness.",
  "Lemon": "Refreshing lemon juice with tangy citrus flavour.",
  "Limau": "Classic Malaysian lime juice that’s sweet, tangy and cooling.",

  // DESSERT SERIES (cat-10)
  "Longan Sea Coconut 龙眼海底椰": "Refreshing chilled longan dessert with sea coconut for a light and soothing treat. Perfect after a meal.",
  "Bamboo Cane": "Refreshing sugar cane drink with naturally sweet and cooling flavour.",

  // THE MOCKTAIL TIMES (cat-11)
  "Spring Blush (Pink Guava Sparkling)": "A refreshing pink guava sparkling drink with a gentle citrus finish, topped with mint and lemon.",
  "Summer Blue (Tropical Blue Sparkling)": "A bright tropical blue sparkling drink with a zesty lime twist, served with fresh mint and lime.",
  "Autumn Fruit Glow (Fruit Punch Sparkling)": "A fruity and refreshing sparkling blend with a light citrus finish, topped with mint and lemon.",
  "Winter Mint (Mint Lime Iced Tea)": "A cooling blend of lime, tea and refreshing mint, finished with a hint of fresh lime.",
  "Four Seasons Fruit Tea (Fruit Punch Lemon Tea)": "A refreshing fruit punch tea with a gentle citrus flavour and a bright lemon finish.",

  // THE HOME EDITION (FROZEN) (cat-12)
  "Chicken & Prawn Dumpling 鲜虾烧卖(12PCS)": "Frozen handmade dumplings filled with tender chicken and juicy prawns.",
  "Shrimp Dumpling 鲜折蒸虾饺 (9PCS)": "Frozen handmade premium crystal shrimp dumplings.",
  "Salted Egg Dumpling 咸蛋卖 (12 PCS)": "Frozen handmade chicken siew mai with rich, savoury salted egg yolk.",
  "Coriander Dumpling 香茜饺 (9 PCS)": "Frozen handmade chicken dumplings packed with aromatic coriander.",
  "Seaweed Roll 日式紫菜卷 (9 PCS)": "Frozen handmade savoury chicken rolls wrapped in seaweed.",
  "Original Chicken Dumpling 原味烧卖 (12 PCS)": "Frozen handmade signature classic chicken siew mai.",
  "Tom Yum Dumpling 东炎烧卖 (12 PCS)": "Frozen handmade chicken siew mai infused with spicy and tangy Tom Yum flavours.",
  "Black Pepper Dumpling 黑胡椒烧卖 (12 PCS)": "Frozen handmade chicken siew mai spiced with aromatic black pepper.",
  "Chicken Glutinous Rice 糯米鸡 (2PCS)": "Frozen handmade traditional Lo Mai Gai glutinous rice with chicken.",
  "Golden Custard Bun 流沙包 (6 PCS)": "Frozen handmade sweet buns filled with rich, flowing golden egg custard.",
  "Charcoal Red Bean Bun 豆沙包 (6 PCS)": "Frozen handmade soft charcoal buns with a sweet and smooth red bean filling.",
  "BBQ Chicken Bun 密汁鸡叉烧包 (6 PCS)": "Frozen handmade fluffy buns stuffed with sweet and savoury BBQ chicken.",
  "Yam Bun 芋香包 (6 PCS)": "Frozen handmade soft buns filled with sweet, fragrant taro yam paste.",
  "Salted Egg Lotus Bun 咸蛋莲蓉包 (6 PCS)": "Frozen handmade sweet lotus seed paste buns with savoury salted egg yolk."
};

// A custom page component required by react-pageflip to use ref
const Page = React.forwardRef<HTMLDivElement, { title?: string; subtitle?: string; description?: string; image?: string; children: React.ReactNode; number: number; noPadding?: boolean; bgClass?: string }>((props, ref) => {
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
          <div className="flex-1 overflow-y-auto hide-scrollbar pr-1">
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
                   <p className="font-sans text-[#2c3e38]/80 text-xs md:text-sm max-w-full leading-relaxed">{props.description}</p>
                )}
              </div>
            )}
            
            {props.image && (
              <div className="w-full h-40 md:h-56 mb-6 overflow-hidden rounded-md border-2 border-[#1a362a]/10 shadow-sm relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a362a]/30 to-transparent z-10 mix-blend-multiply" />
                <img src={props.image} alt={props.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            )}
            
            {props.children}
          </div>
          
          {!props.noPadding && (
            <div className="mt-auto pt-4 flex justify-between items-center font-serif text-[10px] uppercase tracking-widest font-bold text-[#8a2a2b] shrink-0">
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
      <span>KUALA LUMPUR, MALAYSIA</span>
      <span className="opacity-0">Est. 2024</span>
    </div>
    <div className="border-t border-b border-[#1a362a] h-[1.5px] mb-6 shrink-0"></div>

    {/* THE MENU */}
    <h1 className="font-serif text-[2.5rem] md:text-[3.2rem] font-black text-[#1a362a] text-center leading-none mb-6 shrink-0 tracking-[0.05em]" style={{ transform: 'scaleY(1.1)' }}>
      THE MENU
    </h1>

    {/* Info Bar */}
    <div className="py-2 mb-4 flex items-center justify-between shrink-0">
      <p className="font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1a362a]/90 text-center w-[35%] leading-relaxed border-t border-b border-dotted border-[#1a362a]/40 py-2">
        HANDMADE HALAL<br/>DIM SUM,
      </p>
      <div className="flex-1 flex justify-center w-[30%]">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a362a] rounded-full p-1 border border-[#8a2a2b]/30 flex items-center justify-center">
           <img src={logoImg} alt="WAKi Dim Sum" className="w-full h-full object-contain brightness-200" />
        </div>
      </div>
      <p className="font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1a362a]/90 text-center w-[35%] leading-relaxed border-t border-b border-dotted border-[#1a362a]/40 py-2">
        SERVED<br/>FRESH DAILY
      </p>
    </div>

    {/* Ribbon Text */}
    <div className="text-center mb-4 shrink-0 flex items-center justify-center space-x-2">
       <span className="text-[#8a2a2b]/80 text-[10px] transform rotate-45">✦</span>
       <p className="font-cormorant italic text-[#1a362a] text-sm md:text-[17px] font-semibold leading-none">
         Handmade Halal Dim Sum, Served Fresh Daily
       </p>
       <span className="text-[#8a2a2b]/80 text-[10px] transform rotate-45">✦</span>
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
  const [selectedMobileTab, setSelectedMobileTab] = React.useState<string>('cover');
  const [hoveredFoodIdx, setHoveredFoodIdx] = React.useState<number | null>(null);
  
  return (
    <section id="menu" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-[#131010] uppercase tracking-widest"
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
            width={640}
            height={780}
            size="stretch"
            minWidth={350}
            maxWidth={800}
            minHeight={400}
            maxHeight={950}
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
              <div className="h-full w-full relative overflow-hidden">
                {/* Standard Borders to match the rest of the book */}
                <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#1a362a]/10 pointer-events-none z-0" />
                <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#1a362a]/5 pointer-events-none z-0" />
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#8a2a2b]/60 z-0" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#8a2a2b]/60 z-0" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#8a2a2b]/60 z-0" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#8a2a2b]/60 z-0" />
                
                {/* Subtle warm tabletop grounding layer to support all dishes */}
                <div className="absolute bottom-4 left-4 right-4 h-[75%] bg-gradient-to-t from-[#2a1a08]/[0.025] via-transparent to-transparent pointer-events-none rounded-xl z-0" />
                
                {/* Title */}
                <div className="absolute top-10 left-0 right-0 text-center z-20 pointer-events-none flex flex-col items-center">
                  <h2 className="font-serif text-[#1a362a] text-4xl md:text-5xl font-black uppercase tracking-widest drop-shadow-sm">Must Try</h2>
                  <h3 className="font-serif text-[#8a2a2b] text-2xl md:text-3xl font-black uppercase tracking-[0.15em] drop-shadow-sm mt-1 mb-3 italic">In Waki DimSum</h3>
                  <div className="w-16 h-1 bg-[#1a362a]/20 rounded-full"></div>
                </div>

                {/* Overlaid Food Images */}
                {[
                  { 
                    img: img01, 
                    imgCls: 'top-[22%] left-[36%] w-[28%]', 
                    labelCls: 'top-[18%] left-[28%]', 
                    num: '01', icon: '🥇', 
                    title: 'Chicken & Shrimp\nDumplings', code: 'D01',
                    shadowCls: 'bottom-[1%] left-[12%] right-[12%] h-[14px] bg-[#22160a]/25 blur-[6px] rounded-full scale-y-[0.45]'
                  },
                  { 
                    img: img02, 
                    imgCls: 'top-[21%] right-[5%] w-[35%]', 
                    labelCls: 'top-[18%] right-[22%]', 
                    num: '02', icon: '//', iconCls: 'text-[#8a2a2b] font-serif font-black italic text-lg',
                    title: 'Chee Cheong Fun\nWith Prawn Spring Roll', code: 'C01',
                    shadowCls: 'bottom-[2%] left-[15%] right-[25%] h-[12px] bg-[#22160a]/20 blur-[5px] rounded-full scale-y-[0.35]'
                  },
                  { 
                    img: img03, 
                    imgCls: 'top-[25%] left-[5%] w-[33%]', 
                    labelCls: 'top-[20%] left-[12%]', 
                    num: '03', icon: '🔥', 
                    title: 'Cheesy\nPrawn Roll', code: 'F17',
                    shadowCls: 'bottom-[3%] left-[10%] right-[10%] h-[12px] bg-[#22160a]/20 blur-[5px] rounded-full scale-y-[0.35]'
                  },
                  { 
                    img: img04, 
                    imgCls: 'top-[44%] left-[39%] w-[22%]', 
                    labelCls: 'top-[38%] left-[32%]', 
                    num: '04', icon: '🥇', 
                    title: 'Golden\nCustard Bun', code: 'B02',
                    shadowCls: 'bottom-[3%] left-[10%] right-[10%] h-[10px] bg-[#22160a]/20 blur-[4px] rounded-full scale-y-[0.4]'
                  },
                  { 
                    img: img05, 
                    imgCls: 'top-[46%] left-[4%] w-[33%]', 
                    labelCls: 'top-[40%] left-[12%]', 
                    num: '05', icon: '🔥', 
                    title: 'Stir Fried\nRadish Cake', code: 'L03',
                    shadowCls: 'bottom-[3%] left-[12%] right-[12%] h-[14px] bg-[#22160a]/20 blur-[6px] rounded-full scale-y-[0.3]'
                  },
                  { 
                    img: img06, 
                    imgCls: 'top-[45%] right-[4%] w-[32%]', 
                    labelCls: 'top-[39%] right-[12%]', 
                    num: '06', icon: '🔥', 
                    title: 'Prawn\nSpring Roll', code: 'F06',
                    shadowCls: 'bottom-[3%] left-[10%] right-[10%] h-[14px] bg-[#22160a]/20 blur-[6px] rounded-full scale-y-[0.3]'
                  },
                  { 
                    img: img07, 
                    imgCls: 'top-[56%] left-[49%] w-[20%]', 
                    labelCls: 'top-[50%] left-[58%]', 
                    num: '07', icon: '//', iconCls: 'text-[#8a2a2b] font-serif font-black italic text-lg',
                    title: 'Spicy Sauce\nDumpling', code: 'D12',
                    shadowCls: 'bottom-[1%] left-[15%] right-[15%] h-[10px] bg-[#22160a]/25 blur-[4px] rounded-full scale-y-[0.45]'
                  },
                  { 
                    img: img08, 
                    imgCls: 'top-[68%] left-[8%] w-[36%]', 
                    labelCls: 'top-[62%] left-[14%]', 
                    num: '08', icon: '//', iconCls: 'text-[#8a2a2b] font-serif font-black italic text-lg',
                    title: 'Signature\nFried Noodle', code: 'M02',
                    shadowCls: 'bottom-[2%] left-[12%] right-[12%] h-[16px] bg-[#22160a]/20 blur-[6px] rounded-full scale-y-[0.35]'
                  },
                  { 
                    img: img09, 
                    imgCls: 'top-[67%] right-[8%] w-[36%]', 
                    labelCls: 'top-[61%] right-[14%]', 
                    num: '09', icon: '//', iconCls: 'text-[#8a2a2b] font-serif font-black italic text-lg',
                    title: 'Butter Milk\nChicken Rice', code: 'R04',
                    shadowCls: 'bottom-[3%] left-[12%] right-[12%] h-[14px] bg-[#22160a]/20 blur-[6px] rounded-full scale-y-[0.3]'
                  },
                ].map((item, idx) => {
                  const isHovered = hoveredFoodIdx === idx;
                  return (
                    <div 
                      key={idx} 
                      className="absolute inset-0 pointer-events-none transition-all duration-300"
                      style={{ zIndex: isHovered ? 100 : 10 }}
                    >
                      {/* Food Image and Contact Shadow Container */}
                      <div 
                        className={`absolute ${item.imgCls} pointer-events-auto`}
                        onMouseEnter={() => setHoveredFoodIdx(idx)}
                        onMouseLeave={() => setHoveredFoodIdx(null)}
                      >
                        {/* Custom soft contact shadow */}
                        <div 
                          className={`absolute ${item.shadowCls} pointer-events-none z-0 transition-all duration-300 ease-out ${
                            isHovered ? 'scale-[1.08] opacity-60 blur-[7px]' : 'scale-100 opacity-100'
                          }`} 
                        />
                        
                        <img 
                          src={item.img} 
                          alt={`Top 10 Dish ${idx + 1}`} 
                          className={`w-full h-auto object-contain transition-all duration-300 ease-out cursor-pointer origin-center relative z-10 ${
                            isHovered ? 'scale-[1.06] -translate-y-1.5' : 'scale-100 translate-y-0'
                          }`}
                          style={{
                            filter: 'drop-shadow(0 4px 8px rgba(42, 30, 18, 0.06))'
                          }}
                        />
                      </div>
                      
                      {/* Text Label Popup */}
                      <div 
                        className={`absolute ${item.labelCls} z-40 flex flex-col pointer-events-none bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white/50 min-w-[150px] transition-all duration-400 ease-out ${
                          isHovered 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-3 scale-95'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-serif text-3xl md:text-4xl text-[#1a362a] font-medium tracking-tight leading-none">{item.num}</span>
                          <span className={`text-lg md:text-xl -mt-1 ${item.iconCls || ''}`}>{item.icon}</span>
                        </div>
                        <div className="w-6 h-[2px] bg-[#d4af37] mb-2.5"></div>
                        <p className="font-sans text-[#1a362a] text-[12px] md:text-sm font-semibold leading-snug whitespace-pre-line mb-3">
                          {item.title}
                        </p>
                        <div className="mt-auto">
                          <span className="inline-block bg-[#1a362a] px-2.5 py-1 text-[9px] md:text-[10px] font-bold text-white tracking-[0.2em] uppercase rounded">
                            {item.code}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Page>

            {/* Menu Pages dynamically from categories */}
            {MENU_CATEGORIES.map((cat, index) => {
              const isKopitiam = cat.id === 'cat-8';
              const isHomeEdition = cat.id === 'cat-12';
              const bgClass = 'bg-[#f8f5eb]';
              
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
                  <div className="flex flex-col space-y-4 pt-2">
                    {cat.dishes.map((dish) => {
                      const dishDesc = dish.description || DEFAULT_EXPLANATIONS[dish.name];
                      return (
                        <div key={dish.id} className="flex group relative pb-3 border-b border-dashed border-[#1a362a]/20 last:border-0">
                          <div className="absolute -inset-x-3 inset-y-0 bg-[#8a2a2b]/0 group-hover:bg-[#8a2a2b]/[0.03] rounded-lg transition-colors duration-300 pointer-events-none" />
                          
                          <div className="relative z-10 flex w-full gap-3">
                            {dish.image && (
                              <div className="w-12 h-12 shrink-0 mt-1 rounded shadow-sm border border-[#1a362a]/10 overflow-hidden">
                                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                              </div>
                            )}
                            {dish.code && (
                              <div className="shrink-0 mt-0.5">
                                <span className="font-sans text-[#8a2a2b] font-bold text-[10px] tracking-widest border border-[#8a2a2b]/30 px-1.5 py-0.5 rounded shadow-sm bg-white/50">{dish.code}</span>
                              </div>
                            )}
                            <div className="flex-1 flex flex-col justify-center">
                              <h4 className="font-serif font-black text-[#1a362a] text-[14px] leading-snug uppercase">{dish.name}</h4>
                              
                              {dishDesc && (
                                 <p className="font-sans text-[#2c3e38]/80 text-[11px] leading-relaxed mt-1 italic">{dishDesc}</p>
                              )}
                            
                              {dish.variants && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                   {dish.variants.map((v, i) => (
                                      <span key={i} className="inline-flex items-center gap-1 bg-[#1a362a]/5 px-2 py-0.5 rounded border border-[#1a362a]/10 text-[9px] text-[#2c3e38] font-sans uppercase tracking-wider font-bold">
                                         {v.type} <span className="text-[#8a2a2b]">{v.code}</span>
                                      </span>
                                   ))}
                                </div>
                              )}
                            </div>
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
        <div className="md:hidden flex flex-col space-y-6 mt-6">
          {/* Horizontal Category Tab Bar */}
          <div className="w-full">
            <p className="text-[11px] font-sans uppercase tracking-wider text-[#1a362a]/60 font-bold mb-2">
              Browse Menu Categories
            </p>
            <div className="flex overflow-x-auto gap-2 pb-3 pt-1 hide-scrollbar -mx-4 px-4 snap-x">
              {/* Cover Tab */}
              <button
                type="button"
                onClick={() => setSelectedMobileTab('cover')}
                className={`snap-center shrink-0 px-4 py-2.5 rounded-lg text-xs font-serif font-black uppercase tracking-wider transition-all duration-300 border ${
                  selectedMobileTab === 'cover'
                    ? 'bg-[#1a362a] text-[#f8f5eb] border-[#1a362a] shadow-md scale-105'
                    : 'bg-white text-[#1a362a] border-[#e2d5c3] shadow-sm hover:bg-[#1a362a]/5'
                }`}
              >
                📖 Cover Page
              </button>
              
              {/* Must Try Tab */}
              <button
                type="button"
                onClick={() => setSelectedMobileTab('must-try')}
                className={`snap-center shrink-0 px-4 py-2.5 rounded-lg text-xs font-serif font-black uppercase tracking-wider transition-all duration-300 border ${
                  selectedMobileTab === 'must-try'
                    ? 'bg-[#1a362a] text-[#f8f5eb] border-[#1a362a] shadow-md scale-105'
                    : 'bg-white text-[#1a362a] border-[#e2d5c3] shadow-sm hover:bg-[#1a362a]/5'
                }`}
              >
                ✨ Must Try
              </button>
              
              {/* Category Tabs */}
              {MENU_CATEGORIES.map((cat) => {
                const getMobileTabName = (id: string, name: string) => {
                  switch (id) {
                    case 'cat-0': return '🥢 Silky Rolls';
                    case 'cat-1': return '🔥 Golden Crisp';
                    case 'cat-2': return '♨️ Steamy';
                    case 'cat-3': return '🥟 Bao Times';
                    case 'cat-4': return '🥣 Sides';
                    case 'cat-5': return '🍚 Rice Press';
                    case 'cat-6': return '🔥 Wok Dispatch';
                    case 'cat-7': return '🍵 Tea Edition';
                    case 'cat-8': return '☕ Kopitiam';
                    case 'cat-9': return '🍊 Juice';
                    case 'cat-10': return '🍧 Dessert';
                    case 'cat-11': return '🍹 Mocktail';
                    case 'cat-12': return '❄️ Frozen';
                    default: return name;
                  }
                };
                const tabName = getMobileTabName(cat.id, cat.name);
                const isSelected = selectedMobileTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedMobileTab(cat.id)}
                    className={`snap-center shrink-0 px-4 py-2.5 rounded-lg text-xs font-serif font-black uppercase tracking-wider transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#1a362a] text-[#f8f5eb] border-[#1a362a] shadow-md scale-105'
                        : 'bg-white text-[#1a362a] border-[#e2d5c3] shadow-sm hover:bg-[#1a362a]/5'
                    }`}
                  >
                    {tabName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Window with smooth fade-in */}
          <div className="min-h-[450px]">
            {selectedMobileTab === 'cover' ? (
              <motion.div 
                key="cover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#f8f5eb] p-5 sm:p-6 rounded-2xl shadow-xl border border-[#e2d5c3] relative overflow-hidden min-h-[550px] flex flex-col"
              >
                <div 
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', mixBlendMode: 'multiply' }}
                />
                <CoverPageContent />
              </motion.div>
            ) : selectedMobileTab === 'must-try' ? (
              <motion.div 
                key="must-try"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#f8f5eb] p-4 sm:p-6 rounded-2xl shadow-xl border border-[#e2d5c3] relative overflow-hidden min-h-[550px] flex flex-col"
              >
                {/* Subtle building line-art background */}
                <div 
                  className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply"
                  style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }}
                />
                
                {/* Standard Borders to match the rest of the book */}
                <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#1a362a]/10 pointer-events-none z-0" />
                <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#1a362a]/5 pointer-events-none z-0" />
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#8a2a2b]/60 z-0" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#8a2a2b]/60 z-0" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#8a2a2b]/60 z-0" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#8a2a2b]/60 z-0" />
                
                {/* Header Title */}
                <div className="text-center z-10 py-4 flex flex-col items-center">
                  <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-[#8a2a2b] font-extrabold block mb-1">
                    Waki Curated Selection
                  </span>
                  <h2 className="font-serif text-[#1a362a] text-3xl sm:text-4xl font-black uppercase tracking-widest drop-shadow-sm leading-tight">Must Try</h2>
                  <h3 className="font-serif text-[#8a2a2b] text-xl sm:text-2xl font-black uppercase tracking-[0.15em] drop-shadow-sm mt-0.5 mb-2.5 italic">In Waki DimSum</h3>
                  <div className="w-12 h-0.5 bg-[#1a362a]/20 rounded-full"></div>
                </div>

                {/* Collage Wrapper */}
                <div className="relative w-full aspect-[4/5] bg-white/45 rounded-xl border border-[#e2d5c3]/50 overflow-hidden shadow-inner my-3 z-10">
                  {/* Subtle warm tabletop grounding layer */}
                  <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#2a1a08]/[0.035] via-transparent to-transparent pointer-events-none z-0" />
                  
                  {/* Overlaid Food Images */}
                  {[
                    { 
                      img: img01, 
                      imgCls: 'top-[22%] left-[36%] w-[28%]', 
                      labelCls: 'top-[18%] left-[28%]', 
                      num: '01', icon: '🥇', 
                      title: 'Chicken & Shrimp\nDumplings', code: 'D01',
                      shadowCls: 'bottom-[1%] left-[12%] right-[12%] h-[14px] bg-[#22160a]/25 blur-[6px] rounded-full scale-y-[0.45]'
                    },
                    { 
                      img: img02, 
                      imgCls: 'top-[21%] right-[5%] w-[35%]', 
                      labelCls: 'top-[18%] right-[22%]', 
                      num: '02', icon: '//', iconCls: 'text-[#8a2a2b] font-serif font-black italic text-lg',
                      title: 'Chee Cheong Fun\nWith Prawn Spring Roll', code: 'C01',
                      shadowCls: 'bottom-[2%] left-[15%] right-[25%] h-[12px] bg-[#22160a]/20 blur-[5px] rounded-full scale-y-[0.35]'
                    },
                    { 
                      img: img03, 
                      imgCls: 'top-[25%] left-[5%] w-[33%]', 
                      labelCls: 'top-[20%] left-[12%]', 
                      num: '03', icon: '🔥', 
                      title: 'Cheesy\nPrawn Roll', code: 'F17',
                      shadowCls: 'bottom-[3%] left-[10%] right-[10%] h-[12px] bg-[#22160a]/20 blur-[5px] rounded-full scale-y-[0.35]'
                    },
                    { 
                      img: img04, 
                      imgCls: 'top-[44%] left-[39%] w-[22%]', 
                      labelCls: 'top-[38%] left-[32%]', 
                      num: '04', icon: '🥇', 
                      title: 'Golden\nCustard Bun', code: 'B02',
                      shadowCls: 'bottom-[3%] left-[10%] right-[10%] h-[10px] bg-[#22160a]/20 blur-[4px] rounded-full scale-y-[0.4]'
                    },
                    { 
                      img: img05, 
                      imgCls: 'top-[46%] left-[4%] w-[33%]', 
                      labelCls: 'top-[40%] left-[12%]', 
                      num: '05', icon: '🔥', 
                      title: 'Stir Fried\nRadish Cake', code: 'L03',
                      shadowCls: 'bottom-[3%] left-[12%] right-[12%] h-[14px] bg-[#22160a]/20 blur-[6px] rounded-full scale-y-[0.3]'
                    },
                    { 
                      img: img06, 
                      imgCls: 'top-[45%] right-[4%] w-[32%]', 
                      labelCls: 'top-[39%] right-[12%]', 
                      num: '06', icon: '🔥', 
                      title: 'Prawn\nSpring Roll', code: 'F06',
                      shadowCls: 'bottom-[3%] left-[10%] right-[10%] h-[14px] bg-[#22160a]/20 blur-[6px] rounded-full scale-y-[0.3]'
                    },
                    { 
                      img: img07, 
                      imgCls: 'top-[56%] left-[49%] w-[20%]', 
                      labelCls: 'top-[50%] left-[58%]', 
                      num: '07', icon: '//', iconCls: 'text-[#8a2a2b] font-serif font-black italic text-lg',
                      title: 'Spicy Sauce\nDumpling', code: 'D12',
                      shadowCls: 'bottom-[1%] left-[15%] right-[15%] h-[10px] bg-[#22160a]/25 blur-[4px] rounded-full scale-y-[0.45]'
                    },
                    { 
                      img: img08, 
                      imgCls: 'top-[68%] left-[8%] w-[36%]', 
                      labelCls: 'top-[62%] left-[14%]', 
                      num: '08', icon: '//', iconCls: 'text-[#8a2a2b] font-serif font-black italic text-lg',
                      title: 'Signature\nFried Noodle', code: 'M02',
                      shadowCls: 'bottom-[2%] left-[12%] right-[12%] h-[16px] bg-[#22160a]/20 blur-[6px] rounded-full scale-y-[0.35]'
                    },
                    { 
                      img: img09, 
                      imgCls: 'top-[67%] right-[8%] w-[36%]', 
                      labelCls: 'top-[61%] right-[14%]', 
                      num: '09', icon: '//', iconCls: 'text-[#8a2a2b] font-serif font-black italic text-lg',
                      title: 'Butter Milk\nChicken Rice', code: 'R04',
                      shadowCls: 'bottom-[3%] left-[12%] right-[12%] h-[14px] bg-[#22160a]/20 blur-[6px] rounded-full scale-y-[0.3]'
                    },
                  ].map((item, idx) => {
                    const isHighlighted = hoveredFoodIdx === idx;
                    return (
                      <div 
                        key={idx} 
                        className="absolute inset-0 pointer-events-none"
                        style={{ zIndex: isHighlighted ? 100 : 10 }}
                      >
                        {/* Dish Image Container */}
                        <div 
                          className={`absolute ${item.imgCls} pointer-events-auto cursor-pointer`}
                          onClick={() => {
                            setHoveredFoodIdx(hoveredFoodIdx === idx ? null : idx);
                          }}
                        >
                          {/* Shadow */}
                          <div className={`absolute ${item.shadowCls} pointer-events-none z-0 transition-all duration-300 ease-out ${isHighlighted ? 'scale-[1.08] opacity-65 blur-[6px]' : 'scale-100 opacity-100'}`} />
                          
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            className={`w-full h-auto object-contain transition-all duration-300 ease-out relative z-10 ${isHighlighted ? 'scale-[1.06] -translate-y-1' : 'scale-100 translate-y-0'}`}
                            style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.05))' }}
                          />
                        </div>

                        {/* Popover Detail Modal */}
                        <AnimatePresence>
                          {isHighlighted && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.9, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.9, y: 10 }}
                              className="absolute bottom-4 left-4 right-4 z-50 pointer-events-auto bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#e2d5c3] shadow-xl flex items-center gap-3.5"
                            >
                              <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden border border-[#1a362a]/10 bg-white">
                                <img src={item.img} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5 mb-0.5">
                                  <span className="font-serif text-lg font-black text-[#1a362a]">{item.num}</span>
                                  <span className="text-xs">{item.icon}</span>
                                  <span className="ml-auto bg-[#1a362a] px-2 py-0.5 text-[8px] font-bold text-white tracking-widest rounded">{item.code}</span>
                                </div>
                                <p className="font-sans text-[#1a362a] text-[12px] font-bold leading-tight whitespace-pre-line">
                                  {item.title.replace('\n', ' ')}
                                </p>
                              </div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setHoveredFoodIdx(null);
                                }}
                                className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 self-start"
                              >
                                ✕
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Elegant helper text */}
                <p className="text-[10px] font-sans text-center text-[#1a362a]/60 italic mb-4 z-10">
                  💡 Tap on any dish above to view its details, or browse below
                </p>

                {/* Clean, detailed list of Must Try items */}
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-[#1a362a]/10 z-10 flex flex-col space-y-3.5">
                  {[
                    { code: 'D01', name: 'Chicken & Shrimp Dumplings (Siew Mai)', desc: 'Premium chicken & shrimp siew mai, hand-crafted daily.' },
                    { code: 'C01', name: 'CCF with Prawn Spring Roll', desc: 'Silky smooth handmade rice rolls paired with crispy prawn beancurd skin roll.' },
                    { code: 'F17', name: 'Cheesy Prawn Roll', desc: 'Delicious fried rolls loaded with succulent prawns and melted premium cheese.' },
                    { code: 'B02', name: 'Golden Custard Bun (Liu Sha Bao)', desc: 'Fluffy steamed buns with warm, flowing sweet-savory salted egg yolk lava.' },
                    { code: 'L03', name: 'Stir Fried Radish Cake', desc: 'Wok-charred turnip cake wok-fried with fresh beansprouts, eggs, and chives.' },
                    { code: 'F06', name: 'Prawn Spring Roll', desc: 'Crispy fried spring rolls stuffed with seasoned fresh prawns.' },
                    { code: 'D12', name: 'Spicy Sauce Dumpling', desc: 'Plump chicken dumplings tossed in our signature hot & sour Szechuan chili oil sauce.' },
                    { code: 'M02', name: 'Signature Fried Noodle', desc: 'Classic Malaysian style wok-fried yellow noodles packed with seafood flavor.' },
                    { code: 'R04', name: 'Butter Milk Chicken Rice', desc: 'Aromatic, rich buttermilk chicken served over steaming hot jasmine rice.' },
                  ].map((dish, index) => {
                    const isHighlighted = hoveredFoodIdx === index;
                    return (
                      <div 
                        key={dish.code} 
                        onClick={() => setHoveredFoodIdx(isHighlighted ? null : index)}
                        className={`flex gap-3 items-start py-2.5 px-2 rounded-lg transition-all duration-300 cursor-pointer border ${
                          isHighlighted 
                            ? 'bg-[#1a362a]/5 border-[#1a362a]/20 pl-3 shadow-sm' 
                            : 'border-transparent hover:bg-black/[0.01]'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center font-serif text-xs font-black shrink-0 ${
                          isHighlighted ? 'bg-[#1a362a] text-white' : 'bg-[#1a362a]/10 text-[#1a362a]'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-serif font-black text-[#1a362a] text-sm leading-tight uppercase">
                              {dish.name}
                            </h4>
                            <span className="font-sans text-[#8a2a2b] font-bold text-[10px] tracking-widest border border-[#8a2a2b]/30 px-1.5 py-0.5 rounded shadow-sm bg-white/50 shrink-0 ml-2">
                              {dish.code}
                            </span>
                          </div>
                          <p className="font-sans text-[#2c3e38]/85 text-xs mt-1 italic leading-relaxed">
                            {dish.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              MENU_CATEGORIES.map((cat) => {
                if (cat.id !== selectedMobileTab) return null;
                
                const isKopitiam = cat.id === 'cat-8';
                const isHomeEdition = cat.id === 'cat-12';
                const bgClass = 'bg-[#f8f5eb]';

                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`${bgClass} p-5 sm:p-6 rounded-2xl border border-[#e2d5c3] shadow-lg relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }} />
                    
                    <div className="relative z-10">
                      {catHeroImages[cat.id] && (
                        <div className="w-full h-40 sm:h-48 mb-6 border border-[#1a362a]/20 p-1 bg-[#f8f5eb] rounded-lg overflow-hidden relative">
                          <div className="w-full h-full relative overflow-hidden rounded">
                            <img src={catHeroImages[cat.id]} className="w-full h-full object-cover" alt={cat.name} />
                            {(cat.id === 'cat-2' || cat.id === 'cat-3') && <SteamAnimation />}
                          </div>
                        </div>
                      )}
                      
                      <div className="mb-6 text-center">
                        <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-[#8a2a2b] font-extrabold block mb-1">
                          Category {MENU_CATEGORIES.findIndex(c => c.id === cat.id) + 1} of {MENU_CATEGORIES.length}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#1a362a] border-b border-[#8a2a2b]/30 inline-block pb-2 uppercase tracking-wide leading-tight">
                          {cat.name}
                        </h3>
                        {cat.subtitle && <p className="font-serif italic text-[#8a2a2b] text-xs sm:text-sm mt-3">{cat.subtitle}</p>}
                        {cat.description && <p className="font-sans text-[#2c3e38]/80 text-[11px] sm:text-xs mt-3 max-w-xl mx-auto leading-relaxed">{cat.description}</p>}
                      </div>
                      
                      {isHomeEdition && (
                        <div className="flex items-center justify-center mb-6">
                          <span className="text-[#1a362a] text-sm">❄️</span>
                          <span className="font-sans uppercase tracking-[0.2em] text-[#1a362a] text-[10px] font-bold mx-3 border-b border-[#1a362a]">Frozen Fresh</span>
                          <span className="text-[#1a362a] text-sm">❄️</span>
                        </div>
                      )}
                      
                      {isKopitiam ? (
                        <div className="flex flex-col space-y-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-[#1a362a]/5">
                          <div className="flex justify-between border-b border-[#1a362a]/30 pb-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#1a362a]">
                            <div className="w-1/2">Drink</div>
                            <div className="w-1/2 text-right">Option / Code</div>
                          </div>
                          {cat.dishes.map((dish) => {
                            const hotVariant = dish.variants?.find(v => v.type === 'Hot');
                            const coldVariant = dish.variants?.find(v => v.type === 'Cold');
                            const drinkDesc = dish.description || DEFAULT_EXPLANATIONS[dish.name];
                            return (
                              <div key={dish.id} className="flex flex-col py-2 border-b border-[#1a362a]/5 last:border-0">
                                <div className="flex justify-between items-center">
                                  <div className="w-1/2 font-sans font-bold text-[#1a362a] text-[12px] sm:text-[13px] uppercase leading-tight">{dish.name}</div>
                                  <div className="w-1/2 text-right flex flex-wrap justify-end gap-1.5 text-[9px] sm:text-[10px]">
                                    {hotVariant && (
                                      <span className="bg-[#1a362a]/10 px-2 py-0.5 rounded text-[#1a362a] font-sans font-medium">
                                        ☕ Hot ({hotVariant.code})
                                      </span>
                                    )}
                                    {coldVariant && (
                                      <span className="bg-[#1a362a]/10 px-2 py-0.5 rounded text-[#1a362a] font-sans font-medium">
                                        🧊 Cold ({coldVariant.code})
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {drinkDesc && (
                                  <p className="font-sans text-[#2c3e38]/75 text-[10px] leading-tight italic mt-1">
                                    {drinkDesc}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-3 bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-[#1a362a]/5">
                          {cat.dishes.map((dish) => {
                            const dishDesc = dish.description || DEFAULT_EXPLANATIONS[dish.name];
                            return (
                              <div key={dish.id} className="flex gap-3 border-b border-dashed border-[#1a362a]/15 pb-3 last:border-0 last:pb-0">
                                {dish.image && (
                                  <div className="w-16 h-16 shrink-0 mt-0.5 rounded shadow border border-[#1a362a]/10 overflow-hidden">
                                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                                  </div>
                                )}
                                {dish.code && (
                                  <div className="shrink-0 mt-0.5">
                                    <span className="font-sans text-[#8a2a2b] font-bold text-[10px] sm:text-[11px] tracking-widest border border-[#8a2a2b]/30 px-1.5 py-0.5 rounded shadow-sm bg-white/50">{dish.code}</span>
                                  </div>
                                )}
                                <div className="flex-1">
                                  <h4 className="font-serif font-black text-[#1a362a] text-[14px] sm:text-[15px] leading-tight uppercase">{dish.name}</h4>
                                  
                                  {dishDesc && (
                                    <p className="font-sans text-[#2c3e38]/85 text-[12px] sm:text-[13px] leading-relaxed mt-1 italic">{dishDesc}</p>
                                  )}
                                  
                                  {dish.variants && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                      {dish.variants.map((v, i) => (
                                        <span key={i} className="inline-flex items-center gap-1 bg-[#1a362a]/5 px-2 py-0.5 rounded border border-[#1a362a]/10 text-[10px] text-[#2c3e38] font-sans uppercase tracking-wider font-bold">
                                          {v.type} <span className="text-[#8a2a2b]">{v.code}</span>
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
                        <div className="mt-6 pt-5 border-t border-double border-[#8a2a2b]/20">
                          <h4 className="font-serif font-bold text-[#1a362a] mb-4 text-center text-xs tracking-widest uppercase">Add On</h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            {cat.addOns.map((addon, i) => (
                              <span key={i} className="inline-block bg-[#1a362a]/10 px-3 py-1 rounded-full font-sans uppercase text-[#2c3e38] text-[9px] sm:text-[10px] font-bold tracking-wider">
                                {addon.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
