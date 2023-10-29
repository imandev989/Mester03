"use client";

import { Tabs3 } from "../tabs/Tabs3";
import "./styles.css";
import { IoCloseOutline } from "react-icons/io5";
import CustomePicComment from "../productdetails/customersProductPics/CustomePicComment";


const PopUpMobile = ({ Popup, setShowPopUp }) => {
    return (
            <div className="flex flex-col h-full w-full">

                <div className=" z-10">
                    <span className="absolute left-3 top-3" onClick={() => setShowPopUp(false)}><IoCloseOutline className="text-2xl cursor-pointer" /></span>
                </div>

                <div >
                    <Tabs3 />
                </div>


                <div className="p-4 border  border-t-1 border-solid border-gray-300 border-x-0 border-b-0 ">
                    <button className="text-white  rounded-md p-2 ">
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
    );
}

export default PopUpMobile;