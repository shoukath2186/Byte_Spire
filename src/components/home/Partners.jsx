import React from 'react';
import Image from 'next/image';

export default function Partners() {
    const partners = [
        // Row 1
        { name: 'Google Cloud', src: '/partnersLogos/google_cloud.png' },
        { name: 'Google My Business', src: '/partnersLogos/google_business.jpeg' },
        { name: 'Clutch', src: '/partnersLogos/clutch.png' },
        { name: 'Cloudflare', src: '/partnersLogos/cloudefare.png' },
        { name: 'Claude AI', src: '/partnersLogos/claude.png' },
        { name: 'Google Gemini', src: '/partnersLogos/gemini.png' },

        // Row 2
        { name: 'Amazon Web Services', src: '/partnersLogos/aws.png' },
        { name: 'Microsoft Azure', src: '/partnersLogos/azure.png' },
        { name: 'OpenAI', src: '/partnersLogos/open_ai.jpeg' },
        { name: 'Zoho', src: '/partnersLogos/zoho.png' },
        { name: 'Meta', src: '/partnersLogos/meta.png' },
        { name: 'Microsoft', src: '/partnersLogos/microsoft.png' },
    ];

    return (
        <section className="bg-white py-16 md:py-24 border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Eyebrow Label */}
                <div className="flex items-center gap-2.5 mb-10 md:mb-12">
                    <span className="text-black text-xs font-black">▶</span>
                    <span className="text-gray-900 text-xs sm:text-[13px] font-semibold tracking-widest uppercase">
                        OUR PARTNERS
                    </span>
                </div>

                {/* Desktop View: Architectural Blueprint Grid */}
                <div className="hidden lg:block relative py-6">
                    {/* Over-extending horizontal blueprint lines */}
                    <div className="absolute -left-6 -right-6 top-6 h-[1px] bg-gray-200/90" />
                    <div className="absolute -left-6 -right-6 top-[calc(7.5rem+1.5rem)] h-[1px] bg-gray-200/90" />
                    <div className="absolute -left-6 -right-6 bottom-6 h-[1px] bg-gray-200/90" />

                    {/* Over-extending vertical blueprint lines */}
                    <div className="absolute left-0 -top-3 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute left-[16.666%] -top-3 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute left-[33.333%] -top-3 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute left-[50%] -top-3 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute left-[66.666%] -top-3 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute left-[83.333%] -top-3 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute right-0 -top-3 -bottom-6 w-[1px] bg-gray-200/90" />

                    {/* 6-Column Grid Structure */}
                    <div className="grid grid-cols-6 relative z-10">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="h-30 flex items-center justify-center px-4 py-3 group cursor-pointer transition-transform duration-300"
                            >
                                <div className="relative w-full h-16 sm:h-18 flex items-center justify-center">
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        fill
                                        unoptimized
                                        className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile & Tablet Responsive Grid */}
                <div className="block lg:hidden border border-gray-200/90 rounded-2xl overflow-hidden divide-y divide-gray-200/90">
                    <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y divide-gray-200/90">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="h-24 sm:h-28 flex items-center justify-center px-4 py-3 group cursor-pointer"
                            >
                                <div className="relative w-full h-14 sm:h-16 flex items-center justify-center">
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        fill
                                        unoptimized
                                        className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
