'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Feature {
  image: string
}

const features: Feature[] = [
  {
    image: '/images/codequest.jpg',
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
      <Link href='/' className='fixed top-4 left-4 z-[6000]'>
        <img
          src='/images/logo.jpg'
          alt='Logo'
          className='h-40 w-36 rounded-full object-cover shadow-lg'
        />
      </Link>
      {/* 
      <div className='mx-auto px-4 text-center relative z-10'>
        // Heading 
        <h2
          className='text-4xl md:text-6xl font-extrabold  text-cyber-blue '
          data-text='Upcoming Events'
        >
          Event
          <span className='text-cyber-pink pl-4'>Spotlights</span>
        </h2>
      </div>
   
        // Feature Cards - Centered Grid 

        <div className='flex justify-center items-center w-full mt-12 pt-10'>
          <div className='grid grid-cols-1 gap-8 max-w-[700px] mx-auto'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-cyber-black p-6 rounded-lg border border-gray-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-cyber-blue/50 flex justify-center items-center h-[550px] w-[700px]'
              >
                // Image container 
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
    */}

      {/* Black Grid Background */}
      <div className='absolute inset-0 cyber-grid'></div>
    </section>
  )
}

/*
       <div className='flex justify-center items-center w-full mt-12'>
          <div className='grid grid-cols-1 gap-8 max-w-[700px] mx-auto'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-cyber-black p-8 rounded-lg border border-gray-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-cyber-blue/50 flex justify-center items-center h-[550px] w-[700px] mx-auto'
              >
                {Image Container }
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
*/
