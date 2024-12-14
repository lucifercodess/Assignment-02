import React, { useState } from "react";
import Dashboard from "../assets/dashboard.png";
import Portfolio from "../assets/portfolio.png";
import Input from "../assets/input.png";
import User from "../assets/profile.png";

const Sidebar = () => {
  const imageSize = "w-8 h-8";
  const [active, setActive] = useState("Portfolio");

  const navItems = [
    { name: "Dashboard", icon: Dashboard },
    { name: "Portfolio", icon: Portfolio },
    { name: "Inputs", icon: Input },
    { name: "Profile", icon: User },
  ];

  return (
    <div className="flex flex-col bg-[#DF5532] h-screen p-4">
      <div className="flex items-center mb-8">
        <h1 className="text-white text-2xl font-bold ml-2">Logo</h1>
      </div>

      <div className="flex flex-col space-y-4 mt-10">
        {navItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center space-x-3 gap-3 p-2 rounded-md cursor-pointer transition-all duration-300 ${
              active === item.name
                ? "bg-white text-[#DF5532] shadow-lg transform scale-105"
                : "text-white hover:bg-[#f0643d] hover:shadow"
            }`}
          >
            <img src={item.icon} alt={item.name} className={imageSize} />
            <h2
              className={`font-medium ${
                active === item.name ? "font-bold" : "font-light"
              }`}
            >
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
