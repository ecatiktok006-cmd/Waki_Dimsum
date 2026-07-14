import React, { useRef } from 'react';
import { motion } from 'motion/react';
import HTMLFlipBook from 'react-pageflip';
import { MENU_CATEGORIES } from '../data';
import logoImg from '../assets/images/logo.png';
import bgImg from '../assets/images/bg.png';
import menuFrontPageImg from '../assets/images/menu_front_page.png';
import mostLovedImg from '../assets/images/mostloved.png';

// Need to suppress TypeScript errors for HTMLFlipBook because of missing types
const FlipBook = HTMLFlipBook as any;

// A custom page component required by react-pageflip to use ref
const Page = React.forwardRef<HTMLDivElement, { title?: string; subtitle?: string; description?: string; children: React.ReactNode; number: number; noPadding?: boolean }>((props, ref) => {
  return (
    <div className="bg-[#eadeb5] h-full w-full shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] border-l border-r border-[#c2b294] relative overflow-hidden" ref={ref}>
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
            {MENU_CATEGORIES.map((cat, index) => (
              <Page key={cat.id} title={cat.name} subtitle={cat.subtitle} description={cat.description} number={index + 2}>
                <div className="grid grid-cols-2 gap-4">
                  {cat.dishes.map((dish) => (
                    <div key={dish.id} className="flex flex-col mb-4">
                      {dish.code && (
                        <div className="flex items-center mb-1">
                          <span className="font-serif text-[#2a382b] font-bold text-sm bg-[#a48559]/20 px-1.5 py-0.5 rounded-sm">{dish.code}</span>
                        </div>
                      )}
                      
                      <h4 className="font-serif font-bold text-[#2a382b] text-[13px] leading-tight uppercase mb-1">{dish.name}</h4>
                      
                      {dish.description && (
                         <p className="font-serif italic text-[#2a382b]/70 text-[10px] leading-snug mb-1">{dish.description}</p>
                      )}
                      
                      <div className="flex items-end mt-auto pt-1">
                         <span className="font-serif text-[9px] font-bold text-[#2a382b] uppercase tracking-wider mr-1 pb-0.5">RM</span>
                         {dish.price !== undefined ? (
                           <>
                             <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[5px]" />
                             <span className="font-serif text-[13px] font-bold text-[#2a382b]">{dish.price.toFixed(2)}</span>
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
                                 <span className="font-serif text-[#2a382b]/80 uppercase text-[10px] pb-0.5">{v.type} <span className="font-mono text-[8px] opacity-60">({v.code})</span></span>
                                 <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[3px]" />
                                 <span className="font-serif font-bold text-[#2a382b] text-xs">{v.price.toFixed(2)}</span>
                              </div>
                           ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {cat.addOns && (
                  <div className="mt-4 pt-4 border-t border-double border-[#a48559]/30">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-[#a48559] text-[10px] mx-2">❖</span>
                      <h4 className="font-serif font-bold text-[#2a382b] text-[11px] tracking-widest uppercase text-center">Add On</h4>
                      <span className="text-[#a48559] text-[10px] mx-2">❖</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {cat.addOns.map((addon, i) => (
                         <div key={i} className="flex justify-between items-end text-xs">
                            <span className="font-serif uppercase text-[#2a382b] text-[10px] font-bold pb-0.5">• {addon.name}</span>
                            <div className="flex-1 border-b border-dotted border-[#2a382b]/40 mx-1 mb-[3px]" />
                            <span className="font-serif font-bold text-[#2a382b] text-xs">RM {addon.price.toFixed(2)}</span>
                         </div>
                      ))}
                    </div>
                  </div>
                )}
              </Page>
            ))}

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
                
                {MENU_CATEGORIES.map((cat, index) => (
                  <div key={cat.id} className="mb-10 bg-white/40 p-4 rounded-xl border border-white/20 shadow-sm backdrop-blur-sm">
                    <div className="mb-6 text-center">
                      <h3 className="font-serif text-2xl font-bold text-jade-950 border-b-2 border-gold-400 inline-block pb-1">{cat.name}</h3>
                      {cat.subtitle && <p className="font-serif text-jade-900/80 italic text-sm mt-2">{cat.subtitle}</p>}
                      {cat.description && <p className="font-sans text-xs text-jade-900/70 mt-2 max-w-xs mx-auto">{cat.description}</p>}
                    </div>
                    
                    <div className="flex flex-col space-y-4 mt-4">
                      {cat.dishes.map((dish) => (
                        <div key={dish.id} className="flex flex-col border-b border-jade-900/10 pb-3 last:border-0">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start">
                              {dish.code && (
                                <span className="bg-jade-900 text-cream-50 font-mono text-[10px] font-bold px-1.5 py-0.5 rounded mr-2 shrink-0 mt-0.5">{dish.code}</span>
                              )}
                              <h4 className="font-serif font-bold text-jade-950 text-sm leading-tight">{dish.name}</h4>
                            </div>
                            {dish.price !== undefined && (
                              <span className="font-mono text-gold-700 font-bold whitespace-nowrap ml-2 text-sm">RM {dish.price.toFixed(2)}</span>
                            )}
                            {dish.price === undefined && !dish.variants && (
                              <span className="font-mono text-gold-700 font-bold whitespace-nowrap ml-2 text-sm">TBA</span>
                            )}
                          </div>
                          
                          {dish.description && (
                             <p className="font-sans text-xs text-jade-900/60 mt-1 leading-snug ml-9">{dish.description}</p>
                          )}
                          
                          {dish.variants && (
                            <div className="flex flex-col space-y-1 mt-2 ml-9">
                               {dish.variants.map((v, i) => (
                                  <div key={i} className="flex justify-between items-center text-xs">
                                     <span className="text-jade-900/70 font-sans">{v.type} ({v.code})</span>
                                     <span className="font-mono text-jade-950 font-semibold">RM {v.price.toFixed(2)}</span>
                                  </div>
                               ))}
                            </div>
                          )}
                        </div>
                      ))}
                      
                      {cat.addOns && (
                        <div className="mt-4 pt-4 border-t border-jade-900/20">
                          <h4 className="font-serif font-bold text-jade-950 mb-3 text-center text-sm tracking-widest uppercase">Add On</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {cat.addOns.map((addon, i) => (
                               <div key={i} className="flex justify-between text-xs">
                                  <span className="font-sans text-jade-900/80">• {addon.name}</span>
                                  <span className="font-mono font-semibold text-jade-950">RM {addon.price.toFixed(2)}</span>
                               </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
