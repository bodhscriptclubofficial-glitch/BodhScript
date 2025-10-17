import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface NeonBorderProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

export function NeonBorder({ children, color = 'purple', className = '' }: NeonBorderProps) {
  const colorMap: Record<string, string> = {
    purple: 'from-purple-500 via-pink-500 to-purple-500',
    blue: 'from-blue-500 via-cyan-500 to-blue-500',
    green: 'from-green-500 via-emerald-500 to-green-500',
    pink: 'from-pink-500 via-rose-500 to-pink-500',
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${colorMap[color]} rounded-2xl blur-lg opacity-60`}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 rounded-2xl"
        animate={{
          opacity: [0, 0.5, 0],
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
