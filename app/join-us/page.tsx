import { JoinUsForm } from '@/components/JoinUsForm'
import { BgBeams } from '@/components/ui/BgBeams'
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'
import Link from 'next/link'

export default function JoinUsPage() {
  return (
    <div className='relative h-screen w-full mt-[101px]'>
      <Link href='/' className='fixed top-4 left-4 z-[6000]'>
        <img
          src='/images/logo.jpg'
          alt='Logo'
          className='h-40 w-36 rounded-full object-cover shadow-lg'
        />
      </Link>
      {/* Background effect */}
      {/* <div className='absolute inset-0 z-0'>
        <CanvasRevealEffect />
      </div> */}

      {/* Form on top */}
      <div className='relative z-10 flex justify-center items-center h-full -mt-16 w-full'>
        {/* <JoinUsForm /> */}
        <div className='relative w-64 h-64 p-4 bg-neutral-800 rounded-lg shadow-lg border border-cyan-400'>
          <img
            src='/images/qr2.jpg'
            alt='QR Code'
            className='w-full h-full object-cover rounded-md'
          />
        </div>
      </div>
    </div>
  )
}
