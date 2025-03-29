import React from "react";
import { motion } from "framer-motion";

const ComputerSociety = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section - Black Theme with Larger CS Title */}
      <div className="p-8 bg-gradient-to-r from-gray-900 to-green-900 text-white text-center">
        {/* CS Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://ieeecs-media.computer.org/wp-media/2021/12/16190445/IEEE-CS_LogoTM-orange-354x108.png"
            alt="IEEE Computer Society Logo"
            className="h-32 mx-auto border rounded-full"
          />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-2">
          Computer Society
        </h1>
        <h2 className="text-xl mb-6">IEEE JCE Student Branch</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg">
            Fostering technological innovation and excellence in computing. We
            connect students with cutting-edge developments in software
            engineering, artificial intelligence, cybersecurity, and other
            computing disciplines to prepare the next generation of technology
            leaders.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="p-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-green-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4 text-center">
                Vision
              </h2>
              <p className="text-gray-300">
                To be the leading provider of technical information, community
                services, and personalized services to the world’s computing
                professionals.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-teal-700">
              <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">
                Mission
              </h2>
              <p className="text-gray-300">
                Be essential to the global technical community and computer
                professionals everywhere and be universally recognized for the
                contributions of technical professionals in developing and
                applying technology to improve global conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Committee Section */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-8">
            Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Advisor */}
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
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
                  <p className="text-green-400 font-semibold mb-3">
                    Branch Councellor
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

            {/* Chair */}
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src="/api/placeholder/300/300"
                    alt="CS Chair"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-2/3">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Ms.Shrutika Panchkatte
                  </h3>
                  <p className="text-green-400 font-semibold mb-3">CS Chair</p>
                  <p className="text-gray-400 text-sm">
                    Electronics and Communication Engineering
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    IEEE Student Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section - Black Theme */}
      <div className="p-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-8">
            Upcoming Events
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Coming Soon!</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're excited to announce that we are planning several engaging
              events for our Computer Society members. Stay tuned for workshops,
              hackathons, and technical sessions that will enhance your skills
              and knowledge in various computing domains.
            </p>
            <div className="mt-6">
              <button className="bg-green-700 text-white px-6 py-2 rounded shadow hover:bg-green-600 transition">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - Black Theme */}
      <div className="p-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-8">
            Gallery
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Coming Soon!</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our gallery will be updated with photos from our upcoming events
              and activities. Check back soon to see highlights from our
              Computer Society initiatives!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerSociety;
