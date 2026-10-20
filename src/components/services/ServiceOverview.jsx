"use client";

import React from "react";

export default function ServiceOverview({
  title = "Overview",
  description,
}) {
  if (!description) return null;

  return (
    <section className="py-12 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Section Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-3.5 h-1.5">
              <span className="block w-full h-full rounded-[2px] bg-[#8e2157]" />
            </div>
            <span className="text-gray-900/80 text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase">
              {title}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6">
            What We Deliver
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
