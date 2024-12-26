import { Settings, Users, Bot, Zap } from 'lucide-react';
import Card from '../ui/Card';

const steps = [
  {
    icon: Settings,
    title: "Initial Setup",
    description: "Configure your GetFlexAI dashboard and customize your settings",
    details: [
      "Create your account",
      "Set business hours and preferences",
      "Configure notification settings",
      "Set up team access permissions"
    ]
  },
  {
    icon: Users,
    title: "Team Onboarding",
    description: "Get your team familiar with the AI assistant",
    details: [
      "Add team members",
      "Assign roles and permissions",
      "Schedule training sessions",
      "Review best practices"
    ]
  },
  {
    icon: Bot,
    title: "AI Configuration",
    description: "Customize your AI assistant to match your business needs",
    details: [
      "Set up automated responses",
      "Configure booking rules",
      "Customize client interactions",
      "Set up lead capture preferences"
    ]
  },
  {
    icon: Zap,
    title: "Integration & Testing",
    description: "Connect your existing systems and test functionality",
    details: [
      "Connect scheduling system",
      "Set up payment processing",
      "Test customer interactions",
      "Verify automated workflows"
    ]
  }
];

export default function SetupSteps() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Quick Setup Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index}>
              <step.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-[#0AE697] rounded-full" />
                    {detail}
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