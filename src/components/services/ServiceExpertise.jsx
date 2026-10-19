"use client";

import React from "react";

export default function ServiceExpertise({
  title = "Our Expertise",
  subServices = [],
}) {
  if (!subServices || subServices.length === 0) return null;

  return (
    <section className="py-12 md:py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-[#8e2157] rounded-full"></div>
        </div>

        <div className="flex flex-col">
          {subServices.map((sub, idx) => {
            const Icon = sub.icon;
            return (
              <div
                key={sub.id || idx}
                className="flex flex-col md:flex-row gap-6 md:gap-8 bg-transparent border-b border-gray-200 py-10 last:border-0 group"
              >
                {Icon && (
                  <div className="shrink-0">
                    <div className="bg-[#8e2157]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#8e2157] transition-all duration-300 group-hover:bg-[#8e2157] group-hover:text-white group-hover:scale-105">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                )}

                <div className="flex-grow">
                  <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-[#8e2157] transition-colors duration-300">
                    {sub.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-6 max-w-3xl">
                    {sub.description}
                  </p>

                  {sub.features && sub.features.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 max-w-3xl">
                      {sub.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center text-sm text-gray-700 font-light"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8e2157] mr-3 shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
