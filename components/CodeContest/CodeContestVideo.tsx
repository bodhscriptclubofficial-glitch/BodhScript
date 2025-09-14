import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Pause
} from 'lucide-react';

interface CodeContestVideoProps {
  autoPlay?: boolean;
  duration?: number;
}

export function CodeContestVideo({ autoPlay = true, duration = 5000 }: CodeContestVideoProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);

  const scenes = [
    {
      id: 'intro',
      title: 'CodeMaster 2025',
      subtitle: 'The Ultimate Programming Challenge',
      icon: Rocket,
      background: 'from-purple-900 via-blue-900 to-indigo-900',
      particles: true
    },
    {
      id: 'hackathon',
      title: '48 Hours of Pure Coding',
      subtitle: 'Build • Innovate • Compete',
      icon: Monitor,
      background: 'from-green-900 via-teal-900 to-blue-900',
      activity: 'coding'
    },
    {
      id: 'challenges',
      title: '5 Epic Challenges',
      subtitle: 'Algorithm • AI • Web Dev • Mobile • Data Science',
      icon: Target,
      background: 'from-orange-900 via-red-900 to-pink-900',
      activity: 'challenges'
    },
    {
      id: 'leaderboard',
      title: 'Live Rankings',
      subtitle: 'Watch the competition unfold in real-time',
      icon: Trophy,
      background: 'from-yellow-900 via-orange-900 to-red-900',
      activity: 'leaderboard'
    },
    {
      id: 'prizes',
      title: '$50,000 Prize Pool',
      subtitle: 'Plus internships, mentorship & exclusive swag',
      icon: Award,
      background: 'from-emerald-900 via-green-900 to-teal-900',
      activity: 'prizes'
    },
    {
      id: 'register',
      title: 'Join the Battle',
      subtitle: 'Registration closes in 5 days!',
      icon: Zap,
      background: 'from-purple-900 via-pink-900 to-red-900',
      activity: 'cta'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentScene(prev => (prev + 1) % scenes.length);
          return 0;
        }
        return prev + (100 / (duration / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, duration, scenes.length]);

  const renderParticles = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 ${
            i % 4 === 0 ? 'bg-cyan-400' :
            i % 4 === 1 ? 'bg-yellow-400' :
            i % 4 === 2 ? 'bg-green-400' : 'bg-pink-400'
          } rounded-full opacity-60`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
            rotate: 360
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );

  const renderCodingActivity = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating code snippets */}
      <motion.div
        className="absolute top-20 left-10 bg-black/30 backdrop-blur-sm rounded-lg p-3 text-green-400 text-xs"
        animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div>function solve(arr) {'{'}</div>
        <div>&nbsp;&nbsp;return arr.sort();</div>
        <div>{'}'}</div>
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-16 bg-black/30 backdrop-blur-sm rounded-lg p-3 text-blue-400 text-xs"
        animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <div>const result = await</div>
        <div>&nbsp;&nbsp;api.getData();</div>
      </motion.div>

      {/* Typing indicators */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white rounded-full opacity-40"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            x: Math.random() * window.innerWidth * 0.8,
            y: Math.random() * window.innerHeight * 0.6 + 100
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}
    </div>
  );

  const renderChallengeActivity = () => (
    <div className="absolute inset-0">
      {/* Challenge cards floating */}
      {['Algorithm', 'AI/ML', 'Web Dev', 'Mobile', 'Data Science'].map((challenge, i) => (
        <motion.div
          key={challenge}
          className="absolute bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            x: (i * window.innerWidth / 6) + 50,
            y: 100 + (i % 2) * 200
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5
          }}
        >
          <div className="text-sm font-medium">{challenge}</div>
          <div className="text-xs opacity-75">Challenge {i + 1}</div>
        </motion.div>
      ))}
    </div>
  );

  const renderLeaderboard = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg mb-4 text-center">🏆 Live Leaderboard</h3>
        {['Alice Chen', 'Bob Kumar', 'Carol Johnson', 'David Park'].map((name, i) => (
          <motion.div
            key={name}
            className="flex items-center justify-between mb-2 p-2 bg-white/10 rounded"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <span className="text-sm">#{i + 1} {name}</span>
            <motion.span 
              className="text-yellow-400"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
            >
              {Math.floor(Math.random() * 1000) + 500}pts
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  const renderPrizes = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white">
        {['🥇 $25,000', '🥈 $15,000', '🥉 $10,000'].map((prize, i) => (
          <motion.div
            key={prize}
            className="text-2xl mb-4"
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.3,
              type: "spring",
              bounce: 0.4
            }}
          >
            {prize}
          </motion.div>
        ))}
        <motion.div
          className="text-lg text-blue-200 mt-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          + Internships & Mentorship
        </motion.div>
      </div>
    </div>
  );

  const renderCTA = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white">
        <motion.div
          className="text-6xl mb-4"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ⚡
        </motion.div>
        <motion.div
          className="text-xl mb-4"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Registration Closing Soon!
        </motion.div>
        <motion.div
          className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(16, 185, 129, 0.3)",
              "0 0 40px rgba(16, 185, 129, 0.6)",
              "0 0 20px rgba(16, 185, 129, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white">🚀 Register Now</span>
        </motion.div>
      </div>
    </div>
  );

  const renderActivity = (activity: string) => {
    switch (activity) {
      case 'coding': return renderCodingActivity();
      case 'challenges': return renderChallengeActivity();
      case 'leaderboard': return renderLeaderboard();
      case 'prizes': return renderPrizes();
      case 'cta': return renderCTA();
      default: return null;
    }
  };

  const currentSceneData = scenes[currentScene];

  return (
    <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          className={`absolute inset-0 bg-gradient-to-br ${currentSceneData.background}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c8 0 15-7 15-15s-7-15-15-15-15 7-15 15 7 15 15 15z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Dynamic background effects */}
          {currentSceneData.particles && renderParticles()}
          {currentSceneData.activity && renderActivity(currentSceneData.activity)}

          {/* Main content */}
          <div className="relative h-full flex items-center justify-center text-center text-white p-8">
            <div>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="mb-6"
              >
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full inline-block">
                  <currentSceneData.icon className="w-12 h-12" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
              >
                {currentSceneData.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl text-blue-100"
              >
                {currentSceneData.subtitle}
              </motion.p>
            </div>
          </div>

          {/* Scene-specific overlays */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Floating elements based on scene */}
            {currentScene === 0 && (
              <motion.div
                className="absolute top-10 left-10 text-yellow-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-8 h-8" />
              </motion.div>
            )}
            
            {currentScene === 3 && (
              <motion.div
                className="absolute bottom-10 right-10 text-yellow-400"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Trophy className="w-10 h-10" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white" />
          )}
        </button>

        {/* Progress bar */}
        <div className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Scene indicators */}
        <div className="flex gap-1">
          {scenes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentScene(index);
                setProgress(0);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentScene ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scene counter */}
      <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
        {currentScene + 1} / {scenes.length}
      </div>

      {/* Floating action elements */}
      <motion.div
        className="absolute top-4 left-4 flex gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-1 bg-red-500/80 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          LIVE
        </div>
        <div className="flex items-center gap-1 bg-green-500/80 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
          <Users className="w-3 h-3" />
          2.4k watching
        </div>
      </motion.div>
    </div>
  );
}