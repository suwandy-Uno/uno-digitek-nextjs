'use client';
import Link from 'next/link';

const VALUE_PROPS = [
  {
    icon: '🎯',
    title: 'Enterprise Consulting',
    desc: 'We assess your current state, define a technology roadmap, and align cloud strategy with your business objectives — before a single server is provisioned.',
    points: ['Cloud readiness assessment', 'Business case development', 'Technology roadmap planning', 'Stakeholder alignment'],
  },
  {
    icon: '🏗',
    title: 'Cloud Architecture',
    desc: 'Our architects design resilient, secure, and cost-optimized cloud environments tailored to your workloads — not generic blueprints.',
    points: ['Reference architecture design', 'Security & compliance framework', 'Multi-region & DR planning', 'Performance optimization'],
  },
  {
    icon: '⚙',
    title: 'Implementation & Migration',
    desc: 'We own the migration end-to-end — from initial lift-and-shift to full cloud-native re-platforming — with minimal business disruption.',
    points: ['Phased migration planning', 'Application modernization', 'Data migration & validation', 'Hypercare go-live support'],
  },
  {
    icon: '🔄',
    title: 'Managed Services',
    desc: 'Post-migration, we maintain operational responsibility — monitoring, optimizing, securing, and evolving your cloud environment 24/7.',
    points: ['24/7 infrastructure monitoring', 'FinOps & cost governance', 'Security posture management', 'SLA-backed operations'],
  },
];

export default function WhyUno() {
  return (
    <section className="bg-cream py-20 px-8 border-t border-navy/8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">
            WHY CHOOSE UNO DIGITEK
          </span>
          <h2 className="font-heading font-bold text-navy text-4xl leading-tight mb-4">
            We Deliver Outcomes.<br />Not Just Technology.
          </h2>
          <p className="text-gray-500 text-base font-body leading-relaxed">
            Enterprises don&apos;t buy cloud — they buy outcomes. Uno Digitek provides the consulting expertise, implementation capability, and ongoing operational accountability that cloud vendors cannot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((v) => (
            <div key={v.title} className="bg-white border border-navy/8 p-7 flex flex-col hover:border-gold/40 transition-colors">
              <div className="text-2xl mb-4">{v.icon}</div>
              <h3 className="font-heading font-bold text-navy text-lg mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 font-body flex-1">{v.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {v.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs font-body text-gray-500">
                    <span className="text-gold font-bold mt-0.5 flex-shrink-0">›</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <Link href="/contact" className="btn-gold-solid">
            TALK TO OUR EXPERTS
          </Link>
          <Link href="/services" className="btn-gold-outline">
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}
