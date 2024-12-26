const stats = [
  { label: "Customer Satisfaction", value: "98%" },
  { label: "Response Time Improvement", value: "90%" },
  { label: "Cost Reduction", value: "30%" },
  { label: "Revenue Growth", value: "25%" }
];

export default function TestimonialStats() {
  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Real <span className="text-[#0AE697]">Results</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#0AE697] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}