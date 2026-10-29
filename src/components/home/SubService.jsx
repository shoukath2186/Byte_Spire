"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function SubService() {
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            number: '(01)',
            title: 'Web Design & Development',
            description:
                'We craft modern, responsive, and high-performing websites engineered to elevate your online presence and turn visitors into loyal customers. Utilizing cutting-edge frontend frameworks and secure backend architectures, our web development services prioritize speed, SEO optimization, intuitive UI/UX design, and seamless cross-device compatibility tailored to your brand identity.',
            ctaText: 'More Details',
            href: '/services/technology/web-development-service',
            image: '/service_tech.png',
            tag: 'Next.js & Modern Web',
        },
        {
            number: '(02)',
            title: 'E-Commerce Store Development',
            description:
                'Boost your online sales with custom, secure, and scalable e-commerce platforms built for optimal conversion rates. From custom Shopify and WooCommerce integration to tailor-made enterprise storefronts, we build high-speed e-commerce solutions complete with intuitive product management, secure payment gateway integrations, automated inventory tracking, and smooth checkout experiences.',
            ctaText: 'More Details',
            href: '/services/technology/ecommerce-development',
            image: '/service_ecommerce.jpg',
            tag: 'Shopify & Enterprise Stores',
        },
        {
            number: '(03)',
            title: 'Custom Software Development',
            description:
                'Solve complex business challenges with custom-engineered software solutions designed specifically to streamline your operations and drive growth. We design, build, and deploy enterprise-grade SaaS applications, internal workflow automation tools, and API integrations that offer high scalability, robust cloud security, and long-term efficiency.',
            ctaText: 'More Details',
            href: '/services/technology/custom-software-development',
            image: '/service_custom_software.jpg',
            tag: 'SaaS & Enterprise Tools',
        },
        {
            number: '(04)',
            title: 'Mobile App Development',
            description:
                'Reach your audience anywhere with feature-rich native and cross-platform mobile applications for iOS and Android. Leveraging React Native and Flutter, we deliver intuitive, high-performance mobile apps featuring sleek user interfaces, offline capabilities, real-time sync, and enterprise-level backend connectivity.',
            ctaText: 'More Details',
            href: '/services/technology/mobile-app-development',
            image: '/service_mobile.jpg',
            tag: 'iOS & Android Native / Hybrid',
        },
    ];

    return (
        <section
            id="industriesListingComponent22"
            className="bg-white py-16 md:py-24 border-t border-gray-100 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">


                {/* 2-Column Showcase Layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Left Column: Interactive Service Accordion List */}
                    <div className="w-full lg:w-[58%] flex flex-col">
                        {services.map((service, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`border-t border-gray-200 last:border-b transition-all duration-300 ${isActive ? 'bg-gray-50/70' : 'hover:bg-gray-50/30'
                                        }`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {/* Row Trigger */}
                                    <div className="py-6 sm:py-8 px-3 sm:px-5 flex items-center justify-between gap-4 cursor-pointer select-none group">
                                        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-1">
                                            <span
                                                className={`text-sm sm:text-base font-mono transition-colors duration-300 ${isActive
                                                    ? 'text-black font-semibold'
                                                    : 'text-gray-400 group-hover:text-gray-600'
                                                    }`}
                                            >
                                                {service.number}
                                            </span>
                                            <h3
                                                className={`text-xl sm:text-2xl md:text-3xl font-light tracking-tight transition-colors duration-300 ${isActive
                                                    ? 'text-black font-normal'
                                                    : 'text-gray-900 group-hover:text-black'
                                                    }`}
                                            >
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Arrow Icon Button */}
                                        <div
                                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                                                ? 'bg-black border-black text-white rotate-[-45deg]'
                                                : 'border-gray-200 text-gray-400 group-hover:border-gray-900 group-hover:text-gray-900'
                                                }`}
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Expandable Content Area */}
                                    <div
                                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isActive
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-3 sm:px-5 pl-10 sm:pl-16 md:pl-20 pb-7 pt-1">
                                                {/* Inline Image for Mobile / Tablet screens */}
                                                <div className="block lg:hidden mb-5 w-full h-52 sm:h-64 relative rounded-2xl overflow-hidden shadow-md border border-gray-100">
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                                                    {service.description}
                                                </p>

                                                {/* CTA Link */}
                                                <div>
                                                    <Link
                                                        href={service.href}
                                                        className="inline-flex items-center gap-2.5 bg-black text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#6b1842] transition-all duration-300 "
                                                    >
                                                        {service.ctaText}
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column: Sticky Showcase Preview (Desktop) */}
                    <div className="hidden lg:block lg:w-[42%] sticky top-28 self-start">
                        <div className="relative w-full h-[480px] rounded-3xl overflow-hidden border border-gray-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-gray-950">
                            {/* Stacked Images for Seamless Fade Transition */}
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeIndex === idx
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-105 pointer-events-none'
                                        }`}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        priority={idx === 0}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
                                </div>
                            ))}

                            {/* Floating Top Tag */}
                            <div className="absolute top-5 left-5 z-10">
                                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase text-white bg-black/40 backdrop-blur-md border border-white/20">
                                    {services[activeIndex].tag}
                                </span>
                            </div>

                            {/* Floating Bottom Card */}
                            <div className="absolute bottom-6 left-6 right-6 z-10 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                                <div>
                                    <span className="text-pink-300 text-xs font-mono uppercase tracking-wider block mb-1">
                                        Featured Capability {services[activeIndex].number}
                                    </span>
                                    <h4 className="text-lg font-medium text-white leading-tight">
                                        {services[activeIndex].title}
                                    </h4>
                                </div>

                                <Link
                                    href={services[activeIndex].href}
                                    className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 shadow-md shrink-0 ml-3"
                                    aria-label={services[activeIndex].title}
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
