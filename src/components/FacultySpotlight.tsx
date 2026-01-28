import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './useInView';
import { Award, BookOpen, GraduationCap, Star } from 'lucide-react';

export function FacultySpotlight() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const faculty = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Faculty Advisor',
      department: 'Computer Science',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah-Mitchell&backgroundColor=6366f1',
      bio: 'Ph.D. in Artificial Intelligence with 15+ years of experience in machine learning and neural networks. Passionate about mentoring student innovators.',
      specialties: ['AI/ML', 'Deep Learning', 'Research'],
      gradient: 'from-indigo-600 to-blue-600',
      icon: GraduationCap
    },
    {
      name: 'Prof. Michael Chen',
      title: 'Technical Mentor',
      department: 'Software Engineering',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael-Chen&backgroundColor=8b5cf6',
      bio: 'Former Google engineer specializing in distributed systems and cloud architecture. Leads our advanced workshops on scalable application development.',
      specialties: ['Cloud Computing', 'System Design', 'DevOps'],
      gradient: 'from-purple-600 to-pink-600',
      icon: Award
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Innovation Lead',
      department: 'Cybersecurity',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily-Rodriguez&backgroundColor=ec4899',
      bio: 'Cybersecurity expert and ethical hacking specialist. Guides students through capture-the-flag competitions and security research projects.',
      specialties: ['Security', 'Cryptography', 'Ethical Hacking'],
      gradient: 'from-pink-600 to-rose-600',
      icon: Star
    },
    {
      name: 'Prof. James Anderson',
      title: 'Industry Liaison',
      department: 'Web Technologies',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James-Anderson&backgroundColor=14b8a6',
      bio: 'Full-stack developer with startup experience. Connects students with internship opportunities and provides career mentorship in modern web development.',
      specialties: ['Web Dev', 'React', 'Node.js'],
      gradient: 'from-teal-600 to-cyan-600',
      icon: BookOpen
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % faculty.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [faculty.length]);

  const currentFaculty = faculty[currentIndex];
  const IconComponent = currentFaculty.icon;

  return (
    <section id="faculty" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
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
            className="text-indigo-400 mb-2 uppercase tracking-wider text-sm"
          >
            Faculty Spotlight
          </motion.p>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Meet Our Mentors
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Industry experts and academic leaders dedicated to your success.
          </p>
        </motion.div>

        {/* Faculty Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12"
              >
                {/* Left - Image */}
                <div className="relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${currentFaculty.gradient} rounded-2xl blur-xl opacity-50`}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  />
                  
                  <div className="relative">
                    <img
                      src={currentFaculty.image}
                      alt={currentFaculty.name}
                      className="w-full aspect-square object-cover rounded-2xl border border-indigo-500/30"
                    />
                    
                    {/* Icon Badge */}
                    <motion.div
                      className={`absolute -top-4 -right-4 p-4 bg-gradient-to-br ${currentFaculty.gradient} rounded-xl shadow-lg`}
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Specialties */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {currentFaculty.specialties.map((specialty, idx) => (
                        <motion.span
                          key={specialty}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`px-3 py-1 bg-gradient-to-r ${currentFaculty.gradient} rounded-full text-xs font-semibold shadow-lg`}
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Info */}
                <div className="flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className={`text-transparent bg-gradient-to-r ${currentFaculty.gradient} bg-clip-text text-sm font-semibold mb-2`}>
                      {currentFaculty.title}
                    </p>
                    <h3 className="text-3xl lg:text-4xl mb-2">{currentFaculty.name}</h3>
                    <p className="text-lg text-indigo-400 mb-6">{currentFaculty.department}</p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-300 leading-relaxed text-lg mb-8"
                  >
                    {currentFaculty.bio}
                  </motion.p>

                  {/* Progress Indicators */}
                  <div className="flex gap-2">
                    {faculty.map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className="relative h-1 flex-1 bg-white/10 rounded-full overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                      >
                        {idx === currentIndex && (
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${currentFaculty.gradient}`}
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 5, ease: 'linear' }}
                          />
                        )}
                        {idx < currentIndex && (
                          <div className={`absolute inset-0 bg-gradient-to-r ${faculty[idx].gradient}`} />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* All Faculty Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center gap-4 flex-wrap"
        >
          {faculty.map((member, idx) => (
            <motion.button
              key={member.name}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative ${idx === currentIndex ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-black' : ''}`}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500/30 hover:border-indigo-500/60 transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {idx === currentIndex && (
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
