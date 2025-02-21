// 'use client'

// import React, { useEffect, useState } from 'react'

// // Typing Animation Component
// const TypingAnimation = ({
//   children,
//   className = '',
//   duration = 100,
//   delay = 0,
// }) => {
//   const [displayedText, setDisplayedText] = useState('')
//   const [started, setStarted] = useState(false)

//   useEffect(() => {
//     const startTimeout = setTimeout(() => {
//       setStarted(true)
//     }, delay)
//     return () => clearTimeout(startTimeout)
//   }, [delay])

//   useEffect(() => {
//     if (!started || !children) return
//     let i = 0
//     const typingEffect = setInterval(() => {
//       if (i < children.length) {
//         setDisplayedText(children.substring(0, i + 1))
//         i++
//       } else {
//         clearInterval(typingEffect)
//       }
//     }, duration)
//     return () => clearInterval(typingEffect)
//   }, [children, duration, started])

//   return (
//     <div className={`inline-block font-bold ${className}`}>{displayedText}</div>
//   )
// }

// // Abstract Animation Component for right side
// const AnimatedBackground = () => {
//   return (
//     <div className='relative w-full h-full bg-black/[0.96] overflow-hidden'>
//       {/* Animated circles */}
//       <div className='absolute inset-0'>
//         <div className='absolute w-96 h-96 -top-12 -right-12 bg-blue-500/30 rounded-full blur-3xl animate-pulse' />
//         <div className='absolute w-96 h-96 bottom-0 -right-12 bg-purple-500/20 rounded-full blur-3xl animate-pulse' />
//       </div>

//       {/* Floating elements */}
//       <div className='absolute inset-0 flex items-center justify-center'>
//         <div className='relative w-64 h-64'>
//           {/* Animated geometric shapes */}
//           <div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-lg transform rotate-45 animate-float-slow' />
//           <div className='absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-purple-400/20 rounded-full animate-float' />
//           <div className='absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-bl from-purple-500/20 to-blue-400/20 rounded-lg transform -translate-x-1/2 -translate-y-1/2 rotate-12 animate-float-fast' />
//         </div>
//       </div>
//     </div>
//   )
// }

// // Main Hero Section Component
// export default function HeroSection() {
//   return (
//     <div className='w-full h-screen bg-black/[0.96] relative overflow-hidden'>
//       {/* Spotlight effect */}
//       <div className='absolute pointer-events-none inset-0 bg-gradient-to-tr from-blue-500/30 via-transparent to-transparent blur-3xl opacity-70 -top-40 left-0 md:left-60 md:-top-20' />

//       <div className='flex h-full'>
//         {/* Left content */}
//         <div className='flex-1 p-10 relative z-10 mt-4 flex flex-col justify-center'>
//           {/* Text container with minimum height */}
//           // In your HeroSection component, update these parts
//           <div className='min-h-[120px] md:min-h-[180px]'>
//             {' '}
//             {/* Reduced height */}
//             <h1 className='text-5xl md:text-7xl font-extrabold tracking-wide'>
//               <div className='bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-500'>
//                 <TypingAnimation>Welcome to</TypingAnimation>
//               </div>
//               <div className='bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-500'>
//                 <TypingAnimation delay={1000}>Bodh Script Club</TypingAnimation>
//               </div>
//             </h1>
//           </div>
//           <p className='mt-2 text-lg text-neutral-300 max-w-xl leading-relaxed'>
//             {' '}
//             {/* Changed mt-4 to mt-2 */}
//             Unlock the power of <b>creative coding</b> and
//             <b> immersive UI design.</b>
//             Join us to explore cutting-edge technologies and bring ideas to
//             life.
//           </p>
//         </div>

//         {/* Right content */}
//         <div className='flex-1 relative'>
//           <AnimatedBackground />
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import { Suspense, lazy } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
// import { TypingAnimation } from '@/components/ui/typing-animation' // Assuming this exists

// Import Spline component
const Spline = lazy(() => import('@splinetool/react-spline'))

// SplineScene component
function SplineScene({ scene, className }) {
  return (
    <Suspense
      fallback={
        <div className='w-full h-full flex items-center justify-center'>
          <span className='loader'></span>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}

export default function HeroSection() {
  return (
    <div className='w-full h-screen bg-black/[0.96] relative overflow-hidden'>
      {/* Spotlight effect */}
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='white'
      />

      <div className='flex h-full'>
        {/* Left content - keeping your original text */}
        <div className='flex-1 p-10 relative z-10 mt-4 flex flex-col justify-center'>
          {/* Text container with minimum height */}
          <div className='min-h-[120px] md:min-h-[180px]'>
            <h1 className='text-5xl md:text-7xl font-extrabold tracking-wide'>
              <div className='bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-500'>
                Welcome to
              </div>
              <div className='bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-500'>
                Bodh Script Club
              </div>
            </h1>
          </div>
          <p className='mt-2 text-lg text-neutral-300 max-w-xl leading-relaxed'>
            Unlock the power of <b>creative coding</b> and
            <b> immersive UI design.</b>
            Join us to explore cutting-edge technologies and bring ideas to
            life.
          </p>
        </div>

        {/* Right content - replaced with Spline component */}
        <div className='flex-1 relative'>
          <SplineScene
            scene='https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'
            className='w-full h-full'
          />
        </div>
      </div>
    </div>
  )
}
