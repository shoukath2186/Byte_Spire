"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare, Briefcase, Zap, Globe, ShieldCheck, Users } from "lucide-react";

const trustTags = [
  { icon: Zap, label: "Free Project Discovery" },
  { icon: ShieldCheck, label: "Sub-Second Load Speeds" },
  { icon: Globe, label: "Kerala & Global Standards" },
  { icon: Users, label: "Dedicated Engineering Team" },
];

export default function InnerCTA({ cta }) {
  const title = cta?.title || "Ready to Build a High-Converting Website for Your Business?";
  const description = cta?.description || "Partner with ByteSpire to build custom web applications, responsive corporate sites, and e-commerce platforms tailored for ambitious businesses in Kerala and worldwide.";
  const primaryButton = cta?.primaryButton || { label: "Request Free Web Consultation", href: "/contact" };
  const secondaryLinks = cta?.secondaryLinks || [];

  return (
    <section className="relative bg-[#8e2157] py-20 md:py-28 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6b1842] via-[#8e2157] to-[#9e2860]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-black/20 blur-[80px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* ══ LEFT — Main Content ══ */}
          <div className="w-full lg:w-[55%]">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/25 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              <span className="text-white/90 text-[11px] font-semibold tracking-[0.15em] uppercase">Web Development Consultation</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light text-white leading-[1.1] mb-6">
              {title}
            </h2>

            {/* Description */}
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
              {description}
            </p>

            {/* Trust Tags */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {trustTags.map((tag, idx) => {
                const Icon = tag.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5 text-white/80 text-sm font-light">
                    <Icon className="w-4 h-4 text-white/60 shrink-0" />
                    <span>{tag.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Secondary links */}
            {secondaryLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-8 border-t border-white/20">
                {secondaryLinks.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-white/75 hover:text-white text-sm font-light underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
                  >
                    {lIdx === 0 ? <MessageSquare className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5" />}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ══ RIGHT — Consultation Card ══ */}
          <div className="w-full lg:w-[45%]">
            <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.3)]">

              <h3 className="text-gray-900 text-xl md:text-2xl font-medium mb-2">
                Start Your Web Project
              </h3>
              <p className="text-gray-500 text-sm font-light mb-8">
                Free consultation. No commitment. Get expert advice on your next web project within 24 hours.
              </p>

              {/* Decorative field rows — static/visual only */}
              <div className="space-y-3 mb-8">
                {["Your Name", "Business Email", "Project Type"].map((label, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                    <div className="w-2 h-2 rounded-full bg-[#8e2157]/30 shrink-0" />
                    <span className="text-gray-400 text-sm font-light">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={primaryButton.href}
                className="group flex items-center justify-center gap-3 w-full py-4 bg-[#8e2157] hover:bg-[#a62d6a] text-white rounded-xl font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-[0_12px_30px_rgba(142,33,87,0.4)] hover:-translate-y-0.5"
              >
                <span>{primaryButton.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Trust micro-text */}
              <div className="flex items-center justify-center gap-2 mt-5 text-gray-400 text-xs font-light">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span>100% Free — No spam, no commitment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
