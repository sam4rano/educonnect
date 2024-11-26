import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-white py-10 w-full font-montserrat">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 ">
          {/* Company Values Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Values</h4>
            <ul className="space-y-2 sm:text-sm">
              <li>Integrity</li>
              <li>Collaboration</li>
              <li>Fairness</li>
              <li>Equity</li>
              <li>Digital</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/subject" className="hover:underline">Subject</a></li>
              <li><a href="/questions" className="hover:underline">Questions</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className='sm:text-sm sm:w-full'>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">123 Business Ave, Suite 456</p>
            <p className="mb-2">City, State, Zip Code</p>
            <p className="mb-2">
              Phone: 
              <a 
                href="tel:+2348064427860" 
                className="hover:underline ml-1"
                title="Call us"
              >
               (+234) 8064427860
              </a>
            </p>
            <p className="mb-2">
              WhatsApp: 
              <a 
                href="https://wa.me/2348064427860" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline ml-1"
                title="Chat with us on WhatsApp"
              >
                (+234) 8064427860
              </a>
            </p>
            <p>
              Email: 
              <a 
                href="mailto:info@educonnect.com" 
                className="hover:underline ml-1"
                title="Send us an email"
              >
                info@educonnect.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 flex md:flex-row items-center justify-between w-full flex-row sm:text-sm">
          <p>&copy; {new Date().getFullYear()} EduConnect. All rights reserved.</p>
          <ul className="flex space-x-2 mt-4 md:mt-0">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
