import Link from 'next/link';

export const metadata = {
  title: 'Technology Partners — UNO Digital Teknologi',
  description:
    'UNO Digital Teknologi strategic technology partnerships — delivering enterprise cloud, AI, and digital transformation through our curated technology ecosystem.',
};

const PARTNERS = [
  {
    name: 'Tencent Cloud',
    status: 'Official Partner',
    tier: 'Flagship Technology Partner',
    category: 'Enterprise Cloud Platform',
    color: '#1677FF',
    description:
      'Tencent Cloud is Uno Digitek\'s flagship enterprise cloud platform for the Indonesian market. As an Official Tencent Cloud Partner, Uno delivers migration, architecture, managed services, and AI transformation on the Tencent Cloud infrastructure.',
    capabilities: [
      'Cloud Migration & Infrastructure',
      'AI & Machine Learning Platform',
      'Cloud-Native & Kubernetes',
      'Disaster Recovery & Business Continuity',
      'Enterprise Security & Compliance',
      'Media & Video Cloud Services',
      'Global Network & CDN',
      'Managed Cloud Operations',
    ],
    highlights: [
      { stat: '26', label: 'Global Regions' },
      { stat: '400+', label: 'Certifications' },
      { stat: 'APAC #1', label: 'Media Cloud' },
    ],
    href: '/tencent-cloud',
    cta: 'Explore Tencent Cloud Solutions',
    featured: true,
  },
];

const FUTURE_PARTNERS = [
  { name: 'Amazon Web Services (AWS)', category: 'Cloud Platform',         color: '#FF9900' },
  { name: 'Microsoft Azure',           category: 'Cloud Platform',         color: '#0078D4' },
  { name: 'Alibaba Cloud',             category: 'Cloud Platform',         color: '#FF6A00' },
  { name: 'Cloudflare',               category: 'Network & Security',     color: '#F48120' },
  { name: 'MongoDB',                   category: 'Database',               color: '#00ED64' },
  { name: 'Elastic',                   category: 'Search & Observability', color: '#00BFB3' },
];

export default function PartnersPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-14 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">
            TECHNOLOGY ECOSYSTEM
          </span>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4 max-w-2xl leading-tight">
            Strategic Technology<br />
            <span className="text-gold">Partnerships</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl font-body leading-relaxed">
            Uno Digitek builds strategic relationships with world-class technology vendors — so our clients benefit from best-in-class platforms delivered by experienced local professionals.
          </p>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <div className="bg-gold py-5 px-8">
        <p className="max-w-7xl mx-auto text-center font-heading font-bold text-navy text-sm md:text-base tracking-wide">
          We evaluate technology partners rigorously — selecting only platforms where we can deliver measurable enterprise outcomes, not just resell licenses.
        </p>
      </div>

      {/* Featured Partner */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-8">
            CURRENT PARTNERSHIPS
          </span>

          {PARTNERS.map((p) => (
            <div key={p.name} className="bg-white border-2 border-gold/30 p-8 md:p-12 hover:border-gold/60 transition-colors mb-8">
              <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">

                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                    <span
                      className="text-white text-[9px] font-bold tracking-widest uppercase font-body px-3 py-1"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.status}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-navy text-3xl mb-1">{p.name}</h2>
                  <p className="text-gold text-xs font-bold tracking-widest uppercase font-body mb-2">{p.tier}</p>
                  <p className="text-gray-400 text-xs font-body mb-6">{p.category}</p>

                  {/* Highlights */}
                  <div className="flex gap-6 mb-8">
                    {p.highlights.map((h) => (
                      <div key={h.label}>
                        <div className="font-heading font-extrabold text-navy text-xl leading-none">{h.stat}</div>
                        <div className="text-gray-400 text-[10px] font-bold tracking-wide uppercase font-body mt-1">{h.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link href={p.href} className="btn-gold-solid text-[11px] py-2.5 px-7">
                    {p.cta}
                  </Link>
                </div>

                {/* Right */}
                <div>
                  <p className="text-gray-600 text-base leading-relaxed font-body mb-7">{p.description}</p>

                  <p className="text-[9px] font-bold tracking-widest uppercase text-gold font-body mb-4">
                    Capabilities Delivered by Uno Digitek
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {p.capabilities.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-sm font-body text-gray-600">
                        <span className="text-gold font-bold flex-shrink-0">✓</span>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem Roadmap */}
      <section className="bg-navy py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">
              ECOSYSTEM ROADMAP
            </span>
            <h2 className="font-heading font-bold text-white text-4xl leading-tight mb-4">
              Growing Our Technology Ecosystem
            </h2>
            <p className="text-white/55 font-body text-base leading-relaxed">
              Uno Digitek is actively evaluating and onboarding additional technology partners to expand our platform coverage. Current pipeline includes:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FUTURE_PARTNERS.map((fp) => (
              <div key={fp.name} className="border border-white/10 p-5 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full flex-shrink-0 opacity-50" style={{ backgroundColor: fp.color }} />
                <div>
                  <div className="text-white/45 text-sm font-bold font-body">{fp.name}</div>
                  <div className="text-white/25 text-[10px] font-body mt-0.5">{fp.category}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-white/20 text-[9px] font-bold tracking-widest uppercase font-body border border-white/10 px-2 py-1">
                    COMING SOON
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/25 text-sm font-body mt-8">
            Enterprise clients with specific platform requirements are encouraged to contact us — we evaluate and onboard partners based on client demand and strategic fit.
          </p>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">
              BECOME A PARTNER
            </span>
            <h2 className="font-heading font-bold text-navy text-4xl leading-tight mb-4">
              Technology Vendors
            </h2>
            <p className="text-gray-500 font-body text-base leading-relaxed mb-6">
              Uno Digitek is interested in strategic partnerships with technology vendors seeking to expand their presence in the Indonesian enterprise market. We evaluate partners based on:
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {[
                'Enterprise-grade platform maturity',
                'Strong APAC or Indonesia presence',
                'Partner program with training & certification',
                'Alignment with Uno Digitek client verticals',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-body text-gray-500">
                  <span className="text-gold font-bold">›</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-gold-solid">
              DISCUSS A PARTNERSHIP
            </Link>
          </div>

          <div>
            <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">
              ENTERPRISE CLIENTS
            </span>
            <h2 className="font-heading font-bold text-navy text-4xl leading-tight mb-4">
              Need a Specific Platform?
            </h2>
            <p className="text-gray-500 font-body text-base leading-relaxed mb-6">
              If your organisation has existing relationships with AWS, Azure, or other cloud providers, Uno Digitek can still provide consulting, migration, and managed services on those platforms. Our expertise is not limited to our current partner portfolio.
            </p>
            <Link href="/contact" className="btn-gold-outline">
              TALK TO OUR TEAM
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
