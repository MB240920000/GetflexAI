import { Heart, Shield, Zap, Users } from 'lucide-react';
import Card from '../ui/Card';

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We prioritize our customers' success and satisfaction in everything we do."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We maintain the highest standards of data protection and privacy."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously push boundaries to deliver cutting-edge solutions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of working together to achieve great results."
  }
];

export default function Values() {
  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <value.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}