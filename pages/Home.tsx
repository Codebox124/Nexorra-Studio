"use client"
import CTASection from '@/components/home/CTASection'
import FeaturedWork from '@/components/home/FeaturedWork'
import Footer from '@/components/home/Footer'
import HeroSection from '@/components/home/HeroSection'
import PhilosophyStrip from '@/components/home/PhilosophyStrip'
import ServicesOverview from '@/components/home/ServicesOverview'
import Testimonials from '@/components/home/Testimonials'
import React from 'react'

function Home() {
  return (
    <div className='bg-black'>
        <HeroSection />
      {/*<PhilosophyStrip />*/}
      <FeaturedWork />
      <ServicesOverview />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Home