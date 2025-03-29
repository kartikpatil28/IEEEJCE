import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200">
      {/* Hero Section */}
      <motion.div 
        className="relative py-20 px-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            {...fadeIn}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Have questions or want to collaborate? We'd love to hear from you.
            Reach out to us through any of the channels below.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-blue-400 mb-8">Contact Information</h2>
            
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700">
                <FaMapMarkerAlt className="text-blue-400 text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-400">Jain College of Engineering</p>
                  <p className="text-gray-400">599/2 T.S. Nagar, Hunchanhatti Road</p>
                  <p className="text-gray-400">Macche, Belagavi - 590014</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700">
                <FaPhone className="text-blue-400 text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400">+91 831 241 1333</p>
                  <p className="text-gray-400">+91 831 241 1644</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700">
                <FaEnvelope className="text-blue-400 text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">ieee@jce.edu</p>
                  <p className="text-gray-400">principal@jce.edu</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-gray-600 hover:text-white transition-all duration-300"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-blue-400 mb-8">Send us a Message</h2>
            <div className="space-y-8">
              <p className="text-gray-300">
                Click the button below to send us an email directly. We'll get back to you as soon as possible.
              </p>
              
              {/* Email Options */}
              <div className="space-y-4">
                <a 
                  href="mailto:ieee@jce.edu?subject=Query%20for%20IEEE%20JCE%20Student%20Branch"
                  className="flex items-center justify-between p-4 bg-gray-700/50 border border-gray-600 rounded-lg hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-blue-400 text-xl" />
                    <div>
                      <p className="font-medium text-white">General Inquiries</p>
                      <p className="text-sm text-gray-400">ieee@jce.edu</p>
                    </div>
                  </div>
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>

                <a 
                  href="mailto:principal@jce.edu?subject=Query%20for%20IEEE%20JCE%20Student%20Branch"
                  className="flex items-center justify-between p-4 bg-gray-700/50 border border-gray-600 rounded-lg hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-blue-400 text-xl" />
                    <div>
                      <p className="font-medium text-white">Administrative Inquiries</p>
                      <p className="text-sm text-gray-400">principal@jce.edu</p>
                    </div>
                  </div>
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>

              {/* Quick Links */}
              <div className="pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Contact Options</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="tel:+918312411333"
                    className="flex items-center justify-center space-x-2 p-3 bg-gray-700/50 border border-gray-600 rounded-lg hover:border-blue-500 transition-all duration-300"
                  >
                    <FaPhone className="text-blue-400" />
                    <span className="text-gray-300">Call Us</span>
                  </a>
                  <a 
                    href="https://linkedin.com/company/ieee-jce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 bg-gray-700/50 border border-gray-600 rounded-lg hover:border-blue-500 transition-all duration-300"
                  >
                    <FaLinkedin className="text-blue-400" />
                    <span className="text-gray-300">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Note */}
              <div className="text-center text-sm text-gray-400 mt-6">
                <p>We typically respond within 24-48 hours during business days.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-16"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <div className="rounded-xl overflow-hidden border border-gray-700">
            <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4">
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">599/2 T.S. Nagar, Hunchanhatti Road, Macche, Belagavi - 590014</p>
            </div>
            <div className="h-[400px]">
              <iframe
                title="Jain College of Engineering Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.9511244143135!2d74.48631007507475!3d15.854923184739655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf61b4c9c35e15%3A0x834c3caca29840b8!2sJain%20College%20of%20Engineering%20(JCE)!5e0!3m2!1sen!2sin!4v1709636049499!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700 p-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">Click the map to get directions</p>
                <a 
                  href="https://www.google.com/maps/dir//Jain+College+of+Engineering+(JCE)/@15.8549232,74.4863101,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbf61b4c9c35e15:0x834c3caca29840b8!2m2!1d74.488885!2d15.854923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <span>Get Directions</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;