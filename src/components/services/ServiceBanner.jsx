"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServiceBanner({
  title,
  description,
  bannerImage,
  backHref = "/services",
  backLabel = "Back to Services",
  primaryCta,
  secondaryCta,
  trustHighlights,
}) {
  return (
    <section className="relative bg-black pt-28 pb-20 md:pt-36 md:pb-28 px-6 overflow-hidden">
      {/* Background Image */}
      {bannerImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url("${bannerImage}")` }}
        />
      )}
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black/90" />

      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          {/* <Link
            href={backHref}
            className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors text-sm font-light"
          >
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
            {backLabel}
          </Link> */}

          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#8e2157]/25 text-pink-200 border border-[#8e2157]/40 mb-5 backdrop-blur-md">
            Service Detail
          </div> */}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-6 drop-shadow-lg">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-white/75 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8">
              {description}
            </p>
          )}

          {/* Optional Action Buttons */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {primaryCta && (
                <Link
                  href={primaryCta.href || "/contact"}
                  className="px-6 py-3.5 bg-[#8e2157] hover:bg-[#a62d6a] text-white rounded-xl text-sm font-medium transition-all shadow-lg hover:shadow-[#8e2157]/40 flex items-center gap-2 group cursor-pointer"
                >
                  <span>{primaryCta.label}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href || "#services"}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-sm font-medium transition-all backdrop-blur-sm cursor-pointer"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {/* Social Proof & Trust Highlights */}
          {trustHighlights && trustHighlights.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/15">
              {trustHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8e2157] mt-1.5 shrink-0 ring-4 ring-[#8e2157]/30" />
                  <div>
                    <h4 className="text-white text-sm font-medium leading-snug">
                      {highlight.title}
                    </h4>
                    <p className="text-white/60 text-xs mt-0.5 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
