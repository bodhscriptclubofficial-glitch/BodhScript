'use client';
import { motion } from 'motion/react';
import { QrCode, Sparkles as SparklesIcon, Share2 } from 'lucide-react';
import { AuroraEffect } from './AuroraEffect';
import { LightBeams } from './LightBeams';
import { EnergyField } from './EnergyField';
import { HolographicOverlay } from './HolographicOverlay';
import { ParticleExplosion } from './ParticleExplosion';
import { NeonPulse } from './NeonPulse';
import { CosmicDust } from './CosmicDust';
import { LensFlare } from './LensFlare';
import { VortexSpiral } from './VortexSpiral';
import { GlitchText } from './GlitchText';

export function QRCodeSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <AuroraEffect />
      <LensFlare />
      <LightBeams />
      <EnergyField />
      <HolographicOverlay />
      <ParticleExplosion />
      <NeonPulse />
      <CosmicDust />
      <VortexSpiral />

      <div className="relative z-10 w-full max-w-5xl px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
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
            <GlitchText 
              text="Register Now!" 
              className="text-7xl mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            />
          </motion.div>
          
          <motion.p
            className="text-3xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
          
          </motion.p>
        </motion.div>

        {/* QR Code Container */}
        <div className="flex justify-center items-center gap-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              delay: 0.6, 
              duration: 1,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Animated glow rings around QR code */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Orbiting particles */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              return (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-purple-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: Math.cos(angle) * 200,
                    y: Math.sin(angle) * 200,
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "linear"
                  }}
                />
              );
            })}

            {/* QR Code Box */}
            <motion.div
              className="relative bg-white p-8 rounded-3xl shadow-2xl flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glow overlay on hover */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Actual QR Code Image */}
              <img
                src="/images/QrCodeScratchYourBrain.jpeg" // <-- Replace with your QR code URL
                alt="Registration QR Code"
                className="w-80 h-80 object-contain rounded-2xl shadow-lg relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Registration Info */}
        <motion.div
          className="mt-16 text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex justify-center gap-8">
            <motion.div
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-900/60 to-emerald-900/60 rounded-full backdrop-blur-sm border border-green-500/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <SparklesIcon className="w-6 h-6 text-green-400" />
              <span className="text-2xl text-green-200">Free Registration</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 rounded-full backdrop-blur-sm border border-blue-500/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            >
              <Share2 className="w-6 h-6 text-blue-400" />
              <span className="text-2xl text-blue-200">Share with Friends</span>
            </motion.div>
          </div>

          <motion.div
            className="space-y-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-2xl text-purple-300">📅 30th October 2025</p>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Limited Spots Available • Register Today!
            </p>
            <p className="text-lg text-gray-500">BodhScriptClub • MCA Students</p>
          </motion.div>

          {/* Animated bottom decoration */}
          <div className="flex justify-center gap-4 mt-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
