import { motion } from "motion/react";
import { FloatingElements } from "../FloatingElements";

export function Slide1() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 flex items-center justify-center overflow-hidden">
      <FloatingElements count={20} colors={["#4f46e5", "#7c3aed", "#2563eb", "#06b6d4"]} />
      
      {/* Animated background circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/10"
          style={{
            width: `${(i + 1) * 200}px`,
            height: `${(i + 1) * 200}px`,
          }}
          animate={{
            rotate: 360,
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
      
      <div className="text-center z-10 max-w-4xl px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotateY: { duration: 4, repeat: Infinity },
              scale: { duration: 2, repeat: Infinity }
            }}
            className="text-8xl mb-6 inline-block"
          >
            💻
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
        >
          BodhScript Club
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-4xl text-white mb-8"
        >
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Presents
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex items-center justify-center gap-4 text-blue-200"
        >
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-2xl">Code • Create • Conquer</span>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </div>
      
      {/* Glowing particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}