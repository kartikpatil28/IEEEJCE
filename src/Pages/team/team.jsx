import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Team() {
  const [activeFilter, setActiveFilter] = useState("All");

  const teamMembers = [
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093348/Abhishek_cu3ohf.webp",
      name: "Abhishek Devarushi",
      title: "IEEE Chair",
      category: "IEEE",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093342/Beerappa_i3gpdb.webp",
      name: "Beerappa Marannur",
      title: "IEEE Vice Chair",
      category: "IEEE",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093334/snehal_smjbyx.webp",
      name: "Snehal Suryavanshi",
      title: "Secretary",
      category: "IEEE",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093341/Darshan_iv9cnx.webp",
      name: "Darshan Tukkar",
      title: "Treasurer",
      category: "IEEE",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093333/Siddharth_xmcykj.webp",
      name: "Siddarth Jambhagi",
      title: "Media Head",
      category: "IEEE",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744792491/Vinayak_am2zxn.webp",
      name: "Vinayak A",
      title: "Membership Coordinator",
      category: "IEEE",
    },

    
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093347/Kartik_rboa4d.webp",
      name: "Kartik Patil",
      title: "Webmaster",
      category: "IEEE",
    },

    { 
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093345/Shrusti_nhcdtm.webp",
       name: "Srushti Utturkar", 
       title: "WIE Chair",
        category: "WIE" },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744792823/shreya_qq8efa.jpg",
      name: "Shreya Dappadhuli",
      title: "WIE Vice Chair",
      category: "WIE",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093348/Sharada_hl8zk6.webp",
      name: "Sharada Ugare",
      title: "WIE Secretary",
      category: "WIE",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744792561/Namrata_ce2dpy.jpg",
      name: "Namrata Mohan Patil",
      title: "WIE Treasurer",
      category: "WIE",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093339/Samuell_lyhqei.webp",
      name: "Samiulla Kustagi",
      title: "WIE Media Head",
      category: "WIE",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093346/Muskan_hpd9df.webp",
      name: "Muskan Dhalayat",
      title: "AESS Chair",
      category: "AESS",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093343/Radhika_mbv70h.webp",
      name: "Radhika Lohar",
      title: "AESS Vice-Chair",
      category: "AESS",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093340/Saniya_c7znqs.webp",
      name: "Saniya Gijoni",
      title: "AESS Secretary",
      category: "AESS",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093334/Preeti_rahjxa.webp",
      name: "Preeti Patil",
      title: "AESS Treasurer",
      category: "AESS",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093333/Meghana_qreuwo.webp",
      name: "Meghana Kubasad",
      title: "AESS Webmaster",
      category: "AESS",
    },
    {
      image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093335/Chetan_q3z82t.webp",
      name: "Chetan Baloji",
      title: "AESS Media Head",
      category: "AESS",
    },
    // {
    //   image: "https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093340/Shruti_pouqux.webp",
    //   name: "Shrutika",
    //   title: "CS Chair",
    //   category: "CS",
    // },
    
  ];

  const filters = ["All", "IEEE", "WIE", "AESS","CS"];

  const filteredMembers =
    activeFilter === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeFilter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-blue-900 to-black min-h-screen relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 sm:w-80 sm:h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative container mx-auto px-2 sm:px-4 py-10 sm:py-20">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2">
            <span className="text-white">Our </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Team
            </span>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-blue-500 mx-auto my-4"></div>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Meet the passionate individuals who drive innovation and excellence
            at IEEE Student Branch.
          </p>
        </motion.div>

        {/* College Administration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
            College <span className="text-blue-400">Administration</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Principal Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-indigo-600 p-6 sm:p-8 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-gray-200">
                    <svg className="w-12 h-12 sm:w-20 sm:h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14.016q2.906 0 5.016 2.039t2.098 4.945h-14.227q-0.047-2.906 2.098-4.945t5.016-2.039zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                    Dr.J Shivakumar
                  </h3>
                  <p className="text-purple-400 text-base sm:text-xl mb-4">Principal</p>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Leading Jain College of Engineering with a vision for excellence in technical education and research.
                  </p>
                  <div className="mt-4 sm:mt-6">
                    <a href="mailto:principal@jce.ac.in" className="text-blue-400 hover:text-blue-300 transition-colors">
                      {/* Email */}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* HOD ECE Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-cyan-600 p-6 sm:p-8 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-gray-200">
                    <svg className="w-12 h-12 sm:w-20 sm:h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14.016q2.906 0 5.016 2.039t2.098 4.945h-14.227q-0.047-2.906 2.098-4.945t5.016-2.039zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                    Prof. V.R.Bagali
                  </h3>
                  <p className="text-blue-400 text-base sm:text-xl mb-4">Head of Department, ECE</p>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Leading the Electronics and Communication Engineering department with focus on innovation and academic excellence.
                  </p>
                  <div className="mt-4 sm:mt-6">
                    <a href="mailto:hodece@jce.ac.in" className="text-blue-400 hover:text-blue-300 transition-colors">
                      {/* Email */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Branch Counsellor Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
            Branch <span className="text-blue-400">Counsellor</span>
          </h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden max-w-2xl sm:max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-6 sm:p-8 flex items-center justify-center">
                <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-gray-200">
                  {/* Replace SVG with actual image */}
                  <img
                    src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093416/Dr_Krupa_okvig3.webp"
                    alt="Dr. Krupa Rasane"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-6 sm:p-8">
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-2">
                  Dr. Krupa Rasane
                </h3>
                <p className="text-blue-400 text-base sm:text-xl mb-4">Branch Counsellor</p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  As the Branch Counsellor, Dr. Krupa Rasane provides invaluable
                  guidance and mentorship to the IEEE student branch. With
                  extensive experience in the field, she inspires students to
                  pursue innovation, excellence, and ethical practices in
                  technology. Her leadership helps bridge the gap between
                  academic learning and industry applications.
                </p>
                <div className="mt-4 sm:mt-6 flex space-x-2 sm:space-x-4">
                  <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                    {/* Email icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                    {/* Link icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Branch Advisor and Coordinator Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16 sm:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Branch Advisor Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-teal-600 p-6 sm:p-8 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-gray-200">
                    <svg className="w-12 h-12 sm:w-20 sm:h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14.016q2.906 0 5.016 2.039t2.098 4.945h-14.227q-0.047-2.906 2.098-4.945t5.016-2.039zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                    Prof. Jayashree M Rudagi
                  </h3>
                  <p className="text-green-400 text-base sm:text-xl mb-4">Branch Advisor</p>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Providing guidance and support to IEEE student activities and initiatives.
                  </p>
                  <div className="mt-4 sm:mt-6">
                    <a href="mailto:jayashreerudagi@jce.ac.in" className="text-blue-400 hover:text-blue-300 transition-colors">
                      {/* Email */}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Coordinator Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-pink-500 to-rose-600 p-6 sm:p-8 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-gray-200">
                    <svg className="w-12 h-12 sm:w-20 sm:h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14.016q2.906 0 5.016 2.039t2.098 4.945h-14.227q-0.047-2.906 2.098-4.945t5.016-2.039zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                    Prof. Deepali Patil
                  </h3>
                  <p className="text-pink-400 text-base sm:text-xl mb-4">Branch Coordinator</p>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Coordinating IEEE branch activities and facilitating student engagement.
                  </p>
                  <div className="mt-4 sm:mt-6">
                    <a href="mailto:deepalipatil@jce.ac.in" className="text-blue-400 hover:text-blue-300 transition-colors">
                      {/* Email */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Execom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">
            Execom <span className="text-blue-400">2024-25</span>
          </h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 rounded-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-4xl text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Team members grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            {filteredMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="h-48 sm:h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    loading="lazy"
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>
                <div className="relative p-4 sm:p-6">
                  <div className="absolute -top-8 sm:-top-10 left-0 right-0 flex justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-gray-800 overflow-hidden bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="text-center pt-6 sm:pt-8">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 mb-2 sm:mb-3 text-xs sm:text-base">{member.title}</p>
                    <div className="w-12 sm:w-16 h-1 bg-blue-500 mx-auto mb-2 sm:mb-4"></div>
                    <div className="flex justify-center space-x-2 sm:space-x-3 pt-1 sm:pt-2">
                      {/* Social icons placeholder */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="my-12 sm:my-24 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-5xl font-bold text-white mb-1 sm:mb-2">18</div>
              <div className="text-blue-300 text-xs sm:text-base">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-5xl font-bold text-white mb-1 sm:mb-2">5</div>
              <div className="text-blue-300 text-xs sm:text-base">WIE Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-5xl font-bold text-white mb-1 sm:mb-2">6</div>
              <div className="text-blue-300 text-xs sm:text-base">AESS Membars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-5xl font-bold text-white mb-1 sm:mb-2">1</div>
              <div className="text-blue-300 text-xs sm:text-base">CS Membars</div>
            </div>
            <div className="text-center col-span-2 md:col-span-4">
              <div className="text-2xl sm:text-5xl font-bold text-white mb-1 sm:mb-2">20+</div>
              <div className="text-blue-300 text-xs sm:text-base">Events Organized</div>
            </div>
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Interested in Joining Our Team?
          </h2>
          <p className="text-gray-300 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            We're always looking for passionate individuals to join our IEEE
            Student Branch. Connect with us to learn more about membership
            opportunities and upcoming events.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg transform transition hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Team;
