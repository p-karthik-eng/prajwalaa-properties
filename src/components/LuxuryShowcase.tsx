'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface PromiseItem {
  id: number;
  title: string;
  description: string;
  desktopImg: string;
  mobileImg: string;
}

export default function LuxuryShowcase() {
  const promiseItems: PromiseItem[] = [
    {
      id: 1,
      title: "Grand Lobby",
      description: "Step into an arrival experience designed to make a statement. Prajwalaa Properties redefines grandeur with a soaring grand lobby, featuring monolithic marble flooring, bespoke ambient lighting installations, and dedicated concierge zones that mirror the aesthetic of an international five-star resort hotel.",
      desktopImg: "/grand-lobby.jpg",
      mobileImg: "/sites/default/files/2024-04/USP1_Lodha-Bellevue_390X347.jpg",
    },
    {
      id: 2,
      title: "Gym",
      description: "Our high-performance wellness center transitions you smoothly from high-stress workdays to holistic physical health. Equipped with professional-grade strength training matrices, dedicated cardio decks, and functional movement zones, it offers an exclusive training space with panoramic external vistas.",
      desktopImg: "/gym.jpg",
      mobileImg: "/sites/default/files/2024-04/USP2_Lodha-Bellevue_390X347.jpg",
    },
    {
      id: 3,
      title: "Swimming pool",
      description: "Immerse yourself in our pristine crystal-blue swimming pool oasis. Designed with an elegant infinity edge, premium poolside lounge decks, and beautifully curated tile details, it offers the ultimate structural sanctuary for an early morning swim or a relaxed evening unwind.",
      desktopImg: "/gallery2.jpeg",
      mobileImg: "/sites/default/files/2026-03/USP3_Lodha-Bellevue_390X347.jpg",
    },
    {
      id: 4,
      title: "Indoor Games",
      description: "Unwind within thoughtfully designed indoor recreation arenas and social lounges. From premium billiards arrays to calculated board game spaces, these temperature-controlled environments serve as the central social fabric where like-minded neighbors connect, compete, and relax.",
      desktopImg: "/indoor-games.jpg",
      mobileImg: "/sites/default/files/2024-04/USP4_Lodha-Bellevue_390X347.jpg",
    },
    {
      id: 5,
      title: "Yoga/Meditation hall",
      description: "Escape the fast-paced cityscape within our sound-insulated mindfulness and yoga pavilion. Bathed in balanced natural morning light and surrounded by subtle design choices, this serene room is dedicated entirely to mental clarity, core alignment, and absolute personal peace.",
      desktopImg: "/yoga.jpg",
      mobileImg: "/sites/default/files/2024-04/USP5_Lodha-Bellevue_390X347.jpg",
    },
    {
      id: 6,
      title: "Guest Rooms",
      description: "Host your visitors with hospitality that matches elite hotel hospitality templates. These elegantly finished luxury guest suites feature integrated modular conveniences, deep-palette texturing, and complete acoustic screening to ensure your family and associates enjoy absolute comfort.",
      desktopImg: "/guest-rooms.avif",
      mobileImg: "/sites/default/files/2024-04/guest-rooms-thumb.jpg",
    },
    {
      id: 7,
      title: "Multipurpose Hall",
      description: "Celebrate the milestone moments of life within a majestic banquet framework. Our expansive multipurpose hall combines high-ceiling clearance architectures, sophisticated acoustic treatment arrays, and dynamic layout capabilities perfect for premier social galas or close family events.",
      desktopImg: "/multipurpose-hall.jpg",
      mobileImg: "/sites/default/files/2024-04/multipurpose-hall-thumb.jpg",
    }
  ];

  const cacheBustLoader = ({ src }: { src: string }) => {
    return `${src}?v=prajwalaa-2026`;
  };

  // Smooth text fade animation config
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: 'easeOut' } 
    }
  };

  // Horizontal Premium Paper Roll Unfurl Animation
  const paperRollHorizontal: Variants = {
    hidden: { 
      clipPath: 'inset(0% 100% 0% 0%)', 
      scaleX: 0.85, 
      skewX: 1,
      transformOrigin: 'left center' 
    },
    visible: { 
      clipPath: 'inset(0% 0% 0% 0%)', 
      scaleX: 1,
      skewX: 0,
      transition: { 
        duration: 1.3, 
        ease: [0.25, 1, 0.5, 1], 
        delay: 0.1 
      } 
    }
  };

  return (
    <section className="w-full bg-white text-[#111111] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- BRAND INTRODUCTION HEADER --- */}
        <motion.div 
          className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-amber-500 font-semibold tracking-widest text-xs uppercase mb-3">Prajwalaa Properties</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-6 tracking-wide">
            World-Class Amenities
          </h1>
          <div className="w-16 h-[2px] bg-amber-500 mb-6" />
          <p className="text-zinc-600 font-light leading-relaxed text-sm sm:text-base md:text-lg">
            Experience an elite lifestyle infrastructure built to bring absolute luxury, health, 
            <br className="hidden md:block" /> and balanced social wellness straight to your doorstep.
          </p>
        </motion.div>

        {/* --- FEATURE MATRIX SHOWCASE --- */}
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
          {promiseItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center"
              >
                {/* Image Block Shell featuring Horizontal Paper Roll Effect */}
                <motion.div 
                  className={`relative w-full aspect-[527/468] rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 shadow-[0_12px_40px_rgba(0,0,0,0.04)] lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={paperRollHorizontal}
                >
                  <Image
                    loader={cacheBustLoader}
                    src={item.desktopImg}
                    alt={item.title}
                    fill
                    sizes="(max-w-1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-102"
                  />
                  
                  {/* Subtle dynamic overlay shadow running sideways along the moving paper edge */}
                  <motion.div 
                    className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-black/[0.01] to-black/[0.03]"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </motion.div>

                {/* Text Content Block Shell */}
                <motion.div 
                  className={`flex flex-col justify-center lg:col-span-6 ${
                    isEven ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4 sm:mb-6 leading-tight tracking-wide">
                    {item.title}
                  </h2>
                  <div className="w-12 h-[2px] bg-amber-500 mb-6" />
                  <p className="text-zinc-600 font-light text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}