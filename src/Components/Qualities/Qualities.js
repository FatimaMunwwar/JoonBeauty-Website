import React from 'react'
import dzraz from "../../Assets/dzraz.png";
import car from "../../Assets/car.png";
import img from "../../Assets/img.png";
import star from "../../Assets/star.png";
import arrow from "../../Assets/arrow.png";
import tick from "../../Assets/tick.png";
import free from "../../Assets/free.png";
import basket from "../../Assets/basket.png";
import flash from "../../Assets/flash.png";
import makeup from "../../Assets/makeup.png";
import think from "../../Assets/think.png";
const Qualities = () => {
  return (
    <div>
       <div className="mt-9 grid gap-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 bg-orange-100 py-2 ">
       
  <div className="flex items-center border-r justify-center ">
    <img src={dzraz} className="h-6 mr-2" alt="Safe Payment" />
    <p className="px-2">Safe Payment</p>
  </div>
  <div className="flex items-center border-r justify-center">
    <img src={car} className="h-6 mr-2" alt="Nationwide Delivery" />
    <p className="px-2">Nationwide Delivery</p>
  </div>
  <div className="flex items-center border-r justify-center">
    <img src={img} className="h-6 mr-2" alt="Free & Easy Returns" />
    <p className="px-2">Free & Easy Returns</p>
  </div>
  <div className="flex items-center border-r justify-center ">
    <img src={arrow} className="h-6 mr-2" alt="Best Easy Guaranteed" />
    <p className="px-3">Best Easy Guaranteed</p>
  </div>
  <div className="flex items-center justify-center">
    <img
      src={tick}
      className="h-6 mr-2"
      alt="100% Authentic Products"
    />
    <p className="px-2">100% Products</p>
  </div>
</div>



        <div className="mt-9 grid gap-2 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2  py-6 bg-white rounded-lg">
          <div className="items-center border-r pr-2 pe-4 flex justify-center ">
            <div>
              <img src={free} className="sm:h-16 h-36 mr-2 px-5" alt="Safe Payment" />
              <p className="sm:px-2 px-9 py-3 sm:py-0">Free Delivery</p>
            </div>
          </div>

          <div className="items-center border-r pr-2 flex justify-center ">
            <div>
              <img
                src={basket}
                className="sm:h-16 mr-2 sm:px-5 h-36"
                alt="Nationwide Delivery"
              />
              <p className="sm:px-7 px-12 sm:py-0 py-3">Mart</p>
            </div>
          </div>
          <div className="items-center border-r pr-2 flex justify-center">
            <div>

            <img
              src={think}
              className="sm:h-16 mr-2 sm:px-5 h-36"
              alt="Free & Easy Returns"
            />
            <p className="sm:px-5 px-10 sm:py-0 py-3">Fashion</p>
            </div>
          </div>
          <div className="items-center border-r pr-2 flex justify-center">
            <div>

            <img
              src={makeup}
              className="sm:h-16 mr-2 sm:px-5 h-36"
              alt="Best Easy Guaranteed"
            />
            <p className="sm:px-6 px-12 py-3 sm:py-0">Beauty</p>
            </div>
          </div>
          <div className="items-center border-r pr-2 flex justify-center">
            <div>

            <img
              src={flash}
              className="sm:h-16 mr-2 sm:px-5 h-36"
              alt="100% Authentic Products"
            />
            <p className="sm:px-2 px-9 sm:py-0 py-3">Flash Sale</p>
            </div>
          </div>
          <div className="items-center flex justify-center">
            <div>

            <img
              src={star}
              className="sm:h-16 mr-2 sm:px-5 h-36"
              alt="100% Authentic Products"
            />
            <p className="sm:px-7 px-9 sm:py-0 py-3" >New On</p>
            </div>
          </div>
        </div>


    </div>




  )
}

export default Qualities
