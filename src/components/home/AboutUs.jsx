import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-50 pt-32 pb-10 md:pb-15 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="inline-flex mt-[100px] md:mt-0 items-center gap-2 px-3 py-1 rounded-full text-xs font-light uppercase tracking-widest text-[#8e2157] bg-[#8e2157]/10 mb-4">
          Who we are

        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6">
          Our team concern about
          <br className="hidden md:block" /> your Growth
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-10 max-w-3xl">
          We have a dedicated team ready to support any type of business growth in the modern digital era. Our experienced team specializes in developing custom software, mobile applications, website solutions, and digital marketing services. Our Byte spire services are designed to enhance your brand visibility across social media platforms, offering a wide range of tailored solutions to overcome your business challenges.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8e2157] text-white rounded-full text-sm font-light hover:bg-[#6b1842] transition-colors shadow-lg shadow-purple-900/20"
        >
          Discover Our Story
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
