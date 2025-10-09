import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Heart } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Photographic Talent",
    description: "A collection showcasing the incredible photographic talent of our students.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
    category: "Photography",
    author: "ETC Members",
    likes: 156,
    views: 2890,
    link: null
  },
  {
    id: 2,
    title: "Diverse Creations",
    description: "A showcase of the various creative talents from our members, spanning digital art, animation, and more.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    category: "Miscellaneous",
    author: "ETC Members",
    likes: 127,
    views: 2340,
    link: "https://drive.google.com/drive/folders/1KTuP-OUfrvnjsWIETxx1YqfJndI7rBFL?usp=drive_link"
  }
];

const categories = ["All", "Photography", "Miscellaneous"];

export default function Showcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

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
            Showcase
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the incredible creative works from our ETC community
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-rajdhani font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-400 to-yellow-200 text-black glow-aqua'
                  : 'bg-aqua-glow text-white hover:text-cyan-400 border border-cyan-400/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="font-rajdhani text-3xl font-bold text-yellow-200 text-center mb-8">
            Creative Showcase
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-aqua-glow rounded-3xl overflow-hidden border border-cyan-400/20 cursor-pointer"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2, z: 30 }}
                onClick={() => setSelectedProject(project)}
                style={{ perspective: "1000px" }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-400 to-yellow-200 text-black px-3 py-1 rounded-full text-sm font-rajdhani font-bold">
                    {project.category}
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 right-4 flex gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-rajdhani">{project.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-rajdhani">{project.views}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-rajdhani text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-space text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-space text-sm text-yellow-200">by {project.author}</span>
                    <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-aqua-glow max-w-4xl w-full rounded-3xl overflow-hidden border border-cyan-400/20 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, rotateY: -30 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.8, rotateY: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-96">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full text-white hover:bg-black/70"
                  >
                    ×
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="font-rajdhani text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="font-space text-cyan-400 text-lg">by {selectedProject.author}</p>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-400 to-yellow-200 text-black px-4 py-2 rounded-full font-rajdhani font-bold">
                      {selectedProject.category}
                    </div>
                  </div>
                  <p className="font-space text-gray-300 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2 text-white">
                        <Heart className="w-5 h-5" />
                        <span className="font-rajdhani text-lg">{selectedProject.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <Eye className="w-5 h-5" />
                        <span className="font-rajdhani text-lg">{selectedProject.views} views</span>
                      </div>
                    </div>
                    {selectedProject.link && (
                      <motion.a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-cyan-400 to-yellow-200 text-black px-6 py-3 rounded-full font-rajdhani font-bold flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Project
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}