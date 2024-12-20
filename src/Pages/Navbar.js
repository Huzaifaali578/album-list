import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onTabChange, activeTab , editForm }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">{editForm ? "HOME" : "Album Manager" }</Link>
        {editForm ? null :
          <div className="space-x-4">
          <button
            onClick={() => onTabChange("list")}
            className={`px-4 py-2 rounded ${activeTab === "list" ? "bg-blue-800" : "hover:bg-blue-500"
              }`}
          >
            Album List
          </button>
          <button
            onClick={() => onTabChange("add")}
            className={`px-4 py-2 rounded ${activeTab === "add" ? "bg-blue-800" : "hover:bg-blue-500"
              }`}
          >
            Add Album
          </button>
        </div>}
      </div>
    </nav>
  );
};

export default Navbar;
