import AboutClub from '@/components/AboutClub'
import About from '@/components/aboutComp/About'
import Achievements from '@/components/aboutComp/Achievements'
import Hero from '@/components/aboutComp/Hero'
import JoinUs from '@/components/aboutComp/JoinUs'
import Technologies from '@/components/aboutComp/Technologies'
import Vision from '@/components/aboutComp/Vision'
import WhatWeDo from '@/components/aboutComp/WhatWeDo'
import { BgBeamsWithColl } from '@/components/BgBeamsWithColl'

export default function AboutPage() {
  return (
    <div className='mt-10'>
      <BgBeamsWithColl />
      <About />
      <WhatWeDo />
      <Vision />
      <Technologies />
      <Achievements />
      <JoinUs />
    </div>
  )
}
