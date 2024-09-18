import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to ResumeBuilder. By using our website, you agree to these Terms of Service. Please read them carefully.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our service, you agree to comply with and be bound by these terms. If you do not agree to these terms, please do not use our service.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms at any time. Your continued use of the service after any changes constitutes acceptance of the new terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. User Responsibilities</h2>
      <p className="mb-4">
        You are responsible for ensuring that your use of the service complies with all applicable laws and regulations. You agree not to use the service for any illegal or unauthorized purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Intellectual Property</h2>
      <p className="mb-4">
        All content and materials on the service, including but not limited to text, graphics, and logos, are the property of ResumeBuilder or its licensors and are protected by intellectual property laws.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Limitation of Liability</h2>
      <p className="mb-4">
        ResumeBuilder is not liable for any indirect, incidental, or consequential damages arising from your use of the service. Our liability is limited to the fullest extent permitted by law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Governing Law</h2>
      <p className="mb-4">
        These terms are governed by and construed in accordance with the laws of the jurisdiction in which ResumeBuilder operates.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about these terms, please contact us at <a href="mailto:support@resumebuilder.com" className="text-blue-400 hover:underline">support@resumebuilder.com</a>.
      </p>
    </div>
  );
};

export default TermsOfService;
