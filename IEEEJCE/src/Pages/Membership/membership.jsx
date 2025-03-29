import React, { useState, useEffect } from 'react';

const Membership = () => {
  // Animation on scroll effect
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  // Sample gallery data (replace with your actual data)
  const galleryData = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      title: "IEEE Hackathon 2023",
      description: "A 24-hour hackathon where students collaborated to build innovative solutions for real-world problems.",
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Tech Talk: AI & Machine Learning",
      description: "An insightful session on the latest trends in AI and machine learning, featuring industry experts.",
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      title: "Workshop: IoT for Beginners",
      description: "Hands-on workshop introducing students to the basics of IoT and its applications.",
    },
    {
      id: 4,
      image: "/api/placeholder/400/300",
      title: "IEEE Women in Engineering",
      description: "A networking event celebrating the achievements of women in engineering and technology.",
    },
  ];

  const benefits = [
    {
      title: "Access to IEEE Xplore Digital Library",
      description: "Get unlimited access to over 5 million documents, including journals, conference papers, and standards.",
      icon: "📚"
    },
    {
      title: "Professional Development",
      description: "Enhance your skills with online courses, certifications, and tutorials through IEEE's Learning Network.",
      icon: "🚀"
    },
    {
      title: "Career Resources",
      description: "Access the IEEE Job Site, career tools, and resources to advance your career.",
      icon: "💼"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with professionals and experts in your field through IEEE events, conferences, and local chapters.",
      icon: "🌐"
    },
    {
      title: "Discounts on Conferences and Publications",
      description: "Save on registration fees for IEEE conferences and get discounts on IEEE publications.",
      icon: "💰"
    },
    {
      title: "IEEE Standards Association",
      description: "Participate in the development of global standards that shape the future of technology.",
      icon: "📋"
    },
    {
      title: "IEEE Societies and Technical Councils",
      description: "Join specialized communities to collaborate on cutting-edge research and innovations.",
      icon: "👥"
    },
    {
      title: "Student Benefits",
      description: "Access scholarships, grants, competitions, and leadership opportunities through IEEE student branches.",
      icon: "🎓"
    }
  ];

  const joinSteps = [
    "Visit the IEEE Membership Page",
    "Contact your college's IEEE student branch membership coordinator for guidance",
    "Complete the registration form and select the IEEE society you wish to join",
    "Start your IEEE journey and unlock a world of opportunities!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section with parallax effect */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900">
          {/* Abstract tech pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '24px 24px'
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl mb-6 text-white">
            Why Join <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 font-extrabold">IEEE?</span>
          </h1>
          <p className="mt-6 text-xl max-w-3xl text-blue-100">
            Become part of a global community of over 400,000 professionals and students in more than 160 countries. 
            Unlock opportunities to grow, innovate, and lead in your field.
          </p>
          <div className="mt-10">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-blue-900 bg-white hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Join IEEE Today
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits-section" className="animate-on-scroll max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-4">Member Benefits</span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Why IEEE Matters</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 mb-6 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            IEEE provides unparalleled opportunities for students, researchers, and industry professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col ${isVisible['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-8 flex-1">
                <div className="w-12 h-12 flex items-center justify-center text-3xl mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Gallery Section */}
      <div id="events-section" className="animate-on-scroll bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible['events-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-4">What We Do</span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Featured Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 mb-6 rounded-full"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the exciting events and activities organized by IEEE chapters.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {galleryData.map((event, index) => (
              <div 
                key={event.id} 
                className={`group rounded-2xl bg-white shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${isVisible['events-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-56 w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-blue-900 to-indigo-900 bg-opacity-90 group-hover:bg-opacity-90">
                  <div className="p-6 text-center text-white">
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-blue-100">{event.description}</p>
                    <button className="mt-4 px-4 py-2 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Join Section */}
      <div id="join-section" className="animate-on-scroll bg-gradient-to-br from-blue-800 to-indigo-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible['join-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-4">Get Started</span>
            <h2 className="text-4xl font-bold sm:text-5xl">How to Join IEEE</h2>
            <div className="w-24 h-1 bg-blue-300 mx-auto mt-6 mb-6 rounded-full"></div>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Follow these simple steps to become a member of the IEEE community through your student branch.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {joinSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex-1 bg-blue-800 bg-opacity-50 rounded-2xl p-8 transition-all duration-500 transform ${isVisible['join-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 text-white font-bold text-2xl mb-6 shadow-lg">
                  {index + 1}
                </div>
                <p className="text-center text-lg">{step}</p>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 transform ${isVisible['join-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-blue-900 bg-white hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your IEEE Journey
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="animate-on-scroll bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible['contact-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-4">Get In Touch</span>
            <h2 className="text-4xl font-bold text-gray-900">Contact Your Coordinator</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 mb-6 rounded-full"></div>
          </div>
          
          <div className={`bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-xl overflow-hidden transition-all duration-1000 transform ${isVisible['contact-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl mb-8 md:mb-0 md:mr-8">
                  👤
                </div>
                
                <div className="space-y-6 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Vinayak Agasimani</h3>
                    <p className="text-blue-700 font-medium">IEEE Membership Coordinator</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                        ✉️
                      </div>
                      <p className="text-gray-700">vinayakagasimani1@gmail.com</p>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                        📱
                      </div>
                      <p className="text-gray-700">+91 81238 95082</p>
                    </div>
                  </div>
                  
                  <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Send a Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Membership;