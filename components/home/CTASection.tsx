"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-background">
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsla(72, 100%, 50%, 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, hsla(250, 70%, 20%, 0.4) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Let&apos;s build something great
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.1] max-w-4xl mx-auto mb-8"
        >
          Ready to create{" "}
          <em className="font-display italic font-normal">something</em>
          <br />
          truly great?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed"
        >
          Partner with Nexorra Studio to elevate your brand and ship products
          your users will love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/contact"
            className="rounded-full bg-primary text-primary-foreground px-10 py-4 text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_80px_-20px_hsl(72_100%_50%/0.5)] flex items-center gap-2 group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/work"
            className="rounded-full border border-border px-10 py-4 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-secondary/40 transition-all duration-300"
          >
            See Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
