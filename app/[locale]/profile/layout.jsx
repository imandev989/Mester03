"use client";

import WalletAvatar from "@/components/profile/WalletAvatar";
import ProfileMenu from "@/components/profile/ProfileMenu";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const [showItem, setShowItem] = useState(true);
  // const router = useRouter()
  const router = useRouter();

  const handleback = () => {
    setShowItem(false);
    router.back();
  };

  return (
    <div className="container mx-auto  h-full my-6 bg-gray-300 p-2 rounded-md">
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
          <div className="fixed top-0 right-0 bottom-0 left-0 w-full h-full bg-white pt-28 ">
            <div className="p-4 text-4xl" onClick={() => handleback()}>
              <IoIosArrowForward />
            </div>

            {children}
          </div>
        )}
      </div>
    </div>
  );
}
