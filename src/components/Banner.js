import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://totoday-api.mltechsoft.com/media/banner/home/BANNER%20SLIDE%20HOME-76e44de9-7637-44f9-aa50-1c2ea8f7a674.jpg",
    "https://totoday-api.mltechsoft.com/media/banner/home/BANNER%20SLIDE%20HOME-8d8a75b7-bb8c-4c16-a327-878864a05eed.png",
    "https://totoday-api.mltechsoft.com/media/banner/home/BANNER%20SLIDE%20HOME-8d8a75b7-bb8c-4c16-a327-878864a05eed.png",
    "https://totoday-api.mltechsoft.com/media/banner/home/BANNER%20SLIDE%20HOME-76e44de9-7637-44f9-aa50-1c2ea8f7a674.jpg",
    "https://totoday-api.mltechsoft.com/media/banner/home/SH1-0f1ecceb-0c35-4f3b-b2b6-fd1099719f64.png",
    "https://totoday-api.mltechsoft.com/media/banner/home/SH2-222c7d50-fe26-4f6d-bee4-2384a0828329.png",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="h-[650px] w-screen relative">

        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImageFour"
          />

        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-52">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;
