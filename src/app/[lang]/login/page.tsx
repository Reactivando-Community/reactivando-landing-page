import { getDictionary } from '../../../i18n/get-dictionary';
import Link from 'next/link';

export default async function Login({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pt");

  return (
    <div className="bg-background text-on_background font-sans min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col md:flex-row items-stretch">
        {/* Left Section: Form Content */}
        <section className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-16 z-10">
          <div className="max-w-md w-full space-y-8">
            
            {/* Brand Identity */}
            <div className="flex flex-col items-start gap-4 pt-12 md:pt-0">
              <div className="md:hidden mb-2">
                <img src="/reactivando-fav.svg" alt="Reactivando Icon" className="h-14 w-auto drop-shadow-[0_4px_12px_rgba(116,213,220,0.3)]" />
              </div>
              <div className="space-y-1">
                <h1 className="font-display text-3xl font-bold tracking-tight text-on_surface">{dict.login?.welcome || 'Bem-vindo de volta'}</h1>
                <p className="text-on_surface_variant">{dict.login?.welcome_subtitle || 'Acesse sua conta para continuar inovando.'}</p>
              </div>
            </div>

            {/* Unified Access Callout */}
            <div className="bg-secondary_container/20 border-l-4 border-primary p-4 rounded-xl flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">hub</span>
              <div>
                <p className="font-display font-bold text-sm text-primary tracking-tight">{dict.login?.unified_access || 'Acesso Unificado'}</p>
                <p className="text-sm text-on_secondary_container leading-relaxed">{dict.login?.unified_access_desc || 'Utilize seu login do Hub Community'}</p>
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-sans text-xs font-semibold uppercase tracking-widest text-on_surface_variant" htmlFor="email">{dict.login?.email_label || 'E-mail Hub Community'}</label>
                  <input className="w-full bg-surface_container_lowest border-none ring-1 ring-outline_variant/15 focus:ring-primary rounded-xl px-4 py-3 text-on_surface placeholder:text-on_surface_variant/50 transition-all outline-none" id="email" placeholder={dict.login?.email_placeholder || 'seu@email.com'} type="email"/>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="font-sans text-xs font-semibold uppercase tracking-widest text-on_surface_variant" htmlFor="password">{dict.login?.password_label || 'Senha'}</label>
                    <a className="text-xs text-tertiary hover:underline transition-all" href="#">{dict.login?.forgot_password || 'Esqueci minha senha'}</a>
                  </div>
                  <input className="w-full bg-surface_container_lowest border-none ring-1 ring-outline_variant/15 focus:ring-primary rounded-xl px-4 py-3 text-on_surface placeholder:text-on_surface_variant/50 transition-all outline-none" id="password" placeholder={dict.login?.password_placeholder || '••••••••'} type="password"/>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-primary to-primary_container text-on_primary font-display font-bold rounded-xl shadow-ambient hover:brightness-110 active:scale-[0.98] transition-all" type="button">
                {dict.login?.login_button || 'Entrar'}
              </button>
              
              <div className="text-center">
                <p className="text-sm text-on_surface_variant">
                  {dict.login?.no_account || 'Não tem uma conta?'} {' '}
                  <a className="text-primary font-semibold hover:underline" href={`/${lang}/join`}>{dict.login?.register || 'Cadastre-se'}</a>
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Right Section: Kinetic Intelligence / Innovation Visual */}
        <section className="hidden md:flex md:w-1/2 relative bg-gradient-to-br from-background to-surface_container_low overflow-hidden items-center justify-center p-12">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(116, 213, 220, 0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          {/* Kinetic Visual Elements */}
          <div className="relative z-10 space-y-12 max-w-lg">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 bg-tertiary/10 text-tertiary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">{dict.login?.kinetic_pill || 'Kinetic Intelligence'}</span>
              <h2 className="font-display text-5xl lg:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-on_background to-secondary">
                {dict.login?.kinetic_title || 'Transformando Ideias em Momentum.'}
              </h2>
              <p className="text-lg text-secondary/80 font-light leading-relaxed">
                {dict.login?.kinetic_desc || 'Redefinindo o ecossistema.'}
              </p>
            </div>

            {/* Visual Accent: Abstract Connectivity Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-tertiary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-surface_container_high/80 backdrop-blur-xl p-8 rounded-2xl border border-outline_variant/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-on_surface">{dict.login?.innovation_pulse || 'Innovation Pulse'}</p>
                    <p className="text-xs text-on_surface_variant">{dict.login?.realtime_metrics || 'Real-time ecosystem metrics'}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-2 w-full bg-surface_container_highest rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-primary to-tertiary"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-on_surface_variant uppercase tracking-widest">
                    <span>{dict.login?.active_projects || 'Active Projects'}</span>
                    <span>{dict.login?.synergy || '78% Synergy'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Decorative Image Bleed */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-20 grayscale pointer-events-none">
            <img alt="Abstract Tech Patterns" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz-cI_3zYnvih06lYho60Sk3TbQTIhFK9ib1uMdytkOc-BLoJejAMFtAqXLQ1zPmcDqub5mdwtgr7ndcDfk6M6IYFcXr_jhmr-XPGZKR9oIaD2D74YABpRYGsVCkQbn__vMsPE9F-gua6qUDOZdQlqHwdoRLON3AXejVUw4qfxd9Elpl_O1KEiszOgfkzDZASV50noIGH4VcPhfUceKnGvjZhwkVgrkx5w7FIRZ9xenBbHgc70A2PClcH9w3uBF5-aCaA9XWUbwV0"/>
          </div>
        </section>
      </main>
      
      {/* Footer from JSON Blueprint */}
      <footer className="bg-background w-full pt-12 pb-32 md:pb-12 border-t border-outline_variant/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-lg font-semibold text-tertiary">Hub Community</span>
            <p className="font-sans text-sm tracking-wide text-secondary/60 text-center md:text-left max-w-xs">
              © 2024 Reactivando. Powered by Hub Community.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-8">
            <Link className="font-sans text-sm tracking-wide text-secondary/60 hover:text-tertiary transition-all opacity-80 hover:opacity-100" href={`/${lang}/terms`}>Terms of Service</Link>
            <Link className="font-sans text-sm tracking-wide text-secondary/60 hover:text-tertiary transition-all opacity-80 hover:opacity-100" href={`/${lang}/privacy`}>Privacy Policy</Link>
            <Link className="font-sans text-sm tracking-wide text-secondary/60 hover:text-tertiary transition-all opacity-80 hover:opacity-100" href={`/${lang}/charter`}>Innovation Manifesto</Link>
          </nav>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-secondary/40 cursor-pointer hover:text-primary transition-colors">language</span>
            <span className="material-symbols-outlined text-secondary/40 cursor-pointer hover:text-primary transition-colors">terminal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
