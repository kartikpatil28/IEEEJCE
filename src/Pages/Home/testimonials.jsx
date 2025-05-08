import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Enhanced Testimonial Card UI
const Testimonial = ({ name, affiliation, text, imgSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-8"
    >
      <div
        className="relative group overflow-hidden rounded-2xl p-8 bg-black/70 backdrop-blur-md border border-blue-700/40 shadow-[0_0_24px_2px_rgba(59,130,246,0.18)] transition duration-300"
        style={{ boxShadow: '0 0 24px 2px rgba(59,130,246,0.18), 0 4px 24px rgba(0,0,0,0.5)' }}
      >
        {/* Floating quote icon */}
        <div className="absolute top-6 left-6 text-3xl text-blue-500 opacity-20 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m2 0a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2h2m4 0v6m0 0a2 2 0 01-2 2H7a2 2 0 01-2-2v-4a2 2 0 012-2h2" />
          </svg>
        </div>
        {/* Subtle blue accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent opacity-60 rounded-t-2xl" />
        <p className="text-gray-200 mb-6 text-lg font-medium italic relative z-10">“{text}”</p>
        <div className="flex items-center relative z-10 mt-6">
          <img
            src={imgSrc || "/api/placeholder/60/60"}
            alt={name}
            className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-blue-400 shadow-md"
          />
          <div>
            <h4 className="text-white font-semibold text-base leading-tight">{name}</h4>
            <p className="text-blue-400 text-xs font-medium leading-tight">{affiliation}</p>
          </div>
        </div>
      </div>
    </motion.div>
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
    text: "Taking part in IEEE hackathons pushed me out of my comfort zone. I learned how to manage time, divide work efficiently, and most importantly, build solutions under pressure",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093416/Chandan_jfg2ie.webp"
  },
  {
    name: "Chaitra K",
    affiliation: "Electronics and Communication Engineering",
    text: "The hands-on workshops were a highlight of my IEEE journey. From IoT to basic circuit design, I explored topics that weren't deeply covered in class. It made learning exciting",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093418/Chaitra_o5ulkp.webp"
  },
  {
    name: "Abhishek",
    affiliation: "Electronics and Communication Engineering",
    text: "Through IEEE, I found out about an internship opportunity shared during a club meeting. It was my first step into practical experience, and I wouldn't have known about it otherwise.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093420/Abhishek_t8kgjx.webp"
  },
  {
    name: "Kshiti",
    affiliation: "Electronics and Communication Engineering",
    text: "I loved how IEEE combined technical activities with fun and creativity. We had tech quizzes, coding marathons, and even casual meetups that brought everyone closer",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093411/Kshiti_lssm4j.webp"
  },
];

// Testimonials data - Right column
const moreTestimonials = [
  {
    name: "Narayan Sabale",
    affiliation: "Electronics and Communication Engineering",
    text: "IEEE gave me the space to work with people outside my department. I got to collaborate with coders, designers, and even business students. That kind of exposure is rare in college",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093410/Narayan_d881jv.webp"
  },
  {
    name: "Rahul Halkarni",
    affiliation: "Electronics and Communication Engineering",
    text: "The speaker sessions arranged by IEEE were always insightful. I remember one session where the guest talked about real industry challenges—it completely changed how I looked at engineering.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093415/Rahul_gmjkwd.webp"
  },
  {
    name: "Shreedhar",
    affiliation: "Electronics and Communication Engineering",
    text: "What kept me hooked to IEEE was the consistency—every month had something new to look forward to. A bootcamp here, a workshop there, it kept me curious and engaged.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093417/Shreedhar_rj3apb.webp"
  },
  {
    name: "Varsha",
    affiliation: "Electronics and Communication Engineering",
    text: "IEEE gave me the space to work with people outside my department. I got to collaborate with coders, designers, and even business students. That kind of exposure is rare in college.",
    imgSrc: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093413/Varsha_bgjlc7.webp"
  },
  {
    name: "Pawan",
    affiliation: "Electronics and Communication Engineering",
    text: "IEEE conferences were more than just events—they were a space to listen, learn, and connect with people who genuinely loved tech. The discussions I had there stuck with me long after.",
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