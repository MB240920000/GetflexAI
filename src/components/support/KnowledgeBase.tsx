import { Book, FileText, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

const resources = [
  {
    icon: Book,
    title: "Getting Started Guide",
    description: "Learn the basics of setting up and using GetFlexAI",
    link: "/getting-started"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for all features",
    comingSoon: true
  },
  {
    icon: FileText,
    title: "Best Practices",
    description: "Tips and tricks to maximize your results",
    link: "/best-practices"
  }
];

export default function KnowledgeBase() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Knowledge Base
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className={resource.comingSoon ? 'relative' : ''}>
              <resource.icon className="w-12 h-12 text-[#0AE697] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-400 mb-4">{resource.description}</p>
              {resource.comingSoon ? (
                <div className="absolute inset-0 backdrop-blur-sm bg-black/50 rounded-xl flex items-center justify-center">
                  <span className="text-[#0AE697] font-semibold">Coming Soon</span>
                </div>
              ) : (
                <Link
                  to={resource.link}
                  className="inline-flex items-center gap-2 text-[#0AE697] hover:underline"
                >
                  Learn More
                </Link>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}