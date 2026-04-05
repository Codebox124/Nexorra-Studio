"use client";

import { useState } from "react";
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

const SERVICES = ["Web Design", "Development", "Branding", "SEO", "Motion Graphics", "Audit"];
const TIMELINES = ["< 1 Month", "1-3 Months", "3-6 Months", "6+ Months"];
const BUDGETS = ["$300 – $1,000", "$1,000 – $3,500", "$3,500 – $10,000", "$10,000+"];

const FAQS = [
  {
    question: "What happens after I submit?",
    answer: "We review your inquiry within 24 hours. If we're a good fit, we'll schedule a discovery call to discuss the project in depth.",
  },
  {
    question: "What's your typical response time?",
    answer: "We prize clear communication. You can expect a personalized reply within 1 business day.",
  },
  {
    question: "Do you work with businesses in FinTech?",
    answer: "Absolutely. We specialize in taking businesses from idea to execution.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SLOW_EASE: [number, number, number, number] = [0.04, 0.62, 0.23, 0.98];

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const maskReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: EASE } },
};

const itemSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const GridLabel = ({ number, text }: { number: string; text: string }) => (
  <div className="flex items-center gap-3 mb-4 opacity-50 font-mono text-[10px] sm:text-xs tracking-widest uppercase">
    <span className="text-primary">{number}</span>
    <span className="text-foreground">{text}</span>
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
    className={`relative w-full text-left p-4 sm:p-5 border transition-all duration-300 group overflow-hidden rounded-lg ${
      selected
        ? "bg-primary/10 border-primary"
        : "bg-transparent border-border hover:border-primary/40"
    }`}
  >
    <div className="flex justify-between items-center relative z-10">
      <span className={`text-sm font-medium transition-colors ${selected ? "text-primary" : "text-foreground"}`}>
        {label}
      </span>
      {selected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <CheckCircle2 size={15} className="text-primary" />
        </motion.div>
      )}
    </div>
  </motion.button>
);

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", company: "", budget: "",
    services: [], description: "", timeline: "",
  });
  const [loading] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const handleServiceToggle = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) {
      alert("Please fill in required fields (Name and Email)");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Grid bg */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220,15%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(220,15%,50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <main className="relative z-10 grid lg:grid-cols-2 min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Left — Hero & Info */}
        <div className="relative lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between overflow-hidden">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerStagger}
            className="p-6 sm:p-8 lg:p-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.1] mb-6 lg:mb-8">
              <div className="overflow-hidden">
                <motion.div variants={maskReveal} className="block">
                  Let&apos;s create something
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div variants={maskReveal} className="block">
                  <em className="font-display italic font-normal text-primary">
                    extraordinary.
                  </em>
                </motion.div>
              </div>
            </h1>
            <motion.p
              variants={itemSlideUp}
              className="text-sm text-muted-foreground max-w-md leading-relaxed"
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
                <h3 className="font-mono text-[10px] text-muted-foreground mb-3 uppercase tracking-wider">
                  Email
                </h3>
                <motion.a
                  href="mailto:nexorrastudio@gmail.com"
                  initial="initial"
                  whileHover="hover"
                  className="text-sm sm:text-base hover:text-primary transition-colors flex items-center gap-2 w-fit break-all"
                >
                  nexorrastudio@gmail.com
                  <motion.span
                    variants={{ initial: { scale: 0, opacity: 0 }, hover: { scale: 1, opacity: 1 } }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-primary shrink-0"
                  >
                    <ArrowUpRight size={14} />
                  </motion.span>
                </motion.a>
              </div>
              <div>
                <h3 className="font-mono text-[10px] text-muted-foreground mb-3 uppercase tracking-wider">
                  Socials
                </h3>
                <div className="flex flex-wrap gap-4">
                  {["Twitter", "LinkedIn", "Instagram"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-sm border-b border-transparent hover:border-primary hover:text-primary transition-all pb-0.5 text-foreground/70"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — Form */}
        <form
          action="https://formsubmit.co/nexorrastudio@gmail.com"
          method="POST"
          className="bg-background"
        >
          <input type="hidden" name="_next" value="https://www.nexorrastudio.com/form-submitted" />
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }} variants={containerStagger}>

            {/* 01 — Name */}
            <motion.div variants={itemSlideUp} className="border-b border-border p-6 sm:p-8 lg:p-16 hover:bg-secondary/20 transition-colors duration-500">
              <GridLabel number="01" text="What's your name?" />
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent text-xl sm:text-2xl lg:text-3xl placeholder:text-foreground/10 outline-none border-none p-0 focus:ring-0 opacity-80 focus:opacity-100 transition-opacity text-foreground"
              />
            </motion.div>

            {/* 02 — Email */}
            <motion.div variants={itemSlideUp} className="border-b border-border p-6 sm:p-8 lg:p-16 hover:bg-secondary/20 transition-colors duration-500">
              <GridLabel number="02" text="What's your email?" />
              <input
                name="email"
                type="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent text-xl sm:text-2xl lg:text-3xl placeholder:text-foreground/10 outline-none border-none p-0 focus:ring-0 opacity-80 focus:opacity-100 transition-opacity text-foreground"
              />
            </motion.div>

            {/* 03 & 04 */}
            <motion.div variants={itemSlideUp} className="grid sm:grid-cols-2 border-b border-border">
              <div className="p-6 sm:p-8 lg:p-12 border-b sm:border-b-0 sm:border-r border-border">
                <GridLabel number="03" text="Company Name" />
                <input
                  type="text"
                  name="company-name"
                  placeholder="Nexorra Studio"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-transparent text-lg sm:text-xl placeholder:text-foreground/10 outline-none text-foreground"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-12">
                <GridLabel number="04" text="Budget Range" />
                <select
                  value={form.budget}
                  name="budget-range"
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full bg-transparent text-lg sm:text-xl text-foreground outline-none cursor-pointer appearance-none"
                >
                  <option value="" className="bg-background">Select Range</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b} className="bg-background">{b}</option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* 05 — Services */}
            <motion.div variants={itemSlideUp} className="border-b border-border p-6 sm:p-8 lg:p-16">
              <GridLabel number="05" text="I'm interested in..." />
              <input type="text" name="services" className="hidden" value={form.services} readOnly />
              <div className="grid grid-cols-2 gap-3 mt-6">
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

            {/* 06 — Timeline */}
            <motion.div variants={itemSlideUp} className="border-b border-border p-6 sm:p-8 lg:p-16">
              <GridLabel number="06" text="Ideal Timeline" />
              <input type="text" name="ideal-timeline" className="hidden" value={form.timeline} readOnly />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
                {TIMELINES.map((time) => (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    key={time}
                    type="button"
                    onClick={() => setForm({ ...form, timeline: time })}
                    className={`py-3 px-3 text-xs sm:text-sm border rounded-lg transition-all duration-300 ${
                      form.timeline === time
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/40 text-muted-foreground"
                    }`}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* 07 — Description */}
            <motion.div variants={itemSlideUp} className="border-b border-border p-6 sm:p-8 lg:p-16">
              <GridLabel number="07" text="Project Details" />
              <textarea
                name="project-details"
                rows={4}
                placeholder="Tell us about the project..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full bg-transparent text-lg lg:text-xl placeholder:text-foreground/10 outline-none resize-none leading-relaxed text-foreground"
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              variants={itemSlideUp}
              className="p-6 sm:p-8 lg:p-16 bg-secondary/30 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-8"
            >
              <div className="max-w-xs text-center sm:text-left">
                <p className="font-display italic text-lg text-foreground/70 leading-tight">
                  &ldquo;Good design is obvious. Great design is transparent.&rdquo;
                </p>
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={loading}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto rounded-full bg-primary text-primary-foreground px-10 py-4 text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_60px_-15px_hsl(72_100%_50%/0.4)] min-w-48 flex items-center justify-center gap-2"
              >
                {loading ? "Processing..." : "Send Request"}
                {!loading && <Send size={15} />}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* FAQ */}
          <div className="border-t border-border bg-background">
            <div className="p-6 sm:p-8 lg:p-16">
              <GridLabel number="FAQ" text="Common Questions" />
              <div className="mt-8 space-y-3">
                {FAQS.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="border border-border rounded-xl bg-card"
                  >
                    <button
                      onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                    >
                      <span className="text-sm sm:text-base font-medium text-foreground pr-4">
                        {faq.question}
                      </span>
                      <motion.span animate={{ rotate: faqOpen === idx ? 180 : 0 }} className="text-primary shrink-0">
                        {faqOpen === idx ? <Minus size={15} /> : <Plus size={15} />}
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {faqOpen === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.4, ease: SLOW_EASE }, opacity: { duration: 0.25, delay: 0.15 } } }}
                          exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.3, ease: SLOW_EASE }, opacity: { duration: 0.1 } } }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 sm:p-6 pt-0 text-muted-foreground text-sm leading-relaxed max-w-lg">
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
