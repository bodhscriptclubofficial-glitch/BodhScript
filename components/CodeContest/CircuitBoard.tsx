import { motion } from 'motion/react';

export function CircuitBoard() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <svg className="w-full h-full">
        {/* Horizontal lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={`${(i + 1) * 12}%`}
            x2="100%"
            y2={`${(i + 1) * 12}%`}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
          />
        ))}
        
        {/* Vertical lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${(i + 1) * 12}%`}
            y1="0"
            x2={`${(i + 1) * 12}%`}
            y2="100%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: i * 0.1 + 0.5, repeat: Infinity, repeatDelay: 3 }}
          />
        ))}
        
        {/* Connection nodes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r="3"
            fill="#a855f7"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ 
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
        
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
