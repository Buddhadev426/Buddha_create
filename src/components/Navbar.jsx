import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

const navbar = () => {
  return (
    <div>
      <nav className="bg-none  p-2 w-[250px] text-white font-bold fixed top-5 left-1/2 -translate-x-1/2 shadow z-[9999]">
        <ul className="flex justify-center allign-center gap-10 font-extralight">
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
              to={"/About"}
              className="hover:underline hover:font-bold hover:cursor-pointer "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/Services"}
              className="hover:underline hover:font-bold hover:cursor-pointer "
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={"/Contact"}
              className="hover:underline hover:font-bold hover:cursor-pointer "
            >
              Contact
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
              to={"/Blog"}
              className="hover:underline hover:font-bold hover:cursor-pointer "
            >
              Blog
            </Link>
          </li>
          <li>
          <Link
              to={"/Login"}
              className="hover:underline hover:font-bold hover:cursor-pointer "
            >
              <LoginButton />
            </Link>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;