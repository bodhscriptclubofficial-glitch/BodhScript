'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Feature {
  image: string
}

const features: Feature[] = [
  {
    image: '/images/Poster.png',
  },
]

export default function Features() {
  const [text, setText] = useState<string>('')
  const fullText = 'Events to come'

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 100)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <section id='features' className='py-20 relative overflow-hidden mb-4'>
      <div className='mx-auto px-4 text-center relative z-10'>
        {/* Heading */}
        <h2
          className='text-4xl md:text-6xl font-bold mb-6 text-cyber-blue cyber-glitch'
          data-text='Upcoming Events'
        >
          Upcoming
          <span className='text-cyber-pink pl-4'>Events</span>
        </h2>

        {/* CTA Button */}
        <Link href='/events'>
          <span className='bg-cyber-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-cyber-blue hover:text-cyber-black transition duration-300 animate-strong-pulse mt-8 inline-block cursor-pointer'>
            Check Events
          </span>
        </Link>

        {/* Feature Cards - Centered Grid */}
        <div className='flex justify-center w-full mt-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl ml-[38%]'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-cyber-black p-8 rounded-lg border border-gray-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-cyber-blue/50 flex justify-center items-center h-80 w-96'
              >
                {/* Image Container */}
                <div className='relative w-full h-full flex items-center justify-center'>
                  <img
                    src={feature.image}
                    alt='Event'
                    className='w-full h-full object-contain rounded-md hover:cursor-pointer'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Black Grid Background */}
      <div className='absolute inset-0 cyber-grid'></div>
    </section>
  )
}
