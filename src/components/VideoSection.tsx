"use client";

import React, { useState, useRef } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full bg-white text-[#111111] py-16 px-6 md:px-16 lg:px-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6">
          <div>
            <span className="text-[#d39443] text-sm uppercase tracking-[0.25em] font-medium block mb-2">
              Cinematic Tour
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wide uppercase text-[#111111]">
              Experience the <span className="font-bold">Grandeur</span>
            </h2>
          </div>
          <p className="text-gray-600 text-sm max-w-xs mt-3 md:mt-0 font-light">
            Take a virtual walkthrough across our expertly engineered living spaces.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-gray-200 bg-black group shadow-xl">
          
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-architecture-in-a-city-43224-large.mp4"
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            onClick={handlePlayToggle}
          />

          {/* Custom Overlay */}
          <div 
            onClick={handlePlayToggle}
            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 flex items-center justify-center cursor-pointer ${
              isPlaying ? 'opacity-0 group-hover:opacity-100 bg-black/40' : 'opacity-100'
            }`}
          >
            {/* Play/Pause Architectural Button */}
            <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 transition-transform duration-300 group-hover:scale-110">
              <div className={`absolute inset-0 border border-[#d39443] rounded-full opacity-70 ${!isPlaying && 'animate-ping'}`} />
              
              <div className="absolute inset-2 bg-[#d39443] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 hover:bg-[#c28332]">
                {isPlaying ? (
                  <svg className="w-6 h-6 text-[#111111]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0a.75.75 0 0 1 .75-.75H16.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-[#111111] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </div>

            {/* Bottom Floating Title Bar */}
            <div className={`absolute bottom-6 left-6 transition-transform duration-300 font-serif text-white ${
              isPlaying ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
            }`}>
              <p className="text-xs uppercase tracking-widest text-[#d39443] font-sans font-semibold mb-1">Prajwaala Spaces</p>
              <h3 className="text-xl md:text-2xl font-light">The Architectural Masterpiece</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}