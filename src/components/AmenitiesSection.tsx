"use client";

import React from "react";

interface Amenity {
  title: string;
  iconSrc: string; 
}

export default function AmenitiesSection() {
  const amenities: Amenity[] = [
    { title: "Grand Lobby", iconSrc: "/grand-lobby.webp" }, 
    { title: "Swimming Pool", iconSrc: "/swimming-pool.webp" },
    { title: "Gym", iconSrc: "/fitness-pockets.webp" },
    { title: "Multipurpose Halls", iconSrc: "/multipurpose-hall.webp" },
    { title: "Yoga/Meditation/Aerobics Halls", iconSrc: "/yoga-lawns.webp" },
    { title: "Guest Rooms", iconSrc: "/guest-rooms.webp" },
    { title: "Indoor Badminton Courts", iconSrc: "/badminton-court.webp" },
    { title: "Indoor Games", iconSrc: "/indoor-games.webp" },
  ];

  // We duplicate the array to ensure a seamless infinite loop transition point
  const duplicatedAmenities = [...amenities, ...amenities, ...amenities];

  return (
    <section className="w-full bg-white py-16 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        
        {/* --- Section Title --- */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1a2b49] tracking-wide inline-block relative">
            Amenities
          </h2>
          <div className="w-full border-t border-[#d5a86a] mt-8"></div>
        </div>

        {/* --- Infinite Moving Container --- */}
        <div className="w-full overflow-hidden relative flex">
          
          {/* Subtle fade masks on edges for premium feel */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Row */}
          <div 
            className="flex space-x-12 py-4 animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]"
            style={{
              // Inline dynamic configuration to define the sliding loop behavior
              display: 'flex',
              whiteSpace: 'nowrap',
            }}
          >
            {duplicatedAmenities.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group min-w-[150px] shrink-0"
              >
                {/* Circular Image Container Frame */}
                <div className="w-24 h-24 rounded-full border border-[#d5a86a] bg-white flex items-center justify-center overflow-hidden p-4 mb-4 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={item.iconSrc}
                    alt={item.title}
                    className="w-full h-full object-contain sepia-[0.2] saturate-[1.5] hue-rotate-[8deg] brightness-[0.95]"
                  />
                </div>

                {/* Text Label */}
                <p className="font-serif text-[14px] font-medium text-neutral-800 leading-snug tracking-wide max-w-[140px] whitespace-normal">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Border Rule */}
        <div className="w-full border-t border-[#d5a86a] mt-12"></div>
      </div>

      {/* --- Global Tailwind CSS Keyframe Injection --- */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}