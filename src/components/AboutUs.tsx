'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [concreteCount, setConcreteCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Custom Image Loader to append cache-busting strings seamlessly
  const cacheBustLoader = ({ src }: { src: string }) => {
    return `${src}?v=prajwalaa-2026`;
  };

  useEffect(() => {
    // Smooth frame-by-frame count animation handler
    const animateCount = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Kick off counts only once when section is revealed
          animateCount(20, setYearsCount, 2000);
          animateCount(30, setConcreteCount, 2000);
        }
      },
      { threshold: 0.15 }
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
      className="relative w-full bg-white text-[#111111] py-14 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden font-sans border-t border-zinc-100"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.03]">
        <div className="border-r border-zinc-900 h-full"></div>
        <div className="border-r border-zinc-900 h-full"></div>
        <div className="border-r border-zinc-900 h-full"></div>
        <div className="border-r border-zinc-900 h-full"></div>
      </div>

      {/* Embedded 4-Step One-by-One Animation Loop */}
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

        /* Base properties for animated right-side cards */
        .stagger-loop-card {
          background-color: #f9fafb;
          color: #111111;
          border: 1px solid #e4e4e7;
          transition: background-color 0.6s ease, color 0.6s ease, border-color 0.6s ease, transform 0.6s ease;
        }

        /* Dynamic Title custom hooks */
        .stagger-loop-card h4 { transition: color 0.6s ease; color: #d39443; }
        .stagger-loop-card p { transition: color 0.6s ease; color: #71717a; }

        /* Keyframes for Card 1 Active (0% - 25%) */
        @keyframes stepOne {
          0%, 25% { background-color: #d39443; border-color: transparent; transform: scale(1.02); }
          0%, 25% { color: #111111; }
          30%, 100% { background-color: #f9fafb; border-color: #e4e4e7; transform: scale(1); }
        }
        .stagger-loop-card h4.title-1 { color: #111111; animation: titleOneText 12s infinite; }
        .stagger-loop-card p.desc-1 { color: rgba(17, 17, 17, 0.8); animation: descOneText 12s infinite; }
        @keyframes titleOneText { 0%, 25% { color: #111111; } 30%, 100% { color: #d39443; } }
        @keyframes descOneText { 0%, 25% { color: rgba(17, 17, 17, 0.8); } 30%, 100% { color: #71717a; } }

        /* Keyframes for Card 2 Active (25% - 50%) */
        @keyframes stepTwo {
          0%, 24% { background-color: #f9fafb; border-color: #e4e4e7; transform: scale(1); }
          25%, 50% { background-color: #d39443; border-color: transparent; transform: scale(1.02); }
          25%, 50% { color: #111111; }
          51%, 100% { background-color: #f9fafb; border-color: #e4e4e7; transform: scale(1); }
        }
        .stagger-loop-card h4.title-2 { color: #d39443; animation: titleTwoText 12s infinite; }
        .stagger-loop-card p.desc-2 { color: #71717a; animation: descTwoText 12s infinite; }
        @keyframes titleTwoText { 0%, 24% { color: #d39443; } 25%, 50% { color: #111111; } 51%, 100% { color: #d39443; } }
        @keyframes descTwoText { 0%, 24% { color: #71717a; } 25%, 50% { color: rgba(17, 17, 17, 0.8); } 51%, 100% { color: #71717a; } }

        /* Keyframes for Card 3 Active (50% - 75%) */
        @keyframes stepThree {
          0%, 49% { background-color: #f9fafb; border-color: #e4e4e7; transform: scale(1); }
          50%, 75% { background-color: #d39443; border-color: transparent; transform: scale(1.02); }
          50%, 75% { color: #111111; }
          76%, 100% { background-color: #f9fafb; border-color: #e4e4e7; transform: scale(1); }
        }
        .stagger-loop-card h4.title-3 { color: #d39443; animation: titleThreeText 12s infinite; }
        .stagger-loop-card p.desc-3 { color: #71717a; animation: descThreeText 12s infinite; }
        @keyframes titleThreeText { 0%, 49% { color: #d39443; } 50%, 75% { color: #111111; } 76%, 100% { color: #d39443; } }
        @keyframes descThreeText { 0%, 49% { color: #71717a; } 50%, 75% { color: rgba(17, 17, 17, 0.8); } 76%, 100% { color: #71717a; } }

        /* Keyframes for Creed Card 4 Active (75% - 100%) */
        @keyframes stepFour {
          0%, 74% { background-color: #f9fafb; border-color: #e4e4e7; transform: scale(1); }
          75%, 100% { background-color: #d39443; border-color: transparent; transform: scale(1.02); }
          75%, 100% { color: #111111; }
        }

        .anim-one { animation: stepOne 12s infinite; }
        .anim-two { animation: stepTwo 12s infinite; }
        .anim-three { animation: stepThree 12s infinite; }
        .anim-four { animation: stepFour 12s infinite; }
      `}} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 border-b border-zinc-200 pb-6 sm:pb-8">
          <div className={`reveal-node ${isVisible ? 'active' : ''}`} style={{ transitionDelay: '100ms' }}>
            <span className="text-[#d39443] text-sm uppercase tracking-[0.25em] font-medium block mb-2">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide uppercase text-zinc-900">
              About <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">
                Prajwaala Properties
              </span>
            </h2>
          </div>
          <p 
            className={`text-zinc-600 max-w-xl mt-6 md:mt-0 text-md md:text-lg font-light leading-relaxed md:pl-6 reveal-node ${isVisible ? 'active' : ''}`}
            style={{ transitionDelay: '250ms' }}
          >
            Prajwaala Properties is a renowned real estate company based in Hyderabad, committed to delivering excellence in every project. With over 20+ years of experience in the industry, we have established a reputation for quality, innovation, and customer satisfaction.
          </p>
        </div>

        {/* --- CONTENT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Brand Identity Showcase & Stats Container */}
          <div 
            className={`lg:col-span-5 flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.01)] border-l-4 border-l-[#d39443] reveal-node ${isVisible ? 'active' : ''}`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Logo Wrapper Container */}
            <div className="w-full flex items-center justify-center py-8">
              <div className="relative w-full max-w-[280px] aspect-[4/3]">
                <Image
                  loader={cacheBustLoader}
                  src="/logo.png"
                  alt="Prajwaala Properties Executive Logo"
                  fill
                  sizes="(max-w-1024px) 100vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Micro Stats Row inside Left Column with Count Up State hooks */}
            <div className="grid grid-cols-2 gap-4 mt-auto pt-8 border-t border-zinc-200">
              <div>
                <span className="block text-3xl font-bold font-serif text-zinc-900">
                  {yearsCount}+ Yrs
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400">Industry Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-bold font-serif text-[#d39443]">
                  M{concreteCount}+
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400">Concrete Standard</span>
              </div>
            </div>
          </div>

          {/* Right Column: Four Rotational One-by-One Animated Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pillar 1 - Step 1 Active */}
            <div 
              className={`p-8 rounded-2xl flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.01)] stagger-loop-card anim-one reveal-node ${isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '500ms' }}
            >
              <div>
                <h4 className="text-xl font-serif mb-3 tracking-wide font-bold title-1">Uncompromised Quality</h4>
                <p className="text-sm font-light leading-relaxed desc-1">
                  Utilizing heavy-gauge reinforced frameworks and verified premium materials, ensuring a standard of luxury that stands securely through generations.
                </p>
              </div>
            </div>

            {/* Pillar 2 - Step 2 Active */}
            <div 
              className={`p-8 rounded-2xl flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.01)] stagger-loop-card anim-two reveal-node ${isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '600ms' }}
            >
              <div>
                <h4 className="text-xl font-serif mb-3 tracking-wide font-bold title-2">Forward Innovation</h4>
                <p className="text-sm font-light leading-relaxed desc-2">
                  Configuring modern, open-plan layout dynamics optimized completely for cross-ventilation, abundant natural illumination, and premium spatial architecture.
                </p>
              </div>
            </div>

            {/* Pillar 3 - Step 3 Active */}
            <div 
              className={`p-8 rounded-2xl flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.01)] stagger-loop-card anim-three reveal-node ${isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '700ms' }}
            >
              <div>
                <h4 className="text-xl font-serif mb-3 tracking-wide font-bold title-3">Customer Satisfaction</h4>
                <p className="text-sm font-light leading-relaxed desc-3">
                  Honoring clear operational transparency, strictly seamless delivery timelines, and dedicated post-handover customer care infrastructure.
                </p>
              </div>
            </div>

            {/* Design Creed Box - Step 4 Active */}
            <div 
              className={`p-8 flex flex-col justify-center items-start rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.01)] stagger-loop-card anim-four reveal-node ${isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '800ms' }}
            >
              <span className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2">Our Creed</span>
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