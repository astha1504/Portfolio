import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ChatLauncher from "./components/chatbot/ChatLauncher";
import Contact from "./components/Contact";
import Achievements from "./components/achievements";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjects from "./components/All-projects";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showContent, setShowContent] = useState(false);
  const textRef = useRef(null);

  // 🔥 Loader Animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  // 🔥 Main Animations
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.5,
      x: "-50%",
      bottom: "-15%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      y: -30,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.8,
    });

    gsap.to(".text", {
      y: 20,
      duration: 3.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2.2,
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main .text", { x: `${xMove * 0.4}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 1.7 });
    });
  }, [showContent]);

  return (
    <>
      {/* 🔥 Loader */}
      <div className="svg fixed top-0 left-0 z-[100] w-full h-screen bg-black flex items-center justify-center">
        <svg viewBox="0 0 800 600">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  AS
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/bg.png"
            width="100%"
            height="100%"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* Chatbot */}
      {showContent && <ChatLauncher />}

      {/* 🔥 ROUTING STARTS HERE */}
      {showContent && (
        <Router>
          <Routes>

            {/* 🏠 HOME PAGE */}
            <Route
              path="/"
              element={
                <div className="main w-full rotate-[-10deg] scale-[1.7]">
                  
                  {/* Landing */}
                  <div className="landing relative w-full h-screen bg-black overflow-hidden">
                    <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
                      <h3 className="text-4xl text-white">Astha Singh</h3>
                    </div>

                    <div className="imagesdiv w-full h-screen relative">
                      <img className="sky absolute w-full h-full object-cover" src="/bg.png" />
                      <img className="bg absolute w-full h-full object-cover" src="/bg.png" />

                       <div ref={textRef} className="text-container absolute top-20 left-1/2 -translate-x-1/2 z-[20] text-[6rem] text-white pointer-events-none">
                         <span className="typing-text"></span>
                         <span className="cursor">|</span>
                       </div>

                      <img
                        className="character absolute bottom-[-120%] left-1/2 -translate-x-1/2"
                        src="/asthaa.png"
                      />
                    </div>
                  </div>

                  {/* Sections */}
                  <div className="sections bg-black text-white">
                    <About />
                    <Skills />
                    <Achievements />
                    <Projects />
                    <Resume />
                    <Contact />
                  </div>
                </div>
              }
            />

            {/* 📄 ALL PROJECTS PAGE */}
            <Route path="/all-projects" element={<AllProjects />} />

          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;