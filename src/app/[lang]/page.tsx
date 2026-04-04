import { getDictionary } from '../../i18n/get-dictionary';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  
  if (lang === 'en') {
    return {
      title: 'Reactivando | The engine of innovation in society',
      description: 'Fueling the next wave of tech innovation. Discover how Reactivando breaks the tech bubble, creating innovation ecosystems integrated with AI and disruptive methods.',
      openGraph: {
        title: 'Reactivando | Kinetic Innovation',
        description: 'Fueling the next wave of tech innovation across society.',
        images: ['/presentation/slide-4.jpg'],
      }
    };
  }

  // Default to PT
  return {
    title: 'Reactivando | O motor da inovação na sociedade',
    description: 'Impulsionando a próxima onda de inovação tecnológica. Descubra como a Reactivando fura a bolha da tecnologia, criando ecossistemas de inovação.',
    openGraph: {
      title: 'Reactivando | O motor da inovação',
      description: 'Impulsionando a próxima onda de inovação tecnológica na sociedade.',
      images: ['/presentation/slide-4.jpg'],
    }
  };
}

export default async function Home({
  params,
}: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pt");
  const landing = dict.landing || {};

  return (
    <>
      <main className="pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center px-8 py-24 lg:py-32 overflow-hidden">
          {/* Rich Background */}
          <div className="absolute inset-0 z-0 bg-surface_container_lowest">
            <img 
              className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity" 
              alt="Cinematic high-tech lab" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATCzsiSLG2SRac5EX3CPYPHXwITPVjA2Vdy3anoeGbvXcqpB5-hglpqmkt6xwzxNNDNmQNB3sSbRXqzS__LIFv5zONQz8eYgaLaomMcKnOKyI5z9RrUS17PPf-MIBNLxYrlSPMLALRoHRkFJNDmn5LDlFcuk5u4GywrdjkT1OZb2n57pnyg327jAndB8-t3mrJITfIi6mr7NL1qlJeXnjz4M5nX6u0I__SiIlQP6annd3wUwg2P1BF6zjsGEnuN5j9_1fesJOvJQQ"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-primary_container/30 blur-[150px] pointer-events-none"></div>
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="space-y-8 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary_container/30 border border-primary/15 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-secondary">{landing.hero_pill || 'The Kinetic Intelligence'}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6rem] font-display font-extrabold leading-[1.05] tracking-tight text-on_surface text-balance">
                {lang === 'pt' ? (
                  <>Impulsionando a <span className="text-primary italic">Próxima</span> Onda de Inovação Tecnológica.</>
                ) : (
                  <>Fueling the <span className="text-primary italic">Next</span> Wave of Tech Innovation.</>
                )}
              </h1>
              <p className="text-lg lg:text-2xl text-on_surface_variant max-w-2xl leading-relaxed font-light">
                {landing.hero_desc}
              </p>
              <div className="flex flex-wrap gap-4 pt-8">
                <Link href={`/${lang}/apresentacoes`} className="px-8 py-4 bg-gradient-primary text-on_primary rounded-full text-lg font-bold shadow-ambient hover:-translate-y-1 transition-transform inline-block">
                  {landing.explore_programs || 'Explore Programs'}
                </Link>
                <Link href={`/${lang}/manifesto`} className="px-8 py-4 bg-surface_container_highest/50 backdrop-blur-md border border-primary/20 rounded-full text-lg font-bold text-on_surface hover:bg-surface_container_high transition-colors inline-block">
                  {landing.our_manifesto || 'Our Manifesto'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Evolution */}
        <section className="py-24 bg-surface_container_lowest">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-tertiary font-sans uppercase tracking-widest text-sm font-bold">{landing.evolution_pill || 'Our Evolution'}</span>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold mt-4 mb-8 text-on_surface">{landing.evolution_title || 'From React Masters to Global Innovators.'}</h2>
                <div className="space-y-6 text-on_surface_variant text-lg leading-relaxed">
                  <p>{landing.evolution_desc1}</p>
                  <p dangerouslySetInnerHTML={{ __html: landing.evolution_desc2.replace('Reactivando', '<span class="text-primary font-bold">Reactivando</span>') }}></p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-64 bg-surface_container_high rounded-2xl p-6 flex flex-col justify-end border border-outline_variant/10">
                  <span className="text-4xl font-display font-bold text-primary">2021</span>
                  <p className="text-sm text-secondary uppercase tracking-tighter font-bold">React Focus</p>
                </div>
                <div className="h-64 bg-surface_container_highest rounded-2xl p-6 flex flex-col justify-end border border-primary/20 mt-8">
                  <span className="text-4xl font-display font-bold text-tertiary">2024</span>
                  <p className="text-sm text-secondary uppercase tracking-tighter font-bold">Kinetic Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-display font-bold mb-4 text-on_surface">{landing.pillar_title}</h2>
              <p className="text-on_surface_variant">{landing.pillar_desc}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface_container_low p-10 rounded-xl hover:bg-surface_container_high transition-all group border-b-4 border-transparent hover:border-primary">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">terminal</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-on_surface">{landing.pillar1_title}</h3>
                <p className="text-on_surface_variant leading-relaxed">{landing.pillar1_desc}</p>
              </div>
              
              <div className="bg-surface_container_low p-10 rounded-xl hover:bg-surface_container_high transition-all group border-b-4 border-transparent hover:border-tertiary">
                <div className="w-12 h-12 flex items-center justify-center bg-tertiary/10 rounded-lg text-tertiary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">lightbulb</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-on_surface">{landing.pillar2_title}</h3>
                <p className="text-on_surface_variant leading-relaxed">{landing.pillar2_desc}</p>
              </div>
              
              <div className="bg-surface_container_low p-10 rounded-xl hover:bg-surface_container_high transition-all group border-b-4 border-transparent hover:border-secondary">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-lg text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-on_surface">{landing.pillar3_title}</h3>
                <p className="text-on_surface_variant leading-relaxed">{landing.pillar3_desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-8 relative">
          <div className="max-w-5xl mx-auto bg-surface_container rounded-[2rem] p-12 md:p-20 overflow-hidden relative border border-primary/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/10 blur-[80px]"></div>
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-on_surface">{landing.cta_title}</h2>
              <p className="text-on_surface_variant text-lg max-w-xl mx-auto">{landing.cta_desc}</p>
              <div className="flex justify-center mt-6 md:mt-8">
                <a 
                  className="px-6 py-4 md:px-10 md:py-5 bg-gradient-primary text-on_primary rounded-full font-bold text-sm md:text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 md:gap-3 shadow-ambient whitespace-nowrap"
                  href="https://whatsapp.reactivando.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">chat</span>
                  {landing.cta_button}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background pt-12 pb-32 md:pb-12 px-8 border-t border-primary/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <img alt="Reactivando Logo" className="h-8 w-auto mb-4" src="/reactivando-horizontal.svg" />
            <p className="text-secondary/60 text-sm leading-relaxed max-w-xs">{landing.footer_desc}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
               <h5 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{landing.footer_platform}</h5>
               <a className="block text-secondary/60 hover:text-tertiary transition-colors duration-200 text-sm" href={`/${lang}/about`}>{landing.nav_about}</a>
               <a className="block text-secondary/60 hover:text-tertiary transition-colors duration-200 text-sm" href={`/${lang}/programs`}>{landing.nav_programs}</a>
            </div>
            <div className="space-y-4">
               <h5 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{landing.footer_support}</h5>
               <a className="block text-secondary/60 hover:text-tertiary transition-colors duration-200 text-sm" href="https://whatsapp.reactivando.io" target="_blank" rel="noopener noreferrer">{landing.footer_contact}</a>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{landing.footer_connect}</h5>
            <div className="pt-4">
              <p className="text-secondary/40 text-xs">{landing.footer_copy}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
 
