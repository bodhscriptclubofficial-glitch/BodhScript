'use client'

import { EventSpotlight } from '@/components/EventSpotlight'
import Features from '@/components/Features'
import { Organizer } from '@/components/Organizer'

export default function EventsPage() {
  return (
    <>
      <div className='mt-4 w-full px-4'>
        <Features />
        <EventSpotlight />
        <Organizer />
      </div>
    </>
  )
}
