import React from 'react';
import { Users, Settings, TrendingUp, Code2, MessageSquare, LifeBuoy } from 'lucide-react';

function WyChoose() {
  const points = [
    {
      title: 'Expert Development Team',
      description:
        'Our skilled engineers leverage cutting-edge technology and deep industry experience to build high-performance web and mobile applications.',
      icon: Users,
    },
    {
      title: 'Tailored Custom Solutions',
      description:
        'We architect bespoke software designed specifically to solve your unique business challenges and drive operational efficiency.',
      icon: Settings,
    },
    {
      title: 'Results-Driven Digital Marketing',
      description:
        'Our targeted SEO, social media, and content marketing strategies maximize brand visibility, qualified leads, and measurable ROI.',
      icon: TrendingUp,
    },
    {
      title: 'Clean & Scalable Code',
      description:
        'We build secure, modular, and future-proof architectures that ensure smooth performance as your digital business grows.',
      icon: Code2,
    },
    {
      title: 'Transparent Communication',
      description:
        'We maintain clear project roadmaps, regular updates, and honest reporting across every phase of the development lifecycle.',
      icon: MessageSquare,
    },
    {
      title: 'Ongoing Support & Maintenance',
      description:
        'Beyond deployment, we provide continuous monitoring, security updates, and technical optimization to ensure long-term success.',
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="bg-black py-10 md:py-15 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight mb-4">
            Why Choose Bytespire?
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            We merge cutting-edge technology with deep industry expertise to build software that accelerates your business growth.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-5"
            >
              <div className="bg-[#8e2157]/20 p-3 border border-[#8e2157]/40 rounded-xl shrink-0 mt-1">
                <point.icon className="h-5 w-5 text-pink-300" />
              </div>
              <div>
                <h3 className="text-white font-light text-xl mb-3">
                  {point.title}
                </h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WyChoose;
