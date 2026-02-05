import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* ROW 1: THE HEADLINE & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4 text-blue-500 font-mono text-xs tracking-widest uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              Available for New Projects
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              LET'S BUILD <br /> THE FUTURE.
            </h2>
          </div>
          <motion.a 
            href="mailto:kartikagouda644@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full font-black transition-all"
          >
            START A PROJECT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>

        {/* ROW 2: CORE INFO & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-y border-white/5 items-start">
          {/* Socials Column */}
          <div className="space-y-4">
            <p className="text-xs font-mono text-gray-600 uppercase tracking-[0.2em]">Connect</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karthikgouda15/' },
                { label: 'GitHub', href: 'https://github.com/Karthikgouda15' },
                { label: 'Twitter / X', href: '#' }
              ].map((link) => (
                <a key={link.label} href={link.href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-lg">
                  {link.label} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap Column */}
          <div className="space-y-4">
            <p className="text-xs font-mono text-gray-600 uppercase tracking-[0.2em]">Sitemap</p>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-lg">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Description Column */}
          <div className="space-y-4">
            <p className="text-xs font-mono text-gray-600 uppercase tracking-[0.2em]">Philosophy</p>
            <p className="text-gray-500 leading-relaxed max-w-xs italic">
              "Focusing on the intersection of high-performance backend logic and fluid frontend motion."
            </p>
          </div>
        </div>

        {/* ROW 3: LEGAL & CREDITS */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-6 text-[10px] font-mono tracking-widest text-gray-600 uppercase">
          <div className="flex gap-8">
            <span>© {currentYear} KARTHIK GOUDA</span>
            <span className="hidden md:inline">/</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
          <div className="flex items-center gap-4">
            <span>BUILT WITH REACT & FRAMER MOTION</span>
            <span className="text-blue-500 font-bold">V.2.0.26</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;