import { motion } from 'motion/react';

export function AuroraEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 200%',
          filter: 'blur(60px)',
        }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-cyan-600/20 via-purple-600/20 to-pink-600/20"
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%', '0% 0%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 200%',
          filter: 'blur(60px)',
        }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-green-600/20 to-purple-600/20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
}
