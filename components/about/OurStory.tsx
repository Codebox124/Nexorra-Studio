"use client"
import { ArrowDownRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { fromRightToLeft, fromTopToBottom } from '../Animations'
function OurStory() {
  return (
    <section className="py-20  gap-6 bg-black text-white">
            <div className='w-[90%] flex-col md:flex-row flex justify-between mx-auto'>
                <motion.h2
                 initial={fromTopToBottom.initial}
                            whileInView={fromTopToBottom.whileInView}
                            transition={{
                                duration: 0.7,
                                ease: "easeInOut",
                            }}
                className='flex items-center text-5xl h-[fit-content]'>Our Story <ArrowDownRight className='w-15 h-15 mt-3' /></motion.h2>
                <motion.div
                 initial={fromRightToLeft.initial}
            whileInView={fromRightToLeft.whileInView}
            transition={{
                duration: 0.7,
                ease: "easeInOut",
            }}
                className='w-full md:w-[40%] flex flex-col gap-3'>
                    <h3 className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur molestias nostrum ullam dicta aliquid qui doloribus ratione. Corrupti, magni laudantium?</h3>
                    <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis repudiandae architecto aliquid exercitationem nisi. Quas possimus consequatur accusantium asperiores quam! Aliquam, consectetur? Quas facere, porro ab asperiores nesciunt quia praesentium nostrum. Fuga, aperiam mollitia eos dignissimos ab aliquid? <br /> <br /> A earum non ipsum vero nobis, at sunt reiciendis dolorem dolores, magnam magni quis officia quae eligendi ipsam corrupti. Excepturi, nostrum praesentium consequatur nobis debitis id nemo, beatae minima facere modi, vitae perferendis esse veniam velit ex harum tenetur explicabo exercitationem accusantium ipsum. Exercitationem quis et, deleniti magni veniam minus, nemo saepe quam at dolor iusto sed animi qui nam aperiam quo?</p>
                </motion.div>
            </div>
    </section>
  )
}

export default OurStory