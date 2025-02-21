'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import HeroSection from '../components/hero-section'
import { FloatingNav } from '@/components/floating-navbar'
import { Home, Calendar, Info, Users } from 'lucide-react' // Example icons
import { GlareCardComp } from '@/components/GlareCardComp'

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
      <GlareCardComp />

      {/* <HeroParallax products={products} /> */}
    </div>
  )
}
