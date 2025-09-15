import { motion } from "motion/react";

export function Slide3() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-green-950 via-emerald-950 to-teal-950 flex items-center justify-center overflow-hidden">
      {/* Animated clock elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-16 bg-green-400/20 origin-bottom"
          style={{
            left: "50%",
            top: "20%",
            transformOrigin: "50% 200px",
            transform: `rotate(${i * 30}deg)`,
          }}
          animate={{
            scaleY: [0.5, 1, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}

      <div className="text-center z-10 max-w-5xl px-8">
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mb-12"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
            className="text-8xl mb-6 inline-block"
          >
            ⏰
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-7xl mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400"
        >
          Event Timeline
        </motion.h1>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-r from-green-800/50 to-emerald-800/50 p-8 rounded-3xl border border-green-400/30 backdrop-blur-sm max-w-2xl w-full"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity },
                      scale: { duration: 1.5, repeat: Infinity }
                    }}
                    className="text-5xl"
                  >
                    🗓
                  </motion.div>
                  <div>
                    <h2 className="text-3xl text-green-300 mb-2">Round 1</h2>
                    <p className="text-green-100 text-xl">Qualification Round</p>
                  </div>
                </div>
                <motion.div
                  animate={{ 
                    color: ["#4ADE80", "#10B981", "#4ADE80"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl"
                >
                  19th September 2025
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="bg-gradient-to-r from-emerald-800/50 to-teal-800/50 p-8 rounded-3xl border border-emerald-400/30 backdrop-blur-sm max-w-2xl w-full"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, delay: 1 },
                      scale: { duration: 1.5, repeat: Infinity, delay: 0.5 }
                    }}
                    className="text-5xl"
                  >
                    🗓
                  </motion.div>
                  <div>
                    <h2 className="text-3xl text-emerald-300 mb-2">Round 2</h2>
                    <p className="text-emerald-100 text-xl">Final Championship</p>
                  </div>
                </div>
                <motion.div
                  animate={{ 
                    color: ["#10B981", "#14B8A6", "#10B981"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-3xl"
                >
                  24th September 2025
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(16, 185, 129, 0.5)",
                "0 0 40px rgba(16, 185, 129, 0.8)",
                "0 0 20px rgba(16, 185, 129, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white text-2xl"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            Mark Your Calendars!
            <motion.span
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating time indicators */}
      {["00:00", "12:00", "18:00", "23:59"].map((time, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400/40 text-2xl font-mono"
          style={{
            left: `${15 + i * 20}%`,
            top: `${15 + (i % 2) * 70}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        >
          {time}
        </motion.div>
      ))}
    </div>
  );
}