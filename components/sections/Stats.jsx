'use client';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function Stats() {
  const { lang } = useLang();
  const x = t[lang].stats;

  return (
    <section className="bg-navy py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-gold text-3xl mb-3">{x.h2}</h2>
          <p className="text-white/50 text-sm italic font-body">{x.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {x.cards.map((c) => (
            <div key={c.label} className="border border-gold/30 p-8 flex flex-col">
              <div className="text-gold font-heading font-extrabold text-4xl leading-none mb-2">
                {c.stat}
              </div>
              <div className="text-white font-bold text-sm mb-4 font-body uppercase tracking-wide">
                {c.label}
              </div>
              <p className="text-white/50 text-sm leading-relaxed font-body flex-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
