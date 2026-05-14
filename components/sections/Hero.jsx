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
            'linear-gradient(to right, rgba(4,15,32,0.95) 0%, rgba(4,15,32,0.88) 40%, rgba(4,15,32,0.55) 65%, rgba(4,15,32,0.2) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to top, rgba(4,15,32,0.7) 0%, transparent 40%)',
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-8 pb-20 pt-40 w-full">
        <span className="section-tag">{x.tag}</span>

        <h1
          className="font-heading font-bold text-white leading-[1.08] mb-6"
          style={{ fontSize: 'clamp(48px, 6vw, 80px)', maxWidth: '700px' }}
        >
          {x.line1}<br />
          {x.line2}<br />
          <span className="text-gold">{x.gold}</span>
        </h1>

        <p className="text-white/70 text-lg leading-relaxed mb-10 font-body" style={{ maxWidth: '460px' }}>
          {x.sub}
        </p>

        <Link href="/solutions" className="btn-gold-outline">
          {x.cta}
        </Link>
      </div>
    </section>
  );
}
