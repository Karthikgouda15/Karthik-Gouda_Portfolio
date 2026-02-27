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
    { label: "SDE", value: "Role", icon: Zap },
    { label: "System Design", value: "Beginner", icon: Award },
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
            <p className="leading-relaxed mb-4">
  I am a <span className="text-white font-medium">Computer Science Engineering</span> student and MERN Stack developer who views code as a tool for building meaningful digital experiences. Beyond writing syntax, I focus strongly on <span className="text-white">User Experience (UX)</span>, ensuring every interaction feels intuitive and every deployment is smooth and scalable.
</p>

<p className="leading-relaxed mb-4">
  Alongside full-stack development, I am preparing for Software Development Engineer (SDE) roles by strengthening my skills in Data Structures & Algorithms, System Design, core Computer Science fundamentals, Cloud computing, and Microsoft Azure. I have hands-on experience with Docker, Kubernetes, SDLC, and Agile practices while continuously building scalable real-world applications.
</p>

<p className="leading-relaxed mb-4">
  I am also building a strong foundation in Generative AI, working with Large Language Models (LLMs), AI assistants, chatbots, AI agents, vector embeddings, vector databases, and Retrieval-Augmented Generation (RAG) using LangChain. I actively contribute to open-source projects, participate in hackathons, and focus on improving my technical depth and problem-solving skills.
</p>

<p className="leading-relaxed">
  My workflow is powered by modern tools like <span className="text-primary italic">Google Gemini</span> and <span className="text-primary italic">Vercel</span>, enabling faster development while maintaining clean architecture and high-quality engineering practices.
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
        {/* <motion.div
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
          </div> */}
          {/* Decorative background element */}
          {/* <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;



