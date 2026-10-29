"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, MessageCircle } from "lucide-react";

export default function InnerFAQ({ faq }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = faq || [];
  if (!faqItems.length) return null;

  return (
    <section className="bg-gray-50 py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* LEFT — Sticky panel */}
          <div className="w-full lg:w-[38%] lg:sticky lg:top-32 self-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#8e2157]" />
              <span className="text-[#8e2157] text-[11px] font-semibold tracking-[0.2em] uppercase">FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15] mb-5">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-500 text-base font-light leading-relaxed mb-8 max-w-xs">
              Direct answers to the most common questions about our web development services, timelines, and processes.
            </p>

            {/* FAQ count indicator */}
            <div className="flex items-center gap-3 mb-10">
              <span className="text-4xl font-thin text-gray-200 leading-none">
                {String(faqItems.length).padStart(2, "0")}
              </span>
              <span className="text-gray-400 text-sm font-light">questions answered</span>
            </div>

            {/* Contact link */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 text-[#8e2157] hover:text-[#6b1842] text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Still have questions? Talk to us</span>
              <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </Link>
          </div>

          {/* RIGHT — Accordion list */}
          <div className="w-full lg:w-[62%]">
            <div className="flex flex-col divide-y divide-gray-200">
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div key={idx}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full py-6 flex items-start justify-between gap-6 text-left cursor-pointer focus:outline-none group"
                    >
                      <span className={`text-base md:text-lg font-light leading-snug transition-colors duration-200 pr-2 ${
                        isOpen ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                      }`}>
                        {item.question}
                      </span>

                      <span className={`w-7 h-7 rounded-full flex items-center justify-center border shrink-0 mt-0.5 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#8e2157] border-[#8e2157] text-white"
                          : "border-gray-300 text-gray-400 group-hover:border-gray-400"
                      }`}>
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-6">
                        {/* Left accent bar */}
                        <div className="flex gap-4">
                          <div className="w-0.5 bg-[#8e2157] rounded-full shrink-0 self-stretch opacity-70" />
                          <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
