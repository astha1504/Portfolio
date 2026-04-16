import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import {
  FaAward,
  FaTrophy,
  FaStar,
  FaBookOpen,
  FaGlobe,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaPaintBrush,
  FaUsers,
  FaComments,
  FaTools,
  FaTimes // Icon for closing the modal
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// Data for your existing achievements
const achievementsData = [
  // 🧠 CURRICULAR
  {
    icon: <FaStar size={32} />,
    title: "Academic Excellence – Top 3 Rank",
    description: "SGPA: 9.27 (1st Sem), 8.8 (2nd Sem), 8.6 (3rd Sem). Consistently among top performers.",
    bgColor: "from-blue-400 to-blue-600",
    category: "Curricular",
  },
  {
    icon: <FaLaptopCode size={32} />,
    title: "DSA Practice – GeeksforGeeks",
    description: "Solved 100+ DSA problems. Maintained platform rating of 1686.",
    bgColor: "from-red-500 to-red-700",
    category: "Curricular",
  },
  {
    icon: <FaBookOpen size={32} />,
    title: "Research Paper – FHAD",
    description: "Authored paper on Federated Anomaly Detection. Submitted to LNCS.",
    bgColor: "from-indigo-500 to-indigo-700",
    category: "Curricular",
  },
  {
    icon: <FaBookOpen size={32} />, // Using FaBookOpen for a knowledge/academic feel
    title: "Secretary – The Logic League",
    description: "Spearheaded the successful organization of 2 international conferences and numerous coding/math competitions",
    bgColor: "from-purple-600 to-purple-800", // A new color to distinguish
    category: "Curricular",
  },

  // 🏆 HACKATHONS AND COMPETITIONS
  {
    icon: <FaTrophy size={32} />,
    title: "Semi-Finalist – Flipkart Grid 6.0",
    description: "Selected as semi-finalist in prestigious Flipkart national-level competition.",
    bgColor: "from-pink-500 to-pink-700",
    category: "Hackathons and Competitions",
  },
  {
    icon: <FaAward size={32} />,
    title: "Finalist – BitBox 5.0 Hackathon",
    description: "Top 1% of 3000+ teams. Led a team in AI-based solution development.",
    bgColor: "from-yellow-400 to-yellow-600",
    category: "Hackathons and Competitions",
  },
  {
    icon: <FaTrophy size={32} />,
    title: "2nd Place – IDEATE Hackathon",
    description: "Secured 2nd position in Smart City innovation challenge.",
    bgColor: "from-purple-500 to-purple-700",
    category: "Hackathons and Competitions",
  },
  {
    icon: <FaAward size={32} />,
    title: "IIT Kanpur – E-Summit Hackathon",
    description: "Participated in national-level innovation challenge at IITK.",
    bgColor: "from-orange-400 to-orange-600",
    category: "Hackathons and Competitions",
  },
  {
    icon: <FaLaptopCode size={32} />,
    title: "Weekly Coding Contests",
    description: "Regular participant in Unstop & GFG weekly coding challenges.",
    bgColor: "from-cyan-500 to-cyan-700",
    category: "Hackathons and Competitions",
  },
  {
    icon: <FaTools size={32} />,
    title: "2nd Place – Model Designing Competition",
    description: "Developed a sensor-based accident prevention railway system.",
    bgColor: "from-amber-500 to-amber-700",
    category: "Hackathons and Competitions",
  },

  // 🌟 EXTRACURRICULAR
  {
    icon: <FaChalkboardTeacher size={32} />,
    title: "Organizer – Tech & Innovation Events",
    description: "Coordinated national hackathons, workshops, and technical seminars.",
    bgColor: "from-green-400 to-green-600",
    category: "Extracurricular",
  },
  {
    icon: <FaGlobe size={32} />,
    title: "MyGov Campus Ambassador",
    description: "Promoted civic initiatives, digital awareness, and youth participation.",
    bgColor: "from-teal-500 to-teal-700",
    category: "Extracurricular",
  },
  {
    icon: <FaPaintBrush size={32} />,
    title: "2nd Place – Graffiti Competition",
    description: "Won 2nd prize in an inter-college graffiti art contest.",
    bgColor: "from-fuchsia-500 to-fuchsia-700",
    category: "Extracurricular",
  },
  {
    icon: <FaUsers size={32} />,
    title: "College Street Play – Nukkad Natak",
    description: "Performed and participated in socially themed street plays.",
    bgColor: "from-rose-500 to-rose-700",
    category: "Extracurricular",
  },
  {
    icon: <FaComments size={32} />,
    title: "Runner-Up – Debate Turncoat",
    description: "Runner-up in inter-departmental debate competition with turncoat format.",
    bgColor: "from-lime-500 to-lime-700",
    category: "Extracurricular",
  },
];
const categories = ["Curricular", "Extracurricular", "Hackathons and Competitions"];

// Data for the moving gallery (Now for general achievement moments)
const galleryImages = [
  { id: 1, src: '/1.jpg', alt: 'Achievement Moment 1' },
  { id: 2, src: '/2.png', alt: 'Achievement Moment 2' },
  { id: 3, src: '/3.png', alt: 'Achievement Moment 3' },
  { id: 4, src: '/4.png', alt: 'Achievement Moment 4' },
  { id: 5, src: '/5.png', alt: 'Achievement Moment 5' },
  { id: 6, src: '/6.png', alt: 'Achievement Moment 6' },
  { id: 7, src: '/7.jpg', alt: 'Achievement Moment 7' },
  { id: 12, src: '/12.jpg', alt: 'Achievement Moment 12' },
  { id: 9, src: '/9.png', alt: 'Achievement Moment 9' },
  { id: 10, src: '/10.jpg', alt: 'Achievement Moment 10' },
  { id: 11, src: '/11.png', alt: 'Achievement Moment 11' },
  { id: 8, src: '/8.png', alt: 'Achievement Moment 8' },
];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("Curricular");
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);

  // Refs and state for the Moving Gallery
  const galleryRef = useRef(null);
  const scrollTween = useRef(null);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);

  // State for the Image Modal (Lightbox)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const modalImageRef = useRef(null); // Ref for the image INSIDE the modal

  const filteredAchievements = achievementsData.filter((item) => item.category === activeTab);

  // Use a ref to store VanillaTilt instances
  const vanillaTiltInstances = useRef({});

  // Function to open the modal with animation
  const openModal = useCallback((image) => {
    setSelectedImage(image);
    setModalOpen(true);
    // Potentially disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  // Function to close the modal with animation
  const closeModal = useCallback(() => {
    // Optional: Add a closing animation here if desired,
    // e.g., gsap.to(modalImageRef.current, { scale: 0.8, opacity: 0, duration: 0.3, onComplete: () => setModalOpen(false) });
    setModalOpen(false);
    setSelectedImage(null); // Clear selected image
    // Re-enable body scroll when modal is closed
    document.body.style.overflow = '';
  }, []);


  useEffect(() => {
    // Initial animation for the section, title, and tabs
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      tabsRef.current.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tabsRef.current,
          start: "top 90%",
        },
      }
    );

  }, []);

  // Effect for Achievement Card animations and VanillaTilt
  useEffect(() => {
    // Destroy previous VanillaTilt instances before new ones are initialized
    Object.values(vanillaTiltInstances.current).forEach(instance => {
      if (instance && typeof instance.destroy === 'function') {
        instance.destroy();
      }
    });
    vanillaTiltInstances.current = {}; // Clear the stored instances

    // Animation for cards when activeTab changes
    gsap.fromTo(
      ".tilt-card", // Target all cards with this class
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: 0.1,
        stagger: 0.1,
        ease: "power2.out",
        overwrite: "auto"
      }
    );

    // Initialize VanillaTilt for the currently filtered cards
    filteredAchievements.forEach((item, i) => {
      const cardId = `achievement-card-${item.title.replace(/\s+/g, '-')}-${i}`;
      const card = document.getElementById(cardId);
      if (card) {
        // Store the VanillaTilt instance in the ref
        vanillaTiltInstances.current[cardId] = VanillaTilt.init(card, {
          max: 8,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });

    // Cleanup function for VanillaTilt instances when component unmounts or tab changes
    return () => {
      Object.values(vanillaTiltInstances.current).forEach(instance => {
        if (instance && typeof instance.destroy === 'function') {
          instance.destroy();
        }
      });
      vanillaTiltInstances.current = {};
    };

  }, [activeTab, filteredAchievements]);

  // useEffect for Moving Gallery animation
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    // Remove any previously cloned nodes before adding new ones
    while (gallery.children.length > galleryImages.length) {
      gallery.removeChild(gallery.lastChild);
    }

    // Duplicate content to create a seamless loop
    const originalChildren = Array.from(gallery.children);
    originalChildren.forEach(child => {
      gallery.appendChild(child.cloneNode(true));
    });

    // Calculate the total width of the original gallery content
    let initialContentWidth = 0;
    for (let i = 0; i < galleryImages.length; i++) {
      const child = gallery.children[i];
      if (child) {
        initialContentWidth += child.offsetWidth;
        const style = window.getComputedStyle(child);
        initialContentWidth += parseFloat(style.marginLeft || 0) + parseFloat(style.marginRight || 0);
      }
    }

    if (initialContentWidth <= 0) {
      console.warn("Gallery: initialContentWidth is 0 or less. Gallery might not scroll. Ensure images are rendered and have dimensions.");
      if (galleryImages.length > 0) {
        const approximateCardWidth = 320; // This should match the fixed width you set
        const approximateMargin = 16 * 2; // mx-4 means 16px left + 16px right
        initialContentWidth = galleryImages.length * (approximateCardWidth + approximateMargin);
      } else {
        return;
      }
    }

    // Kill any existing tween before creating a new one
    if (scrollTween.current) {
      scrollTween.current.kill();
    }

    // GSAP animation for continuous horizontal scroll
    scrollTween.current = gsap.to(gallery, {
      x: -initialContentWidth,
      ease: "none",
      duration: 30,
      repeat: -1,
      overwrite: true,
    });

    return () => {
      if (scrollTween.current) {
        scrollTween.current.kill();
        scrollTween.current = null;
      }
      while (gallery.children.length > galleryImages.length) {
        gallery.removeChild(gallery.lastChild);
      }
    };
  }, [galleryImages.length]);

  // useEffect for Moving Gallery pause/play on hover
  useEffect(() => {
    if (scrollTween.current) {
      if (isGalleryHovered) {
        scrollTween.current.pause();
      } else {
        scrollTween.current.play();
      }
    }
  }, [isGalleryHovered]);

  // GSAP Animation for Modal Image when it appears - UPDATED FOR 3D TWIRL
  useEffect(() => {
    if (modalOpen && modalImageRef.current) {
      gsap.fromTo(
        modalImageRef.current,
        {
          opacity: 0,
          y: -100,
          scale: 0.5,
          rotationY: -360, // Rotate around the Y-axis (vertical)
          rotationX: 0,   // Optional: Add X-axis rotation if desired
          transformPerspective: 800, // Important for 3D effect
          transformOrigin: 'center center', // Ensures rotation is around the center
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          rotationX: 0, // Ensure it ends at 0
          duration: 0.8,
          ease: "elastic.out(1, 0.75)", // Retain the "jumping" bounce
        }
      );
    }
  }, [modalOpen, selectedImage]);


  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-6 py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Main Heading for Achievements */}
      <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Achievements That Speak
      </h2>

      {/* Tab Buttons */}
      <div ref={tabsRef} className="flex justify-center gap-4 mb-10 relative">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`relative px-5 py-2 rounded-full font-semibold transition-all border ${
              activeTab === cat
                ? "bg-white text-black scale-105 shadow-lg"
                : "text-white border-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Achievement Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {filteredAchievements.map((item, index) => (
          <div
            key={index}
            id={`achievement-card-${item.title.replace(/\s+/g, '-')}-${index}`}
            className={`bg-gradient-to-br ${item.bgColor} rounded-xl p-6 text-center text-white shadow-2xl transform-style-preserve-3d transition-transform duration-500 tilt-card`}
          >
            <div className="mb-4 animate-bounce">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm opacity-90">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Start of Merged Moving Gallery Section - Updated Headings */}
      <div className="w-full overflow-hidden py-12 bg-gray-950 mt-20">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Gallery Moments of My Achievements
        </h3>
        <p className="text-lg text-center text-gray-400 mb-12">
          A visual journey through memorable milestones.
        </p>
        <div
          className="relative flex flex-nowrap cursor-pointer"
          ref={galleryRef}
          onMouseEnter={() => setIsGalleryHovered(true)}
          onMouseLeave={() => setIsGalleryHovered(false)}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 mx-4 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                // --- MODIFIED CODE BELOW ---
                // Set fixed width and height using Tailwind CSS classes for consistency
                // object-cover ensures the image fills the area, cropping if necessary
                className="w-80 h-52 object-cover rounded-xl"
                // Removed inline style minWidth and minHeight if using w-80 h-52
                // as they define an explicit size. You can keep them if you want
                // to enforce a minimum size that might be larger than the w-80 h-52
                // but for an "even look", specific fixed dimensions are usually best.
              />
            </div>
          ))}
        </div>
      </div>
      {/* End of Merged Moving Gallery Section */}

      {/* Image Modal (Lightbox) */}
      {modalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 md:-right-10 text-white text-3xl hover:text-gray-400 transition-colors z-50"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <img
              ref={modalImageRef} // Attach ref for animation
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl border-2 border-white"
            />
            {selectedImage.alt && (
              <p className="text-center text-white mt-4 text-lg font-semibold">
                {selectedImage.alt}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}