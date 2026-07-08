"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[85vh] lg:h-[90vh] flex flex-col justify-center bg-black overflow-hidden font-sans">
      
      {/* --- FULL-SCREEN BACKGROUND VIDEO & MASK --- */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/heroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

    </section>
  );
}