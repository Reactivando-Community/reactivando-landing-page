const fs = require('fs');
const file = 'src/components/ui/PresentationPlayer.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldClosingBlock = `      ) : slide.type === 'closing' ? (
        <div className="flex-grow flex flex-col items-center justify-center p-6 md:p-8 z-10 w-full relative">
           {slide.image && (
             <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000">
               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/50" />
             </div>
           )}

           <div className="w-full max-w-7xl mx-auto mt-12 md:mt-0 flex flex-col items-center relative z-10 text-center">
               <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-mono text-sm md:text-xl font-bold border border-primary/20 mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                   {slide.period} — {slide.highlight}
               </div>

               <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold tracking-tight mb-8 max-w-5xl leading-tight animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
                   {slide.content?.headline}
               </h1>
               
               <p className="text-xl md:text-2xl text-secondary_fixed mb-12 max-w-4xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
                   {slide.content?.story}
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
                   {slide.content?.numbers?.map((num, idx) => (
                       <div key={idx} className="bg-surface_container_lowest/60 backdrop-blur-md p-6 rounded-2xl border border-outline_variant/10 text-left animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: \`\${1000 + (idx * 300)}ms\`, animationFillMode: 'both' }}>
                           <span className="block text-sm uppercase tracking-widest text-primary font-bold mb-2">{num.label}</span>
                           <span className="block text-3xl font-display font-extrabold text-on_surface mb-2">{num.value}</span>
                           <span className="block text-sm text-on_surface_variant">{num.description}</span>
                       </div>
                   ))}
               </div>

               <div className="flex flex-col md:flex-row gap-12 w-full text-left bg-surface/30 backdrop-blur-md p-8 rounded-3xl border border-outline/10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-[2500ms] fill-mode-both">
                   <div className="flex-1">
                       <span className="text-xs uppercase tracking-widest text-tertiary font-bold block mb-4">O Novo Jogo</span>
                       <p className="text-2xl font-bold mb-4">{slide.content?.insight}</p>
                       <p className="text-lg text-secondary_fixed">{slide.content?.nextStep}</p>
                   </div>
                   <div className="flex-1 border-t md:border-t-0 md:border-l border-outline_variant/20 pt-6 md:pt-0 md:pl-8">
                       <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-4">Lições da Transição</span>
                       <ul className="space-y-3">
                           {slide.lessons?.map((lesson, idx) => (
                               <li key={idx} className="flex items-start gap-3 text-lg font-semibold">
                                   <span className="material-symbols-outlined text-primary text-xl mt-0.5">bolt</span>
                                   <span>{lesson}</span>
                               </li>
                           ))}
                       </ul>
                   </div>
               </div>

               <h2 className="text-3xl md:text-5xl font-light italic mt-16 text-primary drop-shadow-xl border-b-4 border-tertiary inline-block pb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-[3500ms] fill-mode-both">
                   "{slide.finalQuote}"
               </h2>
           </div>
        </div>
      ) : (`;

const newClosingBlock = `      ) : slide.type === 'closing' ? (
        <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-6 pb-20 z-10 w-full relative max-h-[100dvh]">
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
                       <div key={idx} className="bg-surface_container_lowest/60 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-outline_variant/10 text-left animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: \`\${1000 + (idx * 300)}ms\`, animationFillMode: 'both' }}>
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
      ) : (`;

content = content.replace(oldClosingBlock, newClosingBlock);
fs.writeFileSync(file, content);
