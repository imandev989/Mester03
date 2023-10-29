import { getSocials } from "./socialData.js";
import { getInformationData } from "./informationData";
import SliderMobile from "./SliderMobile.jsx";
import { CiShoppingCart } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { PiShareNetworkLight } from "react-icons/pi";


const MobileSlider = () => {
    const informations = getInformationData()[0];
    const Socials = getSocials();
    return (
        <div className="flex flex-col gap-2 lg:hidden">
            <div className="flex justify-between  py-2">
                <div><span className="text-sm text-bold text-orange-500 px-4">استخر رو باز اوین</span></div>
                <div><span className="bg-orange-500 rounded-r-xl py-2 text-sm px-4 absolute left-0  text-white">20%</span></div>
            </div>
            <div><SliderMobile /></div>
            <div className="flex justify-center items-center gap-4 my-4">
                <div><span className="text-gray-400 border-l-gray-500 border-dotted border-l-[1px] border-0  pl-2 line-through text-sm">2000 تومان</span></div>
                <div><span className="text-green-500">2000 تومان</span></div>
            </div>
            <div className="flex flex-col gap-4  w-full">
                <div className="flex justify-center items-center w-full">
                    <div className="flex flex-col gap-2 px-4   w-full">

                        <div className="flex justify-between items-center pt-2 border-t-gray-400 border-0 border-t-[1px] border-dotted">
                            <div className="flex justify-start items-center  text-gray-500">
                                {/* <span className="text-2xl"><TfiLocationPin /></span> */}
                                <span>{informations.location}</span>
                            </div>
                            <div className="flex justify-start items-center  text-gray-500">
                                {/* <span className="text-2xl"><CiShoppingCart /></span> */}
                                <span className=" text-green-500">{informations.numberOfBuy}  خرید </span>
                                </div>
                        </div>
                        <div className="flex justify-between items-center pt-2  border-t-gray-400 border-0 border-t-[1px] border-dotted">
                            <div className="flex justify-start items-center gap-2 text-gray-500">
                                {/* <span className="text-2xl"><TfiLocationPin /></span> */}
                                <span>زمان باقی مانده</span>
                            </div>
                            <div className="flex justify-start items-center gap-2 text-gray-500">
                                {/* <span className="text-2xl"><CiShoppingCart /></span> */}
                                <span className=" text-green-500">{informations.remainingTime[0]} : {informations.remainingTime[1]} : {informations.remainingTime[2]} : {informations.remainingTime[3]}</span>
                                </div>
                        </div>
                        <div className="flex justify-between items-center  py-2 border-t-gray-400 border-0 border-t-[1px] border-dotted">
                            <div className="flex justify-start  items-center ">
                                {/* <span className="text-gray-400 text-xl"><PiShareNetworkLight /></span> */}
                                <span className="text-gray-400 text-xs ">اشتراک با دوستان</span>
                            </div>
                            <div className="flex gap-2 py-2 items-center justify-between  ">
                                {Socials.SocialsLinks.map((link, index) => (
                                    <span key={index} className="text-gray-500  cursor-pointer hover:text-blue-500">
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

export default MobileSlider;