'use client';
import Image from 'next/image';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function Services() {
  const { lang } = useLang();
  const x = t[lang].services;

  return (
    <section className="bg-cream py-20 border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative aspect-[4/3] rounded overflow-hidden bg-navy-light order-2 md:order-1">
          <Image
            src="/images/services-handshake.jpg"
            alt="UNO Digitek Services"
            fill
            className="object-cover"
          />
        </div>

        {/* Services list */}
        <div className="order-1 md:order-2">
          <span className="section-tag">{x.tag}</span>
          <h2 className="font-heading font-bold text-navy text-4xl leading-tight mb-3">{x.h2}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 font-body">{x.sub}</p>

          <div className="flex flex-col gap-4">
            {x.items.map((s) => (
              <div key={s.title} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-navy text-sm">
                  {s.icon}
                </div>
                <div>
                  <div className="text-navy text-sm font-bold mb-0.5 font-body">{s.title}</div>
                  <div className="text-gray-500 text-xs leading-relaxed font-body">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
