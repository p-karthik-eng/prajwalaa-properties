import React from 'react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const features: FeatureItem[] = [
    {
      id: "01",
      title: "Legacy of Excellence",
      description: "With a legacy of over two decades, we bring a wealth of experience and expertise to every project, ensuring uncompromising quality and value."
    },
    {
      id: "02",
      title: "Customer-Centric Approach",
      description: "We prioritize our customers' needs and aspirations, guiding them through a seamless and rewarding real estate journey."
    },
    {
      id: "03",
      title: "Innovation and Design",
      description: "Embracing innovation and contemporary design, we create spaces that inspire and elevate living standards, while respecting the environment."
    }
  ];

  return (
    <section className="w-full bg-white text-[#111111] py-20 px-6 md:px-16 lg:px-24 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple Centered Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d39443] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
            The Prajwaala Advantage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide uppercase text-[#1c1c1c]">
            Why Choose <span className="font-bold">Prajwaala Properties?</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#d39443] mx-auto mt-4"></div>
        </div>

        {/* Clean, Uniform 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col bg-white border-t-2 border-gray-100 hover:border-[#d39443] pt-6 transition-colors duration-300 group cursor-default"
            >
              {/* Card Header with index indicator */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-mono text-xs font-bold text-[#d39443]">
                  {item.id}.
                </span>
                <h3 className="text-xl font-serif font-medium text-[#1c1c1c] tracking-wide group-hover:text-[#d39443] transition-colors duration-200">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}