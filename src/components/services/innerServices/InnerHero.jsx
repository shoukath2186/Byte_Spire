"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, Zap, Globe, Star, TrendingUp } from "lucide-react";

export default function InnerHero({ hero, bannerImage, slug }) {
  const headline =
    hero?.headline ||
    "Custom Web Development & Modern Web Solutions";
  const subheadline =
    hero?.subheadline ||
    "ByteSpire engineers high-speed, SEO-optimized web platforms built for growth. From Kerala to global markets, we deliver digital excellence at every pixel.";
  const primaryCta = hero?.primaryCta || {
    label: "Build Your Website Today",
    href: "/contact",
  };
  const secondaryCta = hero?.secondaryCta || {
    label: "Explore Web Solutions",
    href: "#services-section",
  };
  const trustHighlights = hero?.trustHighlights || [
    "Speed & Performance Optimized",
    "Mobile-First Architecture",
    "Local & Global Impact",
    "SEO-Ready from Day One",
  ];

  const heroImage = bannerImage || "/service_tech.png";

  const stats = [
    { label: "Projects Delivered", value: "120+" },
    { label: "Core Web Vitals", value: "100/100" },
    { label: "Avg Load Time", value: "<0.8s" },
  ];

  return (
    <section className="relative bg-black min-h-screen flex flex-col overflow-hidden">
      {/* ── Two-column layout ── */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-screen">

        {/* LEFT column — Text */}
        <div className="relative z-20 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 pt-32 pb-16 lg:pt-40 lg:pb-24 lg:w-[52%] xl:w-[48%]">
          {/* Ambient glow */}
          <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-[#8e2157]/20 rounded-full blur-[140px] pointer-events-none" />

          {/* Breadcrumb */}
          <nav className="flex items-center flex-wrap gap-1.5 text-white/45 text-xs font-light mb-8 relative z-10">
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/25" />
            <Link href="/services" className="hover:text-white transition-colors duration-200">Services</Link>
            <ChevronRight className="w-3 h-3 text-white/25" />
            <Link href="/services/technology" className="hover:text-white transition-colors duration-200">Technology</Link>
            <ChevronRight className="w-3 h-3 text-white/25" />
            <span className="text-[#c45d8a] font-medium">
              {hero?.breadcrumbLabel || "Web Development"}
            </span>
          </nav>

          {/* Badge */}
          <div className="relative z-10 mb-6 inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-[#8e2157]/15 border border-[#8e2157]/35 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c45d8a] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-200/90">
              {hero?.badge || "Web Engineering Excellence"}
            </span>
          </div>

          {/* Headline */}
          <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl xl:text-[3.4rem] font-light text-white leading-[1.12] mb-6 max-w-xl">
            {headline.includes(" & ") ? (
              <>
                {headline.split(" & ")[0]} &amp;{" "}
                <br className="hidden md:block" />
                <span className="text-[#c45d8a]">{headline.split(" & ").slice(1).join(" & ")}</span>
              </>
            ) : (
              headline
            )}
          </h1>

          {/* Subheadline */}
          <p className="relative z-10 text-white/65 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-lg">
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 mb-10">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8e2157] hover:bg-[#a0275f] text-white rounded-xl text-sm font-medium transition-all duration-300 shadow-lg shadow-[#8e2157]/30 hover:shadow-[#8e2157]/50 hover:scale-[1.02]"
            >
              <span>{primaryCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/[0.06] hover:bg-white/[0.12] text-white/90 border border-white/15 hover:border-white/30 rounded-xl text-sm font-light transition-all duration-300 backdrop-blur-sm"
            >
              <span>{secondaryCta.label}</span>
            </Link>
          </div>

          {/* Trust Highlights — horizontal with dot separators */}
          <div className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 border-t border-white/[0.08]">
            {trustHighlights.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-white/50 text-xs font-light">
                  {typeof item === "string" ? item : item.title}
                </span>
                {idx < trustHighlights.length - 1 && (
                  <span className="text-white/20 text-xs">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT column — Image + overlay stats */}
        <div className="relative lg:w-[48%] xl:w-[52%] min-h-[50vw] lg:min-h-0 overflow-hidden">
          {/* Image */}
          <Image
            src={heroImage}
            alt="Web Development"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent lg:from-black lg:via-black/20 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          {/* Floating stat card — top right */}
          <div className="absolute top-8 right-6 hidden lg:flex flex-col gap-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4">
            <div className="flex items-center gap-2 text-[#c45d8a] mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">Performance</span>
            </div>
            <p className="text-white text-2xl font-light">100<span className="text-[#c45d8a]">/100</span></p>
            <p className="text-white/40 text-[11px]">Core Web Vitals Score</p>
          </div>

          {/* Floating stat card — bottom left on image */}
          <div className="absolute bottom-8 left-6 hidden lg:flex items-center gap-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3">
            <div className="w-9 h-9 rounded-lg bg-[#8e2157]/30 border border-[#8e2157]/40 flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#c45d8a]" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">&lt;0.8s Load Time</p>
              <p className="text-white/40 text-[11px]">Avg across all projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="relative z-20 bg-[#0d0d0d] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 py-5 sm:py-6 sm:px-10 flex-1 first:pl-0 last:pr-0"
            >
              <div className="w-px h-8 bg-[#8e2157] hidden sm:block" />
              <div>
                <p className="text-white text-2xl font-light tracking-tight">{stat.value}</p>
                <p className="text-white/40 text-xs mt-0.5 font-light">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
