import { getDictionary } from '../../../i18n/get-dictionary';
import Link from 'next/link';

export default async function Cadastro({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pt");
  const t = dict.cadastro || {};

  return (
    <div className="bg-background text-on_background font-sans min-h-screen flex flex-col">
      <main className="flex-grow flex items-stretch">
        {/* Visual Section (Hidden on small screens) */}
        <div className="hidden lg:flex w-1/2 relative overflow-hidden items-center justify-center bg-surface_container_lowest">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Futuristic digital network" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnOc9GyoWDhVlM-4q6Cz43UTTaXZDDWISgJ-erx7aI333uGUgyjJ1f3WYq6BmSenhz6T4Fsc-XA2wdR5q6bsHuzAaHnHACvz5n6H3CrsG5YPdvNv0V7Ff-5mI4yeZXxQp10n0yt8W-MW1jgQIV0GeGU7yTK5D9GG-Dfv5XJ9XdX1vsDIGNl_1HdwlgGUhacB3yswVdKdOMaaLpbJAydIBdPPPbCDyZTNwvOHXln-h8_GCyU-uJMWIIpuv-5cVC0YbDxleu8gwl7fE" />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-primary/10"></div>
          </div>
          <div className="relative z-10 px-16 max-w-2xl">
            <div className="pt-16 md:pt-32"></div>
            <h1 className="text-6xl font-display font-extrabold tracking-tight mb-6 leading-[1.1]">
              {t.title_main || 'Impulsionando a'} <span className="text-primary">{t.title_spark || 'Inteligência Cinética'}</span> {t.title_end || 'no Hub.'}
            </h1>
            <p className="text-secondary text-lg leading-relaxed mb-8 max-w-lg">
              {t.desc}
            </p>
            {/* Bento Style Stats */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="bg-surface_container_high/40 p-6 rounded-xl border border-outline_variant/15 backdrop-blur-sm">
                <span className="text-tertiary font-display font-bold text-2xl block">{t.stats_1}</span>
                <span className="text-secondary/70 text-sm font-sans uppercase tracking-wider">{t.stats_1_desc}</span>
              </div>
              <div className="bg-surface_container_high/40 p-6 rounded-xl border border-outline_variant/15 backdrop-blur-sm">
                <span className="text-primary font-display font-bold text-2xl block">{t.stats_2}</span>
                <span className="text-secondary/70 text-sm font-sans uppercase tracking-wider">{t.stats_2_desc}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-surface_dim">
          <div className="w-full max-w-md space-y-8">
            <div className="pt-8 pb-32 md:pb-0">
              <h2 className="text-3xl font-display font-extrabold tracking-tight text-on_surface">{t.form_title}</h2>
              <p className="text-secondary/80">{t.form_subtitle}</p>
            </div>
            {/* Global Hub Notification Banner */}
            <div className="bg-secondary_container/30 border-l-4 border-primary p-5 rounded-xl flex gap-4 items-start shadow-ambient">
              <span className="material-symbols-outlined text-primary mt-1">info</span>
              <div className="text-sm leading-relaxed text-secondary_fixed">
                <span dangerouslySetInnerHTML={{ __html: t.hub_warning?.replace('Hub Community', '<strong>Hub Community</strong>').replace('hubcommunity.io', '<span class=\"text-primary\">hubcommunity.io</span>') || '' }} />
              </div>
            </div>
            <form className="space-y-5">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-on_surface_variant font-sans" htmlFor="full_name">{t.name_label}</label>
                <input className="w-full bg-surface_container_lowest border-none ring-1 ring-outline_variant/20 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 text-on_surface placeholder:text-outline_variant transition-all outline-none" id="full_name" name="full_name" placeholder={t.name_placeholder} required type="text" />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-on_surface_variant font-sans" htmlFor="email">{t.email_label}</label>
                <input className="w-full bg-surface_container_lowest border-none ring-1 ring-outline_variant/20 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 text-on_surface placeholder:text-outline_variant transition-all outline-none" id="email" name="email" placeholder={t.email_placeholder} required type="email" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-on_surface_variant font-sans" htmlFor="password">{t.pass_label}</label>
                  <input className="w-full bg-surface_container_lowest border-none ring-1 ring-outline_variant/20 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 text-on_surface placeholder:text-outline_variant transition-all outline-none" id="password" name="password" placeholder={t.pass_placeholder} required type="password" />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-on_surface_variant font-sans" htmlFor="confirm_password">{t.pass2_label}</label>
                  <input className="w-full bg-surface_container_lowest border-none ring-1 ring-outline_variant/20 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 text-on_surface placeholder:text-outline_variant transition-all outline-none" id="confirm_password" name="confirm_password" placeholder={t.pass_placeholder} required type="password" />
                </div>
              </div>
              <div className="flex items-start gap-3 py-2">
                <input className="mt-1 rounded-sm border-outline_variant bg-surface_container_lowest text-primary focus:ring-primary" id="terms" type="checkbox" required />
                <label className="text-xs text-on_surface_variant leading-normal" htmlFor="terms">
                  {t.terms_prefix}<Link className="text-primary hover:underline" href={`/${lang}/terms`}>{t.terms_link}</Link> e a <Link className="text-primary hover:underline" href={`/${lang}/charter`}>{t.charter_link}</Link>{t.terms_suffix}
                </label>
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary_container text-on_primary font-display font-bold py-4 rounded-xl transition-transform active:scale-95 shadow-ambient" type="button">
                {t.submit}
              </button>
            </form>
            <div className="pt-6 border-t border-outline_variant/10 flex flex-col items-center gap-4">
              <p className="text-secondary/70">
                {t.already_account}<Link className="text-primary font-bold hover:underline" href={`/${lang}/login`}>{t.login_link}</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-background border-t border-primary/15 flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full">
        <div className="mb-4 md:mb-0">
          <span className="text-lg font-display font-bold text-secondary">{t.footer_title || 'The Kinetic Intelligence'}</span>
        </div>
        <div className="text-secondary/60 font-sans text-sm tracking-wide mb-6 md:mb-0">
          {t.footer_copy}
        </div>
        <div className="flex gap-6">
          <Link className="text-secondary/60 font-sans text-sm tracking-wide hover:text-primary underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100" href={`/${lang}/privacy`}>{t.footer_privacy}</Link>
          <Link className="text-secondary/60 font-sans text-sm tracking-wide hover:text-primary underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100" href={`/${lang}/charter`}>{t.footer_charter}</Link>
          <a className="text-secondary/60 font-sans text-sm tracking-wide hover:text-primary underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100" href="https://whatsapp.reactivando.io" target="_blank" rel="noopener noreferrer">{t.footer_contact}</a>
        </div>
      </footer>
    </div>
  );
}
