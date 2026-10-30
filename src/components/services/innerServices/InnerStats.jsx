"use client";

import React from "react";

export default function InnerStats({ stats }) {
  const statItems = stats || [
    {
      value: "35+",
      title: "Projects Delivered",
      description: "Small to Medium Businesses",
    },
    {
      value: "20+",
      title: "Happy Clients",
      description: "Partners globally",
    },
    {
      value: "99%",
      title: "Satisfaction",
      description: "Top quality coding",
    },
    {
      value: "3+",
      title: "Years Experience",
      description: "Professional development",
    },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-10 sm:py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl border border-gray-100/90 bg-[#fafafa]/50 hover:bg-pink-50/30 hover:border-[#8e2157]/20 transition-all duration-300 text-center flex flex-col justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md group"
            >
              <div className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-[#8e2157] mb-1 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-700 uppercase tracking-widest font-medium mb-1">
                {stat.title}
              </div>
              <div className="text-xs text-gray-500 font-light">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

