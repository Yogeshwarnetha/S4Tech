import { 
  Brain,
  Bot, 
  BarChart3, 
  Search,
  Network,
  CloudCog,
  ClipboardList,
  PenTool,
  Rocket,
  Microscope,
  Cpu
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Deep Learning Solutions',
    description: 'Custom neural networks and deep learning models for complex problem-solving.',
    features: ['Neural Networks', 'Transfer Learning', 'Model Optimization']
  },
  {
    icon: Bot,
    title: 'AI Applications',
    description: 'Intelligent applications powered by cutting-edge AI technologies.',
    features: ['Natural Language Processing', 'Computer Vision', 'Conversational AI']
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Data-driven insights and forecasting for business intelligence.',
    features: ['Time Series Analysis', 'Risk Assessment', 'Market Predictions']
  },
  {
    icon: Search,
    title: 'Machine Learning',
    description: 'Custom ML models for classification, regression, and clustering.',
    features: ['Supervised Learning', 'Unsupervised Learning', 'Model Deployment']
  },
  {
    icon: Network,
    title: 'AI Infrastructure',
    description: 'Scalable infrastructure setup for AI/ML workloads.',
    features: ['GPU Computing', 'Distributed Training', 'Model Serving']
  },
  {
    icon: CloudCog,
    title: 'MLOps',
    description: 'End-to-end ML lifecycle management and automation.',
    features: ['Model Monitoring', 'Automated Pipeline', 'Version Control']
  }
];

const technologies = {
  frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'JAX', 'FastAI'],
  cloud: ['AWS SageMaker', 'Google AI Platform', 'Azure ML', 'Vertex AI', 'MLflow', 'Kubeflow'],
  languages: ['Python', 'R', 'Julia', 'CUDA', 'C++', 'JAX'],
  tools: ['Jupyter', 'DVC', 'Weights & Biases', 'Ray', 'Optuna', 'Streamlit'],
  infrastructure: ['Docker', 'Kubernetes', 'NVIDIA CUDA', 'TPU', 'Apache Spark', 'Airflow']
};

const processSteps = [
  {
    icon: ClipboardList,
    title: 'Problem Definition',
    description: 'Understanding your AI needs and defining clear objectives.'
  },
  {
    icon: PenTool,
    title: 'Data Strategy',
    description: 'Data collection, preprocessing, and architecture planning.'
  },
  {
    icon: Microscope,
    title: 'Model Development',
    description: 'Iterative model development with continuous evaluation.'
  },
  {
    icon: Rocket,
    title: 'Deployment & Scaling',
    description: 'Production deployment with monitoring and optimization.'
  }
];

const MLAIServices = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Machine Learning & AI Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your business with state-of-the-art AI and ML solutions 
                that drive innovation and deliver measurable results.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#E31937] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Schedule AI Consultation
                </button>
                <button className="border-2 border-[#E31937] text-[#E31937] px-6 py-3 rounded-lg hover:bg-red-50 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Brain className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
                <p className="text-gray-600">Advanced neural networks for complex tasks</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <Cpu className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
                <p className="text-gray-600">Custom AI applications for your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI & ML Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to solve complex business challenges
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technology Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge AI technologies and frameworks
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to developing AI solutions
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
      <section className="py-20 px-4 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-red-100 mb-8">
            Connect with our AI experts to explore how machine learning can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E31937] px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Get AI Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Explore AI Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MLAIServices;