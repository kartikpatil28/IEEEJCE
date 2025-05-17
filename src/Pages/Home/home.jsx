import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBell,
  FaCalendarAlt,
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

import Team from "../team/team";
import TestimonialsSection from "../Home/testimonials";

// Motion wrapper for consistent animations
const MotionWrapper = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`transition duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

// INCET Announcement Banner Component
const INCETAnnouncement = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center">
          <div className="bg-white/20 p-2 rounded-full mr-3">
            <FaCalendarAlt className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg md:text-xl">
              6th International Conference on Emerging Technologies (INCET 2025)
            </h3>
            <p className="text-sm md:text-base opacity-90">
              May 22-24, 2025 | Jain College of Engineering, Belagavi
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <a
            href="https://www.incet.org/important-dates/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition-colors flex items-center"
          >
            Important Dates <FaExternalLinkAlt className="ml-2" />
          </a>
          <Link
            to="/incet-2025"
            className="px-4 py-2 bg-indigo-800 text-white font-semibold rounded-md hover:bg-indigo-900 transition-colors flex items-center"
          >
            Learn More <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Stats data with icons - Refined Icon styling consistency
const stats = [
  {
    value: 100,
    label: "Members",
    icon: <FaUsers size={28} />, // Removed color class here, will apply in component
  },
  {
    value: 50,
    label: "Events",
    icon: <FaCalendarAlt size={28} />,
  },
  {
    value: 3,
    label: "Societies",
    icon: <FaUsers size={28} />, // Consider a different icon for Societies if appropriate
  },
  {
    value: 3,
    label: "Mentors",
    icon: <FaGraduationCap size={28} />,
  },
];

// Upcoming events
const events = [
  {
    name: "INCET 2025",
    date: "MAY 22-24, 2025",
    description: "International Conference on Emerging Technologies - Paper presentations and research discussions",
  },
  {
    name: "Mini Hackathon 2025",
    date: "TBD",
    description: "48-hour coding competition with exciting prizes",
  },
  {
    name: "Tech interview Session by Prof. Radhika",
    date: "TBD",
    description: "Learning professsional ethics and interview hacks",
  },
  {
    name: "ISRO industrial visits",
    date: "May 15, 2025",
    description: "An educational visit to ISRO facilities to explore advancements in space technology and research",
  },
];

// Societies data
const societies = [
  {
    logo: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093405/aess-logo_mhnbjb.png",
    name: "Aerospace & Electronic Systems Society",
    shortName: "AESS",
    description:
      "Advancing technology in aerospace, navigation, avionics, radar, and electronic systems.",
  },
  {
    logo: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093408/wie-logo_e7tg7e.png",
    name: "Women in Engineering",
    shortName: "WIE",
    description:
      "Promoting women engineers and scientists in STEM fields worldwide.",
  },
  {
    logo: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093406/cs-logo_knyz6z.jpg",
    name: "Computer Society",
    shortName: "Not approved yet",
    description:
      "Advancing computer science and technology through professional development and networking.",
  },
];

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1747476944/IMG_6094_b5uwap.webp",
    alt: "Industrial Visit to U R Rao Satellite Center(URSC), ISRO",
  },
  {
    id: 1,
    src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093394/Campus-to-Corporate-15_gjyf9c.webp",
    alt: "Campus to Corporate",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093392/Campus-to-Corporate-12_cvnhk7.webp",
    alt: "Campus to Corporate",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093401/Poster_3_vnuo7z.webp",
    alt: "Poster Presentation",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093400/Poster_23_yi1p3i.webp",
    alt: "Poster making",
  },
  { id: 5, src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093372/IEEE_DAY_12_t8u4tp.webp", alt: "IEEE DAY" },
  { id: 6, src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093369/IEEE_DAY_43_cbpslv.webp", alt: "IEEE DAY" },
  { id: 7, src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093400/Poster_1_tpapfa.webp", alt: "AESS Poster" },
  { id: 8, src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093428/Github_1_uuzamq.webp", alt: "Cyber Quest" },
];

// SectionTitle component for consistent headings
const SectionTitle = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg md:text-xl max-w-3xl mx-auto ${
            light ? "text-gray-300" : "text-gray-600"
          } leading-relaxed`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

// Replace the HeroSection with a new editorial, two-column layout
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-16 md:py-0 gap-8 md:gap-0 relative z-10">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col justify-center items-start z-10 text-left max-w-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white mb-4 drop-shadow-xl" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '-0.04em', textShadow: '0 4px 24px rgba(0,0,0,0.7)'}}>
          IEEE<br />
          <span className="text-blue-400">STUDENT BRANCH</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-6 tracking-wide drop-shadow-lg" style={{fontFamily: 'Montserrat, Arial, sans-serif', textShadow: '0 2px 12px rgba(0,0,0,0.6)'}}>Jain College of Engineering, Belagavi</h2>
        <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-md drop-shadow" style={{textShadow: '0 1px 8px rgba(0,0,0,0.5)'}}>
          A vibrant community of innovators, leaders, and learners. Join us to connect, collaborate, and grow in technology and beyond.
        </p>
        <Link
          to="/about"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-xl hover:from-blue-600 hover:to-blue-800 hover:shadow-blue-400/60 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/40"
        >
          See More
        </Link>
      </div>
      {/* Right: Group Image */}
      <div className="flex-1 flex items-center justify-center relative w-full md:w-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] max-h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-transparent to-blue-900/10 z-10 rounded-2xl" />
        <img
          src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093349/Execom-1_nx7odq.webp"
          alt="IEEE Student Branch Group"
          className="w-full h-full object-cover object-center grayscale rounded-2xl shadow-2xl border-4 border-blue-900/20 z-0"
          style={{ filter: 'grayscale(0.7) contrast(1.08)' }}
        />
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-20" />
  </section>
);

// New ISRO Visit Highlight Section
const ISROVisitHighlight = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-gray-800/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left: Image with overlay */}
            <div className="relative h-[400px] md:h-[600px] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent z-10"></div>
              <img
                src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1747476944/IMG_6094_b5uwap.webp"
                alt="IEEE AESS Industrial Visit to ISRO"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="bg-blue-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                  Latest Event
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-4 py-1.5 bg-blue-600/20 rounded-full text-blue-400 text-sm font-medium border border-blue-500/20"
                >
                  IEEE AESS Society
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  Industrial Visit to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    U R Rao Satellite Center
                  </span>
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  Our IEEE AESS Society members had the incredible opportunity to visit the U R Rao Satellite Center, 
                  where they witnessed cutting-edge space technology and learned about satellite development processes.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap gap-4 pt-2"
                >
                  <div className="flex items-center gap-2 text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>May 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>URSC, ISRO</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link
                    to="/events"
                    className="inline-flex items-center mt-6 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg font-medium transition-all duration-300 group border border-blue-500/20"
                  >
                    View Event Details
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              About Our <span className="text-blue-600">IEEE</span> Student Branch
            </>
          }
          subtitle="Building a community of future innovators and technology leaders through knowledge sharing and professional development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <MotionWrapper delay={0.2} className="group">
            <div className="rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093349/Execom-1_nx7odq.webp"
                alt="IEEE Student Branch Activities"
                className="w-full h-auto object-cover"
              />
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
                  Our Mission
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The IEEE Student Branch at JCE is dedicated to fostering
                  technological innovation and excellence. We provide students
                  with opportunities for networking, hands-on learning, and professional
                  growth in various fields of engineering and technology.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">
                  What We Offer
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    { icon: FaLightbulb, text: "Engaging technical workshops and hands-on sessions" },
                    { icon: FaUsers, text: "Valuable industry connections and networking events" },
                    { icon: FaGraduationCap, text: "Leadership training and personal skill development" },
                    { icon: FaBell, text: "Access to IEEE's vast resources and publications" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <item.icon className="text-blue-600 mt-1 mr-3 md:mr-4 flex-shrink-0" size={20} />
                      <span className="text-base md:text-lg text-gray-700">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center mt-4 md:mt-6 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Learn More About Us
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

// Enhanced Stats Section Component
const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 bg-gray-50 relative"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              Our <span className="text-blue-600">Impact</span> in Numbers
            </>
          }
          subtitle="Growing stronger every year with dedicated members and impactful initiatives."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                {React.cloneElement(stat.icon, { className: "transition-colors duration-300"})}
              </div>
              <div className="space-y-1">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                  />
                )}
                <span className="text-4xl md:text-5xl font-bold text-gray-900">+</span>
                <h3 className="text-lg font-medium text-gray-600 mt-1">
                  {stat.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Societies Section
const SocietiesSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              Our <span className="text-blue-600">IEEE</span> Societies
            </>
          }
          subtitle="Explore specialized communities within IEEE to enhance your knowledge, network, and skills in focused areas of technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {societies.map((society, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden h-full transform hover:-translate-y-2"
            >
              <div className="p-6 md:p-8 bg-gray-50 flex justify-center items-center h-48 md:h-56 relative overflow-hidden border-b border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={society.logo}
                  alt={`${society.name} Logo`}
                  className="max-h-28 md:max-h-32 max-w-full relative z-10 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {society.name}
                </h3>
                <p className="text-sm text-blue-500 font-medium mb-3 uppercase tracking-wider">
                  {society.shortName}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {society.description}
                </p>
                <Link
                  to={`/societies/${society.shortName.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link mt-auto"
                >
                  Learn More
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Events Section Component
const EventsSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              Upcoming <span className="text-blue-400">Events</span>
            </>
          }
          subtitle="Join us for exciting workshops, insightful seminars, and challenging competitions designed to foster innovation and collaboration."
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden h-full transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500"
            >
              <div className="h-48 md:h-56 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden flex flex-col justify-end p-5 md:p-6">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
                {/* Subtle decorative patterns */}
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/10 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-300 transform rotate-45 group-hover:rotate-0"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 transform -rotate-45 group-hover:rotate-0"></div>
                
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm rounded-md px-3 py-1 text-xs sm:text-sm text-white inline-block mb-2 w-fit shadow-sm">
                    {event.date}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                    {event.name}
                  </h3>
                </div>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  {event.description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-400 font-semibold flex items-center group/btn hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.button>
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <FaCalendarAlt />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
         <motion.p 
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true}}
          transition={{ duration: 0.6, delay: events.length * 0.15 + 0.2}}
          className="text-center text-2xl md:text-3xl font-semibold text-gray-400 mt-12 md:mt-16"
          >
          And many more exciting activities to come...
          </motion.p>
      </div>
    </section>
  );
};

// Enhanced Gallery Section Component
const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              Our <span className="text-blue-400">Gallery</span>
            </>
          }
          subtitle="Capturing moments of innovation, learning, and collaboration from our vibrant events and activities."
          light={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id} // Use image.id for key if it's unique
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-lg shadow-xl aspect-w-1 aspect-h-1 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy" // Lazy load gallery images
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-md md:text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Full Gallery
            <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Join Section
const JoinSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
          <div className="relative p-6 md:p-12">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full opacity-10"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-500 rounded-full opacity-10"></div>

            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-2/3">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6"
                >
                  Join IEEE Today
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-blue-100 text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
                >
                  Become a part of the world's largest technical professional
                  organization for the advancement of technology. Gain access to
                  technical resources, career opportunities, and a global
                  network of professionals.
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-4"
                >
                  {[
                    "Access to IEEE's digital library with research papers",
                    "Networking with industry professionals",
                    "Professional development opportunities",
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center text-blue-100"
                    >
                      <div className="mr-4 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {benefit}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:w-1/3"
              >
                <Link
                  to="/membership"
                  className="group relative inline-flex items-center justify-center w-full px-8 py-4 text-xl font-bold text-blue-600 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    Become a Member
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Mobile Events Panel
const MobileEventsPanel = ({ showEventsPanel, setShowEventsPanel }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <motion.button
        onClick={() => setShowEventsPanel(!showEventsPanel)}
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Events Panel"
      >
        <FaBell size={18} className="md:w-5 md:h-5" />
      </motion.button>

      <AnimatePresence>
        {showEventsPanel && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl w-[90vw] max-w-[320px] overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
              <h3 className="text-lg font-bold text-white flex items-center">
                <FaCalendarAlt className="mr-2" />
                Upcoming Events
              </h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {events.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-2 text-blue-600">
                      <FaCalendarAlt size={20} />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">
                        {event.name}
                      </h4>
                      <p className="text-sm text-gray-500">{event.date}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-white"><p>And many more.....</p></div>
                </motion.div>
              ))}
              <Link
                to="/events"
                className="block p-4 text-center text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                View All Events
                <FaArrowRight className="inline-block ml-2" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Home Component with enhanced mobile panel
const Home = () => {
  const [showEventsPanel, setShowEventsPanel] = useState(false);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* INCET Announcement Banner at the very top */}
      <INCETAnnouncement />
      <HeroSection />
      <ISROVisitHighlight />
      <AboutSection />
      <StatsSection />
      <SocietiesSection />
      <EventsSection />
      <TestimonialsSection />
      <GallerySection />
      <JoinSection />
      <Team />
      <MobileEventsPanel
        showEventsPanel={showEventsPanel}
        setShowEventsPanel={setShowEventsPanel}
      />
    </div>
  );
};

export default Home;
