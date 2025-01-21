import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Cloud,
  FileKey,
  ShieldCheck,
  Network,
  HardDrive
} from 'lucide-react';

const securityServices = [
  {
    icon: Shield,
    title: 'Network Security',
    description: 'Protect your network infrastructure from unauthorized access and cyber threats.',
    features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Monitoring']
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Secure sensitive data with advanced encryption and access controls.',
    features: ['Data Encryption', 'Access Management', 'DLP Solutions', 'Secure Storage']
  },
  {
    icon: Eye,
    title: 'Security Assessment',
    description: 'Comprehensive evaluation of your security posture and vulnerabilities.',
    features: ['Penetration Testing', 'Vulnerability Scanning', 'Risk Assessment', 'Compliance Audit']
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Rapid response and recovery from security incidents and breaches.',
    features: ['24/7 Monitoring', 'Threat Detection', 'Incident Investigation', 'Recovery Planning']
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Secure cloud infrastructure and applications with advanced protection.',
    features: ['Cloud Assessment', 'Security Configuration', 'Access Control', 'Data Protection']
  },
  {
    icon: FileKey,
    title: 'Identity Management',
    description: 'Robust identity and access management solutions.',
    features: ['Multi-factor Auth', 'Single Sign-On', 'Access Governance', 'Identity Verification']
  }
];

const technologies = {
  network: ['Cisco', 'Palo Alto', 'Fortinet', 'Juniper', 'CheckPoint'],
  endpoint: ['CrowdStrike', 'Carbon Black', 'Symantec', 'McAfee', 'SentinelOne'],
  monitoring: ['Splunk', 'QRadar', 'LogRhythm', 'AlienVault', 'Nagios'],
  identity: ['Okta', 'Ping Identity', 'ForgeRock', 'Azure AD', 'Auth0'],
  cloud: ['AWS Security', 'Azure Security', 'GCP Security', 'CloudFlare', 'Akamai']
};

const securityProcess = [
  {
    icon: Eye,
    title: 'Assessment',
    description: 'Comprehensive security evaluation and gap analysis.'
  },
  {
    icon: Shield,
    title: 'Implementation',
    description: 'Deploying robust security controls and solutions.'
  },
  {
    icon: AlertTriangle,
    title: 'Monitoring',
    description: '24/7 security monitoring and threat detection.'
  },
  {
    icon: ShieldCheck,
    title: 'Management',
    description: 'Ongoing security maintenance and optimization.'
  }
];

export function CyberSecurityServices() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Cyber Security Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Protect your digital assets with advanced security solutions and 
                24/7 threat monitoring.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#E31937] text-white px-6 py-3 hover:bg-red-700 transition-colors">
                  Security Assessment
                </button>
                <button className="border-2 border-[#E31937] text-[#E31937] px-6 py-3 hover:bg-red-50 transition-colors">
                  View Solutions
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Network className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Network Security</h3>
                <p className="text-gray-600">Advanced threat protection for your infrastructure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <HardDrive className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Security</h3>
                <p className="text-gray-600">Comprehensive data protection solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive cyber security solutions to protect your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
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

      {/* Security Tools Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading security tools and platforms we leverage
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

      {/* Security Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Implementation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to implementing robust security solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-[#E31937]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < securityProcess.length - 1 && (
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
            Secure Your Digital Assets Today
          </h2>
          <p className="text-red-100 mb-8">
            Get a comprehensive security assessment and customized protection plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E31937] px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Free Security Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              View Security Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}