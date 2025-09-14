import React, { useEffect, useState } from 'react'

export function FacultyScroll() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % faculties.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Custom decorative icon instead of emoji
  const HeadingIcon = () => (
    <svg
      className='w-10 h-10 inline-block text-cyan-400 mr-2'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      viewBox='0 0 24 24'
    >
      <path d='M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91 4 9.27l5.91-.99L12 2z' />
    </svg>
  )

  return (
    <div className='max-w-7xl mx-auto px-4 mt-20'>
      {/* Bigger & bolder heading with unique icon */}
      <h3 className='text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 mb-10 flex justify-center items-center gap-3'>
        <HeadingIcon />
        Faculty Spotlight
      </h3>

      <div className='relative w-full overflow-hidden h-[26rem]'>
        {faculties.map((faculty, i) => {
          const isActive = i === currentIndex
          return (
            <div
              key={i}
              className={`absolute top-0 flex items-center justify-center w-full h-full transition-all duration-1000 transform ${
                isActive
                  ? 'translate-x-0 opacity-100 z-10'
                  : 'translate-x-full opacity-0 z-0'
              }`}
            >
              {/* Bigger Faculty Card */}
              <div className='flex items-center gap-10 bg-gradient-to-r from-indigo-900/80 to-purple-900/60 p-10 rounded-3xl shadow-2xl border border-indigo-500/40'>
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className='w-40 h-40 object-cover rounded-full border-4 border-cyan-400 shadow-lg'
                />
                <div>
                  <h4 className='text-3xl font-bold text-yellow-300'>
                    {faculty.name}
                  </h4>
                  <p className='text-xl text-cyan-300 font-semibold mt-2'>
                    {faculty.designation}
                  </p>
                  <p className='text-lg text-gray-300 italic mt-4'>
                    "{faculty.tagline}"
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Dots */}
      <div className='flex justify-center mt-8 space-x-3'>
        {faculties.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-4 h-4 rounded-full transition-all ${
              i === currentIndex ? 'bg-cyan-400 scale-125' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const faculties = [
  {
    image: '/images/faculties/DrAnand.jpg',
    name: 'Dr. Anand Kumar Shukla',
    designation: 'Head of School',
    tagline: 'Leadership is about inspiring others to achieve greatness.',
  },
  {
    image: '/images/faculties/DrRishi.jpg',
    name: 'Dr. Rishi Chopra',
    designation: 'Controller of School',
    tagline: 'AI and Machine Learning are shaping the future of innovation.',
  },
  {
    image: '/images/faculties/DrBalraj.jpg',
    name: 'Dr. Balraj Kumar',
    designation: 'Associate Professor & Asst. Dean',
    tagline: 'Education is not about tools, it’s about transforming minds.',
  },
  {
    image: '/images/faculties/DrPawan.jpg',
    name: 'Dr. Pawan Kumar',
    designation: 'Associate Professor & Dy.Dean',
    tagline: 'True leadership inspires minds to think beyond limits.',
  },
  {
    image: '/images/faculties/DrSartaj.jpg',
    name: 'Dr. Sartaj Singh',
    designation: 'Head of Data Sciences & Data Analytics',
    tagline:
      'Data is the oil of the 21st century, and analytics is its engine.',
  },
  {
    image: '/images/faculties/MrAjay.jpg',
    name: 'Mr. Ajay Kumar Bansal',
    designation: 'Assistant Professor',
    tagline: 'Problem-solving and coding open the door to endless creativity.',
  },
  {
    image: '/images/faculties/DrGurpreet.jpeg',
    name: 'Dr. Gurpreet Singh Bhatia',
    designation: 'Head of COD, Mathematics',
    tagline: 'Mathematics is the language in which the universe is written.',
  },
]
