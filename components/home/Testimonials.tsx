"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Great work from Raji, trustworthy product for us. Problem solved exactly as needed.",
    author: "Apilko",
    role: "Client",
    company: "Australia",
    initials: "AU",
  },
  {
    quote: "Great buyer to work with. I ordered a website calculator and it was delivered very fast. If you need someone reliable, he is the right person.",
    author: "Code_box121",
    role: "Client",
    company: "Nigeria",
    initials: "NG",
  },
  {
    quote: "Raji did an absolutely amazing job creating my website. From the start, he understood exactly what I was looking for and brought my vision to life perfectly. His attention to detail and professionalism stood out. The final result exceeded my expectations.",
    author: "Ryan M.",
    role: "Client",
    company: "Iqballaz Customs",
    initials: "IQ",
  },
  {
    quote: "Raji delivered an excellent restaurant website for Lafun NG. The design was clean, modern, and perfectly matched our brand. The site improved our online presence and made it easier for customers to engage with us.",
    author: "Lafun NG",
    role: "Restaurant Owner",
    company: "Lafun NG",
    initials: "LN",
  },
  {
    quote: "Raji helped recover and rebuild our website that had been abandoned since 2008. He modernized the platform, restored functionality, and brought the project back to life with great attention to detail. Truly impressive work.",
    author: "Mr. Atiyebi",
    role: "Client",
    company: "Vote United",
    initials: "MA",
  },
];

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4"
          >
            What clients say
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-foreground"
          >
            Client{" "}
            <em className="font-display italic font-normal">Love</em>
          </motion.h2>
        </div>

        {/* Testimonial carousel */}
        <div className="relative min-h-96">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ${
                activeIdx === idx
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <div className="text-center">
                {/* Initials avatar */}
                <div className="w-14 h-14 mx-auto mb-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <span className="text-sm font-semibold text-foreground/60">
                    {t.initials}
                  </span>
                </div>

                <blockquote className="text-2xl md:text-3xl font-light text-foreground/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div>
                  <p className="text-base font-semibold text-foreground mb-1">{t.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === idx ? "w-10 bg-primary" : "w-2 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
