"use client"
import { ArrowDownRight } from "lucide-react"
import React from "react"
import { motion } from "framer-motion"
import { fromRightToLeft, fromTopToBottom } from "../Animations"

function OurStory() {
  return (
    <section className="md:py-24 bg-black text-white">
      <div className="w-[90%] flex flex-col md:flex-row justify-between mx-auto gap-10">
        
        {/* Section Title */}
        <motion.h2
          initial={fromTopToBottom.initial}
          whileInView={fromTopToBottom.whileInView}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex items-start text-5xl font-sora h-fit"
        >
          Our Story
          <ArrowDownRight className="w-14 h-14 mt-3 ml-2 text-[#a21dc3]" />
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={fromRightToLeft.initial}
          whileInView={fromRightToLeft.whileInView}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full md:w-[42%] flex flex-col gap-4"
        >
          <h3 className="text-xl font-medium leading-snug">
            Nexorra was born from a simple belief  great software
            should solve real problems and scale with ambition.
          </h3>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We started Nexorra to help founders, startups, and growing teams
            turn ideas into reliable digital products without unnecessary
            complexity. Too many products fail not because of bad ideas,
            but because of poor execution.
            <br /><br />
            Our approach is rooted in clarity, strategy, and strong engineering.
            We take time to understand the problem, design with intention,
            and build systems that are fast, secure, and ready to grow.
            <br /><br />
            Whether it’s an MVP, a SaaS platform, or a complex web or mobile
            application, we focus on delivering software that performs,
            scales, and creates real business impact.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default OurStory
