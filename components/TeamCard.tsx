import * as React from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export function TeamCard({ name = 'Anurag Sharma' }) {
  return (
    <Card className='w-[350px] h-[300px] bg-black border border-neutral-300 shadow-lg rounded-lg p-4   '>
      <CardHeader className='flex flex-col items-center text-center w-full p-0'>
        {/* Image Container */}
        <div className='w-full h-[200px] overflow-hidden rounded-md'>
          <Image
            src={'/images/Poster.png'}
            alt={`${name}'s profile`}
            layout='responsive'
            width={300}
            height={200}
            className='object-cover'
          />
        </div>
      </CardHeader>

      {/* Name Section */}
      <div className='text-white text-lg font-semibold text-center mt-8 '>
        {name}
      </div>
    </Card>
  )
}
