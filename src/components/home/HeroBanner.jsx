"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    {
      src: "/banner-left.png",
      alt: "Modern Web & Mobile Applications",
    },
    {
      src: "/banner-center.png",
      alt: "Technology & Software Development",
    },
    {
      src: "/banner-right.png",
      alt: "Enterprise Cloud & Digital Solutions",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [bannerImages.length]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-visible">
      {/* Background Slideshow Panel (Full-Height Banner Images) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-black">
        {bannerImages.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className={`object-cover transition-transform duration-[7000ms] ease-out ${
                idx === currentSlide ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Dark gradient overlays for readability & transparent header text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85 z-10 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent h-32 z-20 pointer-events-none" />

      {/* Main Banner Content Area */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 pb-36 sm:pb-40 md:pb-36 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#8e2157]/25 text-pink-200 border border-[#8e2157]/40 mb-4 backdrop-blur-md">
            <Sparkles className="h-3 w-3 animate-pulse text-pink-300" />
            <span>Empowering Digital Growth</span>
          </div>

          {/* Heading - Refined, Slightly Larger Balanced Size */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light text-white leading-tight md:leading-[1.18] tracking-tight mb-4 drop-shadow-lg">
            Build Modern Web & <br className="hidden sm:inline" />
            <span className="font-normal text-white">Mobile Applications</span>
          </h1>

          {/* Description - Balanced, Clean Legibility */}
          <p className="text-white/80 text-sm sm:text-[15px] font-light leading-relaxed max-w-lg mb-7 drop-shadow-sm">
            We design and develop clean, scale-ready software solutions built around React, Node.js, and Cloud services to accelerate your company.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#8e2157] text-white font-medium px-6 py-3 rounded-full text-sm hover:bg-[#6b1842] hover:scale-105 transition-all duration-300 shadow-[0_6px_18px_rgba(142,33,87,0.3)] hover:shadow-[0_10px_22px_rgba(142,33,87,0.4)]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-light px-5 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Slide Indicator Dots (Discreetly on Right) */}
        <div className="hidden sm:flex absolute bottom-28 md:bottom-24 right-8 lg:right-12 z-20 gap-2 items-center">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentSlide
                  ? "bg-[#8e2157] w-8 shadow-sm shadow-[#8e2157]/50"
                  : "bg-white/40 hover:bg-white/70 w-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Interaction Widget: Stats Section Under the Hero */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-4 z-30">
        <div className="bg-white text-gray-900 rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
          <div className="p-5 sm:p-6 md:p-8">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="p-3 sm:p-4 rounded-2xl border border-gray-50 hover:bg-pink-50/30 hover:border-[#8e2157]/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-[#8e2157] mb-0.5">35+</div>
                <div className="text-[11px] text-gray-600 uppercase tracking-widest font-medium mb-0.5">Projects Delivered</div>
                <div className="text-xs text-gray-600 font-light">Small to Medium Businesses</div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl border border-gray-50 hover:bg-pink-50/30 hover:border-[#8e2157]/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-[#8e2157] mb-0.5">20+</div>
                <div className="text-[11px] text-gray-600 uppercase tracking-widest font-medium mb-0.5">Happy Clients</div>
                <div className="text-xs text-gray-600 font-light">Partners globally</div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl border border-gray-50 hover:bg-pink-50/30 hover:border-[#8e2157]/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-[#8e2157] mb-0.5">99%</div>
                <div className="text-[11px] text-gray-600 uppercase tracking-widest font-medium mb-0.5">Satisfaction</div>
                <div className="text-xs text-gray-600 font-light">Top quality coding</div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl border border-gray-50 hover:bg-pink-50/30 hover:border-[#8e2157]/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-[#8e2157] mb-0.5">3+</div>
                <div className="text-[11px] text-gray-600 uppercase tracking-widest font-medium mb-0.5">Years Experience</div>
                <div className="text-xs text-gray-600 font-light">Professional development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
