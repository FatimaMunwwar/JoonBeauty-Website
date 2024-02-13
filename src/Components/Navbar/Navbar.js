import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../Assets/logo.webp";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-red-200 py-2 fixed top-0 w-full z-10">
      <div className="md:container container-fluid m-auto">
        <nav className="border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4">
            <img src={logo} className="h-8" alt="Logo" />

            <div className="flex items-center justify-center flex-grow ">
              <div className="relative w-3/4">
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 pr-3 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-white dark:bg-white-700 dark:border-white dark:placeholder-gray-900 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-red-100  rounded px-3 my-2 mx-4 border">
                  <svg
                    className="w-4 h-4 text-red-950 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <ul className="flex flex-col font-medium  md:p-0 mt-4  border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li className="sm:visible invisible">
                <a
                  href="#"
                  className="block px-3 text-black  rounded md:bg-transparent md:p-0"
                >
                  <FontAwesomeIcon className="px-3" icon={faUser} />
                  Login
                </a>
              </li>

              <li className="md:visible invisible">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-black text-2xl"
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
