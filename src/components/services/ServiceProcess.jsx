"use client";

import React from "react";

export default function ServiceProcess({ process }) {
  if (!process || !process.steps || process.steps.length === 0) return null;

  return (
    <section className="py-12 md:py-20 px-6 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8e2157]/20 to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            {process.title}
          </h2>
          {process.description && (
            <p className="text-white/70 font-light text-lg leading-relaxed">
              {process.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-4xl font-light text-[#8e2157] mb-6 opacity-80">
                {step.step}
              </div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-white/60 font-light leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
