import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
        transform hover:-translate-y-1 group"
      style={{
        opacity: 0,
        animation: `fadeInUp 0.6s ease-out ${delay}s forwards`
      }}
    >
      <div className="relative mb-6">
        <div className="w-14 h-14 bg-red-50 rounded-lg absolute -top-2 -left-2 group-hover:scale-110 transition-transform duration-300" />
        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-[#E31937] rounded-lg relative z-10 
          flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
          <Icon className="text-white" size={24} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}