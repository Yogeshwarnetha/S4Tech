import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactFormData } from "../../api-request/contact";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({ success: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, title: "Call Us", info: "+1 (309) 660-3261" },
    { icon: <Mail className="w-6 h-6" />, title: "Email Us", info: "info@s4tech.com" },
    { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", info: "4901 Whisper Drive Parker, TX 75002" },
  ];

  const handleInputChange = (e:any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!formData.first_name || !formData.email || !formData.message) {
      setFormStatus({
        success: false,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setFormStatus({ success: false, message: "" });
    setIsLoading(true);

    try {
      const response = await contactFormData(formData);
      if (response?.success) {
        setFormStatus({ success: true, message: response.message || "Message sent successfully!" });
      } else {
        setFormStatus({ success: false, message: response.message || "An error occurred. Please try again." });
      }
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
      });
    } catch (error:any) {
      setFormStatus({
        success: false,
        message: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#E31937] to-[#E31937] text-white py-24">
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

            {formStatus.message && (
              <p
                className={`mb-4 text-sm ${
                  formStatus.success ? "text-green-500" : "text-red-500"
                }`}
              >
                {formStatus.message}
              </p>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 focus:border-none focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 focus:border-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 focus:border-none focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 focus:border-none focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 focus:border-none focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 focus:border-none focus:outline-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#E31937] text-white py-3 px-6 rounded-md hover:bg-red-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.0739224071294!2d-96.6368648700702!3d33.08083977066154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1a760fa31201%3A0x2e835fb3b8c50af!2s4901%20Whisper%20Dr%2C%20Parker%2C%20TX%2075002%2C%20USA!5e0!3m2!1sen!2sin!4v1737486317842!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
