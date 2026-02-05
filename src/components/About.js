// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Code, Brain, Target, Users } from 'lucide-react';

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const features = [
//     {
//       icon: Code,
//       title: "Frontend Development",
//       description: "Specialized in React, JavaScript, and modern web technologies"
//     },
//     {
//       icon: Brain,
//       title: "AI Integration",
//       description: "Experienced with ChatGPT, Cursor, and AI-powered development tools"
//     },
//     {
//       icon: Target,
//       title: "Problem Solving",
//       description: "Currently mastering Data Structures & Algorithms for enhanced skills"
//     },
//     {
//       icon: Users,
//       title: "Team Collaboration",
//       description: "Strong communication skills and ability to work in agile environments"
//     }
//   ];

//   return (
//     <section id="about" className="py-24 bg-darker/50 text-gray-100">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           ref={ref}
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">About Me</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             A passionate frontend developer with a love for creating exceptional user experiences
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             className="space-y-6"
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <h3 className="text-2xl font-bold text-white">Passionate Frontend Developer</h3>
//             <p className="text-gray-400 leading-relaxed">
//               I am a dedicated frontend developer with a strong foundation in HTML, CSS, JavaScript, and React. I hold a BCA degree and have hands-on MERN stack experience.
//               My journey in web development has been driven by a passion for creating beautiful, functional,
//               and user-centric applications.
//             </p>
//             <p className="text-gray-400 leading-relaxed">
//               I have hands-on experience with the MERN stack for full-stack development, and I frequently deploy projects using Netlify and Vercel.
//             </p>
//             <p className="text-gray-400 leading-relaxed">
//               Currently, I'm expanding my expertise by studying Data Structures and Algorithms to enhance
//               my problem-solving capabilities and become a more well-rounded developer. This knowledge
//               helps me write more efficient code and tackle complex challenges with confidence.
//             </p>
//             <p className="text-gray-400 leading-relaxed">
//               I'm also deeply interested in AI integration and modern development tools. I actively use
//               ChatGPT and Cursor to streamline my development process, improve code quality, and stay
//               ahead of industry trends.
//             </p>

//             <div className="grid grid-cols-2 gap-6 pt-6">
//               <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
//                 <span className="block text-3xl font-bold text-primary mb-1">2+</span>
//                 <span className="text-sm text-gray-400">Years Experience</span>
//               </div>
//               <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
//                 <span className="block text-3xl font-bold text-primary mb-1">10+</span>
//                 <span className="text-sm text-gray-400">Projects Completed</span>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-dark border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//               >
//                 <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
//                   <feature.icon size={24} />
//                 </div>
//                 <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
//                 <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         <motion.div
//           className="mt-20 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8, duration: 0.8 }}
//         >
//           <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
//           <p className="text-gray-400 mb-8 max-w-xl mx-auto">
//             I'm always excited to take on new challenges and collaborate on innovative projects.
//             Let's work together to bring your ideas to life!
//           </p>
//           <motion.a
//             href="#contact"
//             className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Let's Connect
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About; 

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Code2, Cpu, Rocket, Users } from 'lucide-react';

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const highlights = [
//     {
//       icon: Code2,
//       title: "Full Stack Engineering",
//       description:
//         "Building scalable web applications using MERN stack with clean architecture and performance-focused design."
//     },
//     {
//       icon: Cpu,
//       title: "AI & Modern Development",
//       description:
//         "Integrating AI tools and automation workflows to enhance productivity and build intelligent applications."
//     },
//     {
//       icon: Rocket,
//       title: "Problem Solving Mindset",
//       description:
//         "Strengthening Data Structures, Algorithms, and system thinking to solve real-world engineering challenges."
//     },
//     {
//       icon: Users,
//       title: "Collaborative Development",
//       description:
//         "Experience working in team environments using Git, agile workflows, and modern development practices."
//     }
//   ];

//   return (
//     <section id="about" className="py-24 bg-darker/50 text-gray-100">
//       <div className="container mx-auto px-4 md:px-6">

//         {/* Section Title */}
//         <motion.div
//           ref={ref}
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//         >
//           <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
//             About Me
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             Software developer focused on building scalable products, solving complex problems,
//             and delivering production-ready applications.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* Left Content */}
//           <motion.div
//             className="space-y-6"
//             initial={{ opacity: 0, x: -40 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.2, duration: 0.7 }}
//           >
//             <h3 className="text-2xl font-bold text-white">
//               Building Modern Web Experiences with Engineering Precision
//             </h3>

//             <p className="text-gray-400 leading-relaxed">
//               I am a Computer Science student and full stack developer specializing in the MERN stack.
//               My focus is on creating scalable, maintainable, and user-focused applications with
//               modern UI and strong backend architecture.
//             </p>

//             <p className="text-gray-400 leading-relaxed">
//               I enjoy working on real-world projects that combine performance, usability,
//               and clean design principles. From frontend interfaces to backend APIs,
//               I aim to build systems that are reliable and production-ready.
//             </p>

//             <p className="text-gray-400 leading-relaxed">
//               Currently, I am strengthening my foundation in Data Structures, Algorithms,
//               System Design, and Cloud technologies while exploring AI-powered development
//               workflows to stay aligned with modern engineering practices.
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-6 pt-6">
//               <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
//                 <span className="block text-3xl font-bold text-primary mb-1">
//                   MERN
//                 </span>
//                 <span className="text-sm text-gray-400">
//                   Core Tech Stack
//                 </span>
//               </div>
//               <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
//                 <span className="block text-3xl font-bold text-primary mb-1">
//                   SDE
//                 </span>
//                 <span className="text-sm text-gray-400">
//                   Career Focus
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Cards */}
//           <motion.div
//             className="grid md:grid-cols-2 gap-6"
//             initial={{ opacity: 0, x: 40 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.3, duration: 0.7 }}
//           >
//             {highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 bg-dark border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.5 + index * 0.1 }}
//                 whileHover={{ y: -6, scale: 1.03 }}
//               >
//                 <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
//                   <item.icon size={24} />
//                 </div>

//                 <h4 className="text-lg font-bold text-white mb-2">
//                   {item.title}
//                 </h4>

//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* CTA */}
//         <motion.div
//           className="mt-20 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.7 }}
//         >
//           <h3 className="text-2xl font-bold text-white mb-4">
//             Let’s Build Something Meaningful
//           </h3>
//           <p className="text-gray-400 mb-8 max-w-xl mx-auto">
//             Open to internships, collaborations, and engineering opportunities
//             where I can contribute, learn, and grow as a developer.
//           </p>

//           <motion.a
//             href="#contact"
//             className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Connect With Me
//           </motion.a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default About;
// ..........................................


// import React from "react";
// import { motion } from "framer-motion";
// import { Code2, BrainCircuit, Rocket, Users } from "lucide-react";

// const About = () => {

//   const highlights = [
//     {
//       icon: Code2,
//       title: "Full Stack Development",
//       desc: "Building scalable MERN stack applications with clean architecture and modern UI."
//     },
//     {
//       icon: BrainCircuit,
//       title: "AI + Smart Development",
//       desc: "Integrating AI tools and automation to create intelligent web experiences."
//     },
//     {
//       icon: Rocket,
//       title: "SDE Preparation",
//       desc: "Strengthening Data Structures, Algorithms and system thinking for real-world engineering."
//     },
//     {
//       icon: Users,
//       title: "Collaboration & Growth",
//       desc: "Focused on teamwork, continuous learning and building impactful solutions."
//     }
//   ];

//   return (
//     <section id="about" className="py-24 px-6 text-white">
      
//       {/* Title */}
//       <motion.h2
//         initial={{ opacity:0, y:40 }}
//         whileInView={{ opacity:1, y:0 }}
//         transition={{ duration:0.6 }}
//         className="text-4xl md:text-5xl font-bold text-center mb-6"
//       >
//         About Me
//       </motion.h2>

//       {/* Personal Intro */}
//       <motion.p
//         initial={{ opacity:0 }}
//         whileInView={{ opacity:1 }}
//         transition={{ delay:0.2 }}
//         className="max-w-3xl mx-auto text-center text-gray-400 leading-relaxed mb-14"
//       >
//         I'm Karthik Gouda, a passionate Software Developer and MERN Stack Engineer
//         focused on building scalable, AI-powered web applications. I enjoy solving
//         complex problems, designing modern user interfaces, and continuously improving
//         my engineering skills through Data Structures, System Design, and real-world projects.
//       </motion.p>

//       {/* Highlight Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {highlights.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity:0, y:40 }}
//             whileInView={{ opacity:1, y:0 }}
//             transition={{ delay:index * 0.15 }}
//             whileHover={{ scale:1.05 }}
//             className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all backdrop-blur-sm"
//           >
//             <item.icon size={32} className="mb-4 text-primary" />
//             <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//             <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Stats Section */}
//       <motion.div
//         initial={{ opacity:0, y:40 }}
//         whileInView={{ opacity:1, y:0 }}
//         transition={{ delay:0.5 }}
//         className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
//       >
//         <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//           <h4 className="text-3xl font-bold text-primary">10+</h4>
//           <p className="text-gray-400 text-sm">Projects Built</p>
//         </div>
//         <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//           <h4 className="text-3xl font-bold text-primary">2+</h4>
//           <p className="text-gray-400 text-sm">Years Coding</p>
//         </div>
//         <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//           <h4 className="text-3xl font-bold text-primary">MERN</h4>
//           <p className="text-gray-400 text-sm">Main Stack</p>
//         </div>
//         <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//           <h4 className="text-3xl font-bold text-primary">AI</h4>
//           <p className="text-gray-400 text-sm">Focused Dev</p>
//         </div>
//       </motion.div>

//     </section>
//   );
// };

// export default About;

////////////////////////////////////////// Google Gemini /////////////////////////////////////////////
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "Years Experience", value: "2+", icon: Zap },
    { label: "Projects Completed", value: "10+", icon: Award },
  ];

  const features = [
    {
      icon: Code,
      title: "Modern Frontend",
      description: "Crafting pixel-perfect UIs with React and Tailwind CSS."
    },
    {
      icon: Brain,
      title: "AI-Augmented",
      description: "Leveraging Cursor & LLMs to accelerate delivery cycles."
    },
    {
      icon: Target,
      title: "Algorithmic Logic",
      description: "Mastering DSA to build scalable and efficient solutions."
    },
    {
      icon: Users,
      title: "Agile Mindset",
      description: "Productive collaboration in fast-paced team environments."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-gray-100 overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        
        {/* Header Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Discovery</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Bridging Design <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              & Performance.
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Narrative Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="leading-relaxed">
              I am a <span className="text-white font-medium">BCA Graduate</span> and MERN Stack specialist who views code as a tool for storytelling. Beyond just writing syntax, I focus on the <span className="text-white">User Experience (UX)</span>—ensuring every interaction is intuitive and every deployment is seamless.
            </p>
            <p>
              My workflow is powered by modern tools like <span className="text-primary italic">Cursor</span> and <span className="text-primary italic">Vercel</span>, allowing me to focus on high-level architecture while maintaining a rapid development pace.
            </p>

            {/* Stats Bento Style */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <stat.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-primary/40 transition-all group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <feature.icon className="text-gray-500 group-hover:text-primary transition-colors mb-4" size={28} />
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-snug">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 p-12 rounded-[2rem] bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 border border-white/5 text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's build the future of the web.</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Currently open to freelance opportunities and full-time frontend roles.</p>
            <a
              href="#contact"
              className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105 inline-block"
            >
              Start a Conversation
            </a>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;


// // .........................................GGemini.....................................//
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ArrowUpRight } from 'lucide-react';

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const expertise = [
//     { title: "Frontend", tags: ["React", "Next.js", "Tailwind"] },
//     { title: "Backend", tags: ["Node.js", "MongoDB", "Express"] },
//     { title: "Tools", tags: ["Cursor AI", "Figma", "Vercel"] },
//   ];

//   return (
//     <section id="about" className="py-24 bg-[#0a0a0a] text-white" ref={ref}>
//       <div className="container mx-auto px-6 md:px-12">
        
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           className="mb-16"
//         >
//           <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase underline underline-offset-8">
//             01. Background
//           </span>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
//           {/* Main Bio - Clean Typography */}
//           <div className="lg:col-span-7">
//             <motion.h3 
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.2 }}
//               className="text-3xl md:text-4xl font-medium leading-tight mb-8"
//             >
//               Building digital products with a focus on <span className="text-gray-500 italic">simplicity</span> and <span className="text-gray-500 italic">technical excellence</span>.
//             </motion.h3>
            
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.4 }}
//               className="space-y-6 text-gray-500 text-lg leading-relaxed"
//             >
//               <p>
//                 I am a Software Developer and BCA graduate specializing in the MERN stack. I believe that great software isn't just about code—it's about creating intuitive experiences that solve real human problems.
//               </p>
//               <p>
//                 Currently, I am refining my problem-solving skills through Data Structures and Algorithms, ensuring that every application I build is as efficient as it is beautiful.
//               </p>
//             </motion.div>

//             {/* Clean Stats Line */}
//             <div className="flex gap-12 mt-12 border-t border-white/5 pt-12">
//               <div>
//                 <div className="text-3xl font-bold">2+</div>
//                 <div className="text-xs uppercase tracking-widest text-gray-600 mt-1">Years Exp</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold">10+</div>
//                 <div className="text-xs uppercase tracking-widest text-gray-600 mt-1">Projects</div>
//               </div>
//             </div>
//           </div>

//           {/* Side Capabilities List */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.5 }}
//             className="lg:col-span-5 space-y-10"
//           >
//             {expertise.map((item, idx) => (
//               <div key={idx} className="group cursor-default">
//                 <h4 className="text-sm font-mono text-blue-500 mb-4 flex items-center gap-2">
//                   <ArrowUpRight size={14} /> {item.title}
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {item.tags.map((tag, i) => (
//                     <span 
//                       key={i} 
//                       className="px-3 py-1 text-sm border border-white/10 rounded-full text-gray-400 group-hover:border-white/30 transition-colors"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Minimal CTA */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.6 }}
//           className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
//         >
//           <p className="text-gray-500 italic">Ready to start your next project?</p>
//           <a 
//             href="#contact" 
//             className="text-white font-bold text-lg hover:text-blue-500 transition-colors underline underline-offset-8"
//           >
//             Let's collaborate
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;