import React, { useState, useCallback, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaBrain, FaChartLine, FaGlobe, FaPlay } from "react-icons/fa";

export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Complete project data
  const projects = {
    ai: [
      {
        id: 1,
        title: "JanDarpan",
        shortDesc: "AI-powered grievance redressal system",
        description: "JanDarpan is an intelligent platform that uses AI to analyze, categorize, and route citizen grievances to the appropriate departments. The system includes sentiment analysis, priority scoring, and automated response suggestions. It has successfully processed over 10,000 grievances with 95% accuracy.",
        tech: ["React", "Node.js", "Firebase", "OpenAI API", "TensorFlow.js"],
        github: "https://github.com/yourusername/jandarpan",
        live: "https://jandarpan.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop",
      },
      {
        id: 2,
        title: "Smart Resume Analyzer",
        shortDesc: "AI-powered resume screening tool",
        description: "An intelligent resume parsing and ranking system that uses NLP to extract skills, experience, and qualifications. Matches candidates with job descriptions using semantic similarity. Features include PDF parsing, skill extraction, and automated candidate ranking with 92% matching accuracy.",
        tech: ["Python", "Flask", "NLP", "Transformers", "BERT", "PyPDF2"],
        github: "https://github.com/yourusername/resume-analyzer",
        live: "https://resume-analyzer.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=240&fit=crop",
      },
      {
        id: 3,
        title: "AI Chatbot Assistant",
        shortDesc: "Intelligent customer support chatbot",
        description: "Customer support chatbot using RAG (Retrieval-Augmented Generation) architecture. Provides instant responses to common queries, accesses knowledge base for accurate information, and escalates complex issues to human agents. Handles 1000+ concurrent conversations.",
        tech: ["Python", "LangChain", "OpenAI", "ChromaDB", "FastAPI", "React"],
        github: "https://github.com/yourusername/ai-chatbot",
        live: "https://aichatbot.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=240&fit=crop",
      }
    ],
    ml: [
      {
        id: 4,
        title: "Fund Misuse Detection",
        shortDesc: "Anomaly detection in financial transactions",
        description: "Machine learning system that detects suspicious patterns in government fund disbursement. Uses Isolation Forests and Autoencoders to flag anomalies in real-time. Achieved 92% precision and 88% recall on test data. Includes interactive dashboard for investigators.",
        tech: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "Pandas", "Plotly"],
        github: "https://github.com/yourusername/fund-misuse-detection",
        live: "https://fundmisuse.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      },
      {
        id: 5,
        title: "Sales Forecasting System",
        shortDesc: "Time series prediction for retail",
        description: "Deep learning model using LSTM networks to predict future sales based on historical data, seasonality, and promotional events. Achieved MAPE of 12% on test data. Includes interactive dashboards, what-if analysis, and automated reporting.",
        tech: ["Python", "TensorFlow", "Keras", "LSTM", "Pandas", "FastAPI"],
        github: "https://github.com/yourusername/sales-forecast",
        live: "https://salesforecast.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
      },
      {
        id: 6,
        title: "Customer Churn Predictor",
        shortDesc: "Predict customer attrition with 89% accuracy",
        description: "Classification model that predicts customer churn with 89% accuracy. Helps businesses identify at-risk customers and take preventive actions. Features include SHAP explanations, segment analysis, and retention strategy recommendations.",
        tech: ["Python", "LightGBM", "SHAP", "FastAPI", "React", "Docker"],
        github: "https://github.com/yourusername/churn-prediction",
        live: "https://churnpredictor.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      }
    ],
    mern: [
      {
        id: 7,
        title: "Sahyog",
        shortDesc: "NGO transparency & collaboration platform",
        description: "Full-stack platform connecting NGOs, donors, and volunteers. Features real-time chat, donation tracking, project management, impact reporting dashboards, and payment integration. Used by 50+ NGOs across India with 10,000+ active users.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Razorpay"],
        github: "https://github.com/yourusername/sahyog",
        live: "https://sahyog.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=240&fit=crop",
      },
      {
        id: 8,
        title: "E-Commerce Store",
        shortDesc: "Full-featured online shopping platform",
        description: "Complete e-commerce solution with user authentication, product management, shopping cart, Stripe payment integration, order tracking, wishlist, reviews, and admin dashboard. Supports 1000+ concurrent users with 99.9% uptime.",
        tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
        github: "https://github.com/yourusername/ecommerce-store",
        live: "https://ecommercestore.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=240&fit=crop",
      },
      {
        id: 9,
        title: "TaskFlow Pro",
        shortDesc: "Advanced project management tool",
        description: "Kanban-style project management with team collaboration, file sharing, real-time updates, drag-drop interface, automated workflows, time tracking, and analytics dashboard. Includes role-based access control and email notifications.",
        tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
        github: "https://github.com/yourusername/taskflow-pro",
        live: "https://taskflowpro.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=240&fit=crop",
      },
      {
        id: 10,
        title: "Social Media Dashboard",
        shortDesc: "Analytics dashboard for social media",
        description: "Comprehensive social media analytics dashboard that aggregates data from multiple platforms. Features real-time metrics, audience insights, content performance tracking, scheduling, and automated reporting with PDF export.",
        tech: ["React", "Chart.js", "Node.js", "Express", "MongoDB", "Redis", "Socket.io"],
        github: "https://github.com/yourusername/social-dashboard",
        live: "https://socialdashboard.demo.com",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=240&fit=crop",
      }
    ]
  };

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

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const CategorySection = ({ title, items, icon, colorClass }) => (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg ${colorClass} bg-opacity-20`}>
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent ml-4"></div>
        <span className="text-gray-500 text-sm font-mono">{items.length} projects</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="group bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/10 border border-gray-800 hover:border-yellow-500/30"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-yellow-500/90 backdrop-blur-sm rounded-full p-1.5">
                    <FaPlay size={12} className="text-black" />
                  </div>
                  <span className="text-white text-xs font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded">Watch Demo</span>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-yellow-400 mb-1 line-clamp-1">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="bg-gray-800 text-yellow-400/80 px-2 py-0.5 rounded text-xs font-mono">
                    {tech.length > 12 ? tech.slice(0, 10) + "..." : tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="bg-gray-800 text-gray-400 px-2 py-0.5 rounded text-xs">
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
    <div className="min-h-screen bg-black">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-5 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <span className="text-yellow-400 text-sm font-mono tracking-wider">MY PORTFOLIO</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                All Projects
              </span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-base">
              Exploring the intersection of Artificial Intelligence, Machine Learning, and Full-Stack Development
            </p>
          </div>

          {/* AI Section */}
          <CategorySection
            title="Artificial Intelligence"
            items={projects.ai}
            icon={<FaBrain className="text-purple-400 text-xl" />}
            colorClass="bg-purple-500"
          />

          {/* ML Section */}
          <CategorySection
            title="Machine Learning"
            items={projects.ml}
            icon={<FaChartLine className="text-blue-400 text-xl" />}
            colorClass="bg-blue-500"
          />

          {/* MERN Section */}
          <CategorySection
            title="MERN Stack"
            items={projects.mern}
            icon={<FaGlobe className="text-green-400 text-xl" />}
            colorClass="bg-green-500"
          />
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
          onClick={closeModal}
        >
          <div
            className={`relative bg-gray-900 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transition-all duration-300 ${
              modalOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-md p-5 border-b border-gray-800 flex justify-between items-center rounded-t-2xl">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-yellow-400">{selectedProject.title}</h2>
                <p className="text-gray-500 text-sm mt-0.5">{selectedProject.shortDesc}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-200 hover:rotate-90"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 md:p-6 space-y-6">
              {/* Video Section */}
              <div className="rounded-xl overflow-hidden bg-gray-800">
                <div className="relative aspect-video">
                  <iframe
                    src={selectedProject.video}
                    title={`${selectedProject.title} demo video`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Description Section */}
              <div className="bg-gray-800/50 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-yellow-400 rounded-full"></span>
                  Description
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech Stack Section */}
              <div>
                <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-yellow-400 rounded-full"></span>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-yellow-400 px-3 py-1.5 rounded-lg text-sm font-mono border border-gray-700 hover:border-yellow-500/50 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Section */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-yellow-400 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                >
                  <FaGithub size={16} />
                  GitHub Repository
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg shadow-yellow-500/20"
                >
                  <FaExternalLinkAlt size={14} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        ::-webkit-scrollbar-thumb {
          background: #eab308;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ca8a04;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}