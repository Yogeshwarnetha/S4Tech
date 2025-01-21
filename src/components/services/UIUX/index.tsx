import { 
  Palette, 
  Smartphone, 
  Layout, 
  Globe, 
  PenTool,
  Layers,
  Search,
  Rocket,
  Zap,
  Monitor
} from 'lucide-react';

const designServices = [
  {
    icon: Layout,
    title: 'UI Design',
    description: 'Creating intuitive and beautiful user interfaces for digital products.',
    features: ['Wireframing', 'Visual Design', 'Design Systems', 'Interactive Prototypes']
  },
  {
    icon: Smartphone,
    title: 'UX Design',
    description: 'Crafting seamless user experiences across all platforms.',
    features: ['User Research', 'Information Architecture', 'User Flows', 'Usability Testing']
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Developing distinctive and memorable brand identities.',
    features: ['Logo Design', 'Color Systems', 'Typography', 'Brand Guidelines']
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Building responsive and modern web experiences.',
    features: ['Responsive Design', 'Landing Pages', 'E-commerce', 'Web Applications']
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Creating impactful visual content for all mediums.',
    features: ['Marketing Materials', 'Social Media', 'Print Design', 'Illustrations']
  },
  {
    icon: Layers,
    title: 'Motion Design',
    description: 'Bringing designs to life with animation and interaction.',
    features: ['UI Animation', 'Motion Graphics', 'Micro-interactions', 'Video Production']
  }
];

const designTools = {
  design: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
  graphics: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Blender'],
  prototyping: ['Framer', 'ProtoPie', 'Origami Studio', 'Webflow', 'Maze'],
  collaboration: ['Zeplin', 'Abstract', 'Miro', 'Notion', 'Slack'],
  development: ['HTML/CSS', 'JavaScript', 'React', 'Vue', 'Tailwind CSS']
};

const designProcess = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Research and understand user needs and business goals.'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Create intuitive and beautiful design solutions.'
  },
  {
    icon: Layout,
    title: 'Prototype',
    description: 'Build interactive prototypes and test with users.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deploy and monitor design performance.'
  }
];

export function UIUXBrandService() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Digital Presence
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Create exceptional user experiences and memorable brand identities 
                that drive engagement and growth.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#E31937] text-white px-6 py-3 hover:bg-red-700 transition-colors">
                  Start Your Project
                </button>
                <button className="border-2 border-[#E31937] text-[#E31937] px-6 py-3 hover:bg-red-50 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Monitor className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-600">Beautiful and functional digital experiences</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <Zap className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
                <p className="text-gray-600">Distinctive and memorable branding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions to elevate your digital presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
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

      {/* Tools Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Tools & Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading tools and technologies we use to create exceptional designs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(designTools).map(([category, items]) => (
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to creating exceptional design solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-[#E31937]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < designProcess.length - 1 && (
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
            Ready to Transform Your Brand?
          </h2>
          <p className="text-red-100 mb-8">
            Let's create something amazing together. Start your design journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E31937] px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}