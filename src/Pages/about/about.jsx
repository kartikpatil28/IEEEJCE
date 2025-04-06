import { motion } from "framer-motion";
import { FaUsers, FaTrophy, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { Link } from "react-router-dom";
import TimelineSection from "./TimelineSection";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden py-20 px-6 md:px-20">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-blue-500 animate-pulse"></div>
          <div className="h-96 w-96 bg-purple-500 rounded-full absolute -top-20 -right-20 animate-pulse"></div>
          <div className="h-96 w-96 bg-cyan-500 rounded-full absolute -bottom-20 -left-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            IEEE JCE Student Branch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mt-6 font-light"
          >
            A Legacy of Excellence Since 2015
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <a href="/join" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transform transition hover:scale-105 hover:shadow-lg">
              Join Our Community
              <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* About Section with Floating Card Design */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 relative">
        <div className="absolute w-64 h-64 bg-blue-500 rounded-full opacity-5 -top-10 -left-10"></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 flex flex-col md:flex-row gap-12 relative overflow-hidden"
        >
          {/* Left Side: Image with Overlay */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 rounded-lg"></div>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src="https://www.targetadmission.com/img/colleges/newc/14283-383362.jpg"
              alt="IEEE JCE Student Branch"
              className="rounded-lg shadow-2xl relative z-10 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-blue-600 text-white py-1 px-3 rounded-full text-sm font-bold">Since 2015</div>
          </div>

          {/* Right Side: Text Content with Styled Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-block px-4 py-1 bg-blue-600 bg-opacity-20 rounded-full text-blue-400 font-semibold text-sm mb-4">ABOUT US</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              The IEEE JCE Experience
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Established in 2015, the IEEE JCE Student Branch has evolved into a vibrant community of <span className="text-blue-400 font-semibold">over 500 members</span>, united by a passion for technology and innovation.
              </p>
              <p>
                Our initiatives span from immersive workshops and competitive hackathons to groundbreaking research projects, providing students with hands-on experience and valuable industry connections.
              </p>
              <p className="font-semibold text-white">
                As a proud part of the IEEE North Karnataka Subsection, we continue to make significant impacts in technological advancement and student development across the region.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-700 bg-opacity-50 rounded-full px-4 py-2">
                <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                <span>100+ Members</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700 bg-opacity-50 rounded-full px-4 py-2">
                <div className="h-3 w-3 bg-purple-500 rounded-full"></div>
                <span>50+ Events</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700 bg-opacity-50 rounded-full px-4 py-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span>10+ Awards</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Statistics Section - Redesigned with Cards */}
      <div className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-blue-600 bg-opacity-20 rounded-full text-blue-400 font-semibold text-sm mb-4"
            >
              OUR IMPACT
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              By The Numbers
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full -mr-10 -mt-10"></div>
                <div className="inline-block p-4 bg-blue-600 bg-opacity-30 rounded-full mb-4">
                  <FaUsers className="text-3xl text-blue-300" />
                </div>
                <h3 className="text-6xl font-bold mb-2 text-white">100+</h3>
                <p className="text-blue-200 text-xl">Active Members</p>
                <p className="text-blue-200 text-sm mt-4 opacity-75">Building the future together</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-20 rounded-full -mr-10 -mt-10"></div>
                <div className="inline-block p-4 bg-purple-600 bg-opacity-30 rounded-full mb-4">
                  <FaUsers className="text-3xl text-purple-300" />
                </div>
                <h3 className="text-6xl font-bold mb-2 text-white">50+</h3>
                <p className="text-purple-200 text-xl">Events Conducted</p>
                <p className="text-purple-200 text-sm mt-4 opacity-75">Workshops, hackathons, and paper presentation</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-green-900 to-green-700 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-20 rounded-full -mr-10 -mt-10"></div>
                <div className="inline-block p-4 bg-green-600 bg-opacity-30 rounded-full mb-4">
                  <FaTrophy className="text-3xl text-green-300" />
                </div>
                <h3 className="text-6xl font-bold mb-2 text-white">10+</h3>
                <p className="text-green-200 text-xl">Awards Won</p>
                <p className="text-green-200 text-sm mt-4 opacity-75">Recognized for excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Achievements Section - With Modern Cards */}
      <div className="py-20 px-6 md:px-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-blue-600 bg-opacity-20 rounded-full text-white font-semibold text-sm mb-4"
            >
              OUR ACHIEVEMENTS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Sets Us Apart
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-3xl mx-auto"
            >
              Showcasing our milestones and contributions to the technology community
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achieve, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 bg-opacity-20 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-all duration-300">
                    <achieve.icon className="text-3xl text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {achieve.title}
                  </h3>
                  <p className="text-gray-400">
                    {achieve.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section - Redesigned */}
      <div className="py-20 px-6 md:px-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-5 -top-20 -right-20"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-5 -bottom-20 -left-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-blue-600 bg-opacity-20 rounded-full text-blue-400 font-semibold text-sm mb-4"
            >
              TESTIMONIALS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What People Say About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Hear from our members and partners about their IEEE JCE experience
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-lg relative"
              >
                <div className="absolute top-8 left-8 text-5xl text-blue-500 opacity-20">
                  <FaQuoteLeft />
                </div>
                <div className="relative z-10">
                  <p className="text-gray-300 text-lg italic">"{testimonial.quote}"</p>
                  <div className="mt-6 pt-6 border-t border-gray-800 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section - Modernized */}
      <div className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-blue-600 bg-opacity-20 rounded-full text-blue-400 font-semibold text-sm mb-4"
            >
              GALLERY
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Captured Moments
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              A glimpse of our events, activities, and the IEEE JCE community
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="relative group rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <h3 className="font-bold text-lg">IEEE Event {index + 1}</h3>
                  <p className="text-sm text-gray-300">Empowering students through innovation</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/gallery" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
              View All Photos
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section - Enhanced */}
      <div className="py-20 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            Become part of a vibrant network of innovators, creators, and future tech leaders. The IEEE JCE Student Branch awaits you!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/membership"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 flex items-center"
            >
              Join IEEE JCE
              <FaArrowRight className="ml-2" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <TimelineSection />
    </div>
  );
};

const achievements = [
  {
    icon: FaUsers,
    title: "Community Growth",
    description: "Over 100 active members contributing to IEEE initiatives and building a vibrant tech ecosystem at JCE.",
  },
  {
    icon: FaTrophy,
    title: "Award Winning",
    description: "Received multiple IEEE regional awards for excellence in student branch activities and innovation.",
  },
  {
    icon: GiAchievement,
    title: "Innovative Projects",
    description: "Successfully conducted research projects and hackathons with real-world applications and industry impact.",
  },
];

const testimonials = [
  {
    quote:
      "Throughout the year, our team successfully organized and executed a series of impactful events, including Creative Eye Photography Competition, Hackathon Code Quest, IEEE Day Celebrations, NKCON Events, TechTrivia Quiz, INCET 2K24, Teachers' Day Celebrations, and many more. Additionally, I had the privilege of representing our student branch at prestigious gatherings like the Office Bearers Conclave at NMIT College, Bengaluru, and the IEEE Mysore Student Congress 2K24, broadening our network and bringing back valuable insights for our community.IEEE has always been more than just an organization—it has been a platform for students to enhance their technical, professional, and leadership skills, providing them with opportunities to engage in innovative projects, competitions, and networking with industry experts. The success of this year would not have been possible without the unwavering support of my team, faculty advisors, and the enthusiastic participation of our student members.As I hand over the leadership to Abhishek Devarushi, Chair (2025), I am confident that the IEEE Student Branch will continue to scale new heights under his guidance. I encourage the new team to build upon our achievements, explore new initiatives, and keep the IEEE spirit alive.I extend my sincere gratitude to everyone who contributed to this journey, and I look forward to supporting IEEE in any way Iwa can. Wishing the new team all the success in their endeavors!",
    name: "Austin Pacheco ",
    position:'Chair, IEEE Student Branch (2024)'
  },
  {
    quote:
      "Being part of IEEE JCE has given me the opportunity to work on exciting projects and connect with industry experts. It's more than just a student branch - it's a launchpad for careers.",
    name: "Chandan",
    position:'Vice-Chair, IEEE Student Branch (2024)'
  },
];

const galleryImages = [
  "src/asset/Events/CTC/Campus-to-Corporate-14.jpg",
  "src/asset/Events/IEEE_Day/IEEE_Day_1.jpg", 
  "src/asset/Events/Conference/Conference-1.jpg",
]; 

export default AboutPage;