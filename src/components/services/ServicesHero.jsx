"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function ServicesHero({
  badge = "What We Do",
  title = "Comprehensive Digital Solutions",
  description = "From building complex software to crafting beautiful brands and driving traffic, we provide end-to-end services to help your business thrive in the digital age.",
  bgImage = "/services_bg.png",
}) {
  return (
    <section className="relative bg-black py-28 md:py-36 text-left px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url("${bgImage}")` }}
      />
      {/* Gradient Overlays — matching homepage hero */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black/90" />

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-start">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#8e2157]/25 text-pink-200 border border-[#8e2157]/40 mb-5 backdrop-blur-md">
          <Sparkles className="h-3 w-3 text-pink-300" />
          <span>{badge}</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg max-w-3xl">
          {title}
        </h1>

        {/* Description */}
        <p className="text-white/75 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl drop-shadow-sm">
          {description}
        </p>
      </div>
    </section>
  );
}
