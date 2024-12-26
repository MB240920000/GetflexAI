import { AlertCircle } from 'lucide-react';
import Card from '../ui/Card';

const mistakes = [
  {
    title: "Insufficient Configuration",
    description: "Not taking time to properly configure AI responses and workflows",
    solutions: [
      "Dedicate time to initial setup",
      "Review and update regularly",
      "Test thoroughly before launch"
    ]
  },
  {
    title: "Ignoring Analytics",
    description: "Not monitoring or acting on AI performance metrics",
    solutions: [
      "Set up regular reporting",
      "Review key metrics weekly",
      "Make data-driven adjustments"
    ]
  },
  {
    title: "Poor Handoff Procedures",
    description: "Unclear processes for transitioning from AI to human support",
    solutions: [
      "Establish clear handoff triggers",
      "Train team on procedures",
      "Monitor handoff success rates"
    ]
  }
];

export default function CommonMistakes() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <AlertCircle className="w-16 h-16 text-[#0AE697] mx-auto mb-6" />
          <h2 className="text-3xl font-bold">Common Mistakes to Avoid</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {mistakes.map((mistake, index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold mb-2">{mistake.title}</h3>
              <p className="text-gray-400 mb-4">{mistake.description}</p>
              <div className="space-y-2">
                {mistake.solutions.map((solution, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0AE697] rounded-full" />
                    {solution}
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