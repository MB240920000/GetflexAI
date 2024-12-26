import Card from '../ui/Card';

const tips = [
  {
    title: "Regular Monitoring",
    description: "Keep track of your AI's performance and make adjustments as needed",
    checklist: [
      "Review conversation logs daily",
      "Monitor response accuracy",
      "Track customer satisfaction metrics",
      "Analyze peak usage times"
    ]
  },
  {
    title: "Continuous Improvement",
    description: "Regularly update and optimize your AI settings",
    checklist: [
      "Update responses based on feedback",
      "Add new FAQ items regularly",
      "Refine conversation flows",
      "Optimize response times"
    ]
  },
  {
    title: "Team Training",
    description: "Ensure your team knows how to work alongside the AI",
    checklist: [
      "Regular training sessions",
      "Clear handoff procedures",
      "Document best practices",
      "Share success stories"
    ]
  }
];

export default function BestPracticesTips() {
  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pro Tips for Success
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-400 mb-4">{tip.description}</p>
              <ul className="space-y-2">
                {tip.checklist.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-[#0AE697] rounded-full" />
                    {item}
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