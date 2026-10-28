import React from 'react';
import Image from 'next/image';
import { Layout, Server, Smartphone, Cloud, Database, TrendingUp } from 'lucide-react';

function OurTechnologies() {
  const categories = [
    {
      icon: Layout,
      label: 'Frontend & UI Frameworks',
      description:
        'React.js, Next.js, Vue.js, Angular, Tailwind CSS, and HTML5/CSS3 for building responsive, pixel-perfect, and ultra-fast user interfaces.',
    },
    {
      icon: Server,
      label: 'Backend & API Architecture',
      description:
        'Node.js, Express, Python (Django/FastAPI), Java (Spring Boot), PHP (Laravel), and GraphQL for secure, resilient, and scalable backend services.',
    },
    {
      icon: Smartphone,
      label: 'Mobile App Development',
      description:
        'React Native, Flutter, Swift (iOS), and Kotlin (Android) to deliver seamless cross-platform and native mobile experiences.',
    },
    {
      icon: Cloud,
      label: 'Cloud Infrastructure & DevOps',
      description:
        'AWS, Google Cloud Platform (GCP), Microsoft Azure, Docker, Kubernetes, and CI/CD pipelines to guarantee high availability and automated deployment.',
    },
    {
      icon: Database,
      label: 'Database & Storage Solutions',
      description:
        'PostgreSQL, MySQL, MongoDB, Redis, and Firebase offering reliable data persistence, caching, and real-time synchronization.',
    },
    {
      icon: TrendingUp,
      label: 'Digital Marketing & SEO Tools',
      description:
        'Google Analytics 4, SEMrush, Ahrefs, Google Search Console, and Hubspot to drive organic traffic, conversion rate optimization, and actionable data insights.',
    },
  ];

  return (
    <section className="bg-[#8e2157] py-14 md:py-20 border-t border-[#6b1842]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="relative w-3.5 h-1.5">
              <span className="block w-full h-full rounded-[2px] bg-white/80" />
            </div>
            <span className="text-white/80 text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase">
              Tech Stack
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight mb-4 max-w-3xl">
            Modern Technologies & Platforms We Leverage
          </h2>
          <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            We harness an enterprise-grade technology stack to engineer robust, scalable, and high-performing digital products tailored to your business needs.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          
          {/* Left Side: Cards Grid (6 cards) */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group border border-white/20"
                >
                  {/* Icon */}
                  <div className="mb-5 w-12 h-12 rounded-xl bg-[#8e2157]/10 flex items-center justify-center text-[#8e2157] group-hover:bg-[#8e2157] group-hover:text-white transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Category Label */}
                  <h3 className="text-gray-900 text-lg font-medium mb-3">
                    {cat.label}
                  </h3>

                  {/* Items Description */}
                  <p className="text-gray-600 font-light text-sm leading-relaxed flex-grow">
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-2/5 relative mt-6 lg:mt-0 lg:sticky lg:top-28 self-start">
            {/* Image Container */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10 group">
              <Image 
                src="/tech_image.png" 
                alt="Modern Technologies & Platforms We Leverage" 
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Subtle Gradient Overlay on image for blending */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8e2157]/40 via-transparent to-black/20 pointer-events-none" />
            </div>
            
            {/* Decorative Outline */}
            <div className="absolute -z-0 top-6 -right-6 w-full h-full border-2 border-white/20 rounded-3xl hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurTechnologies;
