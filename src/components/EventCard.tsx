import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import type { Event } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventCardProps {
  event: Event;
}

const categoryColors = {
  workshop: 'bg-blue-100 text-blue-700 border-blue-200',
  hackathon: 'bg-purple-100 text-purple-700 border-purple-200',
  meetup: 'bg-green-100 text-green-700 border-green-200',
  competition: 'bg-orange-100 text-orange-700 border-orange-200'
};

const difficultyColors = {
  beginner: 'bg-emerald-100 text-emerald-700',
  intermediate: 'bg-amber-100 text-amber-700',
  advanced: 'bg-red-100 text-red-700'
};

export function EventCard({ event }: EventCardProps) {
  const spotsLeft = event.maxAttendees - event.attendees;
  const isAlmostFull = spotsLeft <= 5;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs border ${categoryColors[event.category]}`}>
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs ${difficultyColors[event.difficulty]}`}>
            {event.difficulty.charAt(0).toUpperCase() + event.difficulty.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl mb-2">{event.title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Calendar className="w-4 h-4" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Attendees */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Users className="w-4 h-4" />
            <span>{event.attendees}/{event.maxAttendees} attending</span>
          </div>
          {isAlmostFull && (
            <span className="text-xs text-orange-600 font-medium">
              {spotsLeft} spots left
            </span>
          )}
        </div>

        {/* Register Button */}
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg transition-colors duration-200">
          Register Now
        </button>
      </div>
    </div>
  );
}
