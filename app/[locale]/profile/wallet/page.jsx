import { CiClock2 } from "react-icons/ci";
import { HiOutlineCreditCard } from "react-icons/hi";
import TabsWallet from "./TabsWallet";


const Wallet = () => {
  return (
    <>
    {/* desktop screen  */}


    <div className="hidden lg:flex lg:flex-col p-8 w-full gap-12">
      <div className="flex flex-col w-full mb-6 gap-2">
        <span>کیف پول</span>
        <span className="font-thin text-sm text-gray-500">
          تمامی مبالغ کیف پول قابل استفاده برای خریدهای مستری شما می باشد
        </span>
      </div>
      <div className="flex flex justify-between gap-6 w-full">
        <div className="flex flex-col shadow-lg rounded-md p-6 gap-8 w-[75%] ">
          <div className="p-6 border-b border-dashed border-gray-300">
            <span> موجودی کیف پول : 0 تومان</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center gap-2">
                <div><CiClock2 className="text-blue-500" /></div>
                <div><span className="text-sm text-gray-500">مبلغ غیر قابل برداشت :</span></div>
              </div>

              <div className="mx-auto">0 تومان</div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center items-center gap-2">
                <div><HiOutlineCreditCard className="text-blue-500" /></div>
                <div><span className="text-sm text-gray-500">کل برداشتی از کیف پول (تا امروز ) :</span></div>
              </div>

              <div className="mx-auto">0 تومان</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-md shadow-lg p-6 gap-8 w-[25%] justify-center">
          <div className=" mx-auto ">
            <span>
              مبلغ قابل برداشت :<span className="text-green-500"> 0 تومان</span>
            </span>
          </div>
          <div className="mx-auto">
            <button className="py-2 px-8 text-white bg-green-400 rounded-lg hover:bg-green-500  cursor-pointer">برداشت وجه</button>
          </div>
        </div>
      </div>
      <div><TabsWallet/></div>
    </div>



    {/* mobile screen  */}



    <div className="flex flex-col lg:hidden gap-4 m-4">
      <div className="flex flex-col rounded-lg bg-gray-100 p-4 shadow-lg">
        <div className="flex justify-center gap-4 pb-6 border-b-2 border-dashed border-gray-500 mx-6">
          <span>موجودی کیف پول</span>
          <span>۰ تومان</span>
        </div>
        <div className="flex justify-between my-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-2 items-center gap-2">
                <span><CiClock2 className="text-blue-500 text-xl" /></span>
                <span className="text-xs">مبلغ غیر قابل برگشت</span>
            </div>
            <div className="text-center"><span>۰ تومان</span></div>
          </div>
          <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-2 items-center gap-2">
                <span><HiOutlineCreditCard className="text-blue-500 text-xl" /></span>
                <span className="text-xs">کل برداشتی از کیف پول ( تا امروز )</span>
            </div>
            <div className="text-center"><span>۰ تومان</span></div>
          </div>

        </div>
      </div>
      <div className="flex flex-col rounded-lg bg-gray-100 p-4 shadow-lg  gap-4">

        <div className="text-center"><span>مبلغ قابل برداشت :</span><span>0 تومان</span></div>
        <div className="text-center"><button type="submit" value="" className="bg-green-500 text-white hover:bg-green-700 px-6 py-2 rounded-lg shadow-md">برداشت وجه</button></div>

      </div>
      <div className="flex flex-col rounded-lg bg-gray-100 p-4 shadow-lg content-center gap-4">
        قسمت تب بار
      </div>

    </div>
    
    
    </>
  );
};

export default Wallet;
