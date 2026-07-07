import React from 'react';

interface Principle {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export default function KeyPrinciples() {
  const principles: Principle[] = [
    {
      id: "01",
      title: "Transparency",
      description: "We believe in transparent communication and operations, providing clear data at every single stage.",
      features: ["Clear communication", "Accurate information", "Step-by-step updates"]
    },
    {
      id: "02",
      title: "Ethical Conduct",
      description: "Integrity is at the core of our business philosophy. We maintain complete trust with partners.",
      features: ["Adhere to standards", "Honest operations", "Stakeholder trust"]
    },
    {
      id: "03",
      title: "Compliance",
      description: "We stay updated with all regulatory frameworks and standards, ensuring complete security.",
      features: ["Regulatory updates", "Industry standards", "Secure transactions"]
    },
    {
      id: "04",
      title: "Continuous Improvement",
      description: "We are dedicated to learning and adopting cutting-edge innovative approaches.",
      features: ["Continuous learning", "Best practices", "Superior results"]
    }
  ];

  // Duplicate the array to make the infinite horizontal marquee run seamlessly
  const duplicatedPrinciples = [...principles, ...principles, ...principles];

  return (
    <section className="w-full bg-[#fcfcfc] text-[#111111] py-20 overflow-hidden font-sans border-t border-gray-100">
      <div className="w-full mx-auto">
        
        {/* --- CENTERED TOP HEADING LAYOUT --- */}
        <div className="text-center mb-16 px-6 flex flex-col items-center max-w-3xl mx-auto">
          {/* Highlight Badge */}
          <div className="inline-flex items-center space-x-1.5 bg-[#d39443]/10 text-[#d39443] px-4 py-1.5 rounded-full mb-4">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-bold tracking-wide uppercase">Core Pillars</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#1c1c1c] leading-tight">
            Key Principles <span className="font-bold text-[#d39443]">We Follow</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-500 text-sm md:text-base mt-4 font-light leading-relaxed max-w-2xl">
            The structural foundational ethics guiding every blueprint, deployment strategy, and customer interaction.
          </p>
        </div>

        {/* --- SERVER-SAFE INJECTED CSS FOR SLOW CAROUSEL LOOP --- */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes principlesMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(calc(-33.333% - 16px)); }
          }
          .principles-marquee-track {
            display: flex;
            gap: 32px;
            animation: principlesMarquee 35s linear infinite;
          }
          .principles-marquee-track:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* --- HORIZONTAL MARQUEE VIEWPORT FRAME --- */}
        <div className="relative w-full overflow-hidden py-4">
          
          {/* Rolling Track */}
          <div className="principles-marquee-track shrink-0">
            {duplicatedPrinciples.map((item, index) => {
              // Smooth alternating pastel/tint colors matching the screenshot palette
              const backgroundColors = [
                "bg-[#f5f3ff]", // Smooth Lavender Tint
                "bg-[#fffbeb]", // Smooth Light Amber Tint
                "bg-[#f0fdf4]", // Smooth Mint Tint
                "bg-[#f8fafc]"  // Smooth Slate Tint
              ];
              const cardBg = backgroundColors[index % backgroundColors.length];

              return (
                <div 
                  key={`${item.id}-${index}`}
                  className={`w-[300px] md:w-[360px] shrink-0 group relative p-8 ${cardBg} border border-black/5 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1 flex flex-col justify-between whitespace-normal`}
                >
                  {/* Top Corner Structural Indicator */}
                  <span className="absolute right-6 top-5 font-serif text-3xl font-bold text-gray-300/60 group-hover:text-[#d39443]/30 transition-colors duration-300">
                    {item.id}
                  </span>

                  <div>
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1c1c1c] tracking-wide mb-3 group-hover:text-[#d39443] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Icon List Layout Accents */}
                  <ul className="space-y-2.5 pt-4 border-t border-black/5 mt-auto">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2 text-xs md:text-sm text-gray-700">
                        {/* Amber Check Badge */}
                        <svg className="w-4 h-4 text-[#d39443] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Luxury Border Mask Vignettes */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#fcfcfc] to-transparent pointer-events-none z-20 hidden md:block" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#fcfcfc] to-transparent pointer-events-none z-20 hidden md:block" />

        </div>

      </div>
    </section>
  );
}