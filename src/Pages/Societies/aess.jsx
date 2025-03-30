import React from "react";
import { motion } from "framer-motion";


const AESS = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Gallery images array
  const galleryImages = [
    { 
      src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1743346295/assets/asset/Events/gbhjj6jsdyypllfdosci.jpg", 
      alt: "TechTriva Event" },
    { src: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1743346295/assets/asset/Events/gbhjj6jsdyypllfdosci.jpg", alt: "AESS Poster" },
    // Add more gallery images here when available
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <motion.div
        className="p-8 bg-gradient-to-r from-gray-900 to-blue-900 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* AESS Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://brand-experience.ieee.org/wp-content/uploads/2020/07/IEEE-AESS-Logo-RGB.png"
            alt="IEEE Aerospace & Electronic Systems Society Logo"
            className="h-32 mx-auto border rounded-full shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
          />
        </motion.div>
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
          {...fadeIn}
        >
          Aerospace & Electronic Systems Society
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
            Advancing innovation in aerospace, electronics, and systems
            engineering. We provide a platform for students to explore
            cutting-edge technologies, network with industry professionals, and
            develop skills for careers in aerospace and electronic systems.
          </p>
        </motion.div>
      </motion.div>

      {/* Vision and Mission Section */}
      <div className="p-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-700 hover:border-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">
                Vision
              </h2>
              <p className="text-gray-300">
                The vision of the AESS is to be essential to the worldwide
                technical community and be recognized for outstanding
                contributions in the fields of aerospace and electronic systems
                as demonstrated through the Society’s products, service and
                offerings in the areas of conferences, publications, education,
                technical operations, industry relations, and member services.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-cyan-700 hover:border-cyan-500 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                Mission
              </h2>
              <p className="text-gray-300">
                The mission of the AESS is to provide a responsive and relevant
                professional society that attracts, engages, aids, and retains a
                diverse set of members (age, culture, community – theoretical,
                managerial and applications) worldwide in the areas of our
                fields of interest as defined in our constitution. AESS will
                accomplish this through technical, chapter and society
                activities in the areas of conferences, publications, education,
                technical operations, industry relations, and member services.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Committee Section */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-blue-400 mb-8"
            {...fadeIn}
          >
            Committee
          </motion.h2>

          {/* Advisor */}
          <motion.div className="flex justify-center mb-12" {...fadeIn}>
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 max-w-xl w-full">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1743346346/assets/asset/Photos/anxznimgrkvbnro5pxlc.jpg"
                    alt="Faculty Advisor"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Dr. Krupa Rasane
                  </h3>
                  <p className="text-blue-400 font-semibold mb-3">
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
            </div>
          </motion.div>

          {/* Committee Members */}
          <motion.h3
            className="text-2xl font-bold text-center text-blue-400 mt-12 mb-6"
            {...fadeIn}
          >
            Execom
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Member 1 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
            >
              <img
                src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1743347091/assets/asset/Execom/xqub8zouzhv7ctkjozbq.jpg"
                alt="AESS Chair"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-blue-500"
              />
              <h4 className="text-lg font-bold text-white">
                Muskan Abdul Latif Dhalayat
              </h4>
              <p className="text-blue-400">AESS Chair</p>
            </motion.div>

            {/* Member 2 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
              transition={{ delay: 0.1 }}
            >
              <img
                src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1743346900/assets/asset/Execom/hlhhdgyxnrszsf3tj7xj.jpg"
                alt="Committee Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-blue-500"
              />
              <h4 className="text-lg font-bold text-white">
                Radhika Kiran Lohar
              </h4>
              <p className="text-blue-400">AESS Vice-Chair</p>
            </motion.div>

            {/* Member 3 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1743346921/assets/asset/Execom/icekiyu4smhk2pnqicyd.jpg"
                alt="Committee Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-blue-500"
              />
              <h4 className="text-lg font-bold text-white">Saniya Gijoni</h4>
              <p className="text-blue-400">AESS Secretary</p>
            </motion.div>

            {/* Member 4 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
              transition={{ delay: 0.3 }}
            >
              <img
                src="https://res.cloudinary.com/dkztwdo8h/image/upload/a_-90/assets/asset/Execom/mpv6rbd7q0shejyjvxdh"
                alt="Committee Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-blue-500"
              />
              <h4 className="text-lg font-bold text-white">Preeti Patil</h4>
              <p className="text-blue-400">AESS Treasurer</p>
            </motion.div>

            {/* Member 5 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <img
                // src="/api/placeholder/150/150"
                alt="Committee Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-blue-500"
              />
              <h4 className="text-lg font-bold text-white">Meghana Kubasad</h4>
              <p className="text-blue-400">Webmaster</p>
            </motion.div>

            {/* Member 6 */}
            <motion.div
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700 hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              {...fadeIn}
              transition={{ delay: 0.5 }}
            >
              <img
                src="/api/placeholder/150/150"
                alt="Committee Member"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3 ring-2 ring-blue-500"
              />
              <h4 className="text-lg font-bold text-white">Chetan Baloji</h4>
              <p className="text-blue-400">Media Head</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="p-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-blue-400 mb-8"
            {...fadeIn}
          >
            Celebration of Science Day
          </motion.h2>
          <div className="space-y-6">
            {/* Event 1 */}
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1743346295/assets/asset/Events/gbhjj6jsdyypllfdosci.jpg"
                    alt="Poster Presentation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      Poster Presentation
                    </h3>
                    <span className="text-sm bg-blue-900 text-blue-200 px-2 py-1 rounded">
                      March 1, 2025
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    On the eve of National Science Day, IEEE AESS organized a
                    Poster Presentation Competition, allowing students to
                    showcase their creativity and research on Life Cycle of
                    Stars, Defence and Policies, and Space Missions.
                    Participants presented innovative and well-researched
                    posters, evaluated based on content, creativity, and
                    presentation skills.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-4">8 Participants</span>
                    <span>C-109, Block C</span>
                  </div>
                  {/* Winners Section */}
                  <motion.div
                    className="bg-gray-700 p-4 rounded-lg mt-4"
                    whileHover={{ scale: 1.01 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      🏆 Winners
                    </h4>
                    <ul className="text-gray-300">
                      <li>
                        🥇 <strong>First Place:</strong> T.B.D
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Event 2 - TechTriva */}
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              {...fadeIn}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1743346295/assets/asset/Events/rcqppw2jck2hrvvqs3tf.jpg"
                    alt="Technical Quiz"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">TechTriva</h3>
                    <span className="text-sm bg-blue-900 text-blue-200 px-2 py-1 rounded">
                      17th Feb, 2024
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    TechTriva is a technical quiz competition organized by the
                    IEEE AESS Chapter, in collaboration with the IEEE Student
                    Branch and WIE, to challenge students' knowledge of
                    aerospace and electronic systems. The event featured
                    questions on AI, 5G, and various aspects of engineering.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <span className="mr-4">50 Students</span>
                    <span>JCE Belagavi</span>
                  </div>

                  {/* Winners Section */}
                  <motion.div
                    className="bg-gray-700 p-4 rounded-lg mt-4"
                    whileHover={{ scale: 1.01 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      🏆 Winners
                    </h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>
                        🥇 <strong>First Place:</strong> Vinayak C.R & Om G.B
                      </li>
                      <li>
                        🥈 <strong>Second Place:</strong> Kshiti Gaddigoudar &
                        Varsha V
                      </li>
                      <li>
                        🥉 <strong>Third Place:</strong> Abhishek S.D & Beerappa
                        Maranur
                      </li>
                      <li>
                        🥉 <strong>Third Place:</strong> Bhoomika & Goutami
                        Morajkar
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-blue-400 mb-8"
            {...fadeIn}
          >
            Gallery
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-2 rounded shadow border border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden"
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
            <button className="bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              View More Photos
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AESS;
