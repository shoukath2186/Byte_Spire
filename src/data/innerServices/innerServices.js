export const webDevelopmentService = {
    id: "web-development",
    slug: "web-development",
    title: "Custom Web Development Services in Kerala",
    description:
        "ByteSpire engineers high-performance, SEO-optimized websites and web applications built for speed, scalability, and real business growth.",
    bannerImage: "/service_tech.png",

    // Hero Section — short, punchy
    hero: {
        headline: "Custom Web Development Services in Kerala",
        subheadline:
            "We engineer fast, scalable, and SEO-ready websites that turn visitors into customers — built with modern frameworks for businesses across Kerala and globally.",
        badge: "Web Engineering Excellence",
        breadcrumbLabel: "Web Development",
        primaryCta: {
            label: "Start Your Web Project",
            href: "/contact",
        },
        secondaryCta: {
            label: "View Our Services",
            href: "#services-section",
        },
        trustHighlights: [
            {
                title: "Mobile-First & SEO-Optimized",
                description: "Every site built with responsive design and on-page SEO from day one.",
            },
            {
                title: "Trusted Across Kerala & Beyond",
                description: "Serving growing businesses in Kochi, Calicut, Trivandrum, and worldwide.",
            },
        ],
    },

    // Core Web Development Expertise
    solutions: {
        badge: "Web Development Expertise",
        title: "What We Build & How We Do It",
        description:
            "From simple business websites to complex full-stack web applications — we cover the complete spectrum of professional web development.",
        points: [
            {
                title: "Business Websites & Corporate Portals",
                description:
                    "We design and develop fast-loading, professional business websites that establish credibility, rank on Google, and convert visitors into leads. Every site is mobile-first, SEO-optimized, and custom-built for your brand.",
                icon: "monitor",
                tags: ["Corporate Websites", "Landing Pages", "CMS-Powered Blogs"],
            },
            {
                title: "Full-Stack Web Application Development",
                description:
                    "From SaaS dashboards to internal business tools, we engineer complete web applications with secure backends, intuitive frontends, and scalable cloud infrastructure designed for long-term growth.",
                icon: "code",
                tags: ["SaaS Platforms", "Admin Dashboards", "REST APIs"],
            },
            {
                title: "Performance & Technical SEO Engineering",
                description:
                    "We build every website with Core Web Vitals, page speed, clean semantic HTML, and schema markup as core requirements — not afterthoughts — so your site ranks and loads fast from day one.",
                icon: "trending-up",
                tags: ["Core Web Vitals", "Schema Markup", "Page Speed Optimization"],
            },
        ],
    },

    // Comprehensive Services Listing
    servicesTitle: "Our Web Development Services",
    servicesDescription:
        "Professional web development solutions tailored to your business goals — designed to perform, scale, and rank.",
    subServices: [
        {
            id: "business-website-development",
            title: "Business Website Development",
            description:
                "We craft modern, professional business websites that load fast, look stunning on all devices, and are engineered to rank on Google. From a simple 5-page corporate site to a full multi-language marketing hub — built clean, secure, and SEO-ready.",
            icon: "monitor",
            image: "/banner-center.png",
            features: [
                "Mobile-First Responsive Design",
                "SEO-Optimized Page Structure",
                "Custom CMS & Blog Integration",
                "Lead Capture & Contact Forms",
                "Google Analytics & Search Console Setup",
                "SSL Security & Hosting Configuration",
            ],
        },
        {
            id: "web-application-development",
            title: "Custom Web Application Development",
            description:
                "We engineer scalable, full-stack web applications — from SaaS platforms and client portals to workflow automation tools. Built with React, Next.js, and Node.js on cloud infrastructure, designed to handle real user loads and grow with your business.",
            icon: "code",
            image: "/service_custom_software.jpg",
            features: [
                "Frontend: React.js / Next.js",
                "Backend: Node.js / Express / Python",
                "RESTful & GraphQL API Development",
                "Authentication & Role-Based Access",
                "Cloud Deployment (AWS / Vercel)",
                "CI/CD Pipeline & DevOps Setup",
            ],
        },
        {
            id: "responsive-web-design",
            title: "Responsive Web Design & UI Development",
            description:
                "Great design is more than aesthetics — it's usability, speed, and conversion. We design pixel-perfect, responsive web interfaces that reflect your brand identity and guide visitors toward taking action, on every screen size.",
            icon: "layout",
            image: "/service_design.png",
            features: [
                "Figma Wireframes & Visual Prototypes",
                "Tailwind CSS & Component Libraries",
                "Cross-Browser & Cross-Device Testing",
                "Accessibility (WCAG) Compliance",
                "Website Redesign & UI Modernization",
                "User Journey & Conversion Optimization",
            ],
        },
        {
            id: "technical-seo-performance",
            title: "Technical SEO & Web Performance",
            description:
                "A website that doesn't rank is a website that doesn't work. We handle the full technical SEO stack — from Core Web Vitals and structured data to internal linking and local SEO — so your site appears where your customers are searching.",
            icon: "trending-up",
            image: "/service_marketing.png",
            features: [
                "Core Web Vitals Audit & Fix",
                "On-Page SEO & Meta Optimization",
                "Schema Markup & Rich Snippets",
                "Local SEO for Kerala Businesses",
                "Image Compression & Lazy Loading",
                "Sitemap, Robots.txt & Canonical Setup",
            ],
        },
    ],

    // Technology Stack
    techStack: {
        badge: "Technology Stack",
        title: "Technologies We Use to Build Your Website",
        description:
            "We choose the right tool for the right job — modern, proven frameworks that deliver fast performance, developer maintainability, and future scalability.",
        categories: [
            {
                title: "Frontend Development",
                icon: "layout",
                items: [
                    {
                        label: "Frameworks & Libraries",
                        tech: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript"],
                    },
                    {
                        label: "Styling & UI",
                        tech: ["Tailwind CSS", "CSS3", "HTML5", "Framer Motion"],
                    },
                    {
                        label: "Web App Patterns",
                        tech: ["Progressive Web Apps (PWA)", "Single Page Apps (SPA)", "Server-Side Rendering (SSR)"],
                    },
                ],
            },
            {
                title: "Backend & Server",
                icon: "server",
                items: [
                    {
                        label: "Runtime & Frameworks",
                        tech: ["Node.js", "Express.js", "PHP (Laravel)", "Python (Django / FastAPI)"],
                    },
                    {
                        label: "Databases",
                        tech: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
                    },
                    {
                        label: "CMS Platforms",
                        tech: ["WordPress", "Strapi", "Contentful", "Sanity (Headless CMS)"],
                    },
                ],
            },
            {
                title: "Infrastructure & Cloud",
                icon: "cloud",
                items: [
                    {
                        label: "Hosting & Deployment",
                        tech: ["Vercel", "AWS (EC2, S3, CloudFront)", "Hostinger VPS", "Docker"],
                    },
                    {
                        label: "DevOps & Version Control",
                        tech: ["Git", "GitHub", "GitHub Actions (CI/CD)"],
                    },
                ],
            },
            {
                title: "SEO, Analytics & Design",
                icon: "bar-chart",
                items: [
                    {
                        label: "SEO & Performance Tools",
                        tech: ["Google Search Console", "Google Analytics 4", "Ahrefs", "SEMrush", "PageSpeed Insights"],
                    },
                    {
                        label: "Design & Prototyping",
                        tech: ["Figma", "Adobe XD"],
                    },
                ],
            },
        ],
    },

    // Development Process
    process: {
        badge: "Our Development Process",
        title: "How We Build Your Website",
        description:
            "A clear, structured process — so you always know where your project stands and what comes next.",
        steps: [
            {
                step: "01",
                title: "Discovery & Requirements",
                description:
                    "We start by understanding your business goals, target audience, competitors, and technical needs. This shapes the entire project scope, sitemap, and technology decisions before a single line of code is written.",
            },
            {
                step: "02",
                title: "UI/UX Design & Wireframing",
                description:
                    "Our designers create responsive wireframes and high-fidelity mockups in Figma. You review and approve every page layout, color system, and component before development begins.",
            },
            {
                step: "03",
                title: "Frontend & Backend Development",
                description:
                    "We build your site using modern frameworks (Next.js, React), clean semantic HTML, and a secure backend. Development happens in iterative sprints with regular progress updates shared with you.",
            },
            {
                step: "04",
                title: "Testing, SEO & Performance",
                description:
                    "Every page is tested across devices and browsers. We validate Core Web Vitals, implement on-page SEO, add schema markup, configure analytics, and ensure accessibility compliance.",
            },
            {
                step: "05",
                title: "Launch & Post-Launch Support",
                description:
                    "We deploy your site with SSL, configure DNS, submit your sitemap to Google Search Console, and hand over full documentation. Ongoing maintenance packages keep your site fast and secure.",
            },
        ],
    },

    // FAQ — SEO-optimized Q&A
    faq: [
        {
            question: "How much does web development cost in Kerala?",
            answer:
                "Web development pricing in Kerala depends on the scope and complexity. A professional business website typically ranges from ₹25,000 to ₹80,000. Custom web applications and advanced portals vary based on features. ByteSpire provides a detailed, transparent quote after a free discovery call — no hidden charges.",
        },
        {
            question: "How long does it take to build a professional website?",
            answer:
                "A standard business website takes 3–5 weeks from kickoff to launch. More complex web applications — with custom backend, user authentication, or third-party integrations — typically take 6–10 weeks. We provide a clear project timeline before we begin.",
        },
        {
            question: "Will my website rank on Google?",
            answer:
                "Yes. Every website ByteSpire builds is SEO-ready from day one — including proper meta tags, semantic HTML structure, schema markup, fast page load speeds, mobile responsiveness, and Google Search Console integration. We give your site the strongest technical foundation for search visibility.",
        },
        {
            question: "Do you build websites with WordPress or custom code?",
            answer:
                "We work with both. For content-heavy sites and blogs, WordPress with custom themes is a cost-effective choice. For high-performance web applications, SaaS platforms, and custom business tools, we use Next.js and React with Node.js backends. We recommend the right stack for your specific needs.",
        },
        {
            question: "Will my website work properly on mobile phones?",
            answer:
                "Absolutely. Every website we build is designed mobile-first — meaning it's optimized for smartphones and tablets before scaling up to desktop. We test across iOS, Android, and all major browsers to ensure a flawless experience on every device.",
        },
        {
            question: "Do you provide website maintenance and support after launch?",
            answer:
                "Yes. We offer flexible post-launch maintenance packages covering security updates, content changes, performance monitoring, plugin updates, and feature enhancements. Your website stays fast, secure, and up to date long after it goes live.",
        },
    ],

    // CTA
    cta: {
        title: "Ready to Build a Professional Website?",
        description:
            "Talk to ByteSpire's web development team. We'll review your requirements, suggest the right approach, and give you a free quote — within 24 hours.",
        primaryButton: {
            label: "Get a Free Web Development Quote",
            href: "/contact",
        },
        secondaryButton: {
            label: "View Our Work",
            href: "/projects",
        },
        secondaryLinks: [
            {
                label: "Send Us a Project Brief",
                href: "/contact",
            },
            {
                label: "Explore Our Portfolio",
                href: "/projects",
            },
        ],
    },

    // SEO Meta
    meta: {
        title: "Web Development Company in Kerala | Custom Websites | ByteSpire",
        description:
            "ByteSpire is a professional web development company in Kerala. We build fast, SEO-optimized custom websites, business portals, and full-stack web applications for businesses in Kochi, Calicut, Trivandrum, and globally.",
        keywords: [
            "web development company Kerala",
            "custom web development Kerala",
            "website design Kochi",
            "web development services Calicut",
            "professional website development India",
            "Next.js web development agency",
            "full-stack web development Kerala",
            "responsive website design Kerala",
            "SEO-optimized website development",
            "business website development Kerala",
        ],
        canonical: "https://bytespire.in/services/technology/web-development",
        openGraph: {
            title: "Web Development Company in Kerala | ByteSpire",
            description:
                "Professional custom web development in Kerala. Fast, SEO-optimized websites and full-stack web applications built for businesses in Kochi, Calicut, and globally.",
            images: [{ url: "/logo.svg" }],
        },
    },
};

export const ecommerceService = {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "Custom E-Commerce Development Services | ByteSpire Kerala",
    description:
        "Build high-converting, scalable e-commerce stores with ByteSpire. Professional Shopify, WooCommerce, and custom checkout solutions with seamless payment gateway and inventory integrations.",
    bannerImage: "/service_ecommerce.jpg",

    // Section 2: Banner (Hero Section)
    hero: {
        headline: "Custom E-Commerce Development & Online Stores",
        subheadline:
            "ByteSpire designs and engineers high-speed, SEO-optimized e-commerce stores, custom checkout systems, and multi-channel inventory architectures built for seamless retail expansion across Kerala and worldwide.",
        badge: "E-Commerce Engineering & Architecture",
        breadcrumbLabel: "E-Commerce Development",
        primaryCta: {
            label: "Launch Your E-Commerce Store",
            href: "/contact",
        },
        secondaryCta: {
            label: "Explore E-Commerce Solutions",
            href: "#services-section",
        },
        trustHighlights: [
            {
                title: "Conversion & Checkout Optimized",
                description:
                    "Engineered with friction-free payment flows achieving minimal cart abandonment and top purchase completion rates.",
            },
            {
                title: "Local & Global Retail Impact",
                description:
                    "Trusted e-commerce partner for scaling brands across Kerala, India, and international digital marketplaces.",
            },
        ],
    },

    // Section 3: Expertise
    solutions: {
        badge: "Core Expertise",
        title: "Core Technical Competencies",
        description:
            "Core technical competencies that establish ByteSpire as a leading e-commerce engineering team.",
        points: [
            {
                title: "Custom E-Commerce Storefronts",
                description:
                    "We build tailor-made, mobile-first e-commerce platforms using custom code or headless setups that deliver unique shopping journeys and brand-tailored product showcases.",
                icon: "shopping-bag",
                tags: ["Tailor-Made Platforms", "Headless Setups", "Mobile-First UX"],
            },
            {
                title: "Shopify & WooCommerce Engineering",
                description:
                    "From complex Shopify custom theme development to scalable WooCommerce platforms, we optimize popular platforms for high product catalog volumes and lightning-fast load speeds.",
                icon: "code",
                tags: ["Shopify Themes", "WooCommerce Platforms", "Catalog Optimization"],
            },
            {
                title: "Checkout & Payment Architecture",
                description:
                    "We implement seamless single-page checkouts integrated with regional payment options (Razorpay, UPI, PhonePe) and international gateways (Stripe, PayPal) to maximize sales velocity.",
                icon: "credit-card",
                tags: ["Single-Page Checkout", "UPI & Razorpay", "International Gateways"],
            },
        ],
    },

    // Section 6: Our E-Commerce Services
    servicesTitle: "Our E-Commerce Services",
    servicesDescription:
        "Comprehensive e-commerce engineering services designed to help brands build, launch, and scale online store sales.",
    subServices: [
        {
            id: "custom-online-store-design",
            title: "Custom Online Store Design & Build",
            description:
                "Tailor-made online store architectures and bespoke themes crafted from the ground up to fit your retail brand vision and catalog scale.",
            icon: "shopping-bag",
            image: "/service_ecommerce.jpg",
            features: [
                "Shopify & WooCommerce Custom Store Setup",
                "Headless Commerce & Custom Frontend Development",
                "E-Commerce Security & PCI-DSS Compliance Audit",
                "Custom Product Builders & Configurator APIs",
            ],
        },
        {
            id: "checkout-optimization-payment-gateways",
            title: "Checkout Optimization & Payment Gateways",
            description:
                "Frictionless checkout setups engineered to maximize completed purchases, handle multi-currency payments, and automate local tax calculation.",
            icon: "credit-card",
            image: "/service_custom_software.jpg",
            features: [
                "Single-Page & Express Checkout Optimization",
                "UPI, Razorpay, PhonePe & International Gateway Integration",
                "Abandoned Cart Recovery Flow & One-Click Purchases",
                "Automated Shipping Rate Calculation & Carrier Syncing",
            ],
        },
        {
            id: "ecommerce-ui-ux-conversion-design",
            title: "E-Commerce UI/UX & Conversion Design",
            description:
                "Mobile-first shopping interface designs with intuitive navigation, high-impact product galleries, and streamlined search and filtering.",
            icon: "layout",
            image: "/service_design.png",
            features: [
                "Mobile-First Product Page & Cart UI Design",
                "Interactive Product Catalog Prototypes",
                "Legacy Online Store Redesign & CRO Modernization",
                "Buyer Journey Mapping & Conversion Funnel Optimization",
            ],
        },
        {
            id: "ecommerce-seo-inventory-management",
            title: "E-Commerce SEO & Inventory Management",
            description:
                "Product Schema markup and technical search optimization paired with real-time stock and ERP multi-channel synchronization.",
            icon: "trending-up",
            image: "/service_marketing.png",
            features: [
                "Product Schema Markup & Google Shopping Feed SEO",
                "Real-Time Inventory & Multi-Channel ERP Syncing",
                "Local E-Commerce SEO for Kerala Retail Brands",
                "Site Speed Optimization for High Catalog Volumes",
            ],
        },
    ],

    // Section 5: Technology Stack
    techStack: {
        badge: "Technology Stack",
        title: "Modern Technologies, Platforms & Engines",
        description:
            "Modern technologies, platforms, and engines leveraged to power fast, secure, and conversion-focused e-commerce storefronts.",
        categories: [
            {
                title: "E-Commerce Platforms & Frameworks",
                icon: "shopping-bag",
                items: [
                    {
                        label: "Core Platforms",
                        tech: [
                            "Shopify",
                            "Shopify Plus",
                            "WooCommerce",
                            "Magento",
                            "Custom Headless Commerce (Next.js Storefronts)",
                        ],
                    },
                    {
                        label: "Store Architecture",
                        tech: [
                            "Progressive Web App (PWA) Storefronts",
                            "Single Page Checkout Modules",
                        ],
                    },
                ],
            },
            {
                title: "Payments & Operational Systems",
                icon: "credit-card",
                items: [
                    {
                        label: "Payment Gateways",
                        tech: [
                            "Razorpay",
                            "PhonePe",
                            "Paytm",
                            "Stripe",
                            "PayPal",
                            "Cash on Delivery (COD) Modules",
                        ],
                    },
                    {
                        label: "Inventory & ERP Sync",
                        tech: [
                            "PostgreSQL",
                            "MySQL",
                            "Zoho Inventory",
                            "Tally Integration",
                            "Custom ERP APIs",
                        ],
                    },
                ],
            },
            {
                title: "Infrastructure & Shipping",
                icon: "truck",
                items: [
                    {
                        label: "Shipping Integrations",
                        tech: [
                            "Shiprocket",
                            "Delhivery",
                            "India Post",
                            "DHL",
                            "FedEx APIs",
                        ],
                    },
                    {
                        label: "Cloud Hosting & Version Control",
                        tech: [
                            "AWS",
                            "Cloudflare CDN",
                            "Vercel",
                            "Shopify Cloud",
                            "Managed WooCommerce Hosting",
                            "Git",
                            "GitHub",
                        ],
                    },
                ],
            },
            {
                title: "Marketing & Sales Analytics",
                icon: "bar-chart",
                items: [
                    {
                        label: "Analytics & Pixel Tracking",
                        tech: [
                            "GA4 E-Commerce Tracking",
                            "Meta Pixel",
                            "Google Merchant Center",
                            "Hotjar",
                        ],
                    },
                    {
                        label: "Design & Prototyping",
                        tech: ["Figma", "Adobe XD"],
                    },
                ],
            },
        ],
    },

    // Section 4: Process Roadmap
    process: {
        badge: "Process Roadmap",
        title: "Our Store Deployment Process Roadmap",
        description:
            "Our structured store deployment framework ensures transparent e-commerce project delivery from catalog planning to go-live.",
        steps: [
            {
                step: "01",
                title: "Discovery & Strategy",
                description:
                    "Product catalog mapping, buyer persona discovery, e-commerce tech stack selection, gateway requirements.",
            },
            {
                step: "02",
                title: "Architecture & UI/UX",
                description:
                    "Shopping UX wireframing, mobile-first checkout layout design, conversion rate optimization (CRO) planning.",
            },
            {
                step: "03",
                title: "Agile Engineering",
                description:
                    "Front-end store engineering, Shopify/WooCommerce theme build, payment gateway API & inventory integrations.",
            },
            {
                step: "04",
                title: "QA & Optimization",
                description:
                    "Payment security testing, cross-device shopping flow validation, Core Web Vitals and product schema SEO audit.",
            },
            {
                step: "05",
                title: "Launch & Expansion",
                description:
                    "Production store deployment, payment gateway activation, analytics conversion tracking, and post-launch catalog maintenance.",
            },
        ],
    },

    // Section 7: Frequently Asked Questions (FAQ)
    faq: [
        {
            question: "How long does it take to launch a custom e-commerce store?",
            answer:
                "A standard Shopify or WooCommerce store typically takes 3 to 5 weeks, while complex custom headless e-commerce platforms with custom ERP integrations take 6 to 10 weeks depending on catalog size and feature complexity.",
        },
        {
            question: "Why choose ByteSpire for e-commerce development in Kerala?",
            answer:
                "ByteSpire combines global engineering standards with deep knowledge of Indian payment systems (UPI, Razorpay, COD) and logistics networks (Shiprocket, Delhivery). We build fast, high-converting stores tailored to scale brands regionally and globally.",
        },
        {
            question: "Can you integrate regional payment gateways and Indian shipping providers?",
            answer:
                "Yes. We natively integrate Indian payment options like Razorpay, PhonePe, and Cash on Delivery alongside automated shipping and tracking partners like Shiprocket and Delhivery, as well as international options like Stripe and PayPal.",
        },
        {
            question: "Do you offer ongoing e-commerce maintenance and catalog support?",
            answer:
                "Yes. We provide comprehensive post-launch support including payment gateway maintenance, security patches, bulk product catalog updates, and conversion rate optimization tuning.",
        },
    ],

    // Section 8: Call to Action (E-Commerce Consultation)
    cta: {
        title: "Ready to Launch a High-Converting Online Store for Your Business?",
        description:
            "Partner with ByteSpire to build custom online stores, high-converting checkout systems, and scalable inventory integrations. Tailored e-commerce engineering for growing brands in Kerala and worldwide.",
        primaryButton: {
            label: "Request Free E-Commerce Consultation",
            href: "/contact",
        },
        secondaryButton: {
            label: "Submit E-Commerce Project Inquiry",
            href: "/contact",
        },
        secondaryLinks: [
            {
                label: "Submit E-Commerce Project Inquiry",
                href: "/contact",
            },
            {
                label: "View Featured E-Commerce Engineering Case Studies",
                href: "/projects",
            },
        ],
    },

    // Section 1: Meta Data
    meta: {
        title: "Custom E-Commerce Development Services | ByteSpire Kerala",
        description:
            "Build high-converting, scalable e-commerce stores with ByteSpire. Professional Shopify, WooCommerce, and custom checkout solutions with seamless payment gateway and inventory integrations.",
        keywords: [
            "e-commerce development service",
            "custom online store design",
            "shopify development kerala",
            "woocommerce development company",
            "high-converting checkout flows",
            "payment gateway integration",
        ],
        canonical: "https://bytespire.in/services/ecommerce-development",
        openGraph: {
            title: "ByteSpire | Custom E-Commerce Store Design & Development",
            description:
                "From friction-free checkout flows to automated inventory management, ByteSpire builds scalable online stores for brands in Kerala and worldwide.",
            images: [{ url: "/logo.svg" }],
        },
    },
};

export const customSoftwareService = {
    id: "custom-software-development",
    slug: "custom-software-development",
    title: "Custom Software Development Services | ByteSpire Kerala",
    description:
        "Build secure, scalable enterprise software, custom ERP, and CRM platforms with ByteSpire. Full-cycle software engineering, cloud architectures, and legacy modernization.",
    bannerImage: "/service_custom_software.jpg",

    // Section 2: Banner (Hero Section)
    hero: {
        headline: "Custom Software Development & Cloud ERP/CRM Systems",
        subheadline:
            "ByteSpire designs and engineers secure, scalable enterprise software applications, tailored ERP systems, custom CRMs, and cloud-native solutions crafted for modern business growth across Kerala and worldwide.",
        badge: "Enterprise Software & Cloud Systems",
        breadcrumbLabel: "Custom Software",
        primaryCta: {
            label: "Build Your Custom Software",
            href: "/contact",
        },
        secondaryCta: {
            label: "Explore Enterprise Solutions",
            href: "#services-section",
        },
        trustHighlights: [
            {
                title: "Enterprise Security & Compliance",
                description:
                    "Engineered with robust data encryption, role-based access control (RBAC), and high-availability architecture.",
            },
            {
                title: "Proven Business Impact",
                description:
                    "Trusted software development partner transforming operational workflows for growing enterprises in Kerala and across global markets.",
            },
        ],
    },

    // Section 3: Expertise
    solutions: {
        badge: "Core Engineering Capabilities",
        title: "Core Technical Competencies",
        description:
            "Core engineering capabilities that establish ByteSpire as a premier custom software solutions provider.",
        points: [
            {
                title: "Custom Enterprise ERP Solutions",
                description:
                    "We build centralized, modular ERP systems tailored to your business processes—unifying inventory, supply chain, finance, and HR management into a single real-time operational dashboard.",
                icon: "server",
                tags: ["Modular ERP", "Supply Chain & Finance", "Real-Time Dashboards"],
            },
            {
                title: "Bespoke CRM & Workflow Automation",
                description:
                    "We engineer tailored CRM software and automated pipeline engines that streamline client acquisition, manage sales funnels, and provide actionable analytics to accelerate growth.",
                icon: "code",
                tags: ["Custom CRM", "Pipeline Automation", "Sales Funnel Analytics"],
            },
            {
                title: "Cloud-Native Software & SaaS Architectures",
                description:
                    "From multi-tenant SaaS platforms to microservices architectures, we develop secure, scalable, and resilient cloud applications that deliver seamless performance at any volume.",
                icon: "cloud",
                tags: ["Multi-Tenant SaaS", "Microservices", "Auto-Scaling Cloud"],
            },
        ],
    },

    // Section 6: Our Services
    servicesTitle: "Our Custom Software Services",
    servicesDescription:
        "End-to-end custom software development services designed to digitize, automate, and scale business operations.",
    subServices: [
        {
            id: "enterprise-software-engineering",
            title: "Enterprise Software Engineering",
            description:
                "Custom-built software engineered to solve complex organizational challenges, increase productivity, and replace outdated systems.",
            icon: "server",
            image: "/service_custom_software.jpg",
            features: [
                "Custom ERP & Supply Chain Management Software",
                "Bespoke CRM & Sales Process Automation Tools",
                "Human Resource Management & Payroll Engines",
                "Enterprise Resource Planning & Analytics Dashboards",
            ],
        },
        {
            id: "saas-application-development",
            title: "SaaS Application Development",
            description:
                "Scalable cloud-hosted software products built for subscription models, multi-tenancy, and high user throughput.",
            icon: "cloud",
            image: "/service_tech.png",
            features: [
                "Multi-Tenant SaaS Product Architecture",
                "Subscription Management & Recurring Billing Systems",
                "SaaS Portal UI/UX & Customer Onboarding Flows",
                "Cloud Infrastructure Setup & Auto-Scaling",
            ],
        },
        {
            id: "legacy-system-modernization",
            title: "Legacy System Modernization & API Integration",
            description:
                "Transform legacy software into modern cloud platforms and bridge disconnected business applications with secure APIs.",
            icon: "cpu",
            image: "/banner-center.png",
            features: [
                "Legacy Code Re-Engineering & Refactoring",
                "Custom REST & GraphQL API Engineering",
                "On-Premise to Cloud Data Migration",
                "Third-Party Enterprise System Integration",
            ],
        },
        {
            id: "software-quality-assurance-support",
            title: "Software Quality Assurance & Support",
            description:
                "Rigorous testing frameworks and continuous software maintenance to ensure peak performance, reliability, and security.",
            icon: "shield",
            image: "/service_marketing.png",
            features: [
                "Automated Functional & Performance Testing",
                "Cybersecurity Audits & Code Reviews",
                "SLA-Based Maintenance & Software Support",
                "24/7 Server Infrastructure Monitoring",
            ],
        },
    ],

    // Section 5: Technology Stack
    techStack: {
        badge: "Technology Stack",
        title: "Enterprise Frameworks & Cloud Infrastructure",
        description:
            "Robust frameworks and cloud infrastructure used to engineer high-performing, enterprise-ready custom software solutions.",
        categories: [
            {
                title: "Languages & Core Frameworks",
                icon: "code",
                items: [
                    {
                        label: "Backend Languages",
                        tech: ["Python", "Node.js", "Java", "C#", "Go", "PHP"],
                    },
                    {
                        label: "Frontend & UI",
                        tech: ["React.js", "Angular", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"],
                    },
                ],
            },
            {
                title: "Databases & Architecture",
                icon: "server",
                items: [
                    {
                        label: "Database Systems",
                        tech: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Microsoft SQL Server"],
                    },
                    {
                        label: "Architectural Patterns",
                        tech: ["Microservices", "RESTful APIs", "GraphQL", "Event-Driven Architecture", "Serverless"],
                    },
                ],
            },
            {
                title: "Cloud & DevOps Infrastructure",
                icon: "cloud",
                items: [
                    {
                        label: "Cloud Platforms",
                        tech: ["AWS", "Microsoft Azure", "Google Cloud Platform (GCP)"],
                    },
                    {
                        label: "DevOps & CI/CD",
                        tech: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
                    },
                ],
            },
            {
                title: "Security, Testing & Monitoring",
                icon: "shield",
                items: [
                    {
                        label: "Security Standards & Integrations",
                        tech: ["OAuth 2.0", "JWT", "SSL/TLS", "RBAC", "Data Encryption", "SAP", "Salesforce"],
                    },
                    {
                        label: "Testing & Observability",
                        tech: ["Jest", "Selenium", "Postman", "Cypress", "Datadog", "Sentry", "Prometheus", "Grafana"],
                    },
                ],
            },
        ],
    },

    // Section 4: Process Roadmap
    process: {
        badge: "Process Roadmap",
        title: "Our Software Engineering Methodology",
        description:
            "Our end-to-end software engineering methodology ensures rapid, quality-driven delivery from business requirements to deployment.",
        steps: [
            {
                step: "01",
                title: "Discovery & Strategy",
                description:
                    "Requirement gathering, system architecture planning, technical feasibility assessment, tech stack strategy.",
            },
            {
                step: "02",
                title: "Architecture & UI/UX",
                description:
                    "Data modeling, database schema design, UI/UX workflow wireframing, enterprise system blueprints.",
            },
            {
                step: "03",
                title: "Agile Engineering",
                description:
                    "Full-stack backend & frontend engineering, REST/GraphQL API integration, module development.",
            },
            {
                step: "04",
                title: "QA & Optimization",
                description:
                    "Automated unit & integration testing, load testing, security vulnerability assessments, performance tuning.",
            },
            {
                step: "05",
                title: "Launch & Expansion",
                description:
                    "Cloud infrastructure setup, CI/CD pipeline automation, data migration, user onboarding & continuous support.",
            },
        ],
    },

    // Section 7: Frequently Asked Questions (FAQ)
    faq: [
        {
            question: "How long does it take to develop custom software or an ERP system?",
            answer:
                "Timeline depends on project scope. A focused MVP or custom workflow tool typically takes 8 to 12 weeks, while a comprehensive enterprise ERP or CRM solution can take 4 to 8 months depending on feature modules and integrations.",
        },
        {
            question: "Why choose ByteSpire for custom software development in Kerala?",
            answer:
                "ByteSpire bridges global software development standards with deep operational insights in Kerala. We build secure, high-performing software platforms tailored to help regional and international enterprises streamline operations and scale efficiently.",
        },
        {
            question: "Can you integrate custom software with our existing tools and databases?",
            answer:
                "Yes. We specialize in seamless API integrations, connecting custom ERP or CRM platforms with existing legacy databases, third-party services, payment processors, and cloud tools without workflow disruption.",
        },
        {
            question: "Do you provide ongoing software maintenance and support after launch?",
            answer:
                "Yes. We offer comprehensive post-launch support and SLA-driven maintenance packages covering software updates, security patches, performance optimization, and continuous feature enhancements.",
        },
    ],

    // Section 8: Call to Action (Software Development Consultation)
    cta: {
        title: "Ready to Build Custom Enterprise Software for Your Business?",
        description:
            "Partner with ByteSpire to develop custom enterprise software, tailored ERP systems, scalable CRMs, and SaaS applications. Tailored software engineering for ambitious organizations in Kerala and worldwide.",
        primaryButton: {
            label: "Request Free Software Consultation",
            href: "/contact",
        },
        secondaryButton: {
            label: "Submit Software Project Inquiry",
            href: "/contact",
        },
        secondaryLinks: [
            {
                label: "Submit Software Project Inquiry",
                href: "/contact",
            },
            {
                label: "View Featured Enterprise Software Case Studies",
                href: "/projects",
            },
        ],
    },

    // Section 1: Meta Data
    meta: {
        title: "Custom Software Development Services | ByteSpire Kerala",
        description:
            "Build secure, scalable enterprise software, custom ERP, and CRM platforms with ByteSpire. Full-cycle software engineering, cloud architectures, and legacy modernization.",
        keywords: [
            "custom software development",
            "enterprise software engineering",
            "custom ERP solutions",
            "CRM development company",
            "software development Kerala",
            "cloud SaaS architecture",
        ],
        canonical: "https://bytespire.in/services/custom-software-development",
        openGraph: {
            title: "ByteSpire | Enterprise Custom Software Development & Cloud ERP Systems",
            description:
                "From custom enterprise ERPs and automated CRM platforms to cloud-native SaaS solutions, ByteSpire engineers bespoke software for businesses in Kerala and globally.",
            images: [{ url: "/logo.svg" }],
        },
    },
};

export const mobileAppService = {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development Services | iOS & Android | ByteSpire Kerala",
    description:
        "Build high-performing, scalable mobile applications for iOS and Android with ByteSpire. Native Swift, Kotlin, Flutter, and React Native mobile engineering.",
    bannerImage: "/service_mobile.jpg",

    // Section 2: Banner (Hero Section)
    hero: {
        headline: " Mobile Apps  & Cross-Platform Solutions",
        subheadline:
            "ByteSpire designs and engineers high-speed, intuitive native iOS/Android apps and cross-platform mobile solutions built for enterprise growth across Kerala and worldwide.",
        badge: "Mobile Engineering Excellence",
        breadcrumbLabel: "Mobile App Development",
        primaryCta: {
            label: "Build Your Mobile App Today",
            href: "/contact",
        },
        secondaryCta: {
            label: "Explore Mobile Solutions",
            href: "#services-section",
        },
        trustHighlights: [
            {
                title: "Performance & Battery Optimized",
                description:
                    "Engineered with modern native and cross-platform stacks achieving 60fps animations and low battery consumption.",
            },
            {
                title: "Local & Global Reach",
                description:
                    "Trusted mobile development partner delivering top-rated App Store and Play Store apps for businesses in Kerala and globally.",
            },
        ],
    },

    // Section 3: Expertise
    solutions: {
        badge: "Core Mobile Capabilities",
        title: "Core Technical Competencies",
        description:
            "Core technical competencies that establish ByteSpire as a leading mobile application engineering team.",
        points: [
            {
                title: "Native iOS & Android Engineering",
                description:
                    "We develop high-performance native applications using Swift and Kotlin, leveraging platform-specific APIs to deliver unmatched speed, hardware integration, and seamless user experiences.",
                icon: "smartphone",
                tags: ["Swift & iOS SDK", "Kotlin & Android Jetpack", "Hardware APIs"],
            },
            {
                title: "Cross-Platform App Development",
                description:
                    "Utilizing Flutter and React Native, we build single-codebase mobile solutions that run natively on both iOS and Android, drastically reducing time-to-market without compromising quality.",
                icon: "layout",
                tags: ["Flutter & Dart", "React Native", "Single Codebase"],
            },
            {
                title: "Enterprise Mobility & Backend Systems",
                description:
                    "We architect secure mobile backends, custom RESTful/GraphQL APIs, offline-first synchronization engines, and enterprise-grade data encryption for scalable app performance.",
                icon: "server",
                tags: ["Offline Sync", "Mobile APIs", "Enterprise Security"],
            },
        ],
    },

    // Section 6: Our Services
    servicesTitle: "Our Mobile App Development Services",
    servicesDescription:
        "Comprehensive mobile app development services designed to help businesses innovate, launch, and scale on iOS and Android.",
    subServices: [
        {
            id: "native-ios-android-development",
            title: "Native iOS & Android App Development",
            description:
                "Bespoke native mobile applications engineered specifically for iOS and Android platforms to deliver optimal performance and device integration.",
            icon: "smartphone",
            image: "/service_mobile.jpg",
            features: [
                "Native Swift & iOS SDK Engineering",
                "Native Kotlin & Android Jetpack Solutions",
                "Hardware & Sensor API Integration (GPS, Camera, Bluetooth, Biometrics)",
                "App Store & Play Store Publishing Management",
            ],
        },
        {
            id: "cross-platform-app-solutions",
            title: "Cross-Platform App Solutions",
            description:
                "Cost-effective multi-platform apps that deliver native-like user interfaces and performance across both iOS and Android from a single codebase.",
            icon: "layout",
            image: "/service_tech.png",
            features: [
                "Flutter Cross-Platform App Development",
                "React Native Mobile Engineering",
                "Codebase Migration & Optimization",
                "Shared Logic & Platform-Specific Plugin Customization",
            ],
        },
        {
            id: "mobile-ui-ux-experience-design",
            title: "Mobile UI/UX Experience Design",
            description:
                "User-centered mobile interface designs adhering to Apple Human Interface Guidelines and Google Material Design standards.",
            icon: "pen-tool",
            image: "/service_design.png",
            features: [
                "Interactive Touch & Gesture Prototype Design",
                "User Flow Mapping & Mobile Onboarding Optimization",
                "Mobile App UI Redesign & Modernization",
                "Accessibility & Dark Mode Component Styling",
            ],
        },
        {
            id: "app-store-optimization-mobile-growth",
            title: "App Store Optimization (ASO) & Mobile Growth",
            description:
                "Growth-focused technical optimization that increases organic app store visibility, conversion rates, and user retention.",
            icon: "trending-up",
            image: "/service_marketing.png",
            features: [
                "App Store Keyword Optimization & Metadata Strategy",
                "App Screenshot, Icon & Preview Video Design",
                "Localized App Store Marketing for Kerala & Global Regions",
                "In-App Analytics, Event Tracking & Crash Analytics Integration",
            ],
        },
    ],

    // Section 5: Technology Stack
    techStack: {
        badge: "Technology Stack",
        title: "Mobile Frameworks, Languages & Cloud SDKs",
        description:
            "Modern mobile technologies, frameworks, and SDKs leveraged to power fast, secure, and intuitive mobile solutions.",
        categories: [
            {
                title: "Mobile Frameworks & Languages",
                icon: "smartphone",
                items: [
                    {
                        label: "Cross-Platform & Native",
                        tech: ["Flutter", "React Native", "Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Dart"],
                    },
                    {
                        label: "Mobile Architecture",
                        tech: ["MVVM", "BLoC", "Clean Architecture", "Redux", "Native Modules"],
                    },
                ],
            },
            {
                title: "Backend, APIs & Cloud Services",
                icon: "server",
                items: [
                    {
                        label: "Backend Infrastructure",
                        tech: ["Node.js", "Firebase", "Supabase", "Python", "GraphQL", "REST APIs"],
                    },
                    {
                        label: "Local Databases",
                        tech: ["SQLite", "Room", "CoreData", "Realm", "Hive"],
                    },
                ],
            },
            {
                title: "Integrations & Infrastructure",
                icon: "zap",
                items: [
                    {
                        label: "Mobile Integrations",
                        tech: ["Payment Gateways (Razorpay, Stripe)", "Push Notifications (FCM, OneSignal)", "Maps & Location Services"],
                    },
                    {
                        label: "Deployment & CI/CD",
                        tech: ["AWS Mobile Hub", "Google Cloud", "Fastlane", "TestFlight", "Google Play Console", "Git", "GitHub Actions", "Bitrise", "Codemagic"],
                    },
                ],
            },
            {
                title: "ASO & Mobile Analytics Tools",
                icon: "bar-chart",
                items: [
                    {
                        label: "Analytics & ASO",
                        tech: ["Google Analytics for Firebase", "Mixpanel", "App Radar", "Sensor Tower"],
                    },
                    {
                        label: "Design & Prototyping",
                        tech: ["Figma", "Adobe XD"],
                    },
                ],
            },
        ],
    },

    // Section 4: Process Roadmap
    process: {
        badge: "Process Roadmap",
        title: "Our Mobile Engineering Delivery Framework",
        description:
            "Our structured mobile engineering framework ensures transparent application delivery from initial wireframes to app store publishing.",
        steps: [
            {
                step: "01",
                title: "Discovery & Strategy",
                description:
                    "Product discovery, mobile architecture outline, user persona mapping, and framework selection (Native vs. Cross-Platform).",
            },
            {
                step: "02",
                title: "Architecture & UI/UX",
                description:
                    "Mobile UI/UX design, interactive prototyping, Human Interface & Material Design system guidelines mapping.",
            },
            {
                step: "03",
                title: "Agile Engineering",
                description:
                    "Frontend mobile development, backend API creation, cloud integration, offline database setup, and push notification systems.",
            },
            {
                step: "04",
                title: "QA & Optimization",
                description:
                    "Automated unit testing, real-device QA matrix testing, performance & memory profiling, and security vulnerability audits.",
            },
            {
                step: "05",
                title: "Launch & Expansion",
                description:
                    "Apple App Store & Google Play Store submission, App Store Optimization (ASO), analytics setup, and version updates.",
            },
        ],
    },

    // Section 7: Frequently Asked Questions (FAQ)
    faq: [
        {
            question: "How long does it take to develop a mobile application?",
            answer:
                "A Minimum Viable Product (MVP) or standard business app takes 4 to 8 weeks, while enterprise-grade applications or complex multi-featured platforms take 10 to 16 weeks depending on features, backend APIs, and custom integrations.",
        },
        {
            question: "Why choose ByteSpire for mobile app development in Kerala?",
            answer:
                "ByteSpire combines global software engineering standards with deep insights into the local Kerala market. We deliver robust, user-centric iOS and Android apps engineered to help startups and enterprises scale effectively.",
        },
        {
            question: "Should I build a native app or a cross-platform app?",
            answer:
                "If you require heavy hardware access or maximum graphics performance, native (Swift/Kotlin) is ideal. For faster market entry and budget efficiency across both iOS and Android, cross-platform frameworks like Flutter or React Native are highly recommended.",
        },
        {
            question: "Do you handle App Store and Play Store approval processes?",
            answer:
                "Yes. We manage the complete publishing workflow for both the Apple App Store and Google Play Store, ensuring compliance with developer guidelines, security standards, and privacy requirements.",
        },
    ],

    // Section 8: Call to Action (Mobile App Development Consultation)
    cta: {
        title: "Ready to Turn Your Mobile App Idea Into Reality?",
        description:
            "Partner with ByteSpire to build native iOS & Android apps, cross-platform mobile solutions, and enterprise mobility platforms. Tailored mobile engineering for ambitious businesses in Kerala and worldwide.",
        primaryButton: {
            label: "Request Free Mobile App Consultation",
            href: "/contact",
        },
        secondaryButton: {
            label: "Submit Mobile Project Inquiry",
            href: "/contact",
        },
        secondaryLinks: [
            {
                label: "Submit Mobile Project Inquiry",
                href: "/contact",
            },
            {
                label: "View Featured Mobile App Case Studies",
                href: "/projects",
            },
        ],
    },

    // Section 1: Meta Data
    meta: {
        title: "Mobile App Development Services | iOS & Android | ByteSpire Kerala",
        description:
            "Build high-performing, scalable mobile applications for iOS and Android with ByteSpire. Native Swift, Kotlin, Flutter, and React Native mobile engineering.",
        keywords: [
            "mobile app development service",
            "iOS app development",
            "Android app development",
            "Flutter developers Kerala",
            "cross-platform app engineering",
            "React Native agency",
        ],
        canonical: "https://bytespire.in/services/mobile-app-development",
        openGraph: {
            title: "ByteSpire | Custom Mobile App Development & Cross-Platform Engineering",
            description:
                "From feature-rich native apps to scalable cross-platform solutions, ByteSpire builds mobile experiences for ambitious businesses in Kerala and globally.",
            images: [{ url: "/logo.svg" }],
        },
    },
};

export const innerServices = {
    // Web Development
    // "web-development": webDevelopmentService,
    "web-development-service": webDevelopmentService,
    // "custom-web-development": webDevelopmentService,

    // E-Commerce
    "ecommerce-development": ecommerceService,
    // "ecommerce-store": ecommerceService,
    // "ecommerce-store-development": ecommerceService,
    // "ecommerce": ecommerceService,
    // "e-commerce": ecommerceService,
    // "e-commerce-development": ecommerceService,

    // Custom Software
    // "custom-software": customSoftwareService,
    "custom-software-development": customSoftwareService,
    // "software-development": customSoftwareService,
    // "enterprise-software": customSoftwareService,

    // Mobile App Development
    // "mobile-development": mobileAppService,
    "mobile-app-development": mobileAppService,
    // "mobile-apps": mobileAppService,
    // "app-development": mobileAppService,
    // "ios-android-development": mobileAppService,
};

export function getInnerService(slug) {
    if (!slug) return null;
    const normalized = slug.toLowerCase().trim();
    return innerServices[normalized] || null;
}
