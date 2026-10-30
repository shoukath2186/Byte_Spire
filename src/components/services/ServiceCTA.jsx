"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import FinalCTA from "@/components/home/FinalCTA";

export default function ServiceCTA({ cta }) {
  if (!cta) {
    return <FinalCTA />;
  }

  const trustSignals = [
    "Free Project Discovery",
    "Dedicated Engineering Team",
    "On-Time Delivery Guarantee",
  ];

  const primaryBtn = cta.primaryButton || {
    label: "Get a Free Consultation",
    href: "/contact",
  };
  const secondaryBtn = cta.secondaryButton;

  return (
    <section className="relative bg-[#0d0d0d] py-10 sm:py-12 md:py-14 lg:py-16 border-t border-white/[0.08] overflow-hidden">
      {/* Background Image & Atmospheric Overlays */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <Image
          src="/cta_bg.png"
          alt="Call To Action Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered overlays: high-contrast text on left, rich image depth on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-[#420822]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85" />
      </div>

      {/* Ambient Brand Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#8e2157]/20 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Main Container with Balanced 2-Column Responsive Alignment */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* ══ LEFT: Text, Value Proposition & Trust Signals ══ */}
          <div className="w-full lg:w-[60%] text-left">
            {/* Section Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#8e2157]/30 text-pink-200 border border-[#8e2157]/50 mb-3.5 backdrop-blur-md">
              Get Started
            </div>

            {/* Headline — Compact & balanced */}
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-light text-white leading-snug mb-3 drop-shadow-md">
              {cta.title || "Ready to Build Something Powerful?"}
            </h2>

            {/* Description */}
            <p className="text-white/80 font-light text-sm md:text-base mb-5 max-w-2xl leading-relaxed drop-shadow-sm">
              {cta.description ||
                "Let's turn your idea into a scalable, high-performing solution. Talk to our engineering team today and get a free project consultation."}
            </p>

            {/* Trust Signal Pills — Clean & icon-free */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {trustSignals.map((signal, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs text-white/80 bg-white/[0.06] border border-white/10 backdrop-blur-sm"
                >
                  {signal}
                </span>
              ))}
            </div>

            {/* Additional Secondary Links */}
            {cta.secondaryLinks && cta.secondaryLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-4 border-t border-white/10">
                {cta.secondaryLinks.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.href}
                    className="inline-flex items-center text-white/75 hover:text-white text-xs sm:text-sm font-light underline underline-offset-4 decoration-white/20 hover:decoration-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ══ RIGHT: Compact Frosted Action Card ══ */}
          <div className="w-full lg:w-[36%] shrink-0">
            <div className="p-6 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.35)] flex flex-col items-center text-center">
              
              <h3 className="text-lg sm:text-xl font-medium text-white mb-1.5">
                Start Your Project
              </h3>
              <p className="text-white/65 text-xs font-light leading-relaxed mb-5 max-w-xs">
                No commitments. Get direct advice and a free roadmap estimate from our engineering team.
              </p>

              <div className="w-full space-y-2.5">
                {primaryBtn && (
                  <Link
                    href={primaryBtn.href}
                    className="w-full inline-flex items-center justify-center bg-[#8e2157] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#a0275f] transition-all duration-300 shadow-[0_6px_20px_rgba(142,33,87,0.35)] hover:shadow-[0_10px_25px_rgba(142,33,87,0.5)] hover:scale-[1.02]"
                  >
                    {primaryBtn.label}
                  </Link>
                )}

                {secondaryBtn && (
                  <Link
                    href={secondaryBtn.href}
                    className="w-full inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white/90 border border-white/20 px-6 py-3 rounded-full font-light text-sm transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]"
                  >
                    {secondaryBtn.label}
                  </Link>
                )}
              </div>

              <div className="text-white/45 text-[11px] font-light mt-3.5">
                Response within 24 business hours
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
