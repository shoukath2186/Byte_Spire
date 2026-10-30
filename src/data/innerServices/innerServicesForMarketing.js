export const seoService = {
  id: "seo-optimization",
  slug: "seo-optimization",
  title: "Professional SEO Services & Organic Search Growth",
  description:
    "Drive organic traffic, higher Google rankings, and qualified leads with ByteSpire. Data-driven SEO strategies, technical audits, content optimization, and local search dominance.",
  bannerImage: "/service_marketing.png",

  // Section 2: Banner (Hero Section)
  hero: {
    headline: "Empowering Brands with Data-Driven SEO Services & Sustainable Organic Search Growth",
    subheadline:
      "ByteSpire executes comprehensive, White-Hat SEO strategies, technical site audits, keyword optimization, and targeted link building engineered for top Google rankings across Kerala and worldwide.",
    badge: "Search Engine Optimization Excellence",
    breadcrumbLabel: "SEO Services",
    parentCategory: {
      label: "Digital Marketing",
      href: "/services/digital-marketing",
    },
    primaryCta: {
      label: "Boost Your Rankings Today",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore SEO Solutions",
      href: "#services-section",
    },
    trustHighlights: [
      {
        title: "Search Visibility & ROI Focused",
        description:
          "Proven strategies delivering sustainable keyword ranking improvements and measurable organic traffic revenue growth.",
      },
      {
        title: "Local & Global Search Impact",
        description:
          "Trusted SEO partner for scaling enterprises and local businesses across Kerala, India, and global markets.",
      },
    ],
  },

  // Section: Key Stats
  stats: [
    {
      value: "250%+",
      title: "Organic Growth",
      description: "Average client traffic lift",
    },
    {
      value: "Top 3",
      title: "Keyword Rankings",
      description: "High-intent search terms",
    },
    {
      value: "98%",
      title: "Technical Health",
      description: "Core Web Vitals score",
    },
    {
      value: "100%",
      title: "White-Hat SEO",
      description: "Penalty-free methodology",
    },
  ],

  // Section 3: Core Optimization Competencies (Expertise)
  solutions: {
    badge: "SEO Growth Expertise",
    title: "Core Search Engine Optimization Competencies",
    description:
      "Core optimization competencies that establish ByteSpire as a premier SEO growth agency across Kerala and worldwide.",
    points: [
      {
        title: "Technical SEO Architecture",
        description:
          "We conduct deep crawlability diagnostics, fix indexation barriers, optimize site architecture, and implement structured schema markup to ensure search engines crawl and index your site flawlessly.",
        icon: "server",
        tags: ["Crawlability & Indexing", "Site Architecture", "Schema Markup"],
      },
      {
        title: "On-Page & Content Optimization",
        description:
          "From high-intent keyword research to semantic content structuring, we optimize landing pages and blog content to capture top-of-funnel and bottom-of-funnel search queries.",
        icon: "file-text",
        tags: ["High-Intent Keywords", "Semantic Content", "Search Intent Mapping"],
      },
      {
        title: "Authority Link Building & Digital PR",
        description:
          "We execute targeted outreach campaigns to earn high-authority, niche-relevant backlinks that elevate domain rating, increase search visibility, and build long-term site authority.",
        icon: "trending-up",
        tags: ["High-Authority Backlinks", "Digital PR Outreach", "Brand Authority"],
      },
    ],
  },

  // Section 6: Our Services
  servicesTitle: "Comprehensive Search Engine Optimization Services",
  servicesDescription:
    "Comprehensive search engine optimization services designed to help businesses rank higher, capture organic traffic, and scale online.",
  subServices: [
    {
      id: "technical-seo-site-architecture",
      title: "Technical SEO & Site Architecture",
      description:
        "In-depth technical site audits and engine-level optimization to ensure search bots seamlessly crawl, index, and evaluate your website.",
      icon: "server",
      image: "/service_tech.png",
      features: [
        "Full Technical Audit & Crawlability Fixes",
        "Core Web Vitals & Page Speed Optimization",
        "Schema Markup & Structured Data Implementation",
        "Sitemap, Canonicalization & Redirect Audits",
      ],
    },
    {
      id: "on-page-seo-content-strategy",
      title: "On-Page SEO & Content Strategy",
      description:
        "Strategic page optimization and keyword placement engineered to capture high-intent search queries and boost keyword rankings.",
      icon: "file-text",
      image: "/service_marketing.png",
      features: [
        "Targeted Keyword Research & Search Mapping",
        "Title Tag, Meta Description & Heading Tuning",
        "Semantic Content Optimization & Copywriting",
        "Internal Linking & Content Silo Architecture",
      ],
    },
    {
      id: "local-seo-google-maps",
      title: "Local SEO & Google Map Dominance",
      description:
        "Geo-targeted optimization tailored to dominate local search results, Google Map packs, and attract nearby customers across Kerala.",
      icon: "globe",
      image: "/banner-center.png",
      features: [
        "Google Business Profile Setup & Optimization",
        "Local Citation Building & NAP Consistency",
        "Geo-Targeted Service Page Development",
        "Local Review Generation & Reputation Strategy",
      ],
    },
    {
      id: "off-page-seo-link-building",
      title: "Off-Page SEO & Authority Building",
      description:
        "Ethical link-building strategies that build domain authority, strengthen backlink profiles, and outrank top niche competitors.",
      icon: "trending-up",
      image: "/services_bg.png",
      features: [
        "High-Authority Link Acquisition & Outreach",
        "Digital PR & Brand Mention Optimization",
        "Toxic Backlink Audit & Disavow Management",
        "Competitor Backlink Profile Analysis",
      ],
    },
  ],

  // Section 5: Technology Stack
  techStack: {
    badge: "SEO Technology Stack",
    title: "Industry-Standard Tools & Platforms We Leverage",
    description:
      "Industry-standard tools and platforms leveraged to drive technical accuracy, deep keyword insights, and search dominance.",
    categories: [
      {
        title: "SEO Intelligence & Keyword Research",
        icon: "search",
        items: [
          {
            label: "Analytics & Insights",
            tech: [
              "Ahrefs",
              "SEMrush",
              "Google Search Console",
              "Google Analytics (GA4)",
              "Moz Pro",
            ],
          },
          {
            label: "Intent & SERP Research",
            tech: [
              "Screaming Frog SEO Spider",
              "AnswerThePublic",
              "Surfer SEO",
              "Clearscope",
            ],
          },
        ],
      },
      {
        title: "Technical SEO & Schema Standards",
        icon: "server",
        items: [
          {
            label: "Performance & Core Vitals",
            tech: ["Google PageSpeed Insights", "GTmetrix", "WebPageTest"],
          },
          {
            label: "Structured Data & Schema",
            tech: ["Schema.org", "JSON-LD Generator", "Rich Results Test"],
          },
          {
            label: "Rank Tracking",
            tech: ["AccuRanker", "SERPWatcher", "Local Viking"],
          },
        ],
      },
      {
        title: "Content & On-Page Tools",
        icon: "layout",
        items: [
          {
            label: "Optimization Platforms",
            tech: ["Yoast SEO", "Rank Math", "MarketMuse"],
          },
          {
            label: "Site Crawling & Indexation",
            tech: ["Lumar (DeepCrawl)", "Botify"],
          },
        ],
      },
      {
        title: "Local SEO & Outreach Tools",
        icon: "globe",
        items: [
          {
            label: "Local Search & Citations",
            tech: ["Google Business Profile", "BrightLocal", "Yext"],
          },
          {
            label: "Link Outreach & PR",
            tech: ["BuzzStream", "Pitchbox", "Hunter.io"],
          },
        ],
      },
    ],
  },

  // Section 4: Process Roadmap
  process: {
    badge: "Process Roadmap",
    title: "Our Structured SEO Growth Framework",
    description:
      "Our structured SEO growth framework ensures transparent performance tracking from baseline audit to top search rankings.",
    steps: [
      {
        step: "01",
        title: "Audit & Research",
        description:
          "Technical site audit, competitor benchmark analysis, search intent mapping, and keyword universe identification.",
        deliverables: [
          "Technical Site Audit",
          "Competitor Benchmark Analysis",
          "Search Intent Mapping",
          "Keyword Universe Identification",
        ],
      },
      {
        step: "02",
        title: "Strategy & On-Page SEO",
        description:
          "Title & meta optimization, heading restructuring, semantic content integration, and internal link mapping.",
        deliverables: [
          "Title & Meta Optimization",
          "Heading Restructuring",
          "Semantic Content Integration",
          "Internal Link Architecture",
        ],
      },
      {
        step: "03",
        title: "Technical Optimization",
        description:
          "Core Web Vitals speed tuning, schema structured data implementation, XML sitemap & robots.txt resolution.",
        deliverables: [
          "Core Web Vitals Tuning",
          "Schema Structured Data",
          "XML Sitemap Optimization",
          "Robots.txt Resolution",
        ],
      },
      {
        step: "04",
        title: "Authority & Link Building",
        description:
          "Ethical backlink acquisition, Google Business Profile local SEO optimization, digital PR and outreach campaigns.",
        deliverables: [
          "Ethical Backlink Acquisition",
          "Google Business Profile Setup",
          "Digital PR Campaigns",
          "Niche Outreach Strategy",
        ],
      },
      {
        step: "05",
        title: "Monitoring & Scaling",
        description:
          "Monthly ranking reports, conversion tracking analysis, search algorithm adaptation, and ongoing content expansion.",
        deliverables: [
          "Monthly Ranking Reports",
          "GA4 Conversion Tracking",
          "Algorithm Adaptation",
          "Ongoing Content Expansion",
        ],
      },
    ],
  },

  // Section 7: Frequently Asked Questions (FAQ)
  faq: [
    {
      question: "How long does it take to see SEO results?",
      answer:
        "SEO is a compound growth strategy. Initial technical improvements and keyword movements typically show within 4 to 8 weeks, with significant organic traffic and ranking growth occurring between 3 to 6 months.",
    },
    {
      question: "Why choose ByteSpire for SEO services in Kerala?",
      answer:
        "ByteSpire combines technical engineering precision with deep local search market insights in Kerala. We deliver transparent, White-Hat SEO strategies focused on qualified conversions rather than vanity metrics.",
    },
    {
      question: "Do you use White-Hat SEO techniques?",
      answer:
        "Yes. We strictly adhere to Google Search Essentials and Webmaster Guidelines. All our technical fixes, content creation, and link building practices are 100% White-Hat, ensuring your website stays penalty-free.",
    },
    {
      question: "How do you measure and report SEO progress?",
      answer:
        "We provide comprehensive monthly reports covering organic keyword rankings, traffic volume, backlink additions, Core Web Vitals health, and conversion goal tracking using GA4 and Google Search Console.",
    },
  ],

  // Section 8: Call to Action (SEO Audit & Consultation)
  cta: {
    title: "Ready to Outrank Competitors and Scale Organic Search Leads?",
    description:
      "Partner with ByteSpire to execute technical search engine optimization, content expansion, and high-authority link strategies. Tailored SEO engineering for ambitious businesses in Kerala and worldwide.",
    primaryButton: {
      label: "Request Free SEO Audit",
      href: "/contact",
    },
    secondaryButton: {
      label: "Explore Case Studies",
      href: "/projects",
    },
    secondaryLinks: [
      {
        label: "Submit SEO Inquiry",
        href: "/contact",
      },
      {
        label: "View Featured Search Ranking Case Studies",
        href: "/projects",
      },
    ],
  },

  // Section 1: Meta Data
  meta: {
    title: "Professional SEO Services & Search Growth | ByteSpire Kerala",
    description:
      "Drive organic traffic, higher Google rankings, and qualified leads with ByteSpire. Data-driven SEO strategies, technical audits, content optimization, and local search dominance.",
    keywords: [
      "SEO services",
      "search engine optimization",
      "technical SEO audit",
      "SEO company Kerala",
      "local SEO optimization",
      "organic traffic growth",
      "link building strategy",
    ],
    canonical: "https://bytespire.in/services/seo",
    openGraph: {
      title: "ByteSpire | SEO Services & Search Engine Optimization Solutions",
      description:
        "Scale your search rankings, outperform competitors, and attract high-converting organic leads with ByteSpire's tailored SEO services for Kerala and global businesses.",
      images: [{ url: "/service_marketing.png" }],
    },
  },
};

export const performanceMarketingService = {
  id: "360-marketing",
  slug: "360-marketing",
  title: "360° Digital Marketing & Performance Ads",
  description:
    "All-inclusive multi-channel marketing campaigns built to scale revenue. Combining Google Ads, Meta advertising, content strategy, email automation, and high-converting sales funnels.",
  bannerImage: "/services_bg.png",

  hero: {
    headline: "High-ROI Performance Marketing & Omnichannel Digital Campaigns",
    subheadline:
      "ByteSpire engineers full-funnel digital advertising campaigns, paid media scaling, and data-backed conversion optimization that turn clicks into measurable revenue.",
    badge: "Performance Marketing Growth",
    breadcrumbLabel: "360° Marketing",
    parentCategory: {
      label: "Digital Marketing",
      href: "/services/digital-marketing",
    },
    primaryCta: {
      label: "Launch Your Campaign",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Solutions",
      href: "#services-section",
    },
    trustHighlights: [
      {
        title: "ROAS & Revenue Driven",
        description: "Laser-focused on customer acquisition cost (CAC) and maximum Return on Ad Spend.",
      },
      {
        title: "Full-Funnel Attribution",
        description: "Accurate tracking from first touch to final sale across Google, Meta, and LinkedIn.",
      },
    ],
  },

  stats: [
    {
      value: "4.5x+",
      title: "Average ROAS",
      description: "Across paid ad campaigns",
    },
    {
      value: "60%+",
      title: "Lower CAC",
      description: "Through funnel optimization",
    },
    {
      value: "50M+",
      title: "Impressions Managed",
      description: "Targeted digital reach",
    },
    {
      value: "99.8%",
      title: "Tracking Accuracy",
      description: "Server-side CAPI & GA4",
    },
  ],

  solutions: {
    badge: "Marketing Capabilities",
    title: "Full-Spectrum Paid Media & Growth Engineering",
    description:
      "We design, build, and optimize high-converting marketing campaigns across every digital channel.",
    points: [
      {
        title: "Google Search & Performance Max",
        description:
          "Capture high-intent customer demand with targeted search queries, shopping feeds, and smart bidding models.",
        icon: "search",
        tags: ["Google Search Ads", "Performance Max", "Keyword Bidding"],
      },
      {
        title: "Meta & Social Paid Ads",
        description:
          "Engage targeted demographics on Instagram, Facebook, and LinkedIn with dynamic creatives and custom lookalike audiences.",
        icon: "target",
        tags: ["Meta Ads", "LinkedIn Ads", "Lookalike Audiences"],
      },
      {
        title: "Conversion Funnel Optimization",
        description:
          "Optimize landing page copy, checkout flows, and user journey paths to convert more traffic into paying customers.",
        icon: "trending-up",
        tags: ["CRO Testing", "Heatmap Analysis", "Funnel Architecture"],
      },
    ],
  },

  servicesTitle: "Our 360° Performance Marketing Services",
  servicesDescription:
    "End-to-end paid media and digital growth services tailored to scale ambitious businesses.",
  subServices: [
    {
      id: "google-ads-ppc",
      title: "Google Ads & Paid Search (PPC)",
      description:
        "High-intent search advertising, display network campaigns, and shopping ads engineered to maximize qualified leads and direct sales.",
      icon: "search",
      image: "/service_marketing.png",
      features: [
        "Search, Display & Shopping Ad Campaigns",
        "Competitor Keyword Conquering",
        "Negative Keyword & Bid Management",
        "Conversion Tracking & GA4 Integration",
      ],
    },
    {
      id: "social-media-advertising",
      title: "Social Media Advertising (Meta, LinkedIn, YouTube)",
      description:
        "Engage your exact target buyer with eye-catching video creatives, carousel ads, and custom retargeting funnels.",
      icon: "megaphone",
      image: "/services_bg.png",
      features: [
        "Instagram & Facebook Ad Campaigns",
        "B2B LinkedIn Lead Generation",
        "Retargeting & Dynamic Catalog Ads",
        "Creative Ad Copy & Visual Production",
      ],
    },
    {
      id: "email-marketing-automation",
      title: "Email Marketing & Retention Automations",
      description:
        "Turn one-time buyers into lifetime customers with automated welcome flows, abandoned cart sequences, and re-engagement campaigns.",
      icon: "mail",
      image: "/banner-center.png",
      features: [
        "Automated Drip Sequences & Workflows",
        "Cart Abandonment & Win-Back Emails",
        "Audience Segmentation & Tagging",
        "Deliverability & Open Rate Optimization",
      ],
    },
    {
      id: "analytics-conversion-tracking",
      title: "Advanced Analytics & Attribution Tracking",
      description:
        "Eliminate guesswork with server-side tracking, Meta Conversions API (CAPI), and comprehensive executive reporting dashboards.",
      icon: "bar-chart",
      image: "/service_tech.png",
      features: [
        "Meta CAPI & Server-Side Tracking",
        "GA4 Custom Events & Funnel Setup",
        "Multi-Touch Attribution Modeling",
        "Real-Time Executive ROI Dashboards",
      ],
    },
  ],

  techStack: {
    badge: "Marketing Stack",
    title: "Platforms & Analytics Tools We Command",
    description:
      "Enterprise advertising platforms, conversion tracking tools, and automation suites.",
    categories: [
      {
        title: "Ad Networks & Platforms",
        icon: "target",
        items: [
          {
            label: "Search & Social Platforms",
            tech: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "YouTube Ads", "Twitter/X Ads"],
          },
        ],
      },
      {
        title: "Analytics & Tracking",
        icon: "bar-chart",
        items: [
          {
            label: "Measurement Tools",
            tech: ["Google Analytics 4", "Google Tag Manager", "Meta Conversions API", "Hotjar", "Microsoft Clarity"],
          },
        ],
      },
      {
        title: "Automation & CRM",
        icon: "mail",
        items: [
          {
            label: "Email & Lead Workflows",
            tech: ["Klaviyo", "Mailchimp", "HubSpot", "ActiveCampaign", "Brevo"],
          },
        ],
      },
      {
        title: "Creative & Optimization",
        icon: "layout",
        items: [
          {
            label: "Design & Copy Tools",
            tech: ["Figma", "Adobe Creative Suite", "Canva Pro", "Unbounce"],
          },
        ],
      },
    ],
  },

  process: {
    badge: "Campaign Roadmap",
    title: "Our 5-Step Performance Marketing Framework",
    description:
      "From competitive market research to automated scaling, here is how we run high-performing ad campaigns.",
    steps: [
      {
        step: "01",
        title: "Audience & Competitor Audit",
        description:
          "In-depth research into customer demographics, search volumes, and competitor creative angles.",
        deliverables: ["Competitor Analysis", "Audience Persona Mapping", "Ad Account Health Audit"],
      },
      {
        step: "02",
        title: "Creative & Copy Engineering",
        description:
          "Crafting high-converting ad visuals, compelling copywriting, and dedicated landing page funnels.",
        deliverables: ["Ad Creative Variants", "Copywriting Frameworks", "Landing Page Wireframes"],
      },
      {
        step: "03",
        title: "Tracking & Pixel Setup",
        description:
          "Implementing bulletproof tracking with Google Tag Manager, GA4, and Meta Conversions API.",
        deliverables: ["Server-Side GTM Setup", "Meta CAPI Integration", "Custom Conversion Events"],
      },
      {
        step: "04",
        title: "Campaign Launch & Split-Testing",
        description:
          "Launching live campaigns with systematic A/B testing across audiences, creatives, and bidding strategies.",
        deliverables: ["Live Campaign Execution", "A/B Testing Protocol", "Daily Budget Pacing"],
      },
      {
        step: "05",
        title: "Optimization & Scaling",
        description:
          "Scaling winning ad sets, lowering CPA, and maximizing monthly return on advertising spend.",
        deliverables: ["Weekly Performance Reviews", "Winning Ad Scaling", "Monthly ROI Reports"],
      },
    ],
  },

  faq: [
    {
      question: "How fast can we see results from paid advertising?",
      answer:
        "Unlike SEO which builds compound growth over months, paid advertising generates immediate traffic and lead flow within 24 to 48 hours of campaign launch.",
    },
    {
      question: "What ad budget should we start with?",
      answer:
        "Budgets depend on your industry and competition. We typically recommend a starting ad spend of ₹30,000 to ₹75,000 per month for local campaigns, and ₹1,00,000+ for national or global campaigns.",
    },
    {
      question: "How do you track return on investment (ROI)?",
      answer:
        "We set up end-to-end conversion tracking connecting ad clicks directly to phone calls, form submissions, or e-commerce purchases. You receive live dashboards showing exact ROAS and CPA.",
    },
    {
      question: "Do you create the ad graphics and videos as well?",
      answer:
        "Yes. ByteSpire provides complete creative production including ad copy, static banners, motion graphics, and video scripts optimized for high click-through rates.",
    },
  ],

  cta: {
    title: "Ready to Scale Your Revenue with High-ROI Ads?",
    description:
      "Partner with ByteSpire's performance marketing team to engineer multi-channel campaigns that consistently generate qualified leads and sales.",
    primaryButton: {
      label: "Get a Free Ad Audit",
      href: "/contact",
    },
    secondaryButton: {
      label: "View Client Case Studies",
      href: "/projects",
    },
    secondaryLinks: [
      {
        label: "Schedule Strategy Call",
        href: "/contact",
      },
      {
        label: "Explore Work Portfolio",
        href: "/projects",
      },
    ],
  },

  meta: {
    title: "360° Digital Marketing & Performance Ads Agency | ByteSpire",
    description:
      "Accelerate business revenue with full-funnel digital marketing campaigns. High-ROI Google Ads, Meta advertising, email automation, and conversion rate optimization.",
    keywords: [
      "performance marketing Kerala",
      "Google Ads agency Kochi",
      "digital marketing company Kerala",
      "social media marketing Kerala",
      "PPC agency Trivandrum",
      "meta ads agency Calicut",
    ],
    canonical: "https://bytespire.in/services/digital-marketing/360-marketing",
    openGraph: {
      title: "ByteSpire | 360° Digital Marketing & Performance Ads",
      description:
        "Turn ad spend into measurable revenue with ByteSpire's performance marketing and growth engineering services.",
      images: [{ url: "/services_bg.png" }],
    },
  },
};

export const brandingMarketingService = {
  id: "branding",
  slug: "branding",
  title: "Branding, Identity Design & Digital Touchpoints",
  description:
    "Craft a distinct, memorable brand persona that commands trust and loyalty. Strategic brand positioning, custom logos, visual design systems, and digital brand guidelines.",
  bannerImage: "/service_branding.png",

  hero: {
    headline: "Architecting Iconic Brands that Command Market Authority",
    subheadline:
      "ByteSpire designs enduring visual identities, brand strategies, and digital touchpoints that captivate audiences and set ambitious businesses apart from competitors.",
    badge: "Brand Strategy & Identity",
    breadcrumbLabel: "Branding",
    parentCategory: {
      label: "Digital Marketing",
      href: "/services/digital-marketing",
    },
    primaryCta: {
      label: "Build Your Brand",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Brand Solutions",
      href: "#services-section",
    },
    trustHighlights: [
      {
        title: "Enduring Visual Systems",
        description: "Distinctive brand identities crafted to remain timeless across print and digital mediums.",
      },
      {
        title: "Strategic Market Positioning",
        description: "Deep competitor research and target audience psychographics to establish category leadership.",
      },
    ],
  },

  stats: [
    {
      value: "50+",
      title: "Brand Identities Built",
      description: "Startups to enterprises",
    },
    {
      value: "100%",
      title: "Original Artwork",
      description: "Custom vector iconography",
    },
    {
      value: "360°",
      title: "Brand Guidelines",
      description: "Typography, color & voice",
    },
    {
      value: "99%",
      title: "Client Approval",
      description: "Iterative design sprints",
    },
  ],

  solutions: {
    badge: "Brand Competencies",
    title: "Strategic Brand Design & Positioning",
    description:
      "From initial positioning to complete brand guideline manuals, we help businesses build unforgettable brand equity.",
    points: [
      {
        title: "Brand Strategy & Positioning",
        description:
          "Define your core value proposition, brand mission, and competitive differentiation in your target market.",
        icon: "compass",
        tags: ["Brand Positioning", "Mission & Vision", "Target Audience Archetypes"],
      },
      {
        title: "Logo Systems & Visual Identity",
        description:
          "Craft bespoke logo marks, typographic hierarchies, color palettes, and digital asset libraries.",
        icon: "sparkles",
        tags: ["Logo Marks", "Color Harmony", "Typography Pairing"],
      },
      {
        title: "Brand Guidelines & Asset Kits",
        description:
          "Deliver complete, accessible brand guideline books ensuring consistent brand expression across all channels.",
        icon: "layout",
        tags: ["Brand Style Books", "Marketing Collateral", "Social Kits"],
      },
    ],
  },

  servicesTitle: "Our Comprehensive Branding Services",
  servicesDescription:
    "End-to-end creative branding solutions designed to establish credibility, prestige, and market recognition.",
  subServices: [
    {
      id: "brand-strategy-positioning",
      title: "Brand Strategy & Market Positioning",
      description:
        "Comprehensive brand architecture that defines your market niche, core audience tone, and unique selling proposition.",
      icon: "compass",
      image: "/service_branding.png",
      features: [
        "Competitor Landscape & Niche Analysis",
        "Brand Story, Mission & Value Pillars",
        "Audience Persona & Tone of Voice Definition",
        "Brand Tagline & Messaging Architecture",
      ],
    },
    {
      id: "logo-visual-identity",
      title: "Logo Design & Visual Identity Systems",
      description:
        "Iconic, memorable logo systems designed for modern digital platforms and high-resolution print media.",
      icon: "sparkles",
      image: "/banner-left.png",
      features: [
        "Primary, Secondary & Sub-Mark Logo Variants",
        "Bespoke Color Palette & Psychology Guide",
        "Typography Hierarchy & Web Font Licenses",
        "Custom Iconography & Graphic Patterns",
      ],
    },
    {
      id: "marketing-collateral",
      title: "Marketing Collateral & Print Packaging",
      description:
        "Professional stationery, business cards, merchandise, and print materials aligned with your visual identity.",
      icon: "layout",
      image: "/about_bg.png",
      features: [
        "Business Cards & Corporate Stationery",
        "Brochures, Pitch Decks & Company Profiles",
        "Packaging Design & Label Guidelines",
        "Print-Ready Vector Vector Formats (CMYK)",
      ],
    },
    {
      id: "digital-brand-guidelines",
      title: "Digital Brand Guidelines & Social Kits",
      description:
        "Complete PDF and cloud brand guidelines that allow your in-house teams and agencies to maintain 100% brand consistency.",
      icon: "layers",
      image: "/services_bg.png",
      features: [
        "Comprehensive Brand Book Manual (40+ pages)",
        "Social Media Post & Banner Templates (Figma/Canva)",
        "Email Signature & Presentation Deck Themes",
        "Digital Asset Cloud Vault & Export Formats",
      ],
    },
  ],

  techStack: {
    badge: "Design Toolkit",
    title: "Creative Tools & Design Software We Command",
    description:
      "Industry-standard creative software utilized to craft pixel-perfect branding and typography.",
    categories: [
      {
        title: "Vector & Identity Design",
        icon: "pen-tool",
        items: [
          {
            label: "Vector & Illustration",
            tech: ["Adobe Illustrator", "Figma", "Affinity Designer", "Procreate"],
          },
        ],
      },
      {
        title: "Brand Prototyping & Layout",
        icon: "layout",
        items: [
          {
            label: "Layout & Editorial",
            tech: ["Adobe InDesign", "Adobe Photoshop", "Canva Enterprise"],
          },
        ],
      },
      {
        title: "Motion & Presentation",
        icon: "sparkles",
        items: [
          {
            label: "Motion & Pitch Decks",
            tech: ["Adobe After Effects", "Pitch.com", "Keynote", "Lottie"],
          },
        ],
      },
      {
        title: "Asset Distribution",
        icon: "cloud",
        items: [
          {
            label: "Cloud Vaults",
            tech: ["Google Workspace", "Dropbox Business", "Figma Design Libraries"],
          },
        ],
      },
    ],
  },

  process: {
    badge: "Creative Process",
    title: "How We Craft Your Brand Identity",
    description:
      "A structured, milestone-driven branding workflow that transforms your vision into an iconic market presence.",
    steps: [
      {
        step: "01",
        title: "Brand Discovery & Research",
        description:
          "We examine your company history, target demographics, and competitors to map out strategic positioning.",
        deliverables: ["Discovery Questionnaire", "Competitor Matrix", "Creative Moodboard"],
      },
      {
        step: "02",
        title: "Concept Development",
        description:
          "Our designers explore distinct creative directions, sketching multiple logo concepts and typographic pairings.",
        deliverables: ["Logo Concept Sketches", "Visual Archetypes", "Concept Presentation"],
      },
      {
        step: "03",
        title: "Refinement & Color Systems",
        description:
          "We refine the selected concept, perfecting geometry, kerning, color contrast, and device responsiveness.",
        deliverables: ["Vector Geometry Perfection", "Color Psychology Tests", "Digital Mockup Previews"],
      },
      {
        step: "04",
        title: "Collateral & Touchpoint Design",
        description:
          "Designing corporate collateral, social media kits, pitch deck templates, and stationery items.",
        deliverables: ["Stationery Suite", "Social Media Templates", "Corporate Pitch Deck"],
      },
      {
        step: "05",
        title: "Guidelines & Final Delivery",
        description:
          "Compiling the comprehensive brand guide manual and delivering organized production-ready asset archives.",
        deliverables: ["Brand Style Guide PDF", "Vector Asset Archive", "Color & Font Documentation"],
      },
    ],
  },

  faq: [
    {
      question: "What files do I receive upon brand completion?",
      answer:
        "You receive complete source and vector files including AI, EPS, SVG, PDF, and high-resolution PNGs with transparent backgrounds, plus full color codes (HEX, RGB, CMYK, Pantone).",
    },
    {
      question: "How long does a complete branding project take?",
      answer:
        "A typical brand identity project takes between 2 to 4 weeks depending on the depth of collateral items and revision cycles.",
    },
    {
      question: "Who owns the copyright to the final logo design?",
      answer:
        "You own 100% of the intellectual property and full commercial rights to all approved designs once final payment is completed.",
    },
    {
      question: "Can you refresh an existing logo without completely changing it?",
      answer:
        "Yes. We offer brand modernization services that clean up geometry, modernize typography, and optimize legacy logos for digital screens while preserving brand recognition.",
    },
  ],

  cta: {
    title: "Ready to Build an Iconic Brand That Customers Love?",
    description:
      "Partner with ByteSpire's design strategists to develop a timeless visual identity and strategic brand positioning.",
    primaryButton: {
      label: "Start Your Brand Journey",
      href: "/contact",
    },
    secondaryButton: {
      label: "Explore Our Portfolio",
      href: "/projects",
    },
    secondaryLinks: [
      {
        label: "Request Brand Consultation",
        href: "/contact",
      },
      {
        label: "View Featured Identity Works",
        href: "/projects",
      },
    ],
  },

  meta: {
    title: "Creative Branding & Identity Design Agency | ByteSpire",
    description:
      "Craft an iconic visual identity, memorable logo, and comprehensive brand guidelines with ByteSpire. Premium brand strategy for businesses in Kerala and globally.",
    keywords: [
      "branding agency Kerala",
      "logo design Kochi",
      "brand identity company Calicut",
      "corporate branding Kerala",
      "creative agency Trivandrum",
    ],
    canonical: "https://bytespire.in/services/digital-marketing/branding",
    openGraph: {
      title: "ByteSpire | Strategic Branding & Visual Identity Design",
      description:
        "Empower your business with a distinctive, enduring brand persona engineered by ByteSpire.",
      images: [{ url: "/service_branding.png" }],
    },
  },
};

export const innerMarketingServices = {
  // Primary SEO Service mappings
  "seo-optimization": seoService,
  seo: seoService,
  "seo-services": seoService,
  "search-engine-optimization": seoService,

  // 360 Marketing / Performance Ads mappings
  "360-marketing": performanceMarketingService,
  "performance-marketing": performanceMarketingService,
  "paid-advertising": performanceMarketingService,

  // Branding mappings
  branding: brandingMarketingService,
  "brand-identity": brandingMarketingService,
};

export function getInnerMarketingService(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return innerMarketingServices[normalized] || null;
}

