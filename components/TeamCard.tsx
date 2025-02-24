import Image from "next/image"
import { Card, CardHeader } from "./ui/card"

interface TeamCardProps {
  name: string
  role: string
  image: string
  className?: string // Add className as an optional prop
}

export function TeamCard({
  name = 'Name',
  role = 'Role',
  image = '/images/Poster.png',
  className = '',
}: TeamCardProps) {
  return (
    <Card
      className={`w-[370px] h-[370px] bg-black border border-neutral-300 shadow-lg rounded-lg p-6 ${className}`}
    >
      <CardHeader className='flex flex-col items-center text-center w-full p-0'>
        {image && (
          <div className='w-44 h-56 overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={`${name ? name + "'s profile" : 'Team member profile'}`}
              width={176}
              height={224}
              className='w-full h-full object-cover rounded-md mt-4'
            />
          </div>
        )}
      </CardHeader>

      {name && (
        <div
          className='text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 
                      text-2xl font-extrabold text-center mt-5 drop-shadow-lg tracking-wide'
        >
          {name}
        </div>
      )}

      {role && (
        <div className='text-gray-400 text-lg font-semibold text-center mt-2'>
          {role}
        </div>
      )}
    </Card>
  )
}
