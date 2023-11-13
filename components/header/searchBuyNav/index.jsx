"use client";

import Logo from "./Logo";
import Search from "./Search";
import ProfileControl from "./ProfileControl";
import { AiOutlineMenu } from "react-icons/ai";
import { sidebarChange } from "@/redux/reducers/configSlice";
import { useSelector, useDispatch } from "react-redux";

const SearchBuyNav = () => {
  // for redux sidebar
  const sidebarShow = useSelector((state) => state.configs.sidebarToggle);
  const dispatch = useDispatch();

  // console.log("SIDEBAR", sidebarShow);

  return (
    <div className="flex justify-between py-2 px-4 items-center gap-2 ">
      <div
        className=" lg:hidden cursor-pointer text-2xl"
        onClick={() => dispatch(sidebarChange(sidebarShow))}
      >
        <AiOutlineMenu />
      </div>
      <div className="  lg:flex lg:flex-1">
        <Logo />
      </div>
      <div className="  hidden lg:block flex-[5]">
        <Search />
      </div>
      <div className=" flex-1">
        <ProfileControl />
      </div>
    </div>
  );
};

export default SearchBuyNav;
