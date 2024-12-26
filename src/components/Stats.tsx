import { Activity, Clock, TrendingDown } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: "24/7",
    label: "AI Support"
  },
  {
    icon: Activity,
    value: "10x",
    label: "Faster Customer Resolutions"
  },
  {
    icon: TrendingDown,
    value: "20%",
    label: "Cost Reduction"
  }
];

export default function Stats() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Transforming Operations, One Business at a Time
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 text-[#0AE697] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}