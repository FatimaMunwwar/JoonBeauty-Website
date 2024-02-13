import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Invalid API response format");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products.image);

  return (
    <div>
   <div className="container m-auto">
  <h1 className="text-2xl">Just For You</h1>
  <div className="mt-9 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4">
    {products.map((item, index) => (
      <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadowflex flex-col">
        <a href="#">
          <img className="rounded-t-lg h-64 object-cover" src={item?.images[0]} alt="" />
        </a>
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            
            <p className="mb-3 font-normal   line-clamp-3 text-black">
              {item.description}
            </p>
          </div>
          <div className="mt-auto">
            <p className="font-normal  text-left text-red-900 ">
              Rs: {item.price}
            </p>
          </div>
          <div className="mt-auto">
            <button type="button" className="border px-8 mt-2 bg-red-900 text-white py-2 rounded" >Add to Cart</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



    </div>
  );
};

export default Product;
