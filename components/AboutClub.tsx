'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Users, Code, Rocket, Lightbulb, Book } from 'lucide-react'
import Marquee from 'react-fast-marquee'
// import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export default function AboutClub() {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center text-center py-20 px-5'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl font-bold text-blue-400'
        >
          Welcome to BodhScript Club 🚀
        </motion.h1>
        <p className='text-lg text-gray-300 mt-4 max-w-2xl'>
          A community of passionate coders, developers, and tech enthusiasts!
        </p>
        <Button className='mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg'>
          Join Us
        </Button>
      </section>

      {/* Stats & Highlights Section */}
      <section className='py-16 px-8 grid md:grid-cols-3 gap-6 text-center'>
        {[
          { count: '500+', label: 'Members' },
          { count: '30+', label: 'Hackathons Conducted' },
          { count: '100+', label: 'Open-Source Contributions' },
        ].map((stat, index) => (
          <Card
            key={index}
            className='p-6 bg-gray-800 border border-gray-700 rounded-lg'
          >
            <h2 className='text-4xl font-bold text-blue-400'>{stat.count}</h2>
            <p className='text-gray-400'>{stat.label}</p>
          </Card>
        ))}
      </section>

      {/* What We Do - Accordion */}
      <section className='py-16 px-8'>
        <h2 className='text-3xl font-bold text-center mb-6'>What We Do</h2>
        <Accordion type='single' collapsible className='max-w-3xl mx-auto'>
          {[
            {
              title: 'Coding Workshops & Bootcamps',
              icon: <Code size={20} />,
              desc: 'Learn programming languages, frameworks, and new technologies.',
            },
            {
              title: 'Hackathons & Coding Challenges',
              icon: <Rocket size={20} />,
              desc: 'Compete, solve real-world problems, and sharpen your skills.',
            },
            {
              title: 'Open-Source Projects',
              icon: <Book size={20} />,
              desc: 'Contribute and build impactful projects with the community.',
            },
            {
              title: 'Tech Talks & Guest Lectures',
              icon: <Lightbulb size={20} />,
              desc: 'Gain insights from industry professionals and experts.',
            },
            {
              title: 'Networking & Career Guidance',
              icon: <Users size={20} />,
              desc: 'Connect with like-minded developers and grow your career.',
            },
          ].map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='flex items-center gap-2'>
                {item.icon} {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.desc}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Tech Stack Showcase */}
      <section className='py-16 bg-gray-800'>
        <h2 className='text-3xl font-bold text-center mb-6'>
          Technologies We Love
        </h2>
        <Marquee
          gradient={false}
          speed={50}
          className='flex items-center space-x-10'
        >
          {[
            'Next.js',
            'React',
            'Node.js',
            'TypeScript',
            'Python',
            'MongoDB',
            'Docker',
            'GitHub',
          ].map((tech, index) => (
            <Card
              key={index}
              className='p-4 bg-gray-900 text-blue-400 text-lg rounded-lg border border-gray-700 shadow-md'
            >
              {tech}
            </Card>
          ))}
        </Marquee>
      </section>

      {/* Testimonials Slider */}
      <section className='py-16 px-8'>
        <h2 className='text-3xl font-bold text-center mb-6'>
          What Our Members Say
        </h2>
        {/* <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          opts={{ align: 'start', loop: true }}
          className='max-w-lg mx-auto'
        >
          <CarouselContent>
            {[
              {
                name: 'Alice',
                text: 'BodhScript Club helped me land my first internship!',
              },
              {
                name: 'Bob',
                text: 'Great place to collaborate and learn new skills!',
              },
              {
                name: 'Charlie',
                text: 'The workshops and hackathons are amazing!',
              },
            ].map((testimonial, index) => (
              <CarouselItem
                key={index}
                className='text-center p-6 bg-gray-800 rounded-lg shadow-lg'
              >
                <p className='text-lg italic text-gray-300'>
                  "{testimonial.text}"
                </p>
                <p className='text-blue-400 mt-3 font-bold'>
                  - {testimonial.name}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> */}
      </section>

      {/* Join Us - CTA */}
      <section className='py-16 px-8 text-center bg-blue-600 text-white rounded-lg shadow-lg max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold'>Ready to Code the Future?</h2>
        <p className='text-lg mt-3'>
          Join BodhScript Club and start your journey today!
        </p>
        <Button className='mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 text-lg rounded-lg'>
          Join Now
        </Button>
      </section>
    </div>
  )
}
