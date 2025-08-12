import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import icons from react-icons (Font Awesome)
import { FaCode, FaLaptopCode, FaBrain, FaTools } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);
  const headingRef = useRef(null); // Ref for the main heading
  const subtitleRef = useRef(null); // Ref for the subtitle paragraph

  const skills = [
    {
      title: "Languages",
      icon: FaCode,
      items: ["Python", "JavaScript", "C++", "Java", "C"],
      color: "text-blue-400",
    },
    {
      title: "Frameworks & Libraries",
      icon: FaLaptopCode,
      items: ["React.js", "Node.js (Express)", "Flask", "Streamlit", "Next.js"],
      color: "text-green-400",
    },
    {
      title: "AI/ML & Data",
      icon: FaBrain,
      items: ["TensorFlow", "PyTorch", "OpenCV", "NLP", "Scikit-learn", "Pandas"],
      color: "text-purple-400",
    },
    {
      title: "Tools & Platforms",
      icon: FaTools,
      items: ["Git/GitHub", "Firebase", "Google CoLab", "VS Code", "Jupyter"],
      color: "text-red-400",
    },
  ];

  useEffect(() => {
    // Ensure elements are initially hidden by GSAP to control their animation
    gsap.set(headingRef.current, { opacity: 0, y: -30 });
    gsap.set(subtitleRef.current, { opacity: 0, y: -30 });
    cardRefs.current.forEach(card => {
      gsap.set(card, { opacity: 0, y: 60, scale: 0.95 });
    });

    // Main section entrance animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // When the top of the section hits 75% from the top of the viewport
        toggleActions: "play none none none", // Play animation once
      },
    });

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5") // Overlap with heading animation
    .to(cardRefs.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.15, // Stagger each card's animation
    }, "-=0.4"); // Overlap with subtitle animation


    // No custom GSAP hover logic needed for the flip, as Tailwind CSS handles it
    // The previous GSAP hover event listeners are removed.

    return () => {
      // Clean up GSAP animations on component unmount
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers created in this effect
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <section ref={sectionRef} className="relative min-h-screen px-6 py-32 bg-gradient-to-br from-gray-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.08%22 fill-rule=%22evenodd%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%223%22/%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%223%22/%3E%3Ccircle cx=%2217%22 cy=%2217%22 r=%223%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-500 opacity-15 rounded-full blur-[100px] animate-blob-rotate z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] bg-cyan-500 opacity-15 rounded-full blur-[90px] animate-blob-rotate-reverse animation-delay-3000 z-0"></div>

      <div className="text-center mb-16 relative z-10"> {/* Added relative z-10 to this container */}
        <h2 ref={headingRef} className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-wide text-white">
          My <span className="text-yellow-400">Skills</span> & Expertise
        </h2>
        <p ref={subtitleRef} className="text-gray-400 max-w-2xl mx-auto text-lg">
          A comprehensive look at the technologies and tools I wield to build impactful solutions.
        </p>
        <div className="w-28 h-1.5 bg-yellow-500 mx-auto rounded-full mt-6 animate-pulse-slow"></div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10"> {/* Added relative z-10 to this container */}
        {skills.map((skill, i) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="relative group rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] p-1 shadow-xl transition-all duration-500 ease-in-out hover:shadow-[0_0_50px_rgba(250,204,21,0.5)] cursor-pointer
                           [perspective:1000px] transform-gpu" // Enable 3D perspective
            >
              {/* Inner container for the flip effect */}
              <div className="relative w-full h-[420px] transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front of the card */}
                <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] p-10 flex flex-col items-center justify-center text-center border border-transparent group-hover:border-yellow-400">
                  <IconComponent className={`text-6xl ${skill.color} mb-4 transition-transform duration-300 ease-in-out`} />
                  <h3 className="text-3xl font-bold text-white mb-2 transition-colors duration-300 ease-in-out">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2"> {/* Changed to gray-400, removed opacity-80 */}
                    Hover to see details
                  </p>
                </div>

                {/* Back of the card */}
                <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] p-6 flex flex-col justify-center text-left border border-transparent group-hover:border-yellow-400 [transform:rotateY(180deg)]">
                  <h3 className={`text-3xl font-bold mb-4 text-white text-center ${skill.color}`}>
                    {skill.title}
                  </h3>
                  <ul className="text-gray-300 text-lg space-y-2 w-full">
                    {skill.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tailwind CSS keyframes for blob and pulse animation */}
      <style jsx>{`
        @keyframes blob-rotate {
          0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          33% { transform: translate(30px, -50px) rotate(120deg) scale(1.1); }
          66% { transform: translate(-20px, 20px) rotate(240deg) scale(0.9); }
          100% { transform: translate(0px, 0px) rotate(360deg) scale(1); }
        }
        @keyframes blob-rotate-reverse {
          0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          33% { transform: translate(-30px, 50px) rotate(-120deg) scale(1.1); }
          66% { transform: translate(20px, -20px) rotate(-240deg) scale(0.9); }
          100% { transform: translate(0px, 0px) rotate(-360deg) scale(1); }
        }
        .animate-blob-rotate { animation: blob-rotate 10s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9); }
        .animate-blob-rotate-reverse { animation: blob-rotate-reverse 10s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9); }
        .animation-delay-3000 { animation-delay: 3s; }
        .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        /* Custom CSS for 3D flip */
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden; /* For Safari */
        }
      `}</style>
    </section>
  );
}