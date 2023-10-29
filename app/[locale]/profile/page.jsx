"use client";



import { TbEdit } from "react-icons/tb";
import { useState } from "react";


const Profile = () => {
    const [personalEdit, setPersonalEdit] = useState(false);
    const [bankEdit, setBankEdit] = useState(false);

    return (

        <>
            <div className="hidden lg:flex lg:flex-col justify-between gap-8  w-full p-4">
                <div className="flex flex-col  w-full h-full bg-white rounded-lg">
                    <div className="flex justify-between items-center">
                        <div className="border-b-2 border-blue-500 pb-4 pt-4  px-2 mx-4  w-[20%] mb-4 text-center">
                            <span className="text-blue-700  font-bold	 text-center ">اطلاعات شخصی</span>
                        </div>
                        <div className="flex justify-end items-center pb-4 pt-4  px-2 mx-4 mb-4 gap-2 cursor-pointer   border-b-2 border-gray-300 w-[80%]">
                            <div><TbEdit className="text-blue-700" /></div>
                            <div><span>ویرایش اطلاعات</span></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap  w-full gap-6 mx-6 mb-4">
                        <div className="shrink-0 w-[30%] bg-gray-100 rounded-lg p-2">
                            <div className="flex flex-col gap-2">
                                <span className="flex justify-start text-gray-500 text-sm">نام و نام خانوادگی :</span>
                                <span className="flex justify-end text-gray-500 text-sm">ایمان نمازی بایگی</span>
                            </div>
                        </div>
                        <div className="shrink-0 w-[30%] bg-gray-100 rounded-lg p-2">
                            <div className="flex flex-col gap-2">
                                <span className="flex justify-start text-gray-500 text-sm">کد ملی :</span>
                                <span className="flex justify-end text-gray-500 text-sm">092929292</span>
                            </div>
                        </div>
                        <div className="shrink-0 w-[30%] bg-gray-100 rounded-lg p-2">
                            <div className="flex flex-col gap-2">
                                <span className="flex justify-start text-gray-500 text-sm">شماره موبایل :</span>
                                <span className="flex justify-end text-gray-500 text-sm">09355352071</span>
                            </div>
                        </div>
                        <div className="shrink-0 w-[30%] bg-gray-100 rounded-lg p-2">
                            <div className="flex flex-col gap-2">
                                <span className="flex justify-start text-gray-500 text-sm">پست الکترونیک :</span>
                                <span className="flex justify-end text-gray-500 text-sm">iman.dev989@gmail.com</span>
                            </div>
                        </div>
                        <div className="shrink-0 w-[30%] bg-gray-100 rounded-lg p-2">
                            <div className="flex flex-col gap-2">
                                <span className="flex justify-start text-gray-500 text-sm">تاریخ تولد :</span>
                                <span className="flex justify-end text-gray-500 text-sm">1368/08/22</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex flex-col  w-full h-full bg-white rounded-lg">
                    <div className="flex justify-between items-center">
                        <div className="border-b-2 border-blue-500 pb-4 pt-4  px-2 mx-4  w-[20%] mb-4 text-center">
                            <span className="text-blue-700  font-bold	 text-center ">اطلاعات بانکی</span>
                        </div>
                        <div className="flex justify-end items-center pb-4 pt-4  px-2 mx-4 mb-4 gap-2 cursor-pointer   border-b-2 border-gray-300 w-[80%]">
                            <div><TbEdit className="text-blue-700" /></div>
                            <div><span>ویرایش اطلاعات</span></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap  w-full gap-6 mx-6 mb-4">
                        <div className="shrink-0 w-[30%] bg-gray-100 rounded-lg p-2">
                            <div className="flex flex-col gap-2">
                                <span className="flex justify-start text-gray-500 text-sm">شماره کارت :</span>
                                <span className="flex justify-end text-gray-500 text-sm">6037 9971 5252 5252</span>
                            </div>
                        </div>
                        <div className="shrink-0 w-[30%] bg-gray-100 rounded-lg p-2">
                            <div className="flex flex-col gap-2">
                                <span className="flex justify-start text-gray-500 text-sm">شماره شبا:</span>
                                <span className="flex justify-end text-gray-500 text-sm">2323456465456</span>
                            </div>
                        </div>


                    </div>

                </div>
            </div>



            {/* mobile content */}

            <div className="flex flex-col lg:hidden gap-6">
                <div className="bg-gray-100 m-4 shadow-lg rounded-lg px-4 py-6">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between items-center text-sm">
                            <span>نام و نام خانوادگی</span>
                            <span>ایمان نمازی بایگی</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>کد ملی</span>
                            <span>092929292</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>شماره موبایل</span>
                            <span>09355352071</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>پست الکترونیک</span>
                            <span>iman.dev989@gmail.com</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>تاریخ تولد</span>
                            <span>1368/08/22</span>
                        </div>
                        <div className="flex justify-center gap-2 items-center  cursor-pointer">
                            <span><TbEdit className="text-blue-700 text-2xl" /></span>
                            <span>ویرایش اطلاعات</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 m-4 shadow-lg rounded-lg px-4 py-8">
                    <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center text-sm">
                            <span>شماره کارت</span>
                            <span>6037 5656 0813 1211</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>شماره شبا</span>
                            <span>IR1800000003215641651</span>
                        </div>
                        <div className="flex justify-center gap-2 items-center  cursor-pointer">
                            <span><TbEdit className="text-blue-700 text-2xl" /></span>
                            <span>ویرایش اطلاعات</span>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Profile;