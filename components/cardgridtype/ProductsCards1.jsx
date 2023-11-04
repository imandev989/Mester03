
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
// import ProductRating from "../cardscrolltype/ProductRating";

const ProductsCards1 = () => {
  return (
    <div className="grid grow">
      <div className="rounded-md overflow-hidden shadow-lg">
        <div className="relative">
          <div>
          <Image
            priority={true}
            src="/images/netbarg/01.jpeg"
            width={760}
            height={644}
            alt="تبلیغ تخفیفانی"
            style={{ objectFit: "cover" }}
            // className="rounded-t-xl"
          />
          </div>

          <div className="bg-white absolute top-2 right-0  px-2 py-1 rounded-l-lg flex ">
            <div className="ml-2 text-green-700">
              <IoTicketOutline />
            </div>
            <span className="text-xs text-green-700">کوپن خرید</span>
          </div>
          <div className="bg-white absolute bottom-0 left-0 rounded-tr-lg p-2 flex ">
            <div className="ml-2 text-orange-500">
              <MdOutlineDiscount />
            </div>
            <span className="text-xs text-orange-500">۲۰٪ </span>
          </div>
          
        </div>
        
        <div className="flex flex-col p-2">
        <div className="  flex justify-between mt-2 p-2">
          <div>
            <span className="text-md">استخر روباز اکباتان</span>
          </div>
          <div>
            {/* <ProductRating /> */}
          </div>
        </div>
         
          <div className="flex justify-between pl-2 items-center ">
          <div className="bg-white  top-2 left-0 rounded-r-lg p-1 flex items-center gap-1">
            <div className=" text-orange-500">
              <CiShoppingCart />
            </div>
            <span className=" text-orange-500 font-bold">۱۰۰۰</span>
          </div>
          <div className="bg-white  bottom-0 right-0 rounded-tl-lg p-2 flex items-center gap-1">
            <span className=" text-orange-500">
              <LuEye />
            </span>
            <span className=" text-orange-500 font-bold mr-1">
              ۲۵۰۰۰
            </span>
          </div>
          </div>
          <div className="flex justify-between px-2 items-center my-2">
            <div className=" text-gray-400 flex items-center">
              <div className="ml-1 ">
                <TfiLocationPin />
              </div>
              <div>
                <span className="text-gray-400 text-sm">امام رضا</span>
              </div>
            </div>
            <div className="flex  items-center ">
                <span className="text-blue-500  text-md cursor-pointer">مشاهده </span>
                <span>
                  <IoIosArrowBack
                    className="text-blue-500 text-xl"
                  />
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards1;
