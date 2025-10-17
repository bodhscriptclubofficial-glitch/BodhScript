import { motion } from 'motion/react';
import { Brain, Target, Rocket, CheckCircle2 } from 'lucide-react';
import { HolographicOverlay } from './HolographicOverlay';
import { CircuitBoard } from './CircuitBoard';
import { QuantumField } from './QuantumField';
import { DataStream } from './DataStream';
import { ElectricArcs } from './ElectricArcs';

export function ObjectivesSlide() {
  const objectives = [
    {
      text: "Promote analytical thinking and structured problem-solving",
      icon: Brain,
      color: "text-purple-400"
    },
    {
      text: "Provide a platform to practice competitive programming in a timed environment",
      icon: Target,
      color: "text-pink-400"
    },
    {
      text: "Enhance readiness for placement-driven coding rounds and technical interviews",
      icon: Rocket,
      color: "text-blue-400"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-12">
      <HolographicOverlay />
      <CircuitBoard />
      <QuantumField />
      <DataStream />
      <ElectricArcs />
      
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.h2
          className="text-7xl mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
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
          Purpose & Objectives
        </motion.h2>
        <motion.p
          className="text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Student Capability Enhancement
        </motion.p>
      </motion.div>

      <div className="max-w-5xl w-full space-y-6">
        {objectives.map((objective, index) => {
          const Icon = objective.icon;
          return (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
              
              <div className="relative bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 flex items-start gap-6 hover:border-purple-500/50 transition-all duration-300">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                
                <div className="flex-1 flex items-center gap-4">
                  <CheckCircle2 className={`w-6 h-6 ${objective.color} flex-shrink-0`} />
                  <p className="text-xl text-gray-200">
                    {objective.text}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-12 px-12 py-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-2xl text-purple-300">
          Building confidence, logical rigor, and coding proficiency
        </p>
      </motion.div>
    </div>
  );
}
