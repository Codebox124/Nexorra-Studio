"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { ServiceData } from "@/lib/services-data";

const ease = [0.25, 1, 0.5, 1] as const;

const slideUp: Variants = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const reveal: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="group border-b border-border">
    <button
      onClick={onClick}
      className="w-full py-7 flex justify-between items-center text-left outline-none"
    >
      <span
        className={`text-base font-medium transition-colors duration-300 ${
          isOpen ? "text-primary" : "text-foreground group-hover:text-primary/70"
        }`}
      >
        {question}
      </span>
      <div className="relative w-5 h-5 flex-shrink-0 ml-4">
        <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/40" />
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.4, ease: "anticipate" }}
          className="absolute top-0 left-1/2 w-px h-full bg-foreground/40 origin-center"
        />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="overflow-hidden"
        >
          <div className="pb-7 text-muted-foreground leading-relaxed text-sm max-w-2xl">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function ServicePageClient({ data, slug }: { data: ServiceData; slug: string }) {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 md:px-8 border-b border-border overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 30% 40%, hsla(250, 70%, 20%, 0.45) 0%, transparent 70%)",
          }}
        />

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xs uppercase tracking-[0.3em] text-primary mb-6 block"
          >
            Service / {slug.replace(/-/g, " ")}
          </motion.span>

          <div className="overflow-hidden mb-10">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-6xl md:text-9xl font-semibold leading-none"
            >
              <motion.div variants={slideUp}>{data.title}</motion.div>
              <motion.div variants={slideUp}>
                <em className="font-display italic font-normal text-foreground/70">
                  {data.italicTitle}
                </em>
              </motion.div>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="max-w-lg space-y-3"
            >
              <h2 className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
                {data.tagline}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {data.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-start md:justify-end"
            >
              <a href="https://calendly.com/rajcodes733/30min" target="_blank" rel="noopener noreferrer">
                <button className="rounded-full bg-primary text-primary-foreground px-10 py-4 text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_60px_-15px_hsl(72_100%_50%/0.3)]">
                  Book a Call
                </button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-16"
          >
            The Methodology
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-4 gap-px border-l border-border bg-border"
          >
            {data.process.map((step) => (
              <motion.div
                key={step.id}
                variants={slideUp}
                className="group bg-background border-r border-b md:border-b-0 border-border p-10 relative hover:bg-secondary/30 transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="text-5xl font-display italic text-primary/20 group-hover:text-primary/60 transition-colors duration-500 block mb-8">
                  {step.id}
                </span>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              What we bring
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-foreground">
              Technical{" "}
              <em className="font-display italic font-normal">Prowess</em>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {data.capabilities.map((cap) => (
              <motion.div
                key={cap}
                variants={reveal}
                className="flex items-center gap-4 p-6 rounded-xl border border-border hover:border-primary/40 transition-all duration-300 bg-background"
              >
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(72_100%_50%/0.5)] flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{cap}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-semibold leading-none"
            >
              Proven{" "}
              <em className="font-display italic font-normal text-foreground/70">
                Impact
              </em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-muted-foreground max-w-xs pb-2 leading-relaxed"
            >
              Deep dives into how we&apos;ve transformed digital presence for
              industry leaders within the {data.title} space.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {data.impact.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-background overflow-hidden"
              >
                <div className="aspect-video bg-card relative overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-foreground/10 tracking-tighter font-semibold text-xl">
                        {item.category.replace(" ", "_")}_0{idx + 1}
                      </span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/15 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-10" />
                  {/* Gradient fade at bottom */}
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent z-[5]" />
                </div>

                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="max-w-[60%]">
                      <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                        {item.category}
                      </h4>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-display italic text-primary block mb-1">
                        {item.metric}
                      </span>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {item.metricLabel}
                      </p>
                    </div>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-foreground/50 group-hover:text-foreground transition-colors"
                    >
                      Visit Live Project
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-foreground/30">
                      Case Study
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-8 border-t border-border bg-card">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-16 text-center leading-tight"
          >
            Common{" "}
            <em className="font-display italic font-normal">Inquiries</em>
          </motion.h2>

          <div className="border-t border-border">
            {data.faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeQuestion === i}
                onClick={() => setActiveQuestion(activeQuestion === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 px-6 md:px-8 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 50%, hsla(72, 100%, 50%, 0.05) 0%, hsla(250, 70%, 20%, 0.35) 50%, transparent 75%)",
          }}
        />
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-semibold mb-10 leading-tight">
            Ready to{" "}
            <em className="font-display italic font-normal text-primary">
              evolve?
            </em>
          </h2>
          <a href="https://calendly.com/rajcodes733/30min" target="_blank" rel="noopener noreferrer">
            <button className="rounded-full border border-primary text-primary px-12 py-4 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-[0_0_40px_-10px_hsl(72_100%_50%/0.2)] hover:shadow-[0_0_60px_-10px_hsl(72_100%_50%/0.4)]">
              Book a Discovery Call
            </button>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
