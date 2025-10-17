'use client'

import dynamic from 'next/dynamic'
import Features from '@/components/Features'
import { Organizer } from '@/components/Organizer'

// Dynamic client-side import to prevent SSR
const EventSpotlight = dynamic(() => import('@/components/EventSpotlight').then(mod => mod.EventSpotlight), { ssr: false });

export default function EventsPage() {
  return (
    <div className='mt-4 w-full px-4'>
      <Features />
      <EventSpotlight />
      <Organizer />
    </div>
  )
}
