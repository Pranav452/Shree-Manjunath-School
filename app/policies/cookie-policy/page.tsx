import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Shri Manjunath School of Nursing, Vaduj',
  description: 'Cookie Policy for Shri Manjunath School of Nursing, Vaduj',
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-gray-600 mb-4">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            This Cookie Policy explains how Shri Manjunath School of Nursing, Vaduj ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.
          </p>
          <p className="mt-4">
            Cookies set by the website owner (in this case, Shri Manjunath School of Nursing, Vaduj) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (such as advertising, interactive content, and analytics).
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          <p>We use the following types of cookies:</p>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
            </p>
          </div>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Performance Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
            </p>
          </div>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Functionality Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
          </div>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Targeting Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Can You Control Cookies?</h2>
          <p>
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, but your access to some functionality and areas of our website may be restricted.
          </p>
          <p className="mt-4">
            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">How to manage cookies in different browsers:</h3>
            <ul>
              <li><a href="https://support.google.com/accounts/answer/61416" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to this Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p className="mt-4">
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us at:
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