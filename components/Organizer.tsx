'use client'
import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import Image from 'next/image'

const content = [
  {
    title: 'Prof.(Dr.) Anand Kumar Shukla',
    subtitle: 'Dean and HOS-SCA',
    description:
      'The School of Computer Applications is dedicated to fostering excellence in the education of young minds, equipping them with the skills necessary to devise innovative, technology-driven solutions for societal, industrial, and global challenges. Our industry-oriented curricula are designed to be innovative, incorporating rich pedagogical initiatives such as Bring Your Own Device (BYOD) programs, capstone projects, case studies, and courses taught by industry experts. These initiatives empower students to evolve into the problem-solvers of tomorrow. With various pathways available, from application and product development to advanced studies, we prepare our students to excel as corporate professionals and entrepreneurs',
    content: (
      <div className='h-full w-full flex items-center justify-center text-white'>
        <Image
          src='/images/members/DrAnand.jpg'
          width={500}
          height={500}
          className='w-full h-full object-contain transition-opacity duration-500'
          alt='Dr. Anand Kumar Shukla'
        />
      </div>
    ),
  },
  {
    title: 'Dr. Girish Kumar',
    subtitle: 'Associate Professor & Organizer',
    description:
      'Dr. Girish Kumar holds a Ph.D. in Computer Applications, along with a PGDCA and an MIT, and is currently serving as an Associate Professor at Lovely Professional University. With over 23 years of teaching and research experience in the field of Computer Applications, his core expertise lies in Programming and Software Development, complemented by work in databases, artificial intelligence, networking, and cybersecurity. He has made notable contributions through 24 patents, 10 books in four languages, and over 40 research papers published in reputable national and international journals and conferences, as well as four books by leading publishers. He is also a Certified Academic Associate (IBM–DB2) and an active member of the International Association of Engineers (IAENG).',
    content: (
      <div className='h-full w-full flex items-center justify-center text-white'>
        <Image
          src='/images/members/DrGirish.jpg'
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
