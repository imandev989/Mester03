"use client";
import { AiOutlineHeart } from "react-icons/ai";
// import { IoIosArrowDown } from "react-icons/io";
import { getInformationData } from "../sliderDetails/informationData";
import { GrMapLocation } from "react-icons/gr";
import p1 from "@/public/Icons/map-desktop.png";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import ProductRating from "@/components/cardscrolltype/ProductRating";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, Circle, useMapEvent, useMap, GeoJSON, Map } from 'react-leaflet';

const LocationInformation = () => {
    const informations = getInformationData()[0];
    const [like, setLike] = useState(false);
    const [showScore, setShowScore] = useState(false);
    const [mapPopup, setMapPopup] = useState(false);
    const position = [59.48824486026146, 36.37456380435228]

    return (
        <div className="bg-gray-100 rounded-md shadow-lg p-4">
            <div className="flex flex-col gap-2 divide-y-2 justify-between w-full">
                <div className="flex justify-between items-center w-full">
                    <div className="w-1/2 text-orange-500 text-xl">{informations.productName}</div>
                    <div className="w-1/2 flex justify-end items-center gap-4 text-gray-500">
                        <div className="flex gap-2 cursor-pointer" onClick={() => setLike((prev) => !prev)}><span>147</span>

                            {
                                like ? (
                                    <span className="text-xl"><FcLike /></span>
                                ) : (<span className="text-xl"><AiOutlineHeart /></span>)
                            }

                        </div>

                        <div className="felx  gap-2  items-center border border-dashed p-4 rounded-lg text-gray-500 cursor-pointer  relative">
                            <div className="flex gap-2 items-center " onClick={() => setShowScore((current) => !current)}>
                                {
                                    showScore ? (
                                        <span><IoIosArrowUp className="text-lg" /></span>
                                    ) : (
                                        <span><IoIosArrowDown className="text-lg" /></span>

                                    )
                                }
                                <span className="text-xs lg:text:sm">میانگین امتیازات : </span>


                                <span><ProductRating showScore={showScore} setShowScore={setShowScore} /></span>

                            </div>

                        </div>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center pt-4 w-full"} style={{ backgroundImage: "url('" + p1.src + "');", backgroundRepeat: 'repeat-y' }}>
                    <div className=" flex justify-start items-center gap-4">
                        <span className="text-2xl text-gray-400"><GrMapLocation /></span>
                        <span className="text-gray-400 text-sm lg:text-md">{informations.fullLocation}</span>
                    </div>
                    <div className={`flex justify-center py-8 lg:py-0 lg:justify-end`}>
                        <span className="bg-rose-700 text-white px-8 py-2 rounded-full text-sm cursor-pointer" onClick={() => setMapPopup(true)}>
                            نمایش روی نقشه
                        </span>
                    </div>
                </div>

            </div>

            {
                mapPopup && (
                    <div className="myblur">
                        <div className="popupBox flex flex-col justify-start fixed w-[50vw] h-[70vh]  p-12">

                            <div className=" z-10 ">
                                <span className="absolute left-3 top-3" onClick={() => setMapPopup(false)}><IoCloseOutline className="text-2xl cursor-pointer" /></span>

                            </div>
                            <div className="bg-rose-300 w-full h-full overflow-hidden">
                                <MapContainer center={{ lat: 36.2879, lng: 59.6158 }} zoom={13} scrollWheelZoom={true} >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={{ lat: 36.2879, lng: 59.6158 }}>
                                        <Popup>
                                            A pretty CSS3 popup. <br /> Easily customizable.
                                        </Popup>
                                    </Marker>

                                </MapContainer>



                            </div>




                        </div>
                    </div>
                )
            }



        </div>
    );
}

export default LocationInformation;