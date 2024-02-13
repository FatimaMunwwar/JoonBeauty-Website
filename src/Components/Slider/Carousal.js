import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "../../Data";
import SideBar from "../Sidebar/SideBar";
import Categories from "../Categories/Categories";
import Qualities from "../Qualities/Qualities";
import Product from "../Product/Product";
import Footerbar from '../FooterBar/Footerbar'
import './slide.css'
const Carousal = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1000,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-slate-100 container-fluid h-auto">
      <div className="container mx-auto pt-24">
       
        <div class="lg:flex md:flex-none  ">
          <div class=" hidden lg:flex">
            <SideBar />
          </div>
          <div class="container w-[47vh]  lg:w-4/6   md:3/4 ms-9">
            <Slider {...settings}>
              {Data.map((item, index) => (
                <div key={index} className="slider-item">
                  <div
                    className="rounded py-14 me-3 justify-center bg-cover bg-no-repeat slider-item-content"
                    style={{
                      backgroundImage: `url(${item.imag})`,
                      height: "50vh",
                      backgroundSize: "100% 100%",
                    }}
                  ></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <Qualities />
        <div className="mt-6">
          <Categories />
        </div>
        <div className="mt-9 mx-3 sm:mx-0">
          <Product />
        </div>
        <div className=" hidden lg:invisible md:visible">
          <Footerbar/>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
