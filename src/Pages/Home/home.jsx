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

// Stats data with icons
const stats = [
  {
    value: 100,
    label: "Members",
    color: "text-blue-500",
    icon: <FaUsers className="mb-2 mx-auto text-blue-500" size={28} />,
  },
  {
    value: 50,
    label: "Events",
    color: "text-blue-500",
    icon: <FaCalendarAlt className="mb-2 mx-auto text-blue-500" size={28} />,
  },
  {
    value: 3,
    label: "Societies",
    color: "text-blue-500",
    icon: <FaUsers className="mb-2 mx-auto text-blue-500" size={28} />,
  },
  {
    value: 3,
    label: "Mentors",
    color: "text-blue-500",
    icon: <FaGraduationCap className="mb-2 mx-auto text-blue-500" size={28} />,
  },
];

// Upcoming events
const events = [
  {
    name: "INCET",
    date: "MAY 21, 2025",
    description: "Research paper submission and presentation",
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
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${
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
          className={`text-lg max-w-2xl mx-auto ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};


const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0">
        <motion.img
          src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093333/group_yit28h.webp"
          alt="Group Photo"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.3)" }}
          loading="lazy"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </div>

      {/* Simple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-black/60 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-8">
          <img
            src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093404/JCE_zjaf1p.png"
            alt="JCE IEEE Logo"
            className="w-28 h-28 mx-auto mb-6 rounded-full border-2 border-white/20 shadow-lg"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            JCE <span className="text-blue-400">IEEE</span> Student Branch
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
          Empowering students through innovation, technology, and professional
          growth. Join us in shaping the future of engineering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            Learn More
            <FaArrowRight className="ml-2" />
          </Link>

          <Link
            to="/membership"
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            Join IEEE
            <FaUsers className="ml-2" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/contact";
            }}
          >
            Contact Us
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Simple scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        </div>
      </div> */}
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              About <span className="text-blue-500">IEEE</span> Student Branch
            </>
          }
          subtitle="Building a community of future innovators and technology leaders through knowledge sharing and professional development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <MotionWrapper delay={0.2}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093349/Execom-1_nx7odq.webp"
                alt="IEEE Student Branch"
                className="w-full h-auto"
              />
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-600">
                The IEEE Student Branch at JCE is dedicated to fostering
                technological innovation and excellence by providing students
                with opportunities for networking, learning, and professional
                growth in various fields of engineering and technology.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800">
                What We Offer
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaLightbulb className="text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">
                    Technical workshops and hands-on sessions
                  </span>
                </li>
                <li className="flex items-start">
                  <FaLightbulb className="text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">
                    Industry connections and networking opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <FaLightbulb className="text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">
                    Leadership and personal development
                  </span>
                </li>
                <li className="flex items-start">
                  <FaLightbulb className="text-blue-500 mt-1 mr-3" />
                  <span className="text-gray-600">
                    Access to IEEE resources and publications
                  </span>
                </li>
              </ul>

              <Link
                to="/about"
                className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
              >
                Learn More About Us
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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0iIzFmMjkzNyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              Our <span className="text-blue-500">Impact</span> in Numbers
            </>
          }
          subtitle="Growing stronger every year with dedicated members and impactful initiatives"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      className="text-4xl font-bold text-gray-900"
                    />
                  )}
                  <span className="text-4xl font-bold text-gray-900">+</span>
                  <h3 className="text-lg font-medium text-gray-600">
                    {stat.label}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
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
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              Our <span className="text-blue-500">IEEE</span> Societies
            </>
          }
          subtitle="Join specialized communities within IEEE to enhance your knowledge and skills"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {societies.map((society, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 transform group-hover:scale-110 transition-transform duration-700"></div>
                  <img
                    src={society.logo}
                    alt={society.name}
                    className="max-h-32 max-w-full relative z-10 transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {society.name}{" "}
                    <span className="text-blue-500">({society.shortName})</span>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {society.description}
                  </p>
                  <Link
                    to={`/societies/${society.shortName.toLowerCase()}`}
                    className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors group/link"
                  >
                    Learn more
                    <FaArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              Upcoming <span className="text-blue-400">Events</span>
            </>
          }
          subtitle="Join us for exciting workshops, seminars, and competitions"
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg px-3 py-1 text-sm inline-block mb-2 w-fit">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-200 transition-colors duration-300">
                      {event.name}
                    </h3>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-tr-full transform -translate-x-8 translate-y-8 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="mt-6 flex justify-between items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-500 font-medium flex items-center group/btn"
                    >
                      Learn More
                      <FaArrowRight className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <FaCalendarAlt className="text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="items-center justify-center flex m-12 text-4xl font-bold font-serif"><p className="text-white">And many more......</p></div>
    </section>
  );
};

// Enhanced Gallery Section Component
const GallerySection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0iIzFmMjkzNyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              Our <span className="text-blue-400">Gallery</span>
            </>
          }
          subtitle="Capturing moments of innovation, learning, and collaboration"
          light={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-medium text-lg">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-300"
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
          <div className="relative p-8 md:p-12">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full opacity-10"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-500 rounded-full opacity-10"></div>

            <div className="relative flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/3">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Join IEEE Today
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-blue-100 text-lg mb-8 leading-relaxed"
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
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Events Panel"
      >
        <FaBell size={20} />
      </motion.button>

      <AnimatePresence>
        {showEventsPanel && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-gray-100"
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
    <div className="font-sans">
      <HeroSection />
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
