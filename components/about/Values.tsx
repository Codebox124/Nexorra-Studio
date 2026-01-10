"use client"

import { Award, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fromTopToBottom } from "../Animations";
const Values = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We set the bar high and never settle. Every pixel, every line of code, every strategy is crafted with meticulous attention to detail and unwavering commitment to quality."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push boundaries and challenge conventions. By staying ahead of trends and embracing new technologies, we create solutions that are not just current, but future-proof."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great work happens when diverse minds unite. We foster a culture of open communication, mutual respect, and shared ownership in every project we undertake."
    },
    {
      icon: Award,
      title: "Impact",
      description: "We measure success by the tangible difference we make. Our work doesn't just look good—it drives results, transforms businesses, and creates lasting value."
    }
  ];

  return (
    <section className="md:py-40 md:px-8 px-2">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-24 text-center">
          <motion.p
           initial={fromTopToBottom.initial}
                      whileInView={fromTopToBottom.whileInView}
                      transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                      }}
          className="text-sm uppercase tracking-widest font-medium text-white/40 mb-6">Our Values</motion.p>
          <motion.h2
           initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{
                duration: 0.7,
                ease: "easeInOut",
            }}
          className="text-4xl md:text-8xl font-bold text-white tracking-tighter">
            What drives us
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px border border-white/10">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
               initial={fadeIn.initial}
                          whileInView={fadeIn.whileInView}
                          transition={{
                              duration: 0.7,
                              ease: "easeInOut",
                          }}
                key={idx}
                className="group md:p-16 p-7 border-white/10 hover:bg-white/5 transition-all duration-500 cursor-pointer"
              >
                <div className="mb-8">
                  <Icon className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors" strokeWidth={1} />
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">
                  {value.title}
                </h3>
                
                <p className="text-lg text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values