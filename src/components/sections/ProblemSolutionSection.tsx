import { AlertCircle, CheckCircle2 } from 'lucide-react';

const problems = [
  {
    problem: "Manual Customer Support",
    solution: "24/7 AI-Powered Support",
    description: "Replace manual responses with instant, accurate AI interactions"
  },
  {
    problem: "Inefficient Scheduling",
    solution: "Automated Booking System",
    description: "Eliminate scheduling conflicts and manual coordination"
  },
  {
    problem: "Generic Customer Experience",
    solution: "Personalized AI Interactions",
    description: "Deliver customized experiences based on user preferences"
  }
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Transform Your <span className="text-[#0AE697]">Business Challenges</span> Into Opportunities
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-6 border border-[#0AE697]/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-red-400">
                  <AlertCircle className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{item.problem}</h3>
                    <div className="h-[1px] w-full bg-gradient-to-r from-red-400/50 to-transparent"></div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-[#0AE697]">
                  <CheckCircle2 className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{item.solution}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#0AE697]/50 to-transparent mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}