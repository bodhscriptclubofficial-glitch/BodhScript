import { motion } from "motion/react";
import { QRCode } from "../QRCode";

export function Slide5() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950 flex items-center justify-center overflow-hidden">
      {/* Animated registration waves */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-2 border-cyan-400/20 rounded-full"
          style={{
            width: `${(i + 1) * 150}px`,
            height: `${(i + 1) * 150}px`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="grid lg:grid-cols-2 gap-12 items-center z-10 max-w-7xl px-8 w-full">
        {/* Left side - Call to action */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                rotateZ: [0, 15, -15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-8xl mb-6 inline-block"
            >
              📝
            </motion.div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-7xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400"
          >
            Register Now
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-6 mb-8"
          >
            <div className="bg-gradient-to-r from-cyan-800/50 to-blue-800/50 p-6 rounded-2xl border border-cyan-400/30 backdrop-blur-sm">
              <h2 className="text-3xl text-cyan-300 mb-4">🚀 Quick Registration</h2>
              <ul className="text-cyan-100 text-xl space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-cyan-400">✓</span> Instant confirmation
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-cyan-400">✓</span> Free participation
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-cyan-400">✓</span> Amazing prizes
                </motion.li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="space-y-4"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(6, 182, 212, 0.5)",
                  "0 0 60px rgba(6, 182, 212, 0.8)",
                  "0 0 30px rgba(6, 182, 212, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white text-2xl"
            >
              ⏰ Limited Seats Available!
            </motion.div>
            
            <p className="text-cyan-300 text-lg">
              Don't miss your chance to be part of CodeClash 2025
            </p>
          </motion.div>
        </div>

        {/* Right side - QR Code */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="flex flex-col items-center"
        >
          <QRCode />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="mt-8 text-center"
          >
            <div className="text-blue-300 text-2xl mb-4">
              🎯 Scan & Join the Battle!
            </div>
            <div className="text-blue-200 text-lg">
              Your coding journey starts here
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating registration icons */}
      {["👤", "📧", "🎓", "💻", "🏆", "⚡"].map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Pulsing registration text */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="bg-blue-600/80 backdrop-blur-sm px-6 py-3 rounded-full text-white text-xl">
          🔥 Registration Open Now! 🔥
        </div>
      </motion.div>
    </div>
  );
}