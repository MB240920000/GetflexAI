import { Bot, Calendar, Brain, Users } from 'lucide-react';
import Card from '../ui/Card';
import SectionWrapper from '../animations/SectionWrapper';

const features = [
  {
    icon: Bot,
    title: "AI Customer Support Agent",
    description: "24/7 support for inquiries and resolutions"
  },
  {
    icon: Users,
    title: "Lead Capture Agent",
    description: "Collects and organizes customer data"
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Automates bookings and calendars"
  },
  {
    icon: Brain,
    title: "Personalized Recommendations",
    description: "Delivers tailored advice"
  }
];

export default function Features() {
  return (
    <SectionWrapper className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Core <span className="text-[#0AE697]">AI Capabilities</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <feature.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}