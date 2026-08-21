'use client';
import Link from 'next/link';

const PLATFORM_CAPS = [
  {
    icon: '☁',
    title: 'Cloud Infrastructure',
    desc: '26 global regions, 70 availability zones, and 1M+ servers — delivering enterprise-grade compute, storage, and networking at scale.',
    tag: 'IaaS / PaaS',
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    desc: 'Powered by Hunyuan Foundation Model and Tencent AI Lab — providing computer vision, NLP, speech AI, and generative AI capabilities.',
    tag: 'AI Platform',
  },
  {
    icon: '📦',
    title: 'Cloud Native',
    desc: 'Kubernetes container services, microservices, serverless functions, and DevOps toolchains for modern application development.',
    tag: 'Containers / DevOps',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    desc: '400+ global compliance certifications. SOC 2, ISO 27001, and regional compliance frameworks for regulated industries.',
    tag: 'Security & Compliance',
  },
  {
    icon: '🌏',
    title: 'Asia-Pacific Network',
    desc: '3,200+ global acceleration nodes and 200 Tbps+ CDN bandwidth — with strong presence across Southeast Asia and the APAC region.',
    tag: 'CDN / Network',
  },
  {
    icon: '🛡',
    title: 'Disaster Recovery',
    desc: 'Multi-region redundancy, cross-AZ replication, and automated failover to ensure business continuity for mission-critical workloads.',
    tag: 'Business Continuity',
  },
];

export default function TencentPlatform() {
  return (
    <section className="bg-navy py-20 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="px-3 py-1 text-white text-[10px] font-bold tracking-widest uppercase font-body"
                style={{ background: 'linear-gradient(90deg, #1677FF, #00C6FF)' }}
              >
                FEATURED TECHNOLOGY PARTNER
              </div>
            </div>
            <h2 className="font-heading font-bold text-white text-4xl leading-tight mb-3">
              Enterprise Cloud Platform<br />
              <span className="text-gold">Powered by Tencent Cloud</span>
            </h2>
            <p className="text-white/55 text-base font-body leading-relaxed max-w-xl">
              Uno Digitek is an Official Tencent Cloud Partner. We deliver the consulting, migration, implementation, and managed services — Tencent Cloud provides the enterprise infrastructure.
            </p>
          </div>
          {/* Tencent Cloud stat strip */}
          <div className="flex gap-8 flex-shrink-0">
            {[
              { stat: '26', label: 'Global Regions' },
              { stat: '400+', label: 'Certifications' },
              { stat: 'EB+', label: 'Data Scale' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-extrabold text-gold text-2xl leading-none">{s.stat}</div>
                <div className="text-white/40 text-[10px] font-bold tracking-wide uppercase font-body mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {PLATFORM_CAPS.map((c) => (
            <div key={c.title} className="border border-white/10 p-6 flex flex-col hover:border-gold/30 transition-colors bg-white/3">
              <div className="flex items-start justify-between mb-4">
                <div className="text-gold text-2xl">{c.icon}</div>
                <span className="bg-white/8 text-white/40 text-[9px] font-bold tracking-widest uppercase font-body px-2 py-1">
                  {c.tag}
                </span>
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-2">{c.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-body flex-1">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Link href="/tencent-cloud" className="btn-gold-outline">
            EXPLORE TENCENT CLOUD SOLUTIONS
          </Link>
          <Link href="/partners" className="text-white/40 text-xs font-bold tracking-widest uppercase font-body hover:text-gold transition-colors">
            View All Partners →
          </Link>
        </div>
      </div>
    </section>
  );
}
