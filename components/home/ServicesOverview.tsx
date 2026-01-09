"use client"
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fromBottomToTop, fromLeftToRight, fromRightToLeft } from '../Animations';

function ServicesOverview() {
    const [hoveredIndex, setHoveredIndex] = useState<any>(2);
 const services = [
    {
        name:"Branding",
        image:"bg-[url(/branding.jpg)]",
        link:"#"
    },
    {
        name:"Development",
        image:"bg-[url(/development.jpg)]",
        link:"#"
    },
    {
        name:"Consulting",
        image:"bg-[url(/consulting.jpg)]",
        link:"#"
    },
    {
        name:"Ads & Marketing",
        image:"bg-[url(/ads.jpg)]",
        link:"#"
    },
 ]
    return (
    <section className='flex flex-col items-center'>
        <div className='text-white w-[90%] flex flex-col gap-5'>
            <div className='flex flex-col md:flex-row justify-between gap-3 mb-10'>
                <motion.h1
                initial={fromLeftToRight.initial}
                        whileInView={fromLeftToRight.whileInView}
                        
                       transition={{
                            duration:0.7,
                            ease:"easeInOut"
                        }}
                className='font-sora text-7xl'>Our Services</motion.h1>
                <motion.p
                initial={fromRightToLeft.initial}
        whileInView={fromRightToLeft.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
                className='font-nunito w-full md:w-[30%]'>Transforming ambitious ideas into market-leading digital products through strategy, design, and engineering excellence</motion.p>
            </div>
            

            <div className='flex flex-col gap-10'> 
                {
                    services.map((service, index)=>{
                        return <motion.div
                        initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
                        key={index}>
                            <Link href={service.link}  onMouseOver={()=>{setHoveredIndex(index)}} onMouseLeave={()=>{setHoveredIndex(null)}} >
                            <motion.div
                           
                animate={{
                    backgroundSize:`${hoveredIndex===index?"110% 210%":"100% 200%"}`
                }}
                transition={{
                    duration: 0.3,
                    ease:"easeInOut"
                }}
                            className={`relative overflow-hidden ease-in-out service cursor-pointer   flex justify-between gap-3 p-5  ${service.image} bg-center  bg-no-repeat bg-cover w-full h-[300px]`}>

                            
                    
                    <div className='absolute bg-black/50 inset-0 ' />
                    <div className={`z-1 w-full mt-auto flex flex-col `}>
                        <motion.h2
                    animate={{
                        y: `${hoveredIndex===index?"-30px":"0px"}`
                    }}
                    transition={{
                        duration: 0.3,
                        ease:"easeInOut"
                    }}
                    className={` font-sora ${index%2===0?"ml-auto":""} relative text-3xl md:text-5xl`}>{service.name}</motion.h2>
                    <motion.span
                     animate={{
                        y: `${hoveredIndex===index?"-20px":"0px"}`,
                        opacity: `${hoveredIndex===index?"1":"0"}`
                    }}
                    transition={{
                        duration: 0.3,
                        ease:"easeInOut"
                    }}
                    className={`${index%2===0?"ml-auto":""} hidden md:block`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis soluta sunt modi recusandae dignissimos et ipsum repellendus assumenda unde aut.</motion.span>
                    </div>
                    </motion.div>
                </Link>
                        </motion.div>
                    })
                }
            </div>
            
            <motion.span
              initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
            >
                <Link className="text-white cursor-pointer border-white border-[1px] px-5 py-2 cursor-pointer rounded-full w-[fit-content]" href={"/services"}>View All</Link>
            </motion.span>
        </div>
    </section>
  )
}

export default ServicesOverview