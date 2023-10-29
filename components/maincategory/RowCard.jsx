import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
// import ProductRating from "@/components/cardscrolltype/ProductRating";


const RowCard = () => {
  return (
    <div className="w-full bg-white  p-2 flex flex-col rounded-lg shadow-lg h-[15vh] sm:h-[20vh]">
      <div className=" flex justify-between h-[80%] sm:h-full border-dashed border-b-[1px] border-gray-300 sm:border-none">
        <div className="w-[40%] sm:w-[30%] h-full  overflow-hidden object-cover">
          <Image
            src="/images/takhfifanImage/01.webp"
            width={1560}
            height={969}
            alt="تبلیغ تخفیفانی"
            style={{ objectFit: "cover" }}
            className="sm:rounded-r-lg"
          />
        </div>
        <div className="w-[70%] flex justify-between ">
          <div className="w-full sm:w-[75%] flex flex-col px-2">
            <div className="h-full sm:h-[80%] pt-2">
              <div>
                <p className="text-sm sm:text-md">استخر رو باز هتل اوین</p>
              </div>
              <div className="hidden sm:block mt-2">
                <p className="text-gray-400 text-xs">
                  استخر روباز هتل اوین در مجموعه ورزشی کاجکو ویژه آقایان تا 25%
                  تخفیف و پرداخت تنها 225,000 تومان
                </p>
              </div>
              
            </div>
            <div className="flex sm:hidden items-center">
                <div className="text-xs">
                  <CiShoppingCart />
                </div>
                <div className="text-xs text-gray-400">۲۰۴۲ خرید</div>
              </div>
            <div className="hidden sm:flex sm:justify-between sm:h-[20%]  border-t-[1px] border-dashed p-2">
              <div className="flex justify-start items-center gap-1">
                <div className="text-sm">
                  <TfiLocationPin />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">امام رضا</span>
                </div>
              </div>
              <div className="flex justify-end items-center gap-1">
                <div className="text-lg">
                  <CiShoppingCart />
                </div>
                <div className="text-sm text-gray-400">۲۰۴۲ خرید</div>
              </div>
            </div>
          </div>
          <div className="hidden  sm:flex sm:flex-col border-r-[1px] border-dashed sm:w-[25%] pr-2 gap-2">
            <div className="relative">
              <div className="absolute -left-2 top-2 text-white bg-orange-400 px-4 py-1 rounded-r-xl shadow-xl">
                <span>٪۲۵</span>
              </div>
            </div>
            <div className="mt-16 tetx-center mx-auto ">
              <span className="text-green-400">۲۲۵۰۰۰ تومان</span>
            </div>
            
            <div className="mx-auto mt-6">
              <button
                className="text-white text-xs lg:text-md bg-green-500 hover:bg-green-300 px-1 lg:px-4 py-2 rounded-lg shadow-xl"
              >
              مشاهده و خرید
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20%] w-full sm:hidden flex justify-between items-center py-4 mb-2">
        <div className="flex justify-start items-center gap-1">
          <div className="text-sm">
            <TfiLocationPin />
          </div>
          <div>
            <span className="text-gray-300 text-xs">امام رضا</span>
          </div>
        </div>
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
  );
};

export default RowCard;
