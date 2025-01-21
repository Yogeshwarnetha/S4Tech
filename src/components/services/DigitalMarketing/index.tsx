import { 
  Megaphone, 
  Search, 
  Mail, 
  Share2, 
  BarChart2, 
  Target,
  PenTool,
  Users,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

const marketingServices = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Improve your website visibility and organic search rankings.',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO']
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    description: 'Strategic PPC campaigns across major platforms.',
    features: ['Google Ads', 'Social Media Ads', 'Display Advertising', 'Retargeting']
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engage your audience across social platforms.',
    features: ['Content Strategy', 'Community Management', 'Social Analytics', 'Influencer Marketing']
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Convert leads through targeted email campaigns.',
    features: ['Campaign Design', 'List Management', 'A/B Testing', 'Automation']
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Create valuable content that drives engagement.',
    features: ['Blog Writing', 'Copywriting', 'Video Content', 'Infographics']
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to optimize performance.',
    features: ['Performance Tracking', 'ROI Analysis', 'Custom Reports', 'Conversion Optimization']
  }
];

const platforms = {
  advertising: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'TikTok Ads'],
  social: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube'],
  seo: ['Google Search', 'Google Analytics', 'SEMrush', 'Ahrefs', 'Moz'],
  email: ['Mailchimp', 'HubSpot', 'Klaviyo', 'SendGrid', 'Campaign Monitor'],
  analytics: ['Google Analytics', 'Hotjar', 'Mixpanel', 'Looker', 'Tableau']
};

const marketingProcess = [
  {
    icon: Target,
    title: 'Strategy Development',
    description: 'Creating a customized digital marketing plan aligned with your goals.'
  },
  {
    icon: Users,
    title: 'Audience Analysis',
    description: 'Understanding your target audience and their online behavior.'
  },
  {
    icon: TrendingUp,
    title: 'Campaign Execution',
    description: 'Implementing strategies across chosen digital channels.'
  },
  {
    icon: BarChart2,
    title: 'Optimization & Scaling',
    description: 'Continuous monitoring and improvement of campaign performance.'
  }
];

export function DigitalMarketingServices() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Digital Marketing Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Drive growth and engagement with data-driven digital marketing strategies 
                tailored to your business goals.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#E31937] text-white px-6 py-3  hover:bg-red-700 transition-colors">
                  Get Marketing Analysis
                </button>
                <button className="border-2 border-[#E31937] text-[#E31937] px-6 py-3 hover:bg-red-50 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Megaphone className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Digital Campaigns</h3>
                <p className="text-gray-600">Strategic marketing across digital channels</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <MessageSquare className="h-8 w-8 text-[#E31937] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Social Growth</h3>
                <p className="text-gray-600">Engage and grow your online community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Marketing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to grow your online presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
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

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Marketing Platforms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage top marketing platforms to maximize your reach and ROI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(platforms).map(([category, items]) => (
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

      {/* Marketing Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Marketing Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A data-driven approach to digital marketing success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-[#E31937]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < marketingProcess.length - 1 && (
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
            Ready to Grow Your Digital Presence?
          </h2>
          <p className="text-red-100 mb-8">
            Let's create a customized digital marketing strategy for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E31937] px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
              Get Free Analysis
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              View Success Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}