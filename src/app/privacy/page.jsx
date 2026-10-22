import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | ByteSpire",
  description: "Learn how ByteSpire collects, uses, and safeguards your personal information when you use our website and IT services.",
  alternates: {
    canonical: "https://bytespire.in/privacy",
  },
};

export default function PrivacyPage() {
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
              <Shield className="w-3.5 h-3.5 text-[#8e2157]" />
              <span>Legal & Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              At ByteSpire, we value your trust. This Privacy Policy details the types of personal data we collect, how it is protected, and your rights regarding your personal information.
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
                  Information We Collect
                </h2>
              </div>
              <p>
                We collect personal information that you voluntarily provide to us when you fill out contact inquiry forms, subscribe to our newsletter, request project proposals, or communicate directly with our team.
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Contact Data:</strong> Full name, corporate email address, telephone number, company name, and location.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Project Details:</strong> Technical requirements, business briefs, budget parameters, and feedback submitted through our project request workflows.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Technical & Usage Data:</strong> IP address, browser type, operating system, pages visited, and session durations collected automatically via cookies and web analytics tools.</span>
                </li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* Section 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] font-semibold text-sm">
                  02
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-gray-900">
                  How We Use Your Information
                </h2>
              </div>
              <p>
                ByteSpire processes collected information strictly for genuine business purposes and service excellence, including:
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span>Delivering, maintaining, and supporting custom software, web applications, and digital marketing services.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span>Responding to business inquiries, delivering project scope estimates, and issuing client contracts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span>Optimizing website usability, diagnosing technical errors, and analyzing site engagement trends.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span>Sending relevant company announcements, tech updates, and service improvements with your opt-in consent.</span>
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
                  Data Protection & Security
                </h2>
              </div>
              <p>
                We enforce industry-standard security measures, including SSL/TLS encryption, secure server infrastructures, and access controls to protect your data from unauthorized access, modification, or exposure.
              </p>
              <p>
                While no transmission over the internet is completely infallible, ByteSpire rigorously reviews and upgrades its cybersecurity protocols to preserve client confidentiality and system integrity.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 4 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] font-semibold text-sm">
                  04
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-gray-900">
                  Sharing of Information
                </h2>
              </div>
              <p>
                We do not sell, rent, or trade your personal data with third-party marketers. We may only disclose your data under the following circumstances:
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Trusted Service Providers:</strong> Vetted third parties that facilitate hosting, analytics, and CRM services strictly bound by confidentiality agreements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Legal Mandates:</strong> Where disclosure is necessary to comply with applicable laws, government regulations, or legal processes in India.</span>
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
                  Your Privacy Rights
                </h2>
              </div>
              <p>
                You retain complete control over your personal data. You are entitled to request access to the data we hold regarding you, request corrections to inaccurate records, or ask for complete deletion of your records from our systems.
              </p>
              <p>
                To exercise any of these rights, please get in touch with our privacy desk at{" "}
                <a href="mailto:bytespire1@gmail.com" className="text-[#8e2157] hover:underline font-medium">
                  bytespire1@gmail.com
                </a>.
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
                  Contact Our Privacy Team
                </h2>
              </div>
              <p>
                If you have questions, feedback, or concerns regarding our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 mt-4">
                <p className="font-medium text-gray-900">ByteSpire</p>
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
