'use client';
import Link from 'next/link';

const REASONS = [
  {
    icon: '🌏',
    title: 'Built for Asia-Pacific',
    desc: 'Tencent Cloud has deep APAC infrastructure with data centres across Southeast Asia — including Singapore and Indonesia proximity nodes — ensuring low latency for regional enterprise workloads.',
  },
  {
    icon: '🤖',
    title: 'Enterprise AI Innovation',
    desc: 'Backed by Tencent AI Lab and the Hunyuan Foundation Model, Tencent Cloud delivers production-grade AI capabilities — computer vision, NLP, conversational AI, and large language model integration.',
  },
  {
    icon: '🛡',
    title: 'Proven Security & Compliance',
    desc: 'Over 400 globally recognized certifications including ISO 27001, SOC 2, and regional compliance frameworks. Tencent Security ranks No. 1 in APAC Enterprise Fraud Management (Forrester).',
  },
  {
    icon: '⚡',
    title: 'Battle-Tested Infrastructure',
    desc: 'The same infrastructure that serves WeChat Pay\'s 1 billion+ daily transactions and billions of gaming users globally — now available to Indonesian enterprises through Uno Digitek.',
  },
  {
    icon: '📡',
    title: 'Global Network Scale',
    desc: '3,200+ global acceleration nodes, 200 Tbps+ CDN bandwidth, and 26 regions across 70+ countries — providing the reach needed for regional expansion and global operations.',
  },
  {
    icon: '💡',
    title: 'Open Partner Ecosystem',
    desc: 'Tencent Cloud\'s open ecosystem approach allows Uno Digitek to integrate best-of-breed solutions alongside the Tencent Cloud platform — no vendor lock-in for your enterprise.',
  },
];

export default function WhyTencentCloud() {
  return (
    <section className="bg-navy py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left: heading */}
          <div>
            <div
              className="inline-block px-3 py-1 text-white text-[10px] font-bold tracking-widest uppercase font-body mb-6"
              style={{ background: 'linear-gradient(90deg, #1677FF, #00C6FF)' }}
            >
              STRATEGIC PLATFORM
            </div>
            <h2 className="font-heading font-bold text-white text-4xl leading-tight mb-5">
              Why Uno Digitek<br />
              <span className="text-gold">Chose Tencent Cloud</span>
            </h2>
            <p className="text-white/55 text-sm font-body leading-relaxed mb-8">
              After extensive evaluation, Uno Digitek selected Tencent Cloud as our flagship enterprise cloud platform for the Indonesian market — based on infrastructure strength, AI capability, APAC presence, and partner commitment.
            </p>

            {/* Analyst recognition strip */}
            <div className="border border-white/10 p-5 bg-white/3">
              <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase font-body mb-4">Recognised by Top Analyst Firms</p>
              <div className="flex flex-col gap-2 text-xs font-body">
                {[
                  'Gartner — Listed in Magic Quadrant, Ranked #6 globally in execution',
                  'Forrester — Leader in APAC Enterprise Fraud Management',
                  'IDC — No.1 APAC Audio & Video Cloud Market Share',
                  'Frost & Sullivan — No.1 APAC Cloud Media Service Provider',
                ].map((r) => (
                  <div key={r} className="flex items-start gap-2 text-white/45">
                    <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>
                    {r}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link href="/tencent-cloud" className="btn-gold-outline text-[11px] py-2.5 px-7">
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {REASONS.map((r) => (
              <div key={r.title} className="border border-white/10 p-6 hover:border-gold/30 transition-colors">
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="font-heading font-bold text-white text-base mb-2">{r.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-body">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
