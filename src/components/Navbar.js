import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ title }) {
  return (
    <div>
      <nav className="px-4 py-4 md:px-4 md:py-6 bg-neutral-700 bg-opacity-50">
        <ul className="flex flex-row space-x-7 items-center justify-center ">
          <li className="font-bold text-md md:text-xl truncate text-black">
            {title}
          </li>
          <li className="text-md md:text-xl font-bold">
            <Link to="/"> Home</Link>
          </li>
          <li className="text-md md:text-xl font-bold ">
            <Link to="/About"> About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
