"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OutClientsSay from "@/components/home/OutClientsSay";
import InnerHero from "./InnerHero";
import InnerStats from "./InnerStats";
import InnerExpertise from "./InnerExpertise";
import InnerServicesList from "./InnerServicesList";
import InnerTechStack from "./InnerTechStack";
import InnerProcess from "./InnerProcess";
import InnerFAQ from "./InnerFAQ";
import InnerCTA from "./InnerCTA";

export default function InnerServicePage({ service }) {
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center py-20 px-6">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              Service Not Found
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
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-clip">
      <Header />

      <main className="flex-grow">
        {/* Section 2: Banner (Hero Section) */}
        <InnerHero
          hero={service.hero}
          bannerImage={service.bannerImage}
          slug={service.slug}
        />

        {/* Section: Key Achievements & Stats */}
        <InnerStats stats={service.stats} />

        {/* Section 3: Core Technical Competencies / Expertise */}
        <InnerExpertise solutions={service.solutions} />

        {/* Section 6: Comprehensive Web Development Services */}
        <InnerServicesList
          servicesTitle={service.servicesTitle}
          servicesDescription={service.servicesDescription}
          subServices={service.subServices}
        />

        {/* Section 5: Modern Technologies & Frameworks */}
        <InnerTechStack techStack={service.techStack} />

        {/* Section 4: Engineering Process Roadmap */}
        <InnerProcess process={service.process} />

        {/* Section 8: Call to Action (Web Development Consultation) */}
        <InnerCTA cta={service.cta} serviceName={service.title || service.slug} />

        {/* Testimonials from Clients */}
        <OutClientsSay />



        {/* Section 7: Frequently Asked Questions (FAQ) */}
        <InnerFAQ faq={service.faq} />


      </main>

      <Footer />
    </div>
  );
}

