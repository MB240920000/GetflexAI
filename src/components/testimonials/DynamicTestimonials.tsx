import { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, ArrowLeft } from 'lucide-react';
import Card from '../ui/Card';

const testimonials = [
  {
    quote: "GetFlexAI transformed our wellness center's operations. The AI handles 90% of client inquiries instantly, and our member satisfaction scores have never been higher. The personalized interactions keep our clients engaged and coming back.",
    author: "Dr. Maya Patel",
    position: "Director, Harmony Wellness Institute",
    metrics: {
      responseTime: "2min → 10sec",
      satisfaction: "95%",
      efficiency: "+85%"
    }
  },
  {
    quote: "The ROI was immediate. We reduced staffing costs by 40% while providing better 24/7 support across all our locations. The AI's ability to handle multiple languages has helped us serve our diverse client base more effectively.",
    author: "Marcus Chen",
    position: "CEO, VitalityX Fitness Network",
    metrics: {
      costReduction: "40%",
      availability: "24/7",
      engagement: "+65%"
    }
  },
  {
    quote: "What impressed us most was how quickly the AI adapted to our boutique studio's unique approach. It handles everything from class bookings to personalized wellness advice, maintaining our premium service standards perfectly.",
    author: "Sofia Rodriguez",
    position: "Founder, Pure Balance Studios",
    metrics: {
      bookings: "+45%",
      retention: "92%",
      satisfaction: "98%"
    }
  },
  {
    quote: "As a high-volume CrossFit box, we needed a solution that could keep up with our fast-paced environment. GetFlexAI not only streamlined our operations but also helped increase our membership retention through proactive engagement.",
    author: "James O'Connor",
    position: "Owner, Elite CrossFit Community",
    metrics: {
      memberRetention: "+35%",
      leadConversion: "+50%",
      efficiency: "+75%"
    }
  },
  {
    quote: "The AI's ability to learn our holistic wellness approach and communicate it effectively to clients has been remarkable. It's like having a knowledgeable team member available 24/7 who perfectly understands our philosophy.",
    author: "Aisha Rahman",
    position: "Director, Mindful Movement Center",
    metrics: {
      clientGrowth: "+40%",
      satisfaction: "96%",
      engagement: "+70%"
    }
  }
];

export default function DynamicTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,230,151,0.1)_0%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Quote className="w-16 h-16 text-[#0AE697] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Success <span className="text-[#0AE697]">Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how businesses are transforming their operations with GetFlexAI
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <div className="relative px-8 py-12">
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#0AE697] transition-colors"
              disabled={isAnimating}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#0AE697] fill-current" />
                ))}
              </div>

              <blockquote className="text-xl text-center mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="text-center mb-8">
                <div className="font-semibold text-lg">{testimonial.author}</div>
                <div className="text-[#0AE697]">{testimonial.position}</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {Object.entries(testimonial.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-[#0AE697]">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#0AE697] transition-colors"
              disabled={isAnimating}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </Card>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#0AE697]' : 'bg-gray-600'
              }`}
              onClick={() => {
                if (!isAnimating && index !== currentIndex) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}