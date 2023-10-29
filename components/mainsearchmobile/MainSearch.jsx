"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import MobileSearch from "./MobileSearch";
import { searchChange } from "@/redux/reducers/configSlice";
import { useSelector, useDispatch } from "react-redux";

const MainSearch = ()=> {
    // const [showSidebar, setShowSidebar] = useState(true);

    const searchShow = useSelector(state => state.configs.searchToggle);
    // console.log("S",searchShow)
    const dispatch = useDispatch();


  return (
    <div className="h-full">
    
    <div
    className={`lg:hidden overflow-auto top-0 bottom-0 right-0 left-0 w-full bg-blue-300  text-white fixed  z-50 ease-in-out duration-300 ${
      searchShow ? "translate-x-0 " : "translate-x-full"
    } z-[999]`}>
         {/* {showSidebar && (
      <button
        className=" flex text-4xl  text-black items-center cursor-pointer  z-50"
        onClick={() => setShowSidebar(!showSidebar)}
      >
              <IoClose className="text-3xl"/>
  
      </button>
    )} */}
     
      <div className="text-xl  w-full "><MobileSearch/></div>
    </div>
  </div>
  );
}

export default MainSearch;