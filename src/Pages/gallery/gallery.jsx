import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFilter, FaStar, FaThLarge, FaDownload, FaChevronLeft, FaChevronRight, FaTimes, FaShare, FaHeart } from "react-icons/fa";

// All available images with proper organization
const allImages = [
  // WIE Women's Day Events
  {
    source: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1747476944/IMG_6094_b5uwap.webp",
    title: "Industrial Visit to U R Rao Satellite Center(URSC), ISRO",
    description: "A fascinating visit to U R Rao Satellite Center, gaining insights into the world of space technology",
    category: "AESS Events",
  },
  {
    source: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093350/WIE_WD_1_lzivwg.webp",
    title: "Women's Day Celebration",
    description: "Celebrating International Women's Day with inspiring talks",
    category: "WIE Events",
  },
  {
    source: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093428/Github_1_uuzamq.webp",
    title: "Skill Development",
    description: "Enhancing technical and soft skills",
    category: "Career Development",
  },
  {
    source: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093355/WIE_WD_2_matzy7.webp",
    title: "Poster Making Competition",
    description: "Craft & Create",
    category: "WIE Events",
  },
  {
    source:"https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093383/Conference-15_r8jnc8.webp",
    title: "Conference",
    description: "Sharing innovative research findings",
    category: "Technical Events",
  },
  {
    source: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093353/WIE_WD_5_ciqgps.webp",
    title: "Poster Making Competition",
    description: "Creativity & Innovation",
    category: "WIE Events",
  },
  {
    source:"https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093384/Campus-to-Corporate-1_qoaudo.webp",
    title: "Networking Session",
    description: "Building connections and fostering collaboration",
    category: "Campus to Coorporate",
  },
  {
    source: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093380/Conference-8_q9oorb.webp",
    title: "Innovation Showcase",
    description: "Demonstrating projects and innovations by women engineers",
    category: "Sensor Conference",
  },

  // Campus to Corporate Events
  
 
  {
    source:"https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093420/Career_Dr_Sushant_ci8ccx.webp",
    title: "Career Guidance",
    description: "Navigating career paths and opportunities",
    category: "Career Development",
  },
  

  // IEEE Day Celebrations
  {
    source: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093369/IEEE_DAY_46_pv7u0q.webp",
    title: "IEEE Day Opening",
    description: "Kickoff ceremony of IEEE Day celebrations",
    category: "IEEE Events",
  },
  {
    source: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093370/IEEE_DAY_23_enalqr.webp",
    title: "Execoms 2024",
    description: "Celebrating IEEE day",
    category: "IEEE Events",
  },

  // Conference and Technical Events
  {
    source: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093380/Conference-8_q9oorb.webp",
    title: "Memory & Storage Summit",
    description: "Latest trends in storage technologies",
    category: "Technical Events",
  },
  

  // Special Events
  {
    source: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093428/Github_1_uuzamq.webp",
    title: "CyberQuest",
    description: "Exploring cybersecurity challenges and solutions",
    category: "Special Events",
  },
];

const Gallery = () => {
  // State for lightbox functionality
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-white/50 hover:bg-white/80 transition-colors duration-300"></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  // Open lightbox with specific image
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Navigate through lightbox images
  const navigateLightbox = (direction) => {
    if (direction === "next") {
      setCurrentImage((currentImage + 1) % allImages.length);
    } else {
      setCurrentImage((currentImage - 1 + allImages.length) % allImages.length);
    }
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "ArrowLeft") navigateLightbox("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentImage, allImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Simple Header/Hero */}
      <div className="relative text-center mb-16 pt-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <span className="inline-block mb-4 px-4 py-1 bg-indigo-500/20 text-indigo-300 rounded-full font-medium text-sm backdrop-blur-sm border border-indigo-500/30 animate-fadeIn">
          Gallery
        </span>
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6 animate-fadeInUp">
          IEEE JCE Moments
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-200">
          A visual journey through our events, achievements, and vibrant student life.
        </p>
      </div>

      {/* Immersive Gallery Grid */}
      <div className="px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allImages.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition-transform duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer"
              onClick={() => openLightbox(index)}
              style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
            >
              <img
                src={item.source}
                alt={item.title}
                className="w-full h-56 object-cover object-center transition-transform duration-700 group-hover:scale-110 group-hover:shadow-xl group-hover:brightness-110"
                loading={index < 8 ? 'eager' : 'lazy'}
                style={{ imageRendering: 'auto' }}
              />
              {/* Soft gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 transition-opacity duration-300 animate-fadeIn backdrop-blur-md"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-6xl w-full mx-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-16 right-0 text-white text-4xl hover:text-gray-300 focus:outline-none transition-colors"
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>

            {/* Counter & Keyboard Hints */}
            <div className="absolute -top-16 left-0 text-white/70 flex items-center gap-4">
              <span>{currentImage + 1} / {allImages.length}</span>
              <span className="hidden md:inline text-xs bg-white/10 px-2 py-1 rounded-full ml-2 border border-white/20">
                ←/→ arrows, Esc to close
              </span>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={allImages[currentImage].source}
                alt={allImages[currentImage].title}
                className="max-h-[80vh] mx-auto object-contain rounded-lg shadow-2xl"
              />

              {/* Navigation buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
                className="absolute top-1/2 -translate-y-1/2 -left-16 lg:-left-24 bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl backdrop-blur-sm transition-all duration-300 border border-white/20"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
                className="absolute top-1/2 -translate-y-1/2 -right-16 lg:-right-24 bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl backdrop-blur-sm transition-all duration-300 border border-white/20"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>

              {/* Action buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <a
                  href={allImages[currentImage].source}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg transition-colors duration-200 border border-white/20"
                  title="Download image"
                >
                  <FaDownload />
                </a>
                <button
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg transition-colors duration-200 border border-white/20"
                  title="Share image"
                >
                  <FaShare />
                </button>
                <button
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg transition-colors duration-200 border border-white/20"
                  title="Like image"
                >
                  <FaHeart />
                </button>
              </div>
            </div>

            {/* Caption */}
            <div className="text-center mt-6">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full mb-2 text-sm border border-white/20">
                {allImages[currentImage].category}
              </span>
              <h3 className="text-white text-2xl font-bold">
                {allImages[currentImage].title}
              </h3>
              <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                {allImages[currentImage].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Information Section */}
      <div className="mt-24 px-4 pb-20 relative">
        <div className="bg-gray-900/50 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm border border-gray-700/50 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center mb-8">
            <div className="h-10 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full mr-3"></div>
            <h2 className="text-2xl font-bold text-white">About Our Gallery</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our gallery showcases the vibrant activities and achievements of
                the IEEE Student Branch. Through these images, we capture moments
                of learning, innovation, and collaboration that define our journey
                in technical excellence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From technical workshops to cultural events, each image represents
                our commitment to fostering a dynamic environment where students
                can grow, learn, and excel in their chosen fields.
              </p>
              <div className="mt-8">
                <a href="#" className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-full px-6 py-3 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                  Join Our Community
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-8 relative overflow-hidden border border-gray-700/50">
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
              
              <h3 className="text-xl font-bold text-indigo-400 mb-6 relative z-10">
                Get Involved
              </h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Want to be part of our upcoming events? Connect with us through:
              </p>
              <ul className="space-y-4 text-gray-300 relative z-10">
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4 border border-indigo-500/30 group-hover:border-indigo-500/50 transition-colors duration-300">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span className="group-hover:text-indigo-400 transition-colors duration-300">ieee.jce1@gmail.com</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4 border border-indigo-500/30 group-hover:border-indigo-500/50 transition-colors duration-300">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                  <span className="group-hover:text-indigo-400 transition-colors duration-300">ieee.jce.ac.in</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4 border border-indigo-500/30 group-hover:border-indigo-500/50 transition-colors duration-300">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="group-hover:text-indigo-400 transition-colors duration-300">@IEEE_JCE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .featured-slider .slick-dots {
          bottom: 20px;
          text-align: center;
          padding: 0 20px;
        }
        
        .featured-slider .slick-prev, .featured-slider .slick-next {
          z-index: 10;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .featured-slider .slick-prev:hover, .featured-slider .slick-next:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .featured-slider .slick-prev {
          left: 20px;
        }
        
        .featured-slider .slick-next {
          right: 20px;
        }
        
        .featured-slider .slick-prev:before, .featured-slider .slick-next:before {
          font-size: 24px;
        }

        /* Animations */
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s cubic-bezier(0.7,0,0.3,1) both;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.7,0,0.3,1) both;
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.7,0,0.3,1) both;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Gallery;