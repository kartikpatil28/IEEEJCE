import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import logos (ensure the paths are correct)
// import jceLogo from "../asset/Logos/JCE-logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocietiesOpen, setIsSocietiesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/home");
  const [activeSociety, setActiveSociety] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSocietiesClick = (path, society) => {
    setActiveSociety(society);
    setIsSocietiesOpen(false);
    setActiveTab(null);
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  const handleLinkClick = (path) => {
    setActiveTab(path);
    setIsSocietiesOpen(false);
    setActiveSociety(null);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Execom", path: "/execoms" },
    { name: "Contact", path: "/contact" },
    { name: "Membership", path: "/membership" },
  ];

  const ieeeLinks = [
    { name: "IEEE.org", url: "https://www.ieee.org/" },
    {
      name: "IEEE Xplore Digital Library",
      url: "https://ieeexplore.ieee.org/",
    },
    { name: "IEEE Bangalore Section", url: "https://ieeebangalore.org/" },
    { name: "IEEE NKSS", url: "https://r10.ieee.org/north-karnataka/" },
    { name: "IEEE JCE", url: "https://www.jce.ac.in/ieee-sb/" },
    { name: "vTools", url: "https://vtools.vtools.ieee.org/" },
    { name: "More Sites", url: "https://www.ieee.org/sitemap.html" },
  ];

  const socialLinks = [
    { icon: "instagram", url: "#" },
    { icon: "linkedin", url: "#" },
    { icon: "twitter", url: "#" },
  ];

  return (
    <>
      {/* IEEE Global Navigation Bar */}
      <div className="w-full bg-black text-sm border-b border-blue-900 shadow-sm py-2">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex justify-center md:justify-between items-center">
          {/* Mobile View - IEEE Logo centered */}
          <div className="md:hidden flex justify-center w-full">
            <a
              href="https://www.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://th.bing.com/th/id/R.2f05fde9d13625128ae97420e975fba0?rik=nVfgCJV%2bu72Lrg&riu=http%3a%2f%2ftttc-vts.org%2fpublic_html%2fnew%2f2017%2fwp-content%2fuploads%2fieee-logo_blue-banner.png&ehk=mZvXsGP%2fI0c4UyHy8qzx1rYdXd3yKv2fG7HCkmGkKqk%3d&risl=&pid=ImgRaw&r=0"
                className="h-10"
                alt="IEEE Logo"
              />
            </a>
          </div>

          {/* Desktop View - IEEE Links and Logo */}
          <div className="hidden md:flex justify-between items-center w-full">
            <ul className="flex flex-wrap items-center gap-4">
              {ieeeLinks.map((link, index) => (
                <li key={index} className="relative group">
                  {link.name === "More Sites" ? (
                    <NavLink
                      to={link.url}
                      className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap no-underline text-xs lg:text-sm"
                      onClick={() => handleLinkClick(link.url)}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
                    </NavLink>
                  ) : (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap no-underline text-xs lg:text-sm"
                    >
                      {link.name === "IEEE Xplore Digital Library" ? (
                        <>IEEE <span className="italic">Xplore</span></>
                      ) : (
                        link.name
                      )}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="https://www.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <img
                src="https://th.bing.com/th/id/R.2f05fde9d13625128ae97420e975fba0?rik=nVfgCJV%2bu72Lrg&riu=http%3a%2f%2ftttc-vts.org%2fpublic_html%2fnew%2f2017%2fwp-content%2fuploads%2fieee-logo_blue-banner.png&ehk=mZvXsGP%2fI0c4UyHy8qzx1rYdXd3yKv2fG7HCkmGkKqk%3d&risl=&pid=ImgRaw&r=0"
                className="h-10"
                alt="IEEE Logo"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full shadow-xl px-4 md:px-6 py-2 ${
          scrolled ? "bg-black/95 backdrop-blur-md" : "bg-black"
        } text-white sticky top-0 z-50 transition-all duration-300 border-b border-white/10`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              // src={jceLogo}
              alt="JCE Logo"
              className="h-20 md:h-24 object-contain filter drop-shadow-md hover:brightness-110 transition-all"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-1 md:space-x-2 text-base font-medium">
              {links.map((link) => (
                <li key={link.name} className="relative group">
                  <NavLink
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={({ isActive }) => {
                      if (isActive) setActiveTab(link.path);
                      return `px-3 py-2 rounded-lg transition-all duration-300 relative no-underline flex flex-col items-center ${
                        isActive
                          ? "text-white font-semibold bg-blue-900/30 shadow-md"
                          : "text-gray-300 hover:text-white hover:bg-blue-900/20"
                      }`;
                    }}
                  >
                    {link.name}
                    {activeTab === link.path && (
                      <motion.div
                        layoutId="underline"
                        className="w-2/3 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 absolute -bottom-1 rounded-full shadow-glow"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                  </NavLink>
                </li>
              ))}

              {/* Societies Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setIsSocietiesOpen(true)}
                onMouseLeave={() => setIsSocietiesOpen(false)}
              >
                <button
                  className={`px-3 py-2 rounded-lg transition-all duration-300 relative no-underline flex items-center ${
                    isSocietiesOpen || activeSociety
                      ? "text-white font-semibold bg-blue-900/30 shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-blue-900/20"
                  }`}
                >
                  Societies
                  <i
                    className={`fa fa-chevron-down ml-2 text-xs transition-transform duration-300 ${
                      isSocietiesOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                <AnimatePresence>
                  {isSocietiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-black rounded-lg shadow-xl py-2 w-56 border border-white/10 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 z-0"></div>
                      {[
                        { name: "AESS", path: "/societies/aess" },
                        { name: "Computer Society (CS)", path: "/societies/cs" },
                        { name: "Women in Engineering (WIE)", path: "/societies/wie" }
                      ].map((society) => (
                        <button
                          key={society.name}
                          onClick={() => handleSocietiesClick(society.path, society.name)}
                          className={`block px-4 py-2 w-full text-left relative z-10 ${
                            activeSociety === society.name
                              ? "text-white font-semibold bg-blue-900/30"
                              : "text-gray-300 hover:text-white hover:bg-blue-900/20"
                          } transition-all duration-200`}
                        >
                          {society.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white bg-gradient-to-br from-white/15 to-white/5 p-2 rounded-lg hover:from-white/20 hover:to-white/10 transition-all duration-300 shadow-md border border-white/10"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden"
                onClick={toggleMenu}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="fixed right-0 top-0 h-screen w-4/5 bg-black overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Mobile Menu Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-white">IEEE JCE</h2>
                      <button
                        onClick={toggleMenu}
                        className="text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </div>

                    {/* Logo display */}
                    <div className="mb-6 bg-gradient-to-br from-white/10 to-white/5 p-3 rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                      <img src={jceLogo} alt="JCE Logo" className="h-20" />
                    </div>

                    {/* Navigation Links */}
                    <div className="mb-6 overflow-y-auto">
                      <h3 className="text-sm uppercase text-blue-300 mb-2 font-semibold">
                        Navigation
                      </h3>
                      <ul className="flex flex-col gap-1">
                        {links.map((link) => (
                          <li key={link.name}>
                            <NavLink
                              to={link.path}
                              onClick={() => {
                                toggleMenu();
                                handleLinkClick(link.path);
                              }}
                              className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg transition-colors ${
                                  isActive
                                    ? "bg-blue-900/30 text-white font-semibold"
                                    : "text-gray-300 hover:bg-blue-900/20 hover:text-white"
                                }`
                              }
                            >
                              {link.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Societies Section */}
                    <div className="mb-6">
                      <h3 className="text-sm uppercase text-blue-300 mb-2 font-semibold">
                        Societies
                      </h3>
                      <div className="space-y-1">
                        {[
                          { name: "AESS", path: "/societies/aess" },
                          { name: "Computer Society (CS)", path: "/societies/cs" },
                          { name: "Women in Engineering (WIE)", path: "/societies/wie" }
                        ].map((society) => (
                          <button
                            key={society.name}
                            onClick={() => {
                              handleSocietiesClick(society.path, society.name);
                              toggleMenu();
                            }}
                            className="block w-full px-4 py-2 text-left rounded-lg text-gray-300 hover:bg-blue-900/20 hover:text-white transition-colors"
                          >
                            {society.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* IEEE Links */}
                    <div className="mb-6">
                      <h3 className="text-sm uppercase text-blue-300 mb-2 font-semibold">
                        IEEE Links
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {ieeeLinks.map((link, index) => (
                          link.name === "More Sites" ? (
                            <NavLink
                              key={index}
                              to={link.url}
                              onClick={() => {
                                toggleMenu();
                                handleLinkClick(link.url);
                              }}
                              className="text-sm text-blue-300 bg-blue-900/20 px-3 py-1.5 rounded-md hover:bg-blue-900/30 transition-colors text-center"
                            >
                              {link.name}
                            </NavLink>
                          ) : (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-300 bg-blue-900/20 px-3 py-1.5 rounded-md hover:bg-blue-900/30 transition-colors text-center"
                            >
                              {link.name === "IEEE Xplore Digital Library" ? "IEEE Xplore" : link.name}
                            </a>
                          )
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex justify-center gap-4">
                        {socialLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center text-gray-300 hover:bg-blue-900/30 hover:text-white transition-colors"
                          >
                            <i className={`fab fa-${link.icon}`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}

export default Navbar;