"use client";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

function OurStory() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="w-[90%] flex flex-col md:flex-row justify-between mx-auto gap-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-start text-4xl md:text-5xl font-semibold text-foreground h-fit"
        >
          Our Story
          <ArrowDownRight className="w-12 h-12 mt-2 ml-2 text-primary flex-shrink-0" />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-[42%] flex flex-col gap-5"
        >
          <h3 className="text-xl font-medium text-foreground leading-snug">
            Nexorra was born from a simple belief — great software should solve
            real problems and scale with ambition.
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            We started Nexorra to help founders, startups, and growing teams
            turn ideas into reliable digital products without unnecessary
            complexity. Too many products fail not because of bad ideas, but
            because of poor execution.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Our approach is rooted in clarity, strategy, and strong engineering.
            We take time to understand the problem, design with intention, and
            build systems that are fast, secure, and ready to grow.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Whether it&apos;s an MVP, a SaaS platform, or a complex web or
            mobile application, we focus on delivering software that performs,
            scales, and creates real business impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default OurStory;
