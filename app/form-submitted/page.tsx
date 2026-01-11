import { ArrowRight, BadgeCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen flex items-center bg-[#0c000f] text-[#fffdf8] font-sans selection:bg-[#9804bc] selection:text-white">
      {/* Background Grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fffdf8 1px, transparent 1px), linear-gradient(90deg, #fffdf8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    <div className='w-[90%] gap-3 mx-auto flex flex-col justify-center items-center'>
        <BadgeCheck className='w-20 h-20' />
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium">
                  Form Submitted
        </h1>
        <p>We'll get back to you within 24 hours!</p>
          <Link href={"/work"} className="group cursor-pointer px-12 py-6 bg-white text-black text-lg font-medium flex items-center justify-center gap-3 hover:gap-5 transition-all">
            Browse our work
            <ArrowRight className="w-6 h-6" />
          </Link>
    </div>
</div>
  )
}

export default page