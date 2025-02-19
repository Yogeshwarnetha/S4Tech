import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from React Router

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string; // Add path prop
}

export function ServiceCard({ title, description, icon: Icon, path }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group w-full sm:w-full md:max-w-lg lg:max-w-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-all duration-300 group-hover:bg-red-100"></div>
      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-[#E31937] rounded-2xl flex items-center justify-center mb-6 transform rotate-3 group-hover:rotate-6 transition-all duration-300">
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      <Link
        to={path} // Use the path prop for navigation
        className="text-[#E31937] font-semibold flex items-center hover:text-red-700 transition-colors"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
