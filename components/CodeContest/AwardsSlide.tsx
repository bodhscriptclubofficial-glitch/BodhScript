import { motion } from 'motion/react';
import { Trophy, Medal, Award, Gift, Calendar, DollarSign } from 'lucide-react';
import { GlitchText } from './GlitchText';
import { HolographicOverlay } from './HolographicOverlay';
import { LightBeams } from './LightBeams';
import { EnergyField } from './EnergyField';
import { Sparkles } from './Sparkles';
import { MeteorShower } from './MeteorShower';
import { ParticleExplosion } from './ParticleExplosion';
import { AuroraEffect } from './AuroraEffect';
import { VortexSpiral } from './VortexSpiral';
import { CosmicDust } from './CosmicDust';

export function AwardsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8">
      <AuroraEffect />
      <HolographicOverlay />
      <LightBeams />
      <MeteorShower />
      <EnergyField />
      <Sparkles />
      <ParticleExplosion />
      <VortexSpiral />
      <CosmicDust />
      
      {/* Animated background circles */}
      <motion.div
        className="absolute w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [100, -100, 100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 w-full max-w-6xl">
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
              text="Awards & Recognition" 
              className="text-7xl mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Top Winners Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 rounded-3xl blur-xl opacity-50"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-3xl p-10 border border-yellow-500/30">
              <div className="flex items-center justify-center gap-6 mb-6">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Trophy className="w-16 h-16 text-yellow-400" />
                </motion.div>
                <h3 className="text-4xl text-yellow-400">
                  Top Winners
                </h3>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: Medal, text: "Certificates of Merit", color: "from-yellow-500 to-orange-500" },
                  { icon: Trophy, text: "Trophies & Medals", color: "from-orange-500 to-pink-500" },
                  { icon: Award, text: "Exclusive Mentoring", color: "from-pink-500 to-purple-500" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.15 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className="flex justify-center mb-4"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        <div className={`p-4 bg-gradient-to-br ${item.color} rounded-xl shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>
                      <p className="text-lg text-gray-200">{item.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-3 gap-6">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-300" />
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 text-center">
              <motion.div
                className="flex justify-center mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Gift className="w-12 h-12 text-green-400" />
              </motion.div>
              <p className="text-2xl text-green-400 mb-2">All Participants</p>
              <p className="text-lg text-gray-300">Certificates of Participation</p>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-300" />
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 text-center">
              <motion.div
                className="flex justify-center mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Calendar className="w-12 h-12 text-blue-400" />
              </motion.div>
              <p className="text-2xl text-blue-400 mb-2">Duty Leaves</p>
              <p className="text-lg text-gray-300">Provided to Participants</p>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-300" />
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 text-center">
              <motion.div
                className="flex justify-center mb-4"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <DollarSign className="w-12 h-12 text-purple-400" />
              </motion.div>
              <p className="text-2xl text-purple-400 mb-2">Registration</p>
              <p className="text-lg text-gray-300">FREE</p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl"
            whileHover={{ scale: 1.1 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.4)',
                '0 0 40px rgba(168, 85, 247, 0.6)',
                '0 0 20px rgba(168, 85, 247, 0.4)',
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
              }
            }}
          >
            <p className="text-3xl text-white">
              Ready to Scratch Your Brain? 🧠
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
