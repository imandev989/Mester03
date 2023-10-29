
"use client";

import CategoryCard from "@/components/map/CategoryCard";
import MapCard from "@/components/map/MapCard";
// import MapComponent from "@/components/map/MapComponent"

import { useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

import { useRouter } from 'next/navigation';
import MapContainerNew from "@/components/map/MapContainerNew";


const NewMap = () => {
    const [showCat, setShowCat] = useState(false);
    const router = useRouter();

    return (
        <div className="relative ">
            <div className="z-0"><MapContainerNew /></div>
            <div className=" hidden fixed  lg:top-60 lg:left-3 lg:w-[17vw] xl:w-[14vw] bg-white  text-black  lg:flex lg:flex-col z-[400]">
                <CategoryCard />
            </div>
            <div className="fixed top-36 right-5  lg:right-5 bg-orange-500 rounded-full w-[10px] h-[10px] p-6 cursor-pointer lg:hidden z-[400]"><BsGrid3X3Gap className="text-white text-2xl relative bottom-3 -right-[0.7rem]" onClick={() => setShowCat(!showCat)} /></div>
            {/* <div className="fixed top-36 right-5 bg-orange-500 rounded-full w-[10px] h-[10px] p-6 cursor-pointer lg:hidden z-[800]"><IoIosArrowForward className="text-white text-2xl relative bottom-3 -right-[0.8rem]" onClick={() => router.back()} /></div> */}
            <div className="fixed flex  gap-2  bottom-2 w-full h-[15vh] lg:right-1 lg:top-40 lg:w-[25vw] xl:w-[22vw]  lg:h-[85vh] lg:flex lg:flex-col lg:gap-1  text-black  overflow-x-scroll lg:overflow-y-scroll  scrollbar-hide scroll-smooth z-[400]	">
                <div className="shrink-0"><MapCard /></div>
                <div className="shrink-0"><MapCard /></div>
                <div className="shrink-0"><MapCard /></div>
                <div className="shrink-0"><MapCard /></div>
                <div className="shrink-0"><MapCard /></div>
                <div className="shrink-0"><MapCard /></div>
                <div className="shrink-0"><MapCard /></div>
                <div className="shrink-0"><MapCard /></div>
                <div className="shrink-0"><MapCard /></div>
                <div className="shrink-0"><MapCard /></div>
                <div className="shrink-0"><MapCard /></div>
            </div>
            <div
                className={`lg:hidden overflow-auto fixed top-0 bottom-0 right-0 left-0 w-full h-[100vh] bg-blue-300  text-white  ease-in-out duration-300 ${showCat ? "translate-x-0 " : "translate-x-full"
                    } z-[999] `}>
                <div className="flex flex-col h-[100vh] w-full">
                    <div className="flex justify-start gap-2 bg-gray-900 h-[5vh] px-4 py-6 items-center">
                        <span><IoIosArrowForward className="text-2xl" onClick={() => setShowCat(!showCat)} /></span>
                        <span>انتخاب دسته بندی</span>

                    </div>




                    <div className="w-full flex flex-col p-2 divide-y  divide-gray-300 gap-2 ">
                        <div className="flex justify-between gap-1 py-1">
                            <div className=" flex justify-start gap-2  pr-3">
                                <input type="checkbox" />
                                <span className="text-gray-500 text-sm">تمامی پیشنهادات</span>
                            </div>
                            <div className=" flex justify-end   items-center gap-2">
                                <span className="pl-2"><BsGrid3X3Gap className="text-xl text-orange-500" /></span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 py-1">
                            <div className=" flex justify-start gap-2  pr-3">
                                <input type="checkbox" />
                                <span className="text-gray-500 text-sm">تفریحی و ورزشی </span>
                            </div>
                            <div className=" flex justify-end   items-center gap-2">
                                <span className="pl-2"><FaMapMarkerAlt className="text-xl text-pink-500" /></span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 py-1">
                            <div className=" flex justify-start gap-2  pr-3">
                                <input type="checkbox" />
                                <span className="text-gray-500 text-sm"> زیبایی و آرایشی</span>
                            </div>
                            <div className=" flex justify-end   items-center gap-2">
                                <span className="pl-2"><FaMapMarkerAlt className="text-xl text-purple-500" /></span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 py-1">
                            <div className=" flex justify-start gap-2  pr-3">
                                <input type="checkbox" />
                                <span className="text-gray-500 text-sm">رستوران و فست فود</span>
                            </div>
                            <div className=" flex justify-end   items-center gap-2">
                                <span className="pl-2"><FaMapMarkerAlt className="text-xl text-yellow-500" /></span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 py-1">
                            <div className=" flex justify-start gap-2  pr-3">
                                <input type="checkbox" />
                                <span className="text-gray-500 text-sm">هنر و تئاتر</span>
                            </div>
                            <div className=" flex justify-end   items-center gap-2">
                                <span className="pl-2"><FaMapMarkerAlt className="text-xl text-green-500" /></span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 py-1">
                            <div className=" flex justify-start gap-2  pr-3">
                                <input type="checkbox" />
                                <span className="text-gray-500 text-sm">پزشکی و سلامت</span>
                            </div>
                            <div className=" flex justify-end   items-center gap-2">
                                <span className="pl-2"><FaMapMarkerAlt className="text-xl text-orange-500" /></span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 py-1">
                            <div className=" flex justify-start gap-2  pr-3">
                                <input type="checkbox" />
                                <span className="text-gray-500 text-sm">آموزشی</span>
                            </div>
                            <div className=" flex justify-end   items-center gap-2">
                                <span className="pl-2"><FaMapMarkerAlt className="text-xl text-blue-500" /></span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 py-1">
                            <div className=" flex justify-start gap-2  pr-3">
                                <input type="checkbox" />
                                <span className="text-gray-500 text-sm">تورهای مسافرتی</span>
                            </div>
                            <div className=" flex justify-end   items-center gap-2">
                                <span className="pl-2"><FaMapMarkerAlt className="text-xl text-red-500" /></span>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full py-4 bg-green-500 text-white text-xl hover:bg-green-700 fixed bottom-0 ">تائید</button>





                </div>
            </div>


        </div>
    )
}

export default NewMap;


