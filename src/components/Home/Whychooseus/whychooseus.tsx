import { Shield, Zap, Users, Trophy, Clock, HeartHandshake } from 'lucide-react';
import { FeatureCard } from './card';

const features = [
  {
    icon: Shield,
    title: 'Trusted Excellence',
    description: 'Over a decade of proven expertise delivering exceptional results for our clients.',
    delay: 0.1
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Cutting-edge solutions that keep you ahead in the rapidly evolving digital landscape.',
    delay: 0.2
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Dedicated professionals with deep industry knowledge and creative problem-solving skills.',
    delay: 0.3
  },
  {
    icon: Trophy,
    title: 'Award-Winning',
    description: 'Recognized excellence with multiple industry awards and accolades.',
    delay: 0.4
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance ensuring your peace of mind and project success.',
    delay: 0.5
  },
  {
    icon: HeartHandshake,
    title: 'Client-Centric',
    description: 'Your success is our priority, with tailored solutions meeting your unique needs.',
    delay: 0.6
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16"
          style={{
            opacity: 0,
            animation: 'fadeInDown 0.6s ease-out forwards'
          }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-[#E31937] mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Experience excellence through our commitment to innovation, quality, and customer satisfaction.
            Here's what sets us apart from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}