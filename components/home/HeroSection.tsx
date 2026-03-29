"use client";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Atmospheric background ── */}
      <div className="absolute inset-0 bg-background" />

      {/* Primary radial glow — deep blue/purple */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, hsla(250, 70%, 20%, 0.65) 0%, hsla(230, 60%, 12%, 0.35) 40%, transparent 75%)",
        }}
      />
      {/* Secondary glow layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 35% at 45% 50%, hsla(260, 80%, 30%, 0.3) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220,15%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(220,15%,50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-8 text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
        >
          Premium Design &amp; Development Agency
        </motion.p>

        {/* Mega headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-sans font-semibold text-foreground leading-[1.1] text-[2.4rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] max-w-5xl mx-auto mb-8"
        >
          We craft{" "}
          <span className="inline-block rounded-full border border-border/60 px-4 md:px-5 py-1 bg-secondary/40 backdrop-blur-sm">
            <em className="font-display italic font-normal text-foreground">
              exceptional
            </em>
          </span>{" "}
          digital products that{" "}
          <span className="inline-block rounded-full border border-border/60 px-4 md:px-5 py-1 bg-secondary/40 backdrop-blur-sm">
            <em className="font-display italic font-normal text-foreground">
              move markets
            </em>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-12 leading-[1.7]"
        >
          Transforming ambitious ideas into market-leading digital products
          through strategy, design, and engineering excellence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/contact"
            className="rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_60px_-15px_hsl(72_100%_50%_/_0.35)] flex items-center gap-2 group"
          >
            Book a Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/work"
            className="rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-secondary/40 transition-all duration-300"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground/60">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
