import { cn } from '@/lib/utils'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid2'

export function BentoGrid2Comp() {
  return (
    <div className='max-w-4xl mx-auto'>
      {/* Heading */}
      <h2
        className='text-4xl md:text-5xl font-bold text-cyber-blue  text-center underline underline-offset-8 orbitron-text  mb-8'
        data-text='Gallery'
      >
        Gallery
      </h2>

      {/* Bento Grid */}
      <BentoGrid className='md:auto-rows-[20rem] '>
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
        className='w-full h-full object-cover rounded-xl'
      />
    ),
    className: 'md:col-span-2',
  },
  {
    header: (
      <img
        src='/images/lpu/img3.jpg'
        alt='Digital Revolution'
        className='w-full h-full object-cover rounded-xl'
      />
    ),
    className: 'md:col-span-1',
  },
  {
    header: (
      <img
        src='/images/lpu/img2.jpg'
        alt='Design'
        className='w-full h-full object-cover rounded-xl'
      />
    ),
    className: 'md:col-span-1',
  },
  {
    header: (
      <img
        src='/images/lpu/img6.jpg'
        alt='Communication'
        className='w-full h-full object-cover rounded-xl'
      />
    ),
    className: 'md:col-span-2',
  },
]
