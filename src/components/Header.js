import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Cpu,
  Layers,
  UserCircle,
  Send,
  TerminalSquare,
  FileText,
  Home
} from 'lucide-react';

const Header = ({ setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Background styling
      setIsScrolled(window.scrollY > 20);
      
      // 2. Handle Active State (Scroll Spy)
      const sections = ['about', 'skills', 'projects', 'contact'];
      
      // If user is at the top of the page, set active to home
      if (window.scrollY < 300) {
        setActiveSection('home');
        return;
      }

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section is in view
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: UserCircle },
    { id: 'skills', label: 'Skills', icon: TerminalSquare },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  const handleNavClick = (id) => {
    if (id === 'home') {
      // SCROLL TO TOP OF PAGE
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.header
        className={`
          pointer-events-auto flex items-center justify-between px-6 py-3 rounded-2xl
          transition-all duration-500 border
          ${isScrolled 
            ? 'w-full max-w-5xl bg-black/70 backdrop-blur-xl border-white/10 shadow-2xl' 
            : 'w-full max-w-7xl bg-transparent border-transparent'
          }
        `}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
          whileHover={{ scale: 1.02 }}
        >
          {/* .....................................Small Logo........................................ */}
<div className="relative group">
  {/* Ambient background glow on hover */}
  <div className="absolute inset-0 bg-primary/25 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
  
  {/* The Circle Container */}
  <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-white/20 to-transparent border border-white/10 shadow-2xl overflow-visible group-hover:border-primary/50 transition-all duration-500">
    
    {/* The Photo - Clipped to a perfect circle */}
    <div className="w-full h-full rounded-full overflow-hidden border border-black">
      <img 
        src="/images/KarthikGouda.jpeg" // Replace with your image path
        alt="Karthik Gouda"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
    </div>

    {/* Elegant Professional Status Indicator - Positioned for a circle */}
    <div className="absolute bottom-[2px] right-[2px] flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-black"></span>
    </div>
  </div>
</div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-bold text-white tracking-tight">Karthik Gouda</span>
            <span className="text-[10px] text-blue-400 font-mono uppercase tracking-widest font-bold">Software Developer</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    flex items-center gap-2 group
                    ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="navGlow"
                      className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <item.icon size={16} className={activeSection === item.id ? 'text-blue-400' : 'group-hover:text-blue-400'} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-black text-sm font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-xl"
            onClick={() => setView('resume')}
          >
            <FileText size={16} />
            Resume
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-3 p-3 bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-2xl lg:hidden pointer-events-auto"
            >
              <div className="grid grid-cols-1 gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                      activeSection === item.id 
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                      : 'hover:bg-white/5 text-gray-400'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-semibold text-base">{item.label}</span>
                  </button>
                ))}
                <div className="h-px bg-white/5 my-2 mx-4" />
                <button
                  onClick={() => setView('resume')}
                  className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white text-black font-bold hover:bg-blue-500 hover:text-white transition-all"
                >
                  <FileText size={20} />
                  View Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Header;