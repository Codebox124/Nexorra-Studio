"use client";
import { motion } from "framer-motion";

const clients = [
  "TECHFLOW", "LUXE", "FINANCEAI", "MEDIAHUB",
  "INNOVATE", "NEXUS", "QUANTUM", "APEX",
  "VERTEX", "STELLAR", "MOMENTUM", "PINNACLE",
];

const Partners = () => {
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
            Our Clients
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-7xl font-semibold text-foreground mb-6"
          >
            Trusted by industry{" "}
            <em className="font-display italic font-normal">leaders</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            We&apos;re proud to partner with forward-thinking brands
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border"
        >
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="aspect-square flex items-center justify-center hover:bg-secondary/40 transition-all duration-300 cursor-pointer group"
            >
              <span className="text-sm font-semibold text-foreground/25 group-hover:text-foreground/50 transition-colors tracking-[0.2em]">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
