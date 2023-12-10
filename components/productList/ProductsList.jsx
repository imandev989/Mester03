"use client";

import { getProductList } from "./list";
import { CiShoppingBasket } from "react-icons/ci";
import Image from "next/image";
import ProductExtraPopup from "./ProductExtraPopup";
import { useState } from "react";

const ProductsList = () => {
  const datas = getProductList();
  console.log("DATASSSS", datas);
  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 254)}...` : input;

  const checkStatus = (status) => {
    if (status) {
      setShowPopUp(true);
    } else {
      alert("Added To Basket");
    }
  };
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="py-4  flex flex-col lg:flex-row gap-2  lg:h-[50vh] ">
      <div className="w-[100%] lg:w-[20%] pl-2 flex  justify-end lg:h-full border-gray-500  border rounded-lg border-dotted">
        <ul className="my-4 flex shrink-0 gap-2 lg:flex-col overflow-y-scroll scrollbar-hide ">
          {datas.map((data, key) => (
            <li
              key={key}
              className="text-gray-500 text-left cursor-pointer lg:border-0 lg:border-gray-800 lg:border-l-2 pl-2  my-2 text-xs "
            >
              {data.title}
            </li>
          ))}
        </ul>
      </div>
      <div className=" border border-gray-300 p-2 rounded-lg w-full lg:w-[80%]  overflow-y-scroll  h-[50vh]  lg:h-full ">
        {datas.map((data, key) => (
          <div
            className="flex flex-col lg:flex-row lg:justify-center lg:items-center  shrink-0  gap-4 "
            key={key}
          >
            <div className="text-center mt-4 border md:hidden border-gray-500 pb-4 border-x-0 border-t-0 border-dotted">
              {" "}
              {data.title}
            </div>
            {data.products.map((product, key) => {
              return (
                <div
                  className="flex flex-col gap-2 md:min-h-[200px] md:max-h-[4000px]  mb-6 p-2 border border-gray-500 border-x-0 border-t-0 pb-4 border-dotted"
                  key={key}
                >
                  <div className="flex justify-center gap-6  mb-4 lg:pr-8">
                    <div className="flex flex-col gap-2 w-[60%] lg:w-[70%]">
                      <p>{product.title}</p>
                      <p className="text-xs">{truncate(product.desc)}</p>
                    </div>
                    <div className="w-[40%] lg:w-[30%]">
                      <Image
                        src="/images/productImage/01.jpg"
                        priority={true}
                        width={100}
                        height={100}
                        alt="بنر تبلیغ"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  {product.hasItems ? (
                    product.items.map((item, key) => {
                      return (
                        <div className="flex justify-between gap-6 " key={key}>
                          <div className="flex flex-col">
                            <p className="text-xs">{item.title}</p>
                            <p className="text-xs">{item.price} تومان</p>
                          </div>
                          <div>
                            <div
                              className="px-8 py-2 text-white text-sm bg-gray-800 rounded-2xl"
                              onClick={() => checkStatus(item.hasOptions)}
                            >
                              افزودن
                            </div>{" "}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="px-8 py-2 text-white text-sm bg-gray-800 rounded-2xl">
                      افزودن
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className=" lg:w-[20%] lg:block hidden border border-dotted rounded-lg border-gray-700 lg:h-full ">
        <div className="flex flex-col gap-4 justify-center items-center p-4  h-full">
          <span className="text-gray-400 text-5xl">
            <CiShoppingBasket />
          </span>
          <span className="text-gray-400 text-sm">سبد خرید شما خالی است!</span>
        </div>
      </div>
      <div className=" h-[50vh] lg:hidden border border-dotted rounded-lg border-gray-700">
        <div className="flex flex-col gap-4 justify-center items-center p-4  h-full">
          <span className="text-gray-400 text-5xl">
            <CiShoppingBasket />
          </span>
          <span className="text-gray-400 text-sm">سبد خرید شما خالی است!</span>
        </div>
      </div>
      {showPopUp && (
        <ProductExtraPopup showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
      )}
    </div>
  );
};

export default ProductsList;
