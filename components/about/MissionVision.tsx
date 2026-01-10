"use client"
import { motion } from "framer-motion"
import { fromRightToLeft, fromTopToBottom } from "../Animations"

const MissionVision = () => {
  return (
    <section className="md:py-40 pt-10 px-2 bg-[#0c000f]">
      <div className=" w-[90%] mx-auto">
        <div className="grid md:grid-cols-2 gap-24">

          {/* Mission */}
          <motion.div
            initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <p className="text-sm uppercase tracking-widest font-medium text-white/40 mb-8">
              Our Mission
            </p>

            <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 tracking-tighter leading-[1.1]">
              Helping ambitious brands
              build software that scales
            </h2>

            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Our mission is to partner with founders and growing teams to
              design and build digital products that are reliable, scalable,
              and built for real-world impact.
            </p>

            <p className="text-xl text-white/70 leading-relaxed">
              We go beyond visuals and code combining strategy, design,
              and engineering to help brands move faster, compete smarter,
              and grow sustainably.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={fromRightToLeft.initial}
            whileInView={fromRightToLeft.whileInView}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <p className="text-sm uppercase tracking-widest font-medium text-white/40 mb-8">
              Our Vision
            </p>

            <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 tracking-tighter leading-[1.1]">
              Shaping the future of
              digital experiences
            </h2>

            <p className="text-xl text-white/70 leading-relaxed mb-8">
              We envision a digital world where products are intuitive,
              performant, and built with purpose not complexity.
              Where technology empowers businesses instead of slowing them down.
            </p>

            <p className="text-xl text-white/70 leading-relaxed">
              By holding ourselves to the highest standards of design and
              engineering, we aim to become a trusted partner for companies
              building the next generation of digital products.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default MissionVision
