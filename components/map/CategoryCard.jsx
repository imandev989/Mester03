"use client";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";


const CategoryCard = () => {
    return (
        <div className="w-full flex flex-col p-2 divide-y divide-gray-300 ">
            <div className="flex justify-between gap-1 py-1">
                <div className="w-[20%]   pr-3">
                    <input type="checkbox" />
                </div>
                <div className="w-[80%] flex justify-end   items-center gap-2">
                    <span className="text-gray-500 text-xs">تمامی پیشنهادات</span><span className="pl-2"><BsGrid3X3Gap className="text-xl text-orange-500" /></span>
                </div>
            </div>
            <div className="flex justify-between gap-1 py-1">
                <div className="w-[20%]   pr-3">
                    <input type="checkbox" />
                </div>
                <div className="w-[80%] flex justify-end   items-center gap-2">
                <span className="text-gray-500 text-xs">تغریحی و ورزشی </span><span className="pl-2"><FaMapMarkerAlt className="text-xl text-pink-500" /></span>
                </div>
            </div>
            <div className="flex justify-between gap-1 py-1">
                <div className="w-[20%]   pr-3">
                    <input type="checkbox" />
                </div>
                <div className="w-[80%] flex justify-end   items-center gap-2">
                <span className="text-gray-500 text-xs">زیبایی و آرایشی </span><span className="pl-2"><FaMapMarkerAlt className="text-xl text-purple-600" /></span>
                </div>
            </div>
            <div className="flex justify-between gap-1 py-1">
                <div className="w-[20%]   pr-3">
                    <input type="checkbox" />
                </div>
                <div className="w-[80%] flex justify-end   items-center gap-2">
                <span className="text-gray-500 text-xs">رستوران و فست فود </span><span className="pl-2"><FaMapMarkerAlt className="text-xl text-green-400" /></span>
                </div>
            </div>
            <div className="flex justify-between gap-1 py-1">
                <div className="w-[20%]   pr-3">
                    <input type="checkbox" />
                </div>
                <div className="w-[80%] flex justify-end   items-center gap-2">
                <span className="text-gray-500 text-xs"> هنر و تئاتر</span><span className="pl-2"><FaMapMarkerAlt className="text-xl text-orange-400" /></span>
                </div>
            </div>
            <div className="flex justify-between gap-1 py-1">
                <div className="w-[20%]   pr-3">
                    <input type="checkbox" />
                </div>
                <div className="w-[80%] flex justify-end   items-center gap-2">
                <span className="text-gray-500 text-xs">پزشکی و سلامت</span><span className="pl-2"><FaMapMarkerAlt className="text-xl text-blue-400" /></span>
                </div>
            </div>
            <div className="flex justify-between gap-1 py-1">
                <div className="w-[20%]   pr-3">
                    <input type="checkbox" />
                </div>
                <div className="w-[80%] flex justify-end   items-center gap-2">
                <span className="text-gray-500 text-xs">آموزشی </span><span className="pl-2"><FaMapMarkerAlt className="text-xl text-red-400" /></span>
                </div>
            </div>
            <div className="flex justify-between gap-1 py-1">
                <div className="w-[20%]   pr-3">
                    <input type="checkbox" />
                </div>
                <div className="w-[80%] flex justify-end   items-center gap-2">
                <span className="text-gray-500 text-xs"> تورهای مسافرتی</span><span className="pl-2"><FaMapMarkerAlt className="text-xl text-yellow-300" /></span>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;