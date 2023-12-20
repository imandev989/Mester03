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
    <div className="lg:py-4 relative flex flex-col lg:flex-row gap-2 ">
      <div className="w-[100%] lg:w-[20%] lg:h-[400px] lg:pl-2 flex bg-rose-100 justify-end sticky top-[150px] lg:top-[210px] right-0 border-gray-500  lg:border lg:rounded-lg lg:border-dotted ">
        <ul className="my-4 flex shrink-0 gap-2 lg:flex-col overflow-y-scroll scrollbar-hide ">
          {datas.map((data, key) => (
            <li
              key={key}
              className="text-gray-500 text-left cursor-pointer lg:border-0 lg:border-gray-800 lg:border-l-0 pl-2  my-2 text-xs  "
            >
              {data.title}
            </li>
          ))}
        </ul>
      </div>
      <div className=" border border-gray-300  rounded-lg w-full lg:w-[60%]    ">
        {datas.map((data, key) => (
          <div className="   mb-6" key={key}>
            <div className="lg:my-4 ">
              <p className="text-center">{data.title}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-x-0 border-gray-300  ">
              {data.products.map((product, key) => {
                return (
                  <div
                    key={key}
                    className=" border border-r-0 lg:last:border-l-0  border-gray-300  p-4"
                  >
                    <div>
                      <div className="flex justify-center gap-6  mb-4 lg:pr-8 ">
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
                            <div
                              className="flex justify-between gap-6 "
                              key={key}
                            >
                              <div className="flex flex-col">
                                <p className="text-xs">{item.title}</p>
                                <p className="text-xs">{item.price} تومان</p>
                              </div>
                              <div>
                                <div
                                  className="px-8 py-2 text-white text-sm bg-gray-800 hover:bg-gray-900 rounded-2xl w-[100px] mb-2 cursor-pointer"
                                  onClick={() => checkStatus(item.hasOptions)}
                                >
                                  افزودن
                                </div>{" "}
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className=" py-2 text-center text-white text-sm bg-gray-800 hover:bg-gray-900  rounded-2xl  w-[100px]  mx-auto cursor-pointer">
                          افزودن
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className=" lg:w-[20%] lg:block hidden border border-dotted rounded-lg border-gray-700 lg:h-[400px] sticky top-[210px] ">
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
