import { Crown, Star, Users, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

export function Organizers() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const mainOrganizers = [
    {
      name: 'Alex Chen',
      role: 'President & Founder',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=4f46e5',
      bio: 'Visionary leader driving bodhscript to new heights. Full-stack developer with a passion for community building and innovation.',
      achievements: ['Founded bodhscript 2023', '10+ Hackathons Won', 'Google Dev Expert'],
      gradient: 'from-indigo-600 to-purple-600',
      icon: Crown,
      social: {
        email: 'alex@bodhscript.com',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'Vice President',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=7c3aed',
      bio: 'AI/ML expert and competitive programming champion. Leading our technical initiatives and workshop programs.',
      achievements: ['ACM ICPC Finalist', '5+ Research Papers', 'Meta Internship'],
      gradient: 'from-purple-600 to-pink-600',
      icon: Star,
      social: {
        email: 'sarah@bodhscript.com',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const otherOrganizers = [
    {
      name: 'Marcus Davis',
      role: 'Technical Lead',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=db2777',
      department: 'Systems Architecture',
      bio: 'Architecting scalable solutions and mentoring developers in modern tech stacks.',
      gradient: 'from-pink-600 to-rose-600',
      social: { email: 'marcus@bodhscript.com', linkedin: '#', github: '#' }
    },
    {
      name: 'Emily Zhang',
      role: 'Events Coordinator',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=2563eb',
      department: 'Event Management',
      bio: 'Creating unforgettable experiences through innovative hackathons and workshops.',
      gradient: 'from-blue-600 to-cyan-600',
      social: { email: 'emily@bodhscript.com', linkedin: '#', github: '#' }
    },
    {
      name: 'Jordan Lee',
      role: 'Community Manager',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan&backgroundColor=059669',
      department: 'Community Engagement',
      bio: 'Building connections and fostering collaboration within our vibrant community.',
      gradient: 'from-emerald-600 to-teal-600',
      social: { email: 'jordan@bodhscript.com', linkedin: '#', github: '#' }
    },
    {
      name: 'Priya Patel',
      role: 'Design Lead',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=ea580c',
      department: 'UI/UX Design',
      bio: 'Crafting beautiful user experiences and leading design thinking workshops.',
      gradient: 'from-orange-600 to-amber-600',
      social: { email: 'priya@bodhscript.com', linkedin: '#', github: '#' }
    },
    {
      name: 'Ryan Foster',
      role: 'Sponsorship Lead',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan&backgroundColor=7c2d12',
      department: 'Partnerships',
      bio: 'Securing partnerships with industry leaders to provide opportunities for members.',
      gradient: 'from-red-600 to-pink-600',
      social: { email: 'ryan@bodhscript.com', linkedin: '#', github: '#' }
    },
    {
      name: 'Aisha Rahman',
      role: 'Content Director',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&backgroundColor=6366f1',
      department: 'Content & Media',
      bio: 'Creating engaging content and managing our social media presence across platforms.',
      gradient: 'from-violet-600 to-purple-600',
      social: { email: 'aisha@bodhscript.com', linkedin: '#', github: '#' }
    }
  ];

  return (
    <section id="organizers" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
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
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Users className="w-4 h-4" />
            </motion.div>
            The Organizers
          </motion.p>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Leadership Team
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Meet the passionate individuals driving bodhscript's mission forward.
          </p>
        </motion.div>

        {/* Main Organizers - Highlighted */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {mainOrganizers.map((organizer, index) => {
            const IconComponent = organizer.icon;
            return (
              <motion.div
                key={organizer.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${organizer.gradient} rounded-3xl blur-2xl opacity-30`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden">
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                    animate={{
                      x: [0, 20],
                      y: [0, 20]
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <div className="grid md:grid-cols-5 gap-6 relative">
                    {/* Image */}
                    <div className="md:col-span-2">
                      <div className="relative">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${organizer.gradient} rounded-2xl blur-xl opacity-50`}
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity
                          }}
                        />
                        <img
                          src={organizer.image}
                          alt={organizer.name}
                          className="relative w-full aspect-square object-cover rounded-2xl border border-indigo-500/30"
                        />
                        
                        {/* Icon Badge */}
                        <motion.div
                          className={`absolute -top-3 -right-3 p-3 bg-gradient-to-br ${organizer.gradient} rounded-xl shadow-lg`}
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity
                          }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="md:col-span-3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl lg:text-3xl mb-2">{organizer.name}</h3>
                        <p className={`text-transparent bg-gradient-to-r ${organizer.gradient} bg-clip-text text-lg font-semibold mb-4`}>
                          {organizer.role}
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-6">
                          {organizer.bio}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2 mb-6">
                          {organizer.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + idx * 0.1 }}
                              className="flex items-center gap-2 text-sm text-slate-400"
                            >
                              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${organizer.gradient} rounded-full`}></div>
                              {achievement}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={`mailto:${organizer.social.email}`}
                          className={`p-2 bg-gradient-to-br ${organizer.gradient} rounded-lg hover:shadow-lg transition-all`}
                        >
                          <Mail className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={organizer.social.linkedin}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={organizer.social.github}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
          <h3 className="text-2xl text-slate-400">Other Organizers</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        </div>

        {/* Other Organizers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherOrganizers.map((organizer, index) => (
            <motion.div
              key={organizer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${organizer.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
              />

              <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300">
                {/* Image */}
                <div className="relative mb-4">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${organizer.gradient} rounded-xl blur-md opacity-40`}
                  />
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="relative w-full aspect-square object-cover rounded-xl border border-indigo-500/30"
                  />

                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 rounded-xl">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={`mailto:${organizer.social.email}`}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={organizer.social.linkedin}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={organizer.social.github}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl mb-1">{organizer.name}</h3>
                <p className={`text-transparent bg-gradient-to-r ${organizer.gradient} bg-clip-text font-semibold mb-1`}>
                  {organizer.role}
                </p>
                <p className="text-xs text-indigo-400 mb-3">{organizer.department}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{organizer.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
