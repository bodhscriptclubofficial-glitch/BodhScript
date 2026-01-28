import { ArrowRight, Code2, Users, Calendar, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TypewriterText } from './TypewriterText';
import { AnimatedCounter } from './AnimatedCounter';
import { FloatingParticles } from './FloatingParticles';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section id="home" ref={ref} className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
      <FloatingParticles />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 backdrop-blur-sm rounded-full text-sm mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </motion.div>
              <span className="text-indigo-300">Join 500+ Student Developers</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-indigo-400 rounded-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
                Code the
                <br />
                <motion.span
                  className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  <TypewriterText 
                    texts={['Future', 'Innovation', 'Revolution', 'Tomorrow']}
                  />
                </motion.span>
                <br />
                Together
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-400 mb-8 leading-relaxed"
            >
              Transform your passion into expertise at <span className="text-indigo-400 font-semibold">bodhscript</span>. 
              Master cutting-edge technologies, collaborate on real projects, and join a community 
              of innovators shaping tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center justify-center gap-2 text-white">
                  Get Started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-indigo-500/30 rounded-xl overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <span className="relative">View Events</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Code2, value: 50, label: 'Projects', gradient: 'from-indigo-600 to-indigo-800', iconColor: 'text-indigo-400', glowColor: 'bg-indigo-600/20' },
                { icon: Users, value: 500, label: 'Members', gradient: 'from-purple-600 to-purple-800', iconColor: 'text-purple-400', glowColor: 'bg-purple-600/20' },
                { icon: Calendar, value: 30, label: 'Events', gradient: 'from-pink-600 to-pink-800', iconColor: 'text-pink-400', glowColor: 'bg-pink-600/20' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group cursor-pointer"
                  >
                    <motion.div
                      className={`absolute inset-0 ${stat.glowColor} rounded-xl blur-xl`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-4 group-hover:border-indigo-500/40 transition-all">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <Icon className={`w-6 h-6 ${stat.iconColor} mb-2`} />
                      </motion.div>
                      <p className="text-3xl mb-1">
                        <AnimatedCounter value={stat.value} suffix="+" />
                      </p>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden border border-indigo-500/30 shadow-2xl shadow-indigo-500/20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1607799632518-da91dd151b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBkYXJrfGVufDF8fHx8MTc2NzcwNDczM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Developer coding"
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 p-4 rounded-2xl shadow-lg shadow-indigo-500/50"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Code2 className="w-8 h-8" />
              </motion.div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-2xl shadow-lg shadow-purple-500/50"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
            </motion.div>

            {/* Orbiting particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                animate={{
                  x: [0, 100 * Math.cos((i * 120 * Math.PI) / 180), 0],
                  y: [0, 100 * Math.sin((i * 120 * Math.PI) / 180), 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5
                }}
                style={{
                  top: '50%',
                  left: '50%',
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
