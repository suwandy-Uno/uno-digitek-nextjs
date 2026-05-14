'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function ServicesContent() {
  const { lang } = useLang();
  const x = t[lang].servicesPage;

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

      {/* Service groups */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {x.groups.map((g) => (
            <div key={g.category}>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-navy/10">
                <span className="text-2xl">{g.icon}</span>
                <h2 className="font-heading font-bold text-navy text-2xl">{g.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {g.services.map((s) => (
                  <div key={s.name} className="bg-white border border-navy/8 p-6 hover:border-gold/40 transition-colors">
                    <div className="w-1.5 h-6 bg-gold mb-4" />
                    <h3 className="font-heading font-bold text-navy text-sm mb-2">{s.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed font-body">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-8 text-center">
        <h2 className="font-heading font-bold text-white text-3xl mb-4">{x.cta.h2}</h2>
        <p className="text-white/55 font-body mb-8">{x.cta.sub}</p>
        <Link href="/contact" className="btn-gold-outline">{x.cta.btn}</Link>
      </section>
    </main>
  );
}
