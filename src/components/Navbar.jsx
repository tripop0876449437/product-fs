import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // เมนู Navbar
  const menuItems = [
    { name: "หน้าแรก", path: "/" },
    { name: "ความสนใจ", path: "/interests" },
    { name: "คำแนะนำ", path: "/suggestions" },
    { name: "Feedback", path: "/feedback" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* เมนู */}
      <ul className="flex space-x-6">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `cursor-pointer px-4 py-2 rounded-md ${
                  isActive
                    ? "bg-gray-800 text-white" // เมนูที่ถูกเลือก
                    : "hover:bg-gray-200" // เมนูที่ไม่ได้ถูกเลือก
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Icon Profile */}
      <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
        <span className="text-gray-500">👤</span>
      </div>
    </nav>
  );
};

export default Navbar;
