import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocietiesOpen, setIsSocietiesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/home");
  const [activeSociety, setActiveSociety] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Scroll effect for sticky shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSocietiesClick = (path, society) => {
    setActiveSociety(society);
    setIsSocietiesOpen(false);
    setActiveTab(null);
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLinkClick = (path) => {
    setActiveTab(path);
    setIsSocietiesOpen(false);
    setActiveSociety(null);
    setIsMenuOpen(false);
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
    { name: "IEEE Xplore Digital Library", url: "https://ieeexplore.ieee.org/" },
    { name: "IEEE Bangalore Section", url: "https://ieeebangalore.org/" },
    { name: "IEEE NKSS", url: "https://r10.ieee.org/north-karnataka/" },
    { name: "IEEE JCE", url: "https://www.jce.ac.in/ieee-sb/" },
    { name: "JCE", url: "https://www.jce.ac.in/" },
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
      <div className="w-full bg-black text-sm border-b border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <ul className="hidden md:flex flex-wrap items-center gap-4 text-gray-300 text-xs">
            {ieeeLinks.map((link, index) => (
              <li key={index} className="group relative">
                {link.name === "More Sites" ? (
                  <NavLink
                    to={link.url}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 no-underline"
                    onClick={() => handleLinkClick(link.url)}
                  >
                    <span className="text-white no-underline">{link.name}</span>
                  </NavLink>
                ) : (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 no-underline"
                  >
                    {link.name === "IEEE Xplore Digital Library" ? (
                      <>
                        <span className="text-white">IEEE <span className="italic text-white">Xplore</span></span>
                      </>
                    ) : (
                      <span className="text-white">{link.name}</span>
                    )}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">
            <img
              src="https://th.bing.com/th/id/R.2f05fde9d13625128ae97420e975fba0?rik=nVfgCJV%2bu72Lrg&riu=http%3a%2f%2ftttc-vts.org%2fpublic_html%2fnew%2f2017%2fwp-content%2fuploads%2fieee-logo_blue-banner.png&ehk=mZvXsGP%2fI0c4UyHy8qzx1rYdXd3yKv2fG7HCkmGkKqk%3d&risl=&pid=ImgRaw&r=0"
              className="h-8 md:h-10 object-contain"
              alt="IEEE Logo"
            />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full sticky top-0 z-50 transition-all duration-300 px-4 md:px-6 py-3 ${
          scrolled ? "bg-black/95 backdrop-blur-lg shadow-lg" : "bg-black"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/home" onClick={() => handleLinkClick("/home")}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="Go to homepage"
          >
            <img
              src="https://res.cloudinary.com/dkztwdo8h/image/upload/v1744093403/JCE-logo_tqphb8.png"
              alt="JCE Logo"
              className="h-12 md:h-16 object-contain hover:brightness-110 transition-all duration-300"
            />
            
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center gap-1 text-white font-medium text-base">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 no-underline ${
                        isActive
                          ? "text-white bg-blue-700/20 shadow"
                          : "text-white hover:bg-blue-700/10 hover:text-blue-400"
                      }`
                    }
                    aria-label={link.name}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              {/* Societies Dropdown */}
              <li className="relative group">
                <button
                  className={`px-4 py-2 rounded-full flex items-center transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isSocietiesOpen || activeSociety
                      ? "text-white bg-blue-700/20 shadow"
                      : "text-white hover:bg-blue-700/10 hover:text-blue-400"
                  }`}
                  onMouseEnter={() => setIsSocietiesOpen(true)}
                  onMouseLeave={() => setIsSocietiesOpen(false)}
                  aria-haspopup="true"
                  aria-expanded={isSocietiesOpen}
                  aria-label="Societies dropdown"
                >
                  Societies
                  <i
                    className={`fa fa-chevron-down ml-2 text-xs transition-transform duration-300 ${
                      isSocietiesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isSocietiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-black rounded-lg shadow-lg py-2 w-56 border border-gray-700 mt-2"
                      onMouseEnter={() => setIsSocietiesOpen(true)}
                      onMouseLeave={() => setIsSocietiesOpen(false)}
                    >
                      {[
                        { name: "AESS", path: "/societies/aess" },
                        { name: "Computer Society (CS)", path: "/societies/cs" },
                        { name: "Women in Engineering (WIE)", path: "/societies/wie" },
                      ].map((society) => (
                        <button
                          key={society.name}
                          onClick={() => handleSocietiesClick(society.path, society.name)}
                          className={`block w-full text-left px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            activeSociety === society.name
                              ? "text-white bg-blue-700/30"
                              : "text-white hover:bg-blue-700/20 hover:text-blue-400"
                          } transition-all duration-200`}
                          aria-label={society.name}
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
            className="lg:hidden text-white p-2 rounded-lg hover:bg-blue-700/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`} />
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/90 z-50 lg:hidden"
                onClick={toggleMenu}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="fixed right-0 top-0 h-full w-4/5 max-w-xs bg-black p-6 shadow-2xl flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">IEEE JCE</h2>
                    <button
                      onClick={toggleMenu}
                      className="text-white hover:bg-blue-700/20 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Close menu"
                    >
                      <i className="fa fa-times text-xl" />
                    </button>
                  </div>

                  <div className="space-y-6 flex-1">
                    {/* Navigation */}
                    <ul className="space-y-2">
                      {links.map((link) => (
                        <li key={link.name}>
                          <NavLink
                            to={link.path}
                            onClick={() => {
                              toggleMenu();
                              handleLinkClick(link.path);
                            }}
                            className={({ isActive }) =>
                              `block px-4 py-2 rounded-lg transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 no-underline ${
                                isActive
                                  ? "text-white bg-blue-700/30 shadow"
                                  : "text-white hover:bg-blue-700/20 hover:text-blue-400"
                              }`
                            }
                            aria-label={link.name}
                          >
                            {link.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>

                    {/* Societies */}
                    <div>
                      <h3 className="text-xs uppercase text-white mb-2 tracking-wider">Societies</h3>
                      <div className="space-y-2">
                        {[
                          { name: "AESS", path: "/societies/aess" },
                          { name: "Computer Society (CS)", path: "/societies/cs" },
                          { name: "Women in Engineering (WIE)", path: "/societies/wie" },
                        ].map((society) => (
                          <button
                            key={society.name}
                            onClick={() => {
                              handleSocietiesClick(society.path, society.name);
                              toggleMenu();
                            }}
                            className="block w-full text-left px-4 py-2 text-base text-white hover:bg-blue-700/20 hover:text-blue-400 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label={society.name}
                          >
                            {society.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mt-8">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center text-white hover:bg-blue-700/20 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          aria-label={link.icon}
                        >
                          <i className={`fab fa-${link.icon} text-xl`} />
                        </a>
                      ))}
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