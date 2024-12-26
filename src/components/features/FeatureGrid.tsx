import { Bot, Brain, Calendar, Users, BarChart3, Shield } from 'lucide-react';
import Card from '../ui/Card';

const features = [
  {
    icon: Bot,
    title: "24/7 AI Support",
    description: "Provide instant, accurate responses to customer inquiries around the clock."
  },
  {
    icon: Brain,
    title: "Smart Analytics",
    description: "Gain valuable insights into customer behavior and business performance."
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description: "Streamline appointment booking and management automatically."
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Capture and qualify leads through intelligent conversations."
  },
  {
    icon: Shield,
    title: "Secure Data Handling",
    description: "Keep customer information safe with enterprise-grade security."
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Monitor and optimize your business metrics in real-time."
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <feature.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}