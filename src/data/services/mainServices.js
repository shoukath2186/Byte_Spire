import {
  RefreshCw, Cloud, Link2, ShieldCheck, Layout, Smartphone, Bug, Code,
  Search, Target, BarChart, Mail, TrendingUp, Users, Globe,
  PenTool, Monitor, MousePointer, LayoutDashboard, Layers, Eye,
  Briefcase, Flag, Sparkles, Megaphone, Star, Award, Compass, MessageCircle,
  ShoppingBag, Bot
} from 'lucide-react';

export const technologyServices = {
  title: 'Web & Mobile App Development Services',
  description: 'Looking for web or app development in Kerala? Bytespire builds responsive websites, mobile apps and custom software tailored to your business needs.',
  bannerImage: '/service_tech.png',
  subServices: [
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Engineer native and cross-platform mobile apps for iOS and Android that deliver intuitive experiences, blazing speeds, and high engagement on mobile devices.',
      icon: Smartphone,
      image: '/service_mobile.jpg',
      features: ['iOS & Android Native Apps', 'Cross-Platform (React Native & Flutter)', 'App Store & Play Store Deployment', 'Intuitive Mobile UI/UX & Offline Sync'],
      meta: {
        title: 'Mobile App Development Company in Kerala | iOS & Android | Bytespire',
        description: 'Top mobile app development agency in Kerala. We build high-performance iOS and Android mobile apps for startups and enterprises across Kochi, Calicut & Trivandrum.',
        keywords: ['mobile app development Kerala', 'iOS app developers Kochi', 'Android app company Kerala', 'React Native apps India', 'mobile app development Calicut'],
        openGraph: {
          title: 'Mobile App Development Company in Kerala | Bytespire',
          description: 'High-performance iOS & Android mobile applications engineered for startups and enterprises across Kerala and global markets.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'custom-software',
      title: 'Custom Software for Business',
      description: 'Develop tailored software solutions designed specifically to address your unique operational bottlenecks, automate repetitive workflows, and accelerate business productivity.',
      icon: Code,
      image: '/service_custom_software.jpg',
      features: ['Enterprise Business Portals', 'Automated Workflow & ERP Systems', 'Scalable Cloud Microservices', 'Secure API & Payment Integrations'],
      meta: {
        title: 'Custom Software Development Company in Kerala | Bytespire',
        description: 'Custom enterprise software and business workflow automation in Kerala. Scalable cloud-native solutions designed to streamline business operations.',
        keywords: ['custom software development Kerala', 'enterprise software company Kochi', 'ERP development Kerala', 'workflow automation software India', 'software company Calicut'],
        openGraph: {
          title: 'Custom Software Development Company in Kerala | Bytespire',
          description: 'End-to-end custom application development to solve business challenges for enterprises across Kerala and beyond.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'ecommerce-store',
      title: 'E-Commerce Store Development',
      description: 'Launch high-converting, secure online stores built for scale. Complete with multi-currency payment gateways, inventory management, fast checkout, and mobile-first storefronts.',
      icon: ShoppingBag,
      image: '/service_ecommerce.jpg',
      features: ['Custom Storefronts (Next.js & Shopify)', 'Seamless Payment Gateways (Razorpay, Stripe)', 'Inventory & Order Management', 'Conversion Rate & Cart Optimization'],
      meta: {
        title: 'E-Commerce Website Development in Kerala | Online Stores | Bytespire',
        description: 'Build fast, high-converting e-commerce online stores in Kerala. Custom shopping platforms with seamless payment gateways, cart optimization, and mobile-ready designs.',
        keywords: ['ecommerce website development Kerala', 'online store developers Kochi', 'Shopify agency Kerala', 'ecommerce solutions Calicut', 'custom shopping cart India'],
        openGraph: {
          title: 'E-Commerce Website Development in Kerala | Bytespire',
          description: 'Build fast, high-converting e-commerce online stores with secure payment gateways and seamless checkout experiences.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'business-websites',
      title: 'Business Websites',
      description: 'Create modern, lightning-fast, and responsive business websites that build instant credibility, showcase your authority, and convert visitors into qualified leads.',
      icon: Layout,
      image: '/banner-center.png',
      features: ['Modern Responsive & Mobile-First Design', 'SEO & Core Web Vitals Optimized', 'Custom CMS & Blog Integration', 'Lead Capture & Contact Funnels'],
      meta: {
        title: 'Business Website Design & Development in Kerala | Bytespire',
        description: 'Professional corporate and business website development in Kerala. Fast, responsive, and SEO-optimized business websites designed to generate high-intent customer leads.',
        keywords: ['business website development Kerala', 'corporate website design Kochi', 'website development Calicut', 'professional web design Kerala', 'responsive websites Trivandrum'],
        openGraph: {
          title: 'Business Website Design & Development in Kerala | Bytespire',
          description: 'Professional corporate and business websites engineered for speed, search visibility, and maximum conversion rates.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions & Enterprise Automation',
      description: 'Leverage cutting-edge Artificial Intelligence to automate business operations, integrate intelligent chatbots, analyze predictive data, and deliver autotrophic AI workflows.',
      icon: Bot,
      image: '/agentic_ai_cover.png',
      features: ['Custom AI Agents & Workflows', 'Intelligent Customer Support Chatbots', 'Predictive Business Analytics', 'LLM & API Integrations'],
      meta: {
        title: 'AI Solutions & Enterprise Automation in Kerala | Bytespire',
        description: 'Transform your business with cutting-edge AI solutions, custom intelligent agents, workflow automation, and machine learning integrations by Bytespire in Kerala.',
        keywords: ['AI solutions Kerala', 'AI development company Kochi', 'enterprise AI automation Kerala', 'AI chatbot development Calicut', 'machine learning company India'],
        openGraph: {
          title: 'AI Solutions & Enterprise Automation in Kerala | Bytespire',
          description: 'Empower your business with next-generation Artificial Intelligence, smart chatbots, and automated workflows.',
          images: [{ url: '/logo.svg' }],
        },
      },
    }
  ],

  solutions: {
    title: 'Engineering Solutions Built for Scale',
    description: 'We don\'t just write code — we architect systems that grow with your business. Our approach combines proven frameworks with custom engineering to solve real operational bottlenecks.',
    points: [
      {
        title: 'Legacy System Modernization',
        description: 'Migrate outdated platforms to modern, cloud-native architectures without disrupting daily operations.',
        icon: RefreshCw,
      },
      {
        title: 'Scalable Cloud Infrastructure',
        description: 'Design and deploy infrastructure on AWS, Azure, or GCP that handles growth without costly rework.',
        icon: Cloud,
      },
      {
        title: 'Third-Party Integrations',
        description: 'Connect your product with payment gateways, CRMs, ERPs, and other tools your business relies on.',
        icon: Link2,
      },
      {
        title: 'Performance & Security Hardening',
        description: 'Audit and optimize existing applications for speed, reliability, and protection against vulnerabilities.',
        icon: ShieldCheck,
      },
    ],
  },

  process: {
    title: 'Our Development Process',
    description: 'A transparent, milestone-driven workflow that keeps you informed and in control at every stage.',
    steps: [
      {
        step: '01',
        title: 'Discovery & Requirement Analysis',
        description: 'We dive deep into your business goals, target users, and technical constraints to define a clear project roadmap and scope.',
      },
      {
        step: '02',
        title: 'Architecture & UI/UX Planning',
        description: 'Our team designs the system architecture and wireframes, ensuring scalability and usability are built in from day one.',
      },
      {
        step: '03',
        title: 'Agile Development Sprints',
        description: 'We build in iterative sprints with regular demos, so you see progress and can give feedback throughout, not just at the end.',
      },
      {
        step: '04',
        title: 'Quality Assurance & Testing',
        description: 'Every feature is rigorously tested — functionally, for performance, and for security — before it reaches production.',
      },
      {
        step: '05',
        title: 'Deployment & Launch',
        description: 'We handle deployment, CI/CD pipeline setup, and go-live support to ensure a smooth, zero-downtime launch.',
      },
      {
        step: '06',
        title: 'Ongoing Support & Maintenance',
        description: 'Post-launch, we provide monitoring, updates, and scaling support so your application keeps performing as you grow.',
      },
    ],
  },

  faq: [
    {
      question: 'How long does it take to build a custom web or mobile application?',
      answer: 'Timelines vary by scope, but most projects range from 8–16 weeks. A simple MVP can launch in 6–8 weeks, while complex, feature-rich platforms may take 4–6 months. We provide a detailed timeline after the discovery phase.',
    },
    {
      question: 'Which technologies and frameworks do you use?',
      answer: 'We primarily work with React, Next.js, and Node.js for web, and React Native or native Swift/Kotlin for mobile. Technology choices are always based on your project\'s specific performance, scalability, and budget requirements.',
    },
    {
      question: 'Do you offer post-launch support and maintenance?',
      answer: 'Yes. We offer flexible maintenance plans covering bug fixes, security updates, performance monitoring, and feature enhancements, so your application stays reliable and up to date long after launch.',
    },
    {
      question: 'Can you work with our existing in-house development team?',
      answer: 'Absolutely. We regularly integrate with in-house teams, acting as an extension of your engineering department, whether that means full project ownership or supplementing specific skill gaps.',
    },
    {
      question: 'How do you ensure the security of the applications you build?',
      answer: 'Security is built into every stage — from secure coding practices and code reviews to automated vulnerability scanning and penetration testing before launch.',
    },
  ],

  cta: {
    title: 'Ready to Build Something Powerful?',
    description: 'Let\'s turn your idea into a scalable, high-performing application. Talk to our engineering team today and get a free project consultation.',
    primaryButton: { label: 'Get a Free Consultation', href: '/contact' },
    secondaryButton: { label: 'View Our Portfolio', href: '/projects' },
  },
  meta: {
    title: 'Web & App Development Company in Kerala | Bytespire',
    description: 'Looking for web or app development in Kerala? Bytespire builds responsive websites, mobile apps and custom software tailored to your business needs.',
    keywords: [
      'web development Kerala',
      'app development company Kerala',
      'mobile app development Kerala',
      'software company in Kerala',
      'custom software development Kerala',
      'web design company Kochi',
      'IT company Calicut',
      'software developers Trivandrum'
    ],
    openGraph: {
      title: 'Web & App Development Company in Kerala | Bytespire',
      description: 'Looking for web or app development in Kerala? Bytespire builds responsive websites, mobile apps and custom software tailored to your business needs.',
      images: [{ url: '/logo.svg' }],
    },
    alternates: {
      canonical: 'https://bytespire.in/services/technology',
    },
  },
};

export const digitalMarketingServices = {
  title: 'Digital Marketing & SEO Services',
  description: "Grow your business with Bytespire's digital marketing services, including SEO, social media marketing and online advertising. Let's plan your growth.",
  bannerImage: '/service_marketing.png',
  subServices: [
    {
      id: 'seo-optimization',
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate organic search results and attract high-intent local and global customers. We deliver complete on-page optimization, technical site audits, authoritative link building, and localized keyword rankings.',
      icon: Search,
      image: '/service_marketing.png',
      features: ['Local SEO ', 'Technical SEO & Core Web Vitals', 'High-Impact Keyword Strategy', 'Authority Link Building & Outreach'],
      meta: {
        title: 'Best SEO Agency in Kerala | Top Search Engine Optimization | ByteSpire',
        description: 'Rank #1 on Google with ByteSpire, Kerala\'s premier SEO agency. Targeted local SEO in Kochi, Calicut & Trivandrum, technical audits, and high-converting organic search strategies.',
        keywords: ['SEO company Kerala', 'SEO services Kochi', 'best SEO agency Calicut', 'local SEO Kerala', 'Google ranking experts Kerala'],
        openGraph: {
          title: 'Best SEO Agency in Kerala | Top Search Engine Optimization | ByteSpire',
          description: 'Dominate organic search rankings and capture qualified customer leads across Kerala and global markets.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'branding',
      title: 'Branding & Corporate Identity',
      description: 'Craft a distinct, memorable brand persona that commands trust and loyalty. From strategic positioning and bespoke logo systems to complete brand guidelines and digital touchpoints.',
      icon: Sparkles,
      image: '/service_branding.png',
      features: ['Brand Strategy & Market Positioning', 'Distinctive Logo & Identity Design', 'Comprehensive Brand Style Guides', 'Marketing Collateral & Digital Assets'],
      meta: {
        title: 'Creative Branding & Identity Design Agency in Kerala | ByteSpire',
        description: 'Build an iconic, enduring brand with ByteSpire. Strategic branding, custom logo design, visual identities, and marketing collateral for Kerala businesses.',
        keywords: ['branding agency Kerala', 'logo design Kochi', 'brand identity company Calicut', 'corporate branding Kerala', 'creative agency Trivandrum'],
        openGraph: {
          title: 'Creative Branding & Identity Design Agency in Kerala | ByteSpire',
          description: 'Build an iconic, enduring brand that connects with your target audience across Kerala and worldwide.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'web-design-development',
      title: 'Web Design & Development',
      description: 'Build high-converting, lightning-fast, and responsive websites that turn visitors into loyal clients. We engineer modern, mobile-first websites with Next.js, React, and seamless UI/UX.',
      icon: Layout,
      image: '/service_tech.png',
      features: ['Modern Responsive Web Design', 'Next.js & React High-Speed Builds', 'Conversion-Optimized Landing Pages', 'Custom CMS & E-Commerce Integration'],
      meta: {
        title: 'Web Design & Development Company in Kerala | ByteSpire',
        description: 'Professional web design and development company in Kerala. High-performance, responsive websites and landing pages built to maximize business conversions.',
        keywords: ['web design company Kerala', 'web development Kochi', 'website designers Calicut', 'landing page design Kerala', 'Next.js web development Kerala'],
        openGraph: {
          title: 'Web Design & Development Company in Kerala | ByteSpire',
          description: 'High-performance, responsive, and conversion-focused web design and development engineered by ByteSpire.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: '360-marketing',
      title: '360° Digital Marketing & Performance Ads',
      description: 'All-inclusive multi-channel marketing campaigns built to scale revenue. Combining Google Ads, Meta advertising, content strategy, email automation, and influencer partnerships for complete market dominance.',
      icon: Megaphone,
      image: '/services_bg.png',
      features: ['Full-Funnel Paid Advertising (Google & Meta)', 'Social Media Strategy & Management', 'Automated Email Drip Campaigns', 'Data-Driven ROI & Lead Generation'],
      meta: {
        title: '360° Digital Marketing & Growth Agency in Kerala | ByteSpire',
        description: 'Accelerate business revenue with complete 360° digital marketing solutions in Kerala. Integrated PPC ads, social media management, email automation, and omnichannel lead generation.',
        keywords: ['360 digital marketing Kerala', 'performance marketing agency Kochi', 'lead generation company Kerala', 'Google ads agency Calicut', 'social media marketing Trivandrum'],
        openGraph: {
          title: '360° Digital Marketing & Growth Agency in Kerala | ByteSpire',
          description: 'All-inclusive 360° digital marketing and multi-channel campaigns to accelerate business growth in Kerala.',
          images: [{ url: '/logo.svg' }],
        },
      },
    }
  ],
  solutions: {
    title: 'Marketing Solutions Built for Growth',
    description: 'We move beyond vanity metrics to focus on what matters most: qualified leads, customer acquisition, and measurable ROI.',
    points: [
      {
        title: 'Audience Targeting',
        description: 'Pinpoint and engage your ideal customers with hyper-targeted digital campaigns.',
        icon: Users,
      },
      {
        title: 'Conversion Rate Optimization',
        description: 'Analyze user behavior to refine your funnels and turn more visitors into paying customers.',
        icon: BarChart,
      },
      {
        title: 'Global Reach',
        description: 'Expand your market presence locally or internationally with localized marketing strategies.',
        icon: Globe,
      },
      {
        title: 'Data-Backed Decisions',
        description: 'Leverage deep analytics and reporting to continuously optimize your marketing spend.',
        icon: Target,
      },
    ],
  },
  process: {
    title: 'Our Marketing Process',
    description: 'A strategic, iterative approach to scaling your business.',
    steps: [
      {
        step: '01',
        title: 'Audit & Analysis',
        description: 'We audit your current digital footprint, analyze competitors, and identify immediate growth opportunities.',
      },
      {
        step: '02',
        title: 'Strategy Formulation',
        description: 'Developing a customized, multi-channel marketing plan aligned with your specific business objectives and budget.',
      },
      {
        step: '03',
        title: 'Campaign Execution',
        description: 'Launching targeted campaigns with compelling copy, striking visuals, and optimized tracking systems.',
      },
      {
        step: '04',
        title: 'Monitoring & Optimization',
        description: 'Continuously monitoring performance metrics and adjusting bids, targeting, and messaging to maximize ROI.',
      },
      {
        step: '05',
        title: 'Scaling Winners',
        description: 'Identifying the most profitable channels and scaling campaigns to accelerate your growth.',
      },
      {
        step: '06',
        title: 'Transparent Reporting',
        description: 'Providing clear, actionable reports on KPIs, so you always know how your investment is performing.',
      },
    ],
  },
  faq: [
    {
      question: 'How long does it take to see results from SEO?',
      answer: 'SEO is a long-term strategy. While some improvements can be seen in the first few months, significant and sustainable results typically take 4 to 6 months to materialize, depending on industry competition and your website\'s current state.',
    },
    {
      question: 'Do I need both SEO and PPC?',
      answer: 'While not mandatory, combining SEO and PPC is highly recommended. PPC provides immediate visibility and leads, while SEO builds long-term, sustainable organic traffic. Together, they dominate search engine results.',
    },
    {
      question: 'How do you measure marketing success?',
      answer: 'We measure success based on your bottom line. While we track metrics like traffic and click-through rates, our primary focus is on qualified leads, conversion rates, cost per acquisition (CPA), and overall Return on Ad Spend (ROAS).',
    },
  ],
  cta: {
    title: 'Ready to Dominate Your Market?',
    description: 'Stop guessing and start growing. Speak with our digital marketing experts to craft a winning strategy.',
    primaryButton: { label: 'Get a Marketing Audit', href: '/contact' },
    secondaryButton: { label: 'Explore Case Studies', href: '/projects' },
  },
  meta: {
    title: 'Digital Marketing Agency in Kerala | Bytespire',
    description: "Grow your business with Bytespire's digital marketing services, including SEO, social media marketing and online advertising. Let's plan your growth.",
    keywords: [
      'digital marketing agency in Kerala',
      'digital marketing Kerala',
      'SEO agency Kochi',
      'social media marketing Kerala',
      'online advertising Kerala',
      'PPC agency Trivandrum',
      'best digital marketing company Calicut'
    ],
    openGraph: {
      title: 'Digital Marketing Agency in Kerala | Bytespire',
      description: "Grow your business with Bytespire's digital marketing services, including SEO, social media marketing and online advertising. Let's plan your growth.",
      images: [{ url: '/logo.svg' }],
    },
    alternates: {
      canonical: 'https://bytespire.in/services/digital-marketing',
    },
  },
};

export const experienceDesignServices = {
  title: 'User-Centric UI/UX & Experience Design',
  description: 'Craft intuitive, frictionless user journeys and stunning interfaces. Our design process ensures your digital products are both beautiful and highly functional, driving user engagement.',
  bannerImage: '/service_design.png',
  subServices: [
    {
      id: 'ux-research',
      title: 'UX Research & Strategy',
      description: 'Understanding your users through in-depth research, persona development, and journey mapping to create experiences that truly resonate.',
      icon: Users,
      features: ['User Interviews & Surveys', 'Persona Development', 'Customer Journey Mapping', 'Usability Testing'],
      meta: {
        title: 'UX Research & Customer Journey Mapping in Kerala | ByteSpire',
        description: 'Understand customer behaviors and eliminate friction with in-depth UX research, usability testing, and persona development tailored for businesses in Kerala.',
        keywords: ['UX research Kerala', 'usability testing Kochi', 'user research agency Calicut', 'customer experience design Kerala'],
        openGraph: {
          title: 'UX Research & Customer Journey Mapping in Kerala | ByteSpire',
          description: 'Data-driven UX research to uncover user pain points and optimize engagement.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'ui-design',
      title: 'User Interface (UI) Design',
      description: 'Designing visually stunning, modern interfaces that align with your brand identity and delight users at every interaction.',
      icon: PenTool,
      features: ['Visual Design & Branding', 'Interactive Prototypes', 'Micro-interactions & Animation', 'Responsive Web/Mobile UI'],
      meta: {
        title: 'UI Design Agency in Kerala | Modern Web & App Interfaces | ByteSpire',
        description: 'Award-winning UI designers in Kerala creating stunning, modern, and high-converting visual interfaces for mobile apps and web platforms.',
        keywords: ['UI design company Kerala', 'web UI designers Kochi', 'mobile app UI design Calicut', 'Figma designers Kerala'],
        openGraph: {
          title: 'UI Design Agency in Kerala | ByteSpire',
          description: 'Visually stunning, high-converting digital interfaces crafted for modern businesses.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'wireframing',
      title: 'Wireframing & Prototyping',
      description: 'Rapidly iterating on structural concepts and user flows before writing a single line of code, saving time and development costs.',
      icon: LayoutDashboard,
      features: ['Low & High-Fidelity Wireframes', 'Clickable Prototypes', 'Information Architecture', 'Flow Optimization'],
      meta: {
        title: 'Wireframing & Interactive Prototyping Services in Kerala | ByteSpire',
        description: 'Validate product concepts quickly with interactive Figma prototypes and high-fidelity wireframing before engineering begins.',
        keywords: ['wireframing services Kerala', 'rapid prototyping Kochi', 'interactive prototype design Calicut'],
        openGraph: {
          title: 'Wireframing & Interactive Prototyping Services in Kerala | ByteSpire',
          description: 'Accelerate product delivery with validated wireframes and interactive prototypes.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'design-systems',
      title: 'Design Systems & Libraries',
      description: 'Creating cohesive, scalable design systems that ensure consistency across all your digital products and speed up development.',
      icon: Layers,
      features: ['Component Libraries', 'Style Guides', 'Typography & Color Systems', 'Scalable Asset Management'],
      meta: {
        title: 'Design Systems & UI Component Libraries in Kerala | ByteSpire',
        description: 'Build scalable, consistent digital products with enterprise Figma design systems and reusable UI component architectures.',
        keywords: ['design systems company Kerala', 'Figma component library Kochi', 'brand style guides Kerala'],
        openGraph: {
          title: 'Design Systems & UI Component Libraries in Kerala | ByteSpire',
          description: 'Establish visual consistency and rapid product scaling with custom design systems.',
          images: [{ url: '/logo.svg' }],
        },
      },
    }
  ],
  solutions: {
    title: 'Design Solutions that Drive Engagement',
    description: 'We believe good design is good business. Our UI/UX solutions are crafted to reduce friction, increase retention, and elevate your brand.',
    points: [
      {
        title: 'Frictionless Journeys',
        description: 'Remove barriers in your user flows to significantly increase conversion rates.',
        icon: MousePointer,
      },
      {
        title: 'Cross-Device Consistency',
        description: 'Ensure a flawless experience whether your user is on a desktop, tablet, or smartphone.',
        icon: Monitor,
      },
      {
        title: 'Visual Hierarchy',
        description: 'Guide your users intuitively to the most important actions and information.',
        icon: Eye,
      },
      {
        title: 'Accessible Design',
        description: 'Build inclusive products that are accessible and usable by everyone.',
        icon: Target,
      },
    ],
  },
  process: {
    title: 'Our Design Process',
    description: 'A human-centered approach to solving complex design challenges.',
    steps: [
      {
        step: '01',
        title: 'Empathize & Research',
        description: 'We start by deeply understanding your business goals and the needs, pain points, and behaviors of your users.',
      },
      {
        step: '02',
        title: 'Define & Ideate',
        description: 'Synthesizing research to define the core problems and brainstorming creative, effective design solutions.',
      },
      {
        step: '03',
        title: 'Information Architecture',
        description: 'Structuring the content and navigation to ensure users can find what they need effortlessly.',
      },
      {
        step: '04',
        title: 'Wireframing & Prototyping',
        description: 'Creating structural blueprints and interactive prototypes to test concepts and flows early on.',
      },
      {
        step: '05',
        title: 'Visual Design',
        description: 'Applying typography, color, and branding to create stunning, polished interfaces.',
      },
      {
        step: '06',
        title: 'Testing & Handoff',
        description: 'Validating designs with real users and providing clean, organized assets to the development team.',
      },
    ],
  },
  faq: [
    {
      question: 'What is the difference between UI and UX?',
      answer: 'UX (User Experience) focuses on the logic, structure, and feel of the experience—how easy and intuitive it is to use. UI (User Interface) focuses on the visual look, layout, and interactive elements like buttons and typography. We excel at both.',
    },
    {
      question: 'Do you redesign existing websites or apps?',
      answer: 'Yes. We often conduct UX audits on existing platforms to identify friction points and then redesign them to improve usability, aesthetics, and conversion rates.',
    },
    {
      question: 'What design tools do you use?',
      answer: 'Our primary design and prototyping tool is Figma, which allows for seamless collaboration and developer handoff. We also use Adobe Creative Suite for specific graphic assets.',
    },
  ],
  cta: {
    title: 'Ready to Elevate Your Digital Experience?',
    description: 'Transform your product with world-class design that your users will love.',
    primaryButton: { label: 'Start Your Design Project', href: '/contact' },
    secondaryButton: { label: 'View Design Portfolio', href: '/projects' },
  },
  meta: {
    title: 'Premier UI/UX Design Agency in Kerala | Product Design | ByteSpire',
    description: 'Transform your customer experience with Kerala\'s top UI/UX design agency. User research, Figma wireframing, mobile app design, and design systems in Kochi & Calicut.',
    keywords: [
      'UI UX design agency Kerala',
      'UI UX designer Kochi',
      'product design company Kerala',
      'website redesign Kerala',
      'Figma designers Calicut',
      'app UI design Trivandrum'
    ],
    openGraph: {
      title: 'Premier UI/UX Design Agency in Kerala | ByteSpire',
      description: 'Human-centered UI/UX design and product strategy for forward-thinking brands in Kerala and worldwide.',
      images: [{ url: '/logo.svg' }],
    },
    alternates: {
      canonical: 'https://bytespire.in/services/experience-design',
    },
  },
};

export const brandingServices = {
  title: 'Corporate Identity & Brand Strategy',
  description: 'Define your voice and visualize your identity. We build memorable brands that resonate with your target audience, establish trust, and stand out in a crowded market.',
  bannerImage: '/service_branding.png',
  subServices: [
    {
      id: 'brand-strategy',
      title: 'Brand Strategy & Positioning',
      description: 'Defining your brand\'s core purpose, values, and market positioning to create a strong foundation for all communication.',
      icon: Compass,
      features: ['Market & Competitor Analysis', 'Brand Positioning & Promise', 'Target Audience Personas', 'Brand Messaging Framework'],
      meta: {
        title: 'Brand Strategy & Positioning Consultants in Kerala | ByteSpire',
        description: 'Define your competitive edge with market research, brand voice, and clear positioning for Kerala\'s growing businesses and startups.',
        keywords: ['brand strategy Kerala', 'brand positioning Kochi', 'branding consultants Calicut', 'business branding Kerala'],
        openGraph: {
          title: 'Brand Strategy & Positioning Consultants in Kerala | ByteSpire',
          description: 'Position your brand for market leadership with data-driven strategy and authentic storytelling.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'logo-identity',
      title: 'Logo & Visual Identity',
      description: 'Crafting distinctive logos and comprehensive visual identities that instantly communicate who you are and what you stand for.',
      icon: Sparkles,
      features: ['Custom Logo Design', 'Color Palette & Typography', 'Iconography & Graphic Elements', 'Complete Visual Identity Systems'],
      meta: {
        title: 'Logo Design & Visual Identity Agency in Kerala | ByteSpire',
        description: 'Craft unforgettable logos and comprehensive visual identity packages that command trust and recognition across Kerala and global markets.',
        keywords: ['logo design Kerala', 'visual identity agency Kochi', 'creative logo designers Calicut', 'corporate branding Kerala'],
        openGraph: {
          title: 'Logo Design & Visual Identity Agency in Kerala | ByteSpire',
          description: 'Distinctive, premium logos and visual identity systems tailored for modern companies.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'brand-guidelines',
      title: 'Brand Guidelines',
      description: 'Creating detailed brand books that ensure consistency in how your brand is represented across all internal and external channels.',
      icon: Briefcase,
      features: ['Logo Usage Rules', 'Voice & Tone Guidelines', 'Visual Style Guidelines', 'Digital & Print Standards'],
      meta: {
        title: 'Brand Guidelines & Style Manual Creation in Kerala | ByteSpire',
        description: 'Maintain complete brand consistency across touchpoints with comprehensive brand books, color rules, and typography manuals.',
        keywords: ['brand guidelines Kerala', 'brand book designers Kochi', 'corporate style guide India'],
        openGraph: {
          title: 'Brand Guidelines & Style Manual Creation in Kerala | ByteSpire',
          description: 'Protect your brand identity with clear, comprehensive brand guideline manuals.',
          images: [{ url: '/logo.svg' }],
        },
      },
    },
    {
      id: 'brand-activation',
      title: 'Brand Activation & Collateral',
      description: 'Bringing your brand to life through impactful marketing collateral, packaging, and digital assets.',
      icon: Megaphone,
      features: ['Business Cards & Stationery', 'Marketing Materials & Brochures', 'Packaging Design', 'Social Media Branding'],
      meta: {
        title: 'Brand Activation, Packaging & Collateral Design in Kerala | ByteSpire',
        description: 'Bring your brand to market with premium print collateral, custom packaging design, and digital marketing materials across Kerala.',
        keywords: ['packaging design Kerala', 'marketing collateral Kochi', 'brochure design Calicut', 'print branding Kerala'],
        openGraph: {
          title: 'Brand Activation, Packaging & Collateral Design in Kerala | ByteSpire',
          description: 'Tangible brand experiences with high-impact collateral, packaging, and digital assets.',
          images: [{ url: '/logo.svg' }],
        },
      },
    }
  ],
  solutions: {
    title: 'Building Brands that Last',
    description: 'A strong brand is your most valuable asset. We help you build equity and recognition that drives long-term business success.',
    points: [
      {
        title: 'Establish Trust',
        description: 'Professional, cohesive branding builds immediate credibility with your audience.',
        icon: Award,
      },
      {
        title: 'Market Differentiation',
        description: 'Stand out from competitors with a unique identity and clear value proposition.',
        icon: Star,
      },
      {
        title: 'Internal Alignment',
        description: 'Give your team a clear, unifying brand purpose to rally behind.',
        icon: Flag,
      },
      {
        title: 'Consistent Messaging',
        description: 'Ensure every touchpoint communicates the same powerful brand story.',
        icon: MessageCircle,
      },
    ],
  },
  process: {
    title: 'Our Branding Process',
    description: 'A collaborative journey to discover and visualize your brand\'s true essence.',
    steps: [
      {
        step: '01',
        title: 'Discovery Workshop',
        description: 'We collaborate with your stakeholders to unearth your brand\'s history, vision, and core values.',
      },
      {
        step: '02',
        title: 'Market & Competitor Research',
        description: 'Analyzing the landscape to find whitespace opportunities for your brand to own.',
      },
      {
        step: '03',
        title: 'Strategy & Positioning',
        description: 'Defining the strategic foundation: your mission, vision, voice, and unique positioning.',
      },
      {
        step: '04',
        title: 'Visual Exploration',
        description: 'Developing mood boards and initial design concepts that translate strategy into visuals.',
      },
      {
        step: '05',
        title: 'Identity Design',
        description: 'Refining the chosen concept into a complete visual identity system, including the logo and typography.',
      },
      {
        step: '06',
        title: 'Guidelines & Rollout',
        description: 'Delivering comprehensive brand guidelines and assets to ensure a successful, consistent launch.',
      },
    ],
  },
  faq: [
    {
      question: 'Why is brand strategy important before designing a logo?',
      answer: 'A logo is just the tip of the iceberg. Brand strategy defines what your brand stands for, who it speaks to, and how it differs from competitors. Designing a logo without strategy is like building a house without a blueprint.',
    },
    {
      question: 'Do you offer rebranding services?',
      answer: 'Yes! Whether you need a subtle brand refresh to modernize your look or a complete overhaul to pivot your business, we guide you through the entire rebranding process.',
    },
    {
      question: 'What deliverables do I get at the end of a branding project?',
      answer: 'Depending on the scope, you typically receive all logo files (vector and raster formats), a defined color palette and typography system, and a comprehensive PDF Brand Guidelines document detailing how to use your new assets.',
    },
  ],
  cta: {
    title: 'Ready to Build a Memorable Brand?',
    description: 'Let\'s collaborate to uncover your unique story and bring it to life visually.',
    primaryButton: { label: 'Start Your Branding Project', href: '/contact' },
    secondaryButton: { label: 'View Branding Portfolio', href: '/projects' },
  },
  meta: {
    title: 'Leading Branding Agency in Kerala | Corporate Identity & Logo Design | ByteSpire',
    description: 'Build an iconic, enduring brand with Kerala\'s top creative branding agency. Distinctive logo design, brand strategy, packaging, and corporate identity in Kochi, Calicut & Trivandrum.',
    keywords: [
      'branding agency Kerala',
      'logo design Kochi',
      'corporate branding Calicut',
      'creative agency Trivandrum',
      'brand identity design Kerala',
      'packaging design company Kerala'
    ],
    openGraph: {
      title: 'Leading Branding Agency in Kerala | ByteSpire',
      description: 'Build an iconic brand that connects with your audience across Kerala and global markets.',
      images: [{ url: '/logo.svg' }],
    },
    alternates: {
      canonical: 'https://bytespire.in/services/branding',
    },
  },
};

export const servicesMeta = {
  technology: technologyServices.meta,
  'digital-marketing': digitalMarketingServices.meta,
  'experience-design': experienceDesignServices.meta,
  branding: brandingServices.meta,
};

export const allServicesList = [
  technologyServices,
  digitalMarketingServices,
  experienceDesignServices,
  brandingServices
];

export const subServicesMeta = {
  ...Object.fromEntries(
    allServicesList.flatMap(s => (s.subServices || []).map(sub => [sub.id, sub.meta]))
  )
};
