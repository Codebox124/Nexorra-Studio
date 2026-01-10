"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { fromTopToBottom } from "../Animations"

function HeroSection() {
  return (
    <section className="relative flex flex-col gap-14 text-white min-h-screen overflow-hidden bg-black py-28">
      
      {/* Text Content */}
      <div className="w-[90%] mx-auto flex flex-col gap-6">
        
        {/* Accent Text */}
        <motion.p
          initial={fromTopToBottom.initial}
          whileInView={fromTopToBottom.whileInView}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="font-nunito text-[#a21dc3] text-xl"
        >
          We are Nexorra
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          
          {/* Main Heading */}
          <motion.h1
            initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-5xl md:text-7xl font-sora leading-tight"
          >
            We build scalable software <br />
            that moves businesses forward
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full md:w-[42%] mt-auto text-sm md:text-base font-nunito text-gray-300 leading-relaxed"
          >
            Nexorra is a product-driven software studio helping startups
            and growing businesses design, build, and launch high-performance
            digital products. We focus on usability, clean engineering,
            and scalability  because great software drives growth.
          </motion.p>

        </div>
      </div>

      {/* Images */}
      <motion.div
        initial={fromTopToBottom.initial}
        whileInView={fromTopToBottom.whileInView}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex gap-6 w-[90%] mx-auto"
      >
        <Image
          alt="Nexorra software design"
          src="/aboutheroone.jpg"
          width={600}
          height={400}
          className="w-[70%] h-[420px] object-cover rounded-2xl"
        />

        <Image
          alt="Nexorra engineering team"
          src="/aboutherotwo.jpg"
          width={400}
          height={400}
          className="w-[30%] h-[420px] object-cover rounded-2xl"
        />
      </motion.div>

    </section>
  )
}

export default HeroSection
