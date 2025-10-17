import { motion } from 'motion/react';

export function PrismaticShift() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)
          `,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            conic-gradient(
              from 0deg at 50% 50%,
              rgba(147, 51, 234, 0.2) 0deg,
              rgba(236, 72, 153, 0.2) 72deg,
              rgba(59, 130, 246, 0.2) 144deg,
              rgba(16, 185, 129, 0.2) 216deg,
              rgba(251, 191, 36, 0.2) 288deg,
              rgba(147, 51, 234, 0.2) 360deg
            )
          `,
        }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
