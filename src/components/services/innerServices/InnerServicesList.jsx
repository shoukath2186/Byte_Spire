"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { resolveIcon } from "./iconHelper";

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

            return (
              <div
                key={service.id || idx}
                className={`flex flex-col gap-10 md:gap-12 lg:gap-16 xl:gap-20 ${
                  isOdd
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } items-center`}
              >
                {/* Image column */}
                <div className="w-full lg:w-[48%] shrink-0">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[420px] rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-100 group">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                        <Icon className="w-16 h-16 text-gray-200" />
                      </div>
                    )}
                    {/* Overlay badge */}
                    <div className="absolute bottom-5 left-5">
                      <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2">
                        <div className="w-6 h-6 rounded-md bg-[#8e2157] flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-white text-xs font-medium">{service.title}</span>
                      </div>
                    </div>
                    {/* Index number */}
                    <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
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
