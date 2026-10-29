"use client";

import React from "react";
import { Layout, Server, Cloud, BarChart, Code2, Database, Shield, Cpu } from "lucide-react";
import { resolveIcon } from "./innerServices/iconHelper";

export default function ServiceTechStack({ techStack }) {
  if (!techStack || !techStack.categories || techStack.categories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 px-6 bg-[#0a0a0a] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8e2157]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#8e2157]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-3.5 h-1.5">
              <span className="block w-full h-full rounded-[2px] bg-[#8e2157]" />
            </div>
            <span className="text-white/70 text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase">
              {techStack.badge || "Technology Stack"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight mb-4 max-w-3xl">
            {techStack.title || "Modern Technologies & Frameworks"}
          </h2>
          {techStack.description && (
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-2xl">
              {techStack.description}
            </p>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {techStack.categories.map((cat, idx) => {
            const Icon = resolveIcon(cat.icon);
            return (
              <div
                key={idx}
                className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#8e2157]/50 rounded-2xl md:rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#8e2157]/20 border border-[#8e2157]/30 flex items-center justify-center text-[#8e2157] group-hover:bg-[#8e2157] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-pink-200 transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Sub-items / Lists */}
                  <div className="space-y-4">
                    {cat.items?.map((item, itemIdx) => (
                      <div key={itemIdx} className="space-y-2">
                        {item.label && (
                          <div className="text-xs uppercase tracking-wider text-white/50 font-medium">
                            {item.label}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {item.tech?.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80 font-light hover:border-[#8e2157]/60 hover:text-white transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

