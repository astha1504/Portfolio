import React, { useState, useCallback, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaBrain, FaChartLine, FaGlobe, FaPlay, FaArrowLeft } from "react-icons/fa";
import "./All-projects.css";

export default function AllProjects({ goBack }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [thumbnailRotate, setThumbnailRotate] = useState({});

  // Projects data
  const projects = {
    ai: [
      {
        id: 1,
        title: "VeriCreate",
        shortDesc: "AI + Blockchain content verification platform",
        description: "VeriCreate is a full-stack AI platform for generating and verifying digital content authenticity using AI models and cryptographic hashing. It enables AI text/image generation, SHA-256 based verification, and tracks content integrity with a modern dashboard.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Solidity", "Web3.js", "Ethereum", "OpenAI API", "Gemini API", "Stable Diffusion", "SHA-256"],
        github: "https://github.com/astha1504/VeriCreate",
        live: "https://kode-kalesh-2025.vercel.app/",
        video: "https://drive.google.com/file/d/1IeFG31sHObwf3SLRIY5s9xh_CHfZ9eJe/view?usp=sharing",
        thumbnail: "/vericreate.png",
        impact: "AI + Blockchain system ensuring content authenticity, tamper detection, and secure digital verification."
      },
      {
        id: 2,
        title: "Portfolio Website",
        shortDesc: "Interactive portfolio with AI chatbot",
        description: "A highly interactive developer portfolio built to showcase projects through storytelling, animation, and immersive UI/UX design. Features fully animated UI with GSAP ScrollTrigger, smooth transitions using Framer Motion, interactive AI chatbot for personalized user interaction, dynamic project showcase with modern UI cards, responsive across all devices, and VanillaTilt-based 3D hover effects.",
        tech: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion", "VanillaTilt.js", "JavaScript", "AI Chatbot"],
        github: "https://github.com/yourusername/portfolio",
        live: "https://portfolio.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
        impact: "Improves visitor engagement through scroll-based storytelling UX, optimized for mobile-first responsive performance, reduces bounce rate using interactive animations, designed to act as a live developer identity system"
      },
      {
        id: 3,
        title: "Cyberbully & Toxic Comment Detector",
        shortDesc: "AI moderation for toxic content detection",
        description: "A full-stack AI moderation system that detects toxic, abusive, and harmful content in user-generated text using ML + LLM-based semantic understanding. Features real-time toxic comment classification, ML + NLP pipeline for text preprocessing and prediction, LLM-enhanced semantic toxicity detection, user authentication system, database storage for flagged content, and web-based interface for moderation.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Python", "Scikit-learn", "NLP", "LLM APIs"],
        github: "https://github.com/yourusername/cyberbully-detector",
        live: "https://cyberbully.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=240&fit=crop",
        impact: "Achieves high accuracy classification (ML + NLP hybrid approach), can process real-time user comments with low latency backend, reduces manual moderation effort by automating toxicity filtering, scalable for social platforms and forums"
      },
      {
        id: 4,
        title: "Elderly Care Assistant App",
        shortDesc: "AI-powered healthcare assistant for seniors",
        description: "An AI-powered healthcare assistant designed to support elderly individuals in managing their daily health, appointments, and medical communication. The system enhances independent living through intelligent automation and contextual AI responses. Features include AI-powered conversational assistant for health-related queries, RAG (Retrieval Augmented Generation) for accurate context-aware responses, user authentication for elderly users and caregivers, health metrics tracking (BP, glucose, reports, etc.), appointment scheduling with automated reminders, and health trend analysis over time.",
        tech: ["FastAPI", "Python", "LLM APIs", "RAG", "Vector Database", "SQL/NoSQL DB", "REST APIs"],
        github: "https://github.com/yourusername/elderly-care",
        live: "https://elderlycare.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=240&fit=crop",
        impact: "Designed to reduce manual caregiver workload by 60–70%, supports real-time health query resolution using AI, handles structured + unstructured medical data efficiently, scalable API-first architecture for multi-user systems"
      }
    ],
    ml: [
      {
        id: 5,
        title: "Invoice Intelligent System",
        shortDesc: "ML-powered invoice processing & fraud detection",
        description: "An end-to-end machine learning system for invoice processing, fraud detection, and freight cost prediction to automate financial workflows. Features invoice data preprocessing and cleaning pipeline, fraud detection and invoice validation system, freight cost prediction using regression models, modular ML pipeline (train → evaluate → predict), and automated script-based inference system.",
        tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "OCR", "NLP"],
        github: "https://github.com/yourusername/invoice-intelligent",
        live: "https://invoiceintelligent.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=240&fit=crop",
        impact: "Reduces manual invoice verification effort by up to 80%, improves decision-making in logistics cost estimation, automates repetitive financial analysis tasks, end-to-end ML pipeline demonstrates production-ready workflow"
      },
      {
        id: 6,
        title: "Fake News Detection System",
        shortDesc: "ML + NLP for news authenticity classification",
        description: "A machine learning-based system that classifies news as real or fake using NLP preprocessing and statistical learning models. Features text preprocessing (tokenization, cleaning, vectorization), ML classification models (Logistic Regression, SVM, etc.), probability-based prediction output, MERN-based web interface for user input, and dataset-based training pipeline.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Python", "Scikit-learn", "NLP"],
        github: "https://github.com/yourusername/fake-news-detection",
        live: "https://fakenews.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=240&fit=crop",
        impact: "Achieves ~70%+ baseline accuracy using classical ML models, helps reduce misinformation through automated detection, scalable pipeline for improved datasets and models, demonstrates practical NLP + ML deployment workflow"
      }
    ],
    mern: [
      {
        id: 7,
        title: "FlowGuard DPI Engine",
        shortDesc: "High-performance packet inspection system",
        description: "A high-performance Deep Packet Inspection engine designed to analyze, classify, and filter network traffic at packet level. Features packet-level inspection of network traffic, 5-tuple flow tracking (IP, port, protocol), SNI-based application classification (HTTPS inspection), multi-threaded architecture (Load Balancer + Fast Path threads), traffic blocking and filtering engine, and PCAP file processing and analysis.",
        tech: ["C++", "OOP", "Networking", "Multithreading", "PCAP processing"],
        github: "https://github.com/yourusername/flowguard",
        live: "https://flowguard.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=240&fit=crop",
        impact: "Designed for high-throughput packet processing systems, parallel architecture improves performance vs single-threaded design, enables real-time traffic classification and filtering, demonstrates strong understanding of low-level systems + networking"
      },
      {
        id: 8,
        title: "Environment Club Website",
        shortDesc: "Community-driven environmental awareness platform",
        description: "A community-driven website designed to promote environmental awareness, sustainability, and youth engagement. Features responsive informational website, event and activity showcase, awareness-based content sections, and simple and accessible UI design.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/yourusername/environment-club",
        live: "https://environmentclub.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=240&fit=crop",
        impact: "Improves awareness through structured digital content, lightweight static site optimized for fast loading, easy to scale for community updates"
      }
    ]
  };

  const openModal = useCallback((project) => {
    setThumbnailRotate(prev => ({ ...prev, [project.id]: true }));
    setTimeout(() => {
      setThumbnailRotate(prev => ({ ...prev, [project.id]: false }));
    }, 500);
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 400);
    document.body.style.overflow = "auto";
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
        {items.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="ap-project-card"
          >
            <div className="ap-project-image-wrapper">
              <img
                src={project.thumbnail}
                alt={project.title}
                className={`ap-project-image ${thumbnailRotate[project.id] ? 'animate-spin-once' : ''}`}
                loading="lazy"
              />
              <div className="ap-project-overlay"></div>
              <div className="ap-project-play-button">
                <div className="ap-play-icon-wrapper">
                  <FaPlay size={12} className="ap-play-icon" />
                </div>
                <span className="ap-watch-demo-text">Watch Demo</span>
              </div>
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

  return (
    <div className="all-projects-container">
      {/* Background Pattern */}
      <div className="background-pattern"></div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Back Button */}
          <button onClick={goBack} className="back-button">
            <FaArrowLeft className="back-button-icon" />
            <span>Back to Home</span>
          </button>

          {/* Header */}
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
          </div>

          {/* AI Section */}
          <CategorySection
            title="Artificial Intelligence"
            items={projects.ai}
            icon={<FaBrain className="icon-purple" />}
            colorClass="bg-purple"
          />

          {/* ML Section */}
          <CategorySection
            title="Machine Learning"
            items={projects.ml}
            icon={<FaChartLine className="icon-blue" />}
            colorClass="bg-blue"
          />

          {/* Systems & Web Section */}
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
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-header-text">
                <h2 className="ap-modal-title">{selectedProject.title}</h2>
                <p className="ap-modal-subtitle">{selectedProject.shortDesc}</p>
              </div>
              <button onClick={closeModal} className="modal-close-btn">
                <FaTimes size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Video Section */}
              <div className="modal-video">
                <div className="video-wrapper">
                  <iframe
                    src={selectedProject.video}
                    title={`${selectedProject.title} demo video`}
                    className="video-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Description Section */}
              <div className="modal-section">
                <h3 className="ap-section-title">
                  <span className="ap-section-indicator"></span>
                  Description
                </h3>
                <p className="ap-section-text">{selectedProject.description}</p>
              </div>

              {/* Impact Section */}
              {selectedProject.impact && (
                <div className="modal-section ap-impact-section">
                  <h3 className="ap-section-title">
                    <span className="ap-section-indicator"></span>
                    Impact & Metrics
                  </h3>
                  <p className="ap-section-text">{selectedProject.impact}</p>
                </div>
              )}

              {/* Tech Stack Section */}
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

              {/* Links Section */}
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
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-live"
                >
                  <FaExternalLinkAlt size={14} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}