"use client"
import { motion } from "framer-motion";
import { fromTopToBottom } from "../Animations";
const Partners = () => {
  const clients = [
    "TECHFLOW", "LUXE", "FINANCEAI", "MEDIAHUB",
    "INNOVATE", "NEXUS", "QUANTUM", "APEX",
    "VERTEX", "STELLAR", "MOMENTUM", "PINNACLE"
  ];

  return (
    <section className="md:py-40 px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-24 text-center">
          <motion.p
           initial={fromTopToBottom.initial}
                      whileInView={fromTopToBottom.whileInView}
                      transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                      }}
          className="text-sm uppercase tracking-widest font-medium text-white/40 mb-6">Our Clients</motion.p>
          <motion.h2
           initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{
                duration: 0.7,
                ease: "easeInOut",
            }}
          className="text-4xl md:text-8xl font-bold text-white tracking-tighter mb-8">
            Trusted by industry<br />leaders
          </motion.h2>
          <motion.p
           initial={fromTopToBottom.initial}
                      whileInView={fromTopToBottom.whileInView}
                      transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                      }}
          className="text-base text-white/60">
            We're proud to partner with forward-thinking brands
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-white/10">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="aspect-square flex items-center justify-center border-white/10 hover:bg-white/5 transition-all duration-300 cursor-pointer group"
            >
              <span className="text-xl font-bold text-white/30 group-hover:text-white/50 transition-colors tracking-wider">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Partners