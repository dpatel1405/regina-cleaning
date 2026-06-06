import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import QuoteCalculator from '../components/QuoteCalculator';
import FAQ from '../components/FAQ';

function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <QuoteCalculator />
      <FAQ />
    </div>
  );
}

export default Home;