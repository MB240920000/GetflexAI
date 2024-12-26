interface LegalSectionProps {
  title: string;
  content: string;
}

export default function LegalSection({ title, content }: LegalSectionProps) {
  return (
    <section className="bg-black/30 rounded-lg p-6 border border-[#0AE697]/10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-400 leading-relaxed">{content}</p>
    </section>
  );
}