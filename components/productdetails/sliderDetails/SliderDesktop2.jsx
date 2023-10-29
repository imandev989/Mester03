"use client";

import Image from "next/image";

import p1 from "@/public//images/productdetails/07.jpg";
import p2 from "@/public//images/productdetails/02.jpg";
import p3 from '@/public//images/productdetails/03.jpg';
import p4 from '@/public//images/productdetails/04.jpg';
import p5 from '@/public//images/productdetails/05.jpg';
import p6 from '@/public//images/productdetails/06.jpg';
import Popup from "@/components/hooks/Popup";
import { useState } from "react";
import { getMedias } from "./sliderMedia";
import { CgPlayButtonR } from "react-icons/cg";




const SliderDesktop2 = () => {

    const medias = getMedias();

    console.log("MEDIASSS", medias);

    const [showPopUp, setShowPopUp] = useState(false);
    
    let [count, setCount] = useState(0);

    // const thumbsImages = [p1, p2, p3, p4, p5, p6];
    const handleThumbs = (id) => {
        console.log(id)
    };

    const thumbnailsstyle = {
        display: "flex",
        justifyContent: "space-between",
        gap: "5px",
        alignItems: "center",
        listStyle: "none",



    }

    return (
        <>
            {
                showPopUp && (
                    <Popup showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
                )
            }
            <div className="flex flex-col gap-4 h-full">
                <div className="m-auto h-[80%] p-4 cursor-pointer bg-white " onClick={() => setShowPopUp(true)}>
                    <Image
                        src="/images/productdetails/011.webp"
                        width={500}
                        height={500}
                        alt="استخر اکباتان عکس اصلی"
                    />
                </div>
                <div className=" h-[20%]">
                    <ul style={thumbnailsstyle} className="">
                        {medias?.map((thumbnail, index) => {
                            // setCount(index);
                            if(index == 4) console.log("index", index)
                            console.log("COUNTIS", count)
                            if (!thumbnail.isMain)
                                return;
                            // if(thumbnail.index === thumbnail.length) return alert("3")
                            const style = (index === thumbnail.length - 1) ? { padding: '100rem' } : '';
                            // console.log("STYLE", style)

                            return (
                                <li key={index} className="  cursor-pointer last:blur-sm" >

                                    {
                                        (thumbnail.type === 'video') ? (
                                            <div className="relative" onClick={() => setShowPopUp(true)}>
                                                <div className=" relative rounded-lg border border-solid blur-sm border-gray-200 bg-white overflow-hidden p-2 hover:opacity-80" onClick={() => setShowPopUp(true)}>
                                                    <Image
                                                        src={thumbnail.picsrc}
                                                        alt="product thumbnail"
                                                        // style={btn_img}
                                                        width={100}
                                                        height={100}


                                                    />

                                                </div>
                                                <div className="hover:opacity-25" onClick={() => setShowPopUp(true)}>
                                                    <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center filter blur-lg" onClick={() => setShowPopUp(true)}>

                                                    </div>
                                                    <div className="absolute top-1/2 right-[20%] -translate-x-[50%] -translate-y-[50%]" onClick={() => setShowPopUp(true)}>
                                                        <CgPlayButtonR className="text-4xl text-gray-500" onClick={() => setShowPopUp(true)} />

                                                    </div>
                                                </div>

                                            </div>
                                        ) : (
                                            <div className=" rounded-lg border border-solid border-gray-200 bg-white overflow-hidden p-2 hover:opacity-80" onClick={() => setShowPopUp(true)}>
                                                <Image
                                                    src={thumbnail.src}
                                                    alt="product thumbnail"
                                                    // style={btn_img}
                                                    width={100}
                                                    height={100}

                                                />
                                            </div>
                                        )
                                    }

                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div >
        </>
    );
}

export default SliderDesktop2;