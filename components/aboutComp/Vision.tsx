'use client'
import { motion } from 'framer-motion'

const Vision = () => {
  return (
    <div className='py-20 bg-black text-white text-center'>
      <motion.h2
        className='text-6xl font-extrabold text-purple-500 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Vision
      </motion.h2>

      <motion.p
        className='mt-6 text-xl text-gray-300 max-w-3xl mx-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Coding is not just about writing lines of code—it's about solving
        problems, creating impact, and pushing boundaries!
      </motion.p>
    </div>
  )
}

export default Vision
