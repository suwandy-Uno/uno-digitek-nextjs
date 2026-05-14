'use client';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function Contact() {
  const { lang } = useLang();
  const x = t[lang].contact;

  return (
    <section className="bg-cream py-20 border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">

        {/* Contact info */}
        <div>
          <h2 className="font-heading font-bold text-navy text-4xl mb-8">{x.h2}</h2>
          <div className="flex flex-col gap-6">
            {[
              {
                icon: '📍',
                lines: ['Citylofts Sudirman, RT.10/RW.11', 'Karet Tengsin, Tanah Abang', 'Central Jakarta City, Jakarta 10250'],
              },
              { icon: '📞', lines: ['+62 818 910 003'], href: 'tel:+62818910003' },
              { icon: '✉',  lines: ['Suwandy@uno-digitek.com'], href: 'mailto:Suwandy@uno-digitek.com' },
            ].map((item) => (
              <div key={item.icon} className="flex items-start gap-4">
                <div className="w-9 h-9 border-2 border-gold rounded-full flex items-center justify-center flex-shrink-0 text-gold text-sm">
                  {item.icon}
                </div>
                <div className="font-body">
                  {item.href ? (
                    <a href={item.href} className="text-navy text-sm font-semibold hover:text-gold transition-colors">
                      {item.lines[0]}
                    </a>
                  ) : (
                    item.lines.map((l) => (
                      <p key={l} className="text-navy/80 text-sm leading-relaxed">{l}</p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hours + social */}
        <div>
          <h3 className="font-heading font-bold text-navy text-2xl mb-5">{x.hoursH}</h3>
          <div className="flex flex-col gap-4 mb-10 font-body">
            {x.hours.map((h) => (
              <div key={h.day}>
                <p className={`text-xs font-bold tracking-wide ${h.time ? 'text-gold' : 'text-gray-400'}`}>
                  {h.day}
                </p>
                {h.time && <p className="text-navy text-sm">{h.time}</p>}
              </div>
            ))}
          </div>

          <h3 className="font-heading font-bold text-navy text-xl mb-4">{x.socialH}</h3>
          <div className="flex gap-3 mb-4">
            {[
              { label: 'in', href: '#' },
              { label: 'X',  href: '#' },
              { label: 'IG', href: '#' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-gold text-xs font-bold font-body hover:bg-gold hover:text-navy transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-xs leading-relaxed font-body">{x.access}</p>
        </div>
      </div>
    </section>
  );
}
