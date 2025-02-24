'use client'

import Features from '@/components/Features'
import { Organizer } from '@/components/Organizer'

export default function EventsPage() {
  return (
    <>
      {/* Features Component */}
      <div className='mt-4 w-full px-4'>
        
        <Features />
        <Organizer />
      </div>
    </>
  )
}
