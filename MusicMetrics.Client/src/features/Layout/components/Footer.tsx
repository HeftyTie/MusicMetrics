import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineBarChart, MdOutlineShowChart } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div className="flex items-center p-4 pb-2 justify-evenly">
      <Link
        to="/"
        className="flex flex-col items-center justify-center text-center"
      >
        <FaHome className="text-2xl text-spotify-green" />
        <span className="text-sm">Home</span>
      </Link>

      <Link
        to="/Trends"
        className="flex flex-col items-center justify-center text-center"
      >
        <MdOutlineShowChart className="text-2xl text-spotify-green" />
        <span className="text-sm">Trends</span>
      </Link>

      <Link
        to="/Stats"
        className="flex flex-col items-center justify-center text-center"
      >
        <MdOutlineBarChart className="text-2xl text-spotify-green" />
        <span className="text-sm">Stats</span>
      </Link>

      <Link
        to="Search"
        className="flex flex-col items-center justify-center mt-1 text-center"
      >
        <FaSearch className="text-xl text-spotify-green" />
        <span className="text-sm">Search</span>
      </Link>
    </div>
  );
};
