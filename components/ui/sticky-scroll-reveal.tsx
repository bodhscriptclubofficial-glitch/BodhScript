'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    subtitle: string
    description: string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = [
    'var(--black)',
    'var(--black-700)',
    'var(--neutral-900)',
  ]
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  )

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
  }, [activeCard])

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className='h-[30rem] overflow-y-auto flex flex-col lg:flex-row  relative rounded-md p-10'
      ref={ref}
    >
      <div className='w-full lg:w-2/3 ml-10 mr-24'>
        {content.map((item, index) => (
          <div key={item.title + index} className='my-20'>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className='text-4xl font-bold text-slate-100 text-left mb-4'
            >
              {item.title}
            </motion.h2>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className='text-xl font-bold text-slate-100 '
            >
              {item.subtitle}
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className='text-base text-slate-300 max-w-2xl mt-4 text-justify'
            >
              {item.description}
            </motion.p>
          </div>
        ))}
        <div className='h-40' />
      </div>

      <div
        className={cn(
          'hidden lg:flex lg:w-1/3 h-80 rounded-md sticky top-10 overflow-hidden justify-center items-center',
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  )
}
