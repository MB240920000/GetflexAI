import { TrendingUp } from 'lucide-react';
import Card from '../ui/Card';

const results = [
  {
    metric: "+300",
    label: "Additional Bookings Monthly",
    suffix: ""
  },
  {
    metric: "+50",
    label: "Increase in Quarterly Sales",
    suffix: "K"
  },
  {
    metric: "+100",
    label: "Saved Annually on Staffing",
    suffix: "K"
  },
  {
    metric: "+100",
    label: "New Members Thanks to Marketing Automation",
    suffix: ""
  }
];

export default function CaseStudyResults() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <TrendingUp className="w-8 h-8 text-[#0AE697]" />
          <h2 className="text-3xl font-bold">We're Crushing It For PeakFit Revolution</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl font-bold text-[#0AE697] mb-2">
                {result.metric}
                <span className="text-3xl">{result.suffix}</span>
              </div>
              <div className="text-gray-400">{result.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}