import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Zap } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 100,
      title: "Emotify – AI-powered Emotion Based Music Recommendation System ",
      description:
        "A smart AI-powered music ecosystem that analyzes facial emotions to deliver personalized song recommendations, integrates voice-assisted controls for seamless interaction, and enhances user experience through real-time mood detection and intelligent playlist management.",
      image:
        "https://images.unsplash.com/photo-1708164333066-dabc2dac17d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "AI Integration", "MongoDB", "Tailwind CSS","Spotify API", "Context API", "Face-api"],
      category: "featured",
      github: "https://github.com/Karthikgouda15/Emotify",
      live: "https://emootify.netlify.app",
      features: [
        "🤖 AI Face Scanning: Real-time emotion detection using face-api.js models.",
        "🎧 Seamless integration with Spotify API + Local MP3 fallback.",
        "🎙️ Voice Assistant: Hands-free control to navigate the app.",
        "🔐 Secure Auth: Full user registration/login system with OTP verification.",
      ],
    },
    {
      id: 101,
      title: "AirBnb – Travel Diaries & Rental Management Platform",
      description:
        "A full-stack Airbnb-style accommodation platform for discovering, listing, and managing rental properties with secure authentication and a responsive user experience.",
      image:
        "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["MongoDB", "Express.js", "Node.js", "RESTful API", "Tailwind CSS","MVC Architecture",  "Cloudinary"],
      category: "featured",
      github: "https://github.com/Karthikgouda15/AirBnb",
      live: "#",
      features: [
        "Advanced Property Search & Filters – Search by location, price range, amenities, ratings, and availability with real-time filtering.",
        "Booking & Availability Management – Interactive for date selection, instant booking, reservation tracking, and booking history.",
        "User Profiles & Reviews System – Host and guest profiles with ratings, reviews, wishlist (favorites), and secure authentication.",
      ],
    },
    // {
    //   id: 6,
    //   title: "QuickNotes",
    //   description:
    //     "A lightning-fast note-taking application designed for efficiency and ease of use.",
    //   image:
    //     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    //   technologies: ["React", "Local Storage", "Search Algorithms"],
    //   category: "mini",
    //   github: "https://github.com/KarthikGouda/Notes-saver",
    //   live: "https://project-2-five-neon.vercel.app/",
    //   features: ["Search & Filter", "Update Pastes", "Copy Pastes"],
    // },
    {
      id: 1,
      title: "Zerodha Clone",
      description:
        "Online Stock Trading Platform Development.",
      image:
        "https://assets.thehansindia.com/h-upload/2025/12/06/1607079-zerodha.webp",
      technologies: ["JavaScript", "CSS", "LocalStorage"],
      category: "mini",
      github: "https://github.com/Karthikgouda15/Zerodha-.",
      live: "https://zerodha-frontend01.netlify.app/",
      features: ["Cart logic", "Order history", "Search & filter"],
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured Apps" },
    { id: "mini", label: "Mini Tools" },
  ];

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-darker overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing innovative web solutions and AI-powered applications.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-dark/40 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                layout
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent z-10 opactiy-60" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-darker/80 backdrop-blur-md rounded-full text-white hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-darker/80 backdrop-blur-md rounded-full text-white hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.id === 100 && (
                      <Zap
                        className="text-yellow-400 fill-yellow-400"
                        size={24}
                      />
                    )}
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 border-t border-white/5 pt-4">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
