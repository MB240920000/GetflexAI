import { Calendar, HeadphonesIcon, Brain, DollarSign } from 'lucide-react';
import Card from '../ui/Card';

const solutions = [
  {
    icon: Calendar,
    title: "Simplified Booking System",
    description: "Revolutionized the booking experience, enabling members and clients to schedule sessions effortlessly"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Support",
    description: "Provides round-the-clock responses to member and client queries, ensuring immediate support anytime"
  },
  {
    icon: Brain,
    title: "Tailored Suggestions",
    description: "Analyzes user interactions to offer tailored fitness product suggestions and captures marketing data"
  },
  {
    icon: DollarSign,
    title: "Reduced Operational Costs",
    description: "Cuts expenses by automating administrative and customer service tasks, reducing the need for manual labor"
  }
];

export default function CaseStudySolutions() {
  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our AI Solutions Made the <span className="text-[#0AE697]">Difference</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index}>
              <solution.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}