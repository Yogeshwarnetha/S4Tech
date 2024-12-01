import  { useState } from 'react';
import { ContactInfo } from './contactForm';
import { Send } from 'lucide-react';

export function GetInTouch() {
  const [focused, setFocused] = useState<string>('');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border border-red-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border border-red-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className={`peer w-full px-4 pt-7 pb-3 rounded-lg border-2 bg-white/70 backdrop-blur-sm
                      transition-all duration-200 outline-none
                      ${focused === 'name' 
                        ? 'border-red-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]' 
                        : 'border-gray-200 hover:border-gray-300'}`}
                    placeholder=" "
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none
                      ${focused === 'name' || document.getElementById('name')
                        ? 'top-2 text-xs text-red-600'
                        : 'top-5 text-gray-500'}`}
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className={`peer w-full px-4 pt-7 pb-3 rounded-lg border-2 bg-white/70 backdrop-blur-sm
                      transition-all duration-200 outline-none
                      ${focused === 'email'
                        ? 'border-red-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]'
                        : 'border-gray-200 hover:border-gray-300'}`}
                    placeholder=" "
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none
                      ${focused === 'email' || document.getElementById('email')
                        ? 'top-2 text-xs text-red-600'
                        : 'top-5 text-gray-500'}`}
                  >
                    Email Address
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  className={`peer w-full px-4 pt-7 pb-3 rounded-lg border-2 bg-white/70 backdrop-blur-sm
                    transition-all duration-200 outline-none
                    ${focused === 'subject'
                      ? 'border-red-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]'
                      : 'border-gray-200 hover:border-gray-300'}`}
                  placeholder=" "
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none
                    ${focused === 'subject' || document.getElementById('subject')
                      ? 'top-2 text-xs text-red-600'
                      : 'top-5 text-gray-500'}`}
                >
                  Subject
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  rows={6}
                  className={`peer w-full px-4 pt-7 pb-3 rounded-lg border-2 bg-white/70 backdrop-blur-sm
                    transition-all duration-200 outline-none resize-none
                    ${focused === 'message'
                      ? 'border-red-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]'
                      : 'border-gray-200 hover:border-gray-300'}`}
                  placeholder=" "
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none
                    ${focused === 'message' || document.getElementById('message')
                      ? 'top-2 text-xs text-red-600'
                      : 'top-5 text-gray-500'}`}
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="w-50 bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-lg
                  hover:from-red-700 hover:to-red-800 transition-all duration-200 font-semibold
                  shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send size={20} className="animate-pulse" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}