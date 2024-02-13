import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faStarOfLife,
  faPerson,
  faPersonDress,
  faBaby,
  faHome,
  faLaptop,
  faTv,
  faFootball,
  faStopwatch,
  faBiking,
} from "@fortawesome/free-solid-svg-icons";
const SideBar = () => {
  return (
    <div className="border w-80 text-center py-8 bg-white rounded px-12 ">
      <div className="flex text-center py-1 ">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faBasketShopping}
        />
        <p className="text-gray-500">Groceries & Pets</p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faStarOfLife}
        />
        <p className="text-gray-500">Health $ Care</p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faPerson}
        />
        <p className="text-gray-500">Men's Fashion</p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faPersonDress}
        />
        <p className="text-gray-500">Women's Fashion</p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faBaby}
        />
        <p className="text-gray-500">Mother & Baby</p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faHome}
        />
        <p className="text-gray-500">Home & Lifestyle</p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faLaptop}
        />
        <p className="text-gray-500">Electronic Devices</p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faLaptop}
        />
        <p className="text-gray-500">Electronic Accessories</p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faTv}
        />
        <p className="text-gray-500">TV & Home Appliances</p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faFootball}
        />
        <p className="text-gray-500">Sports & Outdoor</p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faStopwatch}
        />
        <p className="text-gray-500">Watches, Bags </p>
      </div>
      <div className="flex py-1">
        <FontAwesomeIcon
          className="px-1 py-1 mx-2 rounded-full text-[10px] text-red-800 bg-slate-300"
          icon={faBiking}
        />
        <p className="text-gray-500">Automotive & Motorbike</p>
      </div>
    </div>
  );
};

export default SideBar;
