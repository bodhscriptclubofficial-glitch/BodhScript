import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from './useInView';
import { PreviousEventCard } from './PreviousEventCard';

export function Events() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  // 🔴 UPCOMING EVENTS EMPTY
  const upcomingEvents: any[] = [];

  const previousEvents = [
    {
      id: 4,
      title: 'Code Quest 2025',
      date: 'Jan 10, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Block-38, Room 204',
      category: 'Workshop',
      images: [
        '/images/codequest/img1.jpg',
        '/images/codequest/round2.jpg',
        '/images/codequest/hod.jpg',
        '/images/codequest/img2.jpg'
      ],
      gradient: 'from-cyan-600 to-blue-600',
      attendees: 150
    },
    {
      id: 5,
      title: 'Code Clash 2025',
      date: 'Oct 5, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'Block-38, Room 304',
      category: 'Hackathon',
      images: [
        '/images/CodeClash/CodeClashPic2.jpeg',
        '/images/CodeClash/CodeClashPic3.jpeg',
        '/images/CodeClash/CodeClashPic4.jpeg',
        '/images/CodeClash/CodeClashPic5.jpeg',
      ],
      gradient: 'from-emerald-600 to-teal-600',
      attendees: 200
    },
    {
      id: 6,
      title: 'Scratch Your Brain 2025',
      date: 'Dec 18, 2025',
      time: '4:00 PM - 6:00 PM',
      location: 'Block-38, Room 704',
      category: 'Hackathon',
      images: [
        '/images/Scratchyourbrain/SCYB-1.jpeg',
        '/images/Scratchyourbrain/SCYB-2.jpeg',
        '/images/Scratchyourbrain/SCYB-3.jpeg',
        '/images/Scratchyourbrain/SCYB-4.jpeg',
        '/images/Scratchyourbrain/SCYB-5.jpeg',
        '/images/Scratchyourbrain/SCYB-6.jpeg',
        '/images/Scratchyourbrain/SCYB-7.jpeg',
        '/images/Scratchyourbrain/SCYB-8.jpeg',
        '/images/Scratchyourbrain/SCYB-9.jpeg',
        '/images/Scratchyourbrain/SCYB-10.jpeg',
        '/images/Scratchyourbrain/SCYB-11.jpeg',
        '/images/Scratchyourbrain/SCYB-12.jpeg',
      ],
      gradient: 'from-orange-600 to-red-600',
      attendees: 250
    }
  ];

  return (
    <section id="events" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 mb-2 uppercase tracking-wider text-sm flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Upcoming Events
          </p>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Join Our Next Event
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From workshops to hackathons, immerse yourself in cutting-edge tech experiences.
          </p>
        </motion.div>

        {/* 🔄 LOADER OR EVENTS */}
        {upcomingEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <motion.div
              className="w-14 h-14 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <p className="text-slate-400 text-sm">Upcoming events coming soon…</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <div key={event.id}> {/* original card code stays here */}</div>
            ))}
          </div>
        )}

        {/* Previous Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
            <h3 className="text-2xl lg:text-3xl text-slate-300">Previous Events</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousEvents.map((event, index) => (
              <PreviousEventCard
                key={event.id}
                event={event}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
