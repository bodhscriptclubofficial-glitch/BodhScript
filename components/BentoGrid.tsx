import { cn } from '@/lib/utils'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid2'

export function BentoGrid2Comp() {
  return (
    <div className='max-w-6xl mx-auto px-4'>
      {/* Heading */}
      <h2
        className='text-4xl md:text-5xl font-bold text-cyber-blue text-center underline underline-offset-8 orbitron-text mb-10'
        data-text='Gallery'
      >
        Gallery
      </h2>

      {/* Bento Grid */}
      <BentoGrid className='grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[22rem] '>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

const items = [
  {
    header: (
      <img
        src='/images/lpu/img4.jpg'
        alt='Innovation'
        className='w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg border border-cyan-950 border-transparent'
      />
    ),
    className: 'md:col-span-2',
  },
  {
    header: (
      <img
        src='/images/lpu/img3.jpg'
        alt='Digital Revolution'
        className='w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg border border-cyan-950 border-transparent'
      />
    ),
    className: 'md:col-span-1',
  },
  {
    header: (
      <img
        src='/images/lpu/img2.jpg'
        alt='Design'
        className='w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg border border-cyan-950 border-transparent'
      />
    ),
    className: 'md:col-span-1',
  },
  {
    header: (
      <img
        src='/images/lpu/img6.jpg'
        alt='Communication'
        className='w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg border border-cyan-950 border-transparent'
      />
    ),
    className: 'md:col-span-2',
  },
]
