import React from 'react';

interface Principle {
  id: string;
  title: string;
  description: string;
}

export default function KeyPrinciples() {
  const principles: Principle[] = [
    {
      id: "01",
      title: "Transparency",
      description: "We believe in transparent communication and operations, providing our customers with clear and accurate information at every step of the process."
    },
    {
      id: "02",
      title: "Ethical Conduct",
      description: "Integrity is at the core of our business philosophy. We adhere to ethical standards and practices, maintaining trust and confidence with our clients, partners, and stakeholders."
    },
    {
      id: "03",
      title: "Compliance",
      description: "We stay updated with regulatory requirements and industry standards, ensuring full compliance in all our dealings and transactions."
    },
    {
      id: "04",
      title: "Continuous Improvement",
      description: "We are dedicated to continuous learning and improvement, adopting best practices and innovative approaches to deliver superior results."
    }
  ];

  return (
    <section className="w-full bg-white text-[#111111] py-24 px-6 md:px-16 lg:px-24 font-sans border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Side: Sticky Architectural Title Anchor */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-[2px] bg-[#d39443]"></span>
            <span className="text-[#d39443] text-xs uppercase tracking-[0.3em] font-bold">
              Core Pillars
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide uppercase text-[#1c1c1c] leading-tight">
            Key Principles <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1c1c1c] to-gray-400">
              We Follow
            </span>
          </h2>
          <p className="text-gray-400 text-sm font-light max-w-xs pt-2 hidden lg:block">
            The structural foundational ethics guiding every blueprint, deployment strategy, and customer interaction.
          </p>
        </div>

        {/* Right Side: Interlocking Geometric Presentation Stack */}
        <div className="lg:col-span-8 space-y-6">
          {principles.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative p-8 md:p-10 border border-gray-100 bg-[#fafafa]/40 hover:bg-white transition-all duration-500 rounded-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] ${
                // Gives every second card a modern architectural horizontal layout indent on desktop
                index % 2 === 1 ? 'lg:ml-12' : 'lg:mr-12'
              }`}
            >
              {/* Giant Translucent Number Background Mask */}
              <span className="absolute right-6 top-4 font-serif text-7xl md:text-8xl font-black text-gray-200/40 select-none pointer-events-none transition-colors duration-300 group-hover:text-[#d39443]/10">
                {item.id}
              </span>

              <div className="relative z-10">
                {/* Micro Category Tag */}
                <div className="text-[10px] font-mono tracking-[0.2em] font-bold text-[#d39443] mb-3 uppercase">
                  // Blueprint Spec_{item.id}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-semibold text-[#1c1c1c] tracking-wide mb-3 transition-colors duration-300 group-hover:text-[#d39443]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              {/* Minimalist Bottom Border Loading Animation Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r from-transparent via-[#d39443]/40 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}