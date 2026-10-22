"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Plus } from "lucide-react";

// Curated high-quality visuals mapped to sub-service categories
const defaultCategoryImages = {
  "mobile-development": "/service_mobile.jpg",
  "custom-software": "/service_custom_software.jpg",
  "ecommerce-store": "/service_ecommerce.jpg",
  "business-websites": "/banner-center.png",
  "ai-solutions": "/agentic_ai_cover.png",
  "web-development": "/service_tech.png",
  "software-testing": "/service_tech.png",
  "custom-application": "/banner-center.png",
  "seo-optimization": "/service_marketing.png",
  "branding": "/service_branding.png",
  "web-design-development": "/service_tech.png",
  "360-marketing": "/services_bg.png",
  "pay-per-click": "/services_bg.png",
  "content-marketing": "/banner-right.png",
  "email-marketing": "/service_marketing.png",
  "ux-research": "/service_design.png",
  "ui-design": "/about_bg.png",
  "wireframing": "/service_design.png",
  "design-systems": "/tech_image.png",
  "brand-strategy": "/service_branding.png",
  "logo-identity": "/banner-left.png",
  "brand-guidelines": "/service_branding.png",
  "brand-activation": "/cta_bg.png",
};

export default function ServiceExpertise({
  title = "Our Core Services",
  subServices = [],
  fallbackImage,
}) {
  if (!subServices || subServices.length === 0) return null;

  // Track the active accordion index (default to the first item open)
  const [activeIdx, setActiveIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setActiveIdx((prev) => (prev === idx ? -1 : idx));
  };

  // Currently selected subservice for the sticky image preview
  const activeItem =
    activeIdx >= 0 && activeIdx < subServices.length
      ? subServices[activeIdx]
      : subServices[0];

  const ActiveIcon = activeItem?.icon;

  // Resolve image with fallback hierarchy
  const activeImage =
    activeItem?.image ||
    defaultCategoryImages[activeItem?.id] ||
    fallbackImage ||
    "/service_tech.png";

  return (
    <section
      className="py-16 md:py-24 px-6 bg-white border-t border-gray-100"
      id="ourProcessComponent4"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-3.5 h-1.5">
              <span className="block w-full h-full rounded-[2px] bg-[#8e2157]" />
            </div>
            <span className="text-gray-900/80 text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase">
              Our Expertise
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-light text-gray-900 leading-tight mb-4 max-w-3xl">
            {title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            Each service is crafted to address specific business challenges with
            precision, scalability, and measurable impact.
          </p>
        </div>

        {/* Content Wrapper: Accordion on Left, Sticky Image on Right */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14 xl:gap-20">
          
          {/* Left Column: Accordion List */}
          <div className="w-full lg:w-[54%] xl:w-[56%] order-2 lg:order-1 flex flex-col">
            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {subServices.map((sub, idx) => {
                const isOpen = activeIdx === idx;
                const Icon = sub.icon;
                const formattedNumber = String(idx + 1).padStart(2, "0");

                return (
                  <div
                    key={sub.id || idx}
                    className="accordion-item transition-colors duration-200"
                  >
                    {/* Accordion Header Button */}
                    <div className="accordion-header">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleAccordion(idx)}
                        onMouseEnter={() => {
                          // Preview on hover for seamless responsiveness
                          if (activeIdx !== idx) setActiveIdx(idx);
                        }}
                        className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                      >
                        <div className="flex items-center gap-3.5 sm:gap-4 flex-grow pr-2">
                          {/* Item Number */}
                          <span
                            className={`text-xs sm:text-sm font-mono tracking-wider transition-colors duration-300 ${
                              isOpen
                                ? "text-[#8e2157] font-semibold"
                                : "text-gray-400 group-hover:text-gray-900"
                            }`}
                          >
                            {formattedNumber}
                          </span>

                          {/* Subservice Title */}
                          <span
                            className={`hover text-lg sm:text-xl md:text-2xl transition-colors duration-300 leading-snug ${
                              isOpen
                                ? "text-[#8e2157] font-normal"
                                : "text-gray-900 font-light group-hover:text-[#8e2157]"
                            }`}
                          >
                            {sub.title}
                          </span>
                        </div>

                        {/* Animated Plus / Cross Icon */}
                        <span
                          className={`relative shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "bg-[#8e2157] text-white border-[#8e2157] rotate-45 shadow-sm shadow-[#8e2157]/30"
                              : "bg-gray-50 text-gray-500 border-gray-200 group-hover:border-[#8e2157]/50 group-hover:text-[#8e2157] group-hover:bg-[#8e2157]/5"
                          }`}
                        >
                          <Plus className="w-4 h-4 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>

                    {/* Accordion Body (Collapsible Content) */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pb-6 sm:pb-8 pt-1"
                          : "grid-rows-[0fr] opacity-0 pb-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-7 sm:pl-9 pr-2">
                          {/* Description */}
                          <p className="text-gray-500 text-sm sm:text-[15px] font-light leading-relaxed mb-6">
                            {sub.description}
                          </p>

                          {/* Features List */}
                          {sub.features && sub.features.length > 0 && (
                            <div className="bg-gray-50/70 rounded-2xl p-4 sm:p-5 border border-gray-100">
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                {sub.features.map((feature, fIdx) => (
                                  <li
                                    key={fIdx}
                                    className="flex items-start text-xs sm:text-sm text-gray-700 font-light"
                                  >
                                    <Check className="w-4 h-4 text-[#8e2157] mr-2.5 mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Related Image */}
          <div className="w-full lg:w-[46%] xl:w-[44%] order-1 lg:order-2 lg:sticky lg:top-28 xl:top-32 self-start">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-[0_16px_45px_rgba(0,0,0,0.06)] aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[5/4] transition-all duration-500 group">
              {/* Image Preview with Smooth Transition */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  key={activeItem?.id || activeIdx}
                  src={activeImage}
                  alt={activeItem?.title || "Service related visual"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                
                {/* Modern Gradient Shade for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              </div>

              {/* Bottom Overlay Info Tag */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 flex flex-col justify-end text-white z-10 pointer-events-none">
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-xs font-medium text-white tracking-wide shadow-sm">
                    {ActiveIcon && <ActiveIcon className="w-3.5 h-3.5 text-white" />}
                    <span>
                      0{((activeIdx >= 0 ? activeIdx : 0) + 1).toString().slice(-2)} / 0{subServices.length.toString().slice(-2)}
                    </span>
                  </div>

                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-white/75 font-medium">
                    ByteSpire Capabilities
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white leading-snug drop-shadow-sm">
                  {activeItem?.title}
                </h3>

                {activeItem?.features && activeItem.features.length > 0 && (
                  <p className="text-xs sm:text-sm text-white/80 font-light mt-1.5 line-clamp-1 drop-shadow-sm">
                    {activeItem.features.join(" • ")}
                  </p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
