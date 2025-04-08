import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Testimonial Component
const Testimonial = ({ name, affiliation, text, imgSrc }) => {
  return (
    <div className="my-8">
      <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 hover:border-0 transition duration-300 relative group overflow-hidden">
        {/* Rainbow border on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
             style={{
               background: "linear-gradient(to right, #ff0000, #ff8000, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)",
               mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
               maskComposite: "exclude",
               WebkitMaskComposite: "xor",
               maskClip: "padding-box, border-box",
               padding: "1px",
               pointerEvents: "none"
             }}>
        </div>
        
        <p className="text-gray-300 mb-4 text-lg relative z-10">{text}</p>
        <div className="flex items-center relative z-10">
          <img 
            src={imgSrc || "/api/placeholder/60/60"} 
            alt={name} 
            className="w-12 h-12 rounded-full mr-3 object-cover"
          />
          <div>
            <h4 className="text-white font-semibold">{name}</h4>
            <p className="text-blue-400 text-sm">{affiliation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonials data - Left column
const testimonials = [
  {
    name: "Austin Pacheco",
    affiliation: "Electronics and Communication Engineering",
    text: "I really like how IEEE workshops connect theory to practical applications. The Arduino session helped me understand embedded systems in a way lectures never could.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093417/Austin_bvluog.webp"
  },
  {
    name: "Chandan K",
    affiliation: "Electronics and Communication Engineering",
    text: "Being part of WIE has been transformative. I've found mentors who have guided my research interests and supported my growth in a male-dominated field.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093416/Chandan_jfg2ie.webp"
  },
  {
    name: "Chaitra K",
    affiliation: "Electronics and Communication Engineering",
    text: "The most useful IEEE resource for me has been the technical library access. It's hands down the best benefit for research students like me.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093418/Chaitra_o5ulkp.webp"
  },
  {
    name: "Abhishek",
    affiliation: "Electronics and Communication Engineering",
    text: "IEEE's professional network helped me land my first internship. The industry connections through the chapter are invaluable for career growth.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093420/Abhishek_t8kgjx.webp"
  },
  {
    name: "Kshiti",
    affiliation: "Electronics and Communication Engineering",
    text: "The IEEE workshops on machine learning were exactly what I needed to bridge the gap between theory and implementation. Now I'm leading our college's AI team.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093411/Kshiti_lssm4j.webp"
  },
];

// Testimonials data - Right column
const moreTestimonials = [
  {
    name: "Narayan Sabale",
    affiliation: "Electronics and Communication Engineering",
    text: "The Cursor tab completion in IEEE coding workshops is occasionally so helpful it defies reality - about ~25% of the time it's anticipating exactly what I want to do.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093410/Narayan_d881jv.webp"
  },
  {
    name: "Rahul Halkarni",
    affiliation: "Electronics and Communication Engineering",
    text: "It's amazing having IEEE as a programming partner, and is an incredible accelerator for me and my team's projects in robotics competitions.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093415/Rahul_gmjkwd.webp"
  },
  {
    name: "Shreedhar",
    affiliation: "Electronics and Communication Engineering",
    text: "The most useful AI tool that I currently pay for is, hands down, IEEE's resource access. It's fast, handles complex topics, and delivers quality information.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093417/Shreedhar_rj3apb.webp"
  },
  {
    name: "Varsha",
    affiliation: "Electronics and Communication Engineering",
    text: "IEEE is the best technical resource tool I've found. Join it, avoid missing out at your own peril. The networking alone is worth the membership fee.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093413/Varsha_bgjlc7.webp"
  },
  {
    name: "Pawan",
    affiliation: "Electronics and Communication Engineering",
    text: "Being part of IEEE is enough to make you believe eventually you'll be able to innovate at the speed of thought. The workshops accelerate your learning curve tremendously.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093412/pawan_qyubat.webp"
  },
];

// Scrolling Testimonials Section
const TestimonialsSection = () => {
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  
  useEffect(() => {
    // Set initial positions
    if (column2Ref.current) {
      column2Ref.current.scrollTop = column2Ref.current.scrollHeight / 2;
    }
    
    const scrollSpeed = 0.3; // Slower scroll for more natural feel
    let animationFrameId;
    let scrollPos1 = 0;
    let scrollPos2 = 0;
    
    const animateScroll = () => {
      if (column1Ref.current && column2Ref.current) {
        // Calculate the point to reset scroll to create a seamless loop
        const resetPoint1 = column1Ref.current.scrollHeight / 2;
        const resetPoint2 = column2Ref.current.scrollHeight / 2;
        
        // Increment scroll positions
        scrollPos1 += scrollSpeed;
        scrollPos2 += scrollSpeed;
        
        // Apply scrolling - column 1 down, column 2 up
        column1Ref.current.scrollTop = scrollPos1;
        column2Ref.current.scrollTop = resetPoint2 - scrollPos2;
        
        // Reset positions when appropriate to create seamless loop
        if (scrollPos1 >= resetPoint1) {
          scrollPos1 = 0;
          column1Ref.current.scrollTop = 0;
        }
        
        if (scrollPos2 >= resetPoint2) {
          scrollPos2 = 0;
          column2Ref.current.scrollTop = resetPoint2;
        }
      }
      
      animationFrameId = requestAnimationFrame(animateScroll);
    };
    
    animateScroll();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center"
        >
          Member <span className="text-blue-500">Testimonials</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto"
        >
          Hear what our community has to say about their IEEE experience
        </motion.p>

        {/* Testimonials Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* First Column - Scrolling Down */}
          <div 
            ref={column1Ref} 
            className="h-[600px] overflow-hidden relative"
          >
            {/* Gradient overlays for smooth transition effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
            
            {/* Testimonials */}
            <div className="px-4">
              {/* First set */}
              {testimonials.map((item, index) => (
                <Testimonial 
                  key={`col1-${index}`}
                  name={item.name}
                  affiliation={item.affiliation}
                  text={item.text}
                  imgSrc={item.imgSrc}
                />
              ))}
              {/* Duplicate for seamless scrolling */}
              {testimonials.map((item, index) => (
                <Testimonial 
                  key={`col1-dup-${index}`}
                  name={item.name}
                  affiliation={item.affiliation}
                  text={item.text}
                  imgSrc={item.imgSrc}
                />
              ))}
            </div>
          </div>
          
          {/* Second Column - Scrolling Up */}
          <div 
            ref={column2Ref} 
            className="h-[600px] overflow-hidden relative"
          >
            {/* Gradient overlays for smooth transition effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
            
            {/* Testimonials */}
            <div className="px-4">
              {/* First set */}
              {moreTestimonials.map((item, index) => (
                <Testimonial 
                  key={`col2-${index}`}
                  name={item.name}
                  affiliation={item.affiliation}
                  text={item.text}
                  imgSrc={item.imgSrc}
                />
              ))}
              {/* Duplicate for seamless scrolling */}
              {moreTestimonials.map((item, index) => (
                <Testimonial 
                  key={`col2-dup-${index}`}
                  name={item.name}
                  affiliation={item.affiliation}
                  text={item.text}
                  imgSrc={item.imgSrc}
                />
              ))}
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default TestimonialsSection;