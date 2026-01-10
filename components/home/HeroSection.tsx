"use client";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const fromTopToBottom = {
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 0 }
  };

  const fromLeftToRight = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">

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
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 w-full max-w-5xl text-center">

        {/* Heading */}
        <motion.h1
          initial={fromTopToBottom.initial}
          whileInView={fromTopToBottom.whileInView}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            font-sora font-bold text-white
            text-[2.25rem] leading-tight
            sm:text-5xl md:text-7xl
            mb-6
          "
        >
          We build digital experiences
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            that move markets forward
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={fromTopToBottom.initial}
          whileInView={fromTopToBottom.whileInView}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            text-white/70
            text-sm leading-relaxed
            sm:text-lg md:text-2xl
            max-w-3xl mx-auto
            mb-10
          "
        >
          Transforming ambitious ideas into market-leading digital products through
          strategy, design, and engineering excellence.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={fromLeftToRight.initial}
          whileInView={fromLeftToRight.whileInView}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            className="
              w-full sm:w-auto
              flex items-center justify-center gap-3
              px-8 py-4
              bg-white text-black
              rounded-full font-semibold
              transition-all
              hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]
            "
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            className="
              w-full sm:w-auto
              flex items-center justify-center gap-2
              px-8 py-4
              rounded-full font-semibold
              bg-white/5 text-white
              border border-white/20
              backdrop-blur
              hover:bg-white/10
              transition-all
            "
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
