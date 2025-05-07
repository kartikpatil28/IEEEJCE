import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-6 font-poppins">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden transform -translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity="0.25"
            className="fill-current text-blue-900"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity="0.5"
            className="fill-current text-blue-800"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-blue-700"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm items-start">
          {/* Column 1 - Join IEEE */}
          <div className="text-center md:text-left transform hover:scale-105 transition-transform duration-300">
            <h5 className="text-2xl font-bold mb-4 text-white">Join IEEE</h5>
            <p className="mb-4 text-white">
              Unlock opportunities, connect with peers, and access exclusive resources by joining IEEE.
            </p>
            <a
              href="https://www.ieee.org/membership/join/index.html"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Join IEEE Today!
            </a>
          </div>

          {/* Column 2 - Useful Links */}
          <div className="text-center md:text-left">
            <h5 className="text-2xl font-bold mb-4 text-white">Useful Links</h5>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Events", href: "/events" },
                { name: "Membership", href: "/membership" },
                { name: "IEEE", href: "https://www.ieee.org/" },
                { name: "Region 10", href: "https://www.ieeer10.org/" },
                { name: "Bangalore Section", href: "https://ieeebangalore.org/" },
                { name: "IEEE Collaborate", href: "https://ieee-collabratec.ieee.org/" },
                { name: "Global IEEE Membership", href: "https://www.ieee.org/membership/join/global-membership.html" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-blue-400 transition duration-300 flex items-center group no-underline"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Societies */}
          <div className="text-center md:text-left">
            <h5 className="text-2xl font-bold mb-4 text-white">Societies</h5>
            <ul className="space-y-3">
              {[
                { name: "Computer Society", href: "https://www.computer.org/" },
                { name: "Women in Engineering", href: "https://wie.ieee.org/" },
                { name: "Aerospace and Electronic Systems Society", href: "https://ieee-aess.org/" },
                { name: "Communication Society(ComSoc)", href: "https://www.comsoc.org/" },
                { name: "Power & Energy Society(PES)", href: "https://ieee-pes.org/" }
              ].map((society) => (
                <li key={society.name}>
                  <a
                    href={society.href}
                    className="text-white hover:text-blue-400 transition duration-300 flex items-center group no-underline"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform group-hover:scale-150 transition-transform"></span>
                    {society.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div className="text-center md:text-left">
            <h5 className="text-2xl font-bold mb-4 text-white">Contact Us</h5>
            <ul className="space-y-3 text-white">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt w-6 text-blue-400"></i>
                599/2 T.S. Nagar Hunchanhatti Road
              </li>
              <li className="flex items-center">
                <i className="fas fa-building w-6 text-blue-400"></i>
                Macche Belagavi 590014
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone w-6 text-blue-400"></i>
                +91 831 2411192
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope w-6 text-blue-400"></i>
                info[at]jainbgm.in
              </li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a
                href="https://wa.me/your-whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300 no-underline"
              >
                <i className="fab fa-whatsapp text-2xl text-green-500 hover:text-green-400"></i>
              </a>
              <a
                href="https://www.instagram.com/ieee_jce?igsh=MXNwZ2t4MHQ2YWtoeg=="
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300 no-underline"
              >
                <i className="fab fa-instagram text-2xl text-pink-500 hover:text-pink-400"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-jce?trk=feed-detail_main-feed-card_feed-actor-nam"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300 no-underline"
              >
                <i className="fab fa-linkedin text-2xl text-blue-500 hover:text-blue-400"></i>
              </a>
              <a
                href="https://x.com/JCE_IEEE?t=-OojvO9YY06Wib1wzoaTeg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300 no-underline"
              >
                <i className="fab fa-x-twitter text-2xl text-white hover:text-gray-300"></i>
              </a>
              <a
                href="https://x.com/JCE_IEEE?t=-OojvO9YY06Wib1wzoaTeg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300 no-underline"
              >
                <i className="fab fa-github text-2xl text-white hover:text-gray-300"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-white text-sm mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-lg">
              &copy; {new Date().getFullYear()} All rights reserved JCE IEEE
            </p>
            <p className="text-white">
              Made with <span className="text-red-500">❤️</span> by JCE IEEE Web Team 2025
            </p>
            <p className="text-white">
              Address: #599/2 T.S. Nagar Hunchanhatti Road Macche Belagavi 590014
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </footer>
  );
};

export default Footer;