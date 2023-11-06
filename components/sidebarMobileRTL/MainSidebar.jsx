"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import MainSidebarContetnt from "./MainSidebarContetnt";
import { sidebarChange } from "@/redux/reducers/configSlice";
import { useSelector, useDispatch } from "react-redux";

const MainSidebar = () => {
  // const [showSidebar, setShowSidebar] = useState(true);

  const sidebarShow = useSelector((state) => state.configs.sidebarToggle);
  const blurPage = useSelector((state) => state.configs.blurPage);
  // console.log("S",sidebarShow)
  const dispatch = useDispatch();

  return (
    <div className="h-full">
      <div className={`${blurPage ? "blur" : ""}`}></div>
      <div
        className={`lg:hidden overflow-auto top-0 right-0 w-[60vw] bg-gray-200  p-1  text-white fixed h-full z-40 ease-in-out duration-300 ${
          sidebarShow ? "translate-x-0 " : "translate-x-full"
        } z-[999] `}
      >
        {sidebarShow && (
          <button
            className=" flex text-4xl  text-gray-900 items-center cursor-pointer  z-50"
            onClick={() => dispatch(sidebarChange(sidebarShow))}
          >
            <IoClose className="text-3xl" />
          </button>
        )}
        <div className="mt-5 text-xl  w-full ">
          <MainSidebarContetnt />
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;
