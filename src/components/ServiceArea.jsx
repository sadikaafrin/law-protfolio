import React from 'react';

export default function ServiceArea() {
  const services = [
    {
      title: 'Real Estate',
      subtitle: 'AST WI',
      description: 'AND TESTAMENT',
    },
    {
      title: 'Estate',
      subtitle: 'Estate',
      description: 'Planning & Administration',
    },
    {
      title: 'Commercial',
      subtitle: 'Commercial',
      description: 'Business & Corporate Law',
    },
    {
      title: 'Litigation',
      subtitle: 'Litigation',
      description: 'Dispute Resolution',
    },
  ];

  return (
    <div id="OurServices" className="font-['Open_Sans']  w-full relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gray-50 py-20 px-4 md:px-8 normal-case">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Service Areas
          </h2>
          <p className="text-gray-600  max-w-2xl mx-auto">
            Comprehensive legal expertise tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="p-6">
                {/* Icon/Visual Element */}
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#fb2c36] transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-[#fb2c36] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#fb2c36] mb-1">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-semibold text-[#fb2c36] uppercase tracking-wide mb-2">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative line */}
                <div className="mt-4 w-8 h-0.5 bg-gray-200 group-hover:w-12 group-hover:bg-[#fb2c36] transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}