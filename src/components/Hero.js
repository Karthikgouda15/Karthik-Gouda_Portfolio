import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, ArrowDown, ChevronRight, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] text-white overflow-hidden" id="home">
      {/* Unified Blue Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <div className="flex-[1.2] order-2 lg:order-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="h-[2px] w-10 bg-blue-600 rounded-full"></span>
              <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase font-bold">Software Engineer</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-[0.9]">
              Karthik <br className="hidden lg:block" /> Gouda
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-2xl md:text-3xl text-gray-400 font-light mb-10 h-16">
              Building{' '}
              <TypeAnimation
                sequence={['scalable systems.', 2000, 'clean interfaces.', 2000, 'MERN solutions.', 2000]}
                repeat={Infinity}
                className="text-white font-semibold underline decoration-blue-600/50 underline-offset-8"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-8 items-center justify-center lg:justify-start">
              <a href="https://topmate.io/karthik154" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-blue-600/30">
                <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                Let's connect
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="https://github.com/Karthikgouda15" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all py-2">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-blue-600/20 transition-colors">
                  <Github size={24} className="group-hover:text-blue-500 transition-colors" />
                </div>
                <span className="font-bold tracking-widest text-xs uppercase">Github</span>
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1 }} className="flex-1 order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-72 h-72 md:w-[475px] md:h-[475px] rounded-full p-2 bg-gradient-to-tr from-blue-600/40 via-white/10 to-blue-400/40 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a] border-[8px] border-[#0a0a0a]">
                  <img src="/images/KarthikGouda.jpeg" alt="Karthik Gouda" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
              </div>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-2 -right-2 md:bottom-10 md:-right-8 bg-black/60 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-3xl shadow-2xl z-20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/40">
                    <span className="text-white font-black">M</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Expertise</div>
                    <div className="text-sm font-bold text-white">Full Stack Dev</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div onClick={scrollToAbout} animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer p-2 rounded-full border border-white/10 hover:border-blue-600 transition-colors group">
          <ArrowDown size={24} className="text-gray-500 group-hover:text-blue-500 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;