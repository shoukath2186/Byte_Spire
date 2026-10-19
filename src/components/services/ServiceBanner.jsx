"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServiceBanner({
  title,
  bannerImage,
  backHref = "/services",
  backLabel = "Back to Services",
}) {
  return (
    <section className="relative bg-black pt-28 pb-16 md:pt-32 md:pb-20 px-6 overflow-hidden">
      {/* Background Image */}
      {bannerImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url("${bannerImage}")` }}
        />
      )}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />

      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left">
        <div className="max-w-4xl">
          <Link
            href={backHref}
            className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm font-light"
          >
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
            {backLabel}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight drop-shadow-lg">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
