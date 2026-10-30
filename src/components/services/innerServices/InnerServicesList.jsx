"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { resolveIcon } from "./iconHelper";

const serviceSvgIcons = [
  "/svg/icon1_dcb89ecf3f.svg",
  "/svg/icon2_bdf91dffae.svg",
  "/svg/icon3_3193b8797e.svg",
  "/svg/icon4_53f992b96a.svg",
];

export default function InnerServicesList({
  servicesTitle,
  servicesDescription,
  subServices,
}) {
  if (!subServices || subServices.length === 0) return null;

  return (
    <section id="services-section" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Section Header ── */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-4 h-px bg-[#8e2157]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-light text-gray-900 leading-[1.2] mb-4">
            {servicesTitle || "Comprehensive Web Development Services"}
          </h2>
          <p className="text-gray-400 text-base font-light leading-relaxed">
            {servicesDescription ||
              "Comprehensive web development services designed to help businesses build, transform, and scale online."}
          </p>
        </div>

        {/* ── Alternating showcase layout ── */}
        <div className="space-y-20 md:space-y-28">
          {subServices.map((service, idx) => {
            const Icon = resolveIcon(service.icon);
            const isOdd = idx % 2 === 0; // odd (0-indexed): image left
            const currentSvg = serviceSvgIcons[idx % serviceSvgIcons.length];

            return (
              <div
                key={service.id || idx}
                className={`flex flex-col gap-10 md:gap-12 lg:gap-16 xl:gap-20 ${
                  isOdd
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } items-center`}
              >
                {/* Image column — centered vector illustration */}
                <div className="w-full lg:w-[48%] shrink-0">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c0914] via-[#140e24] to-[#09060f] border border-white/10 flex items-center justify-center p-8 group shadow-xl">
                    {/* Subtle ambient glow in center behind the SVG */}
                    <div className="absolute w-56 h-56 rounded-full bg-[#4B2AD8]/25 blur-[80px] pointer-events-none group-hover:bg-[#8e2157]/30 transition-all duration-700" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    {/* Centered SVG Image */}
                    <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                      <Image
                        src={currentSvg}
                        alt={service.title}
                        width={200}
                        height={200}
                        priority={idx < 2}
                        className="w-full h-full object-contain drop-shadow-[0_15px_35px_rgba(255,255,255,0.2)]"
                      />
                    </div>

                    {/* Overlay badge (bottom left) */}
                    <div className="absolute bottom-5 left-5 z-20">
                      <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2">
                        <div className="w-6 h-6 rounded-md bg-[#8e2157] flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-white text-xs font-medium">{service.title}</span>
                      </div>
                    </div>

                    {/* Index number (top right) */}
                    <div className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                      <span className="text-white/70 text-[11px] font-mono">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text column */}
                <div className="w-full lg:w-[52%]">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#8e2157]/08 border border-[#8e2157]/15 flex items-center justify-center text-[#8e2157] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-base font-light leading-relaxed mb-7">
                    {service.description}
                  </p>

                  {/* Feature pills */}
                  {service.features && service.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-xs font-light"
                        >
                          <Check className="w-3 h-3 text-[#8e2157] shrink-0" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA link */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#8e2157] hover:text-[#6b1842] group/link transition-colors"
                  >
                    <span className="underline underline-offset-4 decoration-[#8e2157]/30 group-hover/link:decoration-[#8e2157]">
                      Inquire About This Service
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
