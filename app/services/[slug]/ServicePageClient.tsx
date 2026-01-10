"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { ServiceData } from "@/lib/services-data";

const transition = { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const };

const slideUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition },
};

const staggerContainer: Variants = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const reveal: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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
}) => {
  return (
    <div className="group border-b border-[#fffdf8]/10 font-nunito">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left outline-none"
      >
        <span
          className={`text-lg font-light transition-colors duration-300 uppercase tracking-tight ${
            isOpen
              ? "text-[#9804bc]"
              : "text-[#fffdf8] group-hover:text-[#9804bc]/70"
          }`}
        >
          {question}
        </span>
        <div className="relative w-6 h-6">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#fffdf8]/40" />
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.4, ease: "anticipate" }}
            className="absolute top-0 left-1/2 w-[1px] h-full bg-[#fffdf8]/40 origin-center"
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-[#fffdf8]/50 leading-relaxed max-w-2xl text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ServicePageClient({
  data,
  slug,
}: {
  data: ServiceData;
  slug: string;
}) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    null
  );
  const { scrollY } = useScroll();

  const heroTextY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <main className="bg-[#0c000f] text-[#fffdf8] min-h-screen selection:bg-[#9804bc]/30 font-nunito">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[0] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 border-b border-[#fffdf8]/10 overflow-hidden">
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[#9804bc] tracking-[0.2em] uppercase text-xs font-bold mb-6 block font-nunito"
          >
            Service / {slug.replace("-", " ")}
          </motion.span>

          <div className="overflow-hidden mb-12">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-6xl md:text-9xl font-light leading-none uppercase font-sora"
            >
              <motion.div variants={slideUp}>
                {data.title} <br />
              </motion.div>
              <motion.div variants={slideUp}>
                <span className="italic font-serif lowercase text-[#9804bc]">
                  {data.italicTitle}
                </span>
              </motion.div>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:items-end font-nunito">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-lg space-y-4"
            >
              <h2 className="text-[#9804bc] font-bold uppercase text-sm tracking-widest">
                {data.tagline}
              </h2>
              <p className="text-xl text-[#fffdf8]/60 leading-relaxed">
                {data.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-start md:justify-end"
            >
              <button className="relative px-12 py-5 bg-[#9804bc] text-white font-bold uppercase tracking-tighter overflow-hidden group font-nunito">
                <div className="absolute inset-0 bg-[#fffdf8] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                <span className="relative z-10 group-hover:text-[#0c000f] transition-colors duration-500">
                  Start a Project
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-[#fffdf8]/40 mb-20 font-nunito"
          >
            The Methodology
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l border-[#fffdf8]/10"
          >
            {data.process.map((step) => (
              <motion.div
                key={step.id}
                variants={slideUp}
                className="group border-r border-b md:border-b-0 border-[#fffdf8]/10 p-10 relative transition-colors duration-500 hover:bg-[#fffdf8]/[0.02]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9804bc] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <span className="text-5xl font-serif italic text-[#9804bc]/20 group-hover:text-[#9804bc] transition-colors duration-500 block mb-8">
                  {step.id}
                </span>
                <h3 className="text-2xl font-light mb-4 uppercase tracking-tight font-sora">
                  {step.title}
                </h3>
                <p className="text-[#fffdf8]/50 leading-relaxed text-sm font-nunito">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 px-6 bg-[#fffdf8]/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <h2 className="text-4xl font-light leading-tight uppercase font-sora">
              Technical <br /> Prowess
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 font-nunito"
          >
            {data.capabilities.map((cap) => (
              <motion.div
                key={cap}
                variants={reveal}
                className="flex items-center gap-4 p-6 border border-[#fffdf8]/10 cursor-default transition-all duration-300 hover:border-[#9804bc]/40"
              >
                <div className="w-2 h-2 bg-[#9804bc] shadow-[0_0_10px_#9804bc]" />
                <span className="text-lg font-light tracking-wide">{cap}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 px-6 border-t border-[#fffdf8]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-light uppercase leading-none font-sora"
            >
              Proven <br />{" "}
              <span className="italic font-serif lowercase">Impact</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#fffdf8]/50 max-w-xs pb-2 font-nunito"
            >
              Deep dives into how we’ve transformed digital presence for
              industry leaders within the {data.title} space.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#fffdf8]/10 border border-[#fffdf8]/10 font-nunito">
            {data.impact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[#0c000f] overflow-hidden"
              >
                <div className="aspect-video bg-[#fffdf8]/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#9804bc]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1] z-10" />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-1000">
                    <span className="text-[#fffdf8]/20 tracking-tighter uppercase font-bold text-xl z-0 font-sora">
                      {item.category.replace(" ", "_")}_0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-10 relative z-20 bg-[#0c000f]">
                  <div className="flex justify-between items-start mb-6">
                    <div className="max-w-[60%]">
                      <h4 className="text-sm font-bold tracking-[0.2em] text-[#9804bc] uppercase mb-2">
                        {item.category}
                      </h4>
                      <h3 className="text-2xl font-light uppercase group-hover:text-[#9804bc] transition-colors duration-300 leading-tight font-sora">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="text-3xl font-serif italic block mb-1">
                        {item.metric}
                      </span>
                      <p className="text-[10px] uppercase tracking-widest text-[#fffdf8]/40">
                        {item.metricLabel}
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 group/btn text-sm uppercase tracking-widest font-bold text-[#fffdf8]/60 group-hover:text-[#fffdf8] transition-colors font-nunito">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 border-t border-[#fffdf8]/10 bg-[#0c000f]">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light uppercase mb-16 text-center tracking-tighter font-sora"
          >
            Common Inquiries
          </motion.h2>

          <div className="border-t border-[#fffdf8]/10 font-nunito">
            {data.faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeQuestionIndex === i}
                onClick={() =>
                  setActiveQuestionIndex(activeQuestionIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <h2 className="text-5xl md:text-7xl font-light uppercase mb-12 font-sora">
            Ready to{" "}
            <span className="italic font-serif text-[#9804bc]">evolve?</span>
          </h2>
          <button className="px-16 py-6 bg-transparent border border-[#9804bc] text-[#9804bc] font-bold uppercase tracking-widest hover:bg-[#9804bc] hover:text-[#fffdf8] transition-all duration-500 hover:shadow-[0_0_40px_-10px_#9804bc] font-nunito">
            Book a Discovery Call
          </button>
        </motion.div>
      </section>
    </main>
  );
}
