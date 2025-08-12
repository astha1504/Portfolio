import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

// Import icons for common technologies
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiFirebase, SiFastapi, SiTailwindcss, SiNextdotjs } from "react-icons/si"; // Add more as needed

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef([]); // Ref to hold all project card elements for GSAP
  const projectsContainerRef = useRef(null); // Ref for the main horizontal scroll container

  const projects = [
    {
      title: "JanDarpan",
      icon: <FaReact className="text-blue-400" />, // React icon
      shortDescription: "AI-powered Grievance Redressal System.",
      description: "An AI-powered Grievance Redressal System designed to streamline public complaint resolution for government bodies. It simplifies the process for citizens to report issues and for authorities to track and resolve them efficiently, utilizing advanced AI for categorization and routing.",
      tech: ["React", "Node.js", "Firebase", "NLP"],
      techColors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      bullets: [
        "Developed full-stack web app with Firebase Auth and role-based access control for secure management, enhancing data integrity and user permissions.",
        "Integrated Natural Language Processing (NLP) for automated complaint classification, sentiment analysis, and alert generation, significantly improving response times by 30%.",
        "Built a real-time dashboard using React for administrators to monitor and manage grievances with comprehensive filtering and search capabilities.",
        "Secured top positions in national hackathons (e.g., Smart India Hackathon, IBM Call for Code), showcasing innovation and practical application in governance tech.",
        "Implemented robust data validation and error handling to ensure data quality and system reliability across all user interactions."
      ],
      github: "https://github.com/yourusername/jandarpan",
      live: "https://jandarpan.live/",
    },
    {
      title: "Fund Misuse Detection",
      icon: <FaPython className="text-yellow-500" />, // Python icon
      shortDescription: "AI dashboard for financial anomaly detection.",
      description: "An AI-powered analytics dashboard detecting anomalies and potential misuse in government fund allocation using large language models. This system helps identify suspicious patterns and provides insights for auditing and preventing financial irregularities.",
      tech: ["Python", "React", "Streamlit", "Maps API", "LLMs"],
      techColors: ["bg-yellow-600", "bg-blue-600", "bg-red-600", "bg-green-600", "bg-indigo-600"],
      bullets: [
        "Developed an advanced analytics dashboard leveraging Python and Streamlit for interactive data visualization and user engagement.",
        "Implemented Google Maps API for geo-visualizing anomaly locations, providing intuitive spatial insights for audit teams.",
        "Integrated Large Language Model (LLM)-powered anomaly detection algorithms to identify suspicious patterns in financial transactions with high accuracy.",
        "Designed and implemented real-time email alert systems for immediate notifications on critical anomalies, reducing detection lag.",
        "Reduced manual triaging time for financial irregularities by an estimated 60%, significantly boosting audit efficiency and effectiveness.",
        "Presented the project to senior government officials, receiving commendation for its innovative approach and potential impact on public finance integrity."
      ],
      github: "https://github.com/astha1504/Grievance-Tracker",
      live: "https://jandarpan-grievance-tracker.streamlit.app/",
    },
    {
      title: "Sahyog",
      icon: <SiFirebase className="text-yellow-600" />, // Firebase icon
      shortDescription: "Full-stack NGO tracker and transparency platform.",
      description: "A full-stack NGO tracker platform developed during a hackathon to provide transparency and real-time updates on charitable activities. It connects NGOs, donors, and beneficiaries, fostering trust and accountability.",
      tech: ["React", "Firebase", "Hackathon Project", "Authentication"],
      techColors: ["bg-blue-600", "bg-orange-600", "bg-purple-600", "bg-pink-600"],
      bullets: [
        "Built a robust full-stack NGO tracking platform using React for dynamic UI and Firebase for scalable backend services.",
        "Designed and implemented secure user authentication (Firebase Auth) and granular role-based access control to protect sensitive information.",
        "Integrated Firebase Realtime Database for instantaneous updates on charitable activities, enhancing transparency for all stakeholders.",
        "Developed intuitive forms and data entry interfaces for NGOs to easily update their projects, funding, and impact metrics.",
        "Secured a top-3 position in the highly competitive IDEATE Hackathon, demonstrating rapid development skills and problem-solving under pressure.",
        "Enabled seamless communication between NGOs, donors, and beneficiaries through integrated messaging features."
      ],
      github: "https://github.com/astha1504/SahyogConnect",
      live: "https://sahyatri.live/",
    },
    {
      title: "Elderly Care Assistant App",
      icon: <SiFastapi className="text-green-400" />, // FastAPI icon
      shortDescription: "Voice-interactive AI assistant for elderly care.",
      description: "An AI-powered voice-interactive assistant built using FastAPI, LangChain, and speech recognition. It supports elderly users by setting medication or appointment reminders, triggering emergency alerts, and engaging in empathetic conversation. This app combines LLMs (via LangChain), voice input/output, and custom tools for practical elderly care.",
      tech: ["FastAPI", "LangChain", "Python", "Speech Recognition", "Voice AI"],
      techColors: ["bg-green-600", "bg-blue-600", "bg-yellow-600", "bg-purple-600", "bg-cyan-600"],
      bullets: [
        "Developed a robust backend API using **FastAPI** to handle voice processing and AI model interactions efficiently.",
        "Implemented seamless **voice-to-text interaction** using the `speech_recognition` library for natural user input.",
        "Provided **text-to-speech feedback** via `pyttsx3`, ensuring clear and accessible communication for elderly users.",
        "Utilized **LangChain** to orchestrate LLMs, enabling complex conversational flows and integrating custom tools for specific elderly care tasks.",
        "Designed and implemented a reliable system for setting and managing **medication and appointment reminders**, persisted to a file for data integrity.",
        "Created an **emergency alert simulator** feature to provide critical assistance in urgent situations.",
        "Built an **empathetic companion chatbot** using LangChain agents, capable of engaging in meaningful conversations to combat loneliness.",
        "Focused on creating a user-friendly and accessible interface, prioritizing ease of use for the target elderly demographic."
      ],
      github: "https://github.com/yourusername/elderly-care-assistant",
      live: "#",
    },
    {
      title: "Portfolio Website v1",
      icon: <FaHtml5 className="text-orange-500" />, // HTML5 icon
      shortDescription: "My first personal portfolio showcasing web dev skills.",
      description: "The first iteration of my personal portfolio, showcasing my early web development skills and design aesthetic. This project laid the foundation for my understanding of front-end technologies and responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP", "Responsive Design"],
      techColors: ["bg-red-600", "bg-blue-500", "bg-yellow-500", "bg-green-500", "bg-indigo-500"],
      bullets: [
        "Designed and developed a **clean, minimalist user interface** with a strong focus on aesthetics and user experience principles.",
        "Implemented **custom scroll-triggered animations** using GSAP (GreenSock Animation Platform), adding dynamic and engaging visual elements.",
        "Ensured **full responsiveness across all devices** (desktop, tablet, mobile) for optimal viewing and accessibility, utilizing modern CSS techniques.",
        "Demonstrated foundational front-end development skills, including semantic HTML structure, modular CSS, and interactive JavaScript functionalities.",
        "Gained valuable experience in project structuring, version control (Git), and deploying a web application from scratch."
      ],
      github: "https://github.com/yourusername/portfolio-v1",
      live: "#",
    },
  ];

  useEffect(() => {
    // GSAP ScrollTrigger for project cards (initial fade-in and slide-up)
    projectsRef.current.forEach((el, index) => {
      gsap.set(el, { opacity: 0, y: 50, scale: 0.95 }); // Initial state

      gsap.to(
        el,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5, // Slower duration for initial animation
          ease: "power3.out",
          delay: index * 0.2, // Slightly increased stagger delay
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Initialize VanillaTilt for the outer flip cards
    VanillaTilt.init(document.querySelectorAll(".tilt-flip-card"), {
      max: 5, // Reduced max tilt for subtlety
      speed: 400, // Slightly slower tilt response
      glare: true,
      "max-glare": 0.15, // Reduced glare intensity
      transition: true,
      scale: 1.01, // Reduced scale on hover
    });

    // Cleanup for VanillaTilt instances and ScrollTriggers on component unmount
    return () => {
      document.querySelectorAll(".tilt-flip-card").forEach(card => {
        if (card.VanillaTilt) {
          card.VanillaTilt.destroy();
        }
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Function to scroll the projects container left or right
  const scrollProjects = (direction) => {
    if (projectsContainerRef.current) {
      const firstCard = projectsContainerRef.current.querySelector('.tilt-flip-card');
      // Approximate card width + gap (gap is 32px for gap-8)
      const scrollAmount = firstCard ? firstCard.offsetWidth + 32 : 350;
      let newScrollLeft = projectsContainerRef.current.scrollLeft;

      if (direction === 'left') {
        newScrollLeft -= scrollAmount * 2;
      } else {
        newScrollLeft += scrollAmount * 2;
      }

      gsap.to(projectsContainerRef.current, {
        scrollLeft: newScrollLeft,
        duration: 1, // Slower scroll animation
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-950 to-black text-white py-24 px-6 md:px-16 relative overflow-hidden" id="projects">
      {/* Background Gradient Blobs (subtle and moving) */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-fuchsia-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow animation-delay-2000 z-0"></div>

      <div className="text-center mb-20 relative z-10">
        <h2
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-wide"
          style={{ fontFamily: "Orbitron, Arial Black, sans-serif", textShadow: "0 0 15px rgba(255,255,255,0.2)" }}
        >
          My Creative <span className="text-yellow-500">Works</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Dive into a collection of my latest projects, where code meets creativity to solve real-world problems.
        </p>
        <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full mt-6 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto"> {/* Wrapper for arrows and scrollable content */}
        {/* Navigation Arrows */}
        <button
          onClick={() => scrollProjects('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700/90 text-white p-3 rounded-full shadow-lg z-20 transition-all duration-300 transform -translate-x-1/2 md:-translate-x-full lg:-translate-x-1/2 xl:-translate-x-1/2"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button
          onClick={() => scrollProjects('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700/90 text-white p-3 rounded-full shadow-lg z-20 transition-all duration-300 transform translate-x-1/2 md:translate-x-full lg:-translate-x-1/2 xl:-translate-x-1/2"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>

        <div
          ref={projectsContainerRef}
          className="flex gap-8 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-4 sm:px-0"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              className="tilt-flip-card min-w-[300px] sm:min-w-[320px] md:min-w-[350px] flex-shrink-0
                         h-[500px] md:h-[520px] lg:h-[550px]
                         relative rounded-2xl p-1 shadow-xl
                         transition-all duration-500 ease-in-out transform scale-100 group
                         overflow-hidden snap-center
                         [perspective:1000px] hover:shadow-[0_0_50px_rgba(250,204,21,0.5)]"
            >
              {/* Inner container for the 3D flip effect */}
              <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front of the card */}
                <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] p-7 flex flex-col justify-between items-center text-center
                                border border-gray-800/50 group-hover:border-yellow-500 z-[2]
                                animate-float-subtle shadow-2xl-custom group-hover:shadow-yellow-glow">
                  {/* Icon Section (Replaced Image) */}
                  <div className="relative w-full mb-6 flex-shrink-0 flex items-center justify-center h-56 bg-gray-700 rounded-xl text-gray-300 text-lg font-semibold
                                  border border-gray-600/50">
                    {project.icon ? (
                      <div className="text-8xl p-4 flex items-center justify-center h-full w-full">
                        {project.icon}
                      </div>
                    ) : (
                      <span className="opacity-70">Project Snapshot</span>
                    )}
                  </div>
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-yellow-300 mb-2 flex-grow-0">{project.title}</h3>
                  {/* Short Description */}
                  <p className="text-gray-400 text-md flex-grow mb-4 px-2">
                    {project.shortDescription}
                  </p>
                  {/* Call to action to flip */}
                  <p className="text-gray-500 text-sm italic">Hover to learn more!</p>
                </div>

                {/* Back of the card */}
                <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] p-7 flex flex-col text-left
                                border border-gray-800/50 group-hover:border-yellow-500 [transform:rotateY(180deg)]">
                  {/* Content for the back of the card */}
                  <h3 className="text-2xl font-bold text-yellow-300 mb-3 text-center">{project.title}</h3>

                  {/* Wrapper for description, tech, and bullets to take available space */}
                  <div className="flex flex-col flex-grow overflow-y-auto custom-scrollbar pr-2"> {/* Added flex-grow and pr-2 for scrollbar */}
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p> {/* Increased line height */}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${project.techColors[i]} text-white shadow-md`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="text-gray-300 text-sm space-y-3 list-disc list-inside pl-2"> {/* Increased space-y, added pl-2 */}
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                          <span className="flex-grow">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Added links to the back of the card */}
                  <div className="flex justify-center gap-6 w-full mt-6 flex-shrink-0"> {/* Increased mt */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 text-lg font-semibold"
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.829.091-.645.356-1.088.649-1.339-2.22-.253-4.555-1.113-4.555-4.931 0-1.093.39-1.988 1.029-2.681-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.099 2.651.64.693 1.029 1.587 1.029 2.681 0 3.829-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.33-.012 2.41-.012 2.727 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2Z" clipRule="evenodd" /></svg>
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 text-lg font-semibold"
                    >
                      Live Demo
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-4">
                    Hover (or Tap) to flip back
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS keyframes for blob and pulse animation */}
      <style>{`
        @keyframes blob-slow {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(60px, -40px) scale(1.1); }
          66% { transform: translate(-40px, 40px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob-slow { animation: blob-slow 15s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        @keyframes float-subtle {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(0.5deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(3px) rotate(-0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float-subtle {
          animation: float-subtle 8s ease-in-out infinite;
        }

        /* Custom scrollbar hiding (for Chrome/Safari) */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Custom scrollbar hiding (for Firefox) */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        /* Custom scrollbar for description/bullets on back of card */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Custom CSS for 3D flip */
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden; /* For Safari */
        }

        /* Custom Shadow and Glow */
        .shadow-2xl-custom {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), /* A darker, deeper shadow */
                      0 0 30px rgba(250, 204, 21, 0.2); /* Subtle initial glow */
        }

        .group-hover\\:shadow-yellow-glow {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), /* Slightly stronger shadow on hover */
                      0 0 40px rgba(250, 204, 21, 0.7), /* Pronounced yellow glow on hover */
                      0 0 80px rgba(250, 204, 21, 0.4); /* Wider, softer glow on hover */
          transition: box-shadow 0.3s ease-in-out; /* Smooth transition for the glow */
        }


        /* Adjust button positions for different screen sizes */
        @media (min-width: 768px) {
          .md\\:-translate-x-full {
            transform: translateX(-100%);
          }
          .md\\:translate-x-full {
            transform: translateX(100%);
          }
        }
        @media (min-width: 1024px) {
          .lg\\:-translate-x-1\\/2 {
            transform: translateX(-50%);
          }
          .lg\\:translate-x-1\\/2 {
            transform: translateX(50%);
          }
        }
        @media (min-width: 1280px) {
          .xl\\:-translate-x-1\\/2 {
            transform: translateX(-50%);
          }
          .xl\\:translate-x-1\\/2 {
            transform: translateX(50%);
          }
        }
      `}</style>
    </section>
  );
}