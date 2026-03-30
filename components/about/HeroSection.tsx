"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative flex flex-col gap-14 text-foreground min-h-screen overflow-hidden bg-background py-10 md:py-32 md:pt-40">
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, hsla(250, 70%, 20%, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Text Content */}
      <div className="relative z-10 w-[90%] mx-auto flex flex-col gap-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.3em] text-primary"
        >
          We are Nexorra
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-semibold text-foreground leading-tight max-w-2xl"
          >
            We build scalable{" "}
            <em className="font-display italic font-normal">software</em>
            <br />
            that moves businesses forward
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="w-full md:w-[42%] mt-auto text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            Nexorra is a product-driven software studio helping startups and
            growing businesses design, build, and launch high-performance
            digital products. We focus on usability, clean engineering, and
            scalability — because great software drives growth.
          </motion.p>
        </div>
      </div>

      {/* Images */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 flex gap-6 w-[90%] mx-auto"
      >
        <Image
          alt="Nexorra software design"
          src="/aboutheroone.jpg"
          width={600}
          height={400}
          className="w-[70%] h-[420px] object-cover rounded-2xl border border-border"
        />
        <Image
          alt="Nexorra engineering team"
          src="/aboutherotwo.jpg"
          width={400}
          height={400}
          className="w-[30%] h-[420px] object-cover rounded-2xl border border-border"
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
