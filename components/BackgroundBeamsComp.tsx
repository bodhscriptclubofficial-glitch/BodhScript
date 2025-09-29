'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { BackgroundBeams } from './ui/background-beams'
import { TypewriterEffect } from './ui/typewriter-effect'

const words = [
  {
    text: 'Join ',
    className:
      'text-gray-300 dark:text-blue-500 relative  text-5xl md:text-7xl font-extrabold ',
  },
  {
    text: 'the',
    className:
      'text-cyber-blue dark:text-blue-500 relative text-5xl md:text-7xl font-extrabold ',
  },
  {
    text: 'team',
    className:
      'text-cyber-pink dark:text-pink-500 relative text-5xl md:text-7xl font-extrabold ',
  },
]

export function BackgroundBeamsComp() {
  const router = useRouter()

  return (
    <div className='relative flex flex-col items-center justify-center h-[40rem] w-full bg-neutral-950 rounded-md antialiased mt-16 px-6'>
      <div className='max-w-3xl text-center'>
        {/* Title */}
        <span className='block mt-2 '>
          <TypewriterEffect words={words} />
        </span>

        {/* Description */}
        <p className='relative z-10 text-lg md:text-xl text-slate-300 mt-6 leading-relaxed'>
          Excited to join a team of innovative and passionate technology-driven
          professionals? Become part of a community where creativity meets
          cutting-edge solutions. Turn ideas into reality and collaborate for
          success.
        </p>

        {/* QR Code and Button Section (Button Above QR Code) */}
        <div className='flex flex-col items-center justify-center space-y-4 mt-10'>
          {/* Join Us Button */}
          {/* <button
            onClick={() => router.push('/join-us')}
            className='relative flex items-center justify-center px-8 py-2 text-lg font-semibold text-white border-2 border-cyan-400 rounded-full transition-all duration-300 bg-transparent hover:bg-cyan-400 hover:text-neutral-950 hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 cursor-pointer -mt-4 mb-4'
          >
            Join Us
          </button> */}

          {/* QR Code */}
          <div className='relative w-70 h-64 p-2 bg-neutral-800 rounded-lg shadow-lg border border-cyan-400 '>
            <img
              src='/images/ScanMe.png'
              alt='QR Code'
              className='w-full h-full object-cover rounded-md '
            />
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <BackgroundBeams />
    </div>
  )
}
