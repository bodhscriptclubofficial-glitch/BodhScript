'use client'
import HeroSection from '../components/HeroSection'
import { FloatingNav } from '@/components/FloatingNav'
import { Home, Calendar, Info, Users } from 'lucide-react'
import Features from '@/components/Features'
import { BentoGridComp } from '@/components/BentoGridComp'
import { BackgroundBeamsComp } from '@/components/BackgroundBeamsComp'
import { Organizer } from '@/components/Organizer'
import { FacultyScroll } from '@/components/FacultyScroll'

export default function Page() {
  const navItems = [
    { name: 'Home', link: '/', icon: <Home size={20} /> },
    { name: 'Events', link: '/events', icon: <Calendar size={20} /> },
    { name: 'About', link: '/about', icon: <Info size={20} /> },
    { name: 'Members', link: '/members', icon: <Users size={20} /> },
  ]

  return (
    <div className='relative w-full flex flex-col items-center justify-center '>
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <BentoGridComp />
      <FacultyScroll />
      <BackgroundBeamsComp />
    </div>
  )
}
