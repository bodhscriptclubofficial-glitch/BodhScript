import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PreviousEventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    images: string[];
    gradient: string;
    attendees: number;
  };
  index: number;
  isInView: boolean;
}

export function PreviousEventCard({ event, index, isInView }: PreviousEventCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [event.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={event.images[currentImageIndex]}
                alt={event.title}
                className="w-full h-full object-cover opacity-70"
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          <div className="absolute top-3 right-3">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className={`px-3 py-1 bg-gradient-to-r ${event.gradient} rounded-full text-xs font-semibold shadow-lg`}
            >
              {event.category}
            </motion.span>
          </div>

          {/* Attendees Badge */}
          <div className="absolute bottom-3 left-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-semibold flex items-center gap-1"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              {event.attendees} attended
            </motion.div>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-3 right-3 flex gap-1">
            {event.images.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className="relative w-1.5 h-1.5 rounded-full bg-white/30"
                whileHover={{ scale: 1.3 }}
              >
                {idx === currentImageIndex && (
                  <motion.div
                    layoutId={`indicator-${event.id}`}
                    className="absolute inset-0 bg-white rounded-full"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <motion.h3
            className="text-xl mb-4 text-slate-300 group-hover:text-indigo-400 transition-colors"
            whileHover={{ x: 5 }}
          >
            {event.title}
          </motion.h3>

          <div className="space-y-2 mb-6">
            <motion.div
              className="flex items-center gap-2 text-sm text-slate-500"
              whileHover={{ x: 5 }}
            >
              <Calendar className="w-4 h-4 text-indigo-400/70" />
              <span>{event.date}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-sm text-slate-500"
              whileHover={{ x: 5 }}
            >
              <Clock className="w-4 h-4 text-purple-400/70" />
              <span>{event.time}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-sm text-slate-500"
              whileHover={{ x: 5 }}
            >
              <MapPin className="w-4 h-4 text-pink-400/70" />
              <span>{event.location}</span>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white/5 hover:bg-white/10 border border-indigo-500/20 hover:border-indigo-500/40 py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>View Recap</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
