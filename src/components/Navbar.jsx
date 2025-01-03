import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <nav className="bg-gray-100 border  p-2 w-[250px] rounded-full fixed top-5 left-1/2 -translate-x-1/2 shadow z-[9999]">
        <ul className="flex justify-center allign-center gap-3 font-extralight">
          <li>
            <Link
              to={"/"}
              className="hover:underline hover:font-bold hover:cursor-pointer "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/Weather"}
              className="hover:underline hover:font-bold hover:cursor-pointer "
            >
              Weather
            </Link>
          </li>
          <li>
            <Link
              to={"/Privacy"}
              className="hover:underline hover:font-bold hover:cursor-pointer "
            >
              Privacy
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;