import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Technology Partners — UNO Digital Teknologi',
  description:
    'UNO Digital Teknologi is an Official Tencent Cloud Partner in Indonesia — delivering enterprise cloud, AI, and digital transformation through the Tencent Cloud platform.',
};

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
            Our Strategic<br />
            <span className="text-gold">Technology Partner</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl font-body leading-relaxed">
            Uno Digitek has established a strategic partnership with Tencent Cloud as our flagship enterprise cloud platform for the Indonesian market.
          </p>
        </div>
      </section>

      {/* Gold strip */}
      <div className="bg-gold py-5 px-8">
        <p className="max-w-7xl mx-auto text-center font-heading font-bold text-navy text-sm md:text-base tracking-wide">
          Our strategic technology partnerships strengthen our ability to deliver enterprise cloud, AI, and digital transformation solutions. By combining leading cloud platforms with Uno Digitek's consulting, implementation, and managed services expertise, we help organizations achieve faster innovation, stronger resilience, and measurable business outcomes.
        </p>
      </div>

      {/* Featured Partner Card */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-8">
            OFFICIAL PARTNERSHIP
          </span>

          <div className="bg-white border-2 border-gold/30 hover:border-gold/60 transition-colors">
            {/* Blue header band */}
            <div className="bg-[#1677FF] px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <Image
                src="/images/tencent-cloud-logo.svg"
                alt="Tencent Cloud"
                width={220}
                height={56}
                unoptimized
                className="flex-shrink-0"
              />
              <div className="flex gap-8">
                {[
                  { stat: '26',    label: 'Global Regions' },
                  { stat: '400+', label: 'Certifications' },
                  { stat: '1M+',  label: 'Servers' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-heading font-extrabold text-white text-2xl leading-none">{s.stat}</div>
                    <div className="text-white/60 text-[10px] font-bold tracking-widest uppercase font-body mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="p-10 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div>
                <div className="inline-block bg-[#1677FF] text-white text-[9px] font-bold tracking-widest uppercase font-body px-3 py-1 mb-4">
                  OFFICIAL PARTNER
                </div>
                <h2 className="font-heading font-bold text-navy text-3xl mb-3">Tencent Cloud</h2>
                <p className="text-gold text-xs font-bold tracking-widest uppercase font-body mb-1">Flagship Technology Partner</p>
                <p className="text-gray-400 text-xs font-body mb-8">Enterprise Cloud Platform</p>

                <Link href="/tencent-cloud" className="btn-gold-solid text-[11px] py-2.5 px-7">
                  EXPLORE TENCENT CLOUD SOLUTIONS
                </Link>
              </div>

              <div>
                <p className="text-gray-600 text-base leading-relaxed font-body mb-8">
                  Tencent Cloud is the enterprise cloud division of Tencent — one of the world&apos;s largest technology companies. As an Official Tencent Cloud Partner, Uno Digitek delivers the consulting, architecture, migration, implementation, and managed services that Indonesian enterprises need to operate cloud infrastructure with confidence.
                </p>

                <p className="text-[9px] font-bold tracking-widest uppercase text-gold font-body mb-4">
                  Capabilities Delivered by Uno Digitek
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    'Cloud Migration & Infrastructure',
                    'AI & Machine Learning Platform',
                    'Cloud-Native & Kubernetes',
                    'Disaster Recovery & Business Continuity',
                    'Enterprise Security & Compliance',
                    'Media & Video Cloud Services',
                    'Global Network & CDN',
                    'Managed Cloud Operations (MSP)',
                  ].map((c) => (
                    <div key={c} className="flex items-start gap-2 text-sm font-body text-gray-600">
                      <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Analyst recognition footer */}
            <div className="border-t border-navy/8 px-10 py-6 bg-navy/3">
              <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400 font-body mb-4">
                Recognised by Top Global Analyst Firms
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { firm: 'Gartner', note: 'Magic Quadrant — Cloud Infrastructure' },
                  { firm: 'Forrester', note: 'Leader — APAC Enterprise Security' },
                  { firm: 'IDC', note: 'No.1 — APAC Audio & Video Cloud' },
                  { firm: 'Frost & Sullivan', note: 'No.1 — APAC Cloud Media Services' },
                ].map((a) => (
                  <div key={a.firm} className="border border-navy/10 px-4 py-3">
                    <div className="font-heading font-bold text-navy text-sm">{a.firm}</div>
                    <div className="text-gray-400 text-[10px] font-body mt-0.5">{a.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Partnership */}
      <section className="bg-navy py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">
              WHY UNO + TENCENT CLOUD
            </span>
            <h2 className="font-heading font-bold text-white text-4xl leading-tight mb-6">
              The Right Platform.<br />The Right Local Partner.
            </h2>
            <p className="text-white/55 font-body text-base leading-relaxed mb-6">
              Tencent Cloud provides enterprise-grade infrastructure with deep Asia-Pacific coverage and leading AI capabilities. Uno Digitek provides the local expertise, implementation capability, and operational accountability that Indonesian enterprises need.
            </p>
            <p className="text-white/40 font-body text-sm leading-relaxed">
              Together, we give enterprises a complete solution — from cloud strategy through to 24/7 managed operations — with a single accountable partner.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🌏', title: 'APAC Infrastructure', desc: 'Strong Asia-Pacific network coverage with low-latency connectivity for Indonesian enterprises.' },
              { icon: '🤖', title: 'Enterprise AI',       desc: 'Hunyuan Foundation Model and production-grade AI services from Tencent AI Lab.' },
              { icon: '🛡', title: '400+ Certifications', desc: 'ISO 27001, SOC 2, and regional compliance frameworks for regulated industries.' },
              { icon: '🏗', title: 'Local Expertise',     desc: 'Uno Digitek provides Jakarta-based architects, engineers, and managed services teams.' },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 p-5 hover:border-gold/30 transition-colors">
                <div className="text-xl mb-3">{item.icon}</div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="block text-gold font-body font-bold text-xs tracking-widest uppercase mb-4">GET STARTED</span>
          <h2 className="font-heading font-bold text-navy text-4xl mb-4">
            Ready to Move to Tencent Cloud?
          </h2>
          <p className="text-gray-500 font-body mb-8 leading-relaxed text-base">
            Talk to our team. We begin with a cloud readiness assessment to understand your requirements and propose a structured migration path.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold-solid">CONTACT OUR TEAM</Link>
            <Link href="/tencent-cloud" className="btn-gold-outline">EXPLORE TENCENT CLOUD</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
