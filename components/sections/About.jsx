'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function About() {
  const { lang } = useLang();
  const x = t[lang].about;

  return (
    <section className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-start">

        {/* Text */}
        <div>
          <span className="section-tag">{x.tag}</span>
          <h2 className="font-heading font-bold text-navy text-4xl leading-tight mb-6">
            {x.h2a}<br />{x.h2b}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 font-body">{x.p1}</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 font-body">{x.p2}</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 font-body">{x.p3}</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 font-body">{x.p4}</p>
          <Link href="/contact" className="btn-gold-outline text-[11px] py-2.5 px-7">
            {x.cta}
          </Link>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-2 gap-4 md:pt-8">
          {x.cards.map((c) => (
            <div key={c.stat} className="border-l-4 border-gold bg-white px-6 py-8 shadow-sm flex flex-col justify-center min-h-[120px]">
              <div className="font-heading font-bold text-navy text-lg leading-snug mb-2">
                {c.stat}
              </div>
              <div className="text-gold text-xs font-bold tracking-wide uppercase font-body">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
