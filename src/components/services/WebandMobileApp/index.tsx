import { 
  Code2, 
  Smartphone, 
  Globe, 
  Layout, 
  Code, 
  Database, 
  Cloud,
  ClipboardList, 
  PenTool, 
  Rocket 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Full-stack web applications with responsive design and optimal performance.',
    features: ['Custom Development', 'Progressive Web Apps', 'API Integration']
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android platforms.',
    features: ['iOS Development', 'Android Development', 'Cross-platform Solutions']
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Modern, responsive interfaces built with the latest technologies.',
    features: ['React/Next.js', 'UI/UX Implementation', 'Performance Optimization']
  },
  {
    icon: Code,
    title: 'Backend Development',
    description: 'Scalable server-side solutions and API development.',
    features: ['Node.js/Express', 'REST APIs', 'Microservices']
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture and data management solutions.',
    features: ['Schema Design', 'Data Migration', 'Performance Tuning']
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Cloud deployment and infrastructure management.',
    features: ['AWS/Azure/GCP', 'DevOps', 'CI/CD Implementation']
  }
];

const technologies = {
  frontend: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'NestJS', 'Python', 'Java Spring', 'GraphQL'],
  mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'],
  database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
  cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Vercel']
};

const processSteps = [
  {
    icon: ClipboardList,
    title: 'Requirements Analysis',
    description: 'We work closely with you to understand your needs and project goals.'
  },
  {
    icon: PenTool,
    title: 'Design & Planning',
    description: 'Creating detailed technical specifications and project roadmap.'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Agile development with regular updates and feedback integration.'
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    description: 'Smooth deployment and ongoing maintenance support.'
  }
];

const WebMobileServices = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web & Mobile Development Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                From concept to deployment, we deliver cutting-edge web and mobile solutions 
                that help businesses thrive in the digital world.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#E31937] text-white px-6 py-3 hover:bg-red-700 transition-colors">
                  Get Free Consultation
                </button>
                <button className="border-2 border-[#E31937] text-[#E31937] px-6 py-3 hover:bg-red-50 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Code2 className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-600">Custom web applications with modern frameworks</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <Smartphone className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                <p className="text-gray-600">Native and cross-platform mobile solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <service.icon className="h-10 w-10 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#E31937] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use the latest technologies to build scalable and efficient solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-[#E31937] rounded-full text-sm border border-red-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven development methodology ensures successful project delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-[#E31937]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-red-100 -translate-y-1/2 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Inquiry Section */}
      <section className="py-20 px-4 bg-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-red-100 mb-8">
            Get in touch with our team to discuss your project requirements and receive a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E31937] px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebMobileServices