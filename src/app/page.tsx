import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Research from '@/components/Research';
import Technology from '@/components/Technology';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <About />
      <Achievements />
      <Research />
      <Technology />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
