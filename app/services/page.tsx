"use client";

import Link from "next/link";
import { ArrowUpRight, Code, Layers, PenTool, Activity, PlayCircle, Search } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    title: "Web Design",
    slug: "web-design",
    tag: "UI / UX",
    description:
      "Crafting high-fidelity, pixel-perfect interfaces that prioritize user experience and brand storytelling.",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    title: "Web Development",
    slug: "web-development",
    tag: "Engineering",
    description:
      "Engineering scalable, high-performance web applications using the latest Next.js and React frameworks.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: "Branding",
    slug: "branding",
    tag: "Identity",
    description:
      "Defining your visual DNA through sophisticated typography, color systems, and strategic identity design.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "SEO",
    slug: "seo",
    tag: "Growth",
    description:
      "Optimizing your digital footprint to dominate search rankings and capture high-intent organic traffic.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Motion Graphics",
    slug: "motion-graphics",
    tag: "Motion",
    description:
      "Bringing interfaces to life with cinematic animations and smooth, purposeful motion design.",
    icon: <PlayCircle className="w-5 h-5" />,
  },
  {
    title: "Technical Audit",
    slug: "technical-audit",
    tag: "Performance",
    description:
      "Deep-dive analysis of your current stack to identify performance bottlenecks and security vulnerabilities.",
    icon: <Activity className="w-5 h-5" />,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => (
  <Link
    href={`/services/${service.slug}`}
    className="group relative bg-card border border-border p-10 md:p-12 overflow-hidden flex flex-col justify-between hover:border-primary/30 transition-all duration-500"
  >
    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-10">
        <div className="p-3 border border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/10 rounded-lg transition-all duration-500">
          {service.icon}
        </div>
        <ArrowUpRight className="w-5 h-5 text-foreground/20 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </div>

      <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
        {service.tag}
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 group-hover:translate-x-0.5 transition-transform duration-300">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-sm group-hover:text-foreground/70 transition-colors duration-300">
        {service.description}
      </p>
    </div>
  </Link>
);

export default function ServicesLanding() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative md:pt-36 md:pb-20 py-10 px-6 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 40%, hsla(250, 70%, 20%, 0.5) 0%, transparent 70%)",
          }}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.p variants={fadeInUp} className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Capabilities
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-semibold text-foreground leading-[1.05] mb-8 max-w-4xl"
          >
            Crafting the{" "}
            <em className="font-display italic font-normal">future</em>{" "}
            of digital experiences.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Nexorra blends technical excellence with artistic intuition to build
            solutions that don&apos;t just work — they resonate.
          </motion.p>
        </motion.div>
      </section>

      {/* Services grid */}
      <section className="px-6 md:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border"
          >
            {services.map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="h-full bg-background">
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing philosophy */}
      <section className="py-24 md:py-32 px-6 md:px-8 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12"
        >
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Our pricing{" "}
              <em className="font-display italic font-normal">philosophy</em>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We don&apos;t do &quot;one size fits all.&quot; We believe in
              value-based solutions tailored to your specific growth stage.
              Every project is a bespoke partnership designed for maximum ROI.
            </p>
          </div>

          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-primary text-primary-foreground px-10 py-4 text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_60px_-15px_hsl(72_100%_50%/0.3)]"
            >
              Request a Custom Quote
            </motion.button>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
