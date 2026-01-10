"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { fromRightToLeft, fromTopToBottom } from "../Animations"

const Timeline = () => {
  const [activeYear, setActiveYear] = useState<any>(null)

  const milestones = [
    {
      year: "2022",
      title: "The Foundation",
      description:
        "Nexorra was founded as a solo venture with a clear focus on building clean, reliable web solutions. The year was dedicated to sharpening technical expertise, shipping real products, and laying a strong foundation.",
      achievement: "Founder-led • Web development focus"
    },
    {
      year: "2023",
      title: "First Growth Phase",
      description:
        "With growing demand and larger project scope, the team expanded for the first time. Nexorra began evolving beyond web development, introducing mobile app development and visual design services.",
      achievement: "Team expansion • New services launched"
    },
    {
      year: "2024",
      title: "Expanding Capabilities",
      description:
        "Nexorra transitioned into a multi-disciplinary digital studio. We refined our processes, strengthened our design systems, and delivered end-to-end solutions across web, mobile, and branding.",
      achievement: "Full-service digital studio"
    },
    {
      year: "2025",
      title: "Building for Scale",
      description:
        "Focused on scalability, performance, and long-term partnerships. Nexorra now collaborates closely with startups and growing businesses to build products designed for growth and sustainability.",
      achievement: "Product-led & growth-focused"
    }
  ]

  return (
    <section className="py-40 px-8 bg-black">
      <div className="max-w-[90rem] mx-auto">
        
        {/* Heading */}
        <div className="mb-24 text-center">
          <motion.p
            initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-sm uppercase tracking-widest font-medium text-white/40 mb-6"
          >
            Our Journey
          </motion.p>

          <motion.h2
            initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter"
          >
            The path that <br /> shaped Nexorra
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className=" mx-auto">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={fromRightToLeft.initial}
              whileInView={fromRightToLeft.whileInView}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="group relative pl-16 pb-24 border-l-2 border-white/10 last:pb-0 cursor-pointer"
              onMouseEnter={() => setActiveYear(milestone.year)}
              onMouseLeave={() => setActiveYear(null)}
            >
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-white rounded-full transition-all duration-300 group-hover:scale-150" />

              <div className="transition-all duration-500 group-hover:translate-x-4">
                <span className="text-8xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                  {milestone.year}
                </span>

                <h3 className="text-4xl font-bold text-white mt-6 mb-4 tracking-tight">
                  {milestone.title}
                </h3>

                <p className="text-lg text-white/70 mb-4 leading-relaxed max-w-2xl">
                  {milestone.description}
                </p>

                <p className="text-sm uppercase tracking-widest font-medium text-white/40">
                  {milestone.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Timeline
