"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ProjectCard } from "./_components/projectCard";
import { ProjectDialog } from "./_components/projectDialog";

const PROJECTS = [
  {
    title: "IQBALLAZ WEBSITE",
    description:
      "Official site of Iqballaz Customs, a vehicle customization and auto detailing service",
    image: "./projects/iqballaz.png",
    fullDescription:
      "This is the official site of Iqballaz Customs, a vehicle customization and auto detailing service based in Houston, Texas. The website highlights services like vinyl wraps, window tinting, paint protection film (PPF), ceramic coating, powder coating, suspension work, and other vehicle aesthetic upgrades.",
    category: "Web Design & Development",
    year: "2024",
    client: "Iqballaz",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://www.iqballazcustoms.com/",
    type: "website",
  },
  {
    title: "BAMHIRE WEBSITE",
    description:
      "BAMHIRE is a HR & recruitment platform focused on connecting employers with job-seekers.",
    image: "./projects/bamhire.png",
    fullDescription:
      "BAM Hire, a HR & recruitment platform focused on connecting employers with job-seekers, offering workforce solutions, and facilitating hiring across industries.",
    category: "Web Design & Motion Graphics",
    year: "2024",
    client: "Bamhire",
    technologies: ["React", "GSAP", "Three.js", "CSS3"],
    href: "https://bamhire.com ",
    type: "website",
  },
  {
    title: "ABORDI WEBSITE",
    description: "Complete redesign of an e-commerce platform.",
    image: "./projects/abordi.png",
    fullDescription:
      "Abordi is your all-in-one AI command center curated by profession, powered by intelligence, and built to simplify your workflow. No tabs. No noise. Just results.",
    category: "E-commerce & UX Design",
    year: "2023",
    client: "Abordi",
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS"],
    href: "https://abodi.vercel.app/",
    type: "website",
  },
  {
    title: "MIGRA AFLUX WEBSITE",
    description: "In‑depth usability audit and redesign recommendations.",
    image: "./projects/migra.png",
    fullDescription:
      "An in-depth usability audit followed by comprehensive redesign recommendations to enhance user flow and accessibility.",
    category: "UX/UI Audit & Consulting",
    year: "2024",
    client: "Migra Aflux",
    technologies: ["Figma", "Adobe XD", "User Testing", "Analytics"],
    href: "https://migra-aflux.vercel.app/",
    type: "website",
  },
  {
    title: "POUR AUTORITY WEBSITE",
    description: "In‑depth usability audit and redesign recommendations.",
    image: "./projects/POUR.png",
    fullDescription:
      "An in-depth usability audit followed by comprehensive redesign recommendations to enhance user flow and accessibility.",
    category: "UX/UI Audit & Consulting",
    year: "2024",
    client: "Pour Authority",
    technologies: ["Figma", "Adobe XD", "User Testing", "Analytics"],
    href: "https://www.pour-authority.com/",
    type: "website",
  },
  {
    title: "KIDZVIDZ WEBSITE",
    description: "In‑depth usability audit and redesign recommendations.",
    image: "./projects/kids.png",
    fullDescription:
      "An in-depth usability audit followed by comprehensive redesign recommendations to enhance user flow and accessibility.",
    category: "UX/UI Audit & Consulting",
    year: "2024",
    client: "KidzVidz",
    technologies: ["Figma", "Adobe XD", "User Testing", "Analytics"],
    href: "https://www.kidz-vidz.com/",
    type: "website",
  },
  {
    title: "THE FESTIVE VILLA WEBSITE",
    description: "In‑depth usability audit and redesign recommendations.",
    image: "./projects/villa.png",
    fullDescription:
      "An in-depth usability audit followed by comprehensive redesign recommendations to enhance user flow and accessibility.",
    category: "UX/UI Audit & Consulting",
    year: "2024",
    client: "The Festive Villa",
    technologies: ["Figma", "Adobe XD", "User Testing", "Analytics"],
    href: "https://thefestivevillas.com/",
    type: "website",
  },
  {
    title: "ENHANCE WEBSITE",
    description: "In‑depth usability audit and redesign recommendations.",
    image: "./projects/enhance.png",
    fullDescription:
      "A transformative project focused on enhancing digital experiences through strategic design improvements and modern development practices.",
    category: "Web Development & Strategy",
    year: "2024",
    client: "Enhance",
    technologies: ["Vue.js", "Nuxt", "Node.js", "MongoDB"],
    href: "https://enhancesphere.vercel.app/",
    type: "website",
  },
  {
    title: "HAPPY HAMSTER WEBSITE",
    description: "In‑depth usability audit and redesign recommendations.",
    image: "./projects/hamster.png",
    fullDescription:
      "A transformative project focused on enhancing digital experiences through strategic design improvements and modern development practices.",
    category: "Web Development & Strategy",
    year: "2024",
    client: "Happy Hamster",
    technologies: ["Vue.js", "Nuxt", "Node.js", "MongoDB"],
    href: "https://happyhamster20.com/",
    type: "website",
  },
  {
    title: "TRBC WEBSITE",
    description: "In‑depth usability audit and redesign recommendations.",
    image: "./projects/transport.png",
    fullDescription:
      "A transformative project focused on enhancing digital experiences through strategic design improvements and modern development practices.",
    category: "Web Development & Strategy",
    year: "2024",
    client: "TransporterBikersClub",
    technologies: ["Vue.js", "Nuxt", "Node.js", "MongoDB"],
    href: "https://www.trbc.ge/",
    type: "website",
  },
  {
    title: "MAKE IT 'N MARKET",
    description: "In‑depth usability audit and redesign recommendations.",
    image: "./projects/market.png",
    fullDescription:
      "A transformative project focused on enhancing digital experiences through strategic design improvements and modern development practices.",
    category: "Web Development & Strategy",
    year: "2024",
    client: "Make It 'N Market",
    technologies: ["Vue.js", "Nuxt", "Node.js", "MongoDB"],
    href: "https://www.makeitandmarket.com/",
    type: "website",
  },
  {
    title: "LIFE OF SHIZ",
    description: "In‑depth usability audit and redesign recommendations.",
    image: "./projects/lifeofshiz.png",
    fullDescription:
      "A transformative project focused on enhancing digital experiences through strategic design improvements and modern development practices.",
    category: "Web Development & Strategy",
    year: "2024",
    client: "Shizea",
    technologies: ["Vue.js", "Nuxt", "Node.js", "MongoDB"],
    href: "https://lifeofshiz.vercel.app/",
    type: "website",
  },
  {
    title: "LISATECH WEBSITE",
    description: "In‑depth usability audit and redesign recommendations.",
    image: "./projects/lisatech.png",
    fullDescription:
      "A transformative project focused on enhancing digital experiences through strategic design improvements and modern development practices.",
    category: "Web Development & Strategy",
    year: "2024",
    client: "Shizea",
    technologies: ["Vue.js", "Nuxt", "Node.js", "MongoDB"],
    href: "https://dronewastemgt.vercel.app/",
    type: "website",
  },
  // DESIGN PROJECTS
  {
    title: "NEXORRA BRANDING",
    description: "Complete visual identity and brand guidelines.",
    image: "./projects/review.png",
    fullDescription:
      "A comprehensive branding project establishing the visual identity, typography, and color palette for Nexorra, creating a cohesive and modern brand presence.",
    category: "Brand Identity",
    year: "2024",
    client: "Nexorra",
    technologies: ["Illustrator", "Photoshop", "Indesign"],
    href: "#",
    type: "design",
  },
  {
    title: "FINTECH APP UI",
    description: "Futuristic fintech mobile application interface.",
    image: "./projects/Artboard.png",
    fullDescription:
      "High-fidelity UI design for a next-gen fintech application, focusing on intuitive navigation, dark mode aesthetics, and data visualization.",
    category: "UI/UX Design",
    year: "2024",
    client: "FinTech Corp",
    technologies: ["Figma", "Protopie"],
    href: "#",
    type: "design",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
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
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS)[0] | null
  >(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"website" | "design">("website");

  const handleProjectClick = (project: (typeof PROJECTS)[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const filteredProjects = PROJECTS.filter(
    (project) => project.type === activeTab
  );

  return (
    <div className="min-h-screen bg-[#0c000f] text-[#fffdf8] font-sans selection:bg-[#9804bc] selection:text-white">
      {/* Background Grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fffdf8 1px, transparent 1px), linear-gradient(90deg, #fffdf8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <main className="relative z-10 grid lg:grid-cols-2 min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Left Section – Hero */}
        <div className="relative lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-[#fffdf8]/10 flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerStagger}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 lg:mb-8">
              <div className="overflow-hidden">
                <motion.div variants={maskReveal} className="block">
                  Our Works
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div variants={maskReveal} className="block">
                  <span className="font-serif italic text-[#9804bc]">
                    — crafted with precision.
                  </span>
                </motion.div>
              </div>
            </h1>
            <motion.p
              variants={itemSlideUp}
              className="text-base sm:text-lg text-[#fffdf8]/60 font-light max-w-md leading-relaxed"
            >
              Explore a curated collection of projects where design meets
              technology.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Section – Projects Grid */}
        <div className="bg-[#0c000f] p-4 sm:p-6 flex flex-col h-full">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 sticky top-0 z-20 bg-[#0c000f]/80 backdrop-blur-sm py-4">
            <button
              onClick={() => setActiveTab("website")}
              className={`relative px-5 py-2 rounded-none text-sm font-medium transition-colors duration-300 ${
                activeTab === "website"
                  ? "text-white border border-[#9804bc] "
                  : "text-[#fffdf8]/60 hover:text-[#fffdf8]"
              }`}
            >
              {activeTab === "website" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-transparent rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">Websites</span>
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`relative px-5 py-2 rounded-none text-sm font-medium transition-colors duration-300 ${
                activeTab === "design"
                  ? "text-white border border-[#9804bc] "
                  : "text-[#fffdf8]/60 hover:text-[#fffdf8]"
              }`}
            >
              {activeTab === "design" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0  rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">Designs</span>
            </button>
          </div>

          <motion.div
            key={activeTab} // Add key to force re-animation on tab change
            initial="hidden"
            animate="show"
            variants={containerStagger}
            className="grid gap-6 md:grid-cols-2"
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

      {/* Project Dialog */}
      {selectedProject && (
        <ProjectDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          project={selectedProject}
        />
      )}
    </div>
  );
}
