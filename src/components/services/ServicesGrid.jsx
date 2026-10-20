"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Check } from "lucide-react";

export const defaultServices = [
  {
    image: "/service_tech.png",
    title: "Technology & Application Development",
    description:
      "We build robust, scalable, and high-performance web and mobile applications tailored to your unique business needs. From initial architecture to deployment, our engineering team ensures top-tier quality.",
    features: [
      "Custom Web Applications",
      "Cross-Platform Mobile Apps",
      "API Development & Integration",
      "Cloud Architecture & DevOps",
    ],
    linkText: "Explore technology",
    href: "/services/technology",
  },
  {
    image: "/service_marketing.png",
    title: "Data-Driven SEO & Digital Marketing",
    description:
      "Accelerate your growth with targeted marketing strategies. We combine creative campaigns with deep data analytics to maximize your ROI and increase your brand visibility online.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Management",
      "Conversion Rate Optimization",
    ],
    linkText: "View marketing strategies",
    href: "/services/digital-marketing",
  },
  {
    image: "/service_design.png",
    title: "User-Centric UI/UX & Experience Design",
    description:
      "Great design is about how it works, not just how it looks. We craft intuitive, frictionless user journeys and stunning interfaces that keep your users engaged and satisfied.",
    features: [
      "Wireframing & Prototyping",
      "User Interface (UI) Design",
      "User Experience (UX) Research",
      "Usability Testing",
    ],
    linkText: "See design process",
    href: "/services/experience-design",
  },
  {
    image: "/service_branding.png",
    title: "Corporate Identity & Brand Strategy",
    description:
      "Your brand is your promise to your customer. We help you define your voice, visualize your identity, and position your company as a market leader in your industry.",
    features: [
      "Logo & Visual Identity",
      "Brand Guidelines & Strategy",
      "Corporate Materials Design",
      "Rebranding Solutions",
    ],
    linkText: "Discover branding",
    href: "/services/branding",
  },
];

export default function ServicesGrid({ services = defaultServices }) {
  return (
    <section className="bg-white py-14 md:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-3.5 h-1.5">
              <span className="block w-full h-full rounded-[2px] bg-[#8e2157]" />
            </div>
            <span className="text-gray-900/80 text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase">
              Our Services
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4 max-w-2xl">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            From building complex software to crafting beautiful brands and driving traffic, we provide end-to-end services to help your business thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-[0_12px_40px_rgba(142,33,87,0.08)] hover:border-[#8e2157]/20 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="h-56 md:h-64 w-full overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7 md:p-9 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 leading-snug mb-4 group-hover:text-[#8e2157] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-500 font-light text-sm leading-relaxed mb-7">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-sm font-light text-gray-700"
                    >
                      <Check className="h-4 w-4 text-[#8e2157] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bottom Link */}
                <Link href={service.href} className="mt-auto inline-block">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[#8e2157] hover:text-[#6b1842] transition-colors">
                    <span>{service.linkText}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
