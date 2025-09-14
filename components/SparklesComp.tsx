'use client'
import React from 'react'
import { SparklesCore } from '@/components/ui/sparkles'
import { TypewriterEffect } from './ui/typewriter-effect'
import { motion } from 'framer-motion'
import { TeamCard } from './TeamCard'
import Link from 'next/link'

export function SparklesComp() {
  return (
    <>
      <div className='h-[50rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md'>
        <Link href='/' className='fixed top-4 left-4 z-[6000]'>
          <img
            src='/images/logo.jpg'
            alt='Logo'
            className='h-40 w-36 rounded-full object-cover shadow-lg'
          />
        </Link>
        {/* Typewriter Effect */}
        <TypewriterEffect
          words={[
            {
              text: 'Meet',
              className: 'text-indigo-500 text-5xl md:text-7xl font-extrabold ',
            },
            {
              text: 'the',
              className: 'text-cyan-400 text-5xl md:text-7xl font-extrabold',
            },
          ]}
        />

        {/* Immediate Fade-in Animation for "Team" */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
          className='md:text-7xl text-3xl lg:text-9xl font-bold text-center text-gray-300 relative z-20'
        >
          Team
        </motion.h1>

        <div className='w-[40rem] h-40 relative'>
          {/* Gradients */}
          <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
          <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
          <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
          <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

          {/* Core component */}
          <SparklesCore
            background='transparent'
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className='w-full h-full'
            particleColor='#FFFFFF'
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className='absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
        </div>
      </div>

      {/* Team Cards with Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto my-10'>
        <TeamCard
          name='Dheeraj Bandral'
          role='Content Writer'
          image='/images/members/Dheeraj.png'
          className='text-white font-semibold drop-shadow-md'
        /> 
         <TeamCard
          name='Anshika Yadav'
          role='Anchor'
          image='/images/members/Anshika.png'
          className='text-white font-semibold drop-shadow-md'
        />
        <TeamCard
         
        />{' '}
        <TeamCard
        
        />{' '}
        <TeamCard
         
        />{' '}
        <TeamCard
         
        />{' '}
       
        
        <TeamCard
         
        />
        <TeamCard
         
        />
        <TeamCard
         
        />
        <TeamCard
          
        />
        <TeamCard
          
        />
        <TeamCard
          
        />
        
        
      </div>
    </>
  )
}
