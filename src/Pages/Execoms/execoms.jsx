import React, { useState } from "react";

const Execoms = () => {
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [activeTab, setActiveTab] = useState("all");

  const execoms2025 = [
    {
      position: "Chair",
      name: "Abhishek Devarushi",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100077965",
      mobileNo: "8383838383",
      sem: "6th",
      division: "A",
      email: "abhishekdevarushi7@gmail.com",
      category: "main"
    },
    {
      position: "Vice-Chair",
      name: "Beerappa",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100078004",
      mobileNo: "9812345678",
      sem: "6th",
      division: "A",
      email: "priyam@dtu.ac.in",
      category: "main"
    },
    {
      position: "Secretary",
      name: "Snehal Suryavanshi",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "99874444",
      mobileNo: "9876543210",
      sem: "6th",
      division: "C",
      email: "snehalsuryavanshi@ieee.org",
      category: "main"
    },
    {
      position: "Treasurer",
      name: "Darshan Tukkar",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100774717",
      mobileNo: "9123456789",
      sem: "6th",
      division: "A",
      email: "darshantukkar1@gmail.com",
      category: "main"
    },
    {
      position: "Media Head",
      name: "Siddharth Jambagi",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "99873986",
      mobileNo: "9101234567",
      sem: "6th",
      division: "C",
      email: "siddarthjambagi@gmail.com",
      category: "main"
    },
    {
      position: "Membership co-ordinator",
      name: "Vinayak A",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "99874479",
      mobileNo: "9123450987",
      sem: "6th",
      division: "C",
      email: "vinayakagasimani1@gmail.com",
      category: "main"
    },
    {
      position: "Webmaster",
      name: "Kartik Patil",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100307607",
      mobileNo: "9145678901",
      sem: "6th",
      division: "A",
      email: "kartikpatilwork24@gmail.com",
      category: "main"
    },
    {
      position: "WIE Chair",
      name: "Srushti Utturkar",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "99874594",
      mobileNo: "9198765432",
      sem: "6th",
      division: "C",
      email: "srushti@ieee.org",
      category: "wie"
    },
    {
      position: "WIE Vice Chair",
      name: "Shreya Dappadhuli",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "99874513",
      mobileNo: "9123456780",
      sem: "6th",
      division: "C",
      email: "ShreyaDappadhuli@ieee.org",
      category: "wie"
    },
    {
      position: "WIE Secretary",
      name: "Sharada Ugare",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100083041",
      mobileNo: "9112345678",
      sem: "4th",
      division: "A",
      email: "s32373408@gmail.com",
      category: "wie"
    },
    {
      position: "WIE Treasurer",
      name: "Namrata Mohan Patil",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "99874209",
      mobileNo: "9112345678",
      sem: "6th",
      division: "B",
      email: "namratapatil8497@gmail.com",
      category: "wie"
    },
    {
      position: "Media Head",
      name: "Samiulla Kustagi",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100768719",
      mobileNo: "9112345678",
      sem: "6nd",
      division: "A",
      email: "samuilla@iitb.ac.in",
      category: "main"
    },
    {
      position: "AESS Chair",
      name: "Muskan Abdul Latif Dhalayat",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100768726",
      mobileNo: "9112345678",
      sem: "6th",
      division: "A",
      email: "muskandhalayat21@gmail.com",
      category: "aess"
    },
    {
      position: "AESS Vice Chair",
      name: "Radhika Kiran Lohar",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100768599",
      mobileNo: "9112345678",
      sem: "6th",
      division: "A",
      email: "loharradhika00@gmail.com",
      category: "aess"
    },
    {
      position: "AESS Secretary",
      name: "Saniya Gijoni",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100768599",
      mobileNo: "9112345678",
      sem: "4th",
      division: "A",
      email: "saniya345gijoni@gmail.com",
      category: "aess"
    },
    {
      position: "AESS Treasurer",
      name: "Preeti Patil",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "99874579",
      mobileNo: "9112345678",
      sem: "6th",
      division: "B",
      email: "devinepree@gmail.com",
      category: "aess"
    },
    {
      position: "AESS Web Master",
      name: "Meghana Kubasad",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "99874365",
      mobileNo: "9112345678",
      sem: "6th",
      division: "B",
      email: "meghanar1269@gmail.com",
      category: "aess"
    },
    {
      position: "Media Head",
      name: "Chetan Baloji",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "100768435",
      mobileNo: "9112345678",
      sem: "2nd",
      division: "A",
      email: "chetanbaloji123@gmail.com",
      category: "main"
    },
  ];

  const execoms2024 = [
    {
      position: "Chair",
      name: "Austin",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90780177",
      mobileNo: "9164503749",
      email: "austin@gmail.com",
      category: "main"
    },
    {
      position: "Vice-Chair",
      name: "Chandan Kangralkar",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90856235",
      mobileNo: "9812345679",
      email: "chandan@gmail.com",
      category: "main"
    },
    {
      position: "Secretary",
      name: "Kshiti Gaddigoudar",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90782452",
      mobileNo: "9876543211",
      email: "kshiti@gmail.com",
      category: "main"
    },
    {
      position: "Treasurer",
      name: "Shreedhar Teradal",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90785124",
      mobileNo: "9123456788",
      email: "shreedhar@gmail.com",
      category: "main"
    },
    {
      position: "Media Head",
      name: "Rahul Halkarni",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90876355",
      mobileNo: "9101234568",
      email: "rahul@gmail.com",
      category: "main"
    },
    {
      position: "Membership co-ordinator",
      name: "Abhishek Basinayak",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90784214",
      mobileNo: "9123450988",
      email: "abhishek@gmail.com",
      category: "main"
    },
    {
      position: "WIE Chair",
      name: "Neha Patil",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90874522",
      mobileNo: "9145678902",
      email: "Neha@gmail.com",
      category: "wie"
    },
    {
      position: "WIE Vice-Chair",
      name: "Varsha V",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90786322",
      mobileNo: "9198765433",
      email: "varsha@gmail.com",
      category: "wie"
    },
    {
      position: "WIE Secratery",
      name: "Chaitra Kolli",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90783453",
      mobileNo: "9123456781",
      email: "chaitra@gmail.com",
      category: "wie"
    },
    {
      position: "WIE Treasurer",
      name: "Pavan Wader",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90784124",
      mobileNo: "9112345679",
      email: "pavan@gmail.com",
      category: "wie"
    },
    {
      position: "WIE Media Head",
      name: "Siddharth Jambagi",
      affiliation: "Jain College of Engineering, Belagavi",
      ieeeNumber: "90784124",
      mobileNo: "9112345679",
      email: "siddarthjambagi@gmail.com",
      category: "wie"
    },
  ];

  const members = selectedYear === "2025" ? execoms2025 : execoms2024;

  const filteredMembers = members.filter(
    (member) =>
      (activeTab === "all" || member.category === activeTab) &&
      (member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.position.toLowerCase().includes(search.toLowerCase()))
  );

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const getRandomColor = (name) => {
    const colors = [
      "bg-blue-500",
      "bg-purple-500",
      "bg-green-500",
      "bg-indigo-500",
      "bg-pink-500",
      "bg-teal-500"
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center">
            EXECOM Leadership {selectedYear}
          </h1>
          <p className="text-center mt-4 text-blue-100 max-w-2xl mx-auto">
            Meet our dedicated team of IEEE Executive Committee members who lead our chapter with passion and innovation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters and Search */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Year Toggle */}
          <div className="inline-flex p-1 bg-gray-100 rounded-xl">
            <button
              onClick={() => setSelectedYear("2025")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedYear === "2025"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              2025
            </button>
            <button
              onClick={() => setSelectedYear("2024")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedYear === "2024"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              2024
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === "all"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("main")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === "main"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Main Committee
            </button>
            <button
              onClick={() => setActiveTab("wie")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === "wie"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              WIE
            </button>
            <button
              onClick={() => setActiveTab("aess")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === "aess"
                  ? "bg-green-100 text-green-800"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              AESS
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name or position..."
              className="w-full lg:w-64 pl-10 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className={`h-3 ${
                member.category === "main" ? "bg-blue-600" :
                member.category === "wie" ? "bg-purple-600" :
                "bg-green-600"
              }`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${getRandomColor(member.name)}`}>
                    {getInitials(member.name)}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
                    <p className="text-sm font-medium text-blue-600">{member.position}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <span>{member.affiliation}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                    </svg>
                    <span>IEEE: {member.ieeeNumber}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-black hover:underline cursor-pointer">{member.sem}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-black hover:underline cursor-pointer">{member.division}</span>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span>{member.mobileNo}</span>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-blue-500 hover:underline cursor-pointer">{member.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-10">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-lg font-medium text-gray-600">No members found</h3>
            <p className="text-gray-500 mt-1">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Execoms;