"use client"
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fromLeftToRight, fromTopToBottom } from "../Animations";
const CTASection = () => {
  return (
    <section className="py-32 px-6 bg-[#9804bc] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={fromTopToBottom.initial}
        whileInView={fromTopToBottom.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
        className="text-5xl md:text-7xl font-bold text-white mb-8">
          Ready to elevate<br />your brand?
        </motion.h2>
        
        <motion.p
          initial={fromTopToBottom.initial}
        whileInView={fromTopToBottom.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
        className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Let's collaborate to create something extraordinary that drives real business results
        </motion.p>
        
        <motion.div
          initial={fromLeftToRight.initial}
        whileInView={fromLeftToRight.whileInView}
        
       transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
        className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group cursor-pointer px-10 py-5 bg-white text-black rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:gap-4 transition-all hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
            Start a Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-10 cursor-pointer py-5 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all">
            View our work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection