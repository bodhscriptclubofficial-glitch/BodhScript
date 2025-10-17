import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <motion.span
        className="relative z-10"
        animate={glitching ? {
          x: [0, -2, 2, -2, 0],
          textShadow: [
            '0 0 0 transparent',
            '-2px 0 #ff00de, 2px 0 #00fff9',
            '2px 0 #ff00de, -2px 0 #00fff9',
            '-2px 0 #ff00de, 2px 0 #00fff9',
            '0 0 0 transparent'
          ]
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.span>
      
      {glitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-pink-500 opacity-70"
            style={{ transform: 'translate(-2px, 0)' }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 text-cyan-500 opacity-70"
            style={{ transform: 'translate(2px, 0)' }}
          >
            {text}
          </span>
        </>
      )}
    </div>
  );
}
