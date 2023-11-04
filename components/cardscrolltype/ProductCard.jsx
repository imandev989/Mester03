

// import Button from "@mui/material/Button";
import Image from "next/image";
// import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { IoIosArrowBack } from "react-icons/io";

import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
// import ProductRating from "./ProductRating";
export default function ProductCard() {
  return (
    <div className=" flex flex-col shadow-md rounded-md">
      <div className="relative">
        <Image
          src="/images/takhfifanImage/01.webp"
          width={1280}
          height={795}
          alt="تبلیغ تخفیفانی"
          style={{ objectFit: "cover" }}
          className="rounded-t-xl"
        />
        <div className="bg-white absolute top-2 right-0  px-2 py-1 rounded-l-lg flex ">
          <span className="ml-2 text-green-700">
            <IoTicketOutline />
          </span>
          <span className="text-xs text-green-700">کوپن خرید</span>
        </div>
        <div className="bg-white absolute bottom-0 left-0 rounded-tr-lg p-2 flex ">
          <span className="ml-2 text-orange-500">
            <MdOutlineDiscount />
          </span>
          <span className="text-xs text-orange-500">۲۰٪ </span>
        </div>
        <div className="bg-white absolute top-2 left-0 rounded-r-lg p-1 flex ">
          <span className=" text-orange-500">
            <CiShoppingCart />
          </span>
          <span className="text-xs text-orange-500 font-bold">۱۰۰۰</span>
        </div>
        <div className="bg-white absolute bottom-0 right-0 rounded-tl-lg p-2 flex ">
          <span className=" text-orange-500">
            <LuEye />
          </span>
          <span className="text-xs text-orange-500 font-bold mr-1">۲۵۰۰۰</span>
        </div>
      </div>
      <div className="pt-2 pr-1 flex justify-between">
        <div>
          <span className="text-xs">استخر روباز اکباتان</span>
        </div>
        <div>
          {/* <ProductRating /> */}
        </div>
      </div>
      <div className="flex justify-between pl-2 items-center my-2">
        <div className=" text-gray-400 flex items-center">
          <div className="ml-1 text-xs"><TfiLocationPin /></div>
          <div><span className="text-gray-400 text-xs">امام رضا</span></div>
          </div>
        <div className="flex items-center cursor-pointer">
            <span className="text-sm text-blue-500">مشاهده</span>
            {/* <span className="mr-1">
              <ArrowBackIosNewOutlinedIcon
                fontSize="small"
                className="text-blue-500"
                sx={{ fontSize: 10 }}
              />
            </span> */}
            <IoIosArrowBack className="text-xl text-blue-500"/>
        </div>
      </div>
    </div>
  );
}
