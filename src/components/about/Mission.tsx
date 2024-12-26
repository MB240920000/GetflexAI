import { Target } from 'lucide-react';
import Card from '../ui/Card';

export default function Mission() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Card>
          <div className="text-center">
            <Target className="w-12 h-12 text-[#0AE697] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To revolutionize the health and wellness industry by providing cutting-edge 
              AI solutions that streamline operations, enhance customer experiences, and 
              drive business growth. We're committed to making advanced technology 
              accessible to businesses of all sizes, enabling them to deliver exceptional 
              service while reducing operational complexity.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}