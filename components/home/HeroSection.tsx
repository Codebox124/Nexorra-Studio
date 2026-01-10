"use client"
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err: any) => console.log("Autoplay prevented:", err));
    }
  }, []);

  const fromTopToBottom = {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 }
  };

  const fromLeftToRight = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-25">

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 text-center px-6 mx-auto max-w-6xl">
        <motion.h1
          initial={fromTopToBottom.initial}
          whileInView={fromTopToBottom.whileInView}
          transition={{
            duration: 0.7,
            ease: "easeInOut"
          }}
          className="text-4xl font-sora md:text-7xl font-bold text-white mb-8 leading-tight"
        >
          We build digital experiences<br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            that move markets forward
          </span>
        </motion.h1>

        <motion.p
          initial={fromTopToBottom.initial}
          whileInView={fromTopToBottom.whileInView}
          transition={{
            duration: 0.7,
            ease: "easeInOut"
          }}
          className="text-xl md:text-2xl text-white/60 mb-12 mx-auto"
        >
          Transforming ambitious ideas into market-leading digital products through strategy, design, and engineering excellence
        </motion.p>

        <motion.div
          initial={fromLeftToRight.initial}
          whileInView={fromLeftToRight.whileInView}
          transition={{
            duration: 0.7,
            ease: "easeInOut"
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            className="cursor-pointer flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold group hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className="cursor-pointer group px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            <Play className="w-5 h-5" />
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;