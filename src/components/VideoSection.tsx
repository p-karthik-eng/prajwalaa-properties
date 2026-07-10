"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function VideoSection() {
  // Entrance variants for the heading text block (slide from left side)
  const leftHeaderVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: 'easeOut' } 
    }
  };

  // Entrance variants for the descriptor text side (slide from right side)
  const rightDescVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 } 
    }
  };

  // Entry animation for the main video block frame
  const playerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } 
    }
  };

  return (
    <section className="relative w-full bg-white text-[#111111] py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading Row with Motion Intro */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftHeaderVariants}
          >
            <span className="text-[#d39443] text-sm uppercase tracking-[0.25em] font-medium block mb-2">
              Cinematic Tour
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wide uppercase text-[#111111]">
              Experience the <span className="font-bold">Grandeur</span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-black text-sm max-w-xs font-light leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightDescVariants}
          >
            Take a virtual walkthrough across our expertly engineered living spaces.
          </motion.p>
        </div>

        {/* Video Player Box with Entrance Animation */}
        <motion.div 
          className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 bg-black shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={playerVariants}
        >
          
          {/* HTML5 Video Element - Auto Looping */}
          <video
            src="/heroVideo.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Bottom Floating Title Bar Overlay */}
          <div className="absolute bottom-6 left-6 font-serif text-white pointer-events-none z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            <p className="text-xs uppercase tracking-widest text-[#d39443] font-sans font-semibold mb-1">
              Prajwaala Spaces
            </p>
            <h3 className="text-xl md:text-2xl font-light">
              The Architectural Masterpiece
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}