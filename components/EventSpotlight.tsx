import React, { useRef,useEffect, useState } from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { motion } from 'motion/react';
import { ConciseCodeContestBanner } from './CodeContest/ConciseCodeContestBanner';
import { StaticCodeContestBanner } from './CodeContest/StaticCodeContestBanner';
import { CodeContestVideo } from './CodeContest/CodeContestVideo';
//import { EnhancedCodeContestVideo } from './CodeContest/EnhancedCodeContestVideo';
import { SmallBannerExporter } from './CodeContest/SmallBannerExporter';
import { ManualExportHelper } from './CodeContest/ManualExportHelper';
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
import { QRCodeGenerator } from './CodeContest/QRCodeGenerator';

interface EnhancedCodeContestVideoProps {
  autoPlay?: boolean;
  duration?: number;
  qrCodeUrl?: string;
}

export function EnhancedCodeContestVideo({ autoPlay = true, duration = 5000, qrCodeUrl = "http://example.com/" }: EnhancedCodeContestVideoProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);

  const scenes = [
    {
      id: 'lpu-intro',
      title: 'BodhScript',
      subtitle: 'Presents',
      icon: Globe,
      background: 'from-blue-900 via-purple-900 to-indigo-900',
      vfx: 'university'
    },
    {
      id: 'event-title',
      title: 'CodeClash 2025',
      subtitle: 'The Ultimate Battle of Logic & Speed',
      icon: Rocket,
      background: 'from-purple-900 via-pink-900 to-red-900',
      vfx: 'explosion'
    },
    {
      id: 'date-reveal',
      title: 'September 19th & 24th, 2025',
      subtitle: 'Event Dates',
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
      title: 'Programming Languages',
      subtitle: 'C • C++ | 1st Challenge – MCQ Questions | 2nd Challenge – Pure Coding',
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
      title: '',
      subtitle: '',
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
    <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${currentSceneData.background}`}>
      {renderVFX(currentSceneData.vfx)}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <currentSceneData.icon className="w-16 h-16 text-white mb-4" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{currentSceneData.title}</h2>
        <p className="text-lg md:text-2xl text-white/80">{currentSceneData.subtitle}</p>

       {currentSceneData.vfx === 'qrcode' && (
  <div className="mt-8">
    <img 
     src="/images/CodeClashQr.jpeg"
     className="h-80 w-auto mx-auto"  // 👈 adjust height here

     />

  </div>
)}
      </div>

      <div className="absolute bottom-4 left-4 right-4 h-2 bg-white/20 rounded-full">
        <div className="h-2 bg-cyan-400 rounded-full" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}










export function EventSpotlight() {

    const [currentIndex, setCurrentIndex] = React.useState(0); // For Use Of 3dMarquee

  React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % eventItems.length);
  }, 3000); // change slide every 3 seconds
  return () => clearInterval(interval);
}, []);      // Function For Use Of 3dMarquee

  return (
    <div className='max-w-7xl mx-auto px-4 mt-10'>
      {/* Event Info Section */}
      <div className='mt-16 relative overflow-hidden p-10 bg-gradient-to-br from-[#1e1e3f] via-[#2a0944] to-[#1e1e3f] rounded-3xl shadow-2xl border border-indigo-500/30 text-center text-white'>
        {/* Background decorative elements */}
        <div className='absolute top-0 left-0 w-full h-full opacity-10'>
          <div className='absolute top-10 left-10 w-32 h-32 rounded-full bg-cyan-500 blur-3xl'></div>
          <div className='absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500 blur-3xl'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-yellow-300 blur-3xl opacity-20'></div>
        </div>

        {/* Content */}
        <div className='relative z-10'>
          <div className='inline-block mb-6 px-6 py-2 bg-indigo-900/70 rounded-full border border-indigo-500/50 shadow-lg shadow-indigo-500/20'>
            <span className='text-sm font-medium tracking-wider text-cyan-300'>
              BODH SCRIPT CLUB PRESENTS
            </span>
          </div>

          <h3 className='text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 mb-4'>
            🎉 Code-Quest 2025 – A Huge Success! 🎉
          </h3>

          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
            The{' '}
            <span className='font-bold text-yellow-300'>Code-Quest 2025</span>,
            organized by Bodh Script Club, was an exhilarating event held on
            <span className='font-bold text-green-300'>
              {' '}
              March 28, 2025! 💻✨
            </span>
            A showcase of coding excellence with incredible participation!
          </p>

          <div className='bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-8 border border-gray-700/50'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  👨‍💻
                </div>
                <p className='text-cyan-300 font-semibold'>
                  Over <span className='text-yellow-300 text-xl'>100+</span> BCA
                  & MCA students participated!
                </p>
              </div>

              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  🏆
                </div>
                <p className='text-cyan-300 font-semibold'>
                  <span className='text-yellow-300 text-xl'>Top 20</span>{' '}
                  students awarded excellence certificates.
                </p>
              </div>

              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  🎖️
                </div>
                <p className='text-cyan-300 font-semibold'>
                  Participation certificates & duty leave granted to all.
                </p>
              </div>

              <div className='flex items-center space-x-4 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30'>
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full text-2xl'>
                  🚀
                </div>
                <p className='text-cyan-300 font-semibold'>
                  Boosted coding skills, and problem-solving abilities.
                </p>
              </div>
            </div>
          </div>

          <h4 className='text-2xl font-bold text-yellow-300 mb-6 inline-block px-4 py-1 bg-yellow-900/30 rounded-lg border border-yellow-500/30'>
            🌟 Event Highlights:
          </h4>

          <div className='flex flex-wrap justify-center gap-4 mb-8'>
            <div className='flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50'>
              <span>💡</span>
              <span className='text-gray-300'>Challenging coding rounds</span>
            </div>
            <div className='flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50'>
              <span>🔥</span>
              <span className='text-gray-300'>Competitive environment</span>
            </div>
            <div className='flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50'>
              <span>🤝</span>
              <span className='text-gray-300'>Networking opportunity</span>
            </div>
          </div>

          <button className='group relative mt-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition duration-300 text-black font-bold rounded-xl shadow-lg overflow-hidden'>
            <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300'></span>
            <span className='relative flex items-center justify-center gap-2'>
              <span>📸</span>
              <span>View Event Snapshots Below</span>
            </span>
          </button>
        </div>
      </div>
       <div className='mt-20 mb-8 text-center'>
        <h3 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 inline-block'>
          Upcoming Event
        </h3>
        <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-2 rounded-full'></div>
      </div>

       <div className="relative w-full h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <EnhancedCodeContestVideo  />
        </div>


      {/* Enhanced Marquee Section */}
      <div className='mt-20 mb-8 text-center'>
        <h3 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 inline-block'>
          Event Gallery
        </h3>
        <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-2 rounded-full'></div>
      </div>

      <div className='relative mb-20 h-[28rem] md:h-[32rem]'>
        {/* Background decorative elements for Marquee section */}
        <div className='absolute inset-0 w-full h-full -z-10 opacity-5'>
          <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-500 blur-3xl'></div>
          <div className='absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500 blur-3xl'></div>
        </div>

        {eventItems.map((item, i) => {
          const isActive = i === currentIndex; // show only the active slide
           return (
                <div
                  key={i}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {item.header}
                  <div className="absolute bottom-0 w-full p-4 bg-gray-900/80">
                    <h3 className="text-cyan-300 font-bold">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
                   );
                  })}

        <div className='text-center mt-10'>
          <button className='px-6 py-3 bg-indigo-900/70 text-cyan-300 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/70 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 mt-12'>
            View Full Gallery
          </button>
        </div>
      </div>
    </div>
  )
}

const eventItems = [
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/img1.jpg'
          alt='CodeQuest Highlights'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-cyan-500/80 text-black text-xs font-bold rounded-full mb-2'>
              HIGHLIGHT
            </span>
            <h4 className='text-white text-lg font-bold'>Main Event</h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Highlights',
    description: 'A glimpse of the exciting moments from CodeQuest 2025.',
    className: 'md:col-span-4 md:row-span-2',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/hod.jpg'
          alt='HOD Address'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-yellow-500/80 text-black text-xs font-bold rounded-full mb-2'>
              OPENING
            </span>
            <h4 className='text-white text-lg font-bold'>Department Head</h4>
          </div>
        </div>
      </div>
    ),
    title: 'HOD Address',
    description: 'The Head of Department addressing the participants.',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/round2.jpg'
          alt='Round 2'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-purple-500/80 text-black text-xs font-bold rounded-full mb-2'>
              COMPETITION
            </span>
            <h4 className='text-white text-lg font-bold'>Advanced Round</h4>
          </div>
        </div>
      </div>
    ),
    title: 'Round 2 Challenges',
    description: 'Participants tackling advanced problems in Round 2.',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/img2.jpg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              HIGHLIGHT
            </span>
            <h4 className='text-white text-lg font-bold'>Round 1</h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
  // Added More Events Pictures on 27/08/2025 by DEV: Diptimoy Datta

  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic1.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic2.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic3.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
{
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic4.jpeg'
          alt='CodeQuest Winners'
          //className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
          className='w-full h-full object-contain transition-transform duration-700 group-hover:scale-110'

        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
 {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic5.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },

   {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic6.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    //title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },

  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic7.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    //title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic8.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    //title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
  {
    header: (
      <div className='relative h-full w-full overflow-hidden group'>
        <img
          src='/images/codequest/PreviousEventPic9.jpeg'
          alt='CodeQuest Winners'
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
          <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
            <span className='inline-block px-3 py-1 bg-green-500/80 text-black text-xs font-bold rounded-full mb-2'>
              
            </span>
            <h4 className='text-white text-lg font-bold'></h4>
          </div>
        </div>
      </div>
    ),
    //title: 'CodeQuest Winners',
    //description: 'Celebrating the winners of CodeQuest 2025!',
    className: 'md:col-span-6 md:h-[500px]',
  },
]


