import React from "react";
import { motion } from "framer-motion";
import geetikaPuri from "../assets/team/geetika-puri.jpg";

export default function TeacherInCharge() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-glow text-cyan-400 mb-6">
            Teacher In-Charge
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the guiding force behind ETC's vision and mission
          </p>
        </motion.div>

        {/* Photo Section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-aqua-glow rounded-3xl border-4 border-cyan-400 overflow-hidden glow-aqua inline-block w-full md:w-4/5 lg:w-3/4">
            <div className="w-full h-[550px] md:h-[600px] bg-black/50 flex items-center justify-center">
              <img
                src={geetikaPuri}
                alt="Ms. Geetika Manish Puri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name Line */}
          <h2 className="font-rajdhani text-2xl md:text-3xl text-cyan-400 font-bold mt-6">
            MS. GEETIKA MANISH PURI
          </h2>
        </motion.div>

        {/* Message Section */}
        <motion.div
          className="bg-aqua-glow rounded-3xl border-4 border-cyan-400 p-8 md:p-12 glow-aqua"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="font-rajdhani text-3xl font-bold text-white mb-6">
            Message
          </h2>

          <div className="bg-black/50 rounded-2xl p-8 border border-cyan-400/30 min-h-[300px]">
            <p className="font-space text-gray-300 text-lg leading-relaxed">
              From all of us at ETC, we want to express our deepest gratitude to 
              Ms. Geetika Manish Puri. Your support, patience, and unwavering 
              dedication have shaped us into more confident, creative, and 
              inspired individuals. You guide us not just as students, but as 
              young artists learning to find our voice. For every opportunity, 
              every encouraging word, and every moment of belief you’ve shown 
              us—thank you. You are the heart of ETC, and we are incredibly 
              grateful to have you leading us.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
