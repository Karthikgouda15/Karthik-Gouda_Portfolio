import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, Send, CheckCircle, Globe, Code2, Phone } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual IDs from your EmailJS account
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
      }, (error) => {
          setIsSubmitting(false);
          alert("Failed to send message. Please check your EmailJS configuration.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-[#050505] text-white px-6">
      {/* Container - Dark background like your original code, No Borders */}
      <div className="max-w-7xl mx-auto bg-[#0A0A0A] rounded-[40px] p-10 md:p-16 shadow-2xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* COLUMN 1: BRAND & SOCIALS */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-500 mb-4 tracking-tighter">GET IN TOUCH</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Software Developer passionate about building high-performance logic and fluid motion.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/karthikgouda15" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/karthikgouda15/" },
                { icon: <Code2 size={20} />, href: "#" },
                { icon: <Globe size={20} />, href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5, backgroundColor: "#1A1A1A" }}
                  className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center transition-all hover:text-blue-500 shadow-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: CONTACT INFO */}
          <div className="lg:pl-10">
            <h3 className="text-sm font-mono text-gray-600 uppercase tracking-widest mb-8">Quick Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#111] rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#1a1a1a] transition-colors">
                  <Mail size={20} className="text-gray-400 group-hover:text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Email</span>
                  <a href="mailto:kartikagouda644@gmail.com" className="text-gray-300 hover:text-blue-500 transition-colors text-sm break-all">
                    kartikagouda644@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#111] rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#1a1a1a] transition-colors">
                  <Phone size={20} className="text-gray-400 group-hover:text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Phone</span>
                  <span className="text-gray-300 text-sm font-medium">+91 8296670391</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: WORKING FORM */}
          <div className="bg-[#111] p-8 rounded-[30px] shadow-inner">
            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full px-4 py-3 bg-black/40 border-none rounded-xl focus:ring-1 focus:ring-blue-500/50 text-sm transition-all text-white placeholder-gray-600"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-black/40 border-none rounded-xl focus:ring-1 focus:ring-blue-500/50 text-sm transition-all text-white placeholder-gray-600"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="3"
                className="w-full px-4 py-3 bg-black/40 border-none rounded-xl focus:ring-1 focus:ring-blue-500/50 text-sm transition-all text-white placeholder-gray-600 resize-none"
                required
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : <><Send size={16} /> Send</>}
              </motion.button>
            </form>

            {isSubmitted && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-[10px] text-green-500 font-mono tracking-widest flex items-center gap-2 justify-center">
                <CheckCircle size={14} /> SENT SUCCESSFULLY
              </motion.div>
            )}
          </div>

        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center px-4 text-[10px] font-mono tracking-[0.3em] text-gray-600 uppercase">
        <p>© 2026. KARTHIK GOUDA.</p>
        <p className="mt-2 md:mt-0">Would love to connect with you!</p>
      </div>
    </section>
  );
};

export default Contact;