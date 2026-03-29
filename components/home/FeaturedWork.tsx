"use client"

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const FeaturedWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      client: "TechFlow",
      name: "Global SaaS Platform",
      category: "Product Design & Development",
      image: "bg-[url(/saas.jpg)]"
    },
    {
      client: "Luxe",
      name: "E-commerce Revolution",
      category: "Brand & Digital Experience",
      image: "bg-[url(/eccom.jpg)]"
    },
    {
      client: "FinanceAI",
      name: "Next-Gen Banking App",
      category: "Mobile & Web Application",
      image: "bg-[url(/bank.jpg)]"
    },
    {
      client: "MediaHub",
      name: "Content Platform Redesign",
      category: "UX Strategy & Design",
      image: "bg-[url(/content.png)]"
    }
  ];

  // Smooth animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const // Custom bezier for smoothness
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      x: -40,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const // Smooth ease-out curve
      }
    }
  };

  return (
    <section className="md:py-32 py-10 px-2 mx-auto bg-[#0c000f] min-h-screen">
      <div className="mx-auto w-[90%]">
        <motion.div 
          className="mb-16 flex flex-col md:flex-row gap-5 md:items-center justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={headerVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-base text-white/60">
              Transformative projects that moved the needle
            </p>
          </motion.div>
          
          <motion.span variants={headerVariants}>
            <motion.a 
              className="inline-block text-white border-white border-[1px] px-5 py-2 cursor-pointer rounded-full"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#ffffff",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              href="/work"
            >
              View All
            </motion.a>
          </motion.span>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={projectVariants}
              onMouseEnter={() => setHoveredIndex(idx)} 
              onMouseLeave={() => setHoveredIndex(null)}
              className="text-white cursor-pointer border-t-[1px] border-t-white/20 py-6 flex flex-col md:flex-row gap-6 h-auto md:h-[260px] group"
            >
              <motion.div
                className={`w-full md:w-[30%] h-[300px] md:h-full ${project.image} bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden`}
                initial={{ scale: 1 }}
                animate={{
                  scale: hoveredIndex === idx ? 1.05 : 1
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1] as const // Smooth bounce effect
                }}
              >
                <motion.div 
                  className="w-full h-full"
                  animate={{
                    filter: hoveredIndex === idx ? "brightness(1.1)" : "brightness(1)"
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              
              <div className="flex flex-col gap-3 justify-between flex-1">
                <div>
                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold cursor-pointer"
                    animate={{
                      x: hoveredIndex === idx ? 8 : 0
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1] as const
                    }}
                  >
                    {project.name}
                  </motion.h2>
                  
                  <motion.div
                    className="h-[2px] bg-white mt-2"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: hoveredIndex === idx ? 1 : 0
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1] as const
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
                
                <motion.span 
                  className="text-sm text-white/60"
                  animate={{
                    color: hoveredIndex === idx ? "rgb(255 255 255)" : "rgb(255 255 255 / 0.6)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.category}
                </motion.span>
              </div>
              
              <motion.div
                animate={{
                  x: hoveredIndex === idx ? 8 : 0,
                  rotate: hoveredIndex === idx ? -45 : 0
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1] as const
                }}
                className="ml-auto self-center md:self-start"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;