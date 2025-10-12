import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { User } from "lucide-react";

// Import all legacy images
import khushiBawaImg from '@/assets/team/khushi-bawa.jpg';
import arnavKatyalImg from '@/assets/legacy/arnav-katyal.jpg';
import avishiKumarImg from '@/assets/legacy/avishi-kumar.jpg';
import keshavSethiImg from '@/assets/legacy/keshav-sethi.jpg';
import raabhayaGandhiImg from '@/assets/legacy/raabhaya-gandhi.jpg';
import swayamGuptaImg from '@/assets/legacy/swayam-gupta.jpg';
import arnavPuriImg from '@/assets/legacy/arnav-puri.jpg';
import yashasviTickooImg from '@/assets/legacy/yashasvi-tickoo.jpg';

const milestones = [
  {
    name: "Khushi Bawa",
    years: "2025-26",
    quote: "Empower the Creative.",
    image: khushiBawaImg
  },
  {
    name: "Arnav Katyal",
    years: "2024-25",
    quote: "Epitome.",
    image: arnavKatyalImg
  },
  {
    name: "Avishi Kumar",
    years: "2023-24",
    quote: "Creativity is never the norm so embrace the peculiar.",
    image: avishiKumarImg
  },
  {
    name: "Keshav Sethi",
    years: "2023-24",
    quote: "Making chaos look official since day one.",
    image: keshavSethiImg
  },
  {
    name: "Raabhaya Gandhi",
    years: "2022-23",
    quote: "What you seek, is always seeking you.",
    image: raabhayaGandhiImg
  },
  {
    name: "Swayam Gupta",
    years: "2021-22",
    quote: "The years looking good.",
    image: swayamGuptaImg
  },
  {
    name: "Beenet Kaur Anand",
    years: "2021-22",
    quote: "",
    image: null
  },
  {
    name: "Arnav Puri",
    years: "2020-21",
    quote: "Every time someone steps up and says who they are, the world becomes a better, more interesting place.",
    image: arnavPuriImg
  },
  {
    name: "Anushka Sharma",
    years: "2019-20",
    quote: "",
    image: null
  },
  {
    name: "Yashasvi Tickoo",
    years: "2019-20",
    quote: "Be a little extra. Be an etcetera.",
    image: yashasviTickooImg
  },
];

export default function Legacy() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
            Our Legacy
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through time celebrating the leaders who shaped ETC
          </p>
        </motion.div>

        {/* 3D Stacked Timeline */}
        <div className="relative">
          {/* Background Parallax Line - SHORTENED */}
          <motion.div
            className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-cyan-400 to-yellow-200 h-[70%] -translate-x-1/2 opacity-30"
            style={{ y }}
          />

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.name + milestone.years}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, z: -50 }}
                whileInView={{ opacity: 1, x: 0, z: 0 }}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <motion.div
                    className="flex-1 bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20 backdrop-blur-sm relative group"
                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5, z: 50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-rajdhani text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {milestone.name}
                    </h3>
                    <p className="font-orbitron text-lg text-yellow-200 mb-4">{milestone.years}</p>
                    {milestone.quote && (
                      <blockquote className="font-space text-gray-300 text-lg leading-relaxed italic border-l-2 border-cyan-400 pl-4">
                        "{milestone.quote}"
                      </blockquote>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-yellow-200/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.div>

                  {/* Circular Image */}
                  <motion.div
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-cyan-400 glow-aqua relative z-10 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {milestone.image ? (
                      <img
                        src={milestone.image}
                        alt={milestone.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-black/50 flex items-center justify-center rounded-full">
                        <User className="w-16 h-16 text-cyan-400/50" />
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision Section */}
        <motion.div
          className="mt-32 text-center bg-aqua-glow rounded-3xl p-12 border border-cyan-400/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-yellow-200/5"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10">
            <h2 className="font-orbitron text-4xl font-bold text-white mb-6">
              What's Next?
            </h2>
            <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              As we look toward the future, ETC continues to push the boundaries of creativity and innovation. Join us in writing the next chapter of our legacy.
            </p>
            <motion.div
              className="inline-block bg-gradient-to-r from-cyan-400 to-yellow-200 text-black px-8 py-4 rounded-full font-rajdhani font-bold text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Be Part of Our Story
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );

}

