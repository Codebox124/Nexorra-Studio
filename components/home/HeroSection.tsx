"use client"
import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import { fromBottomToTop, fromLeftToRight, fromTopToBottom, others } from "../Animations";
const HeroSection = () => {
  
    const BigTextRef = useRef(null);
    const smallTextRef = useRef(null);
    const buttonsRef = useRef(null);
  const isBigTextInView = useInView(BigTextRef, { margin: "-100px" });
  const isSmallTextInView = useInView(smallTextRef, { margin: "-100px" });
  const isButtonsInView = useInView(buttonsRef, { margin: "-100px" });
  const bigTextControls = useAnimation();
  const smallTextControls = useAnimation();
  const buttonsControls = useAnimation();

  useEffect(() => {
    if (isBigTextInView) {
      bigTextControls.start("enter");
    } else {
      bigTextControls.start("exit");
    }
  }, [isBigTextInView, bigTextControls]);

  useEffect(() => {
    if (isSmallTextInView) {
      smallTextControls.start("enter");
    } else {
      smallTextControls.start("exit");
    }
  }, [isSmallTextInView, smallTextControls]);

  useEffect(() => {
    if (isButtonsInView) {
      buttonsControls.start("enter");
    } else {
      buttonsControls.start("exit");
    }
  }, [isButtonsInView, buttonsControls]);
    

  

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-25">
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/*<div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-white/80">Award-winning digital studio</span>
        </div>*/}
        
        <motion.h1
        /*initial={fromBottomToTop.initial}
        whileInView={fromBottomToTop.whileInView}*/
        /*ref={BigTextRef}
        variants={{
            enter:fromTopToBottom.whileInView,
            exit: fromTopToBottom.initial
        }}
        initial="exit"
        animate={bigTextControls}*/

        initial={fromTopToBottom.initial}
        whileInView={fromTopToBottom.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
       
        className="text-6xl font-sora md:text-8xl font-bold text-white mb-8 leading-tight">
          We craft digital<br />
          <span className="/*bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent*/">
            experiences
          </span><br />
          that define industries
        </motion.h1>
        
        <motion.p
       initial={fromTopToBottom.initial}
        whileInView={fromTopToBottom.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
        className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto">
          Transforming ambitious ideas into market-leading digital products through strategy, design, and engineering excellence
        </motion.p>
        
        <motion.div
        initial={fromLeftToRight.initial}
          whileInView={fromLeftToRight.whileInView}
          transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
      
        className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
          className="cursor-pointer flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold group hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
          className="cursor-pointer group px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 flex items-center gap-2 hover:bg-white/10 transition-all">
            <Play className="w-5 h-5" />
            View Our Work
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      {/*
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-sm">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-white/40" />
      </div>*/}
    </section>
  );
};


export default HeroSection;