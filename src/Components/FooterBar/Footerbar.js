import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faHome,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
const Footerbar = () => {
  return (
    <div>
      <div className="bg-red-200 py-2 fixed bottom-0 w-full z-10 md:visible lg:hidden">
       
          <nav className="border-gray-200">
            
              <ul className="md:container-fluid container flex justify-between flex-wrap m-auto">
                <li>
                  <a
                    href="#"
                    className="block px-3 text-black  rounded md:bg-transparent md:p-0"
                  >
                    <FontAwesomeIcon className="px-3" icon={faHome} />
                    <p>Home</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 text-black  rounded md:bg-transparent md:p-0"
                  >
                    <FontAwesomeIcon className="px-3" icon={faMessage} />
                    <p>Message</p>
                  </a>
                </li>

                <li>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-black text-2xl"
                  />
                  <p>Cart</p>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 text-black  rounded md:bg-transparent md:p-0"
                  >
                    <FontAwesomeIcon className="px-3" icon={faUser} />
                    <p>Account</p>
                  </a>
                </li>
              </ul>
           
          </nav>
        </div>
     
     </div>
  );
};

export default Footerbar;
