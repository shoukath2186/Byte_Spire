"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceBanner from "./ServiceBanner";
import ServiceExpertise from "./ServiceExpertise";
import ServiceSolutions from "./ServiceSolutions";
import ServiceTechStack from "./ServiceTechStack";
import ServiceProcess from "./ServiceProcess";
import ServiceFAQ from "./ServiceFAQ";
import ServiceCTA from "./ServiceCTA";
import OutClientsSay from "@/components/home/OutClientsSay";

export default function ServiceDetailTemplate({ service }) {
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center py-20 px-6">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              Service not found
            </h1>
            <p className="text-gray-500 mb-6">
              The service you are looking for does not exist or has been moved.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-[#8e2157] text-white rounded-xl hover:bg-[#6b1842] transition-colors"
            >
              Return to Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Banner Section — with headline, subheadline, actions, and trust signals */}
        <ServiceBanner
          title={service.hero?.headline || service.title}
          description={service.hero?.subheadline || service.description}
          bannerImage={service.bannerImage}
          primaryCta={service.hero?.primaryCta}
          secondaryCta={service.hero?.secondaryCta}
          trustHighlights={service.hero?.trustHighlights}
        />

        {/* Sub-Services / Expertise Section — highlighted cards */}
        <ServiceExpertise
          title={service.servicesTitle || "Our Core Services"}
          subServices={service.subServices}
        />

        {/* Solutions / Expertise Section */}
        <ServiceSolutions solutions={service.solutions} />

        {/* Tech Stack Section (if provided) */}
        {service.techStack && <ServiceTechStack techStack={service.techStack} />}

        {/* Process Section — sticky cards */}
        <ServiceProcess process={service.process} />

        {/* FAQ Accordion Section */}
        <ServiceFAQ faq={service.faq} />

        {/* Client Testimonials */}
        <OutClientsSay />

        {/* Call to Action */}
        <ServiceCTA cta={service.cta} />
      </main>

      <Footer />
    </div>
  );
}
