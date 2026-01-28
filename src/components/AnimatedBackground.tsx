import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      pulsePhase: number;
    }> = [];

    const floatingCodes: Array<{
      x: number;
      y: number;
      vy: number;
      char: string;
      size: number;
      alpha: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ['#6366f1', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)],
        alpha: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // Create floating code characters
    const codeChars = '01</>{}[]();=+-*&|^%$#@!'.split('');
    for (let i = 0; i < 15; i++) {
      floatingCodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vy: Math.random() * 0.3 + 0.2,
        char: codeChars[Math.floor(Math.random() * codeChars.length)],
        size: Math.random() * 16 + 12,
        alpha: Math.random() * 0.2 + 0.1
      });
    }

    let time = 0;

    function animate() {
      if (!ctx || !canvas) return;
      
      time += 0.01;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating code characters
      floatingCodes.forEach((code) => {
        code.y += code.vy;
        
        if (code.y > canvas.height) {
          code.y = -20;
          code.x = Math.random() * canvas.width;
        }

        ctx.font = `${code.size}px monospace`;
        ctx.fillStyle = `rgba(99, 102, 241, ${code.alpha})`;
        ctx.fillText(code.char, code.x, code.y);
      });

      // Draw and animate particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulsePhase += 0.02;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Pulsing effect
        const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7;
        const dynamicSize = particle.size * pulse;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, dynamicSize * 3
        );
        gradient.addColorStop(0, particle.color + 'AA');
        gradient.addColorStop(0.5, particle.color + '44');
        gradient.addColorStop(1, particle.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, dynamicSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, dynamicSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections with wave effect
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = (1 - distance / 180) * 0.3;
            const wave = Math.sin(time + distance * 0.05) * 0.5 + 0.5;
            
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * wave})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Draw animated grid lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.05)';
      ctx.lineWidth = 1;
      
      const gridSpacing = 50;
      const offset = (time * 20) % gridSpacing;
      
      for (let x = -offset; x < canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = -offset; y < canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
