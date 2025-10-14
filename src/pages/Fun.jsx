import React from "react";
import { motion } from "framer-motion";

const funLinks = [
  { title: "Not a Robot", url: "https://neal.fun/not-a-robot/" },
  { title: "Internet Road Trip", url: "https://neal.fun/internet-roadtrip/" },
  { title: "Infinite Craft", url: "https://neal.fun/infinite-craft/" },
  { title: "Password Game", url: "https://neal.fun/password-game/" },
  { title: "Asteroid Launcher", url: "https://neal.fun/asteroid-launcher/" },
  { title: "Perfect Circle", url: "https://neal.fun/perfect-circle/" },
  { title: "Sell! Sell! Sell!", url: "https://neal.fun/sell-sell-sell/" },
  { title: "Spend Bill Gates’ Money", url: "https://neal.fun/spend/" },
];

export default function Fun() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-glow text-cyan-400 mb-6">
            Fun Zone 🎮
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            Take a break and explore some of the most creative games from Neal.fun
          </p>
        </motion.div>

        {/* Floating Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {funLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-aqua-glow border-4 border-cyan-400 rounded-3xl p-10 text-center glow-aqua cursor-pointer hover:shadow-[0_0_25px_#00FFFF] transition-shadow duration-300"
              initial={{ y: 0 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random(),
              }}
            >
              <h2 className="font-rajdhani text-2xl font-bold text-white mb-2">
                {item.title}
              </h2>
              <p className="font-space text-gray-300 text-sm">Click to play</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
