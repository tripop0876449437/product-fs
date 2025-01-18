import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <div className="container mx-auto py-8 flex-grow">{children}</div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2025 Your Website. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
