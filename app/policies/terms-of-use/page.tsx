import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Shri Manjunath School of Nursing',
  description: 'Terms of Use for Shri Manjunath School of Nursing',
};

export default function TermsOfUse() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <p className="text-gray-600 mb-4">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to the Shri Manjunath School of Nursing website. These Terms of Use govern your access to and use of our website, services, and content. By accessing or using our website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
          <ul>
            <li><strong>"School," "we," "us," or "our"</strong> refers to Shri Manjunath School of Nursing.</li>
            <li><strong>"Website"</strong> refers to the website operated by Shri Manjunath School of Nursing accessible at shrimanjunathnursing.edu (this domain).</li>
            <li><strong>"User," "you," or "your"</strong> refers to any individual or entity that accesses or uses our Website.</li>
            <li><strong>"Content"</strong> refers to all text, graphics, images, videos, data, and other materials on the Website.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Website Use and Access</h2>
          <p>By using our Website, you agree to:</p>
          <ul>
            <li>Use the Website only for lawful purposes and in accordance with these Terms of Use.</li>
            <li>Not use the Website in any way that could damage, disable, overburden, or impair the Website or interfere with any other party's use of the Website.</li>
            <li>Not attempt to gain unauthorized access to any part of the Website, other accounts, computer systems, or networks connected to the Website.</li>
            <li>Not use any robot, spider, or other automatic device to access the Website for any purpose without our express written permission.</li>
            <li>Not use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
          <p>
            The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the School, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p className="mt-4">
            You must not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as follows:
          </p>
          <ul>
            <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
            <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
            <li>You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Contributions</h2>
          <p>
            The Website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features that allow users to post, submit, publish, display, or transmit to other users or other persons content or materials.
          </p>
          <p className="mt-4">
            All User Contributions must comply with the Content Standards set out in these Terms of Use. Any User Contribution you post to the site will be considered non-confidential and non-proprietary.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
          <p>
            Your use of the Website, its content, and any services obtained through the Website is at your own risk. The Website, its content, and any services obtained through the Website are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.
          </p>
          <p className="mt-4">
            Neither the School nor any person associated with the School makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the Website.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            In no event will the School, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website, any websites linked to it, any content on the Website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms of Use</h2>
          <p>
            We may revise and update these Terms of Use from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the Website following the posting of revised Terms of Use means that you accept and agree to the changes.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms of Use, please contact us at:
          </p>
          <div className="mt-4">
            <p><strong>Shri Manjunath School of Nursing</strong></p>
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