import { motion } from 'motion/react';

export function ElectricArcs() {
  const arcs = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
      <svg className="w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {arcs.map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = Math.random() * 100;
          const endY = Math.random() * 100;
          const controlX1 = startX + (Math.random() - 0.5) * 50;
          const controlY1 = startY + (Math.random() - 0.5) * 50;
          const controlX2 = endX + (Math.random() - 0.5) * 50;
          const controlY2 = endY + (Math.random() - 0.5) * 50;

          return (
            <motion.path
              key={i}
              d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
              fill="none"
              stroke={i % 2 === 0 ? '#a855f7' : '#ec4899'}
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
