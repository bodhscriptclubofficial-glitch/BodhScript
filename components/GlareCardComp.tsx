'use client'

import { GlareCard } from '@/components/ui/glare-card'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function GlareCardComp() {
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef(null)
  const carouselRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current && carouselRef.current) {
      // Set animation based on actual container width
      const width = carouselRef.current.offsetWidth
      setContainerWidth(width)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className='relative w-full overflow-hidden mt-20 mb-8'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={carouselRef}
        className='flex space-x-10'
        animate={{
          x: containerWidth > 0 ? [-20, -containerWidth - 20] : 0,
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration: hovered ? 10 : 4,
            ease: 'linear',
            repeatType: 'loop',
          },
        }}
      >
        {/* Main cards */}
        <GlareCard className='flex flex-col items-center justify-center min-w-[250px] md:min-w-[300px]'>
          <svg
            width='66'
            height='65'
            viewBox='0 0 66 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-14 w-14 text-white'
          >
            <path
              d='M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696'
              stroke='currentColor'
              strokeWidth='15'
              strokeMiterlimit='3.86874'
              strokeLinecap='round'
            />
          </svg>
        </GlareCard>

        <GlareCard className='flex flex-col items-center justify-center min-w-[250px] md:min-w-[300px]'>
          <img
            className='h-full w-full absolute inset-0 object-cover'
            src='/api/placeholder/400/320'
            alt='Background'
          />
        </GlareCard>

        <GlareCard className='flex flex-col items-start justify-end py-8 px-6 min-w-[250px] md:min-w-[300px]'>
          <p className='font-bold text-white text-lg'>The greatest trick</p>
          <p className='font-normal text-base text-neutral-200 mt-4'>
            The greatest trick the devil ever pulled was to convince the world
            that he didn&apos;t exist.
          </p>
        </GlareCard>

        {/* Duplicate cards for seamless looping */}
        <GlareCard className='flex flex-col items-center justify-center min-w-[250px] md:min-w-[300px]'>
          <svg
            width='66'
            height='65'
            viewBox='0 0 66 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-14 w-14 text-white'
          >
            <path
              d='M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696'
              stroke='currentColor'
              strokeWidth='15'
              strokeMiterlimit='3.86874'
              strokeLinecap='round'
            />
          </svg>
        </GlareCard>

        <GlareCard className='flex flex-col items-center justify-center min-w-[250px] md:min-w-[300px]'>
          <img
            className='h-full w-full absolute inset-0 object-cover'
            src='/api/placeholder/400/320'
            alt='Background'
          />
        </GlareCard>

        <GlareCard className='flex flex-col items-start justify-end py-8 px-6 min-w-[250px] md:min-w-[300px]'>
          <p className='font-bold text-white text-lg'>The greatest trick</p>
          <p className='font-normal text-base text-neutral-200 mt-4'>
            The greatest trick the devil ever pulled was to convince the world
            that he didn&apos;t exist.
          </p>
        </GlareCard>
      </motion.div>
    </div>
  )
}
