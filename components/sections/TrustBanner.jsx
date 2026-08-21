'use client';

const PARTNERS = [
  {
    name: 'Tencent Cloud',
    role: 'Enterprise Cloud Platform',
    badge: 'Official Partner',
    featured: true,
    color: '#1677FF',
  },
  { name: 'Microsoft Azure', role: 'Cloud Partner',      featured: false, color: '#0078D4' },
  { name: 'AWS',             role: 'Cloud Partner',      featured: false, color: '#FF9900' },
  { name: 'Alibaba Cloud',   role: 'Cloud Partner',      featured: false, color: '#FF6A00' },
  { name: 'Cloudflare',      role: 'Network & Security', featured: false, color: '#F48120' },
];

export default function TrustBanner() {
  return (
    <section className="bg-navy border-t border-gold/15 border-b border-b-white/5 py-10 px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase font-body text-center mb-8">
          Trusted Technology Ecosystem
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className={`flex items-center gap-3 px-5 py-3 border transition-colors ${
                p.featured
                  ? 'border-gold/40 bg-gold/5 hover:border-gold/70'
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              {/* Color dot representing partner */}
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: p.color }}
              />
              <div>
                <div className={`text-sm font-bold font-body leading-none ${p.featured ? 'text-white' : 'text-white/45'}`}>
                  {p.name}
                </div>
                {p.featured && (
                  <div className="text-gold text-[9px] font-bold tracking-widest uppercase font-body mt-0.5">
                    {p.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-white/20 text-[10px] font-body text-center mt-6">
          Additional partnerships coming soon · AWS · Azure · Alibaba Cloud · MongoDB · Elastic
        </p>
      </div>
    </section>
  );
}
