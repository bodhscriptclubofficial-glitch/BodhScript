'use client'
import { motion } from 'framer-motion'

const JoinUs = () => {
  return (
    <div className='py-20 bg-black text-white text-center'>
      <motion.h2
        className='text-5xl font-bold  text-purple-400'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Join Us Today! 🎉
      </motion.h2>

      <motion.a
        href='/join-us'
        className='mt-6 inline-block px-8 py-3 text-lg font-bold text-white border border-purple-500 rounded-lg shadow-lg transition-all hover:bg-purple-500 hover:text-slate-200'
        whileHover={{ scale: 1.1 }}
      >
        Become a Member 🚀
      </motion.a>
    </div>
  )
}

export default JoinUs
