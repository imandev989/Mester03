import { getInformationData } from "./informationData";
import { PiShareNetworkLight } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";

import { IoIosArrowBack } from "react-icons/io";

import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { LuEye } from "react-icons/lu";

import { getSocials } from "./socialData.js";


const Informations = () => {
    const informations = getInformationData()[0];
    const Socials = getSocials();

    console.log("informations", informations)
    return (
        <div className="flex flex-col p-2 relative gap-6 h-full justify-between">
            <div className="flex justify-between h-[10%] ">
                <div><span className="text-2xl text-bold text-orange-500">استخر رو باز اوین</span></div>
                <div><span className="bg-orange-500 rounded-r-xl px-4 py-2 absolute -left-2 text-white">20%</span></div>
            </div>
            {/* <div className="flex justify-center  text-2xl text-bold"><h2>{informations.productName}</h2></div> */}
            <div className="flex flex-col justify-center items-center gap-4 p-4 border-t-gray-400 border-0 border-t-[1px] border-dotted h-[60%]">
                <span className="text-sm text-gray-500">تصمیمات ایمان راعی</span>
                <span className="text-sm text-gray-500">تصمیمات ایمان راعی</span>
                <span className="text-sm text-gray-500">تصمیمات ایمان راعی</span>
            </div>

            <div className="flex flex-col gap-4 h-[40%] w-full">
                <div className="flex justify-center items-center w-full">
                    <div className="flex flex-col gap-2 px-4   w-full">

                        <div className="flex justify-between items-center pt-2 border-t-gray-400 border-0 border-t-[1px] border-dotted">
                            <div className="flex justify-start items-center gap-2 text-gray-400"><span className="text-2xl"><TfiLocationPin /></span><span>{informations.location}</span></div>
                            <div className="flex justify-start items-center gap-2 text-gray-400"><span className="text-2xl"><CiShoppingCart /></span><span className=" text-green-500">{informations.numberOfBuy}  خرید </span></div>
                        </div>
                        <div className="flex justify-between items-center pt-2   border-t-gray-400 border-0 border-t-[1px] border-dotted">
                            <div className="flex justify-start items-center gap-2 text-gray-400"><span className="text-2xl"><LuTimerReset /></span><span>زمان باقی مانده</span></div>
                            <div className="flex justify-start items-center gap-2 text-gray-400"><span>{informations.remainingTime[0]} : {informations.remainingTime[1]} : {informations.remainingTime[2]} : {informations.remainingTime[3]}</span></div>
                        </div>
                        <div className="flex justify-between items-center py-2 pb-4 border-t-gray-400 border-0 border-t-[1px] border-dotted">
                            <div className="flex justify-start gap-2 items-center w-[30%]">
                                <span className="text-gray-400 text-xl"><PiShareNetworkLight /></span>
                                <span className="text-gray-400  ">اشتراک با دوستان</span>
                            </div>
                            <div className="flex  text-center items-center justify-center gap-2 text-gray-400">
                                {Socials.SocialsLinks.map((link, index) => (
                                    <span key={index} className="text-gray-500 text-xl cursor-pointer hover:text-blue-500">
                                        {link.icon}
                                    </span>
                                ))}
                            </div>
                        </div>
                       
                    </div>


                </div>
              
            </div>

        </div>
    );
}

export default Informations;