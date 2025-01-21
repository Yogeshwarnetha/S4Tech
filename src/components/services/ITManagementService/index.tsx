import { 
  Server, 
  Network, 
  Cpu, 
  Cloud,
  Users,
  Cog,
  Shield,
  BarChart2,
  Headphones,
  Code,
  
} from 'lucide-react';

const itServices = [
  {
    icon: Server,
    title: 'Infrastructure Management',
    description: 'Comprehensive infrastructure solutions for optimal performance.',
    features: ['Server Management', 'Network Optimization', 'Storage Solutions', 'Backup Systems']
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Seamless cloud integration and management for your business.',
    features: ['Cloud Migration', 'Hybrid Cloud', 'Cloud Security', 'Performance Monitoring']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security measures to protect your IT infrastructure.',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Access Control']
  },
  {
    icon: Headphones,
    title: 'IT Support',
    description: '24/7 technical support and maintenance services.',
    features: ['Help Desk', 'Remote Support', 'On-site Service', 'System Updates']
  },
  {
    icon: Code,
    title: 'Software Solutions',
    description: 'Custom software development and integration services.',
    features: ['Custom Development', 'System Integration', 'API Management', 'Software Updates']
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic IT consulting for business growth and optimization.',
    features: ['IT Strategy', 'Digital Transformation', 'Process Optimization', 'Technology Planning']
  }
];

const technologies = {
  infrastructure: ['VMware', 'Cisco', 'Dell EMC', 'HPE', 'NetApp'],
  cloud: ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud'],
  security: ['Fortinet', 'Palo Alto', 'CrowdStrike', 'SentinelOne', 'Okta'],
  monitoring: ['SolarWinds', 'Nagios', 'Zabbix', 'PRTG', 'Datadog'],
  automation: ['Ansible', 'Puppet', 'Chef', 'Terraform', 'Jenkins']
};

const implementationProcess = [
  {
    icon: Cpu,
    title: 'Assessment',
    description: 'Comprehensive evaluation of your IT infrastructure and needs.'
  },
  {
    icon: Cog,
    title: 'Planning',
    description: 'Strategic planning and solution design for your business.'
  },
  {
    icon: Network,
    title: 'Implementation',
    description: 'Seamless deployment of IT solutions and services.'
  },
  {
    icon: BarChart2,
    title: 'Optimization',
    description: 'Continuous monitoring and performance optimization.'
  }
];

export function ITManagementService() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Enterprise IT Management Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Streamline your IT operations with comprehensive management and 
                support services for modern businesses.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#E31937] text-white px-6 py-3 hover:bg-red-700 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-[#E31937] text-[#E31937] px-6 py-3 hover:bg-red-50 transition-colors">
                  Our Services
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Server className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
                <p className="text-gray-600">Enterprise-grade IT infrastructure solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <Cloud className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
                <p className="text-gray-600">Seamless cloud integration and management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Management Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to power your business growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
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

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading technologies and tools we leverage
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, items]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white text-[#E31937] rounded-full text-sm border border-red-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to implementing IT management solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-[#E31937]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < implementationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-red-100 -translate-y-1/2 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[#E31937]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transform Your IT Infrastructure
          </h2>
          <p className="text-red-100 mb-8">
            Get a comprehensive IT assessment and management plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E31937] px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Free IT Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              View Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}