"use client";

import React, { useState } from "react";
import {
  Search,
  Layers,
  Code2,
  FlaskConical,
  Rocket,
  ChevronRight,
} from "lucide-react";

const STEP_ICONS = [Search, Layers, Code2, FlaskConical, Rocket];

const STEP_COLORS = [
  { bg: "bg-blue-50", border: "border-blue-100", icon: "text-blue-500", pill: "bg-blue-500/10 text-blue-600 border-blue-200" },
  { bg: "bg-violet-50", border: "border-violet-100", icon: "text-violet-500", pill: "bg-violet-500/10 text-violet-600 border-violet-200" },
  { bg: "bg-[#8e2157]/5", border: "border-[#8e2157]/15", icon: "text-[#8e2157]", pill: "bg-[#8e2157]/10 text-[#8e2157] border-[#8e2157]/20" },
  { bg: "bg-amber-50", border: "border-amber-100", icon: "text-amber-500", pill: "bg-amber-500/10 text-amber-600 border-amber-200" },
  { bg: "bg-emerald-50", border: "border-emerald-100", icon: "text-emerald-500", pill: "bg-emerald-500/10 text-emerald-600 border-emerald-200" },
];

const STEP_TAGS = [
  ["Goal Discovery", "Tech Stack", "Audience Research"],
  ["Wireframing", "Design Systems", "DB Architecture"],
  ["Frontend", "Backend", "API Integration"],
  ["Cross-Browser", "Core Web Vitals", "SEO Audit"],
  ["Deployment", "SSL", "Analytics Setup"],
];

export default function InnerProcess({ process }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = process?.steps || [];
  if (!steps.length) return null;

  const active = steps[activeStep];
  const ActiveIcon = STEP_ICONS[activeStep] || Code2;
  const activeColor = STEP_COLORS[activeStep] || STEP_COLORS[0];
  const activeTags = STEP_TAGS[activeStep] || [];

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden relative">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#8e2157 1px, transparent 1px), linear-gradient(to right, #8e2157 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 md:mb-18">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#8e2157]" />
              <span className="text-[#8e2157] text-[11px] font-semibold tracking-[0.2em] uppercase">
                {process?.badge || "Process Roadmap"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]">
              {process?.title || "Our Engineering Process Roadmap"}
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-[15px] font-light leading-relaxed max-w-xs lg:text-right">
            {process?.description ||
              "A structured, milestone-driven framework ensuring transparent delivery from kickoff to launch."}
          </p>
        </div>

        {/* ── Main Layout: Left step list + Right active detail ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* ══ LEFT — Clickable Step List ══ */}
          <div className="w-full lg:w-[45%] flex flex-col">

            {/* Connecting line + Steps */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-6 bottom-6 w-px bg-gray-100" />

              <div className="flex flex-col gap-1">
                {steps.map((step, idx) => {
                  const StepIcon = STEP_ICONS[idx] || Code2;
                  const color = STEP_COLORS[idx] || STEP_COLORS[0];
                  const isActive = activeStep === idx;

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`relative flex items-start gap-5 p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer focus:outline-none group ${
                        isActive
                          ? `${color.bg} ${color.border} border shadow-sm`
                          : "hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      {/* Step node */}
                      <div
                        className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 border ${
                          isActive
                            ? `${color.bg} ${color.border} ${color.icon}`
                            : "bg-white border-gray-200 text-gray-400 group-hover:border-gray-300"
                        }`}
                      >
                        <StepIcon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span
                            className={`text-[10px] font-mono font-semibold tracking-wider ${
                              isActive ? color.icon : "text-gray-400"
                            }`}
                          >
                            Phase {step.step}
                          </span>
                          {isActive && (
                            <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${color.icon}`} />
                          )}
                        </div>
                        <h3
                          className={`text-base font-medium leading-snug transition-colors ${
                            isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-800"
                          }`}
                        >
                          {step.title}
                        </h3>

                        {/* Description — only visible when active on mobile */}
                        {isActive && (
                          <p className="lg:hidden text-gray-500 text-sm font-light leading-relaxed mt-2">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ══ RIGHT — Active Step Detail Panel ══ */}
          <div className="hidden lg:flex w-full lg:w-[55%] lg:sticky lg:top-32 self-start">
            <div
              className={`w-full rounded-3xl border p-10 xl:p-12 transition-all duration-300 ${activeColor.bg} ${activeColor.border}`}
            >
              {/* Phase badge + Icon */}
              <div className="flex items-center justify-between mb-8">
                <span
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${activeColor.pill}`}
                >
                  Phase {active?.step} of {steps.length}
                </span>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${activeColor.bg} border-2 ${activeColor.border}`}
                >
                  <ActiveIcon className={`w-7 h-7 ${activeColor.icon}`} />
                </div>
              </div>

              {/* Big step number watermark */}
              <div
                className={`text-[100px] xl:text-[120px] font-thin leading-none select-none mb-4 ${activeColor.icon} opacity-10`}
              >
                {active?.step}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-light text-gray-900 leading-snug mb-4">
                {active?.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base font-light leading-relaxed mb-8 max-w-sm">
                {active?.description}
              </p>

              {/* Deliverables tags */}
              {activeTags.length > 0 && (
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase block mb-3">
                    Key Deliverables
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeTags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${activeColor.pill}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation dots */}
              <div className="flex items-center gap-2 mt-10 pt-8 border-t border-black/5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`rounded-full transition-all duration-200 cursor-pointer ${
                      i === activeStep
                        ? `w-6 h-2 ${activeColor.icon.replace("text-", "bg-")}`
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
                <span className="ml-auto text-xs text-gray-400 font-light">
                  {activeStep + 1} / {steps.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
