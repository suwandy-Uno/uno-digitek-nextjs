'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function Hero() {
  const { lang } = useLang();
  const x = t[lang].hero;

  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden bg-navy"
      style={{
        backgroundImage: "url('/images/hero-city.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(4,15,32,0.97) 0%, rgba(4,15,32,0.90) 45%, rgba(4,15,32,0.55) 70%, rgba(4,15,32,0.2) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to top, rgba(4,15,32,0.75) 0%, transparent 45%)',
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-8 pb-24 pt-40 w-full">

        <span className="section-tag">{x.tag}</span>

        <h1
          className="font-heading font-bold text-white leading-[1.08] mb-6"
          style={{ fontSize: 'clamp(42px, 5.5vw, 76px)', maxWidth: '720px' }}
        >
          {x.line1}<br />
          {x.line2}<br />
          <span className="text-gold">{x.gold}</span>
        </h1>

        <p className="text-white/70 text-lg leading-relaxed mb-10 font-body" style={{ maxWidth: '480px' }}>
          {x.sub}
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <Link href="/contact" className="btn-gold-solid">
            {x.cta}
          </Link>
          <Link href="/solutions" className="btn-gold-outline">
            {x.cta2}
          </Link>
        </div>

        {/* Partner badge */}
        <div className="flex items-center gap-3">
          <div className="w-px h-8 bg-gold/40" />
          <div className="flex items-center gap-2.5">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #1677FF, #00C6FF)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
                <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" fill="white" opacity="0.3"/>
                <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" fill="white" opacity="0.6"/>
                <path d="M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" fill="white"/>
              </svg>
            </div>
            <span className="text-white/55 text-xs font-bold tracking-widest uppercase font-body">
              {x.partner}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
