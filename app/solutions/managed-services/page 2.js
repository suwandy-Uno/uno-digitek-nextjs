import Link from 'next/link';

export const metadata = {
  title: 'Managed Service Provider (MSP) — UNO Digital Teknologi',
  description:
    'UNO Digital Teknologi is your certified Managed Service Provider for enterprise cloud — offering 24/7 monitoring, cost optimisation, security compliance, and managed migration.',
};

const MSP_SERVICES = [
  {
    icon: '📡',
    title: 'Cloud Monitoring & Operations',
    desc: 'Round-the-clock visibility and management of your cloud environment so issues are resolved before they impact your business.',
    features: [
      '24/7 infrastructure monitoring & alerting',
      'Incident detection, triage & resolution',
      'Performance optimisation & capacity planning',
      'SLA-backed uptime commitments',
      'Monthly operational health reports',
    ],
  },
  {
    icon: '💰',
    title: 'Cloud Cost Optimisation',
    desc: 'We take ownership of your cloud spend — eliminating waste, right-sizing resources, and ensuring every dollar delivers value.',
    features: [
      'FinOps framework implementation',
      'Reserved instance & savings plan management',
      'Idle resource detection & clean-up',
      'Budget alerts & spend forecasting',
      'Chargeback & cost allocation reporting',
    ],
  },
  {
    icon: '🛡',
    title: 'Security & Compliance Management',
    desc: 'Ongoing security posture management to keep your cloud environment hardened, compliant, and audit-ready at all times.',
    features: [
      'Continuous security posture assessment',
      'Vulnerability scanning & patch management',
      'Identity & access governance (IAM)',
      'Compliance monitoring (ISO 27001, PDPA, OJK)',
      'Security incident response & forensics',
    ],
  },
  {
    icon: '🚀',
    title: 'Managed Migration & Onboarding',
    desc: 'We handle the full migration lifecycle — from assessment to go-live — with full operational responsibility throughout.',
    features: [
      'Cloud readiness assessment & migration plan',
      'Workload migration & cutover management',
      'Post-migration stabilisation & tuning',
      'Team onboarding & knowledge transfer',
      'Hypercare support for 30/60/90 days post-launch',
    ],
  },
];

const TRUST_STATS = [
  { stat: '20+', label: 'Years', sub: 'Enterprise Experience' },
  { stat: '24/7', label: 'Coverage', sub: 'Always-On Operations' },
  { stat: '100%', label: 'End-to-End', sub: 'Operational Responsibility' },
];

export default function ManagedServicesPage() {
  return (
    <main>

      {/* ── Hero: Badge + Trust Stats ─────────────────────────────────────── */}
      <section className="bg-navy pt-40 pb-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* MSP Badge */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl scale-110" />
              {/* Ring border */}
              <div
                className="relative w-64 h-64 rounded-full flex flex-col items-center justify-center text-center"
                style={{
                  background: 'linear-gradient(135deg, #0a1a35 0%, #040F20 100%)',
                  boxShadow: '0 0 0 4px #C9A84C, 0 0 0 8px rgba(201,168,76,0.25), 0 0 40px rgba(201,168,76,0.30)',
                }}
              >
                {/* Inner accent ring */}
                <div className="absolute inset-4 rounded-full border border-gold/30" />

                <div className="relative px-6">
                  <div className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase font-body mb-2">
                    CERTIFIED
                  </div>
                  <div className="text-white font-heading font-bold text-xl leading-tight mb-1">
                    Managed Service<br />Provider
                  </div>
                  <div className="w-10 h-px bg-gold/60 mx-auto my-2" />
                  <div className="text-gold/80 text-[10px] font-bold tracking-widest uppercase font-body">
                    ENTERPRISE CLOUD
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Headline + Trust Stats */}
          <div className="flex-1">
            <span className="section-tag">MANAGED SERVICES</span>
            <h1 className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-4">
              We Don&apos;t Just Deliver.<br />
              <span className="text-gold">We Own Operations.</span>
            </h1>
            <p className="text-white/60 text-lg font-body leading-relaxed mb-10 max-w-lg">
              As your Managed Service Provider, UNO Digitek takes full operational responsibility — from infrastructure uptime to security compliance — so your team can focus on business growth.
            </p>

            {/* Trust stats row */}
            <div className="flex flex-wrap gap-8">
              {TRUST_STATS.map((s) => (
                <div key={s.stat} className="border-l-2 border-gold pl-5">
                  <div className="font-heading font-bold text-white text-3xl leading-none">
                    {s.stat}
                  </div>
                  <div className="text-gold text-xs font-bold tracking-widest uppercase font-body mt-0.5">
                    {s.label}
                  </div>
                  <div className="text-white/40 text-xs font-body mt-0.5">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Commitment Strip ──────────────────────────────────────────────── */}
      <div className="bg-gold py-5 px-8">
        <p className="max-w-7xl mx-auto text-center font-heading font-bold text-navy text-base md:text-lg tracking-wide">
          MSP means operational ownership — not just delivery. We stay accountable after go-live, every day.
        </p>
      </div>

      {/* ── Service Cards ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">WHAT WE MANAGE</span>
            <h2 className="font-heading font-bold text-navy text-4xl mb-4">
              Four Pillars of Managed Service
            </h2>
            <p className="text-gray-500 font-body text-base max-w-xl mx-auto leading-relaxed">
              Comprehensive coverage across the full cloud operations lifecycle — so nothing falls through the cracks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {MSP_SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-navy/8 p-8 flex flex-col hover:border-gold/50 transition-colors"
              >
                {/* Card header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-gold text-3xl leading-none flex-shrink-0">{s.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-xl leading-snug mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-body leading-relaxed">{s.desc}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gold/20 mb-5" />

                {/* Feature list */}
                <ul className="space-y-2 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-body text-gray-600">
                      <span className="text-gold font-bold mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MSP Strip ─────────────────────────────────────────────────── */}
      <section className="bg-navy/95 py-16 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: '🔄', title: 'Proactive, Not Reactive', desc: 'We monitor and prevent issues before they impact your operations.' },
            { icon: '📋', title: 'SLA-Backed Commitments', desc: 'Defined response times, uptime guarantees, and measurable outcomes.' },
            { icon: '🤝', title: 'Single Point of Accountability', desc: 'One partner responsible for the full technology stack — no finger-pointing.' },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="section-tag">GET STARTED</span>
          <h2 className="font-heading font-bold text-navy text-4xl mb-4">
            Talk to Our MSP Team
          </h2>
          <p className="text-gray-500 font-body mb-8 leading-relaxed">
            Ready to move from reactive IT to proactive managed operations? Let&apos;s scope your MSP engagement.
          </p>
          <Link href="/contact" className="btn-gold-outline text-[11px] py-3 px-10">
            CONTACT OUR MSP TEAM
          </Link>
        </div>
      </section>

    </main>
  );
}
