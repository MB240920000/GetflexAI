import { Bot, Users, Settings, MessageSquare } from 'lucide-react';
import Card from '../ui/Card';

const practices = [
  {
    icon: Bot,
    title: "AI Configuration",
    description: "Optimize your AI assistant for maximum effectiveness",
    tips: [
      "Customize responses to match your brand voice",
      "Set up comprehensive FAQ responses",
      "Configure business-specific workflows",
      "Regular review and updates of AI responses"
    ]
  },
  {
    icon: Users,
    title: "Customer Interaction",
    description: "Ensure smooth customer experience with AI",
    tips: [
      "Set clear expectations for AI capabilities",
      "Implement smooth human handoff protocols",
      "Monitor customer satisfaction regularly",
      "Gather and incorporate feedback"
    ]
  },
  {
    icon: Settings,
    title: "System Management",
    description: "Maintain optimal system performance",
    tips: [
      "Regular performance monitoring",
      "Update business rules as needed",
      "Backup important configurations",
      "Track and analyze metrics"
    ]
  },
  {
    icon: MessageSquare,
    title: "Communication Strategy",
    description: "Develop effective AI communication",
    tips: [
      "Maintain consistent tone across channels",
      "Create clear escalation paths",
      "Set up automated follow-ups",
      "Personalize customer interactions"
    ]
  }
];

export default function BestPracticesContent() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {practices.map((practice, index) => (
            <Card key={index}>
              <practice.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
              <p className="text-gray-400 mb-4">{practice.description}</p>
              <ul className="space-y-2">
                {practice.tips.map((tip, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-[#0AE697] rounded-full" />
                    {tip}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}