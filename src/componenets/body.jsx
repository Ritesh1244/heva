import React from 'react'
import HeroSection from './HeroSection'
import TrustedBy from './Trusted'
import DataExploration from './DataExploration'
import MagicalAI from './MagicalAI'
import Teamwork from './TeamWork'
import InteractiveAPP from './InteractiveAPP'
import Standard from './Standard'

export default function Body() {
  return (
    <div className="bg-[#0E0C14] min-h-screen text-white">
      <HeroSection />
      <TrustedBy />
      <DataExploration/>
      <MagicalAI />
      <Teamwork />
      <InteractiveAPP />
      <Standard />
    </div>
  )
}
