"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ServiceFAQ({
  title = "Frequently Asked Questions",
  faq = [],
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  if (!faq || faq.length === 0) return null;

  return (
    <section className="py-12 md:py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 bg-[#8e2157] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-gray-50 rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen
                      ? "border-[#8e2157]/50 shadow-md"
                      : "border-gray-100 hover:border-[#8e2157]/30"
                  }`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex items-center justify-between p-6">
                    <h3
                      className={`text-lg font-medium pr-8 transition-colors duration-300 ${
                        isOpen ? "text-[#8e2157]" : "text-gray-900"
                      }`}
                    >
                      {item.question}
                    </h3>
                    <div
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[#8e2157]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#8e2157] opacity-50 group-hover:opacity-100" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-96 opacity-100 pb-6 px-6"
                        : "max-h-0 opacity-0 px-6"
                    }`}
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 font-light text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
