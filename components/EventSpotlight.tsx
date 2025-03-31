import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'

export function EventSpotlight() {
  return (
    <div className='max-w-7xl mx-auto px-4 mt-10'>
      {/* Event Info Section */}
      <div className='mt-16 relative overflow-hidden p-10 bg-gradient-to-br from-[#1e1e3f] via-[#2a0944] to-[#1e1e3f] rounded-3xl shadow-2xl border border-indigo-500/30 text-center text-white'>
        {/* Background decorative elements */}
        <div className='absolute top-0 left-0 w-full h-full opacity-10'>
          <div className='absolute top-10 left-10 w-32 h-32 rounded-full bg-cyan-500 blur-3xl'></div>
          <div className='absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500 blur-3xl'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-yellow-300 blur-3xl opacity-20'></div>
        </div>

        {/* Content */}
        <div className='relative z-10'>
          <div className='inline-block mb-6 px-6 py-2 bg-indigo-900/70 rounded-full border border-indigo-500/50 shadow-lg shadow-indigo-500/20'>
            <span className='text-sm font-medium tracking-wider text-cyan-300'>
              BODH SCRIPT CLUB PRESENTS
            </span>
          </div>

          <h3 className='text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 mb-4'>
            🎉 Code-Quest 2025 – A Huge Success! 🎉
          </h3>

          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
            The{' '}
            <span className='font-bold text-yellow-300'>Code-Quest 2025</span>,
            organized by Bodh Script Club, was an exhilarating event held on
            <span className='font-bold text-green-300'>
              {' '}
              March 28, 2025! 💻✨
            </span>
            A showcase of coding excellence with incredible participation!
          </p>

          <div className='bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-8 border border-gray-700/50'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  👨‍💻
                </div>
                <p className='text-cyan-300 font-semibold'>
                  Over <span className='text-yellow-300 text-xl'>100+</span> BCA
                  & MCA students participated!
                </p>
              </div>

              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  🏆
                </div>
                <p className='text-cyan-300 font-semibold'>
                  <span className='text-yellow-300 text-xl'>Top 20</span>{' '}
                  students awarded excellence certificates.
                </p>
              </div>

              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  🎖️
                </div>
                <p className='text-cyan-300 font-semibold'>
                  Participation certificates & duty leave granted to all.
                </p>
              </div>

              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  🚀
                </div>
                <p className='text-cyan-300 font-semibold'>
                  Boosted coding skills, and problem-solving abilities.
                </p>
              </div>
            </div>
          </div>

          <h4 className='text-2xl font-bold text-yellow-300 mb-6 inline-block px-4 py-1 bg-yellow-900/30 rounded-lg border border-yellow-500/30'>
            🌟 Event Highlights:
          </h4>

          <div className='flex flex-wrap justify-center gap-4 mb-8'>
            <div className='flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50'>
              <span>💡</span>
              <span className='text-gray-300'>Challenging coding rounds</span>
            </div>
            <div className='flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50'>
              <span>🔥</span>
              <span className='text-gray-300'>Competitive environment</span>
            </div>
            <div className='flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50'>
              <span>🤝</span>
              <span className='text-gray-300'>Networking opportunity</span>
            </div>
          </div>

          <button className='group relative mt-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition duration-300 text-black font-bold rounded-xl shadow-lg overflow-hidden'>
            <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300'></span>
            <span className='relative flex items-center justify-center gap-2'>
              <span>📸</span>
              <span>View Event Snapshots Below</span>
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced Bento Grid Section */}
      <div className='mt-20 mb-8 text-center'>
        <h3 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 inline-block'>
          Event Gallery
        </h3>
        <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-2 rounded-full'></div>
      </div>

      <div className='relative mb-20'>
        {/* Background decorative elements for grid section */}
        <div className='absolute inset-0 w-full h-full -z-10 opacity-5'>
          <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-500 blur-3xl'></div>
          <div className='absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500 blur-3xl'></div>
        </div>

        <BentoGrid className='grid grid-cols-1 md:grid-cols-6 gap-6 md:auto-rows-[20rem] mt-8'>
          {eventItems.map((item, i) => (
            <BentoGridItem
              key={i}
              className={`${item.className} overflow-hidden bg-gradient-to-br from-gray-900/90 to-indigo-900/80 backdrop-blur-sm rounded-3xl border border-indigo-500/20 hover:border-indigo-400/40 shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300`}
              header={item.header}
              title={
                <span className='text-lg font-bold text-cyan-300'>
                  {item.title}
                </span>
              }
              description={
                <span className='text-gray-300'>{item.description}</span>
              }
            />
          ))}
        </BentoGrid>

        <div className='text-center mt-10'>
          <button className='px-6 py-3 bg-indigo-900/70 text-cyan-300 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/70 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 mt-12'>
            View Full Gallery
          </button>
        </div>
      </div>
    </div>
  )
}

const eventItems = [
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/img1.jpg'
          alt='CodeQuest Highlights'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-cyan-500/80 text-black text-xs font-bold rounded-full mb-2'>
              HIGHLIGHT
            </span>
            <h4 className='text-white text-lg font-bold'>Main Event</h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Highlights',
    description: 'A glimpse of the exciting moments from CodeQuest 2025.',
    className: 'md:col-span-4 md:row-span-2',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/hod.jpg'
          alt='HOD Address'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-yellow-500/80 text-black text-xs font-bold rounded-full mb-2'>
              OPENING
            </span>
            <h4 className='text-white text-lg font-bold'>Department Head</h4>
          </div>
        </div>
      </div>
    ),
    title: 'HOD Address',
    description: 'The Head of Department addressing the participants.',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/round2.jpg'
          alt='Round 2'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-purple-500/80 text-black text-xs font-bold rounded-full mb-2'>
              COMPETITION
            </span>
            <h4 className='text-white text-lg font-bold'>Advanced Round</h4>
          </div>
        </div>
      </div>
    ),
    title: 'Round 2 Challenges',
    description: 'Participants tackling advanced problems in Round 2.',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/img2.jpg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              AWARDS
            </span>
            <h4 className='text-white text-lg font-bold'>Celebration</h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
]
