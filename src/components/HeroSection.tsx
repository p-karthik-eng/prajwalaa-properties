import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-[90vh] flex items-center justify-center bg-black overflow-hidden font-sans">
      
      {/* --- 1. FULL-SCREEN BACKGROUND VIDEO --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/heroVideo.mp4" type="video/mp4" />
        {/* If your video has a different extension like .mov or .webm, update the src or add backup sources below: */}
        {/* <source src="/heroVideo.mov" type="video/quicktime" /> */}
        Your browser does not support the video tag.
      </video>

    </section>
  );
}