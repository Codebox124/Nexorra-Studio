"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fromTopToBottom } from '../Animations'
function HeroSection() {
  return (
    <section className="relative flex flex-col gap-10 text-white min-h-screen h-[fit-content] overflow-hidden bg-black py-30">
        {/*We are*/}
        <div className='w-[90%] mx-auto flex flex-col gap-4'>
            <motion.p
            initial={fromTopToBottom.initial}
            whileInView={fromTopToBottom.whileInView}
            transition={{
                duration: 0.7,
                ease: "easeInOut",
            }}
            className='font-nunito text-[#a21dc3] text-xl'>We are Nexorra</motion.p>
            <div className='flex flex-col md:flex-row justify-between gap-3'>
                <motion.h1
                initial={fromTopToBottom.initial}
                whileInView={fromTopToBottom.whileInView}
                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                }}
                className='text-5xl md:text-7xl font-sora'>We set out to build <br /> better software experiences</motion.h1>
                <motion.p
                initial={fromTopToBottom.initial}
                whileInView={fromTopToBottom.whileInView}
                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                }}
                className='w-full  md:w-[40%] mt-auto text-sm font-nunito'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. A dolor odit in mollitia <br /> modi eos corporis. Quia doloribus excepturi corrupti!</motion.p>
            </div>
        </div>

        <motion.div
        initial={fromTopToBottom.initial}
        whileInView={fromTopToBottom.whileInView}
        transition={{
            duration: 0.7,
            ease: "easeInOut",
        }}
        className='flex gap-5 w-[90%] mx-auto'>
            <Image alt="about" src={"/aboutheroone.jpg"} width={400} height={300} className='w-[70%] h-[400px] object-cover' />
            <Image alt="about" src={"/aboutherotwo.jpg"} width={400} height={300} className='w-[30%] h-[400px] object-cover' />
        </motion.div>    
    </section>
  )
}

export default HeroSection