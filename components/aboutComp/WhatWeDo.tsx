// 'use client'
// import { motion } from 'framer-motion'

// const features = [
//   '✅ Coding Workshops & Bootcamps',
//   '✅ Hackathons & Coding Challenges',
//   '✅ Open-Source Projects',
//   '✅ Tech Talks & Guest Lectures',
//   '✅ Networking & Career Guidance',
// ]

// const WhatWeDo = () => {
//   return (
//     <div className='py-20 text-white bg-black text-center'>
//       <h2 className='text-4xl font-bold mb-10'>What We Do</h2>
//       <div className='space-y-6'>
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             className='text-xl'
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//           >
//             {feature}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default WhatWeDo
'use client'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

const activities = [
  { title: 'Coding Workshops', icon: '💻' },
  { title: 'Hackathons', icon: '🚀' },
  { title: 'Open-Source Projects', icon: '🌍' },
  { title: 'Tech Talks', icon: '🎤' },
  { title: 'Networking', icon: '🔗' },
]

const WhatWeDo = () => {
  return (
    <div className='py-20 bg-black text-white text-center'>
      <h2 className='text-6xl font-extrabold text-cyber-pink'>
        What We Do
      </h2>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-8'>
        {activities.map((activity, index) => (
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} key={index}>
            <motion.div
              className='p-6 border border-white/20 bg-white/10 backdrop-blur-lg rounded-lg text-center shadow-lg transition-transform hover:shadow-xl hover:border-purple-500'
              whileHover={{ scale: 1.1 }}
            >
              <p className='text-5xl'>{activity.icon}</p>
              <h3 className='text-xl font-semibold mt-4'>{activity.title}</h3>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}

export default WhatWeDo
