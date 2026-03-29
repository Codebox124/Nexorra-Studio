"use client";
import { motion } from "framer-motion";

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years of Excellence" },
  { number: "20+", label: "Clients Served" },
];

const marqueeItems = [
  "Web Design",
  "Branding",
  "Development",
  "Motion",
  "SEO",
  "Strategy",
  "UI / UX",
  "Identity",
];

const MarqueeTrack = () => {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-marquee w-max gap-12 items-center">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const StatsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-y border-border overflow-hidden">
      {/* Marquee strip */}
      <div className="mb-20 py-5 border-y border-border/60">
        <MarqueeTrack />
      </div>

      {/* Stats grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map(({ number, label }) => (
            <motion.div key={label} variants={item} className="flex flex-col gap-2">
              <span className="text-5xl md:text-6xl font-semibold text-primary leading-none">
                {number}
              </span>
              <span className="text-sm text-muted-foreground leading-snug">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
