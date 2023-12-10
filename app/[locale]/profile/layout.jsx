"use client";

import WalletAvatar from "@/components/profile/WalletAvatar";
import ProfileMenu from "@/components/profile/ProfileMenu";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const [showItem, setShowItem] = useState(false);
  // const router = useRouter()
  const router = useRouter();

  const handleback = () => {
    setShowItem(false);
    router.back();
  };

  return (
    <div className="container mx-auto  h-full my-6 p-2 rounded-md">
      <div className="hidden lg:flex justify-between items-start  gap-4 h-[100%] 	">
        <div className="flex flex-col w-full lg:w-[25%]  mx-4 lg:mx-0 gap-4 h-[100%] ">
          <div className="bg-gray-100 shadow-lg rounded-lg">
            <WalletAvatar />
          </div>
          <div className="bg-gray-100 shadow-lg rounded-lg">
            <ProfileMenu setShowItem={setShowItem} />
          </div>
        </div>
        <div className="hidden  lg:flex  w-[75%] h-[100%] bg-gray-100 shadow-lg rounded-lg  b mx-2">
          {children}
        </div>
      </div>

      {/* mobile section */}

      <div className="flex justify-between items-center gap-4 lg:hidden">
        <div className="flex flex-col w-full lg:w-[25%]  mx-4 lg:mx-0 gap-4 h-[100%]">
          <div className="bg-gray-100 shadow-lg rounded-lg">
            <WalletAvatar />
          </div>
          <div className="bg-gray-100 shadow-lg rounded-lg">
            <ProfileMenu showItem={showItem} setShowItem={setShowItem} />
          </div>
        </div>
        {showItem && (
          <div className="fixed top-0 right-0 bottom-0 left-0 w-full h-full bg-white pt-32">
            <div
              className="flex gap-2 items-center p-2 rounded-md text-sm mb-4 text-white bg-gray-800 w-[30%] mr-4 "
              onClick={() => handleback()}
            >
              <IoIosArrowForward className="text-2xl" />
              <p className="text-sm">پروفایل</p>
            </div>

            {children}
          </div>
        )}
      </div>
    </div>
  );
}
