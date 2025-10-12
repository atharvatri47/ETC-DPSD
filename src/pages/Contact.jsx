import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-rajdhani text-3xl font-bold text-white mb-6">Send us a message</h2>
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

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20">
              <h2 className="font-rajdhani text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <a
                  href="mailto:etcdpsdw@gmail.com"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Email</h3>
                    <p className="font-space text-gray-300 group-hover:text-cyan-400 transition-colors">etcdpsdw@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1">Location</h3>
                    <p className="font-space text-gray-300">Delhi Public School, Dwarka<br />New Delhi, India</p>
                  </div>
                </div>

                <a
                  href="tel:+918929163906"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Phone</h3>
                    <p className="font-space text-gray-300 group-hover:text-cyan-400 transition-colors">+91 89291 63906</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/etcdpsdwarka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Instagram</h3>
                    <p className="font-space text-gray-300 group-hover:text-cyan-400 transition-colors">@etcdpsdwarka</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20">
              <h3 className="font-rajdhani text-2xl font-bold text-white mb-4">Office Hours</h3>
              <div className="font-space text-gray-300 space-y-2">
                <p><span className="text-cyan-400">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                <p><span className="text-cyan-400">Saturday:</span> 10:00 AM - 2:00 PM</p>
                <p><span className="text-cyan-400">Sunday:</span> Closed</p>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-cyan-400/20 to-yellow-200/20 rounded-3xl p-8 border border-cyan-400/30"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-rajdhani text-2xl font-bold text-white mb-2">Join Our Community</h3>
              <p className="font-space text-gray-300">
                Follow us on social media to stay updated with the latest events, workshops, and creative content from ETC.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            Get In Touch
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-rajdhani text-3xl font-bold text-white mb-6">Send us a message</h2>
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

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20">
              <h2 className="font-rajdhani text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:etcdpsdw@gmail.com"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Email</h3>
                    <p className="font-space text-gray-300 group-hover:text-cyan-400 transition-colors">etcdpsdw@gmail.com</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1">Location</h3>
                    <p className="font-space text-gray-300">Delhi Public School, Dwarka<br />New Delhi, India</p>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href="tel:+918929163906"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Phone</h3>
                    <p className="font-space text-gray-300 group-hover:text-cyan-400 transition-colors">+91 89291 63906</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/etcdpsdwarka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Instagram</h3>
                    <p className="font-space text-gray-300 group-hover:text-cyan-400 transition-colors">@etcdpsdwarka</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-aqua-glow rounded-3xl p-8 border border-cyan-400/20">
              <h3 className="font-rajdhani text-2xl font-bold text-white mb-4">Office Hours</h3>
              <div className="font-space text-gray-300 space-y-2">
                <p><span className="text-cyan-400">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                <p><span className="text-cyan-400">Saturday:</span> 10:00 AM - 2:00 PM</p>
                <p><span className="text-cyan-400">Sunday:</span> Closed</p>
              </div>
            </div>

            {/* Join Community */}
            <motion.div
              className="bg-gradient-to-r from-cyan-400/20 to-yellow-200/20 rounded-3xl p-8 border border-cyan-400/30"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-rajdhani text-2xl font-bold text-white mb-2">Join Our Community</h3>
              <p className="font-space text-gray-300">
                Follow us on social media to stay updated with the latest events, workshops, and creative content from ETC.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
