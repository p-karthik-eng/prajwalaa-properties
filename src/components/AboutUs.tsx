"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the section enters the screen
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#111111] text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden font-sans"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-5">
        <div className="border-r border-gray-400 h-full"></div>
        <div className="border-r border-gray-400 h-full"></div>
        <div className="border-r border-gray-400 h-full"></div>
        <div className="border-r border-gray-400 h-full"></div>
      </div>

      {/* Embedded Server-Safe CSS Scroll Effects */}
      <style dangerouslySetInnerHTML={{__html: `
        .reveal-node {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), 
                      transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .reveal-node.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-800 pb-8">
          <div className={`reveal-node ${isVisible ? 'active' : ''}`} style={{ transitionDelay: '100ms' }}>
            <span className="text-[#d39443] text-sm uppercase tracking-[0.25em] font-medium block mb-2">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide uppercase">
              About <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Prajwaala Properties
              </span>
            </h2>
          </div>
          <p 
            className={`text-gray-300 max-w-xl mt-6 md:mt-0 text-md md:text-lg font-light leading-relaxed md:pl-6 reveal-node ${isVisible ? 'active' : ''}`}
            style={{ transitionDelay: '250ms' }}
          >
            Prajwaala Properties is a renowned real estate company based in Hyderabad, committed to delivering excellence in every project. With over 20+ years of experience in the industry, we have established a reputation for quality, innovation, and customer satisfaction.
          </p>
        </div>

        {/* --- CONTENT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: The Foundation Statement */}
          <div 
            className={`lg:col-span-5 flex flex-col justify-between bg-[#161616] p-8 md:p-10 border-l-4 border-[#d39443] reveal-node ${isVisible ? 'active' : ''}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-[#d39443] tracking-wide">
                Built on Absolute Integrity
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Derived from the essence of illumination and cosmic fire, our company represents an unwavering commitment to brilliance in construction standards. Every structural blueprint we draft balances structural physics with elegant baseline aesthetics.
              </p>
              <p className="text-gray-400 text-sm font-light">
                From foundation depth calculations to micro-finish details on expansive high-rise elevations, our structural philosophy guarantees investment permanence and customer trust.
              </p>
            </div>

            {/* Micro Stats Row inside Left Column */}
            <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-gray-800">
              <div>
                <span className="block text-3xl font-bold font-serif text-white">20+ Yrs</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">Industry Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-bold font-serif text-[#d39443]">M30+</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">Concrete Standard</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Pillars Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pillar 1 */}
            <div 
              className={`bg-[#1c1c1c] p-8 flex flex-col justify-between hover:bg-[#222222] transition-colors duration-300 reveal-node ${isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '500ms' }}
            >
              <div>
                <div className="text-xs font-mono text-[#d39443] mb-4">[ PILLAR 01 ]</div>
                <h4 className="text-xl font-serif mb-3 tracking-wide">Uncompromised Quality</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Utilizing heavy-gauge reinforced frameworks and verified premium materials, ensuring a standard of luxury that stands securely through generations.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div 
              className={`bg-[#1c1c1c] p-8 flex flex-col justify-between hover:bg-[#222222] transition-colors duration-300 reveal-node ${isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '600ms' }}
            >
              <div>
                <div className="text-xs font-mono text-[#d39443] mb-4">[ PILLAR 02 ]</div>
                <h4 className="text-xl font-serif mb-3 tracking-wide">Forward Innovation</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Configuring modern, open-plan layout dynamics optimized completely for cross-ventilation, abundant natural illumination, and premium spatial architecture.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div 
              className={`bg-[#1c1c1c] p-8 flex flex-col justify-between hover:bg-[#222222] transition-colors duration-300 reveal-node ${isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '700ms' }}
            >
              <div>
                <div className="text-xs font-mono text-[#d39443] mb-4">[ PILLAR 03 ]</div>
                <h4 className="text-xl font-serif mb-3 tracking-wide">Customer Satisfaction</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Honoring clear operational transparency, strictly seamless delivery timelines, and dedicated post-handover customer care infrastructure.
                </p>
              </div>
            </div>

            {/* Design Callout Graphic Square */}
            <div 
              className={`bg-[#d39443] p-8 flex flex-col justify-center items-start text-[#111111] reveal-node ${isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '800ms' }}
            >
              <span className="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">Our Creed</span>
              <p className="font-serif text-lg font-medium leading-snug">
                "Form follows purpose, but excellence builds long-lasting legacies."
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}