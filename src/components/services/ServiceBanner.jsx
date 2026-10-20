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
          <h1 className="text-3xl sm:text-4xl md:text-5xl  font-light text-white leading-tight mb-6 drop-shadow-lg">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-white/75 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
