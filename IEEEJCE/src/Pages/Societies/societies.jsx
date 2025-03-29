import React from "react";
import { Outlet } from "react-router-dom";
import "./societies.css";

const Societies = () => {
  return (
    <div className="societies-page bg-black text-white">
      <h1 className="societies-heading"></h1>
      <p className="societies-description">
        
      </p>
      <Outlet /> {/* This will render the nested society pages */}
    </div>
  );
};

export default Societies;