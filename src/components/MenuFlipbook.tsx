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

const catHeroImages: Record<string, string> = {
  'cat-0': ingredientsImg,
  'cat-1': platterImg,
  'cat-2': siewMaiImg,
  'cat-3': custardBunImg,
  'cat-4': steamImg,
  'cat-5': platterImg,
  'cat-6': harGowImg,
  'cat-7': heroDimSumImg,
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

// A custom page component required by react-pageflip to use ref
const Page = React.forwardRef<HTMLDivElement, { title?: string; subtitle?: string; description?: string; children: React.ReactNode; number: number; noPadding?: boolean; bgClass?: string }>((props, ref) => {
  return (
    <div className={`${props.bgClass || 'bg-[#eadeb5]'} h-full w-full shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] border-l border-r border-[#c2b294] relative overflow-hidden`} ref={ref}>
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }}
      />
      
      <div className={`${props.noPadding ? '' : 'p-6 md:p-8'} h-full flex flex-col relative z-10`}>
        {/* Double border like in the reference */}
        {!props.noPadding && (
          <>
            <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#2a382b]/20 pointer-events-none z-0" />
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#2a382b]/10 pointer-events-none z-0" />
            
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#2a382b] z-0" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#2a382b] z-0" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#2a382b] z-0" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#2a382b] z-0" />
          </>
        )}
        
        <div className="relative z-10 h-full flex flex-col">
          {props.title && (
            <div className="mb-4">
              <h2 className="font-serif text-[2.5rem] md:text-[3.25rem] font-black text-[#2a382b] uppercase tracking-wide leading-[0.9]" style={{ transform: 'scaleY(1.15)', transformOrigin: 'left' }}>
                {props.title}
              </h2>
              {props.subtitle && (
                <p className="font-serif italic text-[#a48559] text-sm md:text-base mt-2">{props.subtitle}</p>
              )}
              
              {(props.title || props.subtitle) && (
                <div className="flex items-center my-3 w-1/3">
                   <div className="flex-1 h-px bg-[#a48559]/30" />
                   <span className="mx-2 text-[10px] text-[#a48559]">❖</span>
                   <div className="flex-1 h-px bg-[#a48559]/30" />
                </div>
              )}
              
              {props.description && (
                 <p className="font-serif text-[#2a382b]/90 text-xs md:text-sm max-w-[250px] leading-relaxed">{props.description}</p>
              )}
            </div>
          )}
          
          <div className="flex-1 overflow-y-auto hide-scrollbar">
            {props.children}
          </div>
          
          {!props.noPadding && (
            <div className="mt-auto pt-4 flex justify-between items-center font-serif text-[10px] uppercase tracking-widest font-bold text-[#a48559]">
              <span className="flex-1 border-t border-[#a48559]/30 mr-2" />
              <span>{props.number}</span>
              <span className="flex-1 border-t border-[#a48559]/30 ml-2" />
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
    <div className="flex justify-between items-center text-jade-950/80 font-sans text-[10px] tracking-widest uppercase mb-2 shrink-0">
      <span>Kuala Lumpur, Malaysia</span>
      <span>Est. 2024</span>
    </div>
    <div className="border-t border-b border-jade-950 h-1 mb-6 shrink-0"></div>

    {/* THE MENU */}
    <h1 className="font-serif text-[4rem] md:text-[4.5rem] font-black text-jade-950 text-center leading-none mb-6 shrink-0" style={{ transform: 'scaleY(1.15)' }}>
      THE MENU
    </h1>

    {/* Info Bar */}
    <div className="border-t border-b border-dashed border-jade-950/40 py-4 mb-4 flex items-center justify-between shrink-0">
      <p className="font-sans text-[10px] uppercase tracking-widest text-jade-950 text-left w-1/3 leading-tight">
        Handmade Halal<br/>Dim Sum,
      </p>
      <div className="flex-1 flex justify-center w-1/3">
        <img src={logoImg} alt="WAKi Dim Sum" className="h-10 md:h-12 object-contain" />
      </div>
      <p className="font-sans text-[10px] uppercase tracking-widest text-jade-950 text-right w-1/3 leading-tight">
        Served<br/>Fresh Daily
      </p>
    </div>

    {/* Ribbon Text */}
    <div className="text-center mb-4 shrink-0 flex items-center justify-center space-x-2">
       <span className="text-jade-950 text-[10px]">⚲</span>
       <p className="font-serif italic text-jade-950 text-sm md:text-base">Handmade Halal Dim Sum, Served Fresh Daily</p>
       <span className="text-jade-950 text-[10px]">⚲</span>
    </div>

    {/* Main Photo */}
    <div className="flex-1 min-h-0 mb-4 overflow-hidden bg-jade-900 mx-[-1rem] md:mx-[-1.5rem] border-y border-jade-950">
      <img src={menuFrontPageImg} alt="Menu Cover" className="w-full h-full object-cover" />
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-b border-jade-950 h-1 mt-auto mb-2 shrink-0"></div>
    <div className="flex justify-between items-center text-jade-950 font-sans text-[10px] tracking-widest uppercase shrink-0 pb-1">
      <span className="w-1/4 text-left leading-tight">Freshly<br/>Made</span>
      <span className="flex-1 text-center font-semibold">— Premium Halal Dim Sum —</span>
      <span className="w-1/4 text-right leading-tight">Made With<br/>Care</span>
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
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-jade-950"
          >
            The Menu
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-gold-500 mx-auto rounded" 
          />
          <p className="mt-6 text-jade-900/70 font-sans max-w-2xl mx-auto text-lg">
            Flip through our digital menu book.
          </p>
        </div>

        <div className="flex justify-center items-center drop-shadow-2xl hidden md:flex">
          <FlipBook
            width={450}
            height={650}
            size="fixed"
            minWidth={315}
            maxWidth={500}
            minHeight={400}
            maxHeight={700}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="flipbook-demo mx-auto"
            ref={flipBookRef}
          >
            {/* Cover Page */}
            <div className="bg-[#f4ebd0] h-full w-full flex flex-col p-4 md:p-6 border-r-[12px] border-jade-950 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] rounded-l relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', mixBlendMode: 'multiply' }}
              />
              <CoverPageContent />
            </div>

            {/* Inner Cover (Most Loved) */}
            <Page number={1} noPadding={true}>
              <div className="h-full w-full relative bg-[#eadeb5] overflow-hidden">
                <img src={mostLovedImg} alt="Most Loved at Waki" className="absolute inset-0 w-full h-full object-cover" />
                
                {/* Text Overlay */}
                <div className="relative z-10 pt-10 px-6 flex flex-col items-center text-center">
                   <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] font-black text-[#2a382b] uppercase tracking-wide leading-[0.9] mt-2 mb-2" style={{ transform: 'scaleY(1.15)' }}>
                     MOST LOVED<br />AT WAKI
                   </h2>
                   
                   <div className="flex items-center space-x-2 my-3">
                     <span className="text-[#a48559] text-xs">⚲</span>
                     <p className="font-serif italic text-[#2a382b] text-base md:text-xl">The Favorites Everyone Comes Back For</p>
                     <span className="text-[#a48559] text-xs">⚲</span>
                   </div>

                   <div className="text-[#a48559] mb-4">❖</div>
                   
                   <p className="font-serif text-[#2a382b]/90 text-xs md:text-sm max-w-sm leading-relaxed px-4">
                     Our signature handmade dim sum and comfort dishes loved by families, office crowds, and regulars every day.
                   </p>
                </div>

                {/* Legend */}
                <div className="absolute top-6 right-6 border border-[#2a382b]/30 p-2.5 bg-[#eadeb5]/80 backdrop-blur-sm rounded-sm text-left">
                  <div className="flex items-center mb-1.5">
                    <span className="mr-2 text-xl leading-none">🥇</span>
                    <span className="font-serif text-[9px] uppercase tracking-[0.15em] text-[#2a382b] font-bold">Most Ordered</span>
                  </div>
                  <div className="flex items-center mb-1.5">
                    <span className="mr-2 text-[#2a382b] font-serif font-black italic text-lg leading-none">//</span>
                    <span className="font-serif text-[9px] uppercase tracking-[0.15em] text-[#2a382b] font-bold">Chef Recommend</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-xl leading-none">🔥</span>
                    <span className="font-serif text-[9px] uppercase tracking-[0.15em] text-[#2a382b] font-bold">Crispy Favorite</span>
                  </div>
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-6 left-0 w-full text-center px-6">
                  <div className="inline-block border border-[#2a382b]/30 px-6 py-1.5 bg-[#eadeb5]/60 backdrop-blur-sm">
                    <p className="font-serif text-[#2a382b] text-xs md:text-sm tracking-wide">Handmade with care. Steamed fresh. Shared with love.</p>
                  </div>
                </div>
              </div>
            </Page>

            {/* Menu Pages dynamically from categories */}
            {MENU_CATEGORIES.map((cat, index) => {
              const isKopitiam = cat.id === 'cat-8';
              const isHomeEdition = cat.id === 'cat-12';
              const bgClass = isHomeEdition ? 'bg-[#f0ebd8]' : 'bg-[#eadeb5]';
              
              return (
              <Page key={cat.id} title={cat.name} subtitle={cat.subtitle} description={cat.description} number={index + 2} bgClass={bgClass}>
                
                {catHeroImages[cat.id] && (
                  <div className="w-full h-40 mb-6 border border-[#2a382b]/30 p-1 bg-[#eadeb5]/50 shrink-0 relative">
                    <div className="w-full h-full relative overflow-hidden">
                      <img src={catHeroImages[cat.id]} className="w-full h-full object-cover" alt={cat.name} />
                      {(cat.id === 'cat-2' || cat.id === 'cat-3') && <SteamAnimation />}
                    </div>
                  </div>
                )}
                
                {isHomeEdition && (
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-[#2a382b] text-sm">❄️</span>
                    <span className="font-serif uppercase tracking-[0.2em] text-[#2a382b] text-[10px] font-bold mx-3 border-b border-[#2a382b]">Frozen Fresh</span>
                    <span className="text-[#2a382b] text-sm">❄️</span>
                  </div>
                )}

                {isKopitiam ? (
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between border-b-2 border-[#2a382b] pb-1 mb-2 font-serif text-[10px] font-bold uppercase tracking-widest text-[#2a382b]">
                      <div className="w-1/3">Drink</div>
                      <div className="w-1/3 text-center">☕ Hot</div>
                      <div className="w-1/3 text-right">🧊 Cold</div>
                    </div>
                    {cat.dishes.map((dish) => {
                      const hotVariant = dish.variants?.find(v => v.type === 'Hot');
                      const coldVariant = dish.variants?.find(v => v.type === 'Cold');
                      
                      return (
                        <div key={dish.id} className="flex justify-between items-center group cursor-default p-2 -mx-2 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:bg-white/40 hover:shadow-[0_4px_12px_-4px_rgba(42,56,43,0.12)] border border-transparent hover:border-[#a48559]/20">
                          <div className="w-1/3 font-serif font-bold text-[#2a382b] text-[11px] uppercase leading-tight">{dish.name}</div>
                          
                          <div className="w-1/3 text-center flex flex-col items-center">
                            {hotVariant ? (
                              <>
                                <span className="font-mono text-[9px] text-[#2a382b]/70">{hotVariant.code}</span>
                                <span className="font-serif text-[11px] font-bold text-[#2a382b]">RM {hotVariant.price.toFixed(2)}</span>
                              </>
                            ) : (
                              <span className="text-transparent">-</span>
                            )}
                          </div>
                          
                          <div className="w-1/3 text-right flex flex-col items-end">
                            {coldVariant ? (
                              <>
                                <span className="font-mono text-[9px] text-[#2a382b]/70">{coldVariant.code}</span>
                                <span className="font-serif text-[11px] font-bold text-[#2a382b]">RM {coldVariant.price.toFixed(2)}</span>
                              </>
                            ) : (
                              <span className="text-transparent">-</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    {cat.dishes.map((dish) => (
                      <div key={dish.id} className="flex flex-col group relative p-3 -mx-3 -my-2 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/50 hover:shadow-[0_8px_20px_-6px_rgba(42,56,43,0.15)] border border-transparent hover:border-[#a48559]/20 cursor-default">
                        
                        <div className="relative z-10 flex flex-col h-full">
                          {dish.code && (
                            <div className="flex items-center mb-1">
                              <span className="font-serif text-[#2a382b] font-bold text-xs bg-[#a48559]/20 px-1.5 py-0.5 rounded-sm shadow-sm group-hover:bg-[#a48559]/30 transition-colors">{dish.code}</span>
                            </div>
                          )}
                          
                          <h4 className="font-serif font-bold text-[#2a382b] text-[12px] leading-tight uppercase mb-1 group-hover:text-[#182319] transition-colors">{dish.name}</h4>
                          
                          {dish.description && (
                             <p className="font-serif italic text-[#2a382b]/70 text-[9px] leading-snug mb-1">{dish.description}</p>
                          )}
                          
                          <div className="flex items-end mt-auto pt-1">
                             <span className="font-serif text-[9px] font-bold text-[#2a382b] uppercase tracking-wider mr-1 pb-0.5">RM</span>
                             {dish.price !== undefined ? (
                               <>
                                 <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[5px]" />
                                 <span className="font-serif text-[13px] font-bold text-[#2a382b] group-hover:scale-105 transition-transform origin-bottom-right">{dish.price.toFixed(2)}</span>
                               </>
                             ) : dish.variants ? (
                               <div className="w-full" />
                             ) : (
                               <>
                                 <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[5px]" />
                                 <span className="font-serif text-[13px] font-bold text-[#2a382b]">TBA</span>
                               </>
                             )}
                          </div>
                          
                          {dish.variants && (
                            <div className="flex flex-col space-y-1 mt-2">
                               {dish.variants.map((v, i) => (
                                  <div key={i} className="flex items-end text-xs">
                                     <span className="font-serif text-[#2a382b]/80 uppercase text-[9px] pb-0.5">{v.type} <span className="font-mono text-[8px] opacity-60">({v.code})</span></span>
                                     <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[3px]" />
                                     <span className="font-serif font-bold text-[#2a382b] text-xs group-hover:text-[#182319] transition-colors">{v.price.toFixed(2)}</span>
                                  </div>
                               ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {cat.addOns && (
                  <div className="mt-4 pt-4 border-t border-double border-[#a48559]/30">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-[#a48559] text-[10px] mx-2">❖</span>
                      <h4 className="font-serif font-bold text-[#2a382b] text-[11px] tracking-widest uppercase text-center">Add On</h4>
                      <span className="text-[#a48559] text-[10px] mx-2">❖</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {cat.addOns.map((addon, i) => (
                         <div key={i} className="flex justify-between items-end text-xs group cursor-default">
                            <span className="font-serif uppercase text-[#2a382b] text-[10px] font-bold pb-0.5 group-hover:text-[#182319] transition-colors">• {addon.name}</span>
                            <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[3px]" />
                            <span className="font-serif font-bold text-[#2a382b] text-[11px] group-hover:scale-105 transition-transform origin-bottom-right">RM {addon.price.toFixed(2)}</span>
                         </div>
                      ))}
                    </div>
                  </div>
                )}
              </Page>
            );})}

            {/* Back Cover */}
            <div className="bg-[#f4ebd0] h-full w-full flex flex-col items-center justify-center p-8 border-l-[12px] border-jade-950 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] rounded-r">
              <img src={logoImg} alt="WAKi Dim Sum" className="w-24 h-24 mb-6 object-contain opacity-50 drop-shadow-md" />
              <div className="text-center text-jade-900/80 font-sans text-sm space-y-2 mt-8 font-bold">
                <p>2, Jalan USJ 1/1C</p>
                <p>Regalia Business Centre</p>
                <p>Subang Jaya, Selangor</p>
                <p className="mt-4 font-mono">016-663 4376</p>
              </div>
            </div>

          </FlipBook>
        </div>
        
        {/* Mobile View fallback since Flipbook is tricky on very small screens */}
        <div className="md:hidden flex flex-col space-y-8 mt-8">
           <div className="bg-[#f4ebd0] p-6 rounded-xl shadow-lg border border-[#d4b886] relative overflow-hidden">
             <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', mixBlendMode: 'multiply' }}
              />
              <div className="relative z-10">
                <div className="mb-10 w-full min-h-[500px]">
                  <CoverPageContent />
                </div>
                
                {MENU_CATEGORIES.map((cat, index) => {
                  const isKopitiam = cat.id === 'cat-8';
                  const isHomeEdition = cat.id === 'cat-12';
                  const bgClass = isHomeEdition ? 'bg-[#f0ebd8]' : 'bg-[#eadeb5]';

                  return (
                  <div key={cat.id} className={`mb-10 ${bgClass} p-4 rounded-xl border border-[#c2b294] shadow-sm relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }} />
                    <div className="relative z-10">
                      {catHeroImages[cat.id] && (
                        <div className="w-full h-32 mb-6 border border-[#2a382b]/30 p-1 bg-[#eadeb5]/50 shrink-0 relative">
                          <div className="w-full h-full relative overflow-hidden">
                            <img src={catHeroImages[cat.id]} className="w-full h-full object-cover" alt={cat.name} />
                            {(cat.id === 'cat-2' || cat.id === 'cat-3') && <SteamAnimation />}
                          </div>
                        </div>
                      )}
                      <div className="mb-6 text-center">
                        <h3 className="font-serif text-2xl font-bold text-[#2a382b] border-b-2 border-[#a48559]/50 inline-block pb-1 uppercase">{cat.name}</h3>
                        {cat.subtitle && <p className="font-serif italic text-[#a48559] text-sm mt-2">{cat.subtitle}</p>}
                        {cat.description && <p className="font-serif text-[#2a382b]/90 text-xs mt-2 max-w-xs mx-auto">{cat.description}</p>}
                      </div>
                      
                      {isHomeEdition && (
                        <div className="flex items-center justify-center mb-6">
                          <span className="text-[#2a382b] text-sm">❄️</span>
                          <span className="font-serif uppercase tracking-[0.2em] text-[#2a382b] text-[10px] font-bold mx-3 border-b border-[#2a382b]">Frozen Fresh</span>
                          <span className="text-[#2a382b] text-sm">❄️</span>
                        </div>
                      )}
                      
                      {isKopitiam ? (
                        <div className="flex flex-col space-y-4">
                          <div className="flex justify-between border-b-2 border-[#2a382b] pb-1 font-serif text-[10px] font-bold uppercase tracking-widest text-[#2a382b]">
                            <div className="w-1/3">Drink</div>
                            <div className="w-1/3 text-center">☕ Hot</div>
                            <div className="w-1/3 text-right">🧊 Cold</div>
                          </div>
                          {cat.dishes.map((dish) => {
                            const hotVariant = dish.variants?.find(v => v.type === 'Hot');
                            const coldVariant = dish.variants?.find(v => v.type === 'Cold');
                            return (
                              <div key={dish.id} className="flex justify-between items-center group p-2 -mx-2 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white/40 hover:shadow-[0_4px_12px_-4px_rgba(42,56,43,0.12)] border border-transparent hover:border-[#a48559]/20">
                                <div className="w-1/3 font-serif font-bold text-[#2a382b] text-[12px] uppercase leading-tight">{dish.name}</div>
                                <div className="w-1/3 text-center flex flex-col items-center">
                                  {hotVariant ? (
                                    <>
                                      <span className="font-mono text-[9px] text-[#2a382b]/70">{hotVariant.code}</span>
                                      <span className="font-serif text-[12px] font-bold text-[#2a382b]">RM {hotVariant.price.toFixed(2)}</span>
                                    </>
                                  ) : <span className="text-transparent">-</span>}
                                </div>
                                <div className="w-1/3 text-right flex flex-col items-end">
                                  {coldVariant ? (
                                    <>
                                      <span className="font-mono text-[9px] text-[#2a382b]/70">{coldVariant.code}</span>
                                      <span className="font-serif text-[12px] font-bold text-[#2a382b]">RM {coldVariant.price.toFixed(2)}</span>
                                    </>
                                  ) : <span className="text-transparent">-</span>}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-5 mt-4">
                          {cat.dishes.map((dish) => (
                            <div key={dish.id} className="flex flex-col group p-3 -mx-3 -my-2 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/50 hover:shadow-[0_8px_20px_-6px_rgba(42,56,43,0.15)] border border-transparent hover:border-[#a48559]/20 cursor-default">
                              <div className="flex items-center mb-1">
                                {dish.code && (
                                  <span className="font-serif text-[#2a382b] font-bold text-xs bg-[#a48559]/20 px-1.5 py-0.5 rounded-sm mr-2">{dish.code}</span>
                                )}
                                <h4 className="font-serif font-bold text-[#2a382b] text-[14px] leading-tight uppercase">{dish.name}</h4>
                              </div>
                              
                              {dish.description && (
                                 <p className="font-serif italic text-[#2a382b]/70 text-[11px] leading-snug mb-1">{dish.description}</p>
                              )}
                              
                              <div className="flex items-end mt-1">
                                 <span className="font-serif text-[10px] font-bold text-[#2a382b] uppercase tracking-wider mr-1 pb-0.5">RM</span>
                                 {dish.price !== undefined ? (
                                   <>
                                     <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[5px]" />
                                     <span className="font-serif text-[14px] font-bold text-[#2a382b] group-hover:scale-[1.05] transition-transform origin-bottom-right">{dish.price.toFixed(2)}</span>
                                   </>
                                 ) : dish.variants ? (
                                   <div className="w-full" />
                                 ) : (
                                   <>
                                     <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[5px]" />
                                     <span className="font-serif text-[14px] font-bold text-[#2a382b]">TBA</span>
                                   </>
                                 )}
                              </div>
                              
                              {dish.variants && (
                                <div className="flex flex-col space-y-1 mt-2">
                                   {dish.variants.map((v, i) => (
                                      <div key={i} className="flex items-end text-xs">
                                         <span className="font-serif text-[#2a382b]/80 uppercase text-[10px] pb-0.5">{v.type} <span className="font-mono text-[8px] opacity-60">({v.code})</span></span>
                                         <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[3px]" />
                                         <span className="font-serif font-bold text-[#2a382b] text-[13px] group-hover:text-[#182319] transition-colors">{v.price.toFixed(2)}</span>
                                      </div>
                                   ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {cat.addOns && (
                        <div className="mt-5 pt-4 border-t border-double border-[#a48559]/30">
                          <h4 className="font-serif font-bold text-[#2a382b] mb-3 text-center text-xs tracking-widest uppercase">Add On</h4>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {cat.addOns.map((addon, i) => (
                               <div key={i} className="flex justify-between items-end text-xs group cursor-default">
                                  <span className="font-serif uppercase text-[#2a382b] text-[10px] font-bold pb-0.5 group-hover:text-[#182319] transition-colors">• {addon.name}</span>
                                  <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[3px]" />
                                  <span className="font-serif font-bold text-[#2a382b] text-[11px] group-hover:scale-105 transition-transform origin-bottom-right">RM {addon.price.toFixed(2)}</span>
                               </div>
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
