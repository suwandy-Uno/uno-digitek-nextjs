'use client';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function ContactContent() {
  const { lang } = useLang();
  const x = t[lang].contactPage;
  const f = x.form;

  return (
    <main>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">{x.hero.tag}</span>
          <h1 className="font-heading font-bold text-white text-5xl mb-4 leading-tight">
            {x.hero.h1}
          </h1>
          <p className="text-white/60 text-lg font-body">{x.hero.sub}</p>
        </div>
      </section>

      {/* Contact block */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <h2 className="font-heading font-bold text-navy text-3xl mb-8">{x.officeH}</h2>
            <div className="flex flex-col gap-6 mb-12">
              {[
                { icon: '📍', label: x.labels.address,  lines: ['Sahid Sudirman Residence', 'Office Building 2nd Floor,', 'Jl. Jend. Sudirman Kav. 86, Karet Tengsin,', 'Tanah Abang, Jakarta Pusat, 10220'] },
                { icon: '📞', label: x.labels.phone,    lines: ['+62 815 825 3333'], href: 'tel:+628158253333' },
                { icon: '✉',  label: x.labels.email,    lines: ['sales@uno-digitek.com'], href: 'mailto:sales@uno-digitek.com' },
                { icon: '🌐', label: x.labels.website,  lines: ['www.uno-digitek.com'], href: 'https://uno-digitek.com' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-gold rounded-full flex items-center justify-center flex-shrink-0 text-gold">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gold text-[11px] font-bold tracking-widest uppercase font-body mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-navy text-sm font-semibold font-body hover:text-gold transition-colors">
                        {item.lines[0]}
                      </a>
                    ) : (
                      item.lines.map((l) => <p key={l} className="text-navy/80 text-sm font-body">{l}</p>)
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-bold text-navy text-xl mb-4">{x.hoursH}</h3>
            <div className="flex flex-col gap-3 font-body">
              {x.hours.map((h) => (
                <div key={h.day}>
                  <p className={`text-xs font-bold tracking-wide ${h.time ? 'text-gold' : 'text-gray-400'}`}>{h.day}</p>
                  {h.time && <p className="text-navy text-sm">{h.time}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-heading font-bold text-navy text-3xl mb-8">{x.formH}</h2>
            <form className="flex flex-col gap-5" action="mailto:sales@uno-digitek.com" method="POST" encType="text/plain">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-navy text-xs font-bold tracking-widest uppercase mb-2 font-body">{f.firstName}</label>
                  <input type="text" name="first_name" required className="w-full border border-navy/20 px-4 py-3 text-sm font-body bg-white focus:border-gold focus:outline-none" placeholder={f.phFirst} />
                </div>
                <div>
                  <label className="block text-navy text-xs font-bold tracking-widest uppercase mb-2 font-body">{f.lastName}</label>
                  <input type="text" name="last_name" required className="w-full border border-navy/20 px-4 py-3 text-sm font-body bg-white focus:border-gold focus:outline-none" placeholder={f.phLast} />
                </div>
              </div>
              <div>
                <label className="block text-navy text-xs font-bold tracking-widest uppercase mb-2 font-body">{f.company}</label>
                <input type="text" name="company" className="w-full border border-navy/20 px-4 py-3 text-sm font-body bg-white focus:border-gold focus:outline-none" placeholder={f.phCompany} />
              </div>
              <div>
                <label className="block text-navy text-xs font-bold tracking-widest uppercase mb-2 font-body">{f.email}</label>
                <input type="email" name="email" required className="w-full border border-navy/20 px-4 py-3 text-sm font-body bg-white focus:border-gold focus:outline-none" placeholder={f.phEmail} />
              </div>
              <div>
                <label className="block text-navy text-xs font-bold tracking-widest uppercase mb-2 font-body">{f.phone}</label>
                <input type="tel" name="phone" className="w-full border border-navy/20 px-4 py-3 text-sm font-body bg-white focus:border-gold focus:outline-none" placeholder={f.phPhone} />
              </div>
              <div>
                <label className="block text-navy text-xs font-bold tracking-widest uppercase mb-2 font-body">{f.message}</label>
                <textarea name="message" rows={5} required className="w-full border border-navy/20 px-4 py-3 text-sm font-body bg-white focus:border-gold focus:outline-none resize-none" placeholder={f.phMsg} />
              </div>
              <button type="submit" className="btn-gold-solid w-full text-center">
                {f.submit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
