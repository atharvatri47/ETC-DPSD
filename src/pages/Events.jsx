import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    "id": 1,
    "title": "EmotiQuest - The Improv Showdown",
    "date": "2025-12-10",
    "time": "11:00",
    "location": "Main Gallery",
    "type": "past",
    "attendees": 25,
    "description": "Teams improvise performances based on odd topics and must instantly switch emotions when prompted."
  },
  {
    "id": 2,
    "title": "Whodunnit Live",
    "date": "2025-12-10",
    "time": "12:00",
    "location": "Classroom",
    "type": "past",
    "attendees": 20,
    "description": "Teams create and perform an original mystery play filled with clues, suspects, and a twist ending."
  },
  {
    "id": 3,
    "title": "More Than a Post: The Instagram Impact Challenge",
    "date": "2025-12-10",
    "time": "10:00",
    "location": "Campus Grounds",
    "type": "past",
    "attendees": 20 ,
    "description": "Participants design a themed Instagram-style campaign using 6–10 creative posts."
  },
  {
    "id": 4,
    "title": "WORKSHOP",
    "date": "15-5-25",
    "time": "10:00",
    "location": "Auditorium",
    "type": "past",
    "attendees":200,
    "description": "Interactive workshop with alumni."
  },
  {
    "id": 5,
    "title": "Coming soon",
    "date": "2026",
    "time": "09:00",
    "location": "To be revealed",
    "type": "upcoming",
    "attendees": 00,
    "description": "Will be revealed"
  }
];

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.type === filter);

  const nextEvent = () => {
    setActiveIndex((prev) => (prev + 1) % filteredEvents.length);
  };

  const prevEvent = () => {
    setActiveIndex((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-glow text-cyan-400 mb-6">
            Events
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            Join our creative community events and workshops
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {['all', 'upcoming', 'past'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => {
                setFilter(filterType);
                setActiveIndex(0);
              }}
              className={`px-6 py-3 rounded-full font-rajdhani font-semibold text-lg transition-all ${
                filter === filterType
                  ? 'bg-gradient-to-r from-cyan-400 to-yellow-200 text-black glow-aqua'
                  : 'bg-aqua-glow text-white hover:text-cyan-400 border border-cyan-400/20'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* 3D Event Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${filter}-${activeIndex}`}
                className="absolute inset-0 bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20 backdrop-blur-sm"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {filteredEvents[activeIndex] && (
                  <div className="h-full flex flex-col justify-between">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-rajdhani font-bold mb-4 ${
                      filteredEvents[activeIndex].type === 'upcoming'
                        ? 'bg-gradient-to-r from-green-400 to-cyan-400 text-black'
                        : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black'
                    }`}>
                      {filteredEvents[activeIndex].type.toUpperCase()}
                    </div>

                    <div className="flex-1">
                      <motion.h2
                        className="font-rajdhani text-3xl md:text-4xl font-bold text-white mb-4"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {filteredEvents[activeIndex].title}
                      </motion.h2>
                      <motion.p
                        className="font-space text-gray-300 text-lg mb-6 leading-relaxed"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {filteredEvents[activeIndex].description}
                      </motion.p>
                    </div>

                    <motion.div
                      className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Calendar className="w-4 h-4" />
                        <span className="font-rajdhani">
                          {new Date(filteredEvents[activeIndex].date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-yellow-200">
                        <Clock className="w-4 h-4" />
                        <span className="font-rajdhani">{filteredEvents[activeIndex].time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <MapPin className="w-4 h-4" />
                        <span className="font-rajdhani">{filteredEvents[activeIndex].location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Users className="w-4 h-4" />
                        <span className="font-rajdhani">{filteredEvents[activeIndex].attendees} people</span>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevEvent}
              className="w-12 h-12 bg-aqua-glow border border-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <div className="flex gap-2 items-center">
              {filteredEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            <motion.button
              onClick={nextEvent}
              className="w-12 h-12 bg-aqua-glow border border-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
