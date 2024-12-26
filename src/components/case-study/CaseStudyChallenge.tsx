import { AlertCircle } from 'lucide-react';
import Card from '../ui/Card';

export default function CaseStudyChallenge() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Card>
          <div className="flex items-center gap-4 mb-8">
            <AlertCircle className="w-8 h-8 text-[#0AE697]" />
            <h2 className="text-3xl font-bold">Complications? We Simplified 'Em!</h2>
          </div>
          
          <div className="space-y-6 text-gray-400">
            <p>
              PeakFit Revolution was struggling with significant challenges that hindered their 
              operation and member satisfaction:
            </p>
            
            <ul className="space-y-4 list-disc pl-6">
              <li>
                The gym's booking system was a major pain point, plagued by a convoluted 
                process that often resulted in long wait times and member frustration.
              </li>
              <li>
                Their customer service couldn't keep up during peak hours, leading to 
                delayed responses and a backlog of unresolved member inquiries.
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
}