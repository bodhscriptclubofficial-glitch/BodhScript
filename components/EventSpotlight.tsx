'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IntroSlide } from './CodeContest/IntroSlide';
import { OverviewSlide } from './CodeContest/OverviewSlide';
import { ObjectivesSlide } from './CodeContest/ObjectivesSlide';
import { FormatSlide } from './CodeContest/FormatSlide';
import { OutcomesSlide } from './CodeContest/OutcomesSlide';
import { AwardsSlide } from './CodeContest/AwardsSlide';
import { QRCodeSlide } from './CodeContest/QRCodeSlide';
import { SlideNavigation } from './CodeContest/SlideNavigation';
import { CodeRainBackground } from './CodeContest/CodeRainBackground';
import { TransitionEffect } from './CodeContest/TransitionEffect';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = { src: string; alt: string; caption?: string };
type EventType = { title: string; description: string; slides: Slide[] };

// ------------------- Previous Events Data -------------------
const previousEvents: EventType[] = [
  {
    title: "CodeQuest 2025",
    description: "Exciting coding event with multiple challenges, certificates, and prizes.",
    slides: [
      { src: "/images/codequest/img1.jpg", alt: "CodeQuest Highlights" },
      { src: "/images/codequest/round2.jpg", alt: "Round 2 Challenges" },
      { src: "/images/codequest/hod.jpg", alt: "HOD Address" },
      { src: "/images/codequest/img2.jpg", alt: "CodeQuest Winners" },
      { src: "/images/codequest/PreviousEventPic1.jpeg", alt: "" },
      { src: "/images/codequest/PreviousEventPic2.jpeg", alt: "" },
      { src: "/images/codequest/PreviousEventPic3.jpeg", alt: "" },
      { src: "/images/codequest/PreviousEventPic4.jpeg", alt: "" },
      { src: "/images/codequest/PreviousEventPic5.jpeg", alt: "" },
      { src: "/images/codequest/PreviousEventPic6.jpeg", alt: "" },
      { src: "/images/codequest/PreviousEventPic7.jpeg", alt: "" },
      { src: "/images/codequest/PreviousEventPic8.jpeg", alt: "" },
      { src: "/images/codequest/PreviousEventPic9.jpeg", alt: "" },
    ],
  },
  {
    title: "CodeClash 2025",
    description: `CodeClash 2025: A Phenomenal Success! 150+ students participated in MCQ round; top 20 advanced to problem-solving.`,
    slides: [
      { src: "/images/CodeClash/CodeClashPic2.jpeg", alt: "CodeClashPic2" },
      { src: "/images/CodeClash/CodeClashPic3.jpeg", alt: "CodeClashPic3" },
      { src: "/images/CodeClash/CodeClashPic4.jpeg", alt: "CodeClashPic4" },
      { src: "/images/CodeClash/CodeClashPic5.jpeg", alt: "CodeClashPic5" },
    ],
  },
];

// ------------------- MiniMovie Component -------------------
function MiniMovie({ event, onComplete }: { event: EventType; onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = event.slides;

  // Auto-play slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Call onComplete after all slides
  useEffect(() => {
    const timeout = setTimeout(onComplete, slides.length * 4500);
    return () => clearTimeout(timeout);
  }, [slides.length, onComplete]);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 rounded-3xl overflow-hidden bg-black">
      {/* Background to avoid dark flashes */}
      <div className="absolute inset-0 -z-20 bg-black" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-cyan-300 rounded-full absolute"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, 20, 0], x: [0, 15, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Slide image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          className="w-full h-[550px] object-cover relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          exit={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Text overlay */}
      <div className="absolute bottom-6 left-6 p-4 z-20">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse">
          {event.title}
        </h2>
        <p className="text-gray-200 mt-2 max-w-lg">{event.description}</p>
      </div>
    </div>
  );
}

// ------------------- Upcoming Events Component -------------------
function UpcomingEvents() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  const slides = [
    <IntroSlide key="intro" />,
    <OverviewSlide key="overview" />,
    <ObjectivesSlide key="objectives" />,
    <FormatSlide key="format" />,
    <OutcomesSlide key="outcomes" />,
    <AwardsSlide key="awards" />,
    <QRCodeSlide key="qrcode" />
  ];

  const nextSlide = () => {
    setShowTransition(true);
    setTimeout(() => setShowTransition(false), 700);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1 >= slides.length ? prev : prev + 1));
  };

  const prevSlide = () => {
    setShowTransition(true);
    setTimeout(() => setShowTransition(false), 700);
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Auto-play with stop at QR code
  useEffect(() => {
    if (!isAutoPlaying) return;
    if (currentSlide === slides.length - 1) return;
    const duration = currentSlide === 0 ? 8000 : 5000;
    const interval = setInterval(nextSlide, duration);
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  // Keyboard navigation (client-only)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { nextSlide(); setIsAutoPlaying(false); }
      if (e.key === 'ArrowLeft') { prevSlide(); setIsAutoPlaying(false); }
      if (e.key === ' ') { e.preventDefault(); setIsAutoPlaying((prev) => !prev); }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
<div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:max-w-[1500px] mx-auto my-12 h-[750px] sm:h-[900px] md:h-[1000px] lg:h-[1100px] xl:h-[1200px] rounded-3xl overflow-hidden">
      <CodeRainBackground />

      <div className="relative w-full h-full z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      <TransitionEffect isActive={showTransition} />

      {/* Navigation Buttons */}
      <button onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-purple-600 text-white shadow-lg">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
        disabled={currentSlide === slides.length - 1}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-purple-600 text-white shadow-lg ${currentSlide === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}>
        <ChevronRight className="w-6 h-6" />
      </button>

      <button onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full bg-purple-600 text-white shadow-lg">
        {isAutoPlaying ? '⏸ Pause' : '▶ Play'}
      </button>

      <SlideNavigation totalSlides={slides.length} currentSlide={currentSlide} onNavigate={goToSlide} />
    </div>
  );
}

// ------------------- EventSpotlight -------------------
export function EventSpotlight() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const handleComplete = () => setCurrentEventIndex((prev) => (prev + 1) % previousEvents.length);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* Previous Events */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Previous Events
        </h2>
        <AnimatePresence mode="wait">
          <MiniMovie key={currentEventIndex} event={previousEvents[currentEventIndex]} onComplete={handleComplete} />
        </AnimatePresence>
      </section>

      {/* Upcoming Events */}
     <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
          Upcoming Events
        </h2>
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:max-w-[1600px] mx-auto h-[900px] sm:h-[1000px] md:h-[1100px] lg:h-[1200px] rounded-3xl overflow-hidden">
          <UpcomingEvents />
        </div>
      </section>

    </div>
  );
}
