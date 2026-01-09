"use client"
import { motion } from "framer-motion";
import { fromRightToLeft, fromTopToBottom } from "../Animations";
const MissionVision = () => {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid md:grid-cols-2 gap-24">
          <motion.div
           initial={fromTopToBottom.initial}
                      whileInView={fromTopToBottom.whileInView}
                      transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                      }}
          >
            <p className="text-sm uppercase tracking-widest font-medium text-white/40 mb-8">Our Mission</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter leading-[1.1]">
              Empowering brands to lead their industries
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              We believe every brand has the potential to set industry standards. Our mission is to unlock that potential through innovative design, strategic thinking, and technical excellence.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              We don't just build websites and apps—we craft experiences that transform businesses and inspire audiences.
            </p>
          </motion.div>

          <motion.div
           initial={fromRightToLeft.initial}
            whileInView={fromRightToLeft.whileInView}
            transition={{
                duration: 0.7,
                ease: "easeInOut",
            }}
          >
            <p className="text-sm uppercase tracking-widest font-medium text-white/40 mb-8">Our Vision</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter leading-[1.1]">
              Redefining what's possible in digital
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              We envision a future where digital experiences are seamless, intuitive, and profoundly impactful. Where technology serves humanity and design elevates everyday interactions.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              Through relentless innovation and unwavering commitment to quality, we're building that future one project at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision

