"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Branding",
    tag: "Identity",
    image: "bg-[url(/branding.jpg)]",
    href: "/services/branding",
    description:
      "Creating distinctive brand identities that resonate with your audience and stand out in the market.",
  },
  {
    name: "Development",
    tag: "Engineering",
    image: "bg-[url(/development.jpg)]",
    href: "/services/web-development",
    description:
      "Building robust, scalable digital solutions with cutting-edge technologies and best practices.",
  },
  {
    name: "Web Design",
    tag: "UI / UX",
    image: "bg-[url(/consulting.jpg)]",
    href: "/services/web-design",
    description:
      "Pixel-perfect interfaces designed for conversion — beautiful, intuitive, and built to impress.",
  },
  {
    name: "Ads & Marketing",
    tag: "Growth",
    image: "bg-[url(/ads.jpg)]",
    href: "/services",
    description:
      "Data-driven campaigns that deliver measurable results and maximize your ROI.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex flex-col gap-14">

        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-end"
        >
          <div>
            <motion.p variants={item} className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              What we do
            </motion.p>
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-semibold text-foreground leading-tight max-w-lg">
              Services built for{" "}
              <em className="font-display italic font-normal">ambitious</em>{" "}
              brands
            </motion.h2>
          </div>
          <motion.p variants={item} className="text-sm text-muted-foreground max-w-sm leading-relaxed lg:text-right">
            Transforming ambitious ideas into market-leading digital products
            through strategy, design, and engineering excellence.
          </motion.p>
        </motion.div>

        {/* ── Service cards ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.a
              key={service.name}
              href={service.href}
              variants={item}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer flex flex-col justify-end p-8 h-90 md:h-105 border border-border hover:border-primary/30 transition-all duration-500 ${service.image} bg-cover bg-center`}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all duration-500" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-3">
                {/* Tag */}
                <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
                  {service.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold text-foreground group-hover:-translate-y-1 transition-transform duration-400">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium">Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-secondary/40 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesOverview;
