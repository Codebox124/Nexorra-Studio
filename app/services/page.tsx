"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Code,
  Layers,
  PenTool,
  Activity,
  PlayCircle,
  Search,
} from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const services = [
  {
    title: "Web Design",
    slug: "web-design",
    description:
      "Crafting high-fidelity, pixel-perfect interfaces that prioritize user experience and brand storytelling.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Web Development",
    slug: "web-development",
    description:
      "Engineering scalable, high-performance web applications using the latest Next.js and React frameworks.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Branding",
    slug: "branding",
    description:
      "Defining your visual DNA through sophisticated typography, color systems, and strategic identity design.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "SEO",
    slug: "seo",
    description:
      "Optimizing your digital footprint to dominate search rankings and capture high-intent organic traffic.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Motion Graphics",
    slug: "motion-graphics",
    description:
      "Bringing interfaces to life with cinematic animations and smooth, purposeful motion design.",
    icon: <PlayCircle className="w-6 h-6" />,
  },
  {
    title: "Technical Audit",
    slug: "technical-audit",
    description:
      "Deep-dive analysis of your current stack to identify performance bottlenecks and security vulnerabilities.",
    icon: <Activity className="w-6 h-6" />,
  },
];
const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const ServiceCard = ({ service }: { service: any; index: number }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative bg-[#0c000f] p-12 overflow-hidden flex flex-col justify-between font-nunito"
    >
      <div className="absolute inset-0 bg-[#9804bc]/0 group-hover:bg-[#9804bc]/5 transition-colors duration-500" />

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9804bc] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.22,1,0.36,1)]" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="p-3 border border-[#fffdf8]/20 text-[#9804bc] group-hover:border-[#9804bc] group-hover:bg-[#9804bc]/10 transition-colors duration-500"
          >
            {service.icon}
          </motion.div>
          <ArrowUpRight className="w-6 h-6 text-[#fffdf8]/20 group-hover:text-[#fffdf8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>

        <h3 className="text-3xl font-light mb-4 group-hover:translate-x-1 transition-transform duration-300 font-sora">
          {service.title}
        </h3>
        <p className="text-[#fffdf8]/50 text-lg leading-relaxed max-w-sm group-hover:text-[#fffdf8]/80 transition-colors duration-300">
          {service.description}
        </p>
      </div>
    </Link>
  );
};

export default function ServicesLanding() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <main className="bg-[#0c000f] text-[#fffdf8] min-h-screen selection:bg-[#9804bc]/30 overflow-x-hidden font-nunito">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#9804bc]/15 rounded-full blur-[120px] pointer-events-none"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <p className="text-[#9804bc] font-medium tracking-widest uppercase text-sm mb-4 inline-block font-nunito">
              Capabilities
            </p>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-light leading-[1.1] mb-8 max-w-4xl font-sora"
          >
            Crafting the{" "}
            <span className="italic font-serif text-[#9804bc] brightness-125">
              future
            </span>{" "}
            of digital experiences.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-[#fffdf8]/60 text-xl max-w-2xl leading-relaxed"
          >
            Nexorra blends technical excellence with artistic intuition to build
            solutions that don't just work—they resonate.
          </motion.p>
        </motion.div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#fffdf8]/10 border border-[#fffdf8]/10"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-[#fffdf8]/5 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12"
        >
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-light mb-6 font-sora">
              Our Pricing Philosophy
            </h2>
            <p className="text-[#fffdf8]/60 leading-relaxed">
              We don't do "one size fits all." We believe in value-based
              solutions tailored to your specific growth stage. Every project is
              a bespoke partnership designed for maximum ROI.
            </p>
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 bg-[#9804bc] text-[#fffdf8] overflow-hidden w-full sm:w-auto font-nunito"
            >
              <div className="absolute inset-0 w-full h-full bg-[#fffdf8] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />

              <span className="relative z-10 font-bold tracking-tight uppercase text-sm group-hover:text-[#0c000f] transition-colors duration-300">
                Request a Custom Quote
              </span>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
