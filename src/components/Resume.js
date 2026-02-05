import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

const Resume = () => {
  // Your Google Drive Link
  const resumeLink = "https://drive.google.com/file/d/1HtD1uV1B2RPP7-sVAV5pN_wslsfC5_2S/view?usp=sharing"; 

  return (
    <section id="resume" className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Documents</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Curriculum Vitae</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-xs text-sm md:text-right leading-relaxed"
          >
            My professional journey, technical stack, and academic background condensed into a single page.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group w-full max-w-2xl"
          >
            {/* Background Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            {/* The Main Card */}
            <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-10">
                
                {/* File Icon Visual */}
                <div className="relative">
                  <div className="w-32 h-40 bg-white/5 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <FileText size={48} className="text-gray-600 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-lg shadow-xl">
                    <Sparkles size={16} className="text-white" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Karthik_Gouda_Resume.pdf</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-500 font-mono mb-8">
                    <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> Verified Source</span>
                    <span>• Google Drive</span>
                    <span>• Updated Feb 2026</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a 
                      href={resumeLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all active:scale-95 shadow-lg"
                    >
                      <Eye size={18} /> View Resume
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Summary Bar */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/5">
                {[
                  { label: "SDE", val: "Role" },
                  { label: "MERN", val: "Stack" },
                  { label: "DSA", val: "Expertise" },
                  { label: "System Design", val: "Beginner" }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-white font-bold">{item.label}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-widest">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* LinkedIn Quick Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://linkedin.com/in/karthikgouda15" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm"
          >
            Visit LinkedIn Profile for full experience <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;