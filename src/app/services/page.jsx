"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import { ServicesHero, ServicesGrid } from "@/components/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <ServicesGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}