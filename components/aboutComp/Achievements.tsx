// 'use client'
// import { motion } from 'framer-motion'
// import { Card, CardContent } from '@/components/ui/card' // Assuming ShadCN is configured

// const achievements = [
//   { year: '2022', event: 'Hosted first hackathon 🚀' },
//   { year: '2023', event: 'Contributed to Open Source 🔥' },
//   { year: '2024', event: 'Members secured top internships 🎯' },
// ]

// const Achievements = () => {
//   return (
//     <div className='py-20 bg-black text-white text-center'>
//       <h2 className='text-4xl font-bold mb-10'>Our Achievements</h2>
//       <div className='relative max-w-3xl mx-auto space-y-8'>
//         {achievements.map((item, index) => (
//           <motion.div
//             key={index}
//             className='flex items-center gap-6'
//             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.3 }}
//           >
//             <div className='w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold shadow-lg'>
//               {index + 1}
//             </div>
//             <Card className='bg-white/10 border border-white/20 text-left shadow-lg backdrop-blur-lg w-full'>
//               <CardContent className='p-4'>
//                 <p className='text-lg font-semibold'>{item.year}</p>
//                 <p className='text-gray-300'>{item.event}</p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Achievements
// 'use client'
// import { motion } from 'framer-motion'

// const achievements = [
//   {
//     title: 'Founded in 2023',
//     description:
//       'BodhScript Club was established to bring developers together.',
//     year: '2023',
//   },
//   {
//     title: '100+ Members',
//     description: 'Reached a milestone of 100+ active developers.',
//     year: '2024',
//   },
//   {
//     title: 'Hosted 5 Hackathons',
//     description: 'Organized multiple successful coding hackathons.',
//     year: '2024',
//   },
//   {
//     title: 'Open-Source Contributions',
//     description: 'Contributed to various open-source projects globally.',
//     year: '2025',
//   },
// ]

// const Achievements = () => {
//   return (
//     <div className='py-20 bg-black text-white'>
//       <h2 className='text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
//         Our Achievements 🎖️
//       </h2>

//       <div className='relative mt-12 mx-auto w-full max-w-4xl'>
//         {/* Vertical Timeline Line */}
//         <div className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 h-full'></div>

//         {/* Timeline Items */}
//         {achievements.map((achievement, index) => (
//           <motion.div
//             key={index}
//             className={`relative flex items-center justify-${
//               index % 2 === 0 ? 'start' : 'end'
//             } w-full mb-12`}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//           >
//             {/* Connector Dot */}
//             <div className='absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-black'></div>

//             {/* Content Box */}
//             <div
//               className={`w-5/12 p-6 border border-white/20 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg ${
//                 index % 2 === 0 ? 'ml-auto text-left' : 'mr-auto text-right'
//               }`}
//             >
//               <h3 className='text-2xl font-semibold'>{achievement.title}</h3>
//               <p className='mt-2 text-gray-300'>{achievement.description}</p>
//               <span className='block mt-3 text-sm font-bold text-purple-400'>
//                 {achievement.year}
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Achievements

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
