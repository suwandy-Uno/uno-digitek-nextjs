'use client';
import Link from 'next/link';

const OUTCOMES = [
  { icon: '📉', title: 'Reduce Cloud Costs',         desc: 'FinOps frameworks, right-sizing, and reserved capacity planning reduce cloud spend by 20–40% for most enterprises.' },
  { icon: '⚡', title: 'Improve Business Agility',   desc: 'Cloud-native architectures reduce time-to-market from months to weeks — enabling faster product and service delivery.' },
  { icon: '🤖', title: 'Accelerate AI Adoption',     desc: 'Practical AI integration into business workflows — from intelligent automation to predictive analytics — without science experiments.' },
  { icon: '🔒', title: 'Strengthen Cybersecurity',   desc: 'Continuous security posture management, compliance automation, and SOC capabilities to protect enterprise assets.' },
  { icon: '🔄', title: 'Improve Disaster Recovery',  desc: 'Multi-region DR architecture with tested failover processes ensuring business continuity for mission-critical systems.' },
  { icon: '🌏', title: 'Support Regional Expansion', desc: 'Scalable cloud architecture that grows with your business — from Indonesia to ASEAN and beyond — without re-architecting.' },
  { icon: '📊', title: 'Enterprise-Grade Operations', desc: 'Move from reactive IT management to proactive SLA-backed operations with full visibility, reporting, and accountability.' },
  { icon: '🏗',  title: 'Modernise Legacy Systems',   desc: 'Progressive modernisation of outdated infrastructure — moving to cloud-native without disrupting day-to-day operations.' },
];

export default function EnterpriseOutcomes() {
  return (
    <section className="bg-cream py-20 px-8 border-t border-navy/8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">
            BUSINESS OUTCOMES
          </span>
          <h2 className="font-heading font-bold text-navy text-4xl leading-tight mb-4">
            What Enterprises Achieve<br />Working with Uno Digitek
          </h2>
          <p className="text-gray-500 text-base font-body leading-relaxed max-w-xl mx-auto">
            We measure success by business results — not cloud consumption. These are the outcomes our clients care about.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OUTCOMES.map((o) => (
            <div key={o.title} className="bg-white border border-navy/8 p-6 hover:border-gold/40 transition-colors">
              <div className="text-2xl mb-3">{o.icon}</div>
              <h3 className="font-heading font-bold text-navy text-base mb-2 leading-snug">{o.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-body">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-gold-solid">
            DISCUSS YOUR REQUIREMENTS
          </Link>
        </div>
      </div>
    </section>
  );
}
