import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from '@radix-ui/react-icons'

import { BentoCard, BentoGrid } from './magicui/bento-grid'

const features = [
  {
    imageSrc: '/images/Poster.jpg', // Replace with your actual image path
    Icon: FileTextIcon,
    className:
      'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bg-gray-200',
    // name: 'Feature 1',
    // description: 'Description for feature 1.',
    // href: '/',
    // cta: 'Learn more',
  },
  {
    imageSrc: '/images/Poster.jpg', // Replace with your actual image path
    Icon: InputIcon,
    className:
      'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 bg-gray-200',
    // name: 'Feature 2',
    // description: 'Description for feature 2.',
    // href: '/',
    // cta: 'Learn more',
  },
  {
    imageSrc: '/images/Poster.jpg', // Replace with your actual image path
    Icon: GlobeIcon,
    className:
      'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 bg-gray-200',
    // name: 'Feature 3',
    // description: 'Description for feature 3.',
    // href: '/',
    // cta: 'Learn more',
  },
  {
    imageSrc: '/images/Poster.jpg', // Replace with your actual image path
    Icon: BellIcon,
    className:
      'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-gray-200',
    // name: 'Feature 4',
    // description: 'Description for feature 4.',
    // href: '/',
    // cta: 'Learn more',
  },
  {
    imageSrc: '/images/Poster.jpg', // Replace with your actual image path
    Icon: CalendarIcon,
    className:
      'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 bg-gray-200',
    // name: 'Feature 5',
    // description: 'Description for feature 5.',
    // href: '/',
    // cta: 'Learn more',
  },
]

export function Bento() {
  return (
    <BentoGrid className='lg:grid-rows-3 px-20'>
      {features.map((feature) => (
        <BentoCard
          key={feature.imageSrc}
          className={feature.className}
          // name={feature.name}
          background={
            <img
              src={feature.imageSrc}
              // alt={feature.name}
              className='object-cover'
            />
          }
          Icon={feature.Icon}
          // description={feature.description}
          // href={feature.href}
          // cta={feature.cta}
        />
      ))}
    </BentoGrid>
  )
}
