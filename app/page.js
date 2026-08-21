import Hero               from '@/components/sections/Hero';
import TrustBanner        from '@/components/sections/TrustBanner';
import About              from '@/components/sections/About';
import WhyUno             from '@/components/sections/WhyUno';
import Solutions          from '@/components/sections/Solutions';
import TencentPlatform    from '@/components/sections/TencentPlatform';
import HowWeDeliver       from '@/components/sections/HowWeDeliver';
import EnterpriseOutcomes from '@/components/sections/EnterpriseOutcomes';
import WhyTencentCloud    from '@/components/sections/WhyTencentCloud';
import Services           from '@/components/sections/Services';
import Contact            from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBanner />
      <About />
      <WhyUno />
      <Solutions />
      <TencentPlatform />
      <HowWeDeliver />
      <EnterpriseOutcomes />
      <WhyTencentCloud />
      <Services />
      <Contact />
    </main>
  );
}
