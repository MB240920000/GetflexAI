import { MessageSquare, Calendar, Brain, Users } from 'lucide-react';
import Card from '../ui/Card';

const features = [
  {
    icon: MessageSquare,
    title: "AI Customer Support",
    description: "24/7 automated customer service with natural language processing",
    tips: [
      "Set up custom responses",
      "Configure support hours",
      "Enable multilingual support"
    ]
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated appointment booking and management system",
    tips: [
      "Set availability rules",
      "Configure booking limits",
      "Enable automated reminders"
    ]
  },
  {
    icon: Brain,
    title: "Lead Generation",
    description: "Intelligent lead capture and nurturing system",
    tips: [
      "Set up lead forms",
      "Configure follow-up sequences",
      "Enable lead scoring"
    ]
  },
  {
    icon: Users,
    title: "Member Management",
    description: "Comprehensive member relationship management",
    tips: [
      "Set up member profiles",
      "Configure engagement rules",
      "Enable retention features"
    ]
  }
];

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Features Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <feature.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.tips.map((tip, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0AE697] rounded-full" />
                    {tip}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}