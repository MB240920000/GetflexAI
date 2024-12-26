import { Star } from 'lucide-react';
import Card from '../ui/Card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fitness Studio Owner',
    content: 'The AI automation has completely transformed how we handle customer inquiries. Our response time has improved by 90%.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Wellness Center Director',
    content: 'The personalization features have helped us provide a much better experience for our clients. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'Gym Chain Manager',
    content: 'Exceptional value for money. The automated scheduling alone has saved us countless hours.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-center mb-12">
        Trusted by Industry Leaders
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#0AE697] fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
            <div className="text-sm">
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-gray-400">{testimonial.role}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}