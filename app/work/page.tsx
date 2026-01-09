"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ProjectCard } from "./_components/projectCard";
import { ProjectDialog } from "./_components/projectDialog";

// Sample data for works/projects
const PROJECTS = [
  {
    title: "IQBALAZ WEBSITE",
    description: "Brand identity and visual system for a tech startup.",
    image: "./projects/iqballaz.png",
    fullDescription:
      "A comprehensive brand identity and visual system designed for a cutting-edge tech startup. This project involved creating a cohesive design language that reflects innovation and professionalism.",
    category: "Web Design & Development",
    year: "2024",
    client: "Iqbalaz",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://iqbalaz.com",
  },
  {
    title: "BAMHIRE WEBSITE",
    description: "Dynamic motion graphics for marketing campaigns.",
    image: "./projects/bamhire.png",
    fullDescription:
      "A dynamic platform featuring engaging motion graphics designed to elevate marketing campaigns and drive user engagement.",
    category: "Web Design & Motion Graphics",
    year: "2024",
    client: "Bamhire",
    technologies: ["React", "GSAP", "Three.js", "CSS3"],
    href: "https://bamhire.com",
  },
  {
    title: "ABORDI WEBSITE",
    description: "Complete redesign of an e‑commerce platform.",
    image: "./projects/abordi.png",
    fullDescription:
      "A complete redesign of an e-commerce platform focused on improving user experience, conversion rates, and overall aesthetic appeal.",
    category: "E-commerce & UX Design",
    year: "2023",
    client: "Abordi",
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS"],
    href: "https://abordi.com",
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
    href: "https://migraaflux.com",
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
    href: "https://enhance.com",
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
    href: "https://enhance.com",
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

  const handleProjectClick = (project: (typeof PROJECTS)[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

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
        <div className="bg-[#0c000f] p-4 sm:p-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerStagger}
            className="grid gap-6 md:grid-cols-2"
          >
            {PROJECTS.map((proj, idx) => (
              <motion.div key={idx} variants={itemSlideUp}>
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
