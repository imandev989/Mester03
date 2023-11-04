"use client";
import { IoIosArrowBack } from "react-icons/io";
import WonderCard from "./WonderCard";
import Image from "next/image";
import SeeMore from "./SeeMore";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import { useState, useRef } from "react";

const WonderfullSuggestion = () => {
  const cardRef = useRef(null);
  // const storiesRef = useRef(null);

  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(false);

  
  const onScroll = () => {
    //console.log(cardRef.current.scrollLeft);
    //console.log(cardRef.current.clientWidth);
    //console.log(cardRef.current.scrollWidth);
    let left = cardRef.current.scrollLeft * -1;

    if (left <= 0) {
      setShowRight(false);
    } else {
      setShowRight(true);
    }
    // console.log(left);
    // console.log(cardRef.current.scrollWidth - cardRef.current.clientWidth);
    if ( 
      left + 2 >=
      cardRef.current.scrollWidth - cardRef.current.clientWidth
    ) {
      setShowLeft(false);
    } else {
      setShowLeft(true);
    }
  };
  return (
    <div className="container mx-auto relative">
          <div className=" lg:rounded-lg shadow-lg flex w-full bg-gray-800 my-2 py-2 px-4 gap-2 overflow-x-scroll  scroll-smooth scrollbar-hide"
    onScroll={onScroll}
    ref={cardRef}
    >
      <div className=" flex flex-col sm:shrink-0 p-4 justify-center items-center gap-4">
        <div className="text-white">پیشنهادات شگفت </div>
        <div>
          <Image
            src="/images/wonderfullSuggestions/02.png"
            width={165}
            height={150}
            alt="تبلیغ تخفیفانی"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex  items-center gap-1 cursor-pointer">
          <span className="text-white text-xs sm:text-sm">مشاهده همه</span>
          <span>
            <IoIosArrowBack className="text-white text-2xl" />
          </span>
        </div>






      </div>
      <div
        className=" flex gap-1 rounded-md   p-2"
       
      >
        <div className="flex shrink-0  bg-white rounded-r-md">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white">
          <WonderCard />
        </div>
        <div className="flex shrink-0  bg-white rounded-l-md">
          <SeeMore />
        </div>
       
      </div>
      <div className=" hidden md:flex absolute top-[50%]  right-1 z-50  ">
          <div
            onClick={() => {
              cardRef.current.scrollLeft = cardRef.current.scrollLeft + 150;
            }}
          >
            <div
              className={`cursor-pointer  drop-shadow-lg filter ${showRight ? 'visible' : 'invisible'} absolute right-[10%] z-auto
              `}
            >
              <FaArrowAltCircleRight className="text-4xl text-gray-300  opacity-80 hover:text-gray-500 rounded-full " />
            </div>
          </div>

          
      </div>
      <div className=" hidden md:flex absolute top-[50%] left-1 z-50  ">
          <div
            onClick={() => {
              cardRef.current.scrollLeft = cardRef.current.scrollLeft - 150;
            }}
          >
            <div
              className={`cursor-pointer drop-shadow-lg filter ${showLeft ? 'visible' : 'invisible'} 
              `}
            >
              <FaArrowAltCircleLeft className="text-4xl text-gray-300  opacity-80 hover:text-gray-500 rounded-full" />
            </div>
          </div>

          

          
      </div>
    </div>
    </div>
  );
};

export default WonderfullSuggestion;
