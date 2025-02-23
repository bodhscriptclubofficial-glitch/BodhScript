'use client'
import { motion } from 'framer-motion'

const aboutItems = [
  {
    title: 'Who We Are',
    desc: 'A passionate coding community fostering innovation.',
  },
  { title: 'What We Do', desc: 'Workshops, Hackathons, Open-Source & more!' },
  {
    title: 'Our Mission',
    desc: 'Empowering developers to build, learn & grow.',
  },
]

const About = () => {
  return (
    <div className='py-20 bg-black text-white text-center'>
      <h2 className='text-6xl font-extrabold mb-10 text-cyber-blue'>About Us</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotateY: 10 }}
            transition={{ duration: 0.4 }}
            className='w-80 p-6 bg-white/10 rounded-lg shadow-lg backdrop-blur-lg border border-white/20 '
          >
            <h3 className='text-3xl text-green-400 font-semibold mb-4'>{item.title}</h3>
            <p className='text-gray-400 mt-4 text-lg '>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About
