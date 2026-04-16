import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      "#about-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about-section",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      "#about-photo-column",
      { opacity: 0, x: -100, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about-section",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      "#about-text-column > *",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about-section",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      headingRef.current.children,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      "#about-socials .group",
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#about-text-column",
          start: "top 70%",
        },
      }
    );
  }, []);

  const heading = "About Me";

  return (
    <section
      id="about-section"
      className="bg-gray-950 text-white min-h-screen flex items-center justify-center py-20 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto bg-gray-900 bg-opacity-80 p-10 rounded-2xl shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile + ring */}
        <div id="about-photo-column" className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full border-4 border-yellow-500 shadow-xl overflow-hidden group cursor-pointer">
            <img
              src="/public/mee.png"
              alt="Astha Singh"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-full"
              loading="lazy"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow pointer-events-none">
            <div className="w-[140%] h-[140%] absolute border border-dashed border-yellow-400 rounded-full rotate-12 flex justify-center items-center">
              <FaReact className="text-blue-400 text-xl absolute top-0" />
              <FaNodeJs className="text-green-500 text-xl absolute right-0" />
              <FaHtml5 className="text-orange-500 text-xl absolute bottom-0" />
              <FaCss3Alt className="text-blue-500 text-xl absolute left-0" />
              <FaJs className="text-yellow-400 text-xl absolute top-1/2 left-1/4" />
              <FaGitAlt className="text-red-500 text-xl absolute top-1/2 right-1/4" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div id="about-text-column" className="flex-grow text-center md:text-left">
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 mb-6 leading-tight flex flex-wrap justify-center md:justify-start"
            style={{ fontFamily: "Orbitron, Arial Black, sans-serif" }}
          >
            {heading.split("").map((char, idx) => (
              <span key={idx} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            I'm <span className="font-bold text-yellow-300">Astha Singh</span>, a B.Tech Computer Science (AIML) student driven by a deep passion for Full-Stack Development and AI. My journey revolves around blending intelligent technologies with creative, user-centered web solutions.
          </p>

          <div className="text-left text-gray-300 space-y-3 mb-8">
            {[
              "Skilled in responsive web development, I build dynamic UIs and performant apps using React, Tailwind CSS, Node.js, and Firebase, ensuring seamless UX across devices.",
              "I love working with animation libraries like GSAP and Framer Motion to create smooth, interactive experiences that delight users.",
              "In AI, I focus on NLP, predictive modeling, and analytics – integrating ML tools to bring smart features to web platforms.",
              "Featured projects like JanDarpan and Fund Misuse Detection showcase my ability to tackle real-world challenges with innovative solutions.",
              "Always curious and evolving, I'm on a journey of constant learning – pushing boundaries and collaborating to build tech that matters.",
            ].map((text, i) => (
              <p key={i} className="flex items-start text-md md:text-lg">
                <span className="text-yellow-400 mr-3 text-2xl">•</span> {text}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-lg hover:shadow-yellow-400 hover:ring-4 hover:ring-yellow-300"
            >
              Connect With Me
            </a>
          </div>

          {/* Social Links */}
          <div id="about-socials" className="mt-6 flex justify-center md:justify-start gap-6 text-2xl">
            {[
              {
                href: "https://github.com/astha1504",
                icon: <FaGithub />,
                label: "GitHub",
                color: "text-gray-300 hover:text-white",
              },
              {
                href: "https://www.linkedin.com/in/astha-singh-8b6a4a291/",
                icon: <FaLinkedin />,
                label: "LinkedIn",
                color: "text-blue-400 hover:text-blue-500",
              },
              {
                href: "https://leetcode.com/asthasingh",
                icon: <SiLeetcode />,
                label: "LeetCode",
                color: "text-yellow-400 hover:text-yellow-500",
              },
              {
                href: "https://auth.geeksforgeeks.org/user/asthasingh/practice/",
                icon: <SiGeeksforgeeks />,
                label: "GFG",
                color: "text-green-500 hover:text-green-400",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative ${item.color} transition duration-300 transform hover:scale-110`}
              >
                {item.icon}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition-opacity duration-300 pointer-events-none z-10">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CSS blob + spin keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
