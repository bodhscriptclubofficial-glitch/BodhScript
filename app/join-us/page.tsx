import { JoinUsForm } from '@/components/JoinUsForm'
import { BgBeams } from '@/components/ui/BgBeams'
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'
import Link from 'next/link'

export default function JoinUsPage() {
  return (
    <div className='relative h-screen w-full mt-[101px] flex flex-col items-center justify-center'>
      <Link href='/' className='fixed top-4 left-4 z-[6000]'>
        <img
          src='/images/logo.jpg'
          alt='Logo'
          className='h-40 w-36 rounded-full object-cover shadow-lg'
        />
      </Link>

      {/* Join Us Text */}
      <h1 className='text-5xl md:text-6xl font-extrabold text-cyan-400 mb-8 '>
        Join Us
      </h1>

      {/* QR Code Section */}
      <div className='relative w-96 h-96 p-6 bg-neutral-800 rounded-lg shadow-lg border border-cyan-400'>
        <img
          src='/images/ScanMe.png'
          alt='QR Code'
          className='w-full h-full object-cover rounded-md'
        />
      </div>
    </div>
  )
}
