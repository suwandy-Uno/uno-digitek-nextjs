'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

const NAV_KEYS = ['solutions', 'services', 'industries', 'partners', 'about', 'contact'];
const NAV_HREFS = { solutions: '/solutions', services: '/services', industries: '/industries', partners: '/partners', about: '/about', contact: '/contact' };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();
  const nav = t[lang].nav;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png?v=3"
            alt="UNO Digital Teknologi"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={NAV_HREFS[key]}
              className="text-white/75 hover:text-gold text-lg font-bold tracking-wider uppercase font-body transition-colors"
            >
              {nav[key]}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1 text-xs font-bold tracking-widest font-body border border-white/20 px-3 py-1.5 hover:border-gold/50 transition-colors"
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'text-gold' : 'text-white/35'}>EN</span>
            <span className="text-white/20">|</span>
            <span className={lang === 'id' ? 'text-gold' : 'text-white/35'}>ID</span>
          </button>

          <Link href="/contact" className="btn-gold-outline text-[11px] py-2 px-5">
            {nav.cta.toUpperCase()}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 px-8 py-6 flex flex-col gap-4">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={NAV_HREFS[key]}
              className="text-white/75 hover:text-gold text-lg font-bold tracking-wider uppercase font-body transition-colors"
              onClick={() => setOpen(false)}
            >
              {nav[key]}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-1 text-xs font-bold tracking-widest font-body w-fit border border-white/20 px-3 py-1.5"
          >
            <span className={lang === 'en' ? 'text-gold' : 'text-white/35'}>EN</span>
            <span className="text-white/20">|</span>
            <span className={lang === 'id' ? 'text-gold' : 'text-white/35'}>ID</span>
          </button>
          <Link href="/contact" className="btn-gold-outline text-[11px] py-2 px-5 w-fit" onClick={() => setOpen(false)}>
            {nav.cta.toUpperCase()}
          </Link>
        </div>
      )}
    </header>
  );
}
