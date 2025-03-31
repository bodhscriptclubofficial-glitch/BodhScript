'use client'
import { motion } from 'framer-motion'

const achievements = [
  {
    title: 'Founded in 2025',
    description:
      'BodhScript Club was established to bring developers together.',
    year: '2025',
  },
  {
    title: '10+ Members',
    description: 'Reached a milestone of 10+ active developers.',
    year: '2025',
  },
  {
    title: 'CodeQuest',
    description:
      'Successfully completed the first coding event with 100+ participants',
    year: '2025',
  },
]

const Achievements = () => {
  return (
    <div className='py-20 bg-black text-white'>
      <h2 className='text-6xl font-extrabold text-center text-cyan-400'>
        Our Achievements 🎖️
      </h2>

      <div className='relative mt-12 mx-auto w-full max-w-4xl'>
        {/* Vertical Timeline Line */}
        <div className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 h-full'></div>

        {/* Timeline Items */}
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center justify-${
              index % 2 === 0 ? 'start' : 'end'
            } w-full mb-12`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Connector Dot */}
            <div className='absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-black'></div>

            {/* Content Box */}
            <div
              className={`w-5/12 p-6 border border-white/20 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg ${
                index % 2 === 0 ? 'ml-auto text-left' : 'mr-auto text-right'
              }`}
            >
              <h3 className='text-2xl font-semibold'>{achievement.title}</h3>
              <p className='mt-2 text-gray-300'>{achievement.description}</p>
              <span className='block mt-3 text-sm font-bold text-purple-400'>
                {achievement.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
