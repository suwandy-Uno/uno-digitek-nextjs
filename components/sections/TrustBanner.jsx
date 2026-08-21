'use client';
import Image from 'next/image';

export default function TrustBanner() {
  return (
    <section className="bg-navy border-t border-gold/15 border-b border-b-white/5 py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase font-body">
          Trusted Technology Partner
        </p>
        <div className="flex items-center gap-4">
          <Image
            src="/images/tencent-cloud-logo.svg"
            alt="Tencent Cloud — Official Partner"
            width={220}
            height={56}
            className="opacity-90 hover:opacity-100 transition-opacity"
            unoptimized
          />
          <div className="border-l border-white/15 pl-4">
            <div className="text-gold text-[9px] font-bold tracking-widest uppercase font-body">Official Partner</div>
            <div className="text-white/40 text-xs font-body mt-0.5">Enterprise Cloud Platform</div>
          </div>
        </div>
      </div>
    </section>
  );
}
