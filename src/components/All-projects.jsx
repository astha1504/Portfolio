import React, { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaBrain, FaChartLine, FaGlobe, FaArrowLeft, FaEye, FaCheckCircle, FaClock, FaCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./All-projects.css";

// Placeholder SVG for missing images - generates a colored gradient with text
const generatePlaceholder = (title, category) => {
  const colors = {
    ai: ['#a855f7', '#7c3aed'],
    ml: ['#3b82f6', '#2563eb'],
    mern: ['#22c55e', '#16a34a']
  };
  const [color1, color2] = colors[category] || ['#6b7280', '#4b5563'];
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='${color1.replace('#', '%23')}'/%3E%3Cstop offset='100%25' stop-color='${color2.replace('#', '%23')}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3Ctext x='200' y='150' font-family='Inter, sans-serif' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle' opacity='0.9'%3E${encodeURIComponent(title)}%3C/text%3E%3C/svg%3E`;
};

export default function AllProjects({ goBack }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [imageErrors, setImageErrors] = useState({});
  const cardRefs = useRef({});
  const observerRef = useRef(null);
  const hasAnimated = useRef({});

  // Projects data - now with category info for placeholders
  const projects = useMemo(() => ({
    ai: [
      {
        id: 1,
        title: "VeriCreate",
        category: "ai",
        shortDesc: "AI + Blockchain content verification platform",
        description: "VeriCreate is a full-stack AI platform for generating and verifying digital content authenticity using AI models and cryptographic hashing. It enables AI text/image generation, SHA-256 based verification, and tracks content integrity with a modern dashboard.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Solidity", "Web3.js", "OpenAI API"],
        github: "https://github.com/astha1504/VeriCreate",
        live: "https://kode-kalesh-2025.vercel.app/",
        thumbnail: "/verithumb.png",
        screenshots: [
          "/veri1.png",
          "/veri2.png",
          "/veri3.png",
          "/veri4.png",
          "/veri5.png",
        ],
        status: "hosted",
        statusLabel: "Live",
        impact: "AI + Blockchain system ensuring content authenticity, tamper detection, and secure digital verification."
      },
      {
        id: 2,
        title: "Portfolio Website",
        category: "ai",
        shortDesc: "Interactive portfolio with AI chatbot",
        description: "A personal developer portfolio built with React.js and Vite, featuring an integrated AI chatbot, animated UI components, dark theme, smooth page transitions, and a full project showcase gallery.",
        tech: ["React.js", "Vite", "Node.js", "Express.js", "Gemini API", "CSS Animations"],
        github: "https://github.com/astha1504/Portfolio",
        live: null,
        thumbnail: "/portfolio.png",
        screenshots: [
          "/Screenshots/Screenshot 2025-08-03 181850.png",
        ],
        status: "hosted",
        statusLabel: "Live",
        impact: "Showcases full-stack and AI skills through a production-quality portfolio."
      },
      {
        id: 3,
        title: "Cyberbully Detector",
        category: "ai",
        shortDesc: "AI moderation for toxic content detection",
        description: "A full-stack AI moderation system that detects toxic, abusive, and harmful content in user-generated text using ML + LLM-based semantic understanding.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Python", "Scikit-learn", "NLP"],
        github: "https://github.com/astha1504/Cyberbully-and-toxic-comment-detector",
        live: null,
        thumbnail: "cyberbully.png",
        screenshots: [
          "/Screenshots/Screenshot 2025-08-03 211801.png",
        ],
        status: "inprogress",
        statusLabel: "In Progress",
        impact: "Achieves high accuracy classification, reduces manual moderation effort."
      },
      {
        id: 4,
        title: "Elderly Care Assistant",
        category: "ai",
        shortDesc: "AI-powered healthcare assistant for seniors",
        description: "An AI-powered healthcare assistant designed to support elderly individuals in managing their daily health, appointments, and medical communication.",
        tech: ["FastAPI", "Python", "LLM APIs", "RAG", "Vector Database", "REST APIs"],
        github: "https://github.com/astha1504/Elderly-Care-Assistant-App-using-FastAPI",
        live: null,
        thumbnail: "elderly.png",
        screenshots: [
          "/Screenshots/Screenshot 2025-08-01 135754.png",
        ],
        status: "development",
        statusLabel: "In Development",
        impact: "Designed to reduce manual caregiver workload by 60-70%."
      }
    ],
    ml: [
      {
        id: 5,
        title: "Invoice Intelligent System",
        category: "ml",
        shortDesc: "ML-powered invoice processing & fraud detection",
        description: "An end-to-end machine learning system for invoice processing, fraud detection, and freight cost prediction to automate financial workflows.",
        tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "OCR", "NLP"],
        github: "https://github.com/astha1504/Invoice-Intelligent-System",
        live: null,
        thumbnail: "/invoice.png",
        screenshots: [
          "/Screenshots/Screenshot 2025-07-25 084647.png",
        ],
        status: "development",
        statusLabel: "In Development",
        impact: "Reduces manual invoice verification effort by up to 80%."
      },
      {
        id: 6,
        title: "Fake News Detection",
        category: "ml",
        shortDesc: "ML + NLP for news authenticity classification",
        description: "A machine learning-based system that classifies news as real or fake using NLP preprocessing and statistical learning models.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Python", "Scikit-learn", "NLP"],
        github: "https://github.com/astha1504/Fake-News-Recoginization",
        live: null,
        thumbnail: "/fakenews.png",
        screenshots: [
          "/Screenshots/Screenshot 2025-07-16 220114.png",
        ],
        status: "development",
        statusLabel: "In Development",
        impact: "Achieves ~70%+ baseline accuracy using classical ML models."
      }
    ],
    mern: [
      {
        id: 7,
        title: "FlowGuard DPI Engine",
        category: "mern",
        shortDesc: "High-performance packet inspection system",
        description: "A high-performance Deep Packet Inspection engine designed to analyze, classify, and filter network traffic at packet level.",
        tech: ["C++", "OOP", "Networking", "Multithreading", "PCAP processing"],
        github: "https://github.com/astha1504/flowguard-dpi-engine",
        live: null,
        thumbnail: "/flowguard.png",
        screenshots: [
          "/Screenshots/Screenshot 2025-07-14 002834.png",
        ],
        status: "development",
        statusLabel: "In Development",
        impact: "Designed for high-throughput packet processing systems."
      },
      {
        id: 8,
        title: "Environment Club Website",
        category: "mern",
        shortDesc: "Community-driven environmental awareness platform",
        description: "A community-driven website designed to promote environmental awareness, sustainability, and youth engagement.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/astha1504/Environment-Club",
        live: "https://allenhouse.ac.in/jivita/index.html",
        thumbnail: "/env.png",
        screenshots: [
          "/image.png",
        ],
        status: "hosted",
        statusLabel: "Live",
        impact: "Improves awareness through structured digital content."
      }
    ]
  }), []);

  // Handle image error - replace with placeholder
  const handleImageError = useCallback((projectId, imageType) => {
    setImageErrors(prev => ({ ...prev, [`${projectId}-${imageType}`]: true }));
  }, []);

  // Get image source with fallback
  const getImageSrc = useCallback((project, type = 'thumbnail') => {
    const key = `${project.id}-${type}`;
    if (imageErrors[key]) {
      return generatePlaceholder(project.title, project.category);
    }
    return type === 'thumbnail' ? project.thumbnail : project.screenshots?.[0];
  }, [imageErrors]);

  // FIXED: Intersection Observer - Force all cards to be visible immediately
  useEffect(() => {
    // Force all cards to be visible right away
    const allProjectIds = Object.values(projects).flat().map(p => p.id);
    const initialVisible = {};
    allProjectIds.forEach(id => {
      initialVisible[id] = true;
    });
    setVisibleCards(initialVisible);

    // Optional: Set up observer for any additional animation needs (doesn't affect visibility)
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.id;
          if (entry.isIntersecting && !hasAnimated.current[id]) {
            hasAnimated.current[id] = true;
            // Keep cards visible - don't modify visibility state
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      Object.values(cardRefs.current).forEach(ref => {
        if (ref) observerRef.current?.observe(ref);
      });
    }, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [projects]);

  const openModal = useCallback((project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
    document.body.style.overflow = "auto";
  }, []);

  const openLightbox = useCallback((images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex(prev => (prev + 1) % lightboxImages.length);
  }, [lightboxImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex(prev => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  }, [lightboxImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case "hosted": return <FaCheckCircle />;
      case "inprogress": return <FaClock />;
      default: return <FaCode />;
    }
  };

  const CategorySection = ({ title, items, icon, colorClass }) => (
    <div className="ap-category-section">
      <div className="ap-category-header">
        <div className={`ap-category-icon ${colorClass}`}>
          {icon}
        </div>
        <h2 className="ap-category-title">{title}</h2>
        <div className="ap-category-divider"></div>
        <span className="ap-category-count">{items.length} projects</span>
      </div>
      <div className="ap-projects-grid">
        {items.map((project, index) => (
          <div
            key={project.id}
            data-id={project.id}
            ref={el => cardRefs.current[project.id] = el}
            onClick={() => openModal(project)}
            className={`ap-project-card ${visibleCards[project.id] ? 'card-visible' : ''}`}
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            <div className="ap-project-image-wrapper">
              <img
                src={getImageSrc(project, 'thumbnail')}
                alt={project.title}
                className="ap-project-image"
                loading="lazy"
                onError={() => handleImageError(project.id, 'thumbnail')}
              />
              <div className="ap-project-overlay"></div>

              <div className={`ap-status-badge ap-status-${project.status}`}>
                {getStatusIcon(project.status)}
                <span>{project.statusLabel}</span>
              </div>

              <div className="ap-project-view-cta">
                <div className="ap-view-icon-wrapper">
                  <FaEye size={13} className="ap-view-icon" />
                </div>
                <span className="ap-view-details-text">View Details</span>
              </div>

              <div className="ap-shimmer"></div>
            </div>

            <div className="ap-project-content">
              <h3 className="ap-project-title">{project.title}</h3>
              <p className="ap-project-short-desc">{project.shortDesc}</p>
              <div className="ap-project-tech-stack">
                {project.tech.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="ap-tech-tag">
                    {tech.length > 12 ? tech.slice(0, 10) + "..." : tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="ap-tech-tag-more">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Count stats
  const totalLive = Object.values(projects).flat().filter(p => p.status === 'hosted').length;
  const totalInProgress = Object.values(projects).flat().filter(p => p.status === 'inprogress').length;
  const totalDev = Object.values(projects).flat().filter(p => p.status === 'development').length;

  return (
    <div className="all-projects-container">
      <div className="background-pattern">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
      </div>

      <div className="main-content">
        <div className="content-wrapper">
          <button onClick={goBack} className="back-button">
            <FaArrowLeft className="back-button-icon" />
            <span>Back to Home</span>
          </button>

          <div className="ap-header-section">
            <div className="ap-header-badge">
              <span className="ap-header-badge-text">MY PORTFOLIO</span>
            </div>
            <h1 className="ap-header-title">
              <span className="ap-gradient-text">All Projects</span>
            </h1>
            <p className="ap-header-subtitle">
              Exploring the intersection of Artificial Intelligence, Machine Learning, and Full-Stack Development
            </p>
            <div className="ap-stats-row">
              <div className="ap-stat-pill ap-stat-hosted">
                <FaCheckCircle /> <span>{totalLive} Live</span>
              </div>
              <div className="ap-stat-pill ap-stat-inprogress">
                <FaClock /> <span>{totalInProgress} In Progress</span>
              </div>
              <div className="ap-stat-pill ap-stat-dev">
                <FaCode /> <span>{totalDev} In Development</span>
              </div>
            </div>
          </div>

          <CategorySection
            title="Artificial Intelligence"
            items={projects.ai}
            icon={<FaBrain className="icon-purple" />}
            colorClass="bg-purple"
          />

          <CategorySection
            title="Machine Learning"
            items={projects.ml}
            icon={<FaChartLine className="icon-blue" />}
            colorClass="bg-blue"
          />

          <CategorySection
            title="Systems & Web"
            items={projects.mern}
            icon={<FaGlobe className="icon-green" />}
            colorClass="bg-green"
          />
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-hero-image-wrapper">
              <img
                src={getImageSrc(selectedProject, 'thumbnail')}
                alt={selectedProject.title}
                className="modal-hero-image"
                onError={() => handleImageError(selectedProject.id, 'modal')}
              />
              <div className="modal-hero-gradient"></div>
              <div className="modal-hero-content">
                <div className={`modal-hero-status ap-status-${selectedProject.status}`}>
                  {getStatusIcon(selectedProject.status)}
                  <span>{selectedProject.statusLabel}</span>
                </div>
                <h2 className="modal-hero-title">{selectedProject.title}</h2>
                <p className="modal-hero-subtitle">{selectedProject.shortDesc}</p>
              </div>
              <button onClick={closeModal} className="modal-close-btn">
                <FaTimes size={18} />
              </button>
            </div>

            <div className="modal-body">
              {/* Screenshots Gallery */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                <div className="modal-section ap-screenshots-section">
                  <h3 className="ap-section-title">
                    <span className="ap-section-indicator"></span>
                    Project Screenshots
                  </h3>
                  <div className="ap-screenshot-gallery">
                    {selectedProject.screenshots.map((screenshot, idx) => (
                      <div 
                        key={idx} 
                        className="ap-screenshot-thumb"
                        onClick={() => openLightbox(selectedProject.screenshots, idx)}
                      >
                        <img 
                          src={screenshot} 
                          alt={`Screenshot ${idx + 1}`}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = generatePlaceholder(selectedProject.title, selectedProject.category);
                          }}
                        />
                        <div className="ap-screenshot-thumb-overlay">
                          <FaEye className="ap-screenshot-eye" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-section">
                <h3 className="ap-section-title">
                  <span className="ap-section-indicator"></span>
                  Description
                </h3>
                <p className="ap-section-text">{selectedProject.description}</p>
              </div>

              {selectedProject.impact && (
                <div className="modal-section ap-impact-section">
                  <h3 className="ap-section-title">
                    <span className="ap-section-indicator"></span>
                    Impact & Metrics
                  </h3>
                  <p className="ap-section-text">{selectedProject.impact}</p>
                </div>
              )}

              <div className="modal-section">
                <h3 className="ap-section-title">
                  <span className="ap-section-indicator"></span>
                  Tech Stack
                </h3>
                <div className="ap-tech-stack-list">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="ap-tech-stack-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-github"
                >
                  <FaGithub size={16} />
                  GitHub Repository
                </a>
                {selectedProject.live ? (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-live"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                ) : (
                  <span className={`btn-live-disabled btn-disabled-${selectedProject.status}`}>
                    {selectedProject.status === "inprogress" ? <FaClock size={14} /> : <FaCode size={14} />}
                    {selectedProject.status === "inprogress" ? "In Progress" : "Coming Soon"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <div className="ap-lightbox-overlay" onClick={closeLightbox}>
          <button className="ap-lightbox-close" onClick={closeLightbox}>
            <FaTimes size={20} />
          </button>
          <button className="ap-lightbox-nav ap-lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <FaChevronLeft size={20} />
          </button>
          <button className="ap-lightbox-nav ap-lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <FaChevronRight size={20} />
          </button>
          <div className="ap-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightboxImages[lightboxIndex]} 
              alt={`Screenshot ${lightboxIndex + 1}`}
              onError={(e) => {
                e.target.src = generatePlaceholder("Screenshot", "ai");
              }}
            />
          </div>
          <div className="ap-lightbox-counter">
            {lightboxIndex + 1} / {lightboxImages.length}
          </div>
        </div>
      )}
    </div>
  );
}