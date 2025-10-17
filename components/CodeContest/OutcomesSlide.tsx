import { motion } from 'motion/react';
import { Lightbulb, Zap, Award, TrendingUp } from 'lucide-react';
import { NeonBorder } from './NeonBorder';
import { CircuitBoard } from './CircuitBoard';
import { DNAHelix } from './DNAHelix';
import { LensFlare } from './LensFlare';
import { CosmicDust } from './CosmicDust';

export function OutcomesSlide() {
  const outcomes = [
    {
      icon: Lightbulb,
      text: "Gain real-time coding exposure with a competitive mindset",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      text: "Improve speed, precision, and debugging abilities",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      text: "Experience simulation of placement-style coding assessments",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      text: "Boost confidence to participate in hackathons and national-level contests",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8">
      <CircuitBoard />
      <DNAHelix />
      <LensFlare />
      <CosmicDust />
      
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-7xl mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          style={{
            backgroundSize: '200% auto',
          }}
        >
          Learning Outcomes
        </motion.h2>
        <motion.p
          className="text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          What You'll Gain
        </motion.p>
      </motion.div>

      <div className="max-w-5xl w-full grid grid-cols-2 gap-8">
        {outcomes.map((outcome, index) => {
          const Icon = outcome.icon;
          const colorMap: Record<string, string> = {
            'from-yellow-500 to-orange-500': 'green',
            'from-purple-500 to-pink-500': 'purple',
            'from-blue-500 to-cyan-500': 'blue',
            'from-green-500 to-emerald-500': 'green',
          };
          return (
            <NeonBorder key={index} color={colorMap[outcome.gradient] || 'purple'}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.6 + index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${outcome.gradient} rounded-2xl blur-lg opacity-40`}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              
              <motion.div
                className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 group hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`p-4 bg-gradient-to-br ${outcome.gradient} rounded-xl shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                
                <p className="text-lg text-center text-gray-200 leading-relaxed">
                  {outcome.text}
                </p>

                {/* Animated corner decorations */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3 + 0.5
                  }}
                />
              </motion.div>
            </motion.div>
            </NeonBorder>
          );
        })}
      </div>

      {/* Floating badges */}
      <motion.div
        className="mt-12 flex gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        {['Competitive', 'Practical', 'Career-Ready'].map((badge, index) => (
          <motion.div
            key={index}
            className="px-8 py-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full border border-purple-500/40 backdrop-blur-sm"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3
            }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xl text-purple-200">{badge}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
