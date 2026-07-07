'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Working with Prajwaala Properties was a fantastic experience. From start to finish, they were professional, attentive to our needs, and delivered on their promises. Our dream home is a testament to their dedication to quality and excellence.",
      author: "Mr. and Mrs. Kumar",
      role: "Happy Homeowners"
    },
    {
      id: 2,
      quote: "I highly recommend Prajwaala Properties to anyone looking for a reliable and trustworthy real estate partner. Their attention to detail, transparent communication, and commitment to customer satisfaction set them apart in the industry.",
      author: "Ms. Rao",
      role: "Satisfied Customer"
    },
    {
      id: 3,
      quote: "Prajwaala Properties made the entire home buying process smooth and stress-free for us. Their team was knowledgeable, responsive, and guided us every step of the way. We couldn't be happier with our decision to choose them.",
      author: "Mr. and Mrs. Reddy",
      role: "Delighted Homeowners"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300); 
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="w-full bg-[#fafafa] text-[#111111] py-16 px-6 font-sans overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-2xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-[#d39443] text-sm uppercase tracking-[0.25em] font-medium block mb-2">
            Client Trust
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-wide uppercase text-[#1c1c1c]">
            Voices of <span className="font-bold">Satisfaction</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#d39443]/60 mt-3"></div>
        </div>

        {/* Animation Speeds */}
        <style dangerouslySetInnerHTML={{__html: `
          .testimonial-fade-leave {
            animation: slideOutLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .testimonial-fade-enter {
            animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          @keyframes slideOutLeft {
            0% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(-30px); opacity: 0; }
          }
          @keyframes slideInRight {
            0% { transform: translateX(30px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}} />

        {/* Highlighted & Premium Box Wrapper */}
        <div className="relative bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-[0_15px_45px_rgba(211,148,67,0.06)] min-h-[340px] md:min-h-[240px] flex flex-col justify-between overflow-hidden">
          
          {/* Top Decorative Border Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#d39443]/20 via-[#d39443] to-[#d39443]/20"></div>
          
          {/* Subtle Background Inner Glow Accent */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#d39443]/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Giant Quote Icon */}
          <div className="absolute top-8 left-8 text-7xl font-serif text-[#d39443]/15 select-none pointer-events-none">
            “
          </div>

          <div className={`relative z-10 w-full h-full flex flex-col justify-between flex-grow ${isAnimating ? 'testimonial-fade-leave' : 'testimonial-fade-enter'}`}>
            
            {/* Quote Text */}
            <div className="pt-6 mb-6">
              <p className="text-gray-700 font-normal italic leading-relaxed text-sm md:text-base">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>

            {/* Author Block */}
            <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-base font-semibold tracking-wide text-[#1c1c1c]">
                  {testimonials[currentIndex].author}
                </h4>
                <div className="text-[11px] mt-0.5 text-[#d39443] font-semibold uppercase tracking-wider">
                  {testimonials[currentIndex].role}
                </div>
              </div>
              
              {/* Gold Stars */}
              <div className="flex gap-0.5 text-[#d39443]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:-left-14 md:-right-14 flex justify-between pointer-events-none">
            <button 
              onClick={handlePrev}
              className="w-8 h-8 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-[#d39443] hover:border-[#d39443] transition-all pointer-events-auto cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-8 h-8 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-[#d39443] hover:border-[#d39443] transition-all pointer-events-auto cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

        </div>

        {/* Bottom Slide Indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating || index === currentIndex) return;
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${index === currentIndex ? 'w-6 bg-[#d39443]' : 'w-1.5 bg-gray-200'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}