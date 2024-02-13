import React from "react";
import { CategoriesData } from "../../Data";
const Categories = () => {
  return (
    <div className="container m-auto">
    <h1 className="text-2xl">Categories</h1>
    <div className="mt-9 grid  lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 bg-white  ">
      {CategoriesData.map((item, index) => (
        <div key={index} className=" lg:border-r md:border-b sm:border-b  hover:shadow-lg">
          <div className="flex justify-center py-6 ">
            <div>
            <img src={item.imag} alt={item.title} height={100} width={100}  />
            <p className="ml-2">{item.title}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Categories;
