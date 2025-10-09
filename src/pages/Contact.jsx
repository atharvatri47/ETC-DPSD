import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, ExternalLink } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI Art Gallery",
      description: "An interactive online gallery showcasing AI-generated art and digital creativity.",
      author: "Aryan Kapoor",
      category: "AI / Design",
      image: "/images/project1.jpg",
      link: "https://example.com/project1",
      highlights: [
        "Curated 100+ AI artworks",
        "Dynamic layout with Framer Motion",
        "Interactive project previews",
      ],
      techStack: ["React", "Framer Motion", "TailwindCSS"],
    },
    {
      title: "EcoTrack",
      description: "A sustainability tracking dashboard for environmental initiatives at DPS Dwarka.",
      author: "Riya Sharma",
      category: "Environment / Data",
      image: "/images/project2.jpg",
      link: "https://example.com/project2",
      highlights: [
        "Real-time CO₂ tracking",
        "Visual analytics and dashboards",
        "Community leaderboard integration",
      ],
      techStack: ["Next.js", "Chart.js", "Firebase"],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-glow text-cyan-400 mb-6">
            Get In Touch
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        {/* ===== CONTACT FORM & INFO ===== */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.div
            className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-rajdhani text-3xl font-bold text-white mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-space text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 font-space"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block font-space text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 font-space"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block font-space text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 font-space"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block font-space text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 font-space resize-none"
                  placeholder="Tell us more..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-yellow-200 text-black font-rajdhani font-bold text-lg px-8 py-4 rounded-lg glow-aqua flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20">
              <h2 className="font-rajdhani text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1">Email</h3>
                    <p className="font-space text-gray-300">etc@dpsdwarka.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1">Location</h3>
                    <p className="font-space text-gray-300">
                      Delhi Public School, Dwarka
                      <br />
                      New Delhi, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1">Phone</h3>
                    <p className="font-space text-gray-300">+91 (11) 1234-5678</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20">
              <h3 className="font-rajdhani text-2xl font-bold text-white mb-4">
                Office Hours
              </h3>
              <div className="font-space text-gray-300 space-y-2">
                <p>
                  <span className="text-cyan-400">Monday - Friday:</span> 9:00 AM - 5:00 PM
                </p>
                <p>
                  <span className="text-cyan-400">Saturday:</span> 10:00 AM - 2:00 PM
                </p>
                <p>
                  <span className="text-cyan-400">Sunday:</span> Closed
                </p>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-cyan-400/20 to-yellow-200/20 rounded-3xl p-8 border border-cyan-400/30"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-rajdhani text-2xl font-bold text-white mb-2">
                Join Our Community
              </h3>
              <p className="font-space text-gray-300">
                Follow us on social media to stay updated with the latest events, workshops, and creative content from ETC.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== PROJECT GALLERY SECTION ===== */}
        <motion.section
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-center text-cyan-400 mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-aqua-glow rounded-3xl border border-cyan-400/20 overflow-hidden cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-rajdhani text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="font-space text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-space text-sm text-yellow-200">
                      by {project.author}
                    </span>
                    <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== PROJECT MODAL ===== */}
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
                      <p className="font-space text-cyan-400 text-lg">
                        by {selectedProject.author}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-400 to-yellow-200 text-black px-4 py-2 rounded-full font-rajdhani font-bold">
                      {selectedProject.category}
                    </div>
                  </div>

                  <p className="font-space text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-rajdhani text-xl font-bold text-white mb-3">
                        Highlights
                      </h3>
                      <ul className="list-disc list-inside font-space text-gray-300 space-y-2">
                        {selectedProject.highlights?.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-rajdhani text-xl font-bold text-white mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack?.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-cyan-400/20 to-yellow-200/20 text-cyan-300 border border-cyan-400/30 rounded-full px-3 py-1 text-sm font-space"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-yellow-200 text-black font-rajdhani font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
                    >
                      View Project
                      <ExternalLink className="w-5 h-5" />
                    </a>
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
