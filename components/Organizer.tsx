'use client'
import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import Image from 'next/image'

const content = [
  {
    title: 'Dr. Anand Kumar Shukla',
    subtitle: 'Head of School (HOS) Dean',
    description:
      'The School of Computer Applications is dedicated to fostering excellence in the education of young minds, equipping them with the skills necessary to devise innovative, technology-driven solutions for societal, industrial, and global challenges. Our industry-oriented curricula are designed to be innovative, incorporating rich pedagogical initiatives such as Bring Your Own Device (BYOD) programs, capstone projects, case studies, and courses taught by industry experts. These initiatives empower students to evolve into the problem-solvers of tomorrow. With various pathways available, from application and product development to advanced studies, we prepare our students to excel as corporate professionals and entrepreneurs',
    content: (
      <div className='h-full w-full flex items-center justify-center text-white'>
        <Image
          src='/images/members/DrAnandKumarShukla.jpg'
          width={500}
          height={500}
          className='w-full h-full object-contain transition-opacity duration-500'
          alt='Dr. Anand Kumar Shukla'
        />
      </div>
    ),
  },
  {
    title: 'Girish Kumar',
    subtitle: 'Asst. Professor & Organizer',
    description:
      'Girish Kumar holds a B.Sc. (Computer Science) Degree and PGDCA, MIT from GNDU and is a Research Scholar currently working as an Assistant Professor at Lovely Professional University. He has more than 23 years of teaching experience. He has 24 patents to his credit, 10 books in 4 different languages and has published more than 40 research papers in different national as well as international conferences and journals. He has authored four books published by reputed national and international publishers. He is also a Certified Academic Associate by IBM for DB2. He is an active member of IAENG- International Association of Engineers',
    content: (
      <div className='h-full w-full flex items-center justify-center text-white'>
        <Image
          src='/images/members/Girish.jpg'
          width={500}
          height={500}
          className='w-full h-full object-contain transition-opacity duration-500'
          alt='Girish Kumar'
        />
      </div>
    ),
  },
]

export function Organizer() {
  return (
    <div className='relative min-h-screen py-12 px-4 w-full'>
      <div className='text-center '>
        <h2 className='text-4xl md:text-6xl font-extrabold text-cyber-blue drop-shadow-lg mb-6'>
          Organizers
        </h2>
      </div>
      <div className='h-[35rem] w-full overflow-y-auto p-6 bg-opacity-80 rounded-lg '>
        <div className=' min-w-96 max-w-fit flex justify-center items-center mx-auto border-2 border-gray-600 shadow-lg shadow-gray-700'>
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  )
}
