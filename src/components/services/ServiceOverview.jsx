"use client";

import React from "react";

export default function ServiceOverview({
  title = "Overview",
  description,
}) {
  if (!description) return null;

  return (
    <section className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
