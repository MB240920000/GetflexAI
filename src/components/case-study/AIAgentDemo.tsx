import { Bot } from 'lucide-react';

export default function AIAgentDemo() {
  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Bot className="w-16 h-16 text-[#0AE697] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Try Our <span className="text-[#0AE697]">AI Agent</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Experience firsthand how our AI technology transforms customer interactions
          </p>
        </div>

        <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
          <iframe
            src="https://tixaeagents.ai/app/eu/render/lxn6hocrdiw3wm8y/iframe"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            title="AI Agent Demo"
            allow="microphone"
          />
        </div>
      </div>
    </section>
  );
}