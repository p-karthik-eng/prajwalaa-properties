import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left Side: Dummy Image Section */}
      <div className="relative w-full md:w-[63%] h-[350px] md:h-full bg-gray-200">
        <Image
          src="/herosection.jpeg" 
          alt="Luxury Apartment Towers"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Optional subtle gradient overlay to blend with the right side if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Right Side: Golden Info Section */}
      <div className="relative w-full md:w-[37%] bg-[#d39443] flex flex-col justify-between p-8 md:p-12 text-[#111111] font-serif">
        {/* Subtle decorative background symbols if desired, or pure background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center font-sans text-[12rem] font-bold">
          +
        </div>

        {/* Main Content Container */}
        <div className="my-auto flex flex-col items-center text-center space-y-4 z-10">
          <div className="tracking-[0.2em] text-sm md:text-md uppercase font-sans font-medium text-[#1c1c1c]">
           Prajwalaa
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-widest font-normal uppercase font-serif text-[#1c1c1c] mb-6">
            Properties
          </h1>

          <div className="w-16 h-[1px] bg-[#1c1c1c]/40 my-2"></div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1c1c1c]">
            3 & 4 BHK
          </h2>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-normal tracking-wide uppercase text-[#1c1c1c] max-w-sm leading-tight">
            Luxury Apartments, <br />
            
          </p>
        </div>

        
      </div>
    </section>
  );
}