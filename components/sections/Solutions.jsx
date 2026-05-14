'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function Solutions() {
  const { lang } = useLang();
  const x = t[lang].solutions;

  return (
    <section className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-[280px_1fr] gap-16">

        {/* Left: heading */}
        <div className="md:pt-2">
          <span className="section-tag">{x.tag}</span>
          <h2 className="font-heading font-bold text-navy text-4xl leading-tight mb-5">{x.h2}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 font-body">{x.sub}</p>
          <Link href="/solutions" className="btn-gold-outline text-[11px] py-2.5 px-7">
            {x.cta}
          </Link>
        </div>

        {/* Right: cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {x.cards.map((c) => (
            <div key={c.title} className="card-gold group">
              <h3 className="font-heading font-bold text-navy text-base leading-snug mb-3">
                {c.title}
              </h3>
              <p className="text-navy/65 text-sm leading-relaxed flex-1 mb-4 font-body">{c.desc}</p>
              <Link
                href="/solutions"
                className="text-navy/60 text-xs font-bold tracking-widest uppercase font-body border-b border-navy/25 pb-0.5 hover:text-navy hover:border-navy transition-colors w-fit"
              >
                {x.learnMore}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
