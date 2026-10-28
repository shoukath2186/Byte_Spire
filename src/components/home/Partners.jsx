import React from 'react';

export default function Partners() {
    return (
        <section className="bg-white py-16 md:py-24 border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Eyebrow Label */}
                <div className="flex items-center gap-2.5 mb-10 md:mb-12">
                    {/* <span className="text-[#a3e635] text-xs font-black">▶</span> */}
                    <span className="text-gray-900 text-xs sm:text-[13px] font-semibold tracking-widest uppercase">
                        OUR PARTNERS
                    </span>
                </div>

                {/* Desktop View: Architectural Blueprint Grid (Matching Uploaded Design) */}
                <div className="hidden lg:block relative py-6">
                    {/* Over-extending horizontal blueprint lines */}
                    <div className="absolute left-[31.5%] right-0 top-6 h-[1px] bg-gray-200/90" />
                    <div className="absolute -left-6 -right-6 top-[calc(6rem+1.5rem)] h-[1px] bg-gray-200/90" />
                    <div className="absolute -left-6 -right-6 bottom-6 h-[1px] bg-gray-200/90" />

                    {/* Over-extending vertical blueprint lines */}
                    <div className="absolute left-0 top-24 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute left-[16.666%] top-24 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute left-[33.333%] -top-2 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute left-[50%] -top-2 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute left-[66.666%] -top-2 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute left-[83.333%] -top-2 -bottom-6 w-[1px] bg-gray-200/90" />
                    <div className="absolute right-0 -top-2 -bottom-6 w-[1px] bg-gray-200/90" />

                    {/* 6-Column Grid Structure */}
                    <div className="grid grid-cols-6 relative z-10">
                        {/* ROW 1: 2 Empty columns on left, followed by 4 logos */}
                        <div className="col-span-2 h-24" />

                        {/* Google Ads */}
                        <div className="h-24 flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-2.5">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                                    <path d="M4.3 15.3l5.8-10c.8-1.4 2.6-1.9 4-1.1l1.4.8c1.4.8 1.9 2.6 1.1 4l-5.8 10c-.8 1.4-2.6 1.9-4 1.1l-1.4-.8c-1.4-.8-1.9-2.6-1.1-4z" fill="#FBBC04" />
                                    <path d="M14.2 19.3c-1.4-.8-1.9-2.6-1.1-4l5.8-10c.8-1.4 2.6-1.9 4-1.1l1.4.8c1.4.8 1.9 2.6 1.1 4l-5.8 10c-.8 1.4-2.6 1.9-4 1.1l-1.4-.8z" fill="#4285F4" />
                                    <circle cx="6.5" cy="18.5" r="3.2" fill="#34A853" />
                                </svg>
                                <div className="flex flex-col text-left leading-none">
                                    <span className="text-[17px] font-semibold text-gray-700 tracking-tight">Google</span>
                                    <span className="text-xs font-normal text-gray-500 mt-0.5">Ads</span>
                                </div>
                            </div>
                        </div>

                        {/* Google My Business */}
                        <div className="h-24 flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-2.5">
                                <div className="relative w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 9l9-5 9 5v2H3V9z" fill="#4285F4" />
                                        <path d="M4 11h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8z" fill="#1A73E8" opacity="0.15" />
                                        <path d="M12 12a3 3 0 100 6 3 3 0 000-6z" fill="#4285F4" />
                                    </svg>
                                </div>
                                <div className="flex flex-col text-left leading-tight">
                                    <div className="flex items-center">
                                        <span className="text-[15px] font-medium text-blue-600">G</span>
                                        <span className="text-[15px] font-medium text-red-500">o</span>
                                        <span className="text-[15px] font-medium text-amber-500">o</span>
                                        <span className="text-[15px] font-medium text-blue-600">g</span>
                                        <span className="text-[15px] font-medium text-green-600">l</span>
                                        <span className="text-[15px] font-medium text-red-500">e</span>
                                    </div>
                                    <span className="text-[10px] font-normal text-gray-500">My Business</span>
                                </div>
                            </div>
                        </div>

                        {/* Clutch */}
                        <div className="h-24 flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center">
                                <span className="text-2xl font-bold tracking-tight text-[#1c2d38]">Clutch</span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5c35] ml-0.5 mt-2" />
                            </div>
                        </div>

                        {/* appfutura */}
                        <div className="h-24 flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-md bg-[#e64436] flex items-center justify-center shadow-sm">
                                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l-7 7h4v11h6v-11h4l-7-7z" />
                                    </svg>
                                </div>
                                <span className="text-lg font-bold tracking-tight text-[#2b2b2b]">appfutura</span>
                            </div>
                        </div>

                        {/* ROW 2: 6 Logos across all 6 columns */}

                        {/* Trustpilot */}
                        <div className="h-24 flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2l2.9 8.9h9.3l-7.5 5.5 2.9 8.9-7.6-5.5-7.6 5.5 2.9-8.9-7.5-5.5h9.3z" fill="#00b67a" />
                                    <path d="M12 2v17.8l-7.6 5.5 2.9-8.9-7.5-5.5h9.3z" fill="#005128" opacity="0.3" />
                                </svg>
                                <span className="text-xl font-bold tracking-tight text-gray-900">Trustpilot</span>
                            </div>
                        </div>

                        {/* aws */}
                        <div className="h-24 flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105">
                            <div className="relative flex flex-col items-center">
                                <span className="text-2xl font-bold tracking-tighter text-[#232f3e] leading-none mb-1">aws</span>
                                <svg className="w-12 h-3" viewBox="0 0 48 12" fill="none">
                                    <path d="M2 3c14 7 30 7 44-1" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" />
                                    <path d="M42 3l4-1-1 4" fill="#ff9900" />
                                </svg>
                            </div>
                        </div>

                        {/* OpenAI */}
                        <div className="h-24 flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a4 4 0 014 4v1.5a4 4 0 013 3.9v1.6a4 4 0 011 3.5 4 4 0 01-3.5 3.5v1.5a4 4 0 01-4 4 4 4 0 01-4-4v-1.5a4 4 0 01-3-3.9v-1.6a4 4 0 01-1-3.5 4 4 0 013.5-3.5V6a4 4 0 014-4z" />
                                    <circle cx="12" cy="12" r="2.5" />
                                </svg>
                                <span className="text-xl font-semibold tracking-tight text-gray-900">OpenAI</span>
                            </div>
                        </div>

                        {/* ZOHO */}
                        <div className="h-24 flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-1">
                                <div className="w-6 h-6 rounded bg-[#e42527] flex items-center justify-center text-white text-xs font-black shadow-sm transform -rotate-3">Z</div>
                                <div className="w-6 h-6 rounded bg-[#2ba94a] flex items-center justify-center text-white text-xs font-black shadow-sm transform rotate-2">O</div>
                                <div className="w-6 h-6 rounded bg-[#0070c0] flex items-center justify-center text-white text-xs font-black shadow-sm transform -rotate-2">H</div>
                                <div className="w-6 h-6 rounded bg-[#f7b928] flex items-center justify-center text-white text-xs font-black shadow-sm transform rotate-3">O</div>
                            </div>
                        </div>

                        {/* Meta */}
                        <div className="h-24 flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-2">
                                <svg className="w-7 h-5" viewBox="0 0 38 24" fill="none">
                                    <path d="M19 12.5C17.2 9.5 14.8 7.5 12 7.5C7.6 7.5 4 11.1 4 15.5C4 19.9 7.6 23.5 12 23.5C15.2 23.5 18 21.1 19.5 17.5C21 21.1 23.8 23.5 27 23.5C31.4 23.5 35 19.9 35 15.5C35 11.1 31.4 7.5 27 7.5C24.2 7.5 21.8 9.5 20 12.5" stroke="#0668E1" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-xl font-bold tracking-tight text-[#1c2b33]">Meta</span>
                            </div>
                        </div>

                        {/* Microsoft */}
                        <div className="h-24 flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-2.5">
                                <div className="grid grid-cols-2 gap-0.5 w-4.5 h-4.5">
                                    <div className="w-2 h-2 bg-[#f25022]" />
                                    <div className="w-2 h-2 bg-[#7fba00]" />
                                    <div className="w-2 h-2 bg-[#00a4ef]" />
                                    <div className="w-2 h-2 bg-[#ffb900]" />
                                </div>
                                <span className="text-lg font-semibold text-[#737373] tracking-tight">Microsoft</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Mobile & Tablet Responsive Grid */}
                <div className="block lg:hidden border border-gray-200/90 rounded-2xl overflow-hidden divide-y divide-gray-200/90">
                    <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-gray-200/90">
                        {/* Google Ads */}
                        <div className="h-20 flex items-center justify-center p-4">
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M4.3 15.3l5.8-10c.8-1.4 2.6-1.9 4-1.1l1.4.8c1.4.8 1.9 2.6 1.1 4l-5.8 10c-.8 1.4-2.6 1.9-4 1.1l-1.4-.8c-1.4-.8-1.9-2.6-1.1-4z" fill="#FBBC04" />
                                    <path d="M14.2 19.3c-1.4-.8-1.9-2.6-1.1-4l5.8-10c.8-1.4 2.6-1.9 4-1.1l1.4.8c1.4.8 1.9 2.6 1.1 4l-5.8 10c-.8 1.4-2.6 1.9-4 1.1l-1.4-.8z" fill="#4285F4" />
                                    <circle cx="6.5" cy="18.5" r="3.2" fill="#34A853" />
                                </svg>
                                <span className="text-sm font-semibold text-gray-700">Google Ads</span>
                            </div>
                        </div>

                        {/* Google My Business */}
                        <div className="h-20 flex items-center justify-center p-4">
                            <span className="text-xs font-semibold text-blue-600">Google My Business</span>
                        </div>

                        {/* Clutch */}
                        <div className="h-20 flex items-center justify-center p-4">
                            <div className="flex items-center">
                                <span className="text-lg font-bold text-[#1c2d38]">Clutch</span>
                                <span className="w-2 h-2 rounded-full bg-[#ff5c35] ml-0.5 mt-1" />
                            </div>
                        </div>

                        {/* appfutura */}
                        <div className="h-20 flex items-center justify-center p-4">
                            <span className="text-sm font-bold text-[#2b2b2b]">appfutura</span>
                        </div>

                        {/* Trustpilot */}
                        <div className="h-20 flex items-center justify-center p-4">
                            <span className="text-sm font-bold text-gray-900">★ Trustpilot</span>
                        </div>

                        {/* aws */}
                        <div className="h-20 flex items-center justify-center p-4">
                            <span className="text-lg font-bold text-[#232f3e]">aws</span>
                        </div>

                        {/* OpenAI */}
                        <div className="h-20 flex items-center justify-center p-4">
                            <span className="text-sm font-semibold text-gray-900">OpenAI</span>
                        </div>

                        {/* ZOHO */}
                        <div className="h-20 flex items-center justify-center p-4">
                            <span className="text-base font-bold text-[#e42527]">ZOHO</span>
                        </div>

                        {/* Meta */}
                        <div className="h-20 flex items-center justify-center p-4">
                            <span className="text-base font-bold text-[#0668E1]">Meta</span>
                        </div>

                        {/* Microsoft */}
                        <div className="h-20 flex items-center justify-center p-4 col-span-2 sm:col-span-1">
                            <span className="text-sm font-semibold text-[#737373]">Microsoft</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

