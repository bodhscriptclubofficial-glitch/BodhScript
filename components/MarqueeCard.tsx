'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface MarqueeCardProps {
  text: string
}

const MarqueeCard: React.FC<MarqueeCardProps> = ({ text }) => {
  return (
    <div className='relative w-full max-w-lg overflow-hidden rounded-lg border border-cyber-blue bg-cyber-black p-6 shadow-lg'>
      {/* Cyberpunk Grid Background */}
      <div className='absolute inset-0 pointer-events-none opacity-20 bg-grid-cyber' />

      {/* Marquee Text */}
      <motion.div
        className='whitespace-nowrap flex space-x-6'
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }} // Medium velocity
      >
        <span className='text-lg font-semibold tracking-wide text-cyber-pink'>
          {text}
        </span>
        <span className='text-lg font-semibold tracking-wide text-cyber-pink'>
          {text}
        </span>
      </motion.div>
    </div>
  )
}

export default MarqueeCard
