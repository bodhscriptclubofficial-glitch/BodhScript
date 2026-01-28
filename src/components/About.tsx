import { Code2, Users, Lightbulb, Trophy, Zap, Target } from 'lucide-react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from './useInView';
import { useRef } from 'react';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const features = [
    {
      icon: Code2,
      title: 'Learn & Grow',
      description: 'Master cutting-edge technologies through hands-on workshops, expert mentorship, and structured learning paths.',
      gradient: 'from-indigo-600 to-indigo-800',
      glowGradient: 'from-indigo-600/20 to-indigo-900/20',
      shadowColor: 'shadow-indigo-500/50',
      delay: 0
    },
    {
      icon: Users,
      title: 'Collaborate',
      description: 'Build real-world projects with talented peers, contribute to open-source, and create portfolio-worthy work.',
      gradient: 'from-purple-600 to-purple-800',
      glowGradient: 'from-purple-600/20 to-purple-900/20',
      shadowColor: 'shadow-purple-500/50',
      delay: 0.1
    },
    {
      icon: Lightbulb,
      title: 'Innovate',
      description: 'Transform ideas into reality through hackathons, innovation challenges, and startup incubation programs.',
      gradient: 'from-pink-600 to-pink-800',
      glowGradient: 'from-pink-600/20 to-pink-900/20',
      shadowColor: 'shadow-pink-500/50',
      delay: 0.2
    },
    {
      icon: Trophy,
      title: 'Compete',
      description: 'Sharpen your skills in coding competitions, win prizes, and gain recognition in the developer community.',
      gradient: 'from-blue-600 to-blue-800',
      glowGradient: 'from-blue-600/20 to-blue-900/20',
      shadowColor: 'shadow-blue-500/50',
      delay: 0.3
    },
    {
      icon: Zap,
      title: 'Fast-Track',
      description: 'Accelerate your career with industry connections, internship opportunities, and professional networking.',
      gradient: 'from-violet-600 to-violet-800',
      glowGradient: 'from-violet-600/20 to-violet-900/20',
      shadowColor: 'shadow-violet-500/50',
      delay: 0.4
    },
    {
      icon: Target,
      title: 'Achieve',
      description: 'Set and accomplish your coding goals with personalized roadmaps, milestones, and community support.',
      gradient: 'from-fuchsia-600 to-fuchsia-800',
      glowGradient: 'from-fuchsia-600/20 to-fuchsia-900/20',
      shadowColor: 'shadow-fuchsia-500/50',
      delay: 0.5
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            About bodhscript
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
            animate={isInView ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            } : {}}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            Why Join Our Community?
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We're not just a coding club—we're a launchpad for the next generation of tech leaders.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.glowGradient} rounded-2xl blur-xl`}
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
                <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden">
                  {/* Animated border gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)`,
                      backgroundSize: '200% 200%'
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                  
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4 shadow-lg ${feature.shadowColor} relative`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(99, 102, 241, 0.5)',
                          '0 0 40px rgba(139, 92, 246, 0.5)',
                          '0 0 20px rgba(99, 102, 241, 0.5)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                  
                  <h3 className="text-xl mb-3 relative">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed relative">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl"
            animate={{
              opacity: [0.2, 0.3, 0.2],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}
              animate={{
                x: [0, 30],
                y: [0, 30]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="max-w-3xl mx-auto text-center relative">
              <motion.div
                style={{ rotate, scale }}
                className="inline-block mb-6"
              >
                <div className="p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl relative">
                  <Target className="w-10 h-10" />
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{
                      boxShadow: [
                        '0 0 30px rgba(99, 102, 241, 0.6)',
                        '0 0 60px rgba(139, 92, 246, 0.6)',
                        '0 0 30px rgba(99, 102, 241, 0.6)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  />
                </div>
              </motion.div>
              
              <motion.h3
                className="text-3xl lg:text-4xl mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Our Mission
              </motion.h3>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                To create an inclusive, dynamic community where students of all skill levels can 
                <motion.span
                  className="text-indigo-400 font-semibold"
                  whileHover={{ scale: 1.05, display: "inline-block" }}
                >
                  {' '}learn programming
                </motion.span>, 
                <motion.span
                  className="text-purple-400 font-semibold"
                  whileHover={{ scale: 1.05, display: "inline-block" }}
                >
                  {' '}collaborate on impactful projects
                </motion.span>, and 
                <motion.span
                  className="text-pink-400 font-semibold"
                  whileHover={{ scale: 1.05, display: "inline-block" }}
                >
                  {' '}launch successful tech careers
                </motion.span>. 
                We believe that through hands-on experience, peer learning, and real-world challenges, 
                everyone can become an exceptional developer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
