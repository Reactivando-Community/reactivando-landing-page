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

      if (e.key === "ArrowRight" || e.key === " ") {
        setCurrentSlide(prev => Math.min(slides.length, prev + 1));
      } else if (e.key === "ArrowLeft") {
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
               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-left-top opacity-80 mix-blend-luminosity md:w-3/4 md:mr-auto" />
               <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/60 to-background" />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
             </div>
           )}

           <div className="relative z-10 max-w-3xl text-right mt-16 md:mt-0 flex flex-col items-end">
              <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-8 drop-shadow-2xl">{slide.title}</h1>
              
              <div className="flex flex-wrap gap-3 justify-end mb-16 max-w-xl">
                <span className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full font-mono text-xs md:text-sm">{slide.context.university}</span>
                <span className="px-4 py-2 bg-tertiary/20 text-tertiary border border-tertiary/30 rounded-full font-mono text-xs md:text-sm">{slide.context.work}</span>
                <span className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-full font-mono text-xs md:text-sm font-bold">{slide.context.project}</span>
              </div>

              <blockquote className="text-3xl md:text-5xl font-light italic leading-relaxed text-secondary/90 border-r-4 border-primary pr-6 md:pr-10 drop-shadow-lg">
                 "{slide.speech}"
              </blockquote>
           </div>
        </div>
      ) : slide.type === 'closing' ? (
        <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-6 pb-20 z-10 w-full relative max-h-[100dvh] overflow-hidden">
           {slide.image && (
             <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000">
               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/50" />
             </div>
           )}

           <div className="w-full max-w-6xl mx-auto flex flex-col items-center relative z-10 text-center">
               <div className="flex items-center gap-3 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-mono text-xs md:text-sm font-bold border border-primary/20 mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
                   {slide.period} <span className="opacity-50">—</span> {slide.highlight}
               </div>

               <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mb-4 max-w-4xl leading-tight animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
                   {slide.content?.headline}
               </h1>
               
               <p className="text-lg md:text-xl text-secondary_fixed mb-8 max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
                   {slide.content?.story}
               </p>

               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-8">
                   {slide.content?.numbers?.map((num, idx) => (
                       <div key={idx} className="bg-surface_container_lowest/60 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-outline_variant/10 text-left animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${1000 + (idx * 300)}ms`, animationFillMode: 'both' }}>
                           <span className="block text-xs uppercase tracking-widest text-primary font-bold mb-1">{num.label}</span>
                           <span className="block text-2xl md:text-3xl font-display font-extrabold text-on_surface mb-1">{num.value}</span>
                           <span className="block text-xs md:text-sm text-on_surface_variant leading-tight">{num.description}</span>
                       </div>
                   ))}
               </div>

               <div className="flex flex-col md:flex-row gap-6 w-full text-left bg-surface/30 backdrop-blur-md p-5 md:p-6 rounded-3xl border border-outline/10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-[2500ms] fill-mode-both">
                   <div className="flex-1 md:pr-4">
                       <span className="text-[10px] uppercase tracking-widest text-tertiary font-bold block mb-2">O Novo Jogo</span>
                       <p className="text-lg font-bold mb-2 leading-snug">{slide.content?.insight}</p>
                       <p className="text-sm text-secondary_fixed leading-relaxed">{slide.content?.nextStep}</p>
                   </div>
                   <div className="flex-1 border-t md:border-t-0 md:border-l border-outline_variant/20 pt-4 md:pt-0 md:pl-6">
                       <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-2">Lições da Transição</span>
                       <ul className="space-y-2">
                           {slide.lessons?.map((lesson, idx) => (
                               <li key={idx} className="flex items-start gap-2 text-sm md:text-base font-semibold">
                                   <span className="material-symbols-outlined text-primary text-base mt-0.5">bolt</span>
                                   <span className="leading-tight">{lesson}</span>
                               </li>
                           ))}
                       </ul>
                   </div>
               </div>

               <h2 className="text-2xl md:text-3xl font-light italic mt-8 text-primary drop-shadow-xl border-b-[3px] border-tertiary inline-block pb-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-[3500ms] fill-mode-both">
                   "{slide.finalQuote}"
               </h2>
           </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 z-10 w-full relative">
           {/* IMAGE BACKGROUND */}
           {slide.image && (
             <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000">
               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105" />
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

                  <div className="space-y-4 pt-6 border-t border-outline_variant/10">
                      <div>
                          <span className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold block mb-1">Academia</span>
                          <p className="text-sm border-l-2 border-tertiary pl-3 text-secondary_fixed">{slide.context.university || "-"}</p>
                      </div>
                      <div>
                          <span className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold block mb-1">Trabalho</span>
                          <p className="text-sm border-l-2 border-primary pl-3 text-secondary_fixed">{slide.context.work || "-"}</p>
                      </div>
                      <div>
                          <span className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold block mb-1">Projetos</span>
                          <p className="text-sm border-l-2 border-white pl-3 text-on_surface font-semibold">{slide.context.project || "-"}</p>
                      </div>
                  </div>
              </div>

              {/* Right side: Story & Bullets */}
              <div className="w-full md:w-2/3 flex flex-col justify-center space-y-12">
                  <blockquote className="text-2xl md:text-4xl font-light italic leading-relaxed text-secondary/90 border-l-4 border-primary pl-6 md:pl-10">
                      "{slide.speech}"
                  </blockquote>

                  <ul className="space-y-4 text-base md:text-xl font-sans text-on_surface_variant">
                      {slide.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                              <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                              <span>{bullet}</span>
                          </li>
                      ))}
                  </ul>

                  <div className="bg-surface_container_low p-6 rounded-2xl border border-outline_variant/10 mt-8 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">Aprendizado Chave</span>
                      <p className="font-semibold text-lg">{slide.learning}</p>
                  </div>
              </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50 text-secondary bg-surface_container_highest/80 backdrop-blur-xl px-6 py-3 rounded-full border border-outline_variant/20 shadow-ambient">
          <button onClick={handlePrev} disabled={currentSlide === 0} className="hover:text-primary transition-colors disabled:opacity-30 flex items-center justify-center">
              <span className="material-symbols-outlined">chevron_left</span>
          </button>
          
          <span className="text-xs font-bold font-mono tracking-widest text-on_surface">{slide.keyword}</span>

          <button onClick={handleNext} className="hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
          </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-surface_container_highest w-full z-50">
          <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
