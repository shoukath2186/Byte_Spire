"use client";

import React from "react";

export default function ServiceProcess({ process }) {
  if (!process || !process.steps || process.steps.length === 0) return null;

  return (
    <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-100 relative overflow-x-clip">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] bg-gradient-to-r from-transparent via-[#8e2157]/5 to-transparent blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 xl:gap-20">

          {/* Left Column: Sticky Header */}
          <div className="lg:sticky lg:top-32 w-full lg:w-[45%] space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="relative w-3.5 h-1.5">
                <span className="block w-full h-full rounded-[2px] bg-[#8e2157]" />
              </div>
              <span className="text-gray-900/80 text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase">
                Process
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight max-w-[480px]">
              {process.title}
            </h2>

            {process.description && (
              <p className="text-gray-500 text-sm md:text-[15px] font-light leading-relaxed max-w-[460px]">
                {process.description}
              </p>
            )}
          </div>

          {/* Right Column: Sticky Stacked Cards */}
          <div className="w-full lg:w-[55%] flex flex-col gap-4 md:gap-5">
            {process.steps.map((step, i) => (
              <div
                key={i}
                className="lg:sticky bg-white p-5 md:p-7 rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(142,33,87,0.08)] hover:border-[#8e2157]/40 flex flex-col items-start transition-all duration-500 hover:-translate-y-1 group"
                style={{
                  top: `calc(130px + ${i * 20}px)`,
                  zIndex: i + 1,
                }}
              >
                {/* Top Bar: Step Number */}
                <div className="flex justify-between items-start w-full mb-5">
                  <div className="relative w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#8e2157] group-hover:border-[#8e2157] transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-[#8e2157]/30 group-hover:-translate-y-0.5">
                    <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-500">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-2xl md:text-3xl font-bold text-gray-200 group-hover:text-[#8e2157]/40 transition-colors leading-none">
                    {step.step}
                  </span>
                </div>

                {/* Label */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8e2157]">
                    Step {step.step}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 group-hover:text-[#8e2157] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[480px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
