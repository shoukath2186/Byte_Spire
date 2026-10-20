"use client";

import React from "react";

export default function ServiceSolutions({ solutions }) {
  if (!solutions || !solutions.points || solutions.points.length === 0) return null;

  return (
    <section className="py-14 md:py-24 px-6 bg-black relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8e2157]/15 to-transparent opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-3.5 h-1.5">
              <span className="block w-full h-full rounded-[2px] bg-[#8e2157]" />
            </div>
            <span className="text-white/70 text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase">
              Solutions
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight mb-4 max-w-2xl">
            {solutions.title}
          </h2>
          {solutions.description && (
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-2xl">
              {solutions.description}
            </p>
          )}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 p-7 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/10 hover:border-[#8e2157]/40 transition-all duration-300 group"
              >
                {Icon && (
                  <div className="w-11 h-11 rounded-xl bg-[#8e2157]/20 border border-[#8e2157]/30 flex items-center justify-center mb-5 group-hover:bg-[#8e2157] group-hover:border-[#8e2157] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#8e2157] group-hover:text-white transition-colors duration-300" />
                  </div>
                )}
                <h3 className="text-base md:text-lg font-medium text-white mb-3 group-hover:text-pink-200 transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-white/50 font-light text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

