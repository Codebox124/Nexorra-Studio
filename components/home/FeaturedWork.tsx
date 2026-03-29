"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { client: "TechFlow", name: "Global SaaS Platform", category: "Product Design & Development", image: "bg-[url(/saas.jpg)]" },
  { client: "Luxe", name: "E-commerce Revolution", category: "Brand & Digital Experience", image: "bg-[url(/eccom.jpg)]" },
  { client: "FinanceAI", name: "Next-Gen Banking App", category: "Mobile & Web Application", image: "bg-[url(/bank.jpg)]" },
  { client: "MediaHub", name: "Content Platform Redesign", category: "UX Strategy & Design", image: "bg-[url(/content.png)]" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const headerV = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const rowV = {
  hidden: { opacity: 0, x: -30, y: 15 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const FeaturedWork = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14 flex flex-col md:flex-row gap-5 md:items-center justify-between"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          <motion.div variants={headerV}>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Selected work
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
              Featured{" "}
              <em className="font-display italic font-normal">Work</em>
            </h2>
          </motion.div>

          <motion.span variants={headerV}>
            <a
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm text-foreground hover:border-primary/40 hover:bg-secondary/40 transition-all duration-300"
            >
              View All
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.span>
        </motion.div>

        {/* Project rows */}
        <motion.div
          className="flex flex-col"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={rowV}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="text-foreground cursor-pointer border-t border-border py-7 flex flex-col md:flex-row gap-6 h-auto md:h-64 group"
            >
              {/* Thumbnail */}
              <motion.div
                className={`w-full md:w-[28%] h-72 md:h-full ${project.image} bg-cover bg-center rounded-xl overflow-hidden`}
                animate={{ scale: hoveredIdx === idx ? 1.04 : 1 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const }}
              />

              {/* Info */}
              <div className="flex flex-col gap-3 justify-between flex-1">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    {project.client}
                  </p>
                  <motion.h2
                    className="text-3xl md:text-5xl font-semibold"
                    animate={{ x: hoveredIdx === idx ? 6 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                  >
                    {project.name}
                  </motion.h2>
                  {/* Underline */}
                  <motion.div
                    className="h-px bg-primary mt-2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIdx === idx ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>

                <motion.span
                  className="text-sm text-muted-foreground"
                  animate={{ color: hoveredIdx === idx ? "hsl(0 0% 95%)" : undefined }}
                  transition={{ duration: 0.3 }}
                >
                  {project.category}
                </motion.span>
              </div>

              {/* Arrow */}
              <motion.div
                animate={{ x: hoveredIdx === idx ? 6 : 0, rotate: hoveredIdx === idx ? -45 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                className="ml-auto self-center md:self-start mt-2"
              >
                <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
