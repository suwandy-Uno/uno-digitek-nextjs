'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';
import t from '@/lib/translations';

export default function Footer() {
  const { lang } = useLang();
  const x = t[lang].footer;

  return (
    <footer className="bg-navy border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png?v=3"
              alt="UNO Digital Teknologi"
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-white/40 text-base leading-relaxed font-body mb-6">{x.tagline}</p>
          <p className="text-white/30 text-sm font-body">{x.moto}</p>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-gold text-base font-bold tracking-widest uppercase font-body mb-5">
            {x.solutions}
          </h4>
          <ul className="flex flex-col gap-3">
            {x.solutionLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/50 hover:text-gold text-base font-body transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-gold text-base font-bold tracking-widest uppercase font-body mb-5">
            {x.company}
          </h4>
          <ul className="flex flex-col gap-3">
            {x.companyLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/50 hover:text-gold text-base font-body transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold text-base font-bold tracking-widest uppercase font-body mb-5">
            {x.contact}
          </h4>
          <ul className="flex flex-col gap-3 text-white/50 text-base font-body">
            <li className="leading-relaxed">
              Sahid Sudirman Residence<br />
              Office Building 2nd Floor,<br />
              Jl. Jend. Sudirman Kav. 86, Karet Tengsin,<br />
              Tanah Abang, Jakarta Pusat, 10220
            </li>
            <li>
              <a href="tel:+628158253333" className="hover:text-gold transition-colors">
                +62 815 825 3333
              </a>
            </li>
            <li>
              <a href="mailto:sales@uno-digitek.com" className="hover:text-gold transition-colors">
                sales@uno-digitek.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-sm font-body">
            © {new Date().getFullYear()} PT. Uno Digital Teknologi. {x.copyright}
          </p>
          <p className="text-white/20 text-sm font-body">
            uno-digitek.com
          </p>
        </div>
      </div>
    </footer>
  );
}
