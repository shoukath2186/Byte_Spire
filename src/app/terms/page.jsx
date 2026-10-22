import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, CheckCircle2, AlertCircle, Scale, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | ByteSpire",
  description: "Read the Terms of Service governing the use of ByteSpire's website, IT consulting, software development, and digital marketing services.",
  alternates: {
    canonical: "https://bytespire.in/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "October 22, 2026";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Header with seamless black background matching Header */}
        <div className="bg-black text-white pt-28 pb-16 md:pt-36 md:pb-20 px-6 relative overflow-hidden border-b border-[#8e2157]/30">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8e2157]/20 via-transparent to-purple-900/20 pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8e2157]/20 border border-[#8e2157]/40 text-xs text-white/90 font-medium mb-4">
              <Scale className="w-3.5 h-3.5 text-[#8e2157]" />
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              These terms outline the rules and regulations for using ByteSpire’s website, technical services, custom software engineering, and digital solutions.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-10 text-gray-700 leading-relaxed text-[15px] sm:text-base font-light">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] font-semibold text-sm">
                  01
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-gray-900">
                  Acceptance of Terms
                </h2>
              </div>
              <p>
                By accessing this website, submitting an inquiry, or commissioning services from ByteSpire, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, you should refrain from using our website or services.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] font-semibold text-sm">
                  02
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-gray-900">
                  Scope of Services & Project Engagement
                </h2>
              </div>
              <p>
                ByteSpire provides technical engineering, custom web and mobile development, UI/UX design, cloud infrastructure, AI solutions, and digital marketing consulting.
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Statement of Work (SOW):</strong> Each client engagement is governed by a mutually agreed Statement of Work or Service Agreement defining deliverables, timelines, and milestones.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Modifications & Revisions:</strong> Any changes or scope expansions outside the signed SOW will be billed through mutually agreed change-order documents.</span>
                </li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* Section 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] font-semibold text-sm">
                  03
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-gray-900">
                  Intellectual Property Rights
                </h2>
              </div>
              <p>
                Unless explicitly agreed otherwise in a signed contract:
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Client Ownership:</strong> Upon full and final payment of all project fees, the intellectual property rights to custom code, designs, and content created specifically for the client are assigned to the client.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>ByteSpire Pre-Existing IP:</strong> ByteSpire retains ownership over its proprietary libraries, foundational frameworks, internal tooling, and reusable code components used across projects.</span>
                </li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* Section 4 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] font-semibold text-sm">
                  04
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-gray-900">
                  Client Responsibilities
                </h2>
              </div>
              <p>
                To maintain scheduled project deliveries, clients agree to:
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span>Provide required digital assets, copy, server credentials, and feedback in a timely manner.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span>Ensure all provided materials do not infringe upon any third-party copyrights or local legal statutes.</span>
                </li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* Section 5 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] font-semibold text-sm">
                  05
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-gray-900">
                  Limitation of Liability
                </h2>
              </div>
              <p>
                ByteSpire delivers all services using high professional standards. However, in no event shall ByteSpire be liable for indirect, incidental, or consequential damages resulting from downtime of third-party cloud hosts, server outages, unauthorized third-party breaches, or interruptions outside our reasonable control.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 6 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] font-semibold text-sm">
                  06
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-gray-900">
                  Governing Law & Jurisdiction
                </h2>
              </div>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Kozhikode, Kerala, India.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 7 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] font-semibold text-sm">
                  07
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-gray-900">
                  Contact Information
                </h2>
              </div>
              <p>
                For legal inquiries regarding these terms, please contact:
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 mt-4">
                <p className="font-medium text-gray-900">ByteSpire Legal Desk</p>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-[#8e2157]" />
                  <a href="mailto:bytespire1@gmail.com" className="hover:text-gray-900">bytespire1@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-[#8e2157]" />
                  <a href="tel:+919207022186" className="hover:text-gray-900">+91 9207022186</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-[#8e2157]" />
                  <span>Panthirangav, Kozhikode, Kerala, India</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
