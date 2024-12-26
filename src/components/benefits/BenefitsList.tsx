import { Clock, DollarSign, Users, BarChart3, Shield, Zap } from 'lucide-react';
import Card from '../ui/Card';

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Reduce manual tasks by up to 70% with automated customer service and scheduling."
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Cut operational costs by 30% through efficient AI-powered automation."
  },
  {
    icon: Users,
    title: "Increase Engagement",
    description: "Boost customer engagement by 50% with personalized interactions."
  },
  {
    icon: BarChart3,
    title: "Boost Revenue",
    description: "Grow revenue by 25% through improved lead conversion and customer retention."
  },
  {
    icon: Shield,
    title: "Minimize Errors",
    description: "Reduce scheduling conflicts and human errors by 90%."
  },
  {
    icon: Zap,
    title: "Scale Operations",
    description: "Handle 3x more customer interactions without adding staff."
  }
];

export default function BenefitsList() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <benefit.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}