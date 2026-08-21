import Link from 'next/link';

export const metadata = {
  title: 'Tencent Cloud Solutions — UNO Digital Teknologi',
  description:
    'UNO Digitek is an Official Tencent Cloud Partner in Indonesia. We deliver cloud migration, architecture, managed services, and AI transformation on the Tencent Cloud platform.',
  keywords: 'Tencent Cloud Indonesia, Tencent Cloud partner Indonesia, cloud migration Indonesia, enterprise cloud Jakarta',
};

const WHY_TENCENT = [
  {
    icon: '🌏',
    title: 'Asia-Pacific Infrastructure',
    desc: '26 global regions with strong APAC presence — low-latency connectivity for Indonesia and the broader Southeast Asia market.',
  },
  {
    icon: '🤖',
    title: 'Enterprise AI Capabilities',
    desc: 'Hunyuan Foundation Model, Tencent AI Lab, and production-grade AI services for computer vision, NLP, and generative AI.',
  },
  {
    icon: '🛡',
    title: 'Security & Compliance',
    desc: '400+ global certifications. Recognized leader in enterprise security and fraud management by Forrester.',
  },
  {
    icon: '⚡',
    title: 'Proven at Billion-User Scale',
    desc: 'The infrastructure powering WeChat Pay, Tencent Games, and global media platforms — now available for Indonesian enterprises.',
  },
];

const SERVICES = [
  {
    title: 'Cloud Migration',
    challenge: 'Legacy infrastructure limits business scalability and innovation speed.',
    solution: 'End-to-end assessment, migration planning, workload migration, testing, and post-migration optimisation.',
    platform: 'Tencent Cloud CVM, TKE, VPC',
  },
  {
    title: 'Cloud Infrastructure',
    challenge: 'Complex enterprise environments require reliable, secure, and scalable compute and networking.',
    solution: 'Multi-region architecture design, hybrid cloud connectivity, and enterprise networking on Tencent Cloud.',
    platform: 'Tencent Cloud CVM, COS, VPC, CLB',
  },
  {
    title: 'AI & Data Platform',
    challenge: 'Enterprises need practical AI outcomes — not experimental models.',
    solution: 'AI model deployment, data platform setup, ML pipelines, and generative AI integration into business workflows.',
    platform: 'Tencent Cloud AI, TI Platform, EMR',
  },
  {
    title: 'Cloud-Native Development',
    challenge: 'Monolithic applications cannot scale or evolve fast enough.',
    solution: 'Containerisation, Kubernetes orchestration, microservices architecture, and CI/CD pipeline implementation.',
    platform: 'Tencent Cloud TKE, SCF, CODING DevOps',
  },
  {
    title: 'Disaster Recovery',
    challenge: 'Business continuity risks from single-region dependencies or inadequate backup strategies.',
    solution: 'Multi-region DR architecture, automated failover, RTO/RPO planning, and regular DR testing protocols.',
    platform: 'Tencent Cloud CBS, COS, Multi-Region',
  },
  {
    title: 'Managed Cloud Operations',
    challenge: 'Internal teams lack capacity to manage cloud environments 24/7 post-migration.',
    solution: '24/7 monitoring, incident management, FinOps governance, security posture management, and SLA-backed operations.',
    platform: 'Tencent Cloud + Uno MSP Layer',
  },
];

const FAQS = [
  {
    q: 'What is Tencent Cloud?',
    a: 'Tencent Cloud is the enterprise cloud division of Tencent — one of the world\'s largest technology companies. It provides IaaS, PaaS, and AI services across 26 global regions, serving enterprises in gaming, finance, media, government, and digital industries worldwide.',
  },
  {
    q: 'Why is Tencent Cloud the right choice for Indonesian enterprises?',
    a: 'Tencent Cloud offers strong Asia-Pacific infrastructure, competitive pricing, and leading AI capabilities. It is particularly well-suited for enterprises requiring regional connectivity, media & video workloads, AI integration, and enterprise-grade security. With 26 global regions and APAC-first design, it delivers low latency and strong compliance coverage for Indonesian businesses.',
  },
  {
    q: 'What does Uno Digitek do as a Tencent Cloud Partner?',
    a: 'Uno Digitek provides the consulting, architecture, migration, implementation, and managed services layer. We are the local Indonesian partner that bridges your enterprise requirements with the Tencent Cloud platform — from initial assessment through to ongoing managed operations.',
  },
  {
    q: 'Is Tencent Cloud secure and compliant for Indonesian enterprises?',
    a: 'Yes. Tencent Cloud holds 400+ global compliance certifications including ISO 27001, SOC 2 Type II, and various regional frameworks. It is recognized by Forrester as a Leader in Enterprise Security. Uno Digitek additionally implements Indonesian regulatory compliance layers as part of every engagement.',
  },
  {
    q: 'Can Tencent Cloud support our disaster recovery requirements?',
    a: 'Absolutely. With 26 global regions and 70 availability zones, Tencent Cloud is well-suited for multi-region disaster recovery architectures. Uno Digitek designs and implements DR strategies tailored to your RTO and RPO requirements.',
  },
  {
    q: 'How do we get started?',
    a: 'Contact our team for a no-obligation consultation. We begin with a cloud readiness assessment to understand your current environment, define objectives, and propose a structured migration and managed services plan.',
  },
];

export default function TencentCloudPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="px-3 py-1 text-white text-[10px] font-bold tracking-widest uppercase font-body"
              style={{ background: 'linear-gradient(90deg, #1677FF, #00C6FF)' }}
            >
              OFFICIAL PARTNER
            </div>
          </div>
          <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">
            TENCENT CLOUD SOLUTIONS
          </span>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4 max-w-3xl leading-tight">
            Enterprise Cloud Delivered<br />
            <span className="text-gold">by Uno Digitek</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl font-body leading-relaxed mb-8">
            As an Official Tencent Cloud Partner, Uno Digitek provides the consulting, architecture, migration, implementation, and managed services that Indonesian enterprises need to operate cloud infrastructure with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold-solid">TALK TO OUR EXPERTS</Link>
            <Link href="#services" className="btn-gold-outline">EXPLORE SERVICES</Link>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-10 mt-12 pt-10 border-t border-white/10">
            {[
              { stat: '26',    label: 'Global Cloud Regions' },
              { stat: '70+',   label: 'Availability Zones' },
              { stat: '1M+',   label: 'Servers Deployed' },
              { stat: '400+',  label: 'Compliance Certifications' },
              { stat: '3,200+', label: 'Global Acceleration Nodes' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading font-extrabold text-gold text-2xl leading-none">{s.stat}</div>
                <div className="text-white/40 text-xs font-bold tracking-wide uppercase font-body mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tencent Cloud */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">WHY TENCENT CLOUD</span>
            <h2 className="font-heading font-bold text-navy text-4xl mb-3">Enterprise-Grade Platform. Asia-Pacific Strength.</h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto text-base leading-relaxed">
              The infrastructure trusted by billions of users — optimised for Indonesian enterprise requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_TENCENT.map((w) => (
              <div key={w.title} className="bg-white border border-navy/8 p-6 hover:border-gold/40 transition-colors">
                <div className="text-2xl mb-3">{w.icon}</div>
                <h3 className="font-heading font-bold text-navy text-base mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-body">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Uno Digitek */}
      <section className="bg-navy py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
            <div>
              <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">WHY UNO DIGITEK</span>
              <h2 className="font-heading font-bold text-white text-3xl leading-tight mb-4">
                The Bridge Between<br />Platform and Outcome
              </h2>
              <p className="text-white/55 text-sm font-body leading-relaxed">
                Tencent Cloud provides the platform. Uno Digitek provides the expertise, local knowledge, and operational accountability that turns cloud infrastructure into business results.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: '20+ Years Experience',         desc: 'Deep enterprise IT experience across banking, telco, and enterprise transformation.' },
                { title: 'Local Implementation Team',    desc: 'Jakarta-based architects and engineers who understand Indonesian business and regulatory requirements.' },
                { title: 'Full Lifecycle Ownership',     desc: 'From first assessment to ongoing managed operations — we own the outcome, not just the delivery.' },
                { title: 'SLA-Backed Commitments',       desc: 'Contractual uptime, response time, and service commitments — not best-effort promises.' },
              ].map((p) => (
                <div key={p.title} className="border border-white/10 p-5 hover:border-gold/30 transition-colors">
                  <h3 className="font-heading font-bold text-white text-sm mb-2">{p.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed font-body">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">ENTERPRISE SERVICES</span>
            <h2 className="font-heading font-bold text-navy text-4xl mb-3">What We Deliver on Tencent Cloud</h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto text-base leading-relaxed">
              Every engagement is outcome-driven. Uno Digitek owns the consulting, implementation, and operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white border border-navy/8 p-7 flex flex-col hover:border-gold/40 transition-colors">
                <h3 className="font-heading font-bold text-navy text-lg mb-4">{s.title}</h3>

                <div className="mb-3">
                  <p className="text-[9px] font-bold tracking-widest uppercase text-gold font-body mb-1">Business Challenge</p>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">{s.challenge}</p>
                </div>

                <div className="mb-3 flex-1">
                  <p className="text-[9px] font-bold tracking-widest uppercase text-navy font-body mb-1">Uno Solution</p>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">{s.solution}</p>
                </div>

                <div className="border-t border-navy/8 pt-3 mt-3">
                  <p className="text-[9px] font-bold tracking-widest uppercase text-white/40 font-body mb-1" style={{ color: '#1677FF', opacity: 0.7 }}>
                    Powered by
                  </p>
                  <p className="text-xs font-bold font-body" style={{ color: '#1677FF' }}>{s.platform}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="bg-navy py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">MIGRATION PROCESS</span>
            <h2 className="font-heading font-bold text-white text-3xl">How We Migrate Your Enterprise to Tencent Cloud</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-0">
            {['Assess', 'Design', 'Migrate', 'Optimise', 'Operate'].map((step, i) => (
              <div key={step} className="flex-1 border border-white/10 p-6 relative hover:border-gold/30 transition-colors">
                <div className="text-gold/40 font-heading font-extrabold text-4xl leading-none mb-3">0{i + 1}</div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{step}</h3>
                <p className="text-white/40 text-xs leading-relaxed font-body">
                  {[
                    'Cloud readiness review, cost analysis, risk assessment, and migration roadmap.',
                    'Target architecture, security framework, network design, and DR planning.',
                    'Phased workload migration, data transfer, integration testing, and go-live.',
                    'Right-sizing, FinOps, performance tuning, and cost reduction governance.',
                    '24/7 monitoring, incident management, security, and continuous improvement.',
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">FAQ</span>
            <h2 className="font-heading font-bold text-navy text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col divide-y divide-navy/10">
            {FAQS.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="font-heading font-bold text-navy text-lg mb-3">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-body">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">GET STARTED</span>
          <h2 className="font-heading font-bold text-white text-4xl mb-4">Ready to Modernise on Tencent Cloud?</h2>
          <p className="text-white/55 font-body mb-8 leading-relaxed">
            Talk to our experts. We begin with a complimentary cloud readiness assessment to understand your requirements and propose a structured migration path.
          </p>
          <Link href="/contact" className="btn-gold-solid">CONTACT OUR TEAM</Link>
        </div>
      </section>

    </main>
  );
}
