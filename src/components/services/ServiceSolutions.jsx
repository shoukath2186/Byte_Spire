"use client";

import React from "react";

export default function ServiceSolutions({ solutions }) {
  if (!solutions || !solutions.points || solutions.points.length === 0) return null;

  return (
    <section className="py-12 md:py-20 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            {solutions.title}
          </h2>
          {solutions.description && (
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {solutions.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {Icon && <Icon className="w-10 h-10 text-[#8e2157] mb-6" />}
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
