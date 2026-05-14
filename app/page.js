import Hero      from '@/components/sections/Hero';
import About     from '@/components/sections/About';
import Stats     from '@/components/sections/Stats';
import Solutions from '@/components/sections/Solutions';
import Services  from '@/components/sections/Services';
import Contact   from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Solutions />
      <Services />
      <Contact />
    </main>
  );
}
