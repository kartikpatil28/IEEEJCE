import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const events = [
  { name: "IEEE Tech Talk", date: "Oct 25, 2024" },
  { name: "Hackathon 2025", date: "Jan 15, 2025" },
  { name: "Workshops on IoT", date: "Nov 10, 2024" },
  { name: "AI Seminar", date: "Dec 5, 2024" },
  { name: "Industry Meet-up", date: "Feb 20, 2025" },
];

const Notifications = () => {
  return (
    <div className="bg-white min-h-screen font-sans p-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="flex items-center text-blue-800 hover:underline mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Notifications</h1>
        <div className="space-y-4">
          {events.map((event, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-800">{event.name}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;