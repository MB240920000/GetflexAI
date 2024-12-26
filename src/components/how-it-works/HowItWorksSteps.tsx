import { Brain, Users, Calendar, BarChart3, Bot, Zap } from 'lucide-react';
import Card from '../ui/Card';

const steps = [
  {
    icon: Bot,
    title: "User Interaction",
    description: "Our AI Agent greets users with a friendly tone, engaging in natural conversations to understand their needs.",
    details: [
      "Seamless user engagement",
      "Dynamic query handling",
      "Personalized assistance"
    ]
  },
  {
    icon: Users,
    title: "Lead Qualification",
    description: "Our AI Agent identifies user goals and collects essential information through natural conversations.",
    details: [
      "Understanding user needs",
      "Lead information gathering",
      "Secure data storage"
    ]
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated booking system that handles appointments and follow-ups efficiently.",
    details: [
      "Automated appointments",
      "Real-time availability",
      "Confirmation handling"
    ]
  },
  {
    icon: Brain,
    title: "Product Recommendations",
    description: "Our AI Agent provides personalized suggestions based on user preferences and needs.",
    details: [
      "Needs-based suggestions",
      "Sales-driven conversations",
      "Inventory integration"
    ]
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "Our AI Agent adapts and improves through each interaction to provide better service.",
    details: [
      "Adaptive responses",
      "Performance optimization",
      "Brand voice customization"
    ]
  },
  {
    icon: BarChart3,
    title: "Performance Monitoring",
    description: "Our AI Agent provides detailed analytics and insights for business optimization.",
    details: [
      "Comprehensive analytics",
      "Interaction tracking",
      "Optimization insights"
    ]
  }
];

export default function HowItWorksSteps() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index}>
              <step.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-500">
                    • {detail}
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