import {  
  Monitor, 
  Megaphone, 
  Shield, 
  Database, 
  Settings, 
  Palette,
  Mail,
  Phone,
  MapPin,
  LucideIcon,
  Zap,
  CheckCircle
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const services = [
  {
    title: 'Web & Mobile App Development',
    description: 'Custom web and mobile solutions built with cutting-edge technologies to drive your business forward.',
    Icon: Monitor
  },
  {
    title: 'Digital Marketing Services',
    description: 'Strategic digital marketing campaigns that increase your online presence and drive measurable results.',
    Icon: Megaphone
  },
  {
    title: 'QA & Testing Services',
    description: 'Ensuring flawless performance and reliability through rigorous quality assurance and testing.',
    Icon: CheckCircle
  },
  {
    title: 'Cyber Security Solutions',
    description: 'Comprehensive security measures to protect your digital assets and maintain data integrity.',
    Icon: Shield
  },
  {
    title: 'AI & ML Services',
    description: 'Empowering businesses with intelligent AI and ML solutions for automation, innovation, and data-driven decision-making',
    Icon: Zap
  },
  {
    title: 'Data Tracking Security',
    description: 'Advanced data monitoring and protection systems to ensure your information stays secure.',
    Icon: Database
  },
  {
    title: 'IT Management Service',
    description: 'End-to-end IT management solutions to optimize your technology infrastructure.',
    Icon: Settings
  },
  {
    title: 'UI/UX & Brand Identity',
    description: 'Creative design solutions that enhance user experience and strengthen your brand presence.',
    Icon: Palette
  }
];

const stats = [
  { number: '500+', label: 'Clients Served' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '15+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
];

function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-[#E31937]" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E31937] to-red-500 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            {/* <Server size={48} className="mb-6 animate-pulse" /> */}
            <h1 className="text-5xl font-bold mb-6 py-6">S4 Tech</h1>
            <p className="text-xl max-w-2xl mb-8">
              Empowering businesses with cutting-edge technology solutions for a digital future.
              Transform, innovate, and grow with our comprehensive IT services.
            </p>
            <button className="bg-white text-[#E31937] px-8 py-3 rounded-full font-semibold 
              hover:bg-red-50 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of IT services designed to help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#E31937] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business? Contact us today for a free consultation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Mail className="mx-auto text-[#E31937] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">contact@s4tech.com</p>
            </div>
            <div className="text-center p-6">
              <Phone className="mx-auto text-[#E31937] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center p-6">
              <MapPin className="mx-auto text-[#E31937] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">4901 Whisper Drive
Parker, TX 75002</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;