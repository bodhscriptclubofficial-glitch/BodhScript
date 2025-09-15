import { motion } from "motion/react";

export function Slide4() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-purple-950 via-violet-950 to-indigo-950 flex items-center justify-center overflow-hidden">
      {/* Matrix-style falling code */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-400/30 font-mono text-lg"
          style={{
            left: `${i * 10}%`,
            top: "-20%",
          }}
          animate={{
            y: ["0vh", "120vh"],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        >
          {["int", "char", "void", "++", "--", "{}", "[]", "if", "for", "while"][i]}
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
              rotateY: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotateY: { duration: 4, repeat: Infinity },
              scale: { duration: 2, repeat: Infinity }
            }}
            className="text-9xl mb-6 inline-block"
          >
            💪
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400"
        >
          Show off your coding power
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-4xl text-purple-200 mb-12"
        >
          in C & C++
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            className="bg-gradient-to-br from-purple-800/50 to-violet-800/50 p-8 rounded-3xl border border-purple-400/30 backdrop-blur-sm"
          >
            <motion.div
              animate={{ 
                rotateZ: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotateZ: { duration: 3, repeat: Infinity },
                scale: { duration: 1.5, repeat: Infinity }
              }}
              className="text-6xl mb-4"
            >
              ⚔️
            </motion.div>
            <h2 className="text-3xl text-purple-300 mb-3">Compete</h2>
            <p className="text-purple-100">Battle against the best coders in epic challenges</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotateZ: -5 }}
            className="bg-gradient-to-br from-violet-800/50 to-indigo-800/50 p-8 rounded-3xl border border-violet-400/30 backdrop-blur-sm"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotateY: { duration: 3, repeat: Infinity, delay: 0.5 },
                scale: { duration: 1.5, repeat: Infinity, delay: 0.2 }
              }}
              className="text-6xl mb-4"
            >
              👑
            </motion.div>
            <h2 className="text-3xl text-violet-300 mb-3">Conquer</h2>
            <p className="text-violet-100">Dominate leaderboards with your algorithmic prowess</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 p-8 rounded-3xl border border-indigo-400/30 backdrop-blur-sm"
          >
            <motion.div
              animate={{ 
                rotateX: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotateX: { duration: 3, repeat: Infinity, delay: 1 },
                scale: { duration: 1.5, repeat: Infinity, delay: 0.4 }
              }}
              className="text-6xl mb-4"
            >
              🏆
            </motion.div>
            <h2 className="text-3xl text-indigo-300 mb-3">Celebrate</h2>
            <p className="text-indigo-100">Victory dance awaits the coding champions</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="space-y-6"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 30px rgba(147, 51, 234, 0.5)",
                "0 0 60px rgba(147, 51, 234, 0.8)",
                "0 0 30px rgba(147, 51, 234, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-12 py-6 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-white text-3xl"
          >
            🚀 Ready to Code? 🚀
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="text-purple-300 text-xl"
          >
            Master the languages of power: <span className="text-purple-100 font-mono">C</span> & <span className="text-purple-100 font-mono">C++</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating language symbols */}
      {["C", "C++", "#include", "int main()", "cout", "printf"].map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-400/40 text-2xl font-mono"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
}