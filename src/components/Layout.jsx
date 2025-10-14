
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "About Us", url: createPageUrl("AboutUs") }, // Changed "Activities" to "About Us"
  { title: "Blog", url: createPageUrl("Blog") },
  { title: "Events", url: createPageUrl("Events") },
  { title: "Team", url: createPageUrl("Team") },
  { title: "Teacher In-Charge", url: createPageUrl("TeacherInCharge") },
  { title: "Legacy", url: createPageUrl("Legacy") },
  { title: "Showcase", url: createPageUrl("Showcase") },
  { title: "Contact", url: createPageUrl("Contact") }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      <style jsx>{`
        :root {
          --aqua: #00FFFF;
          --pale-yellow: #FFFCD3;
          --black: #000000;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        .font-orbitron { font-family: 'Orbitron', monospace; }
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        
        .glow-aqua {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }
        
        .text-glow {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
        }
        
        .bg-aqua-glow {
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 255, 255, 0.05));
          border: 1px solid rgba(0, 255, 255, 0.2);
        }
        
        .marquee {
          animation: marquee 20s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-yellow-200 rounded-full flex items-center justify-center glow-aqua">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <span className="font-orbitron font-bold text-xl text-glow">ETC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`font-space font-medium transition-all hover:text-cyan-400 hover:text-glow relative ${
                  location.pathname === item.url ? 'text-cyan-400 text-glow' : 'text-white'
                }`}
              >
                {item.title}
                {location.pathname === item.url && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cyan-400"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-cyan-400/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 h-screen w-80 bg-black/95 backdrop-blur-lg z-40 md:hidden"
          >
            <div className="pt-20 px-6">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.url}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-4 font-space text-lg transition-colors ${
                      location.pathname === item.url ? 'text-cyan-400 text-glow' : 'text-white hover:text-cyan-400'
                    }`}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer with Marquee */}
      <footer className="bg-black border-t border-cyan-400/20 py-8">
        <div className="overflow-hidden">
          <div className="marquee whitespace-nowrap text-cyan-400 font-rajdhani text-lg">
            ETC - Everything Creative • Unleashing boundless creativity • Innovation meets artistry • Where imagination comes alive • Join the creative revolution • ETC - Everything Creative •
          </div>
        </div>
        <div className="text-center mt-8 space-y-4"> {/* Changed mt-6 to mt-8 and added space-y-4 */}
          <Button
            asChild
            className="bg-gradient-to-r from-cyan-400 to-yellow-200 text-black font-rajdhani font-semibold hover:glow-aqua"
          >
            <a href="https://docs.google.com/document" target="_blank" rel="noopener noreferrer">
              Learn More About ETC
            </a>
          </Button>
          <p className="font-space text-sm text-gray-500"> {/* Added new p tag */}
            created by Atharv Atri
          </p>
        </div>
      </footer>
    </div>
  );
}
