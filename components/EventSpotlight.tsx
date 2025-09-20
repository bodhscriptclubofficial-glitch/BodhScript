'use client';
import React, { useRef,useEffect, useState,ReactElement } from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { motion ,AnimatePresence} from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "./CodeContest/ui/button";
import { SlideTransition } from "./CodeContest/SlideTransition";
import { Slide1 } from "./CodeContest/slides/Slide1";
import { Slide2 } from "./CodeContest/slides/Slide2";
import { Slide3 } from "./CodeContest/slides/Slide3";
import { Slide4 } from "./CodeContest/slides/Slide4";
import { Slide5 } from "./CodeContest/slides/Slide5";
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

//const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];



type Slide = {
  src: string;
  alt: string;
  name: string;
};

// ✅ Strongly typed array of slides
const slides: Slide[] = [
  { src: "/images/CodeClash/img1.jpeg", alt: "img1", name: "" },

];

export default function App(): ReactElement {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [particles, setParticles] = useState<{ x: number; y: number; size: number }[]>([]);

  // Generate background particles
  useEffect(() => {
    const generated = [...Array(30)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 2 + Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
  <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
  {/* Background Gradient Animation */}
  <motion.div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(270deg, #6e3dc2, #3dc2b0, #c23dc2, #3dc26e)",
      backgroundSize: "800% 800%",
    }}
    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  />

  <div className="relative z-10 w-[90%] md:w-5/6 flex flex-col md:flex-row items-center justify-between gap-8">
{/* Left Side – Animated Text */}
<motion.div
  className="w-full md:w-1/2 text-white pr-4"   // 🔥 removed max-h and overflow
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <motion.h2
    className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    CodeClash 2025 – Successful First Phase 🎉
  </motion.h2>

  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.5 }
      }
    }}
  >
    {[
      `We are proud to share the success of the first phase of our event, CodeClash, organized by Bodh Script Club. This inaugural phase witnessed enthusiastic participation, where students showcased their coding skills, creativity, and problem-solving abilities with great energy. 💻🚀`,
      `On behalf of the entire organizing team, we extend our heartfelt gratitude to our respected Prof. (Dr.) Anand Kumar Shukla (Dean, HOS), Dr. Balraj Kumar (HOD), and to all our club members for their constant guidance and encouragement. Your support was the cornerstone of this achievement. 🙏`,
      `The success of the first phase of CodeClash is a true collective effort, marking a memorable beginning for our journey. With this milestone, we look forward to the upcoming phase and to organizing many more such innovative and impactful events in the future.`
    ].map((text, idx) => (
      <motion.p
        key={idx}
        className="text-base md:text-lg leading-relaxed text-white/90 mb-4"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 1 }}
      >
        {text}
      </motion.p>
    ))}
  </motion.div>
</motion.div>



{/* Right Side – Big Slideshow Image */}
<div className="w-full md:w-1/2 flex justify-center items-center">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentSlide}
      className="relative w-[95%] md:w-[90%] lg:w-[85%] h-[100vh] rounded-2xl overflow-hidden shadow-2xl" 
      // 🔥 replaced aspect-video with fixed height (70% of screen height)
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.img
        src={slides[currentSlide].src}
        alt={slides[currentSlide].alt}
        className="w-full h-full object-contain" // ensures full image visible
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 1, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Neon Outline */}
      <motion.div
        className="absolute inset-0 border-4 rounded-2xl border-pink-500/30"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  </AnimatePresence>
</div>


  </div>
</div>

  );
}




export function EventSpotlight() {

    const [currentIndex, setCurrentIndex] = React.useState(0); // For Use Of 3dMarquee

  React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % eventItems.length);
  }, 3000); // change slide every 3 seconds
  return () => clearInterval(interval);
}, []);      // Function For Use Of 3dMarquee

  return (
    <div className='max-w-7xl mx-auto px-4 mt-10'>
      {/* Event Info Section */}
      <div className='mt-16 relative overflow-hidden p-10 bg-gradient-to-br from-[#1e1e3f] via-[#2a0944] to-[#1e1e3f] rounded-3xl shadow-2xl border border-indigo-500/30 text-center text-white'>
        {/* Background decorative elements */}
        <div className='absolute top-0 left-0 w-full h-full opacity-10'>
          <div className='absolute top-10 left-10 w-32 h-32 rounded-full bg-cyan-500 blur-3xl'></div>
          <div className='absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500 blur-3xl'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-yellow-300 blur-3xl opacity-20'></div>
        </div>

        {/* Content */}
        <div className='relative z-10'>
          <div className='inline-block mb-6 px-6 py-2 bg-indigo-900/70 rounded-full border border-indigo-500/50 shadow-lg shadow-indigo-500/20'>
            <span className='text-sm font-medium tracking-wider text-cyan-300'>
              BODH SCRIPT CLUB PRESENTS
            </span>
          </div>

          <h3 className='text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 mb-4'>
            🎉 Code-Quest 2025 – A Huge Success! 🎉
          </h3>

          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
            The{' '}
            <span className='font-bold text-yellow-300'>Code-Quest 2025</span>,
            organized by Bodh Script Club, was an exhilarating event held on
            <span className='font-bold text-green-300'>
              {' '}
              March 28, 2025! 💻✨
            </span>
            A showcase of coding excellence with incredible participation!
          </p>

          <div className='bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-8 border border-gray-700/50'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  👨‍💻
                </div>
                <p className='text-cyan-300 font-semibold'>
                  Over <span className='text-yellow-300 text-xl'>100+</span> BCA
                  & MCA students participated!
                </p>
              </div>

              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  🏆
                </div>
                <p className='text-cyan-300 font-semibold'>
                  <span className='text-yellow-300 text-xl'>Top 20</span>{' '}
                  students awarded excellence certificates.
                </p>
              </div>

              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  🎖️
                </div>
                <p className='text-cyan-300 font-semibold'>
                  Participation certificates & duty leave granted to all.
                </p>
              </div>

              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  🚀
                </div>
                <p className='text-cyan-300 font-semibold'>
                  Boosted coding skills, and problem-solving abilities.
                </p>
              </div>
            </div>
          </div>

          <h4 className='text-2xl font-bold text-yellow-300 mb-6 inline-block px-4 py-1 bg-yellow-900/30 rounded-lg border border-yellow-500/30'>
            🌟 Event Highlights:
          </h4>

          <div className='flex flex-wrap justify-center gap-4 mb-8'>
            <div className='flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50'>
              <span>💡</span>
              <span className='text-gray-300'>Challenging coding rounds</span>
            </div>
            <div className='flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50'>
              <span>🔥</span>
              <span className='text-gray-300'>Competitive environment</span>
            </div>
            <div className='flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50'>
              <span>🤝</span>
              <span className='text-gray-300'>Networking opportunity</span>
            </div>
          </div>

          <button className='group relative mt-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition duration-300 text-black font-bold rounded-xl shadow-lg overflow-hidden'>
            <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300'></span>
            <span className='relative flex items-center justify-center gap-2'>
              <span>📸</span>
              <span>View Event Snapshots Below</span>
            </span>
          </button>
        </div>
      </div>
       <div className='mt-20 mb-8 text-center'>
        <h3 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 inline-block'>
          Upcoming Event
        </h3>
        <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-2 rounded-full'></div>
      </div>

        <div className="relative w-full h-96 md:h-[800px] rounded-2xl overflow-hidden shadow-2xl">
          <App  />
        </div>


      {/* Enhanced Marquee Section */}
      <div className='mt-20 mb-8 text-center'>
        <h3 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 inline-block'>
          Event Gallery
        </h3>
        <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-2 rounded-full'></div>
      </div>

      <div className='relative mb-20 h-[28rem] md:h-[32rem]'>
        {/* Background decorative elements for Marquee section */}
        <div className='absolute inset-0 w-full h-full -z-10 opacity-5'>
          <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-500 blur-3xl'></div>
          <div className='absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500 blur-3xl'></div>
        </div>

        {eventItems.map((item, i) => {
          const isActive = i === currentIndex; // show only the active slide
           return (
                <div
                  key={i}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {item.header}
                  <div className="absolute bottom-0 w-full p-4 bg-gray-900/80">
                    <h3 className="text-cyan-300 font-bold">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
                   );
                  })}

        <div className='text-center mt-10'>
          <button className='px-6 py-3 bg-indigo-900/70 text-cyan-300 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/70 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 mt-12'>
            View Full Gallery
          </button>
        </div>
      </div>
    </div>
  )
}

const eventItems = [
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/img1.jpg'
          alt='CodeQuest Highlights'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-cyan-500/80 text-black text-xs font-bold rounded-full mb-2'>
              HIGHLIGHT
            </span>
            <h4 className='text-white text-lg font-bold'>Main Event</h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Highlights',
    description: 'A glimpse of the exciting moments from CodeQuest 2025.',
    className: 'md:col-span-4 md:row-span-2',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/hod.jpg'
          alt='HOD Address'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-yellow-500/80 text-black text-xs font-bold rounded-full mb-2'>
              OPENING
            </span>
            <h4 className='text-white text-lg font-bold'>Department Head</h4>
          </div>
        </div>
      </div>
    ),
    title: 'HOD Address',
    description: 'The Head of Department addressing the participants.',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/round2.jpg'
          alt='Round 2'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-purple-500/80 text-black text-xs font-bold rounded-full mb-2'>
              COMPETITION
            </span>
            <h4 className='text-white text-lg font-bold'>Advanced Round</h4>
          </div>
        </div>
      </div>
    ),
    title: 'Round 2 Challenges',
    description: 'Participants tackling advanced problems in Round 2.',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/img2.jpg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              HIGHLIGHT
            </span>
            <h4 className='text-white text-lg font-bold'>Round 1</h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
  // Added More Events Pictures on 27/08/2025 by DEV: Diptimoy Datta

  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic1.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic2.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic3.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
{
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic4.jpeg'
          alt='CodeQuest Winners'
          //className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
          className='w-full h-full object-contain transition-transform duration-700 group-hover:scale-110'

        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
 {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic5.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },

   {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic6.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    //title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },

  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic7.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    //title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic8.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    //title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic9.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    //title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
]


