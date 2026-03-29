import CTASection from '@/components/about/CTASection'
import Culture from '@/components/about/Culture'
import HeroSection from '@/components/about/HeroSection'
import MissionVision from '@/components/about/MissionVision'
import OurStory from '@/components/about/OurStory'
import Partners from '@/components/about/Partners'
import Team from '@/components/about/Team'
import Timeline from '@/components/about/Timeline'
import Values from '@/components/about/Values'
import React from 'react'

function About() {
  return (
    <div className='bg-background'>
        <HeroSection />
        <OurStory />
        <MissionVision />
        <Timeline />
        <Values />
        <Team />
        <Culture />
        <Partners />
        <CTASection />
    </div>
  )
}

export default About