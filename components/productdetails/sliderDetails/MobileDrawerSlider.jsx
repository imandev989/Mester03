"use client";

import "./styles.css";
import { IoCloseOutline } from "react-icons/io5";
import { Tabs3 } from "@/components/tabs/Tabs3";
import CustomerProductPics from "../customersProductPics/CustomerProductPics";


const MobileDrawerSlider = ({ popup, setPopup }) => {
    return (
        <div className="flex flex-col justify-between h-full w-full">

            <div className=" z-10 absolute left-3 top-3">
                <span ><IoCloseOutline className="text-2xl cursor-pointer" onClick={() =>setPopup(false)} /></span>
            </div>

            <div >
                <Tabs3 />
            </div>


            <div className="p-4 border  border-t-1 border-solid border-gray-300 border-x-0 border-b-0 ">
                <button className="text-white bg-red-500 rounded-md p-2 ">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    );
}

export default MobileDrawerSlider;


// import PopUpMobile from "@/components/hooks/PopupMobile";



// const MobileDrawerSlider = ({popup,setPopup}) => {
//     return (
//         <div>
//             <PopUpMobile/>
//         </div>
//     );
// }

// export default MobileDrawerSlider;


