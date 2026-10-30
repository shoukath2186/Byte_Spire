"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageSquare, Briefcase, Zap, Globe, ShieldCheck, Users } from "lucide-react";

const trustTags = [
  { icon: Zap, label: "Free Project Discovery" },
  { icon: ShieldCheck, label: "Sub-Second Load Speeds" },
  { icon: Globe, label: "Kerala & Global Standards" },
  { icon: Users, label: "Dedicated Engineering Team" },
];

export default function InnerCTA({ cta, serviceName }) {
  const title = cta?.title || "Ready to Build a High-Converting Website for Your Business?";
  const description = cta?.description || "Partner with ByteSpire to build custom web applications, responsive corporate sites, and e-commerce platforms tailored for ambitious businesses in Kerala and worldwide.";
  const primaryButton = cta?.primaryButton || { label: "Request Free Web Consultation", href: "/contact" };
  const secondaryLinks = cta?.secondaryLinks || [];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generalError, setGeneralError] = useState(null);

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "User Name is required";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Please provide a valid email address";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Contact Number is required";
    } else if (!/^\+?[0-9\s\-()]+$/.test(data.phone)) {
      newErrors.phone = "Phone number can only contain numbers";
    } else if (data.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = "Contact number must contain at least 10 digits";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setGeneralError(null);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const pageTitle = serviceName || (typeof document !== "undefined" ? document.title : "") || "Service Page";

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: formData.projectType.trim() || serviceName || "Web Consultation",
      pageName: pageTitle,
      message: `Inquiry submitted via CTA form on page: ${pageTitle}\nProject Type: ${formData.projectType.trim() || serviceName || "Not specified"}`,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", projectType: "" });
      } else {
        const errData = await response.json();
        if (errData.fieldErrors) {
          setErrors(errData.fieldErrors);
        } else {
          setGeneralError(errData.error || "Failed to send consultation request. Please try again.");
        }
      }
    } catch (err) {
      console.error("CTA form submission error:", err);
      setGeneralError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#0d0d0d] py-20 md:py-28 overflow-hidden">

      {/* Background Image & Atmospheric Overlays */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <Image
          src="/bg_images/bg_image1.jpg"
          alt="CTA Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered overlays: high readability for text on left, rich image depth on right */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-[#420924]/60" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/85" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8e2157]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-black/40 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* ══ LEFT — Main Content ══ */}
          <div className="w-full lg:w-[52%] xl:w-[55%]">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/25 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              <span className="text-white/90 text-[11px] font-semibold tracking-[0.15em] uppercase">Web Development Consultation</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light text-white leading-[1.1] mb-6">
              {title}
            </h2>

            {/* Description */}
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
              {description}
            </p>

            {/* Trust Tags */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {trustTags.map((tag, idx) => {
                const Icon = tag.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5 text-white/80 text-sm font-light">
                    <Icon className="w-4 h-4 text-white/60 shrink-0" />
                    <span>{tag.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Secondary links */}
            {secondaryLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-8 border-t border-white/20">
                {secondaryLinks.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-white/75 hover:text-white text-sm font-light underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
                  >
                    {lIdx === 0 ? <MessageSquare className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5" />}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ══ RIGHT — Consultation Form Card ══ */}
          <div className="w-full lg:w-[48%] xl:w-[45%]">
            <div className="bg-white rounded-2xl md:rounded-3xl p-7 sm:p-9 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.35)] border border-gray-100">

              <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-2">
                Start Your Project
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm font-light mb-6">
                Free consultation. No commitment. Get expert advice on your next project within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Inquiry Sent Successfully!</h4>
                  <p className="text-gray-500 text-xs sm:text-sm max-w-xs mb-6">
                    Thank you! Our engineering team will review your inquiry and reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", projectType: "" });
                    }}
                    className="text-xs text-[#8e2157] font-medium hover:underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {generalError && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs">
                      {generalError}
                    </div>
                  )}

                  {/* User Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      User Name / Full Name <span className="text-[#8e2157]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:bg-white transition-all ${errors.name ? "border-red-400 focus:border-red-500 ring-1 ring-red-400" : "border-gray-200 focus:border-[#8e2157] focus:ring-1 focus:ring-[#8e2157]"
                        }`}
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  {/* Business Email & Contact Number in responsive 2-column */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Business Email <span className="text-[#8e2157]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:bg-white transition-all ${errors.email ? "border-red-400 focus:border-red-500 ring-1 ring-red-400" : "border-gray-200 focus:border-[#8e2157] focus:ring-1 focus:ring-[#8e2157]"
                          }`}
                      />
                      {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Contact Number <span className="text-[#8e2157]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:bg-white transition-all ${errors.phone ? "border-red-400 focus:border-red-500 ring-1 ring-red-400" : "border-gray-200 focus:border-[#8e2157] focus:ring-1 focus:ring-[#8e2157]"
                          }`}
                      />
                      {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Project Type
                    </label>
                    <input
                      type="text"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      placeholder={serviceName || "e.g. Web Development, E-Commerce, SaaS..."}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#8e2157] focus:ring-1 focus:ring-[#8e2157] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#8e2157] hover:bg-[#a62d6a] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>{primaryButton.label || "Request Free Consultation"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Trust micro-text */}
                  <div className="flex items-center justify-center gap-2 pt-2 text-gray-400 text-xs font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>100% Free Consultation — No spam, direct reply</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
