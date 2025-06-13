import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Shri Manjunath School of Nursing, Vaduj',
  description: 'Privacy Policy for Shri Manjunath School of Nursing, Vaduj',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            At Shri Manjunath School of Nursing, Vaduj ("we", "our", or "the School"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, process, and share your information when you visit our website, interact with us, or use our services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, postal address, and other contact details.</li>
            <li><strong>Educational Information:</strong> Academic records, qualifications, and certificates.</li>
            <li><strong>Application Information:</strong> Data provided in admission applications, forms, and supporting documents.</li>
            <li><strong>Website Usage Information:</strong> IP address, browser type, referring/exit pages, date/time stamps, and pages viewed.</li>
            <li><strong>Communication Data:</strong> Information contained in your communications with us via email, phone, or other means.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>Processing admission applications and enrollments</li>
            <li>Providing educational services and support</li>
            <li>Communicating with you about our programs, events, and services</li>
            <li>Personalizing your experience on our website</li>
            <li>Improving our website, services, and educational offerings</li>
            <li>Complying with legal obligations</li>
            <li>Responding to inquiries and providing customer support</li>
            <li>Sending newsletters and marketing communications (if opted in)</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third parties who perform services on our behalf (e.g., hosting providers, payment processors).</li>
            <li><strong>Educational Partners:</strong> Affiliated institutions, clinical placement sites, and accreditation bodies.</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate personal data</li>
            <li>Delete your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Withdraw consent</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="mt-4">
            <p><strong>Shri Manjunath School of Nursing, Vaduj</strong></p>
            <p>Email: netajibose2018@gmail.com, shrimanjunath369@gmail.com</p>
            <p>Phone: +91 7385685431</p>
            <p>Phone: +91 7385425431</p>
            <p>Address: Above Niramay Hospital, Dahivadi Road, Vaduj, Pin 415506, Maharashtra, India</p>
          </div>
        </section>
      </div>
    </div>
  );
} 