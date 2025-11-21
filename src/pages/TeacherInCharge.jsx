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
              Ms. Geetika Manish Puri, words cannot fully express our gratitude for all you have done. 
  ETC exists because of your vision, passion, and belief in what students can create when 
  they are truly supported. You didn’t just start this club — you built a family, a space 
  where creativity thrives, confidence grows, and every member feels seen and valued.
  <br /><br />
  You have always recognized our potential long before we recognized it ourselves. 
  Your guidance turns uncertainty into courage, your encouragement pushes us further, 
  and your warmth makes ETC feel like home. Every opportunity we’ve received and 
  every achievement we celebrate traces back to your dedication.
  <br /><br />
  You are the heart of ETC — the reason we dream bigger, work harder, and believe in ourselves. 
  Thank you for giving us a place to grow, to express, and to discover who we can become. 
  We are forever grateful to learn under your leadership.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

