"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";

// import "./styles.css";

import p1 from "@/public//images/productdetails/07.jpg";
import p2 from "@/public//images/productdetails/02.jpg";
import p3 from "@/public//images/productdetails/03.jpg";
import p4 from "@/public//images/productdetails/04.jpg";
import p5 from "@/public//images/productdetails/05.jpg";
import p6 from "@/public//images/productdetails/06.jpg";
import { getMedias } from "../sliderDetails/sliderMedia";
import { CgPlayButtonR } from "react-icons/cg";
import ReactPlayer from "react-player";

const OfficalProductPicsSlider = () => {
  const medias = getMedias();

  const thumbsImages1 = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
  ];
  const thumbsImages2 = [p1, p2, p3, p4, p5, p6];

  const mainRef = useRef(null);

  const handleThumbs = (id) => {
    if (mainRef.current) {
      mainRef.current.go(id);
    }
  };

  const mainOptions = {
    direction: "rtl",
    width: "100%",
    height: "100%",
    type: "loop",
    perPage: 1,
    autoplay: "false",
    interval: "100003000",
    lazyLoad: "nearby",
    // breakpoints: {
    //   320: {
    //     width: "100%",
    //     height: 100,
    //   },
    //   640: {
    //     width: "100%",
    //     height: 200,
    //   },
    //   768: {
    //     width: "100%",
    //     height: 200,
    //   },

    // },
  };

  const generalStyle = {
    display: "flex",
    // flexDirection:"column",
    // marginTop:"100px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    // marginTop:"50%",
  };

  const splideSlide = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop:"200px",
  };

  const thumbnailsstyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "5px",
    alignItems: "center",
    listStyle: "none",
  };
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:gap-4 lg:p-4 h-[100%] w-[100%]">
      <div
        style={generalStyle}
        className="w-full h-full lg:w-[60%]  lg:rounded-lg lg:overflow-hidden"
      >
        <Splide
          aria-label="My Products Images"
          style={splideSlide}
          options={mainOptions}
          ref={mainRef}
        >
          {medias?.map((thumbnail, index) =>
            thumbnail.type === "video" ? (
              <SplideSlide key={index}>
                <ReactPlayer
                  url={thumbnail.src}
                  controls={true}
                  playing={true}
                  width="100%"
                  height="100%"
                  light={
                    <Image
                      src={thumbnail.picsrc}
                      alt="Thumbnail"
                      //   className="!translate-y-0"
                    />
                  }
                  className="translate-y-20"
                />
              </SplideSlide>
            ) : (
              <SplideSlide key={index}>
                <Image
                  src={thumbnail.src}
                  width={1200}
                  height={200}
                  alt="بنر تبلیغ"
                />
              </SplideSlide>
            )
          )}
        </Splide>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:gap-4 lg:justify-between  w-[40%] h-[100%]">
        <div className="hidden lg:block">
          <p>استخر رو باز اصغرآقا</p>

          {/* <ReactPlayer
                        url='https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4'
                        controls={true}
                        playing={false}
                        width='100%'
                        height='100%'
                    /> */}
        </div>
        <div>
          <ul style={thumbnailsstyle} className="flex flex-wrap gap-2">
            {medias?.map((thumbnail, index) => (
              <li
                key={index}
                className="hover:opacity-50 opacity-100 rounded-lg overflow-hidden cursor-pointer border-2  border-solid border-gray-300"
              >
                {thumbnail.type === "video" ? (
                  <div className="relative" onClick={() => handleThumbs(index)}>
                    <div className=" relative rounded-lg border border-solid blur-sm border-gray-200 bg-white overflow-hidden p-2 hover:opacity-80">
                      <Image
                        src={thumbnail.picsrc}
                        alt="product thumbnail"
                        // style={btn_img}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="hover:opacity-25">
                      <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center filter blur-lg"></div>
                      <div className="absolute top-1/2 right-[0%] -translate-x-[50%] -translate-y-[50%]">
                        <CgPlayButtonR className="text-4xl text-gray-500" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className=" rounded-lg border border-solid border-gray-200 bg-white overflow-hidden p-2 hover:opacity-80"
                    onClick={() => handleThumbs(index)}
                  >
                    <Image
                      src={thumbnail.src}
                      alt="product thumbnail"
                      // style={btn_img}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex lg:justify-between lg:gap-2 lg:items-center mt-4">
          <div>
            <ul style={thumbnailsstyle} className="flex flex-wrap gap-2">
              {thumbsImages2?.map((thumbnail, index) => (
                <li
                  key={index}
                  className="hover:opacity-50 opacity-100 rounded-lg overflow-hidden  cursor-pointer"
                >
                  <div onClick={() => handleThumbs(index)}>
                    <Image
                      src={thumbnail}
                      alt="product thumbnail"
                      // style={btn_img}
                      width={20}
                      height={20}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-xs flex items-center gap-2 text-blue-500">
            <span>۸</span>
            <span>تصویر دیگر</span>
            <span>
              <IoIosArrowBack />
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex  justify-center lg:hidden mt-4 overflow-x-scroll  scroll-smooth scrollbar-hide">

                <ul style={thumbnailsstyle} className="flex shrink-0  gap-2 ">
                    {thumbsImages1?.map((thumbnail, index) => (
                        <li key={index} className="hover:opacity-50 opacity-100 rounded-lg overflow-hidden cursor-pointer border-2  border-solid border-gray-300">
                            <div onClick={() => handleThumbs(index)}>
                                <Image
                                    src={thumbnail}
                                    alt="product thumbnail"
                                    // style={btn_img}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div> */}
    </div>
  );
};

export default OfficalProductPicsSlider;
