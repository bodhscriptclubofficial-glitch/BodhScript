import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeGenerator } from './QRCodeGenerator';
import lpuLogo from 'figma:asset/73caa45b7ab59d18f2f07279a7e90dd7b4a5d2ba.png';
import { 
  Code, 
  Trophy, 
  Clock, 
  Users, 
  Zap, 
  Target, 
  Award, 
  Rocket,
  Coffee,
  Monitor,
  Keyboard,
  Brain,
  Star,
  Timer,
  Play,
  Pause,
  Sparkles,
  Binary,
  Cpu,
  Database,
  Globe,
  Bolt,
  Calendar
} from 'lucide-react';

interface EnhancedCodeContestVideoProps {
  autoPlay?: boolean;
  duration?: number;
  qrCodeUrl?: string;
}

export function EnhancedCodeContestVideo({ autoPlay = true, duration = 5000, qrCodeUrl = "https://lpu.in/codecontest2024/register" }: EnhancedCodeContestVideoProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);

  const scenes = [
    {
      id: 'lpu-intro',
      title: 'Lovely Professional University',
      subtitle: 'Presents',
      icon: Globe,
      background: 'from-blue-900 via-purple-900 to-indigo-900',
      vfx: 'university'
    },
    {
      id: 'event-title',
      title: 'CodeMaster 2025',
      subtitle: 'The Ultimate Programming Championship',
      icon: Rocket,
      background: 'from-purple-900 via-pink-900 to-red-900',
      vfx: 'explosion'
    },
    {
      id: 'date-reveal',
      title: 'September 20, 2025',
      subtitle: '48 Hours of Innovation & Competition',
      icon: Calendar,
      background: 'from-emerald-900 via-teal-900 to-cyan-900',
      vfx: 'matrix'
    },
    {
      id: 'hackathon-energy',
      title: 'Code • Build • Innovate',
      subtitle: 'Where legends are born',
      icon: Bolt,
      background: 'from-orange-900 via-red-900 to-pink-900',
      vfx: 'energy'
    },
    {
      id: 'challenges',
      title: '5 Epic Domains',
      subtitle: 'AI • Web • Mobile • Data Science • IoT',
      icon: Target,
      background: 'from-green-900 via-blue-900 to-purple-900',
      vfx: 'hologram'
    },
    {
      id: 'prizes',
      title: 'Win Exciting Prizes',
      subtitle: 'Amazing rewards await the winners',
      icon: Award,
      background: 'from-yellow-900 via-orange-900 to-red-900',
      vfx: 'golden'
    },
    {
      id: 'call-to-action',
      title: 'Register Now',
      subtitle: 'Scan QR Code to Register',
      icon: Zap,
      background: 'from-purple-900 via-blue-900 to-indigo-900',
      vfx: 'qrcode'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          const nextScene = currentScene + 1;
          if (nextScene >= scenes.length) {
            // Stop at the last scene (QR code scene)
            setIsPlaying(false);
            return 100;
          }
          setCurrentScene(nextScene);
          return 0;
        }
        return prev + (100 / (duration / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, duration, scenes.length, currentScene]);

  // Enhanced particle systems
  const renderUniversityVFX = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Glowing orbs */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"
          style={{
            width: Math.random() * 20 + 10,
            height: Math.random() * 20 + 10,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* LPU Logo with glow effect */}
      <motion.div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: 1, 
          rotate: 0,
          boxShadow: [
            '0 0 30px rgba(96, 165, 250, 0.5)',
            '0 0 60px rgba(168, 85, 247, 0.8)',
            '0 0 30px rgba(96, 165, 250, 0.5)'
          ]
        }}
        transition={{ 
          scale: { duration: 1, type: "spring", bounce: 0.4 },
          rotate: { duration: 1, type: "spring", bounce: 0.4 },
          boxShadow: { duration: 3, repeat: Infinity }
        }}
      >
        <div className="relative">
          <img 
            src={lpuLogo.src} 
            alt="LPU Logo" 
            className="w-40 h-auto"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );

  const renderExplosionVFX = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Explosive particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`explosion-${i}`}
          className={`absolute w-3 h-3 ${
            i % 5 === 0 ? 'bg-yellow-400' :
            i % 5 === 1 ? 'bg-orange-400' :
            i % 5 === 2 ? 'bg-red-400' :
            i % 5 === 3 ? 'bg-pink-400' : 'bg-purple-400'
          } rounded-full`}
          initial={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            scale: 0,
          }}
          animate={{
            x: window.innerWidth / 2 + (Math.random() - 0.5) * 800,
            y: window.innerHeight / 2 + (Math.random() - 0.5) * 600,
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Shockwave rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: [0, 4, 6],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            width: 100,
            height: 100,
          }}
        />
      ))}
    </div>
  );

  const renderMatrixVFX = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Matrix rain effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`matrix-${i}`}
          className="absolute text-green-400 text-xs opacity-70 font-mono"
          initial={{
            x: (i * window.innerWidth / 20),
            y: -50,
          }}
          animate={{
            y: window.innerHeight + 50,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
        >
          {Array.from({ length: 10 }, () => 
            Math.random() > 0.5 ? '1' : '0'
          ).join('')}
        </motion.div>
      ))}
      
      {/* Date highlight effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          textShadow: [
            '0 0 10px #10b981',
            '0 0 30px #10b981',
            '0 0 10px #10b981'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Clock className="w-24 h-24 text-emerald-400" />
      </motion.div>
    </div>
  );

  const renderEnergyVFX = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Electric bolts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bolt-${i}`}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: Math.random() * 2,
            repeatDelay: Math.random() * 3 + 1,
          }}
        >
          <Bolt className="w-8 h-8 text-yellow-400" />
        </motion.div>
      ))}
      
      {/* Energy waves */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(255, 255, 0, 0.1) 0%, 
            rgba(255, 165, 0, 0.1) 30%, 
            rgba(255, 0, 0, 0.1) 60%, 
            transparent 100%)`
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );

  const renderHologramVFX = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Holographic grid */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff88" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating challenge icons */}
      {[Brain, Monitor, Code, Database, Cpu].map((Icon, i) => (
        <motion.div
          key={`holo-${i}`}
          className="absolute"
          initial={{
            x: (i * window.innerWidth / 6) + 100,
            y: 150 + (i % 2) * 200,
            rotateY: 0,
          }}
          animate={{
            rotateY: [0, 360],
            y: [150 + (i % 2) * 200, 100 + (i % 2) * 200, 150 + (i % 2) * 200],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <div className="p-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-cyan-400/50">
            <Icon className="w-8 h-8 text-cyan-400" />
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderGoldenVFX = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Golden particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`gold-${i}`}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
          }}
          animate={{
            y: -50,
            x: Math.random() * window.innerWidth,
            scale: [0.5, 1, 0.5],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Trophy showcase */}
      <motion.div
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="relative">
          <Trophy className="w-32 h-32 text-yellow-400" />
          <motion.div
            className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );

  const renderQRCodeVFX = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Pulse rings around QR code */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`qr-pulse-${i}`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white/40 rounded-lg"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{
            scale: [1, 1.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            width: 280,
            height: 280,
          }}
        />
      ))}
      
      {/* Scanning lines effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{
          y: [-120, 120, -120],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Corner brackets */}
      {[
        { top: '25%', left: '25%', rotate: 0 },
        { top: '25%', right: '25%', rotate: 90 },
        { bottom: '25%', right: '25%', rotate: 180 },
        { bottom: '25%', left: '25%', rotate: 270 }
      ].map((position, i) => (
        <motion.div
          key={`bracket-${i}`}
          className="absolute w-8 h-8 border-l-4 border-t-4 border-cyan-400"
          style={{
            ...position,
            transform: `rotate(${position.rotate}deg)`
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );

  const renderVFX = (vfxType: string) => {
    switch (vfxType) {
      case 'university': return renderUniversityVFX();
      case 'explosion': return renderExplosionVFX();
      case 'matrix': return renderMatrixVFX();
      case 'energy': return renderEnergyVFX();
      case 'hologram': return renderHologramVFX();
      case 'golden': return renderGoldenVFX();
      case 'qrcode': return renderQRCodeVFX();
      default: return null;
    }
  };

  const currentSceneData = scenes[currentScene];

  return (
    <div className="relative w-full h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          className={`absolute inset-0 bg-gradient-to-br ${currentSceneData.background}`}
          initial={{ opacity: 0, scale: 1.1, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateX: -10 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c12 0 20-8 20-20s-8-20-20-20-20 8-20 20 8 20 20 20zm20 20c12 0 20-8 20-20s-8-20-20-20-20 8-20 20 8 20 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* VFX Layer */}
          {currentSceneData.vfx && renderVFX(currentSceneData.vfx)}

          {/* Main content with enhanced animations */}
          <div className="relative h-full flex items-center justify-center text-center text-white p-8 z-10">
            <div>
              {/* Show icon for all scenes except scene 1 (university scene) */}
              {currentScene !== 0 && (
                <motion.div
                  initial={{ scale: 0, rotate: -180, y: -50 }}
                  animate={{ scale: 1, rotate: 0, y: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    type: "spring", 
                    bounce: 0.6,
                    delay: 0.2 
                  }}
                  className="mb-8"
                >
                  <motion.div 
                    className="p-6 bg-white/20 backdrop-blur-sm rounded-full inline-block border-2 border-white/30"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(255, 255, 255, 0.3)',
                        '0 0 40px rgba(255, 255, 255, 0.6)',
                        '0 0 20px rgba(255, 255, 255, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <currentSceneData.icon className="w-16 h-16" />
                  </motion.div>
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 50, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.1em" }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="text-3xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
                }}
              >
                {currentSceneData.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="text-xl md:text-2xl lg:text-3xl text-blue-100"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                }}
              >
                {currentSceneData.subtitle}
              </motion.p>

              {/* Special effects for specific scenes */}
              {currentScene === 6 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="mt-8 flex flex-col items-center gap-6"
                >
                  {/* QR Code */}
                  <motion.div
                    className="relative"
                    animate={{
                      boxShadow: [
                        "0 0 30px rgba(56, 189, 248, 0.5)",
                        "0 0 60px rgba(56, 189, 248, 0.8)",
                        "0 0 30px rgba(56, 189, 248, 0.5)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="p-4 bg-white rounded-xl border-4 border-cyan-400">
                      <QRCodeGenerator 
                        value={qrCodeUrl} 
                        size={200}
                        className="rounded-lg"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Register button */}
                  <motion.div 
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-lg"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀 Scan to Register
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Enhanced floating elements */}
          <motion.div
            className="absolute top-8 right-8 flex flex-col gap-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-2 bg-red-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
              <motion.div 
                className="w-3 h-3 bg-white rounded-full" 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              LIVE
            </div>
            <div className="flex items-center gap-2 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
              <Users className="w-4 h-4" />
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                5.2k watching
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Controls */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 z-20">
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </motion.button>

        {/* Enhanced progress bar */}
        <div className="flex-1 bg-white/20 rounded-full h-3 overflow-hidden border border-white/20">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Scene indicators */}
        <div className="flex gap-2">
          {scenes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentScene(index);
                setProgress(0);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentScene ? 'bg-white scale-125' : 'bg-white/40'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Scene info */}
      <div className="absolute top-6 left-6 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm border border-white/20">
        Scene {currentScene + 1} / {scenes.length}
      </div>
    </div>
  );
}