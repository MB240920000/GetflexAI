import LegalSection from './LegalSection';

export default function TermsContent() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-8">
          <LegalSection
            title="Acceptance of Terms"
            content="By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations."
          />

          <LegalSection
            title="Use License"
            content="Permission is granted to temporarily access our services for personal, non-commercial use. This is the grant of a license, not a transfer of title."
          />

          <LegalSection
            title="Service Modifications"
            content="We reserve the right to withdraw or modify our service, and any service or material we provide, without notice."
          />

          <LegalSection
            title="Account Responsibilities"
            content="You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account."
          />

          <LegalSection
            title="Limitation of Liability"
            content="We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our service."
          />

          <LegalSection
            title="Governing Law"
            content="These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles."
          />

          <div className="text-sm text-gray-400 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}