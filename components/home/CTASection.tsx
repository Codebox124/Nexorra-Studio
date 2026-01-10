"use client"
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-40 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-9xl font-bold text-white mb-12 ">
          Ready to create<br />something great?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/70 mb-16 max-w-2xl mx-auto font-light">
          Join our team of innovators or partner with us to elevate your brand
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group px-12 py-6 bg-white text-black text-lg font-medium flex items-center justify-center gap-3 hover:gap-5 transition-all">
            Join Our Team
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <button className="px-12 py-6 bg-transparent text-white text-lg font-medium border-2 border-white hover:bg-white hover:text-black transition-all">
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection