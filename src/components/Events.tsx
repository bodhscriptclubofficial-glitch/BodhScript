import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from './useInView';
import { PreviousEventCard } from './PreviousEventCard';

export function Events() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const upcomingEvents = [
    {
      id: 1,
      title: 'Web3 & Blockchain Workshop',
      date: 'Jan 30, 2026',
      time: '6:00 PM - 9:00 PM',
      location: 'Innovation Lab 301',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY3Njc4MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-indigo-600 to-blue-600',
      featured: true
    },
    {
      id: 2,
      title: 'Winter Hackathon 2026',
      date: 'Feb 15, 2026',
      time: '9:00 AM - 9:00 PM',
      location: 'Main Campus Center',
      category: 'Hackathon',
      image: 'https://images.unsplash.com/photo-1607799632518-da91dd151b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBkYXJrfGVufDF8fHx8MTc2NzcwNDczM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-600 to-pink-600',
      featured: true
    },
    {
      id: 3,
      title: 'AI/ML Deep Dive Series',
      date: 'Feb 20, 2026',
      time: '5:00 PM - 7:00 PM',
      location: 'Tech Lab 2',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHRlY2h8ZW58MXx8fHwxNzY3NzA0NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-violet-600 to-purple-600',
      featured: false
    }
  ];

  const previousEvents = [
    {
      id: 4,
      title: 'React Advanced Patterns',
      date: 'Jan 10, 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'CS Building, Room 204',
      category: 'Workshop',
      images: [
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGNvZGV8ZW58MXx8fHwxNzY3NzA0NzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
      ],
      gradient: 'from-cyan-600 to-blue-600',
      attendees: 85
    },
    {
      id: 5,
      title: 'New Year Coding Sprint',
      date: 'Jan 5, 2026',
      time: '10:00 AM - 6:00 PM',
      location: 'Innovation Hub',
      category: 'Hackathon',
      images: [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
      ],
      gradient: 'from-emerald-600 to-teal-600',
      attendees: 120
    },
    {
      id: 6,
      title: 'Git & GitHub Masterclass',
      date: 'Dec 18, 2025',
      time: '4:00 PM - 6:00 PM',
      location: 'Online (Zoom)',
      category: 'Workshop',
      images: [
        'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        'https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
      ],
      gradient: 'from-orange-600 to-red-600',
      attendees: 95
    }
  ];

  return (
    <section id="events" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-indigo-400 mb-2 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Upcoming Events
          </motion.p>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Join Our Next Event
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From workshops to hackathons, immerse yourself in cutting-edge tech experiences.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                    animate={{
                      y: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  />
                  
                  {event.featured && (
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 20px rgba(245, 158, 11, 0.5)',
                          '0 0 40px rgba(245, 158, 11, 0.8)',
                          '0 0 20px rgba(245, 158, 11, 0.5)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-3 left-3"
                    >
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Featured
                      </span>
                    </motion.div>
                  )}

                  <div className="absolute top-3 right-3">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 bg-gradient-to-r ${event.gradient} rounded-full text-xs font-semibold shadow-lg`}
                    >
                      {event.category}
                    </motion.span>
                  </div>
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl mb-4 group-hover:text-indigo-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {event.title}
                  </motion.h3>

                  <div className="space-y-2 mb-6">
                    <motion.div
                      className="flex items-center gap-2 text-sm text-slate-400"
                      whileHover={{ x: 5 }}
                    >
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      <span>{event.date}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2 text-sm text-slate-400"
                      whileHover={{ x: 5 }}
                    >
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span>{event.time}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2 text-sm text-slate-400"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin className="w-4 h-4 text-pink-400" />
                      <span>{event.location}</span>
                    </motion.div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${event.gradient} py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative">Register Now</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-500/50 rounded-xl transition-all duration-300 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative">View All Upcoming Events</span>
          </motion.button>
        </motion.div>

        {/* Previous Events Section */}
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
