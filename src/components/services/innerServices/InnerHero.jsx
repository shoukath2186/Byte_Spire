"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function InnerHero({ hero, bannerImage, slug }) {
  const headline =
    hero?.headline ||
    "Custom Web Development & Modern Web Solutions";
  const subheadline =
    hero?.subheadline ||
    "ByteSpire engineers high-speed, SEO-optimized web platforms built for growth. From Kerala to global markets, we deliver digital excellence at every pixel.";
  const badge = hero?.badge || "Web Engineering Excellence";
  const primaryCta = hero?.primaryCta || {
    label: "Start Your Project",
    href: "/contact",
  };
  const secondaryCta = hero?.secondaryCta || {
    label: "Explore Services",
    href: "#services-section",
  };
  const trustHighlights = hero?.trustHighlights || [
    "Speed & Performance Optimized",
    "Mobile-First Architecture",
    "Local & Global Impact",
    "SEO-Ready from Day One",
  ];

  const heroImage = bannerImage || "/service_tech.png";

  const renderHeadline = (text) => {
    if (!text) return null;
    if (text.includes(" & ")) {
      const parts = text.split(" & ");
      return (
        <>
          {parts[0]} &amp; <br className="hidden sm:inline" />
          <span className="font-normal text-[#c45d8a]">{parts.slice(1).join(" & ")}</span>
        </>
      );
    }
    if (text.includes(" in ")) {
      const parts = text.split(" in ");
      return (
        <>
          {parts[0]}{" "}
          <span className="font-normal text-[#c45d8a]">in {parts.slice(1).join(" in ")}</span>
        </>
      );
    }
    return text;
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Full-width Background Banner Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-black">
        <Image
          src={heroImage}
          alt={headline}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark gradient overlays matching homepage for pristine legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/45 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-10 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent h-32 z-20 pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#8e2157]/25 rounded-full blur-[140px] pointer-events-none z-10" />

      {/* Main Banner Content Area — Home-page-like alignment */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 flex flex-col justify-center">
        <div className="max-w-3xl text-left">

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-white/50 text-xs font-light mb-5">
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href="/services" className="hover:text-white transition-colors duration-200">Services</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href="/services/technology" className="hover:text-white transition-colors duration-200">Technology</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-pink-200 font-medium">
              {hero?.breadcrumbLabel || "Web Development"}
            </span>
          </nav>

          {/* Homepage-styled Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#8e2157]/25 text-pink-200 border border-[#8e2157]/40 mb-5 backdrop-blur-md">
            <Sparkles className="h-3 w-3 animate-pulse text-pink-300" />
            <span>{badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight md:leading-[1.18] tracking-tight mb-5 drop-shadow-lg">
            {renderHeadline(headline)}
          </h1>

          {/* Subheadline / Summary */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8 drop-shadow-sm">
            {subheadline}
          </p>

          {/* CTA Buttons — Homepage-style rounded-full pills */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 bg-[#8e2157] text-white font-medium px-6 py-3 rounded-full text-sm hover:bg-[#6b1842] hover:scale-105 transition-all duration-300 shadow-[0_6px_18px_rgba(142,33,87,0.3)] hover:shadow-[0_10px_22px_rgba(142,33,87,0.4)]"
            >
              <span>{primaryCta.label}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-light px-5 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300"
            >
              <span>{secondaryCta.label}</span>
            </Link>
          </div>

          {/* Quick-catch Trust Highlight Badges */}
          {trustHighlights && trustHighlights.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-6 border-t border-white/10">
              {trustHighlights.map((item, idx) => {
                const title = typeof item === "string" ? item : item.title;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-white/85 bg-white/[0.06] border border-white/10 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c45d8a] flex-shrink-0" />
                    <span>{title}</span>
                  </span>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
