"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

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

  const duplicatedPrinciples = [...principles, ...principles, ...principles];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-amber-50/40 via-[#fffdf9] to-white text-[#111111] py-20 overflow-hidden font-sans border-t border-amber-200/50">
      
      {/* --- INTENSIFIED FLOATING YELLOW BACKGROUND CARDS --- */}
      {/* Increased opacity tracking to 90% for higher intensity visibility */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-90">
        
        {/* Box 1 - Top Left (Thicker borders, stronger amber fill) */}
        <motion.div 
          className="absolute w-52 h-52 rounded-2xl border-[3px] border-amber-400/40 bg-amber-400/[0.07] shadow-[inset_0_4px_20px_rgba(251,191,36,0.05)]"
          style={{ top: '6%', left: '3%' }}
          animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Box 2 - Middle Center Right */}
        <motion.div 
          className="absolute w-72 h-44 rounded-3xl border-[3px] border-amber-500/35 bg-amber-400/[0.08] shadow-[0_15px_35px_rgba(251,191,36,0.05)]"
          style={{ top: '32%', right: '5%' }}
          animate={{ y: [0, 25, 0], rotate: [-10, -5, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Box 3 - Low Left Center */}
        <motion.div 
          className="absolute w-60 h-60 rounded-[2.5rem] border-[3px] border-amber-400/30 bg-amber-300/[0.06] rotate-45"
          style={{ bottom: '8%', left: '12%' }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Box 4 - Top Far Right */}
        <motion.div 
          className="absolute w-40 h-40 rounded-2xl border-[3px] border-amber-400/45 bg-amber-400/[0.09] rotate-12"
          style={{ top: '2%', right: '20%' }}
          animate={{ scale: [1, 1.08, 1], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Box 5 - Bottom Right Corner */}
        <motion.div 
          className="absolute w-80 h-48 rounded-2xl border-[3px] border-amber-500/30 bg-amber-400/[0.07]"
          style={{ bottom: '1%', right: '2%' }}
          animate={{ y: [-15, 15, -15], rotate: [0, 4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Box 6 - NEW: Mid Left Accent */}
        <motion.div 
          className="absolute w-36 h-36 rounded-xl border-[2.5px] border-amber-400/40 bg-amber-300/[0.08] -rotate-12"
          style={{ top: '45%', left: '2%' }}
          animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Box 7 - NEW: Centered Top Layer (Deep under headers) */}
        <motion.div 
          className="absolute w-96 h-32 rounded-[2rem] border-[3px] border-amber-300/25 bg-amber-400/[0.04]"
          style={{ top: '-5%', left: '40%' }}
          animate={{ scale: [0.95, 1.02, 0.95] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Intensified background linear mesh lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d3944307_1px,transparent_1px),linear-gradient(to_bottom,#d3944307_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <div className="w-full mx-auto relative z-10">
        
        {/* --- CENTERED TOP HEADING LAYOUT --- */}
        <motion.div 
          className="text-center mb-16 px-6 flex flex-col items-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          {/* Highlight Badge */}
          <div className="inline-flex items-center space-x-1.5 bg-[#d39443]/20 text-[#be7c2a] px-4 py-1.5 rounded-full mb-4 font-semibold shadow-sm backdrop-blur-md">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs tracking-wide uppercase">Core Pillars</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#1c1c1c] leading-tight">
            Key Principles <span className="font-bold text-[#d39443]">We Follow</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-black text-sm md:text-base mt-4 font-normal leading-relaxed max-w-2xl">
            The structural foundational ethics guiding every blueprint, deployment strategy, and customer interaction.
          </p>
        </motion.div>

        {/* --- CAROUSEL LOOP --- */}
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
              const backgroundColors = [
                "bg-white/95 backdrop-blur-md", 
                "bg-[#fffefb]/95 backdrop-blur-md", 
                "bg-white/95 backdrop-blur-md", 
                "bg-[#fafafa]/95 backdrop-blur-md"
              ];
              const cardBg = backgroundColors[index % backgroundColors.length];

              return (
                <motion.div 
                  key={`${item.id}-${index}`}
                  className={`w-[300px] md:w-[360px] shrink-0 group relative p-8 ${cardBg} border border-amber-200/60 rounded-2xl flex flex-col justify-between whitespace-normal cursor-pointer shadow-md`}
                  whileHover={{ 
                    y: -6, 
                    borderColor: "rgba(211, 148, 67, 0.7)",
                    boxShadow: "0 25px 55px rgba(211, 148, 67, 0.12)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Top Corner Structural Indicator */}
                  <span className="absolute right-6 top-5 font-serif text-3xl font-bold text-black/40 group-hover:text-[#d39443]/40 transition-colors duration-300">
                    {item.id}
                  </span>

                  <div>
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1c1c1c] tracking-wide mb-3 group-hover:text-[#d39443] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black text-sm font-light leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Icon List Layout Accents */}
                  <ul className="space-y-2.5 pt-4 border-t border-amber-200/40 mt-auto">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2 text-xs md:text-sm text-black">
                        <svg className="w-4 h-4 text-[#d39443] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Luxury Border Mask Vignettes */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#fffdf9] via-[#fffdf9]/30 to-transparent pointer-events-none z-20 hidden md:block" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#fffdf9] via-[#fffdf9]/30 to-transparent pointer-events-none z-20 hidden md:block" />

        </div>

      </div>
    </section>
  );
}