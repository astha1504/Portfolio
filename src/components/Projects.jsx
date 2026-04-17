import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ onViewAll }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const viewAllBtnRef = useRef(null);
  const bgLayerRef = useRef(null);
  const particlesRef = useRef(null);

  // Handle View All Projects click
  const handleViewAllProjects = () => {
    if (onViewAll && typeof onViewAll === 'function') {
      onViewAll();
    } else {
      // Fallback navigation if onViewAll is not provided
      console.log('View All Projects clicked - implement your navigation logic here');
      // Example: window.location.href = '/projects';
      // Or use React Router: navigate('/projects');
    }
  };

  useGSAP(() => {
    // Main timeline for entrance animations
    // Animations without ScrollTrigger - triggers once on mount
    gsap.fromTo(headingRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    gsap.fromTo(".heading-line", 
      { width: 0 },
      { width: 80, duration: 0.8, delay: 0.3, ease: "power2.inOut" }
    );

    gsap.fromTo(".section-subtitle", 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(".cta-container", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: "power2.out" }
    );

    // RESTORE BACKGROUND ANIMATIONS (Orbs, Rings, Particles)
    gsap.to(".bg-layer-1", {
      y: "20%",
      x: "5%",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    
    gsap.to(".bg-layer-2", {
      y: "-15%",
      x: "8%",
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    
    gsap.to(".bg-layer-3", {
      y: "10%",
      x: "-12%",
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".bg-layer-4", {
      y: "-8%",
      x: "3%",
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        y: gsap.utils.random(-60, 60),
        x: gsap.utils.random(-40, 40),
        duration: gsap.utils.random(4, 10),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.15,
      });
    });

    gsap.to(".ring-rotate", {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".ring-rotate-reverse", {
      rotation: -360,
      duration: 25,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".ring-slow", {
      rotation: 360,
      duration: 45,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".shape", {
      y: "random(-50, 50)",
      rotation: "random(-360, 360)",
      duration: "random(10, 20)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animated gradient shift
    gsap.to(".animated-bg", {
      backgroundPosition: "100% 100%",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    // Hover animations for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to('.cta-glow', {
          scale: 1.2,
          opacity: 0.8,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to('.cta-glow', {
          scale: 1,
          opacity: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }

    // Continuous floating animation for orbs
    gsap.to(".orb-1", {
      y: 40,
      x: 30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".orb-2", {
      y: -35,
      x: -25,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".orb-3", {
      y: 25,
      x: -20,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    ScrollTrigger.refresh();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="projects-section" id="projects">
      {/* Animated Background Layers */}
      <div className="animated-bg" ref={bgLayerRef}>
        {/* Layer 1: Gradient Orbs */}
        <div className="bg-layer bg-layer-1">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
        </div>
        
        {/* Layer 2: Geometric Shapes */}
        <div className="bg-layer bg-layer-2">
          <div className="shape shape-hexagon"></div>
          <div className="shape shape-triangle"></div>
          <div className="shape shape-circle"></div>
          <div className="shape shape-square"></div>
          <div className="shape shape-diamond"></div>
        </div>
        
        {/* Layer 3: Rotating Rings */}
        <div className="bg-layer bg-layer-3">
          <div className="ring ring-rotate"></div>
          <div className="ring ring-rotate-reverse"></div>
          <div className="ring ring-slow"></div>
        </div>
        
        {/* Layer 4: Floating Particles */}
        <div className="bg-layer bg-layer-4" ref={particlesRef}>
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}></div>
          ))}
        </div>
        
        {/* Layer 5: Animated Grid */}
        <div className="bg-layer bg-layer-5">
          <div className="grid-overlay"></div>
        </div>

        {/* Layer 6: Light Rays */}
        <div className="bg-layer bg-layer-6">
          <div className="ray ray-1"></div>
          <div className="ray ray-2"></div>
          <div className="ray ray-3"></div>
        </div>
      </div>

      <div className="projects-wrapper-container">
        {/* Header Section with Single View All Button */}
        <div className="projects-header">
          <div ref={headingRef} className="heading-wrapper">
            <h2 className="section-title">
              My Creative <span className="title-accent">Works</span>
            </h2>
            <div className="heading-line"></div>
            <p className="section-subtitle">
              Explore a curated collection of my innovative projects where cutting-edge technology meets creative problem-solving.
            </p>
          </div>

        </div>

        {/* Center Call to Action Section - Single CTA */}
        <div className="cta-container">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <div className="cta-icon">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 6v12M16 6v12"></path>
              </svg>
            </div>
            <h3 className="cta-title">Ready to Explore My Work?</h3>
            <p className="cta-description">
              Discover the complete collection of my projects, from AI-powered solutions to full-stack applications and innovative hackathon winners.
            </p>
            <button onClick={handleViewAllProjects} className="cta-button">
              <span>Browse All Projects</span>
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}