export type ImpactMetric = {
  category: string;
  title: string;
  metric: string;
  metricLabel: string;
  image: string;
  href?: string;
};

export type ServiceStep = { id: string; title: string; desc: string };
export type FAQ = { question: string; answer: string };

export interface ServiceData {
  slug: string;
  title: string;
  italicTitle: string;
  tagline: string;
  description: string;
  process: ServiceStep[];
  capabilities: string[];
  faqs: FAQ[];
  impact: ImpactMetric[];
}

export const servicesData: Record<string, ServiceData> = {
  "web-design": {
    slug: "web-design",
    title: "Web",
    italicTitle: "Design",
    tagline: "UI/UX for the modern era.",
    description:
      "We create high-fidelity interfaces that blend artistic expression with functional precision. Every pixel is placed to guide users and reinforce your brand story.",
    process: [
      {
        id: "01",
        title: "Discovery",
        desc: "User personas and journey mapping.",
      },
      {
        id: "02",
        title: "Wireframing",
        desc: "Defining structure without distractions.",
      },
      {
        id: "03",
        title: "High-Fi UI",
        desc: "Applying visual layers and systems.",
      },
      {
        id: "04",
        title: "Prototyping",
        desc: "Interactive flows for stakeholder testing.",
      },
    ],
    capabilities: [
      "Figma Mastery",
      "User Research",
      "Interaction Design",
      "Responsive Systems",
    ],
    faqs: [
      {
        question: "How many revisions do we get?",
        answer:
          "We work in an iterative loop until the design perfectly matches your vision and user needs.",
      },
    ],
    impact: [
      {
        category: "SaaS",
        title: "Attndr — Event Check-In App",
        metric: "45%",
        metricLabel: "Churn Reduction",
        image: "/projects/attndr.png",
        href: "https://attndr.xyz",
      },
      {
        category: "Knowledge Platform",
        title: "Mindshare — Social Dashboard",
        metric: "9.2",
        metricLabel: "User Rating",
        image: "/projects/mindshare.png",
        href: "https://mindshare-phi.vercel.app",
      },
    ],
  },

  "web-development": {
    slug: "web-development",
    title: "Web",
    italicTitle: "Development",
    tagline: "Engineering digital excellence.",
    description:
      "Performance-first development using Next.js. We build scalable, secure, and lightning-fast applications that handle complexity with ease.",
    process: [
      {
        id: "01",
        title: "Stack Setup",
        desc: "Configuring Next.js, TypeScript, and Tailwind.",
      },
      {
        id: "02",
        title: "Logic & API",
        desc: "Building the engine and data connections.",
      },
      {
        id: "03",
        title: "Frontend",
        desc: "Pixel-perfect implementation of designs.",
      },
      {
        id: "04",
        title: "Deployment",
        desc: "CI/CD pipelines and edge-caching.",
      },
    ],
    capabilities: ["Next.js 15", "TypeScript", "Vercel / AWS", "Headless CMS"],
    faqs: [
      {
        question: "Do you provide documentation?",
        answer:
          "Yes, every build comes with full technical documentation and a training session.",
      },
    ],
    impact: [
      {
        category: "E-commerce",
        title: "Escro Store — Secure Marketplace",
        metric: "22%",
        metricLabel: "Sales Lift",
        image: "/projects/escro.png",
        href: "https://escrostore.netlify.app",
      },
      {
        category: "HR Platform",
        title: "Bamhire — Recruitment Platform",
        metric: "1.2s",
        metricLabel: "Load Time",
        image: "/projects/bamhire.png",
        href: "https://bamhire.com",
      },
    ],
  },

  branding: {
    slug: "branding",
    title: "Brand",
    italicTitle: "Identity",
    tagline: "Visualizing your brand DNA.",
    description:
      "We craft cohesive visual languages that communicate authority and sophistication. From logos to complete design systems.",
    process: [
      {
        id: "01",
        title: "Workshop",
        desc: "Unearthing your brand values and voice.",
      },
      {
        id: "02",
        title: "Concepts",
        desc: "Exploring diverse visual directions.",
      },
      {
        id: "03",
        title: "Refinement",
        desc: "Polishing the chosen identity path.",
      },
      {
        id: "04",
        title: "Guidelines",
        desc: "Building the brand book for scale.",
      },
    ],
    capabilities: [
      "Logo Design",
      "Typography",
      "Color Systems",
      "Brand Strategy",
    ],
    faqs: [
      {
        question: "Is the logo custom?",
        answer:
          "Always. We never use stock or templates for your visual identity.",
      },
    ],
    impact: [
      {
        category: "Auto Customization",
        title: "Iqballaz — Brand Identity",
        metric: "85%",
        metricLabel: "Brand Affinity",
        image: "/projects/iqballaz.png",
        href: "https://www.iqballazcustoms.com/",
      },
      {
        category: "Studio Branding",
        title: "Nexorra — Full Identity System",
        metric: "100%",
        metricLabel: "Original",
        image: "/projects/review.png",
      },
    ],
  },

  seo: {
    slug: "seo",
    title: "Search",
    italicTitle: "Optimization",
    tagline: "Be found by the right people.",
    description:
      "Data-driven SEO strategies that go beyond keywords to build authority, improve rankings, and drive organic revenue.",
    process: [
      {
        id: "01",
        title: "Audit",
        desc: "Technical health and backlink analysis.",
      },
      {
        id: "02",
        title: "Strategy",
        desc: "Keyword mapping and content planning.",
      },
      {
        id: "03",
        title: "On-Page",
        desc: "Optimizing code, tags, and structure.",
      },
      {
        id: "04",
        title: "Backlinks",
        desc: "Building authority through outreach.",
      },
    ],
    capabilities: [
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Analytics",
    ],
    faqs: [
      {
        question: "How long for results?",
        answer:
          "SEO is a marathon; typically, significant movement starts within 3 to 6 months.",
      },
    ],
    impact: [
      {
        category: "Digital Growth",
        title: "Enhance Sphere — Inbound Pipeline",
        metric: "310%",
        metricLabel: "Traffic Increase",
        image: "/projects/enhance.png",
        href: "https://enhancesphere.vercel.app/",
      },
      {
        category: "Travel & Hospitality",
        title: "The Festive Villas — Organic Growth",
        metric: "#1",
        metricLabel: "Rankings",
        image: "/projects/festive.png",
        href: "https://thefestivevillas.com/",
      },
    ],
  },

  "motion-graphics": {
    slug: "motion-graphics",
    title: "Motion",
    italicTitle: "Graphics",
    tagline: "Bringing pixels to life.",
    description:
      "We use cinematic motion to capture attention and simplify complex ideas through storytelling and smooth interaction design.",
    process: [
      {
        id: "01",
        title: "Storyboard",
        desc: "Mapping the narrative and motion.",
      },
      {
        id: "02",
        title: "Assets",
        desc: "Creating the custom visual elements.",
      },
      {
        id: "03",
        title: "Animation",
        desc: "Breathing life into the static frames.",
      },
      {
        id: "04",
        title: "Sound",
        desc: "Integrating audio for full immersion.",
      },
    ],
    capabilities: ["After Effects", "Rive", "GSAP Animations", "Video Editing"],
    faqs: [
      {
        question: "Do you do WebGL?",
        answer:
          "Yes, we specialize in high-end browser-based animations including WebGL and Three.js.",
      },
    ],
    impact: [
      {
        category: "AI Product",
        title: "Abordi — Animated Promo",
        metric: "60%",
        metricLabel: "Retention",
        image: "/projects/abordi.png",
        href: "https://abodi.vercel.app/",
      },
      {
        category: "Electronics",
        title: "Molaz Hub — Brand Motion",
        metric: "1M+",
        metricLabel: "Impressions",
        image: "/projects/molaz.png",
        href: "https://molazelectronicshub.com",
      },
    ],
  },

  "technical-audit": {
    slug: "technical-audit",
    title: "Technical",
    italicTitle: "Audit",
    tagline: "Optimizing the core.",
    description:
      "A deep-dive analysis of your digital infrastructure to eliminate bottlenecks, secure your data, and prepare for scale.",
    process: [
      {
        id: "01",
        title: "Deep Scan",
        desc: "Running security and performance tests.",
      },
      {
        id: "02",
        title: "Analysis",
        desc: "Identifying technical debt and risks.",
      },
      {
        id: "03",
        title: "Reporting",
        desc: "Comprehensive document of findings.",
      },
      { id: "04", title: "Roadmap", desc: "Actionable steps for remediation." },
    ],
    capabilities: [
      "Security Scans",
      "Performance Benchmarks",
      "Code Review",
      "Scalability Planning",
    ],
    faqs: [
      {
        question: "How often should we audit?",
        answer:
          "We recommend a comprehensive technical audit at least once every 12 months.",
      },
    ],
    impact: [
      {
        category: "Environmental Tech",
        title: "Drone Waste Mgt — System Audit",
        metric: "99.9%",
        metricLabel: "Uptime",
        image: "/projects/lisatech.png",
        href: "https://dronewastemgt.vercel.app/",
      },
      {
        category: "Immigration Services",
        title: "Migra Aflux — Security Review",
        metric: "0",
        metricLabel: "Vulnerabilities",
        image: "/projects/migra.png",
        href: "https://migra-aflux.vercel.app/",
      },
    ],
  },
};
