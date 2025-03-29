import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock API function to fetch event data
const fetchEventData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        // Past events data
        pastEvents: [
          {
            title: "Internation Women's Day Celebration",
            date: "8 March 2025",
            description: "The **Women's Day event** conducted by **WIE (Women in Engineering), IEEE** was a celebration of women's contributions to science, technology, and engineering. The event featured inspiring talks, interactive sessions, and networking opportunities, empowering attendees with knowledge and motivation. Various activities highlighted the importance of gender diversity and inclusivity in STEM fields. The event successfully fostered a spirit of encouragement and recognition for women engineers, reinforcing the need for equal opportunities and innovation-driven progress. ",
            image: "src/asset/Events/WIE_WD/WIE_WD_1.jpg",
            highlights: ["Women's Day", "WIE", "IEEE"]
          },
          {
            title: "A hands on workshop on 'Java Course'",
            date: "2025-03-3",
            description: "The **Hands-on Java Course** provided participants with practical experience in Java programming, covering fundamental to advanced concepts. The course included interactive coding sessions, real-world problem-solving, and project-based learning to enhance proficiency in object-oriented programming, data structures, and algorithms. Participants gained hands-on experience in building Java applications, improving their coding efficiency, and understanding best practices. The course aimed to bridge the gap between theoretical knowledge and practical implementation, making it ideal for students and professionals looking to strengthen their Java skills.",
            image: "src/asset/Events/CTC/Campus-to-Corporate-2.jpg",
            highlights: ["Java", "Hands-on", "Workshop","Programming"]
          }, 
          {
            title: "AESS Poster Making Competition",
            date: "2024-01-17",
            description: "On the eve of National Science Day, IEEE AESS organized a Poster Presentation Competition, allowing students to showcase their creativity and research on Life Cycle of Stars, Defence and Policies, and Space Missions. Participants presented innovative and well-researched posters, evaluated based on content, creativity, and presentation skills. The event saw enthusiastic participation, with winners receiving certificates and prizes. It successfully promoted scientific exploration and effective communication among students.",
            image: "src/asset/Events/AESS-poster.jpg",
            highlights: ["Poster Making", "Competition", "Science"]
          },
            
          {
            title: "A talk on 'Navigating Success: A Roadmap For Placement Excellence' By Alumni",
            date: "2024-01-17",
            description: "Around 100 students have attended this talk and the presence of all the department faculty made the event successful. Alumni Miss Bhoomika Kadabi explained the importance of oncampus and also highlighted on the process of interview. And also explained how to prepare for the interview, what are do's and don'ts of resume writing. At the outset the event was successful as alumni shared her experience as a student as well as a professional.",
            image: "src/asset/Aero_Talk/Bhoomika_alumni.jpg",
            highlights: ["100+ participants", "Industry mentors","Alumni", "Guidance"]
          },
          {
            title: "TechTriva, a technical quiz",
            date: "17/02/2024",
            description: "The intention of this technical quiz is to evaluate one's own understanding in the field of AI, 5G and Engineering life. JCE IEEE student branch conducted technical quiz on AI , 5G and Engineering life for all the students across the department on 17th Feb 2024.",
            image: "src/asset/Events/Techtriva.jpg",
            highlights: ["5G", "AI", "Aptitude"]
          },
          {
            title: "Inauguration of IEEE-WIE-AESS student chapter 2024",
            date: "04/03/2024",
            description:
             "IEEE SB, WiE & AESS was inaugurated on 4th March 2024. The basic objective is to make students aware of the basic motto of IEEE, WiE and AESS students branch chapters which provides a platform to students where they can interact with their peer group from around the section and also with the professional members from around the globe. Several activities that would help the students in fostering their core knowledge and at the same time nurture their leadership and managerial skills are being planned as a part of the academic year.",
            image: "src/asset/Aero_Talk/2024_inaugration.jpg",
            highlights: ["Inaugration","IEEE","WIE","AESS"]
          },
          {
            title: "Celebration of International Women's Day on the Theme of 'Inspire Inclusion'",
            date: "13 MARCH 2024",
            description: 
            "The session was organized by the Student Engagement Cell in association with PHC Kineye,NSS Unit-1 and JCE IEEE, WIE STUDENT BRANCH. The speakers were Dr. Chandra Metgud,Professor in Dept. Of Community Medicine, JNMC and Dr. Rajesh Kulkarni, Associate Professor in Dept. Of Community Medicine, JNMC. Our Guests gave us an excellent talk on Importance of Women Empowerment followed by an oath taking ceremony by the JNMC Students as well. The event started with a JGI prayer and Innovation song. Principal and Director Dr. J. Shivakumar addressed the gathering followed by Dr. Chandra Metgud and Inspector Dr. Rajesh Kulkarni who spoke on the importance of women's day and Electoral ID card/voting. Prof. Deepali Patil proposed the vote of thanks. The venue was Sir. M. V. Auditorium and the time was 12 PM.",
            image: "src/asset/Events/IEEE-WIE-AESS-inauguration.jpg",
            highlights: ["Community Service","Women's Day","Electoral ID card/voting"]
          },
          {
            title: "5th International Conference of Emerging Technologies INCET – 2024, Technically Co-sponsored by IEEE Bangalore Section.",
            date: "24/05/2024",
            description: "Top themes that emerged when comparing the insights gained at each of the conference: The theme of the conference is 'Emerging Technologies'. INCET is the place where researchers and practitioners can bring together different perspectives to address a common goal. INCET-2024 is the premier conference of Asian Pacific exchanging technical research in Emerging in Technology and provides attendees with a unique opportunity to present their research work.",
            image: "src/asset/Events/IEEE-WIE-AESS-inauguration.jpg",
            highlights: ["Conference","Emerging Technologies","Research"]
          },
          {
            title: "Career guidance for ECE students in Défense and Aerospace",
            date: "19-06-2024",
            description: "At the outset around 60 students were attended the talk.Overall students understood that the aerospace and defense industry is one of the critical sectors of the global economy. It drives innovation, creates jobs and industries, and has a massive impact on international and national security. Students had good interaction with resource person Mr Amit Pathak Regional director Asia Pacific defence sustainment customer and account management, collins aerospace.",
            image: "src/asset/Aero_Talk/Aero_talk.jpg",
            highlights: ["Defense","Aerospace","Industry"]
          },
          {
            title: "Expert Talk on 'Entrepreneurisl Development & Small Business Enterprise'",
            date: "01-07-2024",
            description: "At the outset around 96 students have attended the talk.verall students able to understand entrepreneurship, essential Communication skills for their career, sources of business ideas, how to identify a business opportunity. Key characteristics of a promising business opportunity. Students got the knowledge about how to write a good business Plan and how to create a financial plan for your set up. Students had good interaction with resource person Dr. Poornima M.Charantimath Emeritus Professor, IEMS Hubli and GM University, Davangere <br>Event was conducted for 6th semester students to give information how entrepreneurs bring new ideas and solutions to the market, fostering innovation and pushing industries forward and introduce the students regarding how small businesses are significant contributors to employment generation. They create jobs not only directly through their own operations but also indirectly through their supply chains and support services. At the outset around 96 students have attended the talk. Overall students. Students had good interaction with resource person Dr. Poornima Charanthimath.",
            image: "src/asset/Aero_Talk/Poornima_mam.jpg",
            highlights: ["Accountability", "Continuous learning", "Competency", "Team Work", "Holistic Development", "Societal Responsibility"]
          },
          {
            title: "Campus to corporate",
            date: "15-07-2024",
            description: "Main objective of the event is to improve students' chances of securing employment by equipping them with the necessary skills, such as resume writing, interview techniques, and professional etiquette. To instil a sense of professionalism, including corporate ethics, work culture, and the importance of punctuality and responsibility.",
            image: "src/asset/Events/CTC/Campus-to-Corporate-14.jpg",
            highlights: ["Resume Writing", "Interview Techniques", "Professional Etiquette"]
          },
          {
            title: "Teacher's Day celebration",
            date: "5th September 2024",
            description: "The objective of the event was to celebrate Teacher's Day, honoring the contributions of educators and fostering a sense of appreciation and respect for the teaching profession within the Department of Electronics and Communication at Jain College of Engineering, Belagavi. The involvement of the IEEE student branch suggests a further objective of promoting student engagement and leadership within the department.",
            image: "src/asset/Events/IEEE-WIE-AESS-inauguration.jpg",
            highlights: ["Teacher's Day", "Celebration", "Department of Electronics and Communication"]
          },
          {
            title: "IEEE Day celebration",
            date: "5th October 2024",
            description: "The IEEE Day 2024 celebration at Jain College of Engineering, Belagavi, organized by the IEEE student branch, aimed to commemorate the contributions of the Institute of Electrical and Electronics Engineers (IEEE) to the field of technology and engineering. The event celebrated the achievements of the IEEE and its members, highlighting the importance of technology and innovation in shaping the future.",
            image: "src/asset/Events/IEEE_Day/IEEE_Day_1.jpg",
            highlights: ["IEEE Day", "Celebration", "Department of Electronics and Communication"]
          },
          {
            title: "Tech Talk on Career Guidance",
            date: "23rd October 2024",
            description: "Dr. Sushant Mutagekar from IIT Madras delivered the talk on October 23, 2024, at the Sir M. Visvesvaraya Hall in Jain College of Engineering. The event was facilitated by the IEEE AESS (Aerospace and Electronic Systems Society) student branch chapter. Photos show Dr. Mutagekar delivering the talk and receiving a memento, indicating appreciation for his contribution. Professors G.P. Kadam and Deepali Patil coordinated the event, while Prof. V.R. Bagali (HOD) and Dr. J. Shivakumar (Principal & Director) oversaw it. The presence of an audience suggests that students from the Electronics and Communication Engineering department, and possibly other departments, attended the talk.",

            image: "src/asset/Aero_Talk/Career_Dr_Sushant.jpg",
            highlights: ["Career Guidance", "Department of Electronics and Communication"]
          },
          {
            title: "IEEE XTREAM 24h Hackathon",
            date: "26TH October 2024",
            description: "The IEEE Xtreme 2024 programming competition, hosted by the Jain College of Engineering, Belagavi, IEEE Student Branch, aimed to provide students with a challenging and engaging platform to test and enhance their programming skills. The objective was to foster a competitive spirit, encourage teamwork and problem-solving, and promote interest in computer science and programming among the student community. It also likely served as a way to identify and recognize talented programmers within the college.The competition involved teams of students working together to solve a set of programming problems within a specified time frame. The photos depict students actively engaged in coding on their laptops, indicating the hands-on nature of the competition. A group photo shows the participants and organizers, highlighting the collaborative atmosphere of the event. While specific details about the competition format and results are not available in the provided images, the overall focus was clearly on promoting programming skills and fostering a competitive environment among students.",
            image: "src/asset/Aero_Talk/IEEE_Xtreme.jpg",
            highlights: ["Programming", "Competition", "Teamwork"]
          },
          {
            title: "IEEE Day celebration",
            date: "8th and 9th November 2024",
            description: "The objective of the IEEE Membership Drive 2024, hosted by the Department of Electronics and Communication at Jain College of Engineering, Belagavi, in association with IEEE WIE (Women in Engineering) and AESS (Aerospace and Electronic Systems Society), was to recruit new student members for the IEEE student branch. The drive aimed to increase student participation in IEEE activities, expose them to the benefits of IEEE membership (such as access to technical resources, networking opportunities, and professional development), and expand the reach and impact of the IEEE student branch within the college.",
            image: "src/asset/Events/IEEE-WIE-AESS-inauguration.jpg",
            highlights: ["Membership Drive", "IEEE", "WIE", "AESS"]
          },

          {
            title: "Github Workshop",
            date: "16th November 2024",
            description: "The GitHub Workshop, organized by the Department of Electronics and Communication at Jain College of Engineering, Belagavi, in association with WIE and AESS, aimed to equip students with practical skills in using GitHub for collaborative coding and project management. The objective was to enhance students' technical abilities, specifically in version control, collaborative workflows, and best practices for using GitHub as a professional tool. This workshop intended to empower students with valuable skills relevant to software development and collaborative projects.",
            image: "src/asset/Aero_Talk/Github_1.jpg",
            highlights: ["GitHub", "Collaborative Coding", "Project Management"]
          },

          {
            title: "Unlocking Success: A Roadmap to Placement Excellence",
            date: "23 November 2024",
            description: "The primary objective was to guide and prepare students, specifically those in Electronics and Communication Engineering, for successful placement outcomes. This was achieved by providing a roadmap, insights, and practical advice from an industry professional and alumna, Bhoomika Kadabi.",
            image: "src/asset/Aero_Talk/Bhoomika_alumni.jpg",
            highlights: ["Placement"]
          },
        ],
        // Upcoming events data
        upcomingEvents: [
          {
            title: "IEEE Inauguration 2025",
            date: "March 15, 2025",
            description: "Join us for the grand inauguration of IEEE JCE Student Branch 2025. We are honored to have Dr. Swetha Goudar as our Chief Guest. The event will feature keynote speeches, technical sessions, and networking opportunities. Don't miss this prestigious event!",
            theme: "Innovation & Leadership",
            countdown: "1",
            highlights: [ "Keynote Speeches", "Technical Sessions", "Networking"]
          },
          {
            title: "Hackathon 2025",
            date: "April 20-21, 2025",
            description: "48-hour hackathon challenging teams to build innovative solutions",
            image: "src/asset/Events/CTC/Campus-to-Corporate-14.jpg",
            theme: "Sustainable Technology",
            countdown: "43"
          },
          {
            title: "AI/ML Workshop Series",
            date: "May 5-15, 2025",
            description: "Three-part workshop series on artificial intelligence and machine learning",
            image: "src/asset/Events/Techtriva.jpg",
            theme: "Future of AI",
            countdown: "58"
          },
          {
            title: "Technical Paper Presentation",
            date: "June 10, 2025",
            description: "Platform for students to present their research papers and innovations",
            image: "src/asset/Events/Conference/Conference-1.jpg",
            theme: "Emerging Technologies",
            countdown: "94"
          },
        ],
      });
    }, 1000); // Simulate API delay
  });
};

function EventsPage() {
  const [eventData, setEventData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  
  // Fetch event data on component mount
  useEffect(() => {
    const loadEventData = async () => {
      const data = await fetchEventData();
      setEventData(data);
      setIsLoading(false);
    };
    loadEventData();
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isLoading && activeTab === "upcoming") {
      const interval = setInterval(() => {
        setCurrentEventIndex((prev) => 
          prev === eventData.upcomingEvents.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isLoading, activeTab, eventData]);

  if (isLoading) {
    return (
      <div className="flex h-screen bg-black">
        <div className="m-auto flex flex-col items-center">
          <div className="relative w-24 h-24">
            <div className="absolute w-full h-full border-4 border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-indigo-500 rounded-full animate-spin"></div>
          </div>
          <div className="mt-6 text-xl text-white font-light tracking-widest animate-pulse">
            LOADING EVENTS
          </div>
        </div>
      </div>
    );
  }

  const currentEvents = activeTab === "upcoming" ? eventData.upcomingEvents : eventData.pastEvents;
  const currentEvent = currentEvents[currentEventIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Events Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Tab Selection */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full p-1 bg-gray-800">
              {["upcoming", "past"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setCurrentEventIndex(0);
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
                </button>
              ))}
            </div>
          </div>
          
          {/* Event Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${currentEventIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Event Image/Placeholder */}
                <div className="relative overflow-hidden rounded-2xl h-64 lg:h-96 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-5xl mb-4">🎉</div>
                    <p className="text-gray-300 text-xl font-medium">IEEE Inauguration 2025</p>
                    <p className="text-gray-400 mt-2">March 15, 2025</p>
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-3 text-blue-400">
                    {currentEvent.title}
                  </h2>
                  
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {currentEvent.date}
                    
                    {activeTab === "upcoming" && (
                      <span className="ml-4 flex items-center">
                        <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {currentEvent.countdown} days left
                      </span>
                    )}
                  </div>
                  
                  {activeTab === "upcoming" && (
                    <div className="mb-4 inline-block bg-gradient-to-r from-blue-800 to-purple-800 px-3 py-1 rounded-md text-sm">
                      Theme: {currentEvent.theme}
                    </div>
                  )}
                  
                  <p className="text-lg text-gray-300 mb-6">
                    {currentEvent.description}
                  </p>
                  
                  {activeTab === "upcoming" && currentEvent.highlights && (
                    <div>
                      <h4 className="text-lg font-medium mb-3 text-blue-500">Event Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentEvent.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-gray-800 px-3 py-1 rounded-md text-sm text-gray-300">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {currentEvents.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentEventIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentEventIndex
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to event ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Event List View */}
          <div className="mt-16">
            <h3 className="text-xl font-medium mb-6 text-gray-200">All {activeTab === "upcoming" ? "Upcoming" : "Past"} Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden cursor-pointer transition-all border border-transparent hover:border-blue-500 ${
                    idx === currentEventIndex ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setCurrentEventIndex(idx)}
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-gray-300 font-medium">Image Coming Soon</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2">{event.title}</h4>
                    <p className="text-gray-400 text-sm line-clamp-2">{event.description}</p>
                    {activeTab === "upcoming" && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-full">
                          {event.countdown} days left
                        </span>
                        {event.highlights && event.highlights.map((highlight, index) => (
                          <span key={index} className="text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventsPage;