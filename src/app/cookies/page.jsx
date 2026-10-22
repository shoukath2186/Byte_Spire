import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Cookie, CheckCircle2, ShieldCheck, Settings, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | ByteSpire",
  description: "Learn about how ByteSpire uses cookies and similar tracking technologies to enhance your browsing experience and improve our services.",
  alternates: {
    canonical: "https://bytespire.in/cookies",
  },
};

export default function CookiesPage() {
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
              <Cookie className="w-3.5 h-3.5 text-[#8e2157]" />
              <span>Cookies & Tracking</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              This Cookie Policy explains what cookies are, how ByteSpire uses them on our website, and how you can manage your cookie preferences.
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
                  What Are Cookies?
                </h2>
              </div>
              <p>
                Cookies are small text files that are stored on your computer, tablet, or smartphone when you visit a website. They are widely used by website operators to make websites work efficiently, remember your preferences, and provide analytical insights into site performance.
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
                  How ByteSpire Uses Cookies
                </h2>
              </div>
              <p>
                ByteSpire uses cookies for fundamental operations, usability improvements, and analyzing aggregate audience behavior:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#8e2157]" />
                    <span>Essential Cookies</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Necessary for core website functionality, security protocols, and session preservation. The website cannot function properly without these.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <Settings className="w-4 h-4 text-[#8e2157]" />
                    <span>Performance & Analytics</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Collect anonymous data about how visitors interact with our pages, helping us identify broken links and optimize page loading speeds.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#8e2157]" />
                    <span>Functionality Cookies</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Enable the site to remember choices you make, such as language preferences or interactive form entries.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <Cookie className="w-4 h-4 text-[#8e2157]" />
                    <span>Marketing & Pixels</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Allow us to measure campaign conversions from Google Ads and Meta platforms to improve our service offerings.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] font-semibold text-sm">
                  03
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-gray-900">
                  Managing Your Cookie Preferences
                </h2>
              </div>
              <p>
                You have the option to accept, customize, or refuse cookies. Most modern web browsers allow you to control cookies through their configuration settings:
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Safari:</strong> Preferences &gt; Privacy &gt; Block all cookies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8e2157] shrink-0 mt-1" />
                  <span><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection.</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 pt-2">
                Note that disabling essential cookies may impact certain interactive features and navigation performance on our website.
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
                  Questions & Contact
                </h2>
              </div>
              <p>
                If you have questions regarding our use of cookies or related technologies, please reach out to us:
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 mt-4">
                <p className="font-medium text-gray-900">ByteSpire Support</p>
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
