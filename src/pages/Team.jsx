// src/pages/Team.jsx - WITH ALL MEMBERS
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

// Import team member images
import khushiBawaImg from '@/assets/team/khushi-bawa.jpg';
import khushiTalwarImg from '@/assets/team/khushi-talwar.jpg';
import anvitaSehgalImg from '@/assets/team/anvita-sehgal.jpg';

// Import new member images
import anaghaImg from '@/assets/team/anagha-dua.jpg';
import sabhyataImg from '@/assets/team/sabhyata-singh.jpg';
import gurnoorImg from '@/assets/team/gurnoor-bhatia.jpg';
import kshirjaImg from '@/assets/team/kshirja-pradhan.jpg';
import jivanshImg from '@/assets/team/jivansh-kain.jpg';
import aditiImg from '@/assets/team/aditi-prakash.jpg';
import adityaGuptaImg from '@/assets/team/aditya-gupta.jpg';
import aarnaImg from '@/assets/team/aarna-arora.jpg';
import nysaImg from '@/assets/team/nysa-agarwal.jpg';
import vanyaImg from '@/assets/team/vanya-trikha.jpg';
import atharvImg from '@/assets/team/atharv-atri.jpg';

const teamMembers = [
  {
    id: 1,
    name: "Khushi Bawa",
    role: "President",
    bio: "Guiding the creative vision of ETC with passion and dedication to fostering a collaborative and innovative environment for all members.",
    image: khushiBawaImg,
    type: "president",
    email: "khushi.b@etc.club"
  },
  {
    id: 2,
    name: "Khushi Talwar",
    role: "Vice President",
    bio: "Spearheading creative projects and workshops, ensuring a dynamic and engaging experience for the entire ETC community.",
    image: khushiTalwarImg,
    type: "vp",
    email: "khushi.t@etc.club"
  },
  {
    id: 3,
    name: "Anvita Sehgal",
    role: "Vice President",
    bio: "Managing club operations and outreach, connecting our creative endeavors with the wider school community and beyond.",
    image: anvitaSehgalImg,
    type: "vp",
    email: "anvita.s@etc.club"
  },
  // Secretaries
  {
    id: 4,
    name: "Anagha Dua",
    role: "Secretary",
    bio: "Organizing club activities and ensuring smooth communication among members.",
    image: anaghaImg,
    type: "team",
    email: "anagha.d@etc.club"
  },
  {
    id: 5,
    name: "Sabhyata Singh",
    role: "Secretary",
    bio: "Coordinating events and maintaining club records with precision.",
    image: sabhyataImg,
    type: "team",
    email: "sabhyata.s@etc.club"
  },
  // Event Heads
  {
    id: 6,
    name: "Gurnoor Bhatia",
    role: "Event Head",
    bio: "Leading the planning and execution of all club events and activities.",
    image: gurnoorImg,
    type: "team",
    email: "gurnoor.b@etc.club"
  },
  {
    id: 7,
    name: "Kshirja Pradhan",
    role: "Event Head",
    bio: "Coordinating workshops and creative gatherings for the ETC community.",
    image: kshirjaImg,
    type: "team",
    email: "kshirja.p@etc.club"
  },
  // Tech Heads
  {
    id: 8,
    name: "Jivansh Kain",
    role: "Tech Head",
    bio: "Managing technical infrastructure and digital platforms for ETC.",
    image: jivanshImg,
    type: "team",
    email: "jivansh.k@etc.club"
  },
  {
    id: 9,
    name: "Aditi Prakash",
    role: "Tech Head",
    bio: "Overseeing technology integration and digital innovation initiatives.",
    image: aditiImg,
    type: "team",
    email: "aditi.p@etc.club"
  },
  // Creative Heads
  {
    id: 10,
    name: "Aditya Gupta",
    role: "Creative Head",
    bio: "Driving artistic vision and creative direction for all club projects.",
    image: adityaGuptaImg,
    type: "team",
    email: "aditya.g@etc.club"
  },
  {
    id: 11,
    name: "Aarna Arora",
    role: "Creative Head",
    bio: "Inspiring innovative ideas and leading creative workshops.",
    image: aarnaImg,
    type: "team",
    email: "aarna.a@etc.club"
  },
  // Editors
  {
    id: 12,
    name: "Nysa Agarwal",
    role: "Editor",
    bio: "Curating and editing content for ETC's publications and media.",
    image: nysaImg,
    type: "team",
    email: "nysa.a@etc.club"
  },
  {
    id: 13,
    name: "Vanya Trikha",
    role: "Editor",
    bio: "Ensuring quality and consistency across all written materials.",
    image: vanyaImg,
    type: "team",
    email: "vanya.t@etc.club"
  },
  // Developer
  {
    id: 14,
    name: "Atharv Atri",
    role: "Developer",
    bio: "Building and maintaining the ETC website and digital presence.",
    image: atharvImg,
    type: "team",
    email: "atharv.a@etc.club"
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const president = teamMembers.find(member => member.type === 'president');
  const vicePresidents = teamMembers.filter(member => member.type === 'vp');
  const apexMembers = teamMembers.filter(member => member.type === 'team');
  const developer = teamMembers.find(member => member.id === 14); // Atharv Atri

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
            Our Team
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the creative minds driving ETC's vision forward
          </p>
        </motion.div>

        {/* President Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-rajdhani text-3xl font-bold text-yellow-200 mb-8">President</h2>
          <motion.div
            className="inline-block relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMember(president)}
          >
            <div className="w-48 h-48 mx-auto relative">
              <motion.div
                className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 glow-aqua"
                whileHover={{ borderColor: "#FFFCD3" }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={president.image}
                  alt={president.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <h3 className="font-rajdhani text-2xl font-bold text-white mt-4 group-hover:text-cyan-400 transition-colors">
              {president.name}
            </h3>
            <p className="font-space text-yellow-200">{president.role}</p>
          </motion.div>
        </motion.div>

        {/* Vice Presidents Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="font-rajdhani text-3xl font-bold text-yellow-200 text-center mb-12">
            Vice Presidents
          </h2>
          <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
            {vicePresidents.map((member, index) => (
              <motion.div
                key={member.id}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-40 h-40 mx-auto relative mb-4">
                  <motion.div
                    className="w-full h-full rounded-full overflow-hidden border-3 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300"
                    whileHover={{ rotateY: 15 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>
                <h3 className="font-rajdhani text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <p className="font-space text-sm text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Apex Members Section - 4 per row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-rajdhani text-3xl font-bold text-yellow-200 text-center mb-12">
            Apex
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {apexMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                whileHover={{ y: -10, scale: 1.05 }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-32 h-32 mx-auto relative mb-3">
                  <motion.div
                    className="w-full h-full rounded-full overflow-hidden border-3 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300"
                    whileHover={{ rotateY: 15 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
                <h3 className="font-rajdhani text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <p className="font-space text-xs text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="font-rajdhani text-3xl font-bold text-yellow-200 mb-8">Developer</h2>
          <motion.div
            className="inline-block relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMember(developer)}
          >
            <div className="w-40 h-40 mx-auto relative">
              <motion.div
                className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 glow-aqua"
                whileHover={{ borderColor: "#FFFCD3" }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            </div>
            <h3 className="font-rajdhani text-xl font-bold text-white mt-4 group-hover:text-cyan-400 transition-colors">
              {developer.name}
            </h3>
            <p className="font-space text-sm text-gray-300">{developer.role}</p>
          </motion.div>
        </motion.div>

        {/* Member Detail Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                className="bg-aqua-glow max-w-2xl w-full rounded-3xl p-8 border border-cyan-400/20 relative"
                initial={{ scale: 0.8, rotateY: -30 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.8, rotateY: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full rounded-full object-cover border-4 border-cyan-400 glow-aqua"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-rajdhani text-3xl font-bold text-white mb-2">
                      {selectedMember.name}
                    </h3>
                    <p className="font-space text-cyan-400 text-lg mb-4">{selectedMember.role}</p>
                    <p className="font-space text-gray-300 leading-relaxed mb-6">
                      {selectedMember.bio}
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-8 h-8 text-gray-400 hover:text-white flex items-center justify-center text-2xl"
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
