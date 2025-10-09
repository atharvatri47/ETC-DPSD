import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ExternalLink } from "lucide-react";
import { format } from 'date-fns';

const blogPosts = [
  {
    title: "OVERCOMING WRITER'S BLOCK",
    excerpt: "Explore techniques and strategies to break through creative barriers and find your flow again. A deep dive into the psychology of creativity.",
    author: "Sharanya Aggarwal",
    date: "2025-09-04",
    readTime: "External Link",
    category: "Writing",
    link: "https://drive.google.com/drive/folders/1fRPyfYdCDZSCJQOlUkfdnOBULoknlyPv?usp=drive_link"
  },
  {
    title: "IS AI KILLING CREATIVITY?",
    excerpt: "A critical analysis of the impact of artificial intelligence on the creative process and a look into the future of artistry in a tech-driven world.",
    author: "Sharanya Aggarwal",
    date: "2025-09-24",
    readTime: "External Link",
    category: "Innovation",
    link: "https://drive.google.com/drive/folders/1fRPyfYdCDZSCJQOlUkfdnOBULoknlyPv?usp=drive_link"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-glow text-cyan-400 mb-6">
            Creative Chronicles
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, stories, and inspiration from the ETC creative community
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group bg-aqua-glow rounded-2xl p-8 border border-cyan-400/20 backdrop-blur-sm relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Category Badge */}
              <div className="inline-block bg-gradient-to-r from-cyan-400 to-yellow-200 text-black px-3 py-1 rounded-full text-sm font-rajdhani font-semibold mb-4">
                {post.category}
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight"
                style={{ fontFamily: 'Courier New, monospace' }}
              >
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="font-space text-gray-300 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400 mb-6 border-t border-cyan-400/20 pt-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-400" />
                  <span className="font-rajdhani">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="font-rajdhani">{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                </div>
              </div>

              {/* Read More */}
              <div className="flex items-center gap-2 text-cyan-400 font-rajdhani font-semibold group-hover:gap-4 transition-all">
                Read More <ExternalLink className="w-4 h-4" />
              </div>

              {/* Hover Background Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-yellow-200/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-20 text-center bg-aqua-glow rounded-2xl p-12 border border-cyan-400/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="font-space text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe for the latest creative insights, project showcases, and community news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@domain.com"
              className="flex-1 bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 font-space"
              style={{ fontFamily: 'Courier New, monospace' }}
            />
            <motion.button
              className="bg-gradient-to-r from-cyan-400 to-yellow-200 text-black font-rajdhani font-bold px-6 py-3 rounded-lg glow-aqua"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}