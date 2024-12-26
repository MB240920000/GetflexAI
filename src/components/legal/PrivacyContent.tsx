import LegalSection from './LegalSection';

export default function PrivacyContent() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-8">
          <LegalSection
            title="Information We Collect"
            content="We collect information that you provide directly to us, including name, email address, and any other information you choose to provide. We also automatically collect certain information about your device when you use our services."
          />

          <LegalSection
            title="How We Use Your Information"
            content="We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations."
          />

          <LegalSection
            title="Data Storage and Security"
            content="We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
          />

          <LegalSection
            title="Your Rights"
            content="You have the right to access, correct, or delete your personal information. You can also object to processing and request data portability."
          />

          <LegalSection
            title="Cookies and Tracking"
            content="We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent."
          />

          <LegalSection
            title="Updates to This Policy"
            content="We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page."
          />

          <div className="text-sm text-gray-400 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}