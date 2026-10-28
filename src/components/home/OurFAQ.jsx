"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowRight } from 'lucide-react';

function OurFAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: 'What services does ByteSpire specialize in?',
      answer:
        'We provide end-to-end digital solutions across three core pillars: Custom Software & App Development (modern web platforms, enterprise SaaS, iOS/Android mobile applications, and high-speed e-commerce stores), Experience Design (UI/UX design, wireframing, and design systems), and Results-Driven Digital Marketing (technical SEO, performance ads, and conversion rate optimization).',
    },
    {
      question: 'How much does a typical project cost and what are your pricing models?',
      answer:
        'Our pricing is transparent and tailored strictly to your project scope. We offer two engagement models: Fixed-Price Contracts for projects with well-defined deliverables (ensuring zero hidden costs or billing surprises), and Dedicated Team Retainers for evolving digital products requiring ongoing agile development and continuous enhancement.',
    },
    {
      question: 'How long does it take to develop and launch a project?',
      answer:
        'Timelines vary based on scope and architectural complexity. A standard corporate website or high-converting landing portal typically takes 3 to 6 weeks. More complex software, full-scale SaaS platforms, and native mobile apps typically require 8 to 16 weeks. We work in agile 2-week sprints with predictable delivery milestones and live staging previews.',
    },
    {
      question: 'Who owns the source code, design assets, and intellectual property?',
      answer:
        'You retain 100% ownership. Upon project completion and final settlement, all intellectual property rights, repositories, custom code, databases, and design files are transferred entirely to your organization. Furthermore, we sign comprehensive Non-Disclosure Agreements (NDAs) prior to project kickoff to ensure complete confidentiality.',
    },
    {
      question: 'What modern technologies and frameworks do you use?',
      answer:
        'We build on reliable, enterprise-grade stacks. For frontend, we leverage React.js, Next.js, and Tailwind CSS. For backends and scalable APIs, we specialize in Node.js, Express, Python (FastAPI/Django), and PostgreSQL/MongoDB. For mobile apps, we deploy cross-platform solutions via React Native and Flutter, all securely hosted on AWS, Google Cloud, or Microsoft Azure with automated CI/CD pipelines.',
    },
    {
      question: 'How do you ensure clear communication and progress tracking?',
      answer:
        'Transparency is central to our process. You receive a dedicated Project Manager and direct access to your engineering team via Slack, Microsoft Teams, or WhatsApp. We conduct regular sprint reviews, supply staging URLs where you can test live progress, and manage deliverables using Jira and Trello for complete visibility.',
    },
    {
      question: 'Do you provide post-launch support and ongoing maintenance?',
      answer:
        'Yes. Every launch includes a complimentary 30-day warranty covering bug fixes, performance audits, and security checks. Beyond launch, we offer flexible Monthly Support Retainers covering continuous uptime monitoring, regular security patches, framework updates, feature expansions, and technical SEO maintenance.',
    },
    {
      question: 'Can you modernize or scale our existing software / legacy application?',
      answer:
        'Yes, we frequently assist businesses in modernizing, refactoring, and scaling legacy systems. We begin with an in-depth code and architecture audit to identify bottlenecks and security vulnerabilities, followed by a phased refactoring strategy that avoids downtime while boosting performance and maintainability.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="relative w-3.5 h-1.5">
              <span className="block w-full h-full rounded-[2px] bg-[#8e2157]" />
            </div>
            <span className="text-gray-900/80 text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase">
              Got Questions?
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our development process, pricing, code ownership, and support.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <div key={i} className="transition-colors duration-200">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-5 sm:py-6 flex items-start justify-between gap-6 text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-normal text-base sm:text-lg leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-[#8e2157]' : 'text-gray-900 group-hover:text-[#8e2157]'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#8e2157] text-white rotate-180'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-[#8e2157]/10 group-hover:text-[#8e2157]'
                    }`}
                  >
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-gray-600 text-sm sm:text-base font-light leading-relaxed pr-6 md:pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 pt-8 flex flex-col items-center text-center">
          <p className="text-gray-500 text-sm font-light mb-3">
            Have a specific project in mind or need further clarification?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#8e2157] text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#6b1842] hover:scale-105 transition-all duration-300 shadow-[0_6px_20px_rgba(142,33,87,0.2)]"
          >
            Speak With Our Technical Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default OurFAQ;
