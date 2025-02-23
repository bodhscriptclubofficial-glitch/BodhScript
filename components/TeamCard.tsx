import * as React from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

export function TeamCard({ name = 'Name', image = '/images/Poster.png' }) {
  return (
    <Card className='w-[350px] h-[300px] bg-black border border-neutral-300 shadow-lg rounded-lg p-4'>
      <CardHeader className='flex flex-col items-center text-center w-full p-0'>
        {/* Render Image only if provided */}
        {image && (
          <div className='w-40 h-52 overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={`${name ? name + "'s profile" : 'Team member profile'}`}
              width={160}
              height={210}
              className='w-full h-full object-cover rounded-md mt-4'
            />
          </div>
        )}
      </CardHeader>

      {/* Render Name only if provided */}
      {name && (
        <div
          className='text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-slate-600 
                      text-xl font-extrabold text-center mt-8 drop-shadow-lg tracking-wide'
        >
          {name}
        </div>
      )}
    </Card>
  )
}
