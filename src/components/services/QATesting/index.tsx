import { 
  CheckCircle,
  Bug, 
  Gauge, 
  Shield, 
  Laptop,
  Workflow,
  Settings,
  ClipboardList,
  PenTool,
  Rocket,
  Zap,
  Target
} from 'lucide-react';

const services = [
  {
    icon: Bug,
    title: 'Manual Testing',
    description: 'Comprehensive manual testing services to ensure optimal user experience.',
    features: ['Functional Testing', 'Usability Testing', 'Regression Testing']
  },
  {
    icon: Zap,
    title: 'Automated Testing',
    description: 'Efficient automated testing solutions for faster delivery and reliability.',
    features: ['Selenium Testing', 'API Testing', 'CI/CD Integration']
  },
  {
    icon: Gauge,
    title: 'Performance Testing',
    description: 'In-depth performance analysis and optimization services.',
    features: ['Load Testing', 'Stress Testing', 'Scalability Testing']
  },
  {
    icon: Shield,
    title: 'Security Testing',
    description: 'Comprehensive security assessment and vulnerability testing.',
    features: ['Penetration Testing', 'Security Audit', 'Compliance Testing']
  },
  {
    icon: Laptop,
    title: 'Mobile Testing',
    description: 'Cross-platform mobile application testing services.',
    features: ['iOS Testing', 'Android Testing', 'Cross-browser Testing']
  },
  {
    icon: Workflow,
    title: 'Test Automation Framework',
    description: 'Custom test automation framework development and implementation.',
    features: ['Framework Design', 'Test Scripts', 'Continuous Testing']
  }
];

const technologies = {
  automation: ['Selenium', 'Cypress', 'Playwright', 'Appium', 'TestNG', 'JUnit'],
  performance: ['JMeter', 'K6', 'Gatling', 'LoadRunner', 'Apache AB', 'Locust'],
  security: ['OWASP ZAP', 'Burp Suite', 'Acunetix', 'Netsparker', 'Metasploit', 'Wireshark'],
  monitoring: ['Grafana', 'New Relic', 'Datadog', 'Prometheus', 'ELK Stack', 'Nagios'],
  tools: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Postman', 'SonarQube']
};

const processSteps = [
  {
    icon: ClipboardList,
    title: 'Test Planning',
    description: 'Developing comprehensive test strategies and plans.'
  },
  {
    icon: PenTool,
    title: 'Test Design',
    description: 'Creating detailed test cases and scenarios.'
  },
  {
    icon: Target,
    title: 'Test Execution',
    description: 'Systematic execution of test cases and reporting.'
  },
  {
    icon: Rocket,
    title: 'Quality Assurance',
    description: 'Continuous monitoring and quality improvement.'
  }
];

const QATestingServices = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quality Assurance & Testing Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Ensure your software meets the highest quality standards with our 
                comprehensive testing and quality assurance solutions.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#E31937] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Get Testing Consultation
                </button>
                <button className="border-2 border-[#E31937] text-[#E31937] px-6 py-3 rounded-lg hover:bg-red-50 transition-colors">
                  View Test Reports
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <CheckCircle className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Comprehensive software testing solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <Settings className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Test Automation</h3>
                <p className="text-gray-600">Efficient automated testing processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Testing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive testing solutions to ensure your software's quality and reliability
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing Technology Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use industry-leading testing tools and technologies
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

      {/* Testing Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to ensuring software quality
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
      <section className="py-20 px-4 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Ensure Your Software Quality?
          </h2>
          <p className="text-emerald-100 mb-8">
            Connect with our QA experts to discuss your testing requirements and quality goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E31937] px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Schedule QA Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              View Testing Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QATestingServices;