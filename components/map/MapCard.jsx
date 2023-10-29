"use client"

import Image from "next/image";

import { BiBasket } from "react-icons/bi";


const MapCard = () => {
    return (
        <div className="flex flex-col rounded-md w-full">
            <div className="bg-gray-100 p-2 w-full ">
                <div className="flex justify-start gap-2">
                    <div className="w-[50%]  lg:hidden">
                        <Image
                            src="/images/takhfifanImage/01.webp"
                            width={120}
                            height={80}
                            alt="تبلیغ تخفیفانی"
                            style={{ objectFit: "cover" }}

                        />
                    </div>
                    <div className="w-[50%] hidden lg:flex">
                        <Image
                            src="/images/takhfifanImage/01.webp"
                            width={240}
                            height={80}
                            alt="تبلیغ تخفیفانی"
                            style={{ objectFit: "cover" }}

                        />
                    </div>

                    <div className="flex flex-col justify-start w-[50%]">
                        <div>
                            <p className="text-xs py-2">بوفه صبحانه هتل ۴ ستاره بین الملی قصر طلایی</p>
                        </div>
                        <div className="text-xs text-gray-500">هتل بین المللی قصر طلایی</div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between bg-gray-100 p-1 w-full px-1">
                <div className="flex gap-1"><span><BiBasket className="text-xl text-gray-300" /></span><span>۰</span></div>
                <div>
                    <div className="flex justify-between  divide-x-[1px] divide-x-reverse pt-1">
                        <div className=" text-center px-2">
                            <span className="text-sm text-green-300 ">۲۰۰۰۰ تومان</span>
                        </div>
                        <div className="  text-center px-2">
                            <div className="rounded-full bg-orange-400 ">
                                <span className="text-xs text-white px-2">٪۱۵</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapCard;