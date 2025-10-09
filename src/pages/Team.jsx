import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import khushiBawaImg from '@/assets/team/khushi-bawa.jpg';
import khushiTalwarImg from '@/assets/team/khushi-talwar.jpg';
import anvitaSehgalImg from '@/assets/team/anvita-sehgal.jpg';

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
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const president = teamMembers.find(member => member.type === 'president');
  const vicePresidents = teamMembers.filter(member => member.type === 'vp');

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
            Our Team
          </h1>
          <p className="font-space text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the creative minds driving ETC's vision forward
          </p>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
