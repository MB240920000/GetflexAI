import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: "24/7 Availability",
    traditional: false,
    ai: true,
  },
  {
    feature: "Instant Response Time",
    traditional: false,
    ai: true,
  },
  {
    feature: "Scalable Operations",
    traditional: false,
    ai: true,
  },
  {
    feature: "Personalized Interactions",
    traditional: true,
    ai: true,
  },
  {
    feature: "Cost-Effective",
    traditional: false,
    ai: true,
  }
];

export default function FeatureComparison() {
  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-[#0AE697]">AI-Powered</span> Solutions?
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-center">Traditional</th>
                <th className="py-4 px-6 text-center">Our AI Solution</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-4 px-6">{item.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {item.traditional ? (
                      <Check className="w-5 h-5 text-[#0AE697] mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {item.ai && <Check className="w-5 h-5 text-[#0AE697] mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}