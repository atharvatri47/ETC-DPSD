import React from "react";
import { motion } from "framer-motion";
import { BookOpen, PenTool, Mic, BrainCircuit } from "lucide-react";

const whatWeOffer = [
  {
    icon: BookOpen,
    title: "Poetry & Prose Circles",
    description: "Share original work, receive feedback, and explore diverse literary styles."
  },
  {
    icon: Mic,
    title: "Dramatic Productions",
    description: "Collaborate on scripts and performances that bring stories to life."
  },
  {
    icon: PenTool,
    title: "Creative Writing Challenges",
    description: "Tackle prompts, competitions, and bold storytelling experiments."
  },
  {
    icon: BrainCircuit,
    title: "Linguistics Lab",
    description: "Discover the beauty of language through wordplay, syntax, and etymology."
  },
];

export default function AboutUs() {
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
            About ETC
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            We are a collective of creators, innovators, and dreamers dedicated to exploring the limitless intersections of art and technology.
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          <motion.div
            className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-rajdhani text-3xl font-bold text-yellow-200 mb-4">Our Mission</h2>
            <p className="font-space text-lg text-gray-300 leading-relaxed">
              At ETC, we foster a vibrant environment in which students deepen their command of the English language and unlock their creative potential. Through rigorous yet inspiring workshops in linguistics, poetry, prose, and drama, members hone their communication skills, cultivate original ideas, and learn to articulate them with confidence and flair.
            </p>
          </motion.div>

          <motion.div
            className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-rajdhani text-3xl font-bold text-yellow-200 mb-4">Our Vision</h2>
            <p className="font-space text-lg text-gray-300 leading-relaxed">
              To nurture a vibrant community of young creators who think fearlessly, express authentically, and inspire meaningfully. ETC envisions a space where every student discovers the power of language and art—not just as tools of expression, but as pathways to confidence, connection, and original thought.
            </p>
          </motion.div>
        </div>

        {/* What We Offer Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="font-orbitron text-4xl font-bold text-white mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whatWeOffer.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-aqua-glow rounded-2xl p-8 border border-cyan-400/20 flex items-start gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 glow-aqua">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="font-rajdhani text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="font-space text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Join ETC Section */}
        <motion.div
          className="text-center bg-aqua-glow rounded-3xl p-12 border border-cyan-400/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10">
            <h2 className="font-orbitron text-4xl font-bold text-white mb-6">
              Why Join ETC?
            </h2>
            <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build confidence, showcase your talent, publish and perform your creations, and connect with peers who share your love for words and performance. Whether writer, actor, or curious explorer—ETC is your stage for creativity.
            </p>
            <motion.button
              className="bg-gradient-to-r from-cyan-400 to-yellow-200 text-black px-8 py-4 rounded-full font-rajdhani font-bold text-lg glow-aqua"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join The Revolution
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
