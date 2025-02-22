'use client'
import React from 'react'
import { BackgroundBeams } from './ui/background-beams'

export function BackgroundBeamsComp() {
  return (
    <div className='h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-16'>
      <div className='max-w-2xl mx-auto p-4'>
        <h1 className='relative z-10 text-lg md:text-7xl bg-clip-text  text-cyan-400 bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold'>
          Join Us
        </h1>
        <p className='text-slate-200  my-6 text-lg text-center relative z-10'>
          Excited to join a team of innovative and passionate technology-driven
          professionals? Become part of a community where creativity meets
          cutting-edge solutions, where ideas turn into reality, and where
          collaboration fuels success. Join us and be part of the future!
        </p>

        {/* Centering and Enhancing the Button */}
        <div className='flex justify-center mt-4  opacity-70 '>
          <img
            src='/images/Bodh_Geyan_QR_LPU_Colored.png'
            alt='QR Code'
            className='w-60 h-full border border-slate-600 outline-8 text-transparent '
          />

          {/* <button
            className='border text-lg font-medium border-neutral-200 dark:border-white/[0.2] text-white px-6 py-3 rounded-full transition-all duration-300 
    bg-transparent hover:bg-cyber-blue hover:text-cyber-black hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] hover:scale-105 hover:cursor-pointer'
          >
            <span>Join Us</span>
          </button> */}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}
