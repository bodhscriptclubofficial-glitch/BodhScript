import { motion } from 'motion/react';
import { Globe, Clock, User, Layers, Database, Puzzle, Gauge, Code } from 'lucide-react';
import { LightBeams } from './LightBeams';
import { EnergyField } from './EnergyField';
import { GlowingOrbs } from './GlowingOrbs';
import { FloatingCubes } from './FloatingCubes';
import { AuroraEffect } from './AuroraEffect';
import { VortexSpiral } from './VortexSpiral';

export function FormatSlide() {
  const formatDetails = [
    { icon: Globe, label: "Mode", value: "Online", color: "from-blue-500 to-cyan-500" },
    { icon: Clock, label: "Duration", value: "2-3 Hours", color: "from-purple-500 to-pink-500" },
    { icon: User, label: "Format", value: "Individual", color: "from-pink-500 to-rose-500" },
    { icon: Layers, label: "Rounds", value: "Multi-Round", color: "from-indigo-500 to-purple-500" }
  ];

  const categories = [
    { icon: Database, text: "Data Structures and Algorithms", color: "text-blue-400" },
    { icon: Puzzle, text: "Logical Reasoning & Pattern Problems", color: "text-purple-400" },
    { icon: Gauge, text: "Time Complexity-Based Challenges", color: "text-pink-400" },
    { icon: Code, text: "Real-World Scenario Coding Tasks", color: "text-green-400" }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-12">
      <AuroraEffect />
      <LightBeams />
      <EnergyField />
      <GlowingOrbs />
      <FloatingCubes />
      <VortexSpiral />
      
      <motion.h2
        className="text-6xl mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Event Format
      </motion.h2>

      {/* Format Cards */}
      <div className="grid grid-cols-4 gap-6 max-w-6xl w-full mb-12">
        {formatDetails.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-2xl group`}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`} />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
              
              <div className="relative z-10 p-6 text-center">
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
                <p className="text-sm text-white/80 mb-2">{item.label}</p>
                <p className="text-xl text-white">{item.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Problem Categories */}
      <motion.div
        className="max-w-5xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.h3
          className="text-3xl text-center mb-8 text-purple-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Problem Categories
        </motion.h3>

        <div className="grid grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
              >
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-8 h-8 ${category.color}`} />
                  </motion.div>
                  <p className="text-lg text-gray-200">{category.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-4 border-purple-500/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 border-4 border-pink-500/20 rounded-full"
        animate={{
          rotate: -360,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );
}
