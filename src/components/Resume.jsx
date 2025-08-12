import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import confetti from "canvas-confetti";

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
useEffect(() => {
  const timeout = setTimeout(() => {
    gsap.fromTo(
      ".resume-section-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".resume-section-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.from(".resume-heading", {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: ".resume-heading",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".resume-left", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".resume-left",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".resume-right", {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: ".resume-right",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, 0);

  return () => clearTimeout(timeout);
}, []);

  const handleDownload = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FACC15', '#FFD700', '#FFFFFF', '#FFA500'], // Yellow, Gold, White, Orange
    });
  };

  return (
    <section className="bg-gray-950 text-white px-6 md:px-16 py-20 overflow-hidden relative" id="resume">
        {/* Decorative background elements for visual interest */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute w-64 h-64 bg-yellow-600 rounded-full blur-3xl opacity-20 -top-20 -left-20 animate-pulse-slow"></div>
            <div className="absolute w-80 h-80 bg-fuchsia-600 rounded-full blur-3xl opacity-15 bottom-0 right-0 animate-pulse-slow delay-1000"></div>
        </div>

      <div className="resume-section-container relative z-10"> {/* Added for overall section animation */}
        {/* Heading */}
        <h2 className="resume-heading text-5xl md:text-6xl font-extrabold text-yellow-400 mb-16 text-center relative w-fit mx-auto">
          Resume
          <div className="w-24 h-1.5 bg-yellow-400 mt-4 mx-auto rounded-full"></div>
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <div className="resume-left space-y-7"> {/* Increased space-y */}
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 leading-snug tracking-wide">
              Explore My Journey & Skills
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-md"> {/* Added max-w-md */}
              I'm a passionate Full-Stack Developer with a strong foundation in AI/ML, Web Technologies, and Federated Systems. My resume offers a comprehensive look at my projects, technical expertise, and professional experience.
            </p>

            {/* Key Skills/Highlights */}
            <div className="mt-8"> {/* Increased margin-top */}
              <h4 className="text-2xl font-semibold text-yellow-300 mb-4">Key Highlights:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-base list-none pl-0">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">★</span> AI/ML Integration: Building intelligent systems.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">★</span> Full-Stack Expertise: From frontend to backend.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">★</span> Problem Solver: Innovative solutions to complex challenges.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">★</span> Collaborative Spirit: Thriving in team environments.
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap pt-8"> {/* Increased padding-top */}
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(252,211,38,0.7)" }}
                whileTap={{ scale: 0.95 }}
                href="public\Astha_Singh_Resume.pdf" // Ensure this path is correct relative to public/
                download="Astha_Singh_Resume.pdf" // Better filename for download
                onClick={handleDownload}
                className="inline-flex items-center gap-3 text-black bg-yellow-400 hover:bg-yellow-500 transition px-7 py-3 rounded-lg text-lg font-bold shadow-lg group
                           transform active:translate-y-1" // Added active state
                aria-label="Download Astha Singh's Resume"
              >
                Download Resume
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2, // Slightly slower animation
                    ease: "easeInOut",
                  }}
                  className="text-2xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21L4.5 13.5H9V3h6v10.5h4.5L12 21zM5.121 13.5l6.364 6.364L18.879 13.5H16.5V3h-9v10.5H5.121z"/></svg>
                </motion.span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1eWj6XJ4TBZeN6h5hhfFf4b7qKvwoMAzz/view?usp=drive_link" // Replace with your actual public Google Drive link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black rounded-lg transition text-lg font-bold
                           transform active:translate-y-1" // Added active state
                aria-label="View Resume Online"
              >
                View Online
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </motion.a>
            </div>
          </div>

          {/* Right - Resume Preview */}
<motion.div
  className="resume-right flex justify-center p-4 md:p-0"
  initial={{ scale: 0.95, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ type: "spring", stiffness: 120, damping: 15 }}
>
  <img
    src="/resumee.png" // Make sure this image is in your /public folder
    alt="Resume Preview"
    loading="lazy"
    className="max-w-full max-h-[500px] md:max-h-[600px] object-contain rounded-xl"
  />
</motion.div>

        </div>
      </div>

      {/* Tailwind CSS keyframes and custom styles */}
      <style jsx>{`
        @keyframes pulse-border {
          0% { box-shadow: 0 0 0px rgba(252,211,38,0.4); }
          50% { box-shadow: 0 0 25px rgba(252,211,38,0.8), 0 0 50px rgba(252,211,38,0.4); }
          100% { box-shadow: 0 0 0px rgba(252,211,38,0.4); }
        }
        .animate-pulse-border {
          animation: pulse-border 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }

        .shadow-2xl-strong {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6),
                        0 0 30px rgba(252,211,38,0.3);
        }

        .shadow-inner-lg {
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.4);
        }

        /* Blob/Pulse animation for background elements */
        @keyframes pulse-slow {
          0% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.05); opacity: 0.25; }
          100% { transform: scale(1); opacity: 0.15; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 18s infinite ease-in-out;
        }
        .delay-1000 {
            animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}