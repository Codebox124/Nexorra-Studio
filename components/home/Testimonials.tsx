"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fromBottomToTop } from "../Animations";
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
const testimonials = [
  {
    quote:
      "Great work from Raji, trustworthy product for us. Problem solved exactly as needed.",
    author: "Apilko",
    role: "Client",
    company: "Australia",
    logo: "AU",
  },
  {
    quote:
      "Great buyer to work with. I ordered a website calculator and it was delivered very fast. If you need someone reliable, he is the right person.",
    author: "Code_box121",
    role: "Client",
    company: "Nigeria",
    logo: "NG",
  },
  {
    quote:
      "Raji did an absolutely amazing job creating my website. From the start, he understood exactly what I was looking for and brought my vision to life perfectly. His attention to detail and professionalism stood out. The final result exceeded my expectations.",
    author: "Ryan M.",
    role: "Client",
    company: "Iqballaz Customs",
    logo: "IQ",
  },
  {
    quote:
      "Raji delivered an excellent restaurant website for Lafun NG. The design was clean, modern, and perfectly matched our brand. The site improved our online presence and made it easier for customers to engage with us.",
    author: "Lafun NG",
    role: "Restaurant Owner",
    company: "Lafun NG",
    logo: "LN",
  },
  {
    quote:
      "Raji helped recover and rebuild our website that had been abandoned since 2008. He modernized the platform, restored functionality, and brought the project back to life with great attention to detail. Truly impressive work.",
    author: "Mr. Atiyebi",
    role: "Client",
    company: "Vote united",
    logo: "MA",
  },
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