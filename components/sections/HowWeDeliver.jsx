'use client';
import Link from 'next/link';

const STEPS = [
  {
    num: '01',
    title: 'Assessment',
    sub: 'Discovery & Planning',
    desc: 'We assess your current infrastructure, applications, and business requirements. We define cloud readiness, identify risks, and build a business case.',
    deliverable: 'Cloud Readiness Report',
  },
  {
    num: '02',
    title: 'Architecture',
    sub: 'Design & Blueprint',
    desc: 'Our architects design your target cloud environment — infrastructure, security, networking, compliance frameworks, and integration patterns.',
    deliverable: 'Architecture Blueprint',
  },
  {
    num: '03',
    title: 'Migration',
    sub: 'Implementation & Cutover',
    desc: 'We execute the migration in structured waves — moving workloads, validating data integrity, and managing cutover with minimal business disruption.',
    deliverable: 'Go-Live Sign-Off',
  },
  {
    num: '04',
    title: 'Optimisation',
    sub: 'Tune & Stabilise',
    desc: 'Post-migration, we right-size resources, optimize performance, reduce cloud spend, and resolve any issues identified during the stabilisation period.',
    deliverable: 'Optimisation Report',
  },
  {
    num: '05',
    title: 'Managed Services',
    sub: 'Ongoing Operations',
    desc: 'We assume full operational responsibility — 24/7 monitoring, incident management, security governance, and continuous cloud improvement.',
    deliverable: 'Monthly SLA Report',
  },
];

export default function HowWeDeliver() {
  return (
    <section className="bg-cream py-20 px-8 border-t border-navy/8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">
            HOW WE DELIVER
          </span>
          <h2 className="font-heading font-bold text-navy text-4xl leading-tight mb-4">
            A Structured Path<br />from Strategy to Operations
          </h2>
          <p className="text-gray-500 text-base font-body leading-relaxed">
            Our delivery methodology eliminates the gaps that typically fall between strategy consultants and implementation teams. Uno owns the full journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gold/20" style={{ top: '2rem' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.num} className="relative flex flex-col">
                {/* Step number circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 border-2 border-gold bg-cream flex flex-col items-center justify-center">
                    <div className="text-gold font-heading font-extrabold text-lg leading-none">{s.num}</div>
                  </div>
                  {/* Arrow connector (not last) */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-gold/40 text-lg">›</div>
                  )}
                </div>

                <h3 className="font-heading font-bold text-navy text-lg leading-tight mb-1">{s.title}</h3>
                <p className="text-gold text-[10px] font-bold tracking-widest uppercase font-body mb-3">{s.sub}</p>
                <p className="text-gray-500 text-sm leading-relaxed font-body mb-4 flex-1">{s.desc}</p>

                {/* Deliverable badge */}
                <div className="border border-navy/15 px-3 py-2 bg-white">
                  <div className="text-[9px] font-bold tracking-widest text-gold uppercase font-body mb-0.5">Deliverable</div>
                  <div className="text-navy text-xs font-bold font-body">{s.deliverable}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Link href="/contact" className="btn-gold-solid">
            START YOUR ASSESSMENT
          </Link>
        </div>
      </div>
    </section>
  );
}
