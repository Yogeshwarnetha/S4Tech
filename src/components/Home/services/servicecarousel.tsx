import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ServiceCard } from './servicecard';
import { Code2, Palette, LineChart, Globe2, Shield, MessageSquare } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    title: 'Web Development',
    description: 'Crafting exceptional web applications with cutting-edge technologies and industry best practices.',
    icon: Code2
  },
  {
    title: 'UI/UX Design',
    description: 'Creating stunning, intuitive interfaces that deliver memorable user experiences.',
    icon: Palette
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic, data-driven campaigns that amplify your brand and drive measurable results.',
    icon: LineChart
  },
  {
    title: 'Global Solutions',
    description: 'Scalable, international solutions adapted for diverse markets and cultures.',
    icon: Globe2
  },
  {
    title: 'Cybersecurity',
    description: 'Robust security solutions protecting your digital assets and customer data.',
    icon: Shield
  },
  {
    title: 'Consultation',
    description: 'Expert guidance to navigate your digital transformation journey successfully.',
    icon: MessageSquare
  }
];

export function ServicesCarousel() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover our comprehensive range of services designed to help your business thrive in the digital age
          </p>
        </div>

        <div className="services-carousel-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="!pb-14"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}