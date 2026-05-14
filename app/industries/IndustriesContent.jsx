'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function IndustriesContent() {
  const { lang } = useLang();
  const x = t[lang].industriesPage;

  return (
    <main>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">{x.hero.tag}</span>
          <h1 className="font-heading font-bold text-white text-5xl mb-4 max-w-2xl leading-tight">
            {x.hero.h1}
          </h1>
          <p className="text-white/60 text-lg max-w-xl font-body leading-relaxed">
            {x.hero.sub}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {x.industries.map((ind) => (
            <div key={ind.title} className="bg-white border border-navy/8 p-7 hover:border-gold/50 transition-colors">
              <div className="text-3xl mb-4">{ind.icon}</div>
              <h3 className="font-heading font-bold text-navy text-base mb-3">{ind.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed font-body">{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-8 text-center border-t border-gold/20">
        <h2 className="font-heading font-bold text-white text-3xl mb-4">{x.cta.h2}</h2>
        <p className="text-white/55 font-body mb-8 max-w-lg mx-auto">{x.cta.sub}</p>
        <Link href="/contact" className="btn-gold-outline">{x.cta.btn}</Link>
      </section>
    </main>
  );
}
