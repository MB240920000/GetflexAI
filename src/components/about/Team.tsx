import Card from '../ui/Card';

const team = [
  {
    name: "Moncef Buri",
    role: "CEO & Founder",
    image: "https://postimg.cc/1gjVNTfm",
    bio: "Martech Manager with +5 years experience in AI, working with companies across various industries."
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
    bio: "AI researcher and engineer with a passion for healthcare technology."
  },
  {
    name: "Emily Thompson",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200",
    bio: "Product strategist focused on creating intuitive healthcare solutions."
  }
];

export default function Team() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index}>
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-[#0AE697] mb-3">{member.role}</div>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
