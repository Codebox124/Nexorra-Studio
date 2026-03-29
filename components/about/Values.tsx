"use client";

import { Award, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We set the bar high and never settle. Every pixel, every line of code, every strategy is crafted with meticulous attention to detail and unwavering commitment to quality.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We push boundaries and challenge conventions. By staying ahead of trends and embracing new technologies, we create solutions that are not just current, but future-proof.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great work happens when diverse minds unite. We foster a culture of open communication, mutual respect, and shared ownership in every project we undertake.",
  },
  {
    icon: Award,
    title: "Impact",
    description:
      "We measure success by the tangible difference we make. Our work doesn't just look good — it drives results, transforms businesses, and creates lasting value.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Values = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-8 bg-background border-t border-border">
      <div className="max-w-360 mx-auto">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5"
          >
            Our Values
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-7xl font-semibold text-foreground"
          >
            What drives{" "}
            <em className="font-display italic font-normal">us</em>
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
          className="grid md:grid-cols-2 gap-px border border-border"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={item}
                className="group p-10 md:p-16 hover:bg-secondary/40 transition-all duration-500 cursor-pointer border-border"
              >
                <div className="mb-8">
                  <Icon
                    className="w-12 h-12 text-foreground/20 group-hover:text-primary/60 transition-colors duration-500"
                    strokeWidth={1}
                  />
                </div>
                <h3 className="text-3xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
