import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";

const GridCard = () => {
  return (
    <div className="flex flex-col rounded-lg p-2 bg-white shadow-lg">
      <div className="h-[80%] w-full">
        <Image
          src="/images/takhfifanImage/01.webp"
          width={1560}
          height={969}
          alt="تبلیغ تخفیفانی"
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="h-[10%] w-full">
        <div className="flex justify-between">
          <div>
            <span>استخر رو باز هتل اوین</span>
          </div>
          <div className="flex gap-1">
            <div>
              <span>۲۴</span>
            </div>
            <div className="text-xl">
              <CiShoppingCart />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10%] w-full p-2 mb-4">
        <div className="flex justify-between">
          <div className="flex justify-start items-center gap-1">
            <div className="text-sm">
              <TfiLocationPin />
            </div>
            <div>
              <span className="text-gray-300 text-sm">امام رضا</span>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex justify-between  divide-x-[1px] divide-x-reverse pt-1 ">
              <div className=" text-center px-2">
                <span className="text-sm text-green-300 ">۲۰۰۰۰ تومان</span>
              </div>
              <div className="  text-center px-2">
                <div className="rounded-full bg-orange-400  ">
                  <span className="text-xl text-white px-4 py-2">٪۱۵</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
