"use client";

import Image from "next/image";

import p1 from "@/public/images/productdetails/07.jpg";
import p2 from "@/public/images/productdetails/02.jpg";
import p3 from '@/public/images/productdetails/03.jpg';
import p4 from '@/public/images/productdetails/04.jpg'
import p5 from '@/public/images/productdetails/05.jpg'
import p6 from '@/public/images/productdetails/06.jpg'
import { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";




const CustomerProductPics = () => {
  const thumbsImages = [p1, p2, p3, p4, p5, p6];

  const [show, setShow] = useState(false);
  const [image, setImage] = useState("s");

  const showPic = (setShow) => {
    
    alert(setShow)
  }



  return (
    <div >

      {
        show ? (

          <div className="flex flex-col gap-2 justify-between rounded-lg absolute top-0 right-0 bg-white h-[50vh] w-full">
            <div className="w-full flex justify-between items-center p-4 border  border-b-1 border-solid border-gray-300 border-x-0 border-t-0">
              <div className="flex justify-start gap-2">
                <span className="text-2xl cursor-pointer" onClick={() => setShow(false)}>
                  <MdArrowForward />
                </span>
                <span>دیدگاه خریدار</span>
              </div>
              {/* <div>
                <span className="text-2xl cursor-pointer" >
                  <IoCloseOutline />
                </span>
              </div> */}
              
            </div>
            <div className="mx-auto">
            {
                <Image
                src={p1}
                alt="product thumbnail"
                // style={btn_img}
                width={200}
                height={200}
              
           
              />
            }
            </div>
            <div className="p-4 border  border-t-1 border-solid border-gray-300 border-x-0 border-b-0 ">
              <button className="text-white bg-red-500 rounded-md p-2">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        ) : (
          <ul className="flex justify-center lg:justify-start items-center gap-2 flex-wrap mb-2 px-2"  >
            {thumbsImages?.map((thumbnail, index) => (
              <li key={index} className=" rounded-lg overflow-hidden cursor-pointer hover:opacity-80" >
                <Image
                  src={thumbnail}
                  alt="product thumbnail"
                  // style={btn_img}
                  width={100}
                  height={100}
                  onClick={()=>setShow(true)}
                />
              </li>
            ))}
          </ul>
        )
      }


    </div>
  );
}

export default CustomerProductPics;