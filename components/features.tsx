'use client'

import { useState, useEffect } from 'react'
import { Cpu, Zap, Lock } from 'lucide-react'
// Define Feature type
interface Feature {
  image: string
}

// Feature data
const features: Feature[] = [
  {
    image: '/images/Poster.png', // Corrected path
  },
  {
    image: '/images/Poster.png', // Corrected path
  },
  {
    image: '/images/Poster.png', // Corrected path
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
    <section id='features' className='py-20 relative  overflow-hidden'>
      <div className='container mx-auto px-4 text-center relative z-10'>
        {/* Heading */}
        <h2
          className='text-4xl md:text-5xl font-bold mb-6 text-cyber-blue cyber-glitch'
          data-text='Upcoming Events'
        >
          Upcoming
          <span className='text-cyber-pink pl-4'>Events</span>
        </h2>

        {/* Typing Effect */}
        <p className='text-xl md:text-2xl mb-8 text-cyber-yellow h-8'>
          Events to come
        </p>

        {/* CTA Button */}
        <a
          href='#cta'
          className='bg-cyber-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-cyber-blue hover:text-cyber-black transition duration-300 animate-strong-pulse '
        >
          Check Events
        </a>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-cyber-black p-6 rounded-lg border border-gray-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-cyber-blue/50'
            >
              {/* Image */}
              <img
                src={feature.image}
                alt='Event'
                className='w-full h-48 object-cover rounded-md mb-4'
              />

              {/* Register Button */}
              {/* <a
                href='#register'
                className='text-gray-300 px-4 py-3 rounded-full font-semibold border-2 border-gray-600 hover:text-white hover:bg-text-cyber-blue transition duration-300 shadow-md'
              >
                Register Now
              </a> */}
            </div>
          ))}
        </div>
      </div>

      {/* Black Grid Background */}
      <div className='absolute inset-0 cyber-grid'></div>
    </section>
  )
}
