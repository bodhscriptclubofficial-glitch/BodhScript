import { motion } from "motion/react";

export function Slide2() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-red-950 via-orange-950 to-yellow-950 flex items-center justify-center overflow-hidden">
      {/* Dynamic background elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: 360,
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-32 h-32 border-2 border-orange-400/20 rounded-full" />
        </motion.div>
      ))}

      <div className="text-center z-10 max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mb-12"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-9xl mb-6 inline-block"
          >
            ⚔️
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-8xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400"
        >
          CodeClash 2025
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-4xl text-orange-200 mb-12"
        >
          The Ultimate Battle of Logic & Speed
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="bg-gradient-to-br from-red-800/50 to-orange-800/50 p-6 rounded-2xl border border-red-400/30 backdrop-blur-sm"
          >
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-2xl text-red-300 mb-2">Lightning Fast</h3>
            <p className="text-red-100">Speed meets precision in every challenge</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="bg-gradient-to-br from-orange-800/50 to-yellow-800/50 p-6 rounded-2xl border border-orange-400/30 backdrop-blur-sm"
          >
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-2xl text-orange-300 mb-2">Mind Bending</h3>
            <p className="text-orange-100">Logic puzzles that push boundaries</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="bg-gradient-to-br from-yellow-800/50 to-red-800/50 p-6 rounded-2xl border border-yellow-400/30 backdrop-blur-sm"
          >
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-2xl text-yellow-300 mb-2">Victory Awaits</h3>
            <p className="text-yellow-100">Glory for the coding champions</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(255, 165, 0, 0.5)",
                "0 0 40px rgba(255, 165, 0, 0.8)",
                "0 0 20px rgba(255, 165, 0, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white text-2xl"
          >
            🔥 The Battle Begins 🔥
          </motion.div>
        </motion.div>
      </div>

      {/* Floating code symbols */}
      {["{ }", "< />", "( )", "[ ]", "++", "--"].map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-orange-400/30 text-4xl font-mono"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
}