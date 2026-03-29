"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2022",
    title: "The Foundation",
    description:
      "Nexorra was founded as a solo venture with a clear focus on building clean, reliable web solutions. The year was dedicated to sharpening technical expertise, shipping real products, and laying a strong foundation.",
    achievement: "Founder-led · Web development focus",
  },
  {
    year: "2023",
    title: "First Growth Phase",
    description:
      "With growing demand and larger project scope, the team expanded for the first time. Nexorra began evolving beyond web development, introducing mobile app development and visual design services.",
    achievement: "Team expansion · New services launched",
  },
  {
    year: "2024",
    title: "Expanding Capabilities",
    description:
      "Nexorra transitioned into a multi-disciplinary digital studio. We refined our processes, strengthened our design systems, and delivered end-to-end solutions across web, mobile, and branding.",
    achievement: "Full-service digital studio",
  },
  {
    year: "2025",
    title: "Building for Scale",
    description:
      "Focused on scalability, performance, and long-term partnerships. Nexorra now collaborates closely with startups and growing businesses to build products designed for growth and sustainability.",
    achievement: "Product-led & growth-focused",
  },
];

const Timeline = () => {
  const [, setActiveYear] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-40 px-6 md:px-8 bg-background border-t border-border">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5"
          >
            Our Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-7xl font-semibold text-foreground leading-tight"
          >
            The path that{" "}
            <em className="font-display italic font-normal">shaped</em>{" "}
            Nexorra
          </motion.h2>
        </div>

        <div className="mx-auto max-w-4xl">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative pl-16 pb-20 border-l border-border last:pb-0 cursor-pointer"
              onMouseEnter={() => setActiveYear(milestone.year)}
              onMouseLeave={() => setActiveYear(null)}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[6.5px] rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />

              <div className="transition-transform duration-500 group-hover:translate-x-3">
                <span className="text-5xl font-semibold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                  {milestone.year}
                </span>
                <h3 className="text-3xl font-semibold text-foreground mt-5 mb-3 leading-tight">
                  {milestone.title}
                </h3>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed max-w-2xl">
                  {milestone.description}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                  {milestone.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
