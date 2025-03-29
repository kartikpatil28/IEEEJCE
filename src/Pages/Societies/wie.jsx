import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Import images
// import wieWD1 from "../../asset/Events/WIE_WD/WIE_WD_1.jpg";
// import wieWD2 from "../../asset/Events/WIE_WD/WIE_WD_2.jpg";
// import wieWD3 from "../../asset/Events/WIE_WD/WIE_WD_3.jpg";
// import wieWD4 from "../../asset/Events/WIE_WD/WIE_WD_4.jpg";
// import wieWD5 from "../../asset/Events/WIE_WD/WIE_WD_5.jpg";

const WIE = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const galleryImages = [
    { src: wieWD1, alt: "WIE Women's Day Event 1" },
    { src: wieWD2, alt: "WIE Women's Day Event 2" },
    { src: wieWD3, alt: "WIE Women's Day Event 3" },
    { src: wieWD4, alt: "WIE Women's Day Event 4" },
    { src: wieWD5, alt: "WIE Women's Day Event 5" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section - Black Theme with Larger WIE Title */}
      <motion.div
        className="p-8 bg-gradient-to-r from-gray-900 to-purple-900 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Added Official WIE Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://entrepreneurship.ieee.org/wp-content/uploads/2020/04/WIE-Logo-250x250-1.png"
            alt="IEEE Women in Engineering Logo"
            className="h-32 mx-auto border rounded-full shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
          />
        </motion.div>
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          {...fadeIn}
        >
          Women in Engineering
        </motion.h1>
        <motion.h2
          className="text-xl mb-6"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          IEEE JCE Student Branch
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          {...fadeIn}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg">
            Empowering women in technology through community, resources, and
            opportunities. We promote diversity and inclusion in STEM fields by
            creating supportive spaces for learning, networking, and
            professional growth.
          </p>
        </motion.div>
      </motion.div>

      {/* Vision and Mission Section */}
      <div className="p-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-purple-700 hover:border-purple-500 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
            >
              <h2 className="text-2xl font-bold text-purple-400 mb-4 text-center">
                Vision
              </h2>
              <p className="text-gray-300">
                To be globally recognized for its contributions in STEM fields.
                Our goal is to facilitate the recruitment and retention of women
                in technical disciplines globally. We envision a vibrant
                community of IEEE women and men collectively using their diverse
                talents to innovate for the benefit of humanity.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-700 hover:border-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">
                Mission
              </h2>
              <p className="text-gray-300">
                To connect, support, and inspire women and girls worldwide, and
                facilitate their recruitment and retention in STEM fields,
                fostering technological innovation and excellence for the
                benefit of humanity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Committee Section */}
      <div className="flex justify-center items-center p-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-purple-400 mb-8"
            {...fadeIn}
          >
            Committee
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Advisor */}
            <motion.div
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src="/api/placeholder/300/300"
                    alt="Faculty Advisor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-2/3">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Dr. Krupa Rasane
                  </h3>
                  <p className="text-purple-400 font-semibold mb-3">
                    Faculty Advisor
                  </p>
                  <p className="text-gray-400 text-sm">
                    Professor, Department of Electronics and Communication
                    Engineering
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Email: drkruparasane@jce.edu
                  </p>
                </div>
              </div>
            </motion.div>

            
          </div>

          {/* Committee Members */}
          <motion.h3
            className="text-2xl font-bold text-center text-purple-400 mt-12 mb-6"
            {...fadeIn}
          >
            Committee Members
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Member 1 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
            >
              <img
                src="/api/placeholder/150/150"
                alt="Committee Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-purple-500"
              />
              <h4 className="text-lg font-bold text-white">Shrusti Utturkar</h4>
              <p className="text-purple-400">WIE Chair</p>
            </motion.div>

            {/* Member 2 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
              transition={{ delay: 0.1 }}
            >
              <img
                src="/api/placeholder/150/150"
                alt="Committee Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-purple-500"
              />
              <h4 className="text-lg font-bold text-white">
                Shreya Dappadhuli
              </h4>
              <p className="text-purple-400">WIE Vice-Chair</p>
            </motion.div>

            {/* Member 3 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/api/placeholder/150/150"
                alt="Committee Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-purple-500"
              />
              <h4 className="text-lg font-bold text-white">Sharada Ugare</h4>
              <p className="text-purple-400">WIE Secretary</p>
            </motion.div>

            {/* Member 4 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
              transition={{ delay: 0.3 }}
            >
              <img
                src="/api/placeholder/150/150"
                alt="Committee Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-purple-500"
              />
              <h4 className="text-lg font-bold text-white">Namrata Patil</h4>
              <p className="text-purple-400">WIE Treasurer</p>
            </motion.div>

            {/* Member 5 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <img
                src="/api/placeholder/150/150"
                alt="Committee Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-purple-500"
              />
              <h4 className="text-lg font-bold text-white">Samuilla Kustagi</h4>
              <p className="text-purple-400">Media Head</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="p-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-purple-400 mb-8"
            {...fadeIn}
          >
            Events Conducted
          </motion.h2>
          <div className="space-y-6">
            {/* Event 1 */}
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={wieWD1}
                    alt="Women's Day Celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      International Women's Day
                    </h3>
                    <span className="text-sm bg-purple-900 text-purple-200 px-2 py-1 rounded">
                      March 8, 2025
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    The IEEE Women in Engineering (WIE) group celebrated
                    International Women's Day with an inspiring program aimed at
                    empowering women in STEM fields. The event featured keynote
                    speeches from prominent female leaders, panel discussions on
                    overcoming gender barriers, and interactive workshops
                    designed to foster innovation and collaboration.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-4">50+ Attendees</span>
                    <span>Sir MV Auditorium</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Add more events here */}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-purple-400 mb-8"
            {...fadeIn}
          >
            Gallery
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-2 rounded shadow border border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-40 object-cover rounded transform hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
          <motion.div className="text-center mt-6" {...fadeIn}>
            <Link
              to="/gallery"
              className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full shadow hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View More Photos
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WIE;
