import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">S4Tech</h3>
            <p className="text-sm">
              Empowering businesses through innovative IT solutions and strategic consulting services.
            </p>
            <div className="flex space-x-4">
              {/* Social Links */}
              {[
                { icon: <Facebook size={20} />, label: 'Facebook' },
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn' },
                { icon: <Instagram size={20} />, label: 'Instagram' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Services</h3>
            <div className="flex flex-col space-y-2">
              {['Cloud Solutions', 'Digital Transformation', 'Cybersecurity', 'Software Development', 'IT Infrastructure'].map((service, index) => (
                <a key={index} href="#" className="hover:text-white transition-colors duration-200">
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Company</h3>
            <div className="flex flex-col space-y-2">
              {['About Us', 'Our Team', 'Careers', 'Case Studies', 'Blog'].map((item, index) => (
                <a key={index} href="#" className="hover:text-white transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-sm">contact@s4tech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span className="text-sm">123 Tech Street, Silicon Valley, CA 94025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} S4Tech Pro. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;