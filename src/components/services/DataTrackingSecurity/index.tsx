import { 
  Database, 
  Shield, 
  LineChart, 
 
  FileSearch,
  UserCheck,
  AlertCircle,
  BarChart2,
  FileText,
  Settings
} from 'lucide-react';

const dataServices = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'Enterprise-grade security for sensitive data across all touchpoints.',
    features: ['Encryption at Rest', 'Data Masking', 'Access Controls', 'Data Classification']
  },
  {
    icon: LineChart,
    title: 'Real-time Monitoring',
    description: 'Continuous tracking and analysis of data movement and access patterns.',
    features: ['Activity Tracking', 'Behavior Analysis', 'Anomaly Detection', 'Audit Logs']
  },
  {
    icon: FileSearch,
    title: 'Data Discovery',
    description: 'Automated scanning and classification of sensitive information.',
    features: ['PII Detection', 'Data Mapping', 'Risk Assessment', 'Compliance Scanning']
  },
  {
    icon: UserCheck,
    title: 'Access Management',
    description: 'Granular control over data access and user permissions.',
    features: ['Role-based Access', 'Permission Auditing', 'User Authentication', 'Session Control']
  },
  {
    icon: AlertCircle,
    title: 'Breach Prevention',
    description: 'Proactive measures to prevent data leaks and unauthorized access.',
    features: ['DLP Integration', 'Threat Detection', 'Policy Enforcement', 'Incident Response']
  },
  {
    icon: FileText,
    title: 'Compliance Management',
    description: 'Ensure adherence to data protection regulations and standards.',
    features: ['GDPR Compliance', 'HIPAA', 'PCI DSS', 'SOX Compliance']
  }
];

const technologies = {
  protection: ['Varonis', 'Digital Guardian', 'Forcepoint', 'McAfee DLP', 'Symantec DLP'],
  monitoring: ['Splunk', 'Elastic Security', 'Exabeam', 'IBM QRadar', 'LogRhythm'],
  discovery: ['BigID', 'Spirion', 'Ground Labs', 'OneTrust', '1touch.io'],
  compliance: ['OneTrust', 'MetricStream', 'RSA Archer', 'ServiceNow GRC', 'IBM OpenPages'],
  encryption: ['Thales', 'Microsoft Azure RMS', 'Virtru', 'Voltage', 'PKWare']
};

const implementationProcess = [
  {
    icon: FileSearch,
    title: 'Discovery',
    description: 'Identify and classify sensitive data across your organization.'
  },
  {
    icon: Settings,
    title: 'Configuration',
    description: 'Set up protection measures and monitoring systems.'
  },
  {
    icon: Shield,
    title: 'Implementation',
    description: 'Deploy security controls and tracking mechanisms.'
  },
  {
    icon: BarChart2,
    title: 'Monitoring',
    description: 'Continuous tracking and compliance verification.'
  }
];

export function DataTrackingServices() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Advanced Data Tracking & Protection
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Secure your sensitive data with comprehensive tracking, monitoring, 
                and protection solutions.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#E31937] text-white px-6 py-3 hover:bg-red-700 transition-colors">
                  Data Security Assessment
                </button>
                <button className="border-2 border-[#E31937] text-[#E31937] px-6 py-3 hover:bg-red-50 transition-colors">
                  View Features
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Database className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                <p className="text-gray-600">Enterprise-grade data security solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <LineChart className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">Continuous monitoring and analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive data protection and tracking solutions for your enterprise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataServices.map((service, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading data security and tracking platforms
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
              Our systematic approach to implementing data security solutions
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
            Protect Your Sensitive Data
          </h2>
          <p className="text-red-100 mb-8">
            Get a comprehensive data security assessment and protection plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E31937] px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Free Data Assessment
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