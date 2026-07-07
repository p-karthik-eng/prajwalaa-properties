"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Phone, Menu, X, Plus, ArrowLeft } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledPastHeader, setIsScrolledPastHeader] = useState(false);

  // Monitor scroll position to transform the sub-navbar
  useEffect(() => {
    const handleScroll = () => {
      // 96px matches the main header's new exact height (h-24)
      if (window.scrollY > 96) {
        setIsScrolledPastHeader(true);
      } else {
        setIsScrolledPastHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainMenuItems = [
    { name: "Home", hasSub: false, isGreen: true },
    { name: "Projects", hasSub: true },
    { name: "Diya's explorations", hasSub: false },
    { name: "Investors", hasSub: true },
    { name: "Media Center", hasSub: true },
    { name: "NRI corner", hasSub: true },
    { name: "Blogs", hasSub: false },
    { name: "Know Us", hasSub: true },
    { name: "Godrej Ambassador", hasSub: false },
  ];

  const subMenuItems = [
    "Enquire",
    "Schedule a site visit",
    "Work with Us",
    "Reach Us",
  ];

  const subNavLinks = [
    "Overview",
    "Location",
    "Price",
    "Amenities",
    "Gallery",
    "Download",
  ];

  return (
    <>
      {/* --- 1. MAIN TOP HEADER BAR --- */}
      {/* Increased height to h-24 (96px) to accommodate a clearer, larger logo */}
      <header className="relative z-50 flex h-24 w-full items-center justify-between bg-white px-6 md:px-12 shadow-sm">
        {/* Left: Scaled up Logo Asset */}
        <Link href="/" className="flex items-center h-16 transition-opacity hover:opacity-90">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={240} // Increased from 180
            height={64} // Increased from 60
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        {/* Right: Functional Quick Actions */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            <Phone size={18} fill="currentColor" className="text-gray-700" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
            <Search size={22} />
          </button>
          <button 
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            <Menu size={20} />
          </button>
          <span className="hidden sm:inline-block font-serif text-2xl font-bold italic text-black tracking-tight ml-2">
            prajwalaa
          </span>
        </div>
      </header>

      {/* --- 2. TRANSFORMING PROJECT SUB-NAVBAR --- */}
      <nav
        className={`w-full left-0 z-40 ${
          isScrolledPastHeader
            ? "fixed top-0 bg-[#1c1c1c] shadow-lg py-4 px-6 md:px-12 text-white transition-all duration-300 ease-in-out"
            : "absolute top-24 bg-transparent py-5 px-6 md:px-12 text-white bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Left: Back Control Navigation Link */}
          <Link 
            href="#" 
            className="flex items-center space-x-2 text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>

          {/* Right: Project Specific Detail Targets */}
          <div className="flex items-center space-x-6 md:space-x-8 text-sm font-medium tracking-wide">
            {subNavLinks.map((link, idx) => (
              <Link 
                key={idx} 
                href={`#${link.toLowerCase()}`} 
                className="hover:text-neutral-300 transition-colors hidden sm:inline-block last:inline-block"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* --- 3. SLIDE-OUT DRAWER OVERLAY & PANEL --- */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-[450px] bg-[#111111] text-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-24 items-center justify-between px-8 border-b border-neutral-800/50">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors"
          >
            <X size={20} />
            <span className="text-sm font-medium tracking-wide">Close</span>
          </button>
        </div>

        <div className="h-[calc(100vh-96px)] overflow-y-auto px-8 py-6">
          <ul className="space-y-5">
            {mainMenuItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between group cursor-pointer pb-1">
                <span className={`text-lg font-medium tracking-wide transition-colors ${item.isGreen ? "text-green-500 font-semibold" : "text-neutral-200 hover:text-white"}`}>
                  {item.name}
                </span>
                {item.hasSub && <Plus size={16} className="text-neutral-500 group-hover:text-white transition-colors" />}
              </li>
            ))}
          </ul>
          <hr className="my-8 border-neutral-800" />
          <ul className="space-y-5 mb-12">
            {subMenuItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                <span className="text-base text-neutral-300 font-medium tracking-wide hover:text-white transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}