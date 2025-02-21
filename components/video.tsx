import { TextReveal } from './magicui/text-reveal'

export function Video() {
  return (
    <div className='overflow-hidden'>
      {/* Hero Section with Fullscreen Video */}
      <div className='relative w-screen h-screen'>
        {/* Video Background */}
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src='/video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Visibility */}
        <div className='absolute inset-0 bg-black/50'></div>

        {/* Centered Text */}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4'>
          <h1 className='text-4xl md:text-6xl font-bold'>
            Welcome to Our Website
          </h1>
          <p className='mt-4 text-lg md:text-xl'>
            Experience the future with us.
          </p>
        </div>
      </div>

      {/* Slightly reduced space between video and text */}
      <div className='h-16'></div>

      {/* Scroll-triggered Message Section */}
      <div className='min-h-[80vh] flex items-center justify-center px-6'>
        <div className='max-w-3xl text-center'>
          <TextReveal text='Want to develop your skills and find the right mentors?' />
        </div>
      </div>
    </div>
  )
}
