'use client'
import { motion } from 'framer-motion'

const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'AI/ML',
  'C',
  'C++',
  'Java',
  'Python',
  'Cybersecurity',
]

const Technologies = () => {
  return (
    <div className='py-20 bg-black text-white text-center'>
      <h2 className='text-6xl font-extrabold text-slate-300'>
        Technologies We Explore
      </h2>

      <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-8'>
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className='p-6 border border-white/20 bg-white/10 backdrop-blur-lg rounded-lg text-center shadow-lg transition-transform hover:shadow-xl hover:border-purple-500'
            whileHover={{ scale: 1.1 }}
          >
            <p className='text-xl font-semibold'>{tech}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Technologies
