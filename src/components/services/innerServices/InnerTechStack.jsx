"use client";

import React from "react";
import { resolveIcon } from "./iconHelper";

export default function InnerTechStack({ techStack }) {
  const categories = techStack?.categories || [
    {
      title: "Frontend Engineering",
      icon: "layout",
      items: [
        {
          label: "Core Frameworks",
          tech: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript"],
        },
        {
          label: "Web Applications",
          tech: ["Progressive Web Apps (PWAs)", "Single Page Applications (SPAs)"],
        },
      ],
    },
    {
      title: "Backend & Server",
      icon: "server",
      items: [
        {
          label: "Runtime & Frameworks",
          tech: ["Node.js", "Express.js", "PHP (Laravel)", "Python (Django / FastAPI)"],
        },
        {
          label: "Databases",
          tech: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
        },
        {
          label: "CMS Platforms",
          tech: ["WordPress", "Strapi", "Contentful", "Sanity"],
        },
      ],
    },
    {
      title: "Infrastructure & Cloud",
      icon: "cloud",
      items: [
        {
          label: "Deployment & Hosting",
          tech: ["Vercel", "Hostinger", "AWS", "Docker"],
        },
        {
          label: "Version Control",
          tech: ["Git", "GitHub"],
        },
      ],
    },
    {
      title: "Marketing & Analytics Tools",
      icon: "bar-chart",
      items: [
        {
          label: "Search & Insights",
          tech: ["Google Search Console", "Google Analytics", "Ahrefs", "SEMrush"],
        },
        {
          label: "Design & Prototyping",
          tech: ["Figma", "Adobe XD"],
        },
      ],
    },
  ];

  // Accent colors per category index
  const accents = [
    "border-violet-500/50",
    "border-cyan-500/50",
    "border-emerald-500/50",
    "border-amber-500/50",
  ];
  const accentBgs = [
    "bg-violet-500/10",
    "bg-cyan-500/10",
    "bg-emerald-500/10",
    "bg-amber-500/10",
  ];
  const accentIcons = [
    "bg-violet-500/20 text-violet-300",
    "bg-cyan-500/20 text-cyan-300",
    "bg-emerald-500/20 text-emerald-300",
    "bg-amber-500/20 text-amber-300",
  ];

  return (
    <section className="py-20 md:py-28 bg-[#080808] text-white border-t border-white/[0.06] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#8e2157]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-900/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* ── Split layout: Left 40% typography | Right 60% stack ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">

          {/* LEFT — big typography area */}
          <div className="lg:w-[40%] shrink-0">
            <div className="lg:sticky lg:top-32">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-4 h-px bg-[#8e2157]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  {techStack?.badge || "Technology Stack"}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[2.7rem] xl:text-5xl font-light text-white leading-[1.15] mb-6">
                {techStack?.title || (
                  <>Modern Technologies<br />&amp; Frameworks</>
                )}
              </h2>

              <p className="text-white/45 text-base font-light leading-relaxed mb-10 max-w-xs">
                {techStack?.description ||
                  "Modern technologies and frameworks we leverage to power fast, secure, and future-ready web solutions."}
              </p>

              {/* Category legend */}
              <div className="space-y-3">
                {categories.map((cat, idx) => {
                  const Icon = resolveIcon(cat.icon);
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${accents[idx % accents.length]} ${accentBgs[idx % accentBgs.length]} bg-opacity-50`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${accentIcons[idx % accentIcons.length]}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-white/70 text-sm font-light">{cat.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — stacked category rows */}
          <div className="lg:w-[60%] flex flex-col gap-0 divide-y divide-white/[0.06]">
            {categories.map((cat, idx) => {
              const Icon = resolveIcon(cat.icon);
              const accent = accents[idx % accents.length];
              const accentIcon = accentIcons[idx % accentIcons.length];

              return (
                <div
                  key={idx}
                  className={`py-8 border-l-2 ${accent} pl-6 first:pt-0 last:pb-0 group`}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${accentIcon}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-medium text-white/80 group-hover:text-white transition-colors duration-200">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-4">
                    {cat.items?.map((item, itemIdx) => (
                      <div key={itemIdx}>
                        {item.label && (
                          <p className="text-[10px] uppercase tracking-[0.16em] text-white/30 font-semibold mb-2">
                            {item.label}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {item.tech?.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-white/20 text-white/65 hover:text-white/90 text-xs font-light transition-all duration-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
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
