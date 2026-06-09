"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar({ lang, dict }: { lang: string, dict: any }) {
  const pathname = usePathname() || '';
  const router = useRouter();
  
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  if (pathname.includes('/presentations')) return null;

  return (
    <nav className="fixed z-50 flex justify-between items-center px-4 md:px-8 py-3 md:py-4 bottom-8 left-4 right-4 rounded-[2rem] md:bottom-auto md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-3rem)] md:max-w-6xl md:rounded-full bg-background/50 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-primary/20 transition-all duration-300">
      
      {isHome ? (
        <Link href={`/${lang}`} className="flex items-center">
          <img alt="Reactivando Logo" className="hidden md:block h-10 w-auto" src="/reactivando-horizontal.svg" />
          <img alt="Reactivando Logo Compact" className="block md:hidden h-8 w-auto px-1" src="/reactivando-fav.svg" />
        </Link>
      ) : (
        <div className="flex items-center">
          <button onClick={() => router.back()} className="flex items-center text-secondary hover:text-primary transition-colors pr-2 md:pr-4 md:border-r md:border-outline_variant/30 md:mr-4 mr-2 group">
            <span className="material-symbols-outlined text-[1.8rem] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="hidden md:block ml-2 font-sans font-bold text-sm tracking-widest uppercase">{lang === 'pt' ? 'Voltar' : 'Back'}</span>
          </button>
          <Link href={`/${lang}`} className="hidden md:flex items-center opacity-70 hover:opacity-100 transition-opacity">
            <img alt="Reactivando Logo Compact" className="h-8 w-auto grayscale" src="/reactivando-fav.svg" />
          </Link>
        </div>
      )}
      
      {/* Mobile Navigation Icons */}
      <div className="flex md:hidden items-center gap-6 text-secondary/80">
        <Link href={`/${lang}/about`} className={`hover:text-primary transition-colors flex items-center justify-center ${pathname.includes('/about') ? 'text-primary' : ''}`}>
          <span className="material-symbols-outlined text-[1.5rem]">info</span>
        </Link>
        <Link href={`/${lang}/programs`} className={`hover:text-primary transition-colors flex items-center justify-center ${pathname.includes('/programs') ? 'text-primary' : ''}`}>
          <span className="material-symbols-outlined text-[1.5rem]">view_carousel</span>
        </Link>
        <Link href={`/${lang}/community`} className={`hover:text-primary transition-colors flex items-center justify-center ${pathname.includes('/community') ? 'text-primary' : ''}`}>
          <span className="material-symbols-outlined text-[1.5rem]">hub</span>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href={`/${lang}/about`} className={`hover:text-primary transition-colors font-sans text-sm uppercase tracking-wider ${pathname.includes('/about') ? 'text-primary font-bold' : 'text-secondary'}`}>{dict.nav_about || 'About'}</Link>
        <Link href={`/${lang}/programs`} className={`hover:text-primary transition-colors font-sans text-sm uppercase tracking-wider ${pathname.includes('/programs') ? 'text-primary font-bold' : 'text-secondary'}`}>{dict.nav_programs || 'Programs'}</Link>
        <Link href={`/${lang}/community`} className={`hover:text-primary transition-colors font-sans text-sm uppercase tracking-wider ${pathname.includes('/community') ? 'text-primary font-bold' : 'text-secondary'}`}>{dict.nav_community || 'Community'}</Link>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <Link href={`/${lang}/login`} className="hidden sm:block px-4 md:px-6 py-2 text-secondary hover:text-primary transition-all duration-300 font-sans text-xs md:text-sm uppercase tracking-wider">{dict.nav_login || 'Login'}</Link>
        <Link href={`/${lang}/join`} className="px-5 md:px-6 py-2 bg-gradient-innovation text-on_primary rounded-full font-bold text-sm md:text-base transition-all duration-200 active:scale-95">{dict.nav_join || 'Join'}</Link>
      </div>
    </nav>
  );
}
