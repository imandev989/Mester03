"use client"


import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useRef } from "react";

import "./styles.css";

import p1 from "@/public/images/imagesliders/First.jpg";
import p2 from "@/public/images/imagesliders/Second.jpg";
import p3 from '@/public/images/imagesliders/Third.jpg';
import p4 from '@/public/images/imagesliders/Second.jpg'
import p5 from '@/public/images/imagesliders/Second.jpg'
import p6 from '@/public/images/imagesliders/Second.jpg'

const SliderDesktop = () => {
    const thumbsImages = [p1, p2, p3, p4, p5, p6];

    const mainRef = useRef(null);

    const handleThumbs = (id) => {
        if (mainRef.current) {
          mainRef.current.go(id);
        }
      };

    const mainOptions = {
        direction: "rtl",
        width: "100%",
        height: 400,
        type: "loop",
        autoplay: "true",
        rewindSpeed: "3000",
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
    }

    const generalStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    }

    const splideSlide = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const thumbnailsstyle = {
        display: "flex",
        justifyContent: "space-between",
        gap: "5px" ,
        alignItems: "center",
        listStyle: "none",
        

        
      }

  return (
    <div className="flex flex-col gap-4 px-4">
      <div
        style={generalStyle}
        className="h-[80%]"
      >
        <Splide
          aria-label="My Products Images"
          style={splideSlide}
          options={mainOptions}
          ref={mainRef} 
        >
          <SplideSlide>
            <Image
              src={p1}
              width={1200}
              height={200}
              alt="بنر تبلیغ"
              
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={p2}
              width={1200}
              height={200}
              alt="بنر تبلیغ"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={p3}
              width={1200}
              height={200}
              alt="بنر تبلیغ"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={p4}
              width={1200}
              height={200}
              alt="بنر تبلیغ"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="h-[20%]">
      <ul style={thumbnailsstyle } >
            {thumbsImages?.map((thumbnail, index) => (
              <li key={index} className="opacity-50 hover:opacity-100 rounded-lg overflow-hidden bg-rose-300 cursor-pointer">
                <div onClick={() => handleThumbs(index)}>
                  <Image
                    src={thumbnail}
                    alt="product thumbnail"
                    // style={btn_img}
                    width={100}
                    height={200}
                  />
                </div>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}

export default SliderDesktop;