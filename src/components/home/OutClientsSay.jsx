'use client';

import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

function OutClientsSay() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 'testimonial-1',
      name: 'Rahul Nair',
      // location: 'Kochi, Kerala',
      // projectType: 'Web Application',
      content:
        'Bytespire revamped our web platform with zero downtime. Timely delivery, transparent weekly reviews, and load times dropped significantly.',
      rating: 5,
    },
    {
      id: 'testimonial-2',
      name: 'Anjali Menon',
      // location: 'Thiruvananthapuram, Kerala',
      // projectType: 'Custom Software',
      content:
        'Delivered our application strictly on schedule and within budget. Their team is technically solid, responsive, and committed to high quality.',
      rating: 5,
    },
    {
      id: 'testimonial-3',
      name: 'Vishnu Prasad',
      // location: 'Kozhikode, Kerala',
      // projectType: 'Cloud & API Integration',
      content:
        'Their attention to UI detail and backend efficiency is remarkable. Post-launch support has been completely smooth and reliable.',
      rating: 5,
    },
    {
      id: 'testimonial-4',
      name: 'Sneha Thomas',
      // location: 'Thrissur, Kerala',
      // projectType: 'Enterprise Portal',
      content:
        'Exceptional engineering standards. They optimized our platform architecture, which handled our festive traffic surges without a single hitch.',
      rating: 5,
    },
    {
      id: 'testimonial-5',
      name: 'Muhammed Fayiz',
      // location: 'Malappuram, Kerala',
      // projectType: 'Performance Optimization',
      content:
        'Dependable and transparent team. Clear communication at every milestone and they turned our complex requirements into an effortless product.',
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const desktopVisibleTestimonials = [0, 1, 2].map(
    (offset) => testimonials[(activeIndex + offset) % testimonials.length]
  );

  return (
    <section className="bg-white py-12 md:py-16 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-[#8e2157] text-xs font-medium mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Client Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            What Clients Say About Working With Us
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            Real outcomes and dependable digital solutions delivered for businesses across Kerala.
          </p>
        </div>

        {/* Desktop View: Strictly 1 Single Row of 3 Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {desktopVisibleTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className={`bg-gray-50/80 border rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_4px_25px_rgba(142,33,87,0.08)] ${idx === 0
                ? 'border-[#8e2157]/30 bg-white shadow-sm'
                : 'border-gray-100 hover:border-gray-200'
                }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-[#8e2157] bg-pink-50/80 px-2.5 py-1 rounded-full border border-pink-100/50">
                    {testimonial.projectType}
                  </span>
                  <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, starIdx) => (
                      <Star key={starIdx} className="h-4 w-4 fill-current text-[#8e2157]" />
                    ))}
                  </div>
                </div>

                <Quote className="h-5 w-5 text-gray-300 mb-2 rotate-180" />
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="mt-auto border-t border-gray-200/80 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-900 font-medium text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs font-light">
                      {testimonial.location}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Strictly 1 Single Testimonial Card */}
        <div className="block md:hidden">
          <div className="bg-gray-50/90 border border-gray-100 rounded-3xl p-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all duration-300 min-h-[290px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-[#8e2157] bg-pink-50/80 px-2.5 py-1 rounded-full border border-pink-100/50">
                  {testimonials[activeIndex].projectType}
                </span>
                <div className="flex gap-1" aria-label={`${testimonials[activeIndex].rating} out of 5 stars`}>
                  {[...Array(testimonials[activeIndex].rating)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current text-[#8e2157]" />
                  ))}
                </div>
              </div>

              <Quote className="h-5 w-5 text-gray-300 mb-2 rotate-180" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{testimonials[activeIndex].content}"
              </p>
            </div>

            <div className="mt-auto border-t border-gray-200/80 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-900 font-medium text-sm">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-500 text-xs font-light">
                    {testimonials[activeIndex].location}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls: Clean Radio Buttons Without Count */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-8 h-8 rounded-full border border-gray-200 bg-white text-gray-500 hover:text-gray-900 hover:border-gray-300 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <fieldset className="flex items-center">
            <legend className="sr-only">Select testimonial</legend>
            <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200/80 rounded-full px-4 py-2 shadow-sm">
              {testimonials.map((testimonial, i) => (
                <label
                  key={testimonial.id || i}
                  htmlFor={`testimonial-radio-${i}`}
                  className="cursor-pointer p-1 flex items-center justify-center group"
                >
                  <input
                    type="radio"
                    id={`testimonial-radio-${i}`}
                    name="testimonial-selection"
                    checked={activeIndex === i}
                    onChange={() => setActiveIndex(i)}
                    className="sr-only"
                  />
                  <span
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all duration-200 ${activeIndex === i
                      ? 'border-[#8e2157] bg-white ring-2 ring-[#8e2157]/25'
                      : 'border-gray-300 bg-white group-hover:border-gray-400'
                      }`}
                  >
                    {activeIndex === i && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8e2157] transition-transform duration-200 scale-100" />
                    )}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-8 h-8 rounded-full border border-gray-200 bg-white text-gray-500 hover:text-gray-900 hover:border-gray-300 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default OutClientsSay;
