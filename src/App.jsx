import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/Pages/Home/home.jsx";
import About from "../src/Pages/about/about.jsx";
import Events from "../src/Pages/events/event.jsx";
import Gallery from "../src/Pages/gallery/gallery.jsx";
import Team from "../src/Pages/team/team.jsx";
import Contact from "../src/Pages/contact/contact.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import Footer from "../src/Components/footer.jsx";
import Execoms from "../src/Pages/Execoms/execoms.jsx";
import Societies from "../src/Pages/Societies/societies.jsx";
import AESS from "../src/Pages/Societies/aess.jsx";
import CS from "../src/Pages/Societies/cs.jsx";
import WIE from "../src/Pages/Societies/wie.jsx";
import Membership from "../src/Pages/Membership/membership.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      <BrowserRouter>
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/execoms" element={<Execoms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/societies" element={<Societies />}>
              <Route path="aess" element={<AESS />} />
              <Route path="cs" element={<CS />} />
              <Route path="wie" element={<WIE />} />
            </Route>
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;