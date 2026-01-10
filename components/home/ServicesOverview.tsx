"use client"
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

function ServicesOverview() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    
    const services = [
        {
            name: "Branding",
            image: "bg-[url(/branding.jpg)]",
            link: "#",
            description: "Creating distinctive brand identities that resonate with your audience and stand out in the market"
        },
        {
            name: "Development",
            image: "bg-[url(/development.jpg)]",
            link: "#",
            description: "Building robust, scalable digital solutions with cutting-edge technologies and best practices"
        },
        {
            name: "Consulting",
            image: "bg-[url(/consulting.jpg)]",
            link: "#",
            description: "Strategic guidance to transform your business through digital innovation and optimization"
        },
        {
            name: "Ads & Marketing",
            image: "bg-[url(/ads.jpg)]",
            link: "#",
            description: "Data-driven campaigns that deliver measurable results and maximize your ROI"
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    const serviceVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    return (
        <section className='flex flex-col items-center py-20 bg-black'>
            <div className='text-white w-[90%]  flex flex-col gap-12'>
                {/* Header Section */}
                <motion.div 
                    className='flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-end'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h1
                        variants={headerVariants}
                        className='text-5xl md:text-6xl lg:text-7xl font-bold'
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        variants={headerVariants}
                        className='text-lg text-white/70 max-w-md lg:text-right'
                    >
                        Transforming ambitious ideas into market-leading digital products through strategy, design, and engineering excellence
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    className='grid grid-cols-1 md:grid-cols-2 gap-6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.a
                            key={index}
                            href={service.link}
                            variants={serviceVariants}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className='block'
                        >
                            <motion.div
                                className={`relative overflow-hidden rounded-2xl cursor-pointer flex flex-col justify-end p-8 ${service.image} bg-center bg-no-repeat bg-cover h-[350px] md:h-[400px] group`}
                                animate={{
                                    scale: hoveredIndex === index ? 1.02 : 1
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1] as const
                                }}
                            >
                                {/* Dark overlay */}
                                <motion.div 
                                    className='absolute inset-0 bg-black/50'
                                    animate={{
                                        opacity: hoveredIndex === index ? 0.3 : 0.5
                                    }}
                                    transition={{ duration: 0.4 }}
                                />

                                {/* Content */}
                                <div className='relative z-10 flex flex-col gap-3'>
                                    <motion.h2
                                        className='text-4xl md:text-5xl font-bold'
                                        animate={{
                                            y: hoveredIndex === index ? -8 : 0
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.22, 1, 0.36, 1] as const
                                        }}
                                    >
                                        {service.name}
                                    </motion.h2>

                                    {/* Description with fade in */}
                                    <motion.p
                                        className='text-white/90 text-sm md:text-base max-w-md'
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: hoveredIndex === index ? 1 : 0,
                                            y: hoveredIndex === index ? 0 : 10
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.22, 1, 0.36, 1] as const
                                        }}
                                    >
                                        {service.description}
                                    </motion.p>

                                    {/* Arrow indicator */}
                                    <motion.div
                                        className='flex items-center gap-2 text-white/80'
                                        animate={{
                                            x: hoveredIndex === index ? 8 : 0,
                                            opacity: hoveredIndex === index ? 1 : 0
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.22, 1, 0.36, 1] as const
                                        }}
                                    >
                                        <span className='text-sm font-medium'>Learn more</span>
                                        <ArrowRight className='w-4 h-4' />
                                    </motion.div>
                                </div>

                                {/* Animated gradient overlay on hover */}
                                <motion.div
                                    className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent'
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: hoveredIndex === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1] as const
                    }}
                    className='flex justify-center md:justify-start'
                >
                    <motion.a
                        className="inline-flex items-center gap-2 text-white border-white border-[1px] px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                        href="/services"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View All Services
                        <ArrowRight className='w-4 h-4' />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

export default ServicesOverview;