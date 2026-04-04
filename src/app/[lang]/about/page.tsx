import BackButton from '@/components/ui/BackButton';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-background text-on_background p-8 lg:p-24 flex flex-col">
      <div className="max-w-4xl mx-auto w-full space-y-8 mt-16">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-on_surface text-balance tracking-tight">
          {lang === 'pt' ? 'Sobre os Fundadores' : 'About the Founders'}
        </h1>
        <div className="space-y-6 text-on_surface_variant text-lg leading-relaxed mt-12 bg-surface_container_low p-8 md:p-12 rounded-[2rem] border border-outline_variant/10 shadow-ambient relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px]"></div>
          
          <h2 className="text-2xl font-display font-bold text-on_surface mb-4">
            {lang === 'pt' ? 'A Nossa História' : 'Our Story'}
          </h2>
          <p>
            {lang === 'pt' 
              ? 'Este é um texto padrão reservado para contar a história dos fundadores da Reactivando. Aqui você poderá detalhar como tudo começou, a visão de mercado e as experiências que os moldaram até fundar esta comunidade.'
              : 'This is a standard placeholder text reserved to tell the story of the Reactivando founders. Here you will be able to detail how everything started, the market vision, and the experiences that shaped them to create this community.'}
          </p>
          <p>
            {lang === 'pt'
              ? 'A Reactivando nasceu para unir profissionais de elite do ecossistema, combinando excelência técnica com visão de negócios e produtos de alto nível. Este espaço abrigará os perfis daqueles que lideram o manifesto de inovação.'
              : 'Reactivando was born to unite elite tech professionals, combining technical excellence with high-level business and product vision. This space will house the profiles of those who lead the innovation manifesto.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 mt-8 border-t border-outline_variant/10 relative z-10">
             <div className="flex flex-col gap-4">
               <div className="w-20 h-20 bg-surface_container_highest rounded-full border border-primary/20 flex items-center justify-center text-primary mb-2 shadow-ambient">
                 <span className="material-symbols-outlined text-3xl">person</span>
               </div>
               <h3 className="text-xl font-bold font-display text-on_surface">
                 {lang === 'pt' ? 'Nome do Fundador 1' : 'Founder 1 Name'}
               </h3>
               <p className="text-sm opacity-80">
                 {lang === 'pt' ? 'CEO & Co-founder. Breve biografia que ressalta os pontos fortes, carreira e foco atual e missão.' : 'CEO & Co-founder. Brief biography highlighting key strengths, career path, current focus and mission.'}
               </p>
             </div>
             <div className="flex flex-col gap-4">
               <div className="w-20 h-20 bg-surface_container_highest rounded-full border border-tertiary/20 flex items-center justify-center text-tertiary mb-2 shadow-ambient">
                 <span className="material-symbols-outlined text-3xl">person</span>
               </div>
               <h3 className="text-xl font-bold font-display text-on_surface">
                 {lang === 'pt' ? 'Nome do Fundador 2' : 'Founder 2 Name'}
               </h3>
               <p className="text-sm opacity-80">
                 {lang === 'pt' ? 'CTO & Co-founder. Breve biografia que ressalta os pontos fortes, carreira e foco atual e missão.' : 'CTO & Co-founder. Brief biography highlighting key strengths, career path, current focus and mission.'}
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
