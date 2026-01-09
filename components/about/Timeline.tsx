"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { fromRightToLeft, fromTopToBottom } from "../Animations";

const Timeline = () => {
  const [activeYear, setActiveYear] = useState<any>(null);

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded with a vision to transform digital experiences. Launched our first project with a Fortune 500 client.",
      achievement: "3 team members, 5 projects"
    },
    {
      year: "2021",
      title: "Breaking Barriers",
      description: "Expanded our services and won our first industry award. Grew team to 15 talented professionals.",
      achievement: "Award: Best Digital Agency"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Opened offices in three continents. Worked with 50+ clients across various industries.",
      achievement: "50+ projects, 3 offices"
    },
    {
      year: "2023",
      title: "Innovation Leaders",
      description: "Launched proprietary design system. Recognized as industry thought leaders.",
      achievement: "100+ projects delivered"
    },
    {
      year: "2024",
      title: "Setting Standards",
      description: "Became the go-to agency for Fortune 500 companies. Team grew to 50+ professionals.",
      achievement: "Industry benchmark status"
    }
  ];

  return (
    <section className="py-40 px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-24 text-center">
          <motion.p
           initial={fromTopToBottom.initial}
                      whileInView={fromTopToBottom.whileInView}
                      transition={{
                          duration: 0.7,
                          ease: "easeInOut",
                      }}
          className="text-sm uppercase tracking-widest font-medium text-white/40 mb-6">Our Journey</motion.p>
          <motion.h2
           initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{
                duration: 0.7,
                ease: "easeInOut",
            }}
          className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
            Milestones that<br />shaped us
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {milestones.map((milestone, idx) => (
            <motion.div
             initial={fromRightToLeft.initial}
                        whileInView={fromRightToLeft.whileInView}
                        transition={{
                            duration: 0.7,
                            ease: "easeInOut",
                        }}
              key={idx}
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
  );
};

export default Timeline