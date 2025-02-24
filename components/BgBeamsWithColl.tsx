import React from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import Link from 'next/link'

export function BgBeamsWithColl() {
  return (
    <BackgroundBeamsWithCollision>
      <div className='max-w-5xl'>
        <Link href='/' className='fixed top-4 left-4 z-[6000]'>
          <img
            src='/images/logo.jpg'
            alt='Logo'
            className='h-40 w-36 rounded-full object-cover shadow-lg'
          />
        </Link>
        <h2 className='text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight'>
          Discover Heart of Our Club
          <div className='relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]'>
            <div className='absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]'>
              <span className=''>Know us.</span>
            </div>
            <div className='relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4'>
              <span className=''>Know us.</span>
            </div>
          </div>
        </h2>
      </div>
    </BackgroundBeamsWithCollision>
  )
}
