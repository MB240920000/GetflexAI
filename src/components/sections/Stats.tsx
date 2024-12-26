import { Activity, Clock, TrendingDown, Users } from 'lucide-react';
import Card from '../ui/Card';
import CountUp from '../animations/CountUp';
import { useInView } from '../hooks/useInView';
import DynamicBackground from '../animations/DynamicBackground';

const stats = [
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "AI Support",
    description: "Round-the-clock automated assistance"
  },
  {
    icon: Activity,
    value: 90,
    suffix: "%",
    label: "Response Rate",
    description: "Faster customer resolutions"
  },
  {
    icon: TrendingDown,
    value: 40,
    suffix: "%",
    label: "Cost Reduction",
    description: "Average operational savings"
  },
  {
    icon: Users,
    value: 2500,
    prefix: "+",
    label: "Active Users",
    description: "Growing customer base"
  }
];

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <DynamicBackground />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          See the <span className="text-[#0AE697]">Magic in Numbers</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
              <stat.icon className="w-12 h-12 text-[#0AE697] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">
                {inView && (
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-xl mb-2">{stat.label}</div>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}