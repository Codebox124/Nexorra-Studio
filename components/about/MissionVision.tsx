"use client";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-8 bg-background border-t border-border">
      <div className="w-[90%] mx-auto grid md:grid-cols-2 gap-16 md:gap-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-8">
            Our Mission
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-10 leading-tight">
            Helping ambitious brands{" "}
            <em className="font-display italic font-normal">build software</em>{" "}
            that scales
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            Our mission is to partner with founders and growing teams to design
            and build digital products that are reliable, scalable, and built
            for real-world impact.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We go beyond visuals and code — combining strategy, design, and
            engineering to help brands move faster, compete smarter, and grow
            sustainably.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-8">
            Our Vision
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-10 leading-tight">
            Shaping the future of{" "}
            <em className="font-display italic font-normal">digital</em>{" "}
            experiences
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            We envision a digital world where products are intuitive,
            performant, and built with purpose — not complexity. Where
            technology empowers businesses instead of slowing them down.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            By holding ourselves to the highest standards of design and
            engineering, we aim to become a trusted partner for companies
            building the next generation of digital products.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
