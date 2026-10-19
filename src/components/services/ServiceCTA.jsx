"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";

export default function ServiceCTA({ cta }) {
  if (!cta) {
    return <FinalCTA />;
  }

  return (
    <section className="py-12 md:py-16 px-6 bg-[#8e2157] text-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-left">
            {cta.title}
          </h2>
          <p className="text-white/80 font-light text-lg mb-10 max-w-2xl text-left">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            {cta.primaryButton && (
              <Link
                href={cta.primaryButton.href}
                className="bg-white text-[#8e2157] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
              >
                {cta.primaryButton.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            )}
            {cta.secondaryButton && (
              <Link
                href={cta.secondaryButton.href}
                className="bg-black/20 text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-black/40 transition-colors flex items-center justify-center"
              >
                {cta.secondaryButton.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
