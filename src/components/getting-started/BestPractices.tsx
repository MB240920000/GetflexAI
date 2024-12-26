import { Lightbulb } from 'lucide-react';
import Card from '../ui/Card';

const practices = [
  {
    title: "Personalize Your AI",
    description: "Configure your AI to match your brand voice and communication style",
    tips: [
      "Use consistent language and tone",
      "Add custom greetings and responses",
      "Include brand-specific information"
    ]
  },
  {
    title: "Regular Monitoring",
    description: "Keep track of AI performance and customer interactions",
    tips: [
      "Review conversation logs regularly",
      "Monitor response accuracy",
      "Track customer satisfaction"
    ]
  },
  {
    title: "Team Training",
    description: "Ensure your team knows how to work alongside the AI",
    tips: [
      "Provide comprehensive training",
      "Set clear handoff procedures",
      "Establish escalation protocols"
    ]
  },
  {
    title: "Continuous Improvement",
    description: "Regularly update and optimize your AI settings",
    tips: [
      "Gather customer feedback",
      "Update responses based on common queries",
      "Refine automation rules"
    ]
  }
];

export default function BestPractices() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Lightbulb className="w-16 h-16 text-[#0AE697] mx-auto mb-6" />
          <h2 className="text-3xl font-bold">Best Practices</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {practices.map((practice, index) => (
            <Card key={index}>
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