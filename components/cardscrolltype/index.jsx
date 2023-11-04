// "use client"
// import ProductCard from "./ProductCard";
import ProductCard from "./ProductCard";
// import { storeData } from "./storeData";
import { getData } from "./storeData";

import { IoIosArrowBack } from "react-icons/io";

const CardScrollType = () => {
  // console.log("STOREDATA", storeData);
  const datas= getData();
  return (
    <div className="container mx-auto flex flex-col p-2">
      <div className="flex justify-between m-2">
        <div>
          <span className="text-lg">استخرهای پرطرفدار</span>
        </div>
        <div className="flex cursor-pointer items-center">
          <span className="text-sm text-blue-500 ">مشاهده همه </span>
          <span>
            <IoIosArrowBack className="text-blue-500 text-xl" />
          </span>
        </div>
      </div>
      <div className="flex gap-2  py-2 overflow-x-scroll  scroll-smooth scrollbar-hide">
        {datas.map((item, key) => (
          <div className="  w-[80%]  shrink-0 sm:w-[35%] md:w-[30%]"  key={key}>
              
            <ProductCard  />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default CardScrollType;
