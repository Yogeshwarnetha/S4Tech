import { ArrowUpRight, MapPin, Timer, Heart, Laptop, Globe, Coffee, Users, Zap, LucideIcon } from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  department: string;
}

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function JobCard({ title, location, type, department }: JobCardProps) {
  return (
    <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-sm font-medium text-red-500 mb-2 block">{department}</span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span className="text-sm">{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Timer size={16} />
              <span className="text-sm">{type}</span>
            </div>
          </div>
        </div>
        <ArrowUpRight className="text-gray-400 group-hover:text-red-600 transition-colors" />
      </div>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-100">
      <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-red-600" size={24} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden my-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Team working together"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team of Innovators
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We're building the future of software development, and we're looking for exceptional talent to join us on this journey.
            </p>
            <a
              href="#openings"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-red-600 hover:bg-red-800 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={Heart}
              title="Passion for Excellence"
              description="We strive for excellence in everything we do, from code quality to client satisfaction."
            />
            <ValueCard
              icon={Users}
              title="Collaborative Spirit"
              description="We believe great things happen when we work together, share knowledge, and support each other."
            />
            <ValueCard
              icon={Globe}
              title="Global Impact"
              description="Our solutions reach millions of users worldwide, making a real difference in people's lives."
            />
            <ValueCard
              icon={Zap}
              title="Innovation First"
              description="We embrace new technologies and methodologies to stay ahead of the curve."
            />
            <ValueCard
              icon={Coffee}
              title="Work-Life Balance"
              description="We value personal time and believe that balanced employees are happy employees."
            />
            <ValueCard
              icon={Laptop}
              title="Remote-Friendly"
              description="Work from anywhere in the world with our flexible remote work policy."
            />
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our team and help build the next generation of software solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <JobCard
              title="Senior Full Stack Developer"
              location="Remote"
              type="Full-time"
              department="Engineering"
            />
            <JobCard
              title="UI/UX Designer"
              location="New York, NY"
              type="Full-time"
              department="Design"
            />
            <JobCard
              title="DevOps Engineer"
              location="Remote"
              type="Full-time"
              department="Operations"
            />
            <JobCard
              title="Product Manager"
              location="San Francisco, CA"
              type="Full-time"
              department="Product"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
            We offer competitive benefits and a great work environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Salary</h3>
              <p className="text-gray-600">Industry-leading compensation packages with equity options</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Health & Wellness</h3>
              <p className="text-gray-600">Comprehensive health insurance and wellness programs</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learning Budget</h3>
              <p className="text-gray-600">Annual budget for courses, conferences, and books</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Remote Work</h3>
              <p className="text-gray-600">Flexible work arrangements and home office setup</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Events</h3>
              <p className="text-gray-600">Regular team building and social events</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Latest Tech</h3>
              <p className="text-gray-600">Access to cutting-edge tools and technologies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;