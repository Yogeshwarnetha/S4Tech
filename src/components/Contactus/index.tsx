import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, title: 'Call Us', info: '+1 (555) 123-4567' },
    { icon: <Mail className="w-6 h-6" />, title: 'Email Us', info: 'contact@s4tech.com' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Visit Us', info: '123 Tech Street, Silicon Valley, CA' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 to-red-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 py-14">Get in Touch</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              We're here to help you transform your business with innovative IT solutions.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-white/20 rounded-full mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-red-100">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Have a question or want to learn more about our services? Fill out the form below and our team will get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
            <p className="text-gray-600 mb-8">
              Visit our office in the heart of Silicon Valley. We're conveniently located and always happy to meet in person to discuss your IT consulting needs.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101459.59325762714!2d-122.18118785!3d37.4040875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sSilicon%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1709871234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;