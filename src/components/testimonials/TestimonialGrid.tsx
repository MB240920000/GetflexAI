import { Star } from 'lucide-react';
import Card from '../ui/Card';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Studio Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    content: "The AI automation has completely transformed how we handle customer inquiries. Our response time has improved by 90%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Wellness Center Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    content: "The personalization features have helped us provide a much better experience for our clients. Worth every penny.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Gym Chain Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    content: "Exceptional value for money. The automated scheduling alone has saved us countless hours.",
    rating: 5
  }
];

export default function TestimonialGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#0AE697] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 text-center">"{testimonial.content}"</p>
              <div className="text-center">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}