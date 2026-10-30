import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, PenTool, Code2, Rocket } from 'lucide-react';

function OurProcess() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Strategy',
      description:
        'We analyze your business goals, target audience, and project requirements to map out a clear roadmap and strategic plan.',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Design & Architecture',
      description:
        'Our team crafts intuitive UI/UX designs and robust system architectures tailored to deliver seamless user experiences and scalability.',
    },
    {
      number: '03',
      icon: Code2,
      title: 'Execution & Development',
      description:
        'Leveraging modern technology stacks, our developers write clean, efficient code with continuous testing and quality assurance.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Optimization',
      description:
        'We deploy your product smoothly into production and provide ongoing performance monitoring, optimization, and support.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100 relative overflow-x-clip">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] bg-gradient-to-r from-transparent via-[#8e2157]/5 to-transparent blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 xl:gap-20">
          
          {/* Left Column (Sticky Header & CTA) */}
          <div className="lg:sticky lg:top-32 w-full lg:w-[48%] space-y-6">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="relative w-3.5 h-1.5">
                <span className="block w-full h-full rounded-[2px] bg-[#8e2157]" />
              </div>
              <span className="text-gray-900/80 text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase">
                Process
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight max-w-[480px]">
              How We Work — Our Proven 4-Step Process
            </h2>

            <p className="text-gray-500 text-sm md:text-[15px] font-light leading-relaxed max-w-[460px]">
              We follow a streamlined, transparent development methodology designed to bring your vision to life efficiently and effectively.
            </p>

            <div className="w-fit pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#8e2157] text-white font-medium px-7 py-3.5 rounded-full text-sm hover:bg-[#6b1842] hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(142,33,87,0.2)] hover:shadow-[0_12px_25px_rgba(142,33,87,0.35)]"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column (Stacked Sticky Cards) */}
          <div className="w-full lg:w-[52%] flex flex-col gap-4 md:gap-5 [--stack-base:80px] [--stack-offset:14px] lg:[--stack-base:130px] lg:[--stack-offset:20px]">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="sticky bg-white p-5 md:p-7 rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(142,33,87,0.08)] hover:border-[#8e2157]/40 flex flex-col items-start transition-all duration-500 hover:-translate-y-1 group"
                  style={{
                    top: `calc(var(--stack-base) + ${i} * var(--stack-offset))`,
                    zIndex: i + 1,
                  }}
                >
                  {/* Top Bar: Icon on Left, Step Number on Right */}
                  <div className="flex justify-between items-start w-full mb-5">
                    <div className="relative w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#8e2157] group-hover:border-[#8e2157] transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-[#8e2157]/30 group-hover:-translate-y-0.5">
                      <Icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-500" />
                    </div>

                    <span className="text-2xl md:text-3xl font-bold text-gray-200 group-hover:text-[#8e2157]/40 transition-colors leading-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8e2157]">
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 group-hover:text-[#8e2157] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[480px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurProcess;
