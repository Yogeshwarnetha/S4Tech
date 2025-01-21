import { ArrowRight } from 'lucide-react';
import Stats from './stats';

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white-950 via-white-900 to-white-950 animate-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-[90vh] flex items-center ">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 mt-12">
            <h1 className="text-4xl sm:text-6xl font-bold text-black mb-8 leading-tight">
              <span className="inline-block animate-fadeIn">Innovate.</span>{' '}
              <span className="inline-block animate-fadeIn animation-delay-200">Transform.</span>{' '}
              <span className="inline-block animate-fadeIn animation-delay-400">Succeed.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-black-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fadeIn animation-delay-600">
              Empowering businesses with cutting-edge IT solutions that drive growth, 
              enhance efficiency, and secure your digital future.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 animate-fadeIn animation-delay-800">
              <button className="group bg-gradient-to-r from-red-700 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-black/100 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black/100  transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>

          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Banner;