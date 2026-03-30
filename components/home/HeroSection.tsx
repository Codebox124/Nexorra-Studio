"use client";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// ─── Animated pill ────────────────────────────────────────────────────────────

const AnimatedPill = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    className="relative inline-block rounded-full border border-border/60 px-4 md:px-5 py-1 bg-secondary/40 backdrop-blur-sm overflow-hidden cursor-default"
    initial="rest"
    whileHover="hover"
    whileTap={{ scale: 0.97 }}
    variants={{
      rest: { scale: 1 },
      hover: { scale: 1.06, transition: { duration: 0.22, ease: "easeOut" } },
    }}
  >
    {/* Shimmer sweep */}
    <motion.span
      className="absolute inset-0 pointer-events-none"
      variants={{
        rest: { x: "-160%", skewX: "-12deg" },
        hover: { x: "260%", skewX: "-12deg", transition: { duration: 0.55, ease: "easeInOut" } },
      }}
      style={{
        background:
          "linear-gradient(105deg, transparent 25%, hsl(72 100% 50% / 0.3) 50%, transparent 75%)",
      }}
    />

    {/* Border glow on hover */}
    <motion.span
      className="absolute inset-0 rounded-full pointer-events-none"
      variants={{
        rest: { opacity: 0, boxShadow: "0 0 0px 0px transparent" },
        hover: {
          opacity: 1,
          boxShadow: "0 0 24px -4px hsl(72 100% 50% / 0.55), inset 0 0 12px hsl(72 100% 50% / 0.08)",
          transition: { duration: 0.2 },
        },
      }}
    />

    <em className="relative z-10 font-display italic font-normal">{children}</em>
  </motion.span>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Atmospheric background ── */}
      <div className="absolute inset-0 bg-background" />

      {/* Primary radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, hsla(250, 70%, 20%, 0.65) 0%, hsla(230, 60%, 12%, 0.35) 40%, transparent 75%)",
        }}
      />
      {/* Secondary glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 35% at 45% 50%, hsla(260, 80%, 30%, 0.3) 0%, transparent 70%)",
        }}
      />
      {/* Grid */}
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
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Design • Development • Growth
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-sans font-semibold text-foreground leading-[1.1] text-[2.4rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] max-w-5xl mx-auto mb-6"
        >
          We design and build{" "}
          <AnimatedPill>high-converting</AnimatedPill>{" "}
          digital products that{" "}
          <AnimatedPill>drive growth</AnimatedPill>
        </motion.h1>

        {/* Micro trust line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs md:text-sm text-muted-foreground/80 mb-4"
        >
          Helping startups launch faster, convert better, and scale globally
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-[1.7]"
        >
          From idea to execution, we partner with ambitious founders to create
          products that users love and businesses rely on.
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
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/work"
            className="rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-secondary/40 transition-all duration-300"
          >
            View Case Studies
          </a>
        </motion.div>

        {/* Scroll */}
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