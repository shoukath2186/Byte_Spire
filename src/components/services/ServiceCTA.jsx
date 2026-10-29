"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";

export default function ServiceCTA({ cta }) {
  if (!cta) {
    return <FinalCTA />;
  }

  return (
    <section className="py-14 md:py-20 px-6 bg-[#8e2157] text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6b1842] via-[#8e2157] to-[#a62d6a] opacity-80" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Section Badge */}
          <div className="flex items-center gap-2 mb-5">
            <div className="relative w-3.5 h-1.5">
              <span className="block w-full h-full rounded-[2px] bg-white/60" />
            </div>
            <span className="text-white/70 text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase">
              Get Started
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
            {cta.title}
          </h2>
          <p className="text-white/80 font-light text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
            {cta.description}
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-10">
            {["Free Consultation", "Dedicated Team", "On-Time Delivery"].map(
              (signal, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-white/70 text-sm font-light"
                >
                  <CheckCircle2 className="w-4 h-4 text-white/50" />
                  {signal}
                </div>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            {cta.primaryButton && (
              <Link
                href={cta.primaryButton.href}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#8e2157] px-7 py-3.5 rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {cta.primaryButton.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {cta.secondaryButton && (
              <Link
                href={cta.secondaryButton.href}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/25 px-7 py-3.5 rounded-full font-light text-sm hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {cta.secondaryButton.label}
              </Link>
            )}
          </div>

          {/* Additional Secondary Links */}
          {cta.secondaryLinks && cta.secondaryLinks.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 pt-6 border-t border-white/15">
              {cta.secondaryLinks.map((link, lIdx) => (
                <Link
                  key={lIdx}
                  href={link.href}
                  className="inline-flex items-center text-white/80 hover:text-white text-sm font-light underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
