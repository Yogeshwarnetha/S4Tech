import { ArrowRight } from "lucide-react"
import Banner from "../Banner/banner"
import { ServicesCarousel } from "./services/servicecarousel"
import { GetInTouch } from "./GetInTouch/getinTouch"
import { WhyChooseUs } from "./Whychooseus/whychooseus"

const Home = () => {
  return (
    <div>
      <Banner/>

      <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <div className="w-20 h-1 bg-red-600"></div>
            <p className="text-gray-600 leading-relaxed">
              We're a forward-thinking company dedicated to transforming ideas into reality. 
              With years of experience and a passion for innovation, we help businesses 
              thrive in the digital age through cutting-edge solutions and strategic 
              expertise.
            </p>
            <button 
              onClick={() => window.location.href = '/about'}
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg
                hover:bg-red-700 transition-colors duration-200 group"
            >
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                size={20} 
              />
            </button>
          </div>
        </div>
      </div>
    </section>
    <WhyChooseUs />
    <ServicesCarousel />
    <GetInTouch />
    </div>
  )
}

export default Home
