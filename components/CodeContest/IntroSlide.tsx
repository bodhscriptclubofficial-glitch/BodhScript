import { motion } from 'motion/react';
import { Code2, Zap, Brain } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';
import { GlitchText } from './GlitchText';
import { HolographicOverlay } from './HolographicOverlay';
import { LightBeams } from './LightBeams';
import { EnergyField } from './EnergyField';
import { CircuitBoard } from './CircuitBoard';
import { PulseRings } from './PulseRings';
import { DNAHelix } from './DNAHelix';
import { MeteorShower } from './MeteorShower';
import { HexagonGrid } from './HexagonGrid';
import { FloatingCubes } from './FloatingCubes';
import { LightTrails } from './LightTrails';
import { DataStream } from './DataStream';
import { LensFlare } from './LensFlare';
import { ParticleExplosion } from './ParticleExplosion';
import { AuroraEffect } from './AuroraEffect';
import { QuantumField } from './QuantumField';
import { RippleEffect } from './RippleEffect';
import { NeonPulse } from './NeonPulse';
import { CosmicDust } from './CosmicDust';
import { ElectricArcs } from './ElectricArcs';
import { VortexSpiral } from './VortexSpiral';
import { PrismaticShift } from './PrismaticShift';

export function IntroSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <PrismaticShift />
      <AuroraEffect />
      <LensFlare />
      <FloatingParticles />
      <HolographicOverlay />
      <LightBeams />
      <MeteorShower />
      <EnergyField />
      <CircuitBoard />
      <HexagonGrid />
      <FloatingCubes />
      <LightTrails />
      <DataStream />
      <ParticleExplosion />
      <QuantumField />
      <DNAHelix />
      <RippleEffect />
      <NeonPulse />
      <CosmicDust />
      <ElectricArcs />
      <VortexSpiral />
      <PulseRings />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-30"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [50, -50, 50],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 text-center px-8 max-w-6xl">
        {/* BodhScriptClub Presents */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-3xl text-gray-400 tracking-wider">BodhScriptClub Presents</p>
        </motion.div>

        {/* Animated icons */}
        <div className="flex justify-center gap-12 mb-12">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="p-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-2xl shadow-purple-500/50">
              <Code2 className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <div className="p-6 bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl shadow-2xl shadow-pink-500/50">
              <Brain className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl shadow-blue-500/50">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Main title with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            <GlitchText 
              text="Scratch Your Brain" 
              className="text-7xl mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="text-4xl mb-8 text-blue-300">
            A Coding Contest
          </h2>
        </motion.div>

        {/* Event details */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-900/60 to-pink-900/60 rounded-full backdrop-blur-sm border border-purple-500/30 shadow-lg">
            <p className="text-2xl text-purple-200">
              📅 30th October 2025
            </p>
          </div>

          <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-full backdrop-blur-sm border border-blue-500/30 shadow-lg ml-4">
            <p className="text-2xl text-blue-200">
              🎯 MCA Students Only
            </p>
          </div>
        </motion.div>

        {/* Animated pulse ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-purple-500/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}
