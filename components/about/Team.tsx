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
      role: "Founder & Fullstack Developer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatum.",
      initials: "AC",
      link:"#"
    },
    {
      name: "Olaiwon Abdullahi",
      role: "Fullstack Developer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatum.",
      initials: "OA",
      link:"#"
    },
    {
      name: "Oyedeji Uzaymah",
      role: "Frontend Developer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatum.",
      initials: "OU",
      link:"#"
    },
    {
      name: "Adebayo Enoch",
      role: "Frontend Developer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatum.",
      initials: "AE",
      link:"#"
    },
    {
      name: "Meekah Bossman",
      role: "Graphics Designer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatum.",
      initials: "MB",
      link:"#"
    },
    {
      name: "Johnathan Destine",
      role: "Frontend Developer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatum.",
      initials: "JD",
      link:"#"
    }
  ];

  return (
    <section className="py-40 px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-24">
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
          className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
            The minds behind<br />the magic
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
                
                <div className={`absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                  hoveredMember === idx ? 'opacity-100' : 'opacity-0'
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
              
              <p className={`text-sm text-white/50 transition-all duration-500 ${
                hoveredMember === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
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