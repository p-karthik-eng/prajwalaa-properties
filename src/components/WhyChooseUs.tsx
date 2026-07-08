'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

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

  // Motion variants for the header block
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  // Staggered sequence configuration for card arrivals
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="w-full bg-[#0a0a0a] text-[#ffffff] py-20 px-6 md:px-16 lg:px-24 font-sans border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <span className="text-[#f59e0b] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
            The Prajwaala Advantage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide uppercase text-white">
            Why Choose <span className="font-bold text-[#fbbf24]">Prajwaala Properties?</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#f59e0b] mx-auto mt-4"></div>
        </motion.div>

        {/* Animated 3-Column Dark & Yellow Card Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {features.map((item) => (
            <motion.div 
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.05)",
                borderColor: "rgba(245, 158, 11, 0.5)"
              }}
              className="flex flex-col bg-[#121212] border border-zinc-800/80 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-colors duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Decorative Yellow Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-zinc-800 group-hover:bg-[#f59e0b] transition-colors duration-300"></div>

              {/* Card Header with Yellow index indicator */}
              <div className="flex items-baseline space-x-3 mb-4">
                <span className="font-mono text-sm font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-2.5 py-1 rounded-md">
                  {item.id}
                </span>
                <h3 className="text-xl font-serif font-bold text-zinc-100 tracking-wide group-hover:text-[#fbbf24] transition-colors duration-200">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm md:text-[15px] font-light leading-relaxed flex-grow">
                {item.description}
              </p>

              {/* Yellow Arrow Link Indicator */}
              <div className="mt-6 flex items-center text-[#fbbf24] text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0">
                <span>Learn More</span>
                <svg className="w-3 h-3 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}