'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import HeroSection from '../components/hero-section'
import { FloatingNav } from '@/components/floating-navbar'
import { Home, Calendar, Info, Users } from 'lucide-react' // Example icons
import GlareCardComp from '../components/GlareCardComp'
import { FeatureScrollBasedVelocity } from '@/components/feature-scroll-based-velocity'
import Features from '@/components/features'
import MarqueeCard from '@/components/MarqueeCard'
import { Card } from '@/components/ui/card'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { Bento } from '@/components/Bento'
import { BentoGrid2Comp } from '@/components/BentoGrid'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { BackgroundBeamsComp } from '@/components/BackgroundBeamsComp'
import { TypewriterEffectComp } from '@/components/TypewriterEffectComp'

export default function Page() {
  const navItems = [
    { name: 'Home', link: '/', icon: <Home size={20} /> },
    { name: 'Events', link: '/events', icon: <Calendar size={20} /> },
    { name: 'About', link: '/about', icon: <Info size={20} /> },
    { name: 'Members', link: '/members', icon: <Users size={20} /> },
  ]

  return (
    <div className='relative w-full flex flex-col items-center justify-center'>
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <Features />
      {/* <InfiniteMovingCards /> */}
      {/* <GlareCardComp /> */}
      {/* <Card /> */}
      {/* <Bento /> */}
      <BentoGrid2Comp />
      <BackgroundBeamsComp />
      {/* <FeatureScrollBasedVelocity /> */}
      {/* <HeroParallax products={products} /> */}
    </div>
  )
}
