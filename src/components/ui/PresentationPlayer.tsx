"use client";

import { useState, useEffect } from "react";
import { PresentationSlide } from "@/data/presentation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PresentationPlayer({ slides, conclusion }: { slides: PresentationSlide[], conclusion: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || "en";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events if user is typing in an input (though unlikely in a presentation)
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (["ArrowRight", " ", "PageDown", "ArrowDown", "Enter"].includes(e.key)) {
        setCurrentSlide(prev => Math.min(slides.length, prev + 1));
      } else if (["ArrowLeft", "PageUp", "ArrowUp", "Backspace"].includes(e.key)) {
        setCurrentSlide(prev => Math.max(0, prev - 1));
      } else if (e.key.toLowerCase() === "f") {
        toggleFullScreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable full-screen mode:", err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleNext = () => setCurrentSlide(prev => Math.min(slides.length, prev + 1));
  const handlePrev = () => setCurrentSlide(prev => Math.max(0, prev - 1));

  if (currentSlide === slides.length) {
    return (
      <div className="min-h-screen w-full bg-background text-on_background flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        {/* IMAGE BACKGROUND */}
        {conclusion.image && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000">
            <img src={conclusion.image} alt="Conclusion" className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none z-0" />
        
        <Link href={`/${lang}/programs`} className="absolute top-8 left-8 text-secondary hover:text-primary transition-colors flex items-center gap-2 z-10">
            <span className="material-symbols-outlined">arrow_back</span>
            Voltar
        </Link>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-8 max-w-4xl leading-tight">
            "{conclusion.quote}"
          </h1>
          <p className="text-xl md:text-2xl text-primary font-bold mb-12">{conclusion.cta}</p>
          
          <div className="flex gap-4 justify-center">
              <button onClick={() => setCurrentSlide(0)} className="px-6 py-3 rounded-full border border-outline_variant/30 hover:bg-surface_container_high transition-colors text-sm font-semibold bg-surface/50 backdrop-blur-sm">
                  Reiniciar
              </button>
              <Link href={`/${lang}/programs`} className="px-6 py-3 rounded-full bg-primary text-on_primary hover:bg-primary/90 transition-colors text-sm font-semibold shadow-ambient">
                  Voltar aos Programas
              </Link>
          </div>
        </div>
      </div>
    );
  }

  const slide = slides[currentSlide];
  const progress = ((currentSlide + 1) / slides.length) * 100;
  const imgOpacity = slide.imageOpacity ?? 15;

  return (
    <div className="min-h-screen w-full bg-background text-on_background flex flex-col relative overflow-hidden">
      {/* Dynamic Background Hint */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-tertiary blur-3xl opacity-20" />
      </div>

      <Link href={`/${lang}/programs`} className="absolute top-6 left-6 z-50 text-secondary hover:text-primary transition-colors flex items-center gap-2 bg-surface_container_highest/30 backdrop-blur-md px-4 py-2 rounded-full text-sm">
        <span className="material-symbols-outlined text-[16px]">close</span>
        <span>Sair</span>
      </Link>

      <div className="absolute top-8 right-8 z-50 flex items-center gap-4 text-sm text-secondary font-mono">
          <span>{currentSlide + 1}</span>
          <span className="opacity-40">/</span>
          <span className="opacity-40">{slides.length}</span>
          
          <button onClick={toggleFullScreen} className="ml-4 p-2 bg-surface_container_highest/30 backdrop-blur-md rounded-full hover:bg-surface_container_highest/80 hover:text-primary transition-all flex items-center justify-center cursor-pointer" title="Fullscreen (F)">
            <span className="material-symbols-outlined text-[16px]">fullscreen</span>
          </button>
      </div>

      {slide.type === 'intro' ? (
        <div className="flex-grow flex flex-col justify-center items-end p-6 md:p-16 z-10 w-full relative">
           {/* IMAGE BACKGROUND */}
           {slide.image && (
             <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-left-top opacity-80 md:w-3/4 md:mr-auto" />
               <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/60 to-background" />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
             </div>
           )}

           <div className="relative z-10 max-w-3xl text-right mt-16 md:mt-0 flex flex-col items-end">
              <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-8 drop-shadow-2xl">{slide.title}</h1>
              
              {slide.context && (
              <div className="flex flex-wrap gap-4 md:gap-6 justify-end mb-16 max-w-2xl">
                {slide.context.university && <span className="px-4 py-2 md:px-6 md:py-3 bg-primary/20 text-primary border border-primary/30 rounded-full font-mono text-sm md:text-xl">{slide.context.university}</span>}
                {slide.context.work && <span className="px-4 py-2 md:px-6 md:py-3 bg-tertiary/20 text-tertiary border border-tertiary/30 rounded-full font-mono text-sm md:text-xl">{slide.context.work}</span>}
                {slide.context.project && <span className="px-4 py-2 md:px-6 md:py-3 bg-white/10 text-white border border-white/20 rounded-full font-mono text-sm md:text-xl font-bold">{slide.context.project}</span>}
              </div>
              )}

              {slide.social && (
              <div className="flex justify-end mb-16 mt-[-2rem] max-w-2xl">
                 <span className="text-secondary_fixed font-mono text-base md:text-2xl font-bold flex items-center gap-3 border border-outline_variant/20 px-6 py-3 rounded-full bg-surface_container_low/30 backdrop-blur-sm shadow-sm">
                    {slide.social}
                 </span>
              </div>
              )}

              <blockquote className="text-3xl md:text-5xl font-medium leading-relaxed text-on_surface border-r-4 border-tertiary pr-6 md:pr-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                 "{slide.speech}"
              </blockquote>

              {slide.qrCode && (
              <div className="mt-12 flex flex-col items-end gap-3 animate-in fade-in zoom-in duration-700 delay-300">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">{slide.qrCode.label}</span>
                <div className="p-4 bg-white rounded-2xl shadow-ambient">
                  <img src={slide.qrCode.url} alt="QR Code" className="w-48 h-48 sm:w-64 sm:h-64 object-contain" />
                </div>
                {slide.qrCode.caption && (
                  <span className="font-mono text-sm md:text-base font-bold tracking-widest uppercase text-on_surface_variant">{slide.qrCode.caption}</span>
                )}
              </div>
              )}
           </div>
        </div>
      ) : slide.type === 'closing' ? (
        <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-6 pb-20 z-10 w-full relative max-h-[100dvh] overflow-hidden">
           {slide.image && (
             <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000">
               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105" style={slide.imageOpacity ? { opacity: slide.imageOpacity / 100 } : undefined} />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/40" />
             </div>
           )}

           <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10 text-center">
               <div className="flex items-center gap-4 bg-primary/10 text-primary px-6 py-2 md:px-8 md:py-3 rounded-full font-mono text-sm md:text-xl font-bold border border-primary/20 mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
                   {slide.period} <span className="opacity-50">—</span> {slide.highlight}
               </div>

               <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-6 max-w-5xl leading-tight animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
                   {slide.content?.headline}
               </h1>
               
               <p className="text-xl md:text-3xl lg:text-4xl text-on_surface mb-10 max-w-5xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both drop-shadow-md">
                   {slide.content?.story}
               </p>

               {slide.content?.numbers && slide.content.numbers.length > 0 && (
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
                   {slide.content?.numbers?.map((num, idx) => (
                       <div key={idx} className="bg-surface_container_lowest/60 backdrop-blur-md p-6 rounded-2xl border border-outline_variant/10 text-left animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${1000 + (idx * 300)}ms`, animationFillMode: 'both' }}>
                           <span className="block text-sm md:text-base uppercase tracking-widest text-primary font-bold mb-2">{num.label}</span>
                           <span className="block text-3xl md:text-5xl font-display font-extrabold text-on_surface mb-2">{num.value}</span>
                           <span className="block text-sm md:text-lg text-on_surface_variant leading-tight font-medium">{num.description}</span>
                       </div>
                   ))}
               </div>
               )}

               { (slide.content?.insight || (slide.lessons && slide.lessons.length > 0)) ? (
               <div className="flex flex-col md:flex-row gap-8 w-full text-left bg-surface/30 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-outline/10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-[2500ms] fill-mode-both">
                   <div className="flex-1 md:pr-6">
                       <span className="text-xs md:text-sm uppercase tracking-widest text-tertiary font-bold block mb-4">O Novo Jogo</span>
                       <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug text-on_surface">{slide.content?.insight}</p>
                       <p className="text-lg md:text-xl lg:text-2xl text-on_surface_variant font-medium leading-relaxed">{slide.content?.nextStep}</p>
                   </div>
                   <div className="flex-1 border-t md:border-t-0 md:border-l border-outline_variant/20 pt-6 md:pt-0 md:pl-8">
                       <span className="text-xs md:text-sm uppercase tracking-widest text-primary font-bold block mb-4">Lições da Transição</span>
                       <ul className="space-y-4 md:space-y-6">
                           {slide.lessons?.map((lesson, idx) => (
                               <li key={idx} className="flex items-start gap-4 text-lg md:text-2xl font-semibold text-on_surface/90">
                                   <span className="material-symbols-outlined text-primary text-2xl md:text-3xl mt-0.5 scale-110">bolt</span>
                                   <span className="leading-tight">{lesson}</span>
                               </li>
                           ))}
                       </ul>
                   </div>
               </div>
               ) : null}

               {slide.qrCode && (
               <div className="mt-12 flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-700 delay-300">
                 <span className="text-lg font-bold uppercase tracking-widest text-primary bg-primary/10 px-6 py-2 rounded-full">{slide.qrCode.label}</span>
                 <div className="p-4 bg-white rounded-3xl shadow-ambient border-4 border-white/20">
                   <img src={slide.qrCode.url} alt="QR Code" className="w-56 h-56 md:w-80 md:h-80 object-contain" />
                 </div>
               </div>
               )}

               {slide.qrCodes && slide.qrCodes.length > 0 && (
               <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
                 {slide.qrCodes.map((qr, idx) => (
                   <div key={idx} className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-700 fill-mode-both" style={{ animationDelay: `${700 + (idx * 300)}ms` }}>
                     {qr.label && (
                       <span className="text-base md:text-lg font-bold uppercase tracking-widest text-primary bg-primary/10 px-6 py-2 rounded-full">{qr.label}</span>
                     )}
                     <div className="p-4 bg-white rounded-3xl shadow-ambient border-4 border-white/20">
                       <img src={qr.url} alt={qr.label ? `QR Code — ${qr.label}` : 'QR Code'} className="w-44 h-44 md:w-64 md:h-64 object-contain" />
                     </div>
                     {qr.caption && (
                       <span className="font-mono text-sm md:text-base font-bold tracking-widest uppercase text-on_surface_variant">{qr.caption}</span>
                     )}
                   </div>
                 ))}
               </div>
               )}

               {slide.finalQuote && (
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-12 text-primary drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] border-b-[4px] border-tertiary inline-block pb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-[3500ms] fill-mode-both">
                   "{slide.finalQuote}"
               </h2>
               )}
           </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 z-10 w-full relative">
           {/* IMAGE BACKGROUND */}
           {slide.image && (
             <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000">
               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105" style={slide.imageOpacity ? { opacity: slide.imageOpacity / 100 } : undefined} />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
             </div>
           )}

          <div className="w-full max-w-7xl mx-auto mt-12 md:mt-0 flex flex-col md:flex-row gap-12 md:gap-24 items-center relative z-10">
              
              {/* Left side: Context & Period */}
              <div className="w-full md:w-1/3 space-y-8">
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-mono text-sm md:text-xl font-bold border border-primary/20">
                      {slide.period}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold tracking-tight leading-tight">
                      {slide.title}
                  </h1>

                  {slide.context && (slide.context.university || slide.context.work || slide.context.project) ? (
                  <div className="space-y-6 pt-8 border-t border-outline_variant/10">
                      {slide.context.university ? (
                      <div>
                          <span className="text-xs md:text-sm uppercase tracking-widest text-secondary/50 font-bold block mb-2">Academia</span>
                          <p className="text-base md:text-lg lg:text-xl border-l-4 border-tertiary pl-4 text-secondary_fixed">{slide.context.university}</p>
                      </div>
                      ) : null}
                      {slide.context.work ? (
                      <div>
                          <span className="text-xs md:text-sm uppercase tracking-widest text-secondary/50 font-bold block mb-2">Trabalho</span>
                          <p className="text-base md:text-lg lg:text-xl border-l-4 border-primary pl-4 text-secondary_fixed">{slide.context.work}</p>
                      </div>
                      ) : null}
                      {slide.context.project ? (
                      <div>
                          <span className="text-xs md:text-sm uppercase tracking-widest text-secondary/50 font-bold block mb-2">Projetos</span>
                          <p className="text-base md:text-lg lg:text-xl border-l-4 border-white pl-4 text-on_surface font-semibold">{slide.context.project}</p>
                      </div>
                      ) : null}
                  </div>
                  ) : null}
              </div>

              {/* Right side: Story & Bullets */}
              <div className="w-full md:w-2/3 flex flex-col justify-center space-y-12">
                  <blockquote className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-on_surface border-l-4 border-tertiary pl-6 md:pl-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                      "{slide.speech}"
                  </blockquote>

                  {slide.bullets && slide.bullets.length > 0 && (
                  <ul className="space-y-6 md:space-y-8 text-lg md:text-2xl lg:text-3xl font-sans text-on_surface/90 font-medium drop-shadow-md">
                      {slide.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                              <span className="material-symbols-outlined text-tertiary mt-1.5 md:mt-1 lg:mt-2 scale-125">check_circle</span>
                              <span className="tracking-wide text-white">{bullet}</span>
                          </li>
                      ))}
                  </ul>
                  )}

                  {slide.learning && (
                  <div className="bg-surface_container_low p-6 rounded-2xl border border-outline_variant/10 mt-8 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">Aprendizado Chave</span>
                      <p className="font-semibold text-lg">{slide.learning}</p>
                  </div>
                  )}

                  {slide.qrCode && (
                  <div className="mt-8 flex flex-row items-center gap-6 bg-surface_container_low/50 backdrop-blur-md p-6 rounded-3xl border border-outline/10">
                    <div className="p-3 bg-white rounded-2xl shadow-sm shrink-0">
                      <img src={slide.qrCode.url} alt="QR Code" className="w-32 h-32 md:w-48 md:h-48 object-contain" />
                    </div>
                    <div>
                      <span className="text-sm font-bold uppercase tracking-widest text-tertiary mb-2 block">Acesse agora</span>
                      <p className="text-xl md:text-2xl font-semibold text-on_surface">{slide.qrCode.label}</p>
                    </div>
                  </div>
                  )}
              </div>
          </div>
        </div>
      )}

      {slide.type !== 'closing' && (
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50 text-secondary bg-surface_container_highest/80 backdrop-blur-xl px-6 py-3 rounded-full border border-outline_variant/20 shadow-ambient">
          <button onClick={handlePrev} disabled={currentSlide === 0} className="hover:text-primary transition-colors disabled:opacity-30 flex items-center justify-center">
              <span className="material-symbols-outlined">chevron_left</span>
          </button>
          
          <span className="text-xs font-bold font-mono tracking-widest text-on_surface">{slide.keyword}</span>

          <button onClick={handleNext} className="hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
          </button>
      </div>
      )}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-surface_container_highest w-full z-50">
          <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
