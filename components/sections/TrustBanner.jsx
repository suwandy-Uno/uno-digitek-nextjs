'use client';
import Image from 'next/image';

export default function TrustBanner() {
  return (
    <section className="bg-navy border-t border-gold/15 border-b border-b-white/5 py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5">
        <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase font-body">
          Trusted Technology Partner
        </p>

        <div className="flex items-center gap-6 border border-gold/25 px-8 py-5 bg-white/3">
          {/* Tencent Cloud logo */}
          <Image
            src="/images/tencent-cloud-logo.svg"
            alt="Tencent Cloud"
            width={200}
            height={52}
            unoptimized
            className="opacity-95 hover:opacity-100 transition-opacity flex-shrink-0"
          />

          <div className="w-px h-10 bg-white/15" />

          {/* Partner badge text */}
          <div>
            <div className="text-gold text-[10px] font-bold tracking-widest uppercase font-body">
              Official Partner
            </div>
            <div className="text-white/50 text-sm font-body mt-0.5">
              Enterprise Cloud Platform for Indonesia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
