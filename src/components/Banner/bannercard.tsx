import { ReactNode } from 'react';

interface BannerCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BannerCard = ({ icon, title, description }: BannerCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-colors group">
      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-white text-lg font-semibold mt-4 mb-2">
        {title}
      </h3>
      <p className="text-gray-300 text-sm">
        {description}
      </p>
    </div>
  );
};

export default BannerCard;