"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fromBottomToTop } from "../Animations";
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "They didn't just build our platform—they transformed how we think about our business. The results exceeded every expectation.",
      author: "Sarah Chen",
      role: "CEO",
      company: "TechFlow",
      logo: "TF"
    },
    {
      quote: "Working with this team felt like having an extension of our own. Their strategic insights and execution were flawless.",
      author: "Marcus Rodriguez",
      role: "CMO",
      company: "Luxe",
      logo: "LX"
    },
    {
      quote: "The attention to detail and user experience they delivered helped us achieve 10x growth in our first year. Incredible partners.",
      author: "Emily Nakamura",
      role: "Founder",
      company: "FinanceAI",
      logo: "FA"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 bg-[#0c000f]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }} className="text-5xl md:text-6xl font-bold text-white mb-4">
            Client Love
          </motion.h2>
          <motion.p
            initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }} className="text-xl text-white/60">
            Don't take our word for it
          </motion.p>
        </div>
        
        <div className="relative min-h-[400px]">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ${
                activeIndex === idx 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#9804bc] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonial.logo}
                  </span>
                </div>
                
                <blockquote className="text-3xl md:text-4xl font-light text-white mb-12 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="text-xl font-semibold text-white mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-white/60">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-12 bg-white' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials