import Hero from '../components/Hero';
import FeaturedTours from '../components/FeaturedTours';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedTours />
      <Destinations />
      <Testimonials />
    </div>
  );
}