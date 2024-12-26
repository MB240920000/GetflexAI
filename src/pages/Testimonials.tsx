import Navigation from '../components/layout/Navigation';
import Footer from '../components/footer/Footer';
import TestimonialsHero from '../components/testimonials/TestimonialsHero';
import DynamicTestimonials from '../components/testimonials/DynamicTestimonials';
import TestimonialStats from '../components/testimonials/TestimonialStats';

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <TestimonialsHero />
        <DynamicTestimonials />
        <TestimonialStats />
      </main>
      <Footer />
    </div>
  );
}