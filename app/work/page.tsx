"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ProjectCard } from "./_components/projectCard";
import { ProjectDialog } from "./_components/projectDialog";

const PROJECTS = [
  // ── Websites ──────────────────────────────────────────────────────────────
  {
    title: "IQBALLAZ CUSTOMS",
    description: "Premium vehicle customization site — wraps, PPF, tinting & ceramic coating for Houston's car culture.",
    image: "/projects/iqballaz.png",
    fullDescription: "Official site of Iqballaz Customs, a vehicle customization and auto detailing service based in Houston, Texas. The website showcases vinyl wraps, window tinting, paint protection film (PPF), ceramic coating, powder coating, suspension work, and aesthetic upgrades — with a bold visual identity that mirrors the brand's craftsmanship.",
    category: "Web Design & Development",
    year: "2024",
    client: "Iqballaz Customs",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://www.iqballazcustoms.com/",
    type: "website",
  },
   {
    title: "Bubble Bay Auto Spa ",
    description: "Luxury auto spa website — premium detailing, ceramic coating, paint correction & more for discerning car owners.",
    image: "/projects/bubble.png",
    fullDescription: "Bubble Bay Auto Spa is a high-end auto detailing and ceramic coating service. The website features a sleek, modern design that highlights the brand's commitment to quality and customer satisfaction. With sections dedicated to services like paint correction, interior detailing, and protective coatings, the site is designed to convert visitors into clients through compelling visuals and clear calls to action.",
    category: "Web Design & Development",
    year: "2024",
    client: "Bubble Bay Auto Spa",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://bubblesbayautospa.shop/",
    type: "website",
  },
  {
    title: "MOLAZ ELECTRONICS HUB",
    description: "Full-featured electronics e-commerce platform with product listings, categories & fast checkout.",
    image: "/projects/molaz.png",
    fullDescription: "Molaz Electronics Hub is a modern e-commerce platform for electronics retail, featuring a comprehensive product catalogue, smooth category navigation, and an optimised checkout flow. The design prioritises trust signals and speed to drive conversion.",
    category: "E-commerce & Web Development",
    year: "2025",
    client: "Molaz Electronics",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    href: "https://molazelectronicshub.com",
    type: "website",
  },
  {
    title: "THE FESTIVE VILLAS",
    description: "Luxury villa rental platform with immersive visuals and seamless booking for holiday getaways.",
    image: "/projects/festive.png",
    fullDescription: "The Festive Villas is a premium holiday rental platform showcasing stunning villa properties. The site blends cinematic photography with a clean booking interface — designed to convert high-intent visitors into guests through atmosphere, trust, and frictionless UX.",
    category: "Web Design & Development",
    year: "2024",
    client: "The Festive Villas",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Booking API"],
    href: "https://thefestivevillas.com/",
    type: "website",
  },
  {
    title: "ATTNDR",
    description: "Smart attendance & event check-in platform — QR-based, real-time, built for modern events.",
    image: "/projects/attndr.png",
    fullDescription: "Attndr is an attendance management and event check-in platform built for organisers who need reliability and speed. Featuring QR-code scanning, live dashboards, and guest management tools, the product eliminates manual sign-in sheets and delivers instant analytics.",
    category: "SaaS & Product Design",
    year: "2025",
    client: "Attndr",
    technologies: ["Next.js", "TypeScript", "Supabase", "QR Scanning", "Tailwind CSS"],
    href: "https://attndr.xyz",
    type: "website",
  },
  {
    title: "MINDSHARE",
    description: "Knowledge-sharing social platform where professionals exchange insights and build thought leadership.",
    image: "/projects/mindshare.png",
    fullDescription: "Mindshare is a community-driven platform for professionals to share ideas, spark conversations, and build influence. The product design focuses on clean content hierarchies, engagement mechanics, and a distraction-free reading experience that encourages depth over noise.",
    category: "SaaS & Product Design",
    year: "2025",
    client: "Mindshare",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    href: "https://mindshare-phi.vercel.app",
    type: "website",
  },
  {
    title: "ESCRO STORE",
    description: "Secure peer-to-peer e-commerce marketplace with built-in escrow protection for every transaction.",
    image: "/projects/escro.png",
    fullDescription: "Escro Store is a marketplace that protects buyers and sellers through an escrow-based payment system. Every transaction is held in trust until both parties confirm fulfilment — eliminating fraud and building confidence in peer-to-peer commerce.",
    category: "E-commerce & Fintech",
    year: "2025",
    client: "Escro",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Node.js"],
    href: "https://escrostore.netlify.app",
    type: "website",
  },
  {
    title: "HAPPY HOLIDAY",
    description: "Travel & holiday planning platform with curated destinations, itineraries and booking tools.",
    image: "/projects/happy.png",
    fullDescription: "Happy Holiday is a vibrant travel platform offering curated holiday packages, destination guides, and an intuitive itinerary builder. The design centres warm, inspiring visuals and a booking flow engineered to reduce drop-off at every step.",
    category: "Web Design & Development",
    year: "2025",
    client: "Happy Holiday",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Booking API"],
    href: "https://happyholliday.vercel.app",
    type: "website",
  },
  {
    title: "LIFE OF SHIZ",
    description: "Personal lifestyle brand site with editorial flair — blog, content hub and community space.",
    image: "/projects/shiz.png",
    fullDescription: "Life of Shiz is the digital home of a lifestyle creator, blending personal storytelling with a polished editorial aesthetic. The site serves as a content hub, portfolio, and community touchpoint — designed to reflect the creator's bold, unapologetic voice.",
    category: "Web Design & Brand",
    year: "2024",
    client: "Shizea",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "CMS"],
    href: "https://lifeofshiz.vercel.app/",
    type: "website",
  },
  {
    title: "POUR AUTHORITY",
    description: "Craft cocktail brand site with curated menus, event listings and a bold mixology identity.",
    image: "/projects/pour.png",
    fullDescription: "Pour Authority is a craft cocktail and bar experience brand. The site features curated menus, private event booking, and a visual identity anchored in dark, premium aesthetics — communicating expertise and atmosphere at first glance.",
    category: "Brand & Web Design",
    year: "2024",
    client: "Pour Authority",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "https://www.pour-authority.com/",
    type: "website",
  },
  {
    title: "KIDZ VIDZ",
    description: "Safe, engaging video platform for children with parental controls and curated educational content.",
    image: "/projects/kids.png",
    fullDescription: "Kidz Vidz is a child-safe video platform designed for parents who want curated, age-appropriate content. The UI uses playful design language while maintaining strict safety guardrails — featuring parental dashboards, content filtering, and guided discovery.",
    category: "EdTech & Web Development",
    year: "2024",
    client: "KidzVidz",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Video.js"],
    href: "https://kidz-vidz.com/",
    type: "website",
  },
  {
    title: "BAMHIRE",
    description: "HR & recruitment platform connecting employers with top talent across industries.",
    image: "/projects/bamhire.png",
    fullDescription: "BAM Hire is a recruitment platform streamlining the hiring process for employers and job-seekers. With role-based dashboards, intelligent matching, and a clean application flow, the platform reduces time-to-hire and improves candidate experience.",
    category: "SaaS & Web Design",
    year: "2024",
    client: "Bamhire",
    technologies: ["React", "GSAP", "Three.js", "CSS3"],
    href: "https://bamhire.com",
    type: "website",
  },
  {
    title: "ABORDI",
    description: "AI-powered command centre — curated by profession to streamline your workflow in one place.",
    image: "/projects/abordi.png",
    fullDescription: "Abordi is your all-in-one AI command centre, curated by profession and powered by intelligence. No tabs, no noise — just a single workspace that surfaces the right tools, insights, and actions for your specific role.",
    category: "AI Product & UX Design",
    year: "2024",
    client: "Abordi",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    href: "https://abodi.vercel.app/",
    type: "website",
  },
  {
    title: "HAPPY HAMSTER",
    description: "Playful pet care brand site with products, care guides and an adorable visual identity.",
    image: "/projects/hamster.png",
    fullDescription: "Happy Hamster is a pet care brand focused on small animals. The website delivers product showcases, expert care guides, and a warm, character-driven aesthetic that resonates deeply with pet owners — turning casual visitors into loyal customers.",
    category: "Brand & E-commerce",
    year: "2024",
    client: "Happy Hamster",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Shopify"],
    href: "https://happyhamster20.com/",
    type: "website",
  },
  {
    title: "TRBC",
    description: "Georgian transporter bikers club — community hub with events, member profiles and culture.",
    image: "/projects/transport.png",
    fullDescription: "TRBC (Transporter Bikers Club of Georgia) is a community platform for motorcycle enthusiasts. The site brings together event listings, club news, member profiles, and media — built with the raw energy and brotherhood the club represents.",
    category: "Community & Web Design",
    year: "2024",
    client: "TRBC Georgia",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "https://trbc.ge/",
    type: "website",
  },
  {
    title: "MAKE IT 'N MARKET",
    description: "Creator commerce platform empowering makers to launch products and grow their audience.",
    image: "/projects/market.png",
    fullDescription: "Make It 'N Market is a platform for independent creators, makers, and entrepreneurs. It provides tools to showcase products, build an audience, and sell online — wrapped in an encouraging, community-first brand voice that celebrates the maker spirit.",
    category: "E-commerce & Web Design",
    year: "2024",
    client: "Make It 'N Market",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    href: "https://www.makeitandmarket.com/",
    type: "website",
  },
  {
    title: "MIGRA AFLUX",
    description: "Immigration services platform simplifying visa applications, consultations and case tracking.",
    image: "/projects/migra.png",
    fullDescription: "Migra Aflux is an immigration consultancy platform that demystifies the visa and relocation process. Features include service breakdowns, appointment booking, document checklists, and a clean client portal designed to reduce anxiety and build trust.",
    category: "Legal Services & Web Design",
    year: "2024",
    client: "Migra Aflux",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Calendly API"],
    href: "https://migra-aflux.vercel.app/",
    type: "website",
  },
  {
    title: "DRONE WASTE MGT",
    description: "Tech-forward waste management platform showcasing drone-assisted environmental services.",
    image: "/projects/lisatech.png",
    fullDescription: "Drone Waste Management is a forward-thinking environmental services company using drone technology for waste monitoring and management. The site communicates technical expertise through clean data visualisation and a professional, trustworthy design system.",
    category: "Web Design & Development",
    year: "2024",
    client: "Drone Waste Mgt",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Mapbox"],
    href: "https://dronewastemgt.vercel.app/",
    type: "website",
  },
  {
    title: "ENHANCE SPHERE",
    description: "Digital growth platform offering marketing, automation and strategy tools for modern brands.",
    image: "/projects/enhance.png",
    fullDescription: "Enhance Sphere is a digital growth platform helping brands scale through marketing automation, strategic consulting, and product optimisation. The site positions the brand with authority — combining sharp copy, strong social proof, and a high-converting layout.",
    category: "SaaS & Marketing",
    year: "2024",
    client: "Enhance Sphere",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "HubSpot"],
    href: "https://enhancesphere.vercel.app/",
    type: "website",
  },
  // ── Design ────────────────────────────────────────────────────────────────
  {
    title: "NEXORRA BRANDING",
    description: "Complete visual identity system — wordmark, colour palette, typography and brand guidelines.",
    image: "/projects/review.png",
    fullDescription: "A comprehensive branding project establishing the visual identity, typography system, and colour palette for Nexorra Studio. The work spans logo design, brand voice, motion guidelines, and a full brand book — creating a cohesive presence that communicates precision and ambition.",
    category: "Brand Identity",
    year: "2024",
    client: "Nexorra Studio",
    technologies: ["Illustrator", "Photoshop", "Indesign", "Figma"],
    href: "#",
    type: "design",
  },
  {
    title: "WEB3 DESIGNS UI",
    description: "High-fidelity UI for a next-gen fintech app — dark mode, data visualisation and intuitive flows.",
    image: "/projects/Artboard.png",
    fullDescription: "High-fidelity UI design for a next-generation fintech application. The project focused on intuitive navigation architecture, dark mode aesthetics, real-time data visualisation components, and a design system built to scale across web and mobile surfaces.",
    category: "UI/UX Design",
    year: "2024",
    client: "FinTech Corp",
    technologies: ["Figma", "Protopie", "After Effects"],
    href: "#",
    type: "design",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const maskReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: EASE } },
};

const itemSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function WorksPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"website" | "design">("website");

  const handleProjectClick = (project: (typeof PROJECTS)[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const filteredProjects = PROJECTS.filter((p) => p.type === activeTab);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Subtle grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220,15%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(220,15%,50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <main className="relative z-10 grid lg:grid-cols-2 min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Left — Hero */}
        <div className="relative lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-16">
          <motion.div initial="hidden" animate="show" variants={containerStagger}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.1] mb-6 lg:mb-8">
              <div className="overflow-hidden">
                <motion.div variants={maskReveal} className="block">
                  Our Works
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div variants={maskReveal} className="block">
                  <em className="font-display italic font-normal text-primary">
                    — crafted with precision.
                  </em>
                </motion.div>
              </div>
            </h1>
            <motion.p
              variants={itemSlideUp}
              className="text-sm text-muted-foreground max-w-md leading-relaxed"
            >
              Explore a curated collection of projects where design meets technology.
            </motion.p>
          </motion.div>
        </div>

        {/* Right — Projects grid */}
        <div className="bg-background p-4 sm:p-6 flex flex-col h-full">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 sticky top-0 z-20 bg-background/80 backdrop-blur-sm py-4">
            {(["website", "design"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full border ${
                  activeTab === tab
                    ? "border-primary text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">{tab === "website" ? "Websites" : "Designs"}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial="hidden"
            animate="show"
            variants={containerStagger}
            className="grid gap-5 md:grid-cols-2"
          >
            {filteredProjects.map((proj, idx) => (
              <motion.div key={`${proj.title}-${idx}`} variants={itemSlideUp}>
                <ProjectCard
                  title={proj.title}
                  description={proj.description}
                  image={proj.image}
                  onClick={() => handleProjectClick(proj)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {selectedProject && (
        <ProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} project={selectedProject} />
      )}
    </div>
  );
}
