import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils/index";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import ParticleField from "../components/3d/ParticleField";
import InteractiveCrosses from "../components/3d/InteractiveCrosses";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticleField />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1
              className="font-orbitron text-6xl md:text-8xl font-black text-glow"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
            >
              <span className="text-cyan-400">ETC</span>
              <br />
              <span className="text-yellow-200">Everything</span>
              <br />
              <span className="text-white">Creative</span>
            </motion.h1>

            <motion.div
              className="text-yellow-200 font-rajdhani text-2xl tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              EMPOWER THE CREATIVE
            </motion.div>

            {/* Interactive 3D Crosses Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="my-12"
            >
              <InteractiveCrosses />
            </motion.div>

            <motion.p
              className="font-space text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Founded in 2021, ETC—Everything Creative is the official creative arts and literary club of Delhi Public School, Dwarka. Open to students of Classes 8–12, it offers a vibrant space where imagination, language, and performance come alive. From poetry slams and theatrical skits to creative writing and language-based challenges, ETC encourages students to think beyond textbooks and embrace originality. The club nurtures expression in every form—on stage, on paper, and in conversation—celebrating individuality, confidence, and creativity. With each gathering, ETC fosters innovation, artistic growth, and meaningful connections within the school's dynamic student community.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-rajdhani font-bold text-lg px-8 py-4 glow-aqua hover:scale-105 transition-all"
              >
                <Link to={createPageUrl("AboutUs")} className="flex items-center gap-2">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-yellow-200 text-yellow-200 hover:bg-yellow-200 hover:text-black font-rajdhani font-bold text-lg px-8 py-4"
              >
                <Link to={createPageUrl("Showcase")} className="flex items-center gap-2">
                  View Showcase <Sparkles className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-cyan-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 bg-yellow-200/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Quick Preview Section */}
      <motion.section
        className="relative z-10 py-20 px-6 bg-aqua-glow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="w-16 h-16 bg-cyan-400 rounded-full mx-auto flex items-center justify-center">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-rajdhani text-2xl font-bold text-cyan-400">Innovative</h3>
              <p className="font-space text-gray-300">Cutting-edge creative techniques and modern approaches</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-yellow-200 rounded-full mx-auto flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-rajdhani text-2xl font-bold text-yellow-200">Collaborative</h3>
              <p className="font-space text-gray-300">Work together on amazing projects and share ideas</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-rajdhani text-2xl font-bold text-white">Limitless</h3>
              <p className="font-space text-gray-300">No boundaries to what you can create and achieve</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}