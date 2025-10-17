import { motion } from 'motion/react';
import { Target, Users, Trophy, Calendar } from 'lucide-react';
import { NeonBorder } from './NeonBorder';
import { ParallaxLayer } from './ParallaxLayer';
import { EnergyField } from './EnergyField';
import { HexagonGrid } from './HexagonGrid';
import { LightTrails } from './LightTrails';
import { CosmicDust } from './CosmicDust';
import { NeonPulse } from './NeonPulse';

export function OverviewSlide() {
  const cards = [
    {
      icon: Target,
      title: "Event Type",
      content: "Major Event",
      color: "from-purple-600 to-purple-800",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Target Audience",
      content: "MCA Students",
      color: "from-pink-600 to-pink-800",
      delay: 0.4
    },
    {
      icon: Trophy,
      title: "Theme",
      content: "Student Capability Enhancement",
      color: "from-blue-600 to-blue-800",
      delay: 0.6
    },
    {
      icon: Calendar,
      title: "Event Date",
      content: "30th October 2025",
      color: "from-indigo-600 to-indigo-800",
      delay: 0.8
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8">
      <EnergyField />
      <HexagonGrid />
      <LightTrails />
      <CosmicDust />
      <NeonPulse />
      
      <motion.h2
        className="text-6xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Event Overview
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 gap-8 max-w-5xl w-full mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <ParallaxLayer key={index} depth={0.3 + index * 0.1}>
              <motion.div
                className={`relative p-8 bg-gradient-to-br ${card.color} rounded-2xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300`}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: card.delay, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
              >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-2xl mb-3 text-white/90">{card.title}</h3>
                <p className="text-xl text-white">{card.content}</p>
              </div>
            </motion.div>
            </ParallaxLayer>
          );
        })}
      </motion.div>

      <NeonBorder color="purple">
        <motion.div
          className="max-w-4xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xl text-gray-200 leading-relaxed">
            A <span className="text-pink-400">high-intensity</span>, intellectually stimulating coding competition designed 
            to challenge <span className="text-purple-400">logical thinking</span>, <span className="text-blue-400">algorithmic skills</span>, 
            and <span className="text-green-400">problem-solving capabilities</span>. Foster a competitive spirit while enhancing 
            core technical competencies essential for placements and real-world programming environments.
          </p>
        </motion.div>
      </NeonBorder>
    </div>
  );
}
