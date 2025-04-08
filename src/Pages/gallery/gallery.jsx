import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// All available images with proper organization
const allImages = [
  // WIE Women's Day Events
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
    title: "Research Presentation",
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
  // Featured images (first 4 only)
  const featuredImages = allImages.slice(0, 4);
  
  // State for lightbox functionality
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  // Categories for filtering - dynamically generated from image data
  const allCategories = ["All", ...new Set(allImages.map((img) => img.category))];

  // Filtered images based on active category
  const filteredImages = activeFilter === "All" 
    ? allImages 
    : allImages.filter((img) => img.category === activeFilter);

  // Handle category change with animation
  const handleCategoryChange = (category) => {
    if (category === activeFilter) return;
    
    setIsLoading(true);
    setAnimationClass("opacity-0 translate-y-4");
    
    setTimeout(() => {
      setActiveFilter(category);
      setIsLoading(false);
      setTimeout(() => setAnimationClass("opacity-100 translate-y-0"), 50);
    }, 300);
  };

  // Initialize animation on mount
  useEffect(() => {
    setTimeout(() => setAnimationClass("opacity-100 translate-y-0"), 100);
  }, []);

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
      setCurrentImage((currentImage + 1) % filteredImages.length);
    } else {
      setCurrentImage((currentImage - 1 + filteredImages.length) % filteredImages.length);
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
  }, [lightboxOpen, currentImage, filteredImages.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block mb-2 px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full font-medium text-sm">Explore & Discover</span>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-600 mb-4">
          IEEE Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Showcasing our journey of innovation, learning, and growth through
          memorable events and activities
        </p>
      </div>

      {/* Featured Slider */}
      <div className="mb-24">
        <div className="flex items-center mb-8">
          <div className="h-10 w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800">Featured Highlights</h2>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Slider {...sliderSettings} className="featured-slider">
            {featuredImages.map((item, index) => (
              <div key={index} className="relative h-[28rem] md:h-[32rem]">
                <img
                  src={item.source}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full mb-4 text-sm font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Gallery Section */}
      <div>
        <div className="flex justify-between items-center mb-12 flex-wrap gap-6">
          <div className="flex items-center">
            <div className="h-10 w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-3"></div>
            <h2 className="text-2xl font-bold text-gray-800">Gallery Collection</h2>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 bg-white p-2 rounded-full shadow-md">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-300 ${animationClass}`}>
          {isLoading ? (
            // Loading placeholder
            Array(8).fill(0).map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-gray-200 animate-pulse h-72"></div>
            ))
          ) : (
            filteredImages.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={item.source}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="inline-block mb-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  <p className="text-white/80 text-sm mt-2">{item.description}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {filteredImages.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-16 right-0 text-white text-4xl hover:text-gray-300 focus:outline-none transition-colors"
              aria-label="Close lightbox"
            >
              ×
            </button>

            {/* Counter */}
            <div className="absolute -top-16 left-0 text-white/70">
              {currentImage + 1} / {filteredImages.length}
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={filteredImages[currentImage].source}
                alt={filteredImages[currentImage].title}
                className="max-h-[80vh] mx-auto object-contain rounded-lg"
              />

              {/* Navigation buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
                className="absolute top-1/2 -translate-y-1/2 -left-16 lg:-left-24 bg-white/10 hover:bg-white/30 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl backdrop-blur-sm transition-all duration-300"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
                className="absolute top-1/2 -translate-y-1/2 -right-16 lg:-right-24 bg-white/10 hover:bg-white/30 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl backdrop-blur-sm transition-all duration-300"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* Caption */}
            <div className="text-center mt-6">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full mb-2 text-sm">
                {filteredImages[currentImage].category}
              </span>
              <h3 className="text-white text-2xl font-bold">
                {filteredImages[currentImage].title}
              </h3>
              <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                {filteredImages[currentImage].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Information Section */}
      <div className="mt-24 bg-white rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm">
        <div className="flex items-center mb-8">
          <div className="h-10 w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800">About Our Gallery</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our gallery showcases the vibrant activities and achievements of
              the IEEE Student Branch. Through these images, we capture moments
              of learning, innovation, and collaboration that define our journey
              in technical excellence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From technical workshops to cultural events, each image represents
              our commitment to fostering a dynamic environment where students
              can grow, learn, and excel in their chosen fields.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full px-6 py-3 hover:shadow-lg transition-shadow duration-300">
                Join Our Community
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
            
            <h3 className="text-xl font-bold text-indigo-800 mb-6 relative z-10">
              Get Involved
            </h3>
            <p className="text-gray-700 mb-6 relative z-10">
              Want to be part of our upcoming events? Connect with us through:
            </p>
            <ul className="space-y-4 text-gray-700 relative z-10">
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span>ieee.jce1@gmail.com</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <span>ieee.jce.ac.in</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span>@IEEE_JCE</span>
              </li>
            </ul>
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
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .featured-slider .slick-prev:hover, .featured-slider .slick-next:hover {
          background: rgba(255, 255, 255, 0.3);
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
      `}</style>
    </div>
  );
};

export default Gallery;