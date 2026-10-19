"use client";

import React from "react";

export default function ServicesHero({
  badge = "What We Do",
  title = "Comprehensive Digital Solutions",
  description = "From building complex software to crafting beautiful brands and driving traffic, we provide end-to-end services to help your business thrive in the digital age.",
  bgImage = "/services_bg.png"
}) {
  return (
    <section className="relative bg-black py-24 md:py-32 text-center px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url("${bgImage}")` }}
      />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-light uppercase tracking-widest text-pink-200 bg-[#8e2157]/40 border border-[#8e2157]/60 mb-6 backdrop-blur-sm">
          {badge}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-white/80 text-base md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-md">
          {description}
        </p>
      </div>
    </section>
  );
}
