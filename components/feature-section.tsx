'use client'
import React from 'react'
import { Grid } from '@/components/ui/grid'
import { CodeBlock } from '@/components/ui/code-block'
import { motion } from 'framer-motion'

export function FeatureSection() {
  return (
    <div className='relative flex flex-col items-center justify-center w-full py-20'>
      {/* Grid as background */}
      <Grid />

      {/* Content inside grid */}
      <div className='absolute inset-0 flex items-center justify-center px-6 lg:px-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full'>
          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='flex flex-col justify-center'
          ></motion.div>

          {/* Right side CodeBlock */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative z-10'
          >
            <CodeBlock
              language='tsx'
              filename='example.tsx'
              code={`function HelloWorld() {
  return <h1>Hello, World!</h1>;
}`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
