"use client"


import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

import "./styles.css";



const Slider = () => {
  return (
    <div className="sliderss cursor-pointer">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="custom-wrapper"
      >
        <Splide
          aria-label="My Favorite Images"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          options={{
            direction: "rtl",
            width: "100%",
            height: 400,
            type: "loop",
            autoplay: "true",
            rewindSpeed: "3000",
            lazyLoad: "nearby",
            breakpoints: {
              320: {
                width: "100%",
                height: 100,
              },
              640: {
                width: "100%",
                height: 200,
              },
              768: {
                width: "100%",
                height: 200,
              },
              // 1024: {
              //   width: "100%",
              //   height: 400,
              // },
              // 1280: {
              //   width: "100%",
              //   height: 400,
              // },
              // 1536: {
              //   width: "100%",
              //   height: 400,
              // },

            },
          }}
        >
          <SplideSlide>
            <Image
              src="/images/imagesliders/First.jpg"
              priority={true}
              width={2048}
              height={400}
              alt="بنر تبلیغ"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/imagesliders/Second.jpg"
              priority={true}
              width={2048}
              height={200}
              alt="بنر تبلیغ"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/imagesliders/Third.jpg"
              priority={true}
              width={2048}
              height={200}
              alt="بنر تبلیغ"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/imagesliders/Second.jpg"
              priority={true}
              width={2048}
              height={400}
              alt="بنر تبلیغ"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Slider;