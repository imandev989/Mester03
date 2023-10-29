

"use client"


import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";


import "./styles.css";
import MobileDrawerSlider from "./MobileDrawerSlider";



const SliderMobile = () => {
  const [popup, setPopup] = useState(false);

  return (
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
            1024: {
              width: "100%",
              height: 400,
            },
            1280: {
              width: "100%",
              height: 400,
            },
            1536: {
              width: "100%",
              height: 400,
            },

          },
        }}
      >
        <SplideSlide>
          <Image
            src="/images/productdetails/07.jpg"
            priority={true}
            width={2048}
            height={400}
            alt="بنر تبلیغ"
            onClick={()=>setPopup(true)}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/images/productdetails/05.jpg"
            priority={true}
            width={2048}
            height={200}
            alt="بنر تبلیغ"
            onClick={()=>setPopup(true)}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/images/productdetails/03.jpg"
            priority={true}
            width={2048}
            height={200}
            alt="بنر تبلیغ"
            onClick={()=>setPopup(true)}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/images/productdetails/02.jpg"
            priority={true}
            width={2048}
            height={400}
            alt="بنر تبلیغ"
            onClick={()=>setPopup(true)}
          />
        </SplideSlide>
      </Splide>
      {
        popup && (
          <div className="bg-gray-100 absolute top-0 right-0 h-[100%] w-[100%] z-50">
            <MobileDrawerSlider popup={popup} setPopup={setPopup}/>
          </div>
        )
      }
    </div>
  );
}

export default SliderMobile;