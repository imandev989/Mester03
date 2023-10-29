
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
// import ProductRating from "@/components/cardscrolltype/ProductRating";

const ProductsCards = () => {
  return (
    <div className="flex flex-col shadow-lg rounded-md  ">
      <div className="relative max-w-sm overflow-hidden ">
        <Image
          src="/images/netbarg/02.jpg"
          width={561}
          height={393}
          alt="تبلیغ تخفیفانی"
          style={{ objectFit: "cover" }}
          className="rounded-md"
          priority={true}
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
      <div className="p-2  flex justify-between mt-2">
        <div>
          <span className="text-xs">استخر روباز اکباتان</span>
        </div>
        <div>
          {/* <ProductRating /> */}
        </div>
      </div>
      <div className="flex justify-between pl-2 items-center my-2 px-2">
        <div className=" text-gray-400 flex items-center">
          <div className="ml-1 text-xs">
            <TfiLocationPin />
          </div>
          <div>
            <span className="text-gray-400 text-xs">امام رضا</span>
          </div>
        </div>
        <div className="flex gap-1 ">
            <span className="text-gray-500 text-sm">مشاهده</span>
            <span>
              <IoIosArrowBack
                className="text-blue-500 text-xl" 
              />
            </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
