"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-8 overflow-hidden bg-background border-t border-border">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, hsla(72, 100%, 50%, 0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, hsla(250, 70%, 20%, 0.35) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Let&apos;s collaborate
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-semibold text-foreground mb-10 leading-tight"
        >
          Ready to create{" "}
          <em className="font-display italic font-normal">something</em>
          <br />
          great?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-muted-foreground mb-14 max-w-xl mx-auto leading-relaxed"
        >
          Partner with us to elevate your brand and ship products your users
          will love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            disabled
            className="px-10 py-4 rounded-full bg-secondary border border-border text-muted-foreground text-sm font-medium flex items-center justify-center gap-2 cursor-not-allowed"
          >
            Join Our Team
            <ArrowRight className="w-4 h-4" />
          </button>

          <a href="/contact">
            <button className="px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_60px_-15px_hsl(72_100%_50%/0.3)] flex items-center gap-2 group">
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
