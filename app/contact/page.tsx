"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, Plus, Minus, Send, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  budget: string;
  services: string[];
  description: string;
  timeline: string;
};

const SERVICES = [
  "Web Design",
  "Development",
  "Branding",
  "SEO",
  "Motion Graphics",
  "Audit",
];
const TIMELINES = ["< 1 Month", "1-3 Months", "3-6 Months", "6+ Months"];
const BUDGETS = ["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"];

const FAQS = [
  {
    question: "What happens after I submit?",
    answer:
      "We review your inquiry within 24 hours. If we're a good fit, we'll schedule a discovery call to discuss the project in depth.",
  },
  {
    question: "What's your typical response time?",
    answer:
      "We prize clear communication. You can expect a personalized reply within 1 business day.",
  },
  {
    question: "Do you work with businesses in FinTech?",
    answer:
      "Absolutely. We specialize in taking businesses from idea to execution.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SLOW_EASE: [number, number, number, number] = [0.04, 0.62, 0.23, 0.98];

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const maskReveal: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 1, ease: EASE },
  },
};

const itemSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

const GridLabel = ({ number, text }: { number: string; text: string }) => (
  <div className="flex items-center gap-3 mb-4 opacity-50 font-mono text-[10px] sm:text-xs tracking-widest uppercase">
    <span className="text-[#9804bc]">{number}</span>
    <span>{text}</span>
  </div>
);

const RadioBox = ({
  selected,
  onClick,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
}) => (
  <motion.button
    type="button"
    onClick={onClick}
    whileTap={{ scale: 0.98 }}
    className={`relative w-full text-left p-4 sm:p-6 border transition-all duration-300 group overflow-hidden ${
      selected
        ? "bg-[#9804bc]/10 border-[#9804bc]"
        : "bg-transparent border-[#fffdf8]/10 hover:border-[#9804bc]/50"
    }`}
  >
    <div className="flex justify-between items-center relative z-10">
      <span
        className={`text-sm font-medium tracking-wide transition-colors ${
          selected ? "text-[#9804bc]" : "text-[#fffdf8]"
        }`}
      >
        {label}
      </span>
      {selected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <CheckCircle2 size={16} className="text-[#9804bc]" />
        </motion.div>
      )}
    </div>
    <div className="absolute inset-0 bg-[#fffdf8]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
  </motion.button>
);

export default function ContactQuantum() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    services: [],
    description: "",
    timeline: "",
  });
  const [loading, setLoading] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const handleServiceToggle = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit =  () => {
    if (!form.name || !form.email) {
      alert("Please fill in required fields (Name and Email)");
      return;
    }

    //console.log(form)
    /*setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    alert("Message Transmitted.");*/
  };

  return (
    <div className="min-h-screen bg-[#0c000f] text-[#fffdf8] font-sans selection:bg-[#9804bc] selection:text-white">
      {/* Background Grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fffdf8 1px, transparent 1px), linear-gradient(90deg, #fffdf8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <main className="relative z-10 grid lg:grid-cols-2 min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Left Section - Hero & Info */}
        <div className="relative lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-[#fffdf8]/10 flex flex-col justify-between overflow-hidden">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerStagger}
            className="p-6 sm:p-8 lg:p-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 lg:mb-8">
              <div className="overflow-hidden">
                <motion.div variants={maskReveal} className="block">
                  Let's create something
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div variants={maskReveal} className="block">
                  <span className="font-serif italic text-[#9804bc]">
                    extraordinary.
                  </span>
                </motion.div>
              </div>
            </h1>
            <motion.p
              variants={itemSlideUp}
              className="text-base sm:text-lg text-[#fffdf8]/60 font-light max-w-md leading-relaxed"
            >
              We merge technical precision with aesthetic elegance to qualify
              leads and start conversations that matter.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="p-6 sm:p-8 lg:p-16 space-y-8 lg:space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-mono text-[10px] text-[#fffdf8]/40 mb-3 uppercase tracking-wider">
                  Email
                </h3>
                <motion.a
                  href="mailto:nexorrastudio@gmail.com"
                  initial="initial"
                  whileHover="hover"
                  className="text-base sm:text-lg hover:text-[#9804bc] transition-colors flex items-center gap-2 w-fit break-all"
                >
                  nexorrastudio@gmail.com
                  <motion.span
                    variants={{
                      initial: { scale: 0, opacity: 0 },
                      hover: { scale: 1, opacity: 1 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-[#9804bc] shrink-0"
                  >
                    <ArrowUpRight size={14} />
                  </motion.span>
                </motion.a>
              </div>
              <div>
                <h3 className="font-mono text-[10px] text-[#fffdf8]/40 mb-3 uppercase tracking-wider">
                  Socials
                </h3>
                <div className="flex flex-wrap gap-4">
                  {["Twitter", "LinkedIn", "Instagram"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-sm border-b border-transparent hover:border-[#9804bc] hover:text-[#9804bc] transition-all pb-0.5"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="sm:hidden p-5 sm:p-6 border border-[#fffdf8]/10 bg-[#fffdf8]/[0.02]">
              <h3 className="font-mono text-[10px] text-[#fffdf8]/40 mb-4 uppercase tracking-wider">
                Office Hours
              </h3>
              <div className="flex justify-between items-center text-sm">
                <span>Mon — Fri</span>
                <span className="text-[#9804bc]">09:00 — 18:00 EST</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Form */}
        <form action="https://formsubmit.co/nexorrastudio@gmail.com" method="POST" /*onSubmit={e=>e.preventDefault()}*/ className="bg-[#0c000f]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={containerStagger}
          >
            {/* Input 01 */}
            <motion.div
              variants={itemSlideUp}
              className="border-b border-[#fffdf8]/10 p-6 sm:p-8 lg:p-16 hover:bg-[#fffdf8]/[0.02] transition-colors duration-500"
            >
              <GridLabel number="01" text="What's your name?" />
              <input
              name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent text-xl sm:text-2xl lg:text-3xl placeholder:text-[#fffdf8]/10 outline-none border-none p-0 focus:ring-0 transition-opacity duration-300 focus:opacity-100 opacity-80"
              />
            </motion.div>

            {/* Input 02 */}
            <motion.div
              variants={itemSlideUp}
              className="border-b border-[#fffdf8]/10 p-6 sm:p-8 lg:p-16 hover:bg-[#fffdf8]/[0.02] transition-colors duration-500"
            >
              <GridLabel number="02" text="What's your email?" />
              <input
              name="email"
                type="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent text-xl sm:text-2xl lg:text-3xl placeholder:text-[#fffdf8]/10 outline-none border-none p-0 focus:ring-0 transition-opacity duration-300 focus:opacity-100 opacity-80"
              />
            </motion.div>

            {/* Grid Inputs 03 & 04 */}
            <motion.div
              variants={itemSlideUp}
              className="grid sm:grid-cols-2 border-b border-[#fffdf8]/10"
            >
              <div className="p-6 sm:p-8 lg:p-12 border-b sm:border-b-0 sm:border-r border-[#fffdf8]/10">
                <GridLabel number="03" text="Company Name" />
                <input
                  type="text"
                  name="company-name"
                  placeholder="Nexorra Studio"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  className="w-full bg-transparent text-lg sm:text-xl placeholder:text-[#fffdf8]/10 outline-none"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-12">
                <GridLabel number="04" text="Budget Range" />
                <div className="relative">
                  <select
                    value={form.budget}
                    name="budget-range"
                    onChange={(e) =>
                      setForm({ ...form, budget: e.target.value })
                    }
                    className="w-full bg-transparent text-lg sm:text-xl text-[#fffdf8] outline-none cursor-pointer appearance-none"
                  >
                    <option value="" className="bg-[#0c000f]">
                      Select Range
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} className="bg-[#0c000f]">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Services 05 */}
            <motion.div
              variants={itemSlideUp}
              className="border-b border-[#fffdf8]/10 p-6 sm:p-8 lg:p-16"
            >
              <GridLabel number="05" text="I'm interested in..." />
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
                <input type="text" name="services" className="hidden" value={form.services} />
                {SERVICES.map((service) => (
                  <RadioBox
                    key={service}
                    label={service}
                    selected={form.services.includes(service)}
                    onClick={() => handleServiceToggle(service)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Timeline 06 */}
            <motion.div
              variants={itemSlideUp}
              className="border-b border-[#fffdf8]/10 p-6 sm:p-8 lg:p-16"
            >
              <GridLabel number="06" text="Ideal Timeline" />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
                <input type="text" name="ideal-timeline" className="hidden" value={form.timeline} />
                {TIMELINES.map((time) => (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    key={time}
                    type="button"
                    onClick={() => setForm({ ...form, timeline: time })}
                    className={`py-3 px-2 sm:px-4 text-xs sm:text-sm border transition-all duration-300 ${
                      form.timeline === time
                        ? "border-[#9804bc] bg-[#9804bc] text-white"
                        : "border-[#fffdf8]/10 hover:border-[#fffdf8]/40 text-[#fffdf8]/60"
                    }`}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Description 07 */}
            <motion.div
              variants={itemSlideUp}
              className="border-b border-[#fffdf8]/10 p-6 sm:p-8 lg:p-16"
            >
              <GridLabel number="07" text="Project Details" />
              <textarea
              name="project-details"
                rows={4}
                placeholder="Tell us about the project..."
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full bg-transparent text-lg lg:text-xl placeholder:text-[#fffdf8]/10 outline-none resize-none leading-relaxed focus:placeholder:text-[#fffdf8]/20 transition-all"
              />
            </motion.div>

            {/* Submit Footer */}
            <motion.div
              variants={itemSlideUp}
              className="p-6 sm:p-8 lg:p-16 bg-[#fffdf8] text-[#0c000f] flex flex-col sm:flex-row justify-between items-center gap-8"
            >
              <div className="max-w-xs text-center sm:text-left">
                <p className="font-serif italic text-lg leading-tight">
                  "Good design is obvious. Great design is transparent."
                </p>
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={loading}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto px-10 py-5 sm:py-6 bg-[#0c000f] text-white text-lg font-medium overflow-hidden min-w-[200px]"
              >
                <div className="absolute inset-0 w-full h-full bg-[#9804bc] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? "Processing..." : "Send Request"}
                  {!loading && <Send size={18} />}
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* FAQ Section */}
          <div className="border-t border-[#fffdf8]/10 bg-[#0c000f]">
            <div className="p-6 sm:p-8 lg:p-16">
              <GridLabel number="FAQ" text="Common Questions" />
              <div className="mt-8 space-y-4">
                {FAQS.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="border border-[#fffdf8]/10 bg-[#fffdf8]/[0.02]"
                  >
                    <button
                      onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                    >
                      <span className="text-sm sm:text-base font-medium pr-4">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: faqOpen === idx ? 180 : 0 }}
                        className="text-[#9804bc] shrink-0"
                      >
                        {faqOpen === idx ? (
                          <Minus size={16} />
                        ) : (
                          <Plus size={16} />
                        )}
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {faqOpen === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.4, ease: SLOW_EASE },
                              opacity: { duration: 0.25, delay: 0.15 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.3, ease: SLOW_EASE },
                              opacity: { duration: 0.1 },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 sm:p-6 pt-0 text-[#fffdf8]/60 text-sm leading-relaxed max-w-lg">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
