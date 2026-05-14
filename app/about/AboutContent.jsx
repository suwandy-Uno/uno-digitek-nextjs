'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function AboutContent() {
  const { lang } = useLang();
  const x = t[lang].aboutPage;

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

      {/* Story */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-tag">{x.story.tag}</span>
            <h2 className="font-heading font-bold text-navy text-4xl mb-6 leading-tight">
              {x.story.h2}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 font-body">{x.story.p1}</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 font-body">{x.story.p2}</p>
            <p className="text-gray-500 text-sm leading-relaxed font-body">{x.story.p3}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:pt-8">
            {x.story.cards.map((c) => (
              <div key={c.stat} className="border-l-4 border-gold bg-white px-6 py-8 shadow-sm">
                <div className="font-heading font-bold text-navy text-lg leading-snug mb-2">{c.stat}</div>
                <div className="text-gold text-xs font-bold tracking-wide uppercase font-body">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">{x.values.tag}</span>
            <h2 className="font-heading font-bold text-white text-4xl">{x.values.h2}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {x.values.items.map((v) => (
              <div key={v.title} className="border border-gold/20 p-8">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-heading font-bold text-gold text-lg mb-3">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed font-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-8 text-center border-t border-gold/20">
        <h2 className="font-heading font-bold text-white text-3xl mb-4">{x.cta.h2}</h2>
        <p className="text-white/55 font-body mb-8">{x.cta.sub}</p>
        <Link href="/contact" className="btn-gold-outline">{x.cta.btn}</Link>
      </section>
    </main>
  );
}
