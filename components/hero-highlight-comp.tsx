'use client'

import { motion } from 'framer-motion'
import { HeroHighlight } from './hero-highlight' // ✅ Named export

import { TextReveal } from './magicui/text-reveal' // ✅ Text Animation

export function HeroHighlightComp() {
  const text =
    "With insomnia, nothing's real. Everything is far away. Everything is a copy, of a copy, of a copy."

  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className='text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto'
      >
        <TextReveal text={text} />
      </motion.h1>
    </HeroHighlight>
  )
}
