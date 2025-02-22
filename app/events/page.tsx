'use client'

import Features from '@/components/Features'

export default function EventsPage() {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-8'>
      {/* Video Section (Optimized for Fit) */}
      <div className='w-full h-[75vh] flex items-center justify-center'>
        <video
          className='w-full h-full object-contain rounded-lg shadow-lg'
          controls
          loop
          muted
          poster='/images/Poster.png'
        >
          <source src='/video/Video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Features Component */}
      <div className='mt-8 w-full px-4'>
        <Features />
      </div>
    </div>
  )
}
