"use client"

import { image } from "framer-motion/client";
import { ArrowRight, MoveRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fromLeftToRight, fromTopToBottom } from "../Animations";
const FeaturedWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  
  const projects = [
    {
      client: "TechFlow",
      name: "Global SaaS Platform",
      category: "Product Design & Development",
      image:"bg-[url(/hero.svg)]"
      /*image: "bg-gradient-to-br from-blue-500 to-cyan-500"*/
    },
    {
      client: "Luxe",
      name: "E-commerce Revolution",
      category: "Brand & Digital Experience",
      image:"bg-[url(/hero.svg)]"
     /* image: "bg-gradient-to-br from-purple-500 to-pink-500"*/
    },
    {
      client: "FinanceAI",
      name: "Next-Gen Banking App",
      category: "Mobile & Web Application",
      image:"bg-[url(/hero.svg)]"
      /*image: "bg-gradient-to-br from-green-500 to-emerald-500"*/
    },
    {
      client: "MediaHub",
      name: "Content Platform Redesign",
      category: "UX Strategy & Design",
      image:"bg-[url(/hero.svg)]"
      /*image: "bg-gradient-to-br from-orange-500 to-red-500"*/
    }
  ];

  return (
    <section className="py-32 px-6  mx-auto bg-black">
      <div className="max-w-7xl mx-auto w-[90%]">
        <div className="mb-16 flex flex-col md:flex-row gap-5 md:items-center justify-between">
          <motion.div
          initial={fromTopToBottom.initial}
                  whileInView={fromTopToBottom.whileInView}
                  
                 transition={{
                      duration:0.7,
                      ease:"easeInOut"
                  }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-white/60">
            Transformative projects that moved the needle
          </p>
          </motion.div>
          <motion.span
          initial={fromTopToBottom.initial}
        whileInView={fromTopToBottom.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
          >
            <Link className="text-white border-white border-[1px] px-5 py-2 cursor-pointer rounded-full" href={"/work"}>View All</Link>
          </motion.span>
        </div>
        
        <div className="flex flex-col  gap-12">
          {projects.map((project:any, idx:number) => (
            <motion.div
            initial={fromLeftToRight.initial}
        whileInView={fromLeftToRight.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
            onMouseOver={()=>{setHoveredIndex(idx)}} onMouseLeave={()=>{setHoveredIndex(null)}} key={idx} className="text-white cursor-pointer border-t-[1px] border-t-white py-6 flex flex-col md:flex-row gap-3 h-[500px] md:h-[260px] ">
                <motion.div
                initial={{backgroundSize:"100%"}}
                animate={{
                    backgroundSize:`${hoveredIndex===idx?"110%":"100%"}`
                }}
                transition={{
                    duration: 0.3,
                    ease:"easeInOut"
                }}
                className={`w-full md:w-[30%] h-[70%] md:h-full ${project.image} bg-cover bg-center bg-no-repeat`} />
                <div className="flex flex-col gap-3 justify-between">
                    <h2 className={`text-4xl md:text-6xl font-sora cursor-pointer ${hoveredIndex === idx ? 'underline' : ''}`}>{project.name}</h2>
                    <span className="text-sm font-sora">{project.category}</span>
                </div>
                <ArrowRight className="ml-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturedWork