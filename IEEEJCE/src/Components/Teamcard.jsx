import React from 'react';


const TeamCard = ({ image, name, title, linkedin, xProfile }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={image}
        alt={name}
      />
      <h2 className="mt-4 text-white text-lg font-semibold">{name}</h2>
      <p className="text-gray-400">{title}</p>
      <div className="flex justify-center mt-4 space-x-4">
        {xProfile && (
          <a href={xProfile} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;