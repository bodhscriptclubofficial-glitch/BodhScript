import { Github, Linkedin, Mail, Crown, Award, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './useInView';
import { useState, useEffect } from 'react';

export function Team() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [currentIndices, setCurrentIndices] = useState([0, 1, 2, 3]);

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'President',
      designation: 'Full-Stack Developer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=4f46e5',
      bio: 'Full-stack wizard specializing in cloud architecture',
      icon: Crown,
      gradient: 'from-indigo-600 to-purple-600',
      social: {
        github: '#',
        linkedin: '#',
        email: 'alex@bodhscript.com'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'Vice President',
      designation: 'AI/ML Engineer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=7c3aed',
      bio: 'AI/ML expert and competitive programming champion',
      icon: Award,
      gradient: 'from-purple-600 to-pink-600',
      social: {
        github: '#',
        linkedin: '#',
        email: 'sarah@bodhscript.com'
      }
    },
    {
      name: 'Marcus Davis',
      role: 'Technical Lead',
      designation: 'Systems Architect',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=db2777',
      bio: 'Systems architect with passion for open source',
      icon: Zap,
      gradient: 'from-pink-600 to-rose-600',
      social: {
        github: '#',
        linkedin: '#',
        email: 'marcus@bodhscript.com'
      }
    },
    {
      name: 'Emily Zhang',
      role: 'Events Lead',
      designation: 'UX Designer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=2563eb',
      bio: 'UX designer & hackathon organizing extraordinaire',
      icon: Zap,
      gradient: 'from-blue-600 to-cyan-600',
      social: {
        github: '#',
        linkedin: '#',
        email: 'emily@bodhscript.com'
      }
    },
    {
      name: 'Jordan Lee',
      role: 'Community Manager',
      designation: 'DevRel Specialist',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan&backgroundColor=059669',
      bio: 'Building bridges between developers and innovation',
      icon: Award,
      gradient: 'from-emerald-600 to-teal-600',
      social: {
        github: '#',
        linkedin: '#',
        email: 'jordan@bodhscript.com'
      }
    },
    {
      name: 'Priya Patel',
      role: 'Design Lead',
      designation: 'Creative Director',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=ea580c',
      bio: 'Crafting beautiful experiences through design thinking',
      icon: Crown,
      gradient: 'from-orange-600 to-amber-600',
      social: {
        github: '#',
        linkedin: '#',
        email: 'priya@bodhscript.com'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices(prev => {
        // Shuffle the visible members
        const nextIndices = prev.map(index => {
          const nextIndex = (index + 1) % teamMembers.length;
          return nextIndex;
        });
        return nextIndices;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <section id="team" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

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
            Our Team
          </motion.p>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Meet the Leaders
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate innovators driving our community to excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {currentIndices.map((memberIndex, slotIndex) => {
              const member = teamMembers[memberIndex];
              const IconComponent = member.icon;
              return (
                <motion.div
                  key={`${memberIndex}-${slotIndex}`}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6, delay: slotIndex * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  
                  <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300">
                    <div className="relative mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-xl blur-md opacity-50`}></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-full aspect-square object-cover rounded-xl border border-indigo-500/30"
                      />
                      
                      {/* Icon Badge */}
                      <div className={`absolute -top-2 -right-2 p-2 bg-gradient-to-br ${member.gradient} rounded-lg shadow-lg`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Social Links Overlay */}
                      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 rounded-xl">
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          href={member.social.github}
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          href={member.social.linkedin}
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          href={`mailto:${member.social.email}`}
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>

                    <h3 className="text-xl mb-1">{member.name}</h3>
                    <p className={`text-transparent bg-gradient-to-r ${member.gradient} bg-clip-text mb-1 font-semibold text-sm`}>
                      {member.role}
                    </p>
                    <p className="text-xs text-indigo-400 mb-2">{member.designation}</p>
                    <p className="text-sm text-slate-400">{member.bio}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
