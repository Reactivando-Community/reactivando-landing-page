import BackButton from '@/components/ui/BackButton';

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-background text-on_background flex flex-col pt-24 md:pt-40 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary_container blur-[150px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto w-full space-y-24 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-on_surface tracking-tight text-balance">
            {lang === 'pt' ? 'A Nossa Comunidade' : 'Our Community'}
          </h1>
          <p className="text-xl md:text-2xl font-light text-on_surface_variant leading-relaxed">
            {lang === 'pt' 
              ? 'Mais que uma rede de contatos. Um hub dinâmico de troca de conhecimento, construção de produtos e crescimento contínuo.' 
              : 'More than a network. A dynamic hub for knowledge sharing, product building, and continuous growth.'}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-surface_container_low/40 backdrop-blur-md p-8 rounded-[2rem] border border-outline_variant/10 shadow-ambient text-center flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
            <span className="text-5xl md:text-6xl font-display font-bold text-primary mb-3">5K+</span>
            <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-secondary font-bold">
              {lang === 'pt' ? 'Membros Ativos' : 'Active Members'}
            </span>
          </div>
          <div className="bg-surface_container_low/40 backdrop-blur-md p-8 rounded-[2rem] border border-outline_variant/10 shadow-ambient text-center flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
            <span className="text-5xl md:text-6xl font-display font-bold text-tertiary mb-3">40+</span>
            <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-secondary font-bold">
              {lang === 'pt' ? 'Encontros' : 'Hosted Events'}
            </span>
          </div>
          <div className="bg-surface_container_low/40 backdrop-blur-md p-8 rounded-[2rem] border border-outline_variant/10 shadow-ambient text-center flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
            <span className="text-5xl md:text-6xl font-display font-bold text-primary mb-3">100+</span>
            <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-secondary font-bold">
              {lang === 'pt' ? 'Projetos Gêmeos' : 'Twin Projects'}
            </span>
          </div>
          <div className="bg-surface_container_low/40 backdrop-blur-md p-8 rounded-[2rem] border border-outline_variant/10 shadow-ambient text-center flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
            <span className="text-5xl md:text-6xl font-display font-bold text-tertiary mb-3">12</span>
            <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-secondary font-bold">
              {lang === 'pt' ? 'Cidades Polo' : 'Hub Cities'}
            </span>
          </div>
        </div>

        {/* Events Gallery */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-display font-extrabold text-on_surface mb-6">
               {lang === 'pt' ? 'Momentos & Conexões' : 'Moments & Connections'}
             </h2>
             <p className="text-on_surface_variant text-lg font-light leading-relaxed">
               {lang === 'pt' ? 'Confira a energia surreal do que já rolou em nossos hackathons, meetups e imersões presenciais espalhados pelo país.' : 'Check out the surreal energy from our hackathons, meetups, and in-person immersions across the country.'}
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-primary/10 bg-surface_container_lowest">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800" alt="Audience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-1">Summit 2023</span>
                <span className="text-on_surface font-display text-xl font-bold">Stage & Keynotes</span>
              </div>
            </div>
            <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-tertiary/10 bg-surface_container_lowest">
              <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800" alt="Meetup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                <span className="text-tertiary font-bold text-sm uppercase tracking-widest block mb-1">Tech Connect</span>
                <span className="text-on_surface font-display text-xl font-bold">Local Meetup</span>
              </div>
            </div>
            <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-primary/10 bg-surface_container_lowest">
              <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800" alt="Hackathon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-1">Hackathon AI</span>
                <span className="text-on_surface font-display text-xl font-bold">Builders in action</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto bg-surface_container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-outline_variant/10 shadow-ambient mt-32">
          <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tertiary/10 rounded-full blur-[120px]"></div>
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-on_surface text-balance leading-tight">
              {lang === 'pt' ? 'Acelere ao Lado de Quem Faz Acontecer' : 'Accelerate Alongside Those Who Make it Happen'}
            </h2>
            <p className="text-lg md:text-xl text-on_surface_variant max-w-2xl mx-auto font-light leading-relaxed">
              {lang === 'pt' 
                ? 'Conecte-se diariamente com líderes, encontre sócios em potencial e fique sabendo dos próximos encontros antes de todo mundo no nosso grupo oficial.' 
                : 'Connect daily with tech leaders, find potential partners, and get early access to upcoming meetups in our official group.'}
            </p>
            <div className="pt-8">
              <a 
                className="inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-6 bg-gradient-innovation text-on_primary rounded-full font-bold text-lg md:text-xl hover:-translate-y-1 transition-transform shadow-[0_0_40px_rgba(45,212,191,0.2)]"
                href="https://whatsapp.reactivando.io" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-2xl">forum</span>
                {lang === 'pt' ? 'Entrar no Grupo de WhatsApp' : 'Join WhatsApp Group'}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
