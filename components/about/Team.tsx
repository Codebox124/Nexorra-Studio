"use client"

import { Linkedin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fromTopToBottom } from "../Animations";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<any>(null);

  const teamMembers = [
    {
      name: "Raji Roqeeb",
      role: "Technical Lead ",
      bio: "Founder of Nexorra with a strong focus on building scalable, high-performance web and mobile products. Passionate about clean architecture, product strategy, and turning ideas into reliable digital solutions.",
      initials: "RR",
      link: "#"
    },
    {
      name: "Olaiwon Abdullahi",
      role: "Fullstack Developer",
      bio: "Fullstack developer experienced in building robust backend systems and intuitive user interfaces. Focused on performance, security, and maintainable codebases.",
      initials: "OA",
      link: "#"
    },
    {
      name: "Oyedeji Uzaymah",
      role: "Frontend Developer",
      bio: "Frontend developer dedicated to crafting responsive, user-friendly interfaces with modern frameworks. Strong attention to detail and user experience.",
      initials: "OU",
      link: "#"
    },
    {
      name: "Adebayo Enoch",
      role: "Frontend Developer",
      bio: "Frontend engineer focused on building clean, accessible, and visually consistent interfaces that align with product goals and brand identity.",
      initials: "AE",
      link: "#"
    },
    {
      name: "Meekah Bossman",
      role: "Graphics Designer",
      bio: "Creative designer responsible for visual identity, brand assets, and marketing creatives. Focused on clarity, consistency, and impactful design.",
      initials: "MB",
      link: "#"
    },
    {
      name: "Johnathan Destine",
      role: "Frontend Developer",
      bio: "Frontend developer with a strong eye for layout and interaction. Builds smooth, engaging user experiences with performance in mind.",
      initials: "JD",
      link: "#"
    }
  ];


  return (
    <section className="md:py-40 py-10 px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="md:mb-24 mb-12 text-center">
          <motion.p
            initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="text-sm uppercase tracking-widest font-medium text-white/40 mb-6">Our Team</motion.p>
          <motion.h2
            initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="text-4xl md:text-8xl font-bold text-white tracking-tighter">
            The minds behind the magic
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              initial={fromTopToBottom.initial}
              whileInView={fromTopToBottom.whileInView}
              transition={{
                duration: 0.7,
                ease: "easeInOut"
              }}
              key={idx}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredMember(idx)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="aspect-square bg-white/5 border border-white/10 mb-6 flex items-center justify-center overflow-hidden relative">
                <span className="text-6xl font-bold text-white/10 transition-all duration-500 group-hover:scale-110">
                  {member.initials}
                </span>

                <div className={`absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${hoveredMember === idx ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <a
                    href={member.link}
                    className="w-12 h-12 bg-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-6 h-6 text-black" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                {member.name}
              </h3>

              <p className="text-white/60 mb-3">
                {member.role}
              </p>

              <p className={`text-sm text-white/50 transition-all duration-500 ${hoveredMember === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team