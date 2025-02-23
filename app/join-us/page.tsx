import { JoinUsForm } from '@/components/JoinUsForm'
import { BgBeams } from '@/components/ui/BgBeams'
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'

export default function JoinUsPage() {
  return (
    <div className='relative h-screen w-full mt-[101px]'>
      {/* Background effect */}
      {/* <div className='absolute inset-0 z-0'>
        <CanvasRevealEffect />
      </div> */}

      {/* Form on top */}
      <div className='relative z-10 flex justify-center items-center h-full -mt-16'>
        <JoinUsForm />
      </div>
    </div>
  )
}
