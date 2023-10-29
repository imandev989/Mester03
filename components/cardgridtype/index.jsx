import { IoIosArrowBack } from "react-icons/io";

import ProductsCards from "./ProductsCards";
import ProductsCards1 from "./ProductsCards1";
import SeeMore from "./SeeMore";


const CardGridType = () => {

  return (
    <div className=" my-2 p-2">
      <div className=" container mx-auto hidden lg:flex lg:flex-col sm:p-2">
        <div className="hidden sm:flex sm:justify-between m-2 p-2">
          <div>
            <span className="text-lg">استخرهای پرطرفدار</span>
          </div>
          
        </div>
        <div className="hidden sm:grid sm:grid-cols-4 sm:grid-rows-2 ">
          <div className="grid sm:grid sm:col-start-1 sm:col-span-2 sm:row-start-1 sm:row-span-2 p-1 border-solid border-l-slate-950 ">
            <ProductsCards1 />
          </div>
          <div className="grid sm:grid sm:col-start-3 sm:col-span-1 sm:row-start-1 sm:row-span-1 p-1">
            <ProductsCards />
          </div>
          <div className="grid sm:grid sm:col-start-4 sm:col-span-1 sm:row-start-1 sm:row-span-1 p-1">
            <ProductsCards />
          </div>
          <div className="grid sm:grid sm:col-start-3 sm:col-span-1 sm:row-start-2 sm:row-span-1 p-1">
            <ProductsCards />
          </div>
          <div className="grid sm:grid sm:col-start-4 sm:col-span-1 sm:row-start-2 sm:row-span-1 p-1 border shadow-lg border-gray-200 rounded-md">
            <SeeMore />
          </div>
        </div>

      </div>


      <div className="container mx-auto flex flex-col p-2 lg:hidden">
        <div className="lg:hidden flex justify-between m-2">
          <div>
            <span className="text-lg">استخرهای پرطرفدار</span>
          </div>
          <div className="flex gap-2">
            <span className="text-sm text-blue-500">مشاهده همه </span>
            <span>
              <IoIosArrowBack
                
                className="text-blue-500 text-xs"
              />
            </span>
          </div>
        </div>
        <div className="lg:hidden flex gap-2 rounded-md border-slate-950  p-2 overflow-x-scroll  scroll-smooth scrollbar-hide">
         <div className=" w-[80%]  shrink-0 sm:w-[35%] md:w-[30%]"><ProductsCards /></div>
         <div className=" w-[80%]  shrink-0 sm:w-[35%] md:w-[30%]"> <ProductsCards /></div>
         <div className=" w-[80%]  shrink-0 sm:w-[35%] md:w-[30%]"> <ProductsCards /></div>
         <div className=" w-[80%]  shrink-0 sm:w-[35%] md:w-[30%]"> <ProductsCards /></div>
         <div className=" w-[80%]  shrink-0 sm:w-[35%] md:w-[30%]"> <ProductsCards /></div>
        </div>
       
      </div>

    </div>
  );
};

export default CardGridType;
