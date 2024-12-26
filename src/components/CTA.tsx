export default function CTA() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Empower Your Business Today</h2>
        <div className="space-y-4">
          <button className="bg-[#0AE697] text-black px-8 py-4 rounded-full font-semibold text-lg w-full md:w-auto">
            Request a Demo
          </button>
          <button className="border-2 border-[#0AE697] text-[#0AE697] px-8 py-4 rounded-full font-semibold text-lg w-full md:w-auto md:ml-4">
            Learn More
          </button>
        </div>
        
        <div className="mt-12 max-w-md mx-auto">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full bg-gray-900 text-white border border-gray-800 focus:border-[#0AE697] focus:ring-1 focus:ring-[#0AE697] outline-none"
            />
            <button className="absolute right-2 top-2 bg-[#0AE697] text-black px-6 py-2 rounded-full font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}