"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { resolveIcon } from "./iconHelper";

export default function InnerExpertise({ solutions }) {
  const [openIndex, setOpenIndex] = useState(0);

  const points = solutions?.points || [
    {
      title: "Business Website Development",
      description:
        "We design and develop fast, SEO-optimized business websites that establish credibility and convert visitors into qualified leads — built mobile-first on modern frameworks.",
      icon: "monitor",
      tags: ["Corporate Websites", "Landing Pages", "CMS Integration"],
    },
    {
      title: "Full-Stack Web Application Development",
      description:
        "From SaaS dashboards to internal business tools, we engineer complete web applications with secure backends, intuitive frontends, and cloud infrastructure built to scale.",
      icon: "code",
      tags: ["SaaS Platforms", "Admin Dashboards", "REST APIs"],
    },
    {
      title: "Performance & Technical SEO Engineering",
      description:
        "Every site we build passes Core Web Vitals, includes semantic HTML, schema markup, and structured metadata — so your site ranks high and loads fast from day one.",
      icon: "trending-up",
      tags: ["Core Web Vitals", "Schema Markup", "Page Speed Optimization"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#faf8f5] text-gray-900 border-t border-b border-stone-200/70 relative overflow-hidden">
      {/* Subtle ambient glows for premium warmth */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-80 h-80 bg-[#8e2157]/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-56 h-56 bg-amber-500/[0.03] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">

          {/* LEFT — sticky heading + image */}
          <div className="lg:w-[38%] xl:w-[36%]">
            <div className="lg:sticky lg:top-32">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-4 h-px bg-[#8e2157]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8e2157]">
                  {solutions?.badge || "Our Expertise"}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-light text-gray-900 leading-[1.2] mb-5">
                {solutions?.title || "Core Technical Competencies"}
              </h2>

              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed mb-10 max-w-sm">
                {solutions?.description ||
                  "Core technical competencies that establish ByteSpire as a leading web engineering team."}
              </p>

              {/* Image */}
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-stone-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.06)] bg-white">
                <Image
                  src="/service_tech.png"
                  alt="Web Development Expertise"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Counter pill */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-stone-200/80 rounded-xl px-4 py-2 shadow-md">
                  <p className="text-gray-900 text-lg font-light">
                    <span className="text-[#8e2157] font-medium">{points.length}</span> Core Pillars
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — accordion list */}
          <div className="lg:w-[62%] xl:w-[64%] flex flex-col">
            {points.map((point, idx) => {
              const Icon = resolveIcon(point.icon);
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-stone-200/80 last:border-b-0 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-7 flex items-start gap-5 text-left group cursor-pointer focus:outline-none"
                  >
                    {/* Number */}
                    <span
                      className={`text-5xl font-light tabular-nums leading-none transition-colors duration-300 mt-1 shrink-0 ${
                        isOpen ? "text-[#8e2157]" : "text-stone-300 group-hover:text-stone-400"
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <div className="flex-1 min-w-0">
                      {/* Title row */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 border ${
                              isOpen
                                ? "bg-[#8e2157] border-[#8e2157] text-white shadow-sm"
                                : "bg-white border-stone-200 text-stone-500 group-hover:border-[#8e2157]/40 group-hover:text-[#8e2157]"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3
                            className={`text-lg md:text-xl transition-colors duration-300 ${
                              isOpen
                                ? "text-gray-900 font-medium"
                                : "text-gray-700 font-light group-hover:text-gray-900"
                            }`}
                          >
                            {point.title}
                          </h3>
                        </div>

                        <div
                          className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen
                              ? "bg-[#8e2157] border-[#8e2157] text-white shadow-sm"
                              : "border-stone-300 text-stone-400 group-hover:border-[#8e2157]/50 group-hover:text-[#8e2157] bg-white"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </div>

                      {/* Expanded content */}
                      {isOpen && (
                        <div className="mt-5 pl-12 pr-2 pb-2">
                          <p className="text-gray-600 text-sm md:text-[15px] font-light leading-relaxed mb-5">
                            {point.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {(point.tags || []).map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-3 py-1 rounded-full text-[11px] font-medium border border-[#8e2157]/20 bg-[#8e2157]/5 text-[#8e2157]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
