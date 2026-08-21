import Link from 'next/link';

const MSP_CARD = {
  icon: '🏅',
  title: 'Managed Service Provider (MSP)',
  desc: 'Full operational ownership of your cloud environment — 24/7 monitoring, cost optimisation, security compliance, and managed migrations. We stay accountable after go-live.',
  tags: ['24/7 Operations', 'CloudOps', 'FinOps', 'Compliance', 'SLA-Backed'],
  href: '/solutions/managed-services',
  featured: true,
};

const SOLUTIONS = [
  {
    icon: '☁',
    title: 'Cloud Infrastructure',
    desc: 'AWS, Azure & GCP migration, hybrid cloud architecture, and managed cloud operations for scalable enterprise environments.',
    tags: ['AWS', 'Azure', 'GCP', 'Hybrid Cloud', 'DevOps'],
  },
  {
    icon: '⚡',
    title: 'AI & Machine Learning',
    desc: 'Custom AI/ML models, intelligent automation, NLP solutions, and predictive analytics tailored to your business needs.',
    tags: ['ML Models', 'NLP', 'Computer Vision', 'Automation', 'LLM'],
  },
  {
    icon: '🔗',
    title: 'Enterprise Integration',
    desc: 'ERP, CRM, and legacy system integration with modern APIs, middleware solutions, and real-time data synchronisation.',
    tags: ['ERP', 'CRM', 'API', 'Middleware', 'SAP'],
  },
  {
    icon: '🛡',
    title: 'Cybersecurity',
    desc: 'End-to-end security assessments, SOC implementation, threat detection, compliance frameworks, and incident response.',
    tags: ['SOC', 'SIEM', 'Penetration Testing', 'ISO 27001', 'PDPA'],
  },
  {
    icon: '📊',
    title: 'Data Analytics & BI',
    desc: 'Business intelligence dashboards, data warehousing, real-time analytics pipelines, and executive reporting solutions.',
    tags: ['Tableau', 'Power BI', 'Data Warehouse', 'ETL', 'Real-time'],
  },
  {
    icon: '🚀',
    title: 'Digital Transformation',
    desc: 'End-to-end digital transformation strategy, change management, process digitisation, and technology roadmap planning.',
    tags: ['Strategy', 'Process Design', 'Change Management', 'Roadmap'],
  },
  {
    icon: '📡',
    title: 'IoT Solutions',
    desc: 'Industrial IoT architecture, sensor integration, edge computing, and real-time monitoring platforms for smart operations.',
    tags: ['Industrial IoT', 'Edge Computing', 'MQTT', 'Smart Factory'],
  },
];

export const metadata = {
  title: 'Solutions — UNO Digital Teknologi',
  description: 'Comprehensive enterprise technology solutions including cloud, AI, integration, cybersecurity, and digital transformation.',
};

export default function Solutions() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-12 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="section-tag">WHAT WE DO</span>
          <h1 className="font-heading font-bold text-white text-4xl mb-3 max-w-2xl leading-tight">
            Our Solutions
          </h1>
          <p className="text-white/60 text-base max-w-xl font-body leading-relaxed">
            End-to-end technology capabilities built for enterprise-scale requirements across Indonesian industries.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto">

          {/* MSP Featured Card */}
          <div className="mb-8">
            <Link href={MSP_CARD.href} className="block group">
              <div className="bg-navy border-2 border-gold/40 p-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-gold transition-colors">
                <div className="flex-shrink-0">
                  {/* Mini badge */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                    style={{ boxShadow: '0 0 0 2px #C9A84C, 0 0 20px rgba(201,168,76,0.25)' }}
                  >
                    {MSP_CARD.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading font-bold text-white text-2xl">{MSP_CARD.title}</h3>
                    <span className="bg-gold text-navy text-[10px] font-bold px-2.5 py-1 tracking-widest font-body">FEATURED</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 font-body max-w-2xl">{MSP_CARD.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {MSP_CARD.tags.map((tag) => (
                      <span key={tag} className="bg-gold/15 text-gold text-[11px] font-bold px-3 py-1 font-body">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-gold text-sm font-bold font-body group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Standard solution cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((s) => (
              <div key={s.title} className="bg-white border border-navy/8 p-8 flex flex-col hover:border-gold/50 transition-colors">
                <div className="text-gold text-3xl mb-4">{s.icon}</div>
                <h3 className="font-heading font-bold text-navy text-xl mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1 font-body">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="bg-gold/10 text-gold text-[11px] font-bold px-3 py-1 font-body">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-white text-4xl mb-4">Ready to get started?</h2>
          <p className="text-white/60 font-body mb-8">Talk to our experts and find the right solution for your business.</p>
          <Link href="/contact" className="btn-gold-outline">GET IN TOUCH</Link>
        </div>
      </section>
    </main>
  );
}
