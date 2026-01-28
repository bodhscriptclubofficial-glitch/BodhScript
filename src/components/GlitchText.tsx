import { motion } from 'framer-motion';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute top-0 left-0 text-indigo-500 opacity-70"
        animate={{
          x: [-2, 2, -2],
          y: [1, -1, 1]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-purple-500 opacity-70"
        animate={{
          x: [2, -2, 2],
          y: [-1, 1, -1]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.1
        }}
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
      >
        {children}
      </motion.span>
    </div>
  );
}
