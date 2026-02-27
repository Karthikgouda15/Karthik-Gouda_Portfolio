import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Brain, Target, Users, Zap, Award, 
  ArrowDownRight, GraduationCap, Briefcase 
} from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    { year: "2022 — 2026", title: "Computer Science Engineering", place: "VTU", desc: "Focusing on MERN stack, Cloud Architecture, and AI fundamentals." },
    { year: "2021 — 2022", title: "Pre-University Education", place: "Science Stream", desc: "Foundation in Physics, Chemistry, and Mathematics." }
  ];

  const experience = [
    { year: "2026 — Present", title: " SDE", place: "GENESIS", desc: "Building scalable web apps using React, Node, and Azure." },
    { year: "2026 — Present", title: " Full Stack Developer", place: "TEKAVACH", desc: "Building scalable web apps using React, Node, and Azure." },
    { year: "2025", title: "Technical Lead", place: "Innovatiaa (College Hackathon)", desc: "Building scalable web apps using React, Node, and Azure." },
    { year: "2025", title: "Technical Lead and Online Paper Review Coordinator", place: "NCASET National Conference", desc: "Implementing RAG and LLM agents in production environments." }
  ];

  return (
    <section id="about" className="py-24 bg-[#050505] text-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 lg:px-20">
        {/* --- 1. Typography --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20 space-y-4"
        >
          <div className="flex items-center gap-2 text-blue-500">
            <div className="h-[1px] w-8 bg-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Background</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            Profile <span className="text-blue-600 italic">&</span> Story
          </h2>
        </motion.div>
        {/* --- 2. THE GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Professional Narrative */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <p className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-gray-300">
                I am a <span className="text-white underline decoration-blue-600 decoration-4">Computer Science Engineer</span> and MERN developer who views code as a tool for building meaningful digital experiences. 
              </p>
              <div className="mt-8 space-y-6 text-gray-500 text-lg">
                <p>Alongside full-stack development, I am preparing for SDE roles by strengthening my skills in System Design and Microsoft Azure (AZ-900). I have hands-on experience with Docker, Kubernetes, and Agile practices.</p>
                <p>My technical depth extends into <span className="text-blue-400">Generative AI</span>, working with LLMs, RAG, and LangChain to build the next generation of intelligent applications.</p>
              </div>
            </motion.div>

            {/* Quick Stats Bento */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-blue-500/50 transition-all">
                <Zap className="text-blue-500 mb-4" />
                <div className="text-3xl font-black">SDE</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Target Role</div>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-emerald-500/50 transition-all">
                <Award className="text-emerald-500 mb-4" />
                <div className="text-3xl font-black">Azure</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Certified (AZ-900)</div>
              </div>
            </div>
          </div>

          {/* Right Side: Editorial Timeline (Education/Experience) */}
          <div className="lg:col-span-5 space-y-20">
            {/* Education Sub-section */}
            <div>
              <h4 className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-blue-500 mb-8">
                <GraduationCap size={18} /> Education
              </h4>
              <div className="space-y-10 border-l border-white/10 pl-6">
                {education.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-1 w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-[10px] font-bold text-gray-600 uppercase">{item.year}</span>
                    <h5 className="text-lg font-bold leading-tight">{item.title}</h5>
                    <p className="text-sm text-gray-500 mt-1">{item.place}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Sub-section */}
            <div>
              <h4 className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-emerald-500 mb-8">
                <Briefcase size={18} /> Experience
              </h4>
              <div className="space-y-10 border-l border-white/10 pl-6">
                {experience.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-1 w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-[10px] font-bold text-gray-600 uppercase">{item.year}</span>
                    <h5 className="text-lg font-bold leading-tight">{item.title}</h5>
                    <p className="text-sm text-gray-500 mt-1">{item.place}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Footer */}
        {/* Unique Technical Index Footer */}
<div className="mt-32 border-t border-white/10 pt-12">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
    {[
      { label: "Modern Frontend", desc: "React & Tailwind", id: "01" },
      { label: "AI-Augmented", desc: "LLMs & RAG", id: "02" },
      { label: "System Design", desc: "Scalable Logic", id: "03" },
      { label: "Agile Mindset", desc: "Fast Delivery", id: "04" }
    ].map((f, i) => (
      <motion.div 
        key={i} 
        className="group relative flex flex-col"
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Animated Index Number - Wix Artist Detail */}
        <span className="text-[10px] font-mono text-blue-600 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          // {f.id}
        </span>
        
        <div className="flex items-baseline gap-2">
          <div className="text-white font-black uppercase text-xs tracking-[0.2em] leading-none">
            {f.label}
          </div>
        </div>

        {/* Slanted Decorative Line */}
        <div className="mt-3 h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent origin-left group-hover:scale-x-110 group-hover:bg-blue-600 transition-all duration-500" />
        
        <div className="mt-2 text-gray-600 text-[9px] uppercase font-black tracking-widest opacity-70 group-hover:text-white transition-colors">
          {f.desc}
        </div>
      </motion.div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default About;