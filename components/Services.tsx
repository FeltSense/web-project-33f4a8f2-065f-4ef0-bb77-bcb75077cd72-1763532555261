'use client';

import { TrendingUp, Star, Users, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Star className="h-12 w-12 text-blue-600" />,
      title: 'Rating & Reviews',
      description: 'Share your honest opinions and help others make informed decisions with our comprehensive rating system.',
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: 'Trending Products',
      description: 'Stay ahead of the curve with real-time trending data showing what's hot in the retail world right now.',
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Social Discovery',
      description: 'Connect with like-minded shoppers, follow their recommendations, and discover products together.',
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: 'Expert Curation',
      description: 'Access carefully curated collections from industry experts and top-rated community members.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Why Choose RetailHub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the features that make us the ultimate destination for smart shoppers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}