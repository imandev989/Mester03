"use client";

// import { SwipeableDrawer, Typography } from "@mui/material";
// import { Box, Divider } from "@/lib/mui";

import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { searchChange } from "@/redux/reducers/configSlice";
import { useSelector, useDispatch } from "react-redux";

import { FiShoppingCart } from "react-icons/fi";

import { useState } from "react";
import Link from "next/link";

const ProfileControl = () => {
  // const drawerBleeding = 56;

  const searchShow = useSelector((state) => state.configs.searchToggle);
  const dispatch = useDispatch();

  // const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <div className="flex justify-end">
        {/* dar mobile ba zadan serach button drawer za paeen be bala jahat search baz mishavad */}
        <div
          className="lg:hidden pl-2 cursor-pointer"
          // onClick={toggleDrawer(true)}
          onClick={() => dispatch(searchChange(searchShow))}
        >
          <AiOutlineSearch className="text-2xl " />
        </div>

        <div className="flex justify-between  sm:flex pr-2 divide-x-2 divide-x-reverse divide-black gap-2 items-center">
          <div>
            {isLoggedIn && (
              <div>
                <div className="lg:hidden">
                  <Link href="/profile">
                    <AiOutlineUser className="text-2xl" />
                  </Link>
                </div>

                <div className=" hidden lg:inline-block relative">
                  <div
                    className="flex items-center  gap-2 cursor-pointer px-2 border-gray-200 border-2 rounded-lg	hover:border-gray-400"
                    onClick={() => setOpenProfile(!openProfile)}
                  >
                    <div>
                      <AiOutlineUser className="text-2xl" />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg py-2 text-sm text-gray-900"
                      >
                        {/* must add username here from redux */}
                        ایمان
                      </button>
                    </div>
                    {openProfile ? (
                      <div>
                        <IoIosArrowUp className="text-xl" />
                      </div>
                    ) : (
                      <div>
                        <IoIosArrowDown className="text-xl" />
                      </div>
                    )}
                  </div>

                  {openProfile && (
                    <div
                      className="absolute left-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div className="py-1  z-50 divide-y" role="none">
                        <Link
                          href="/profile"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0"
                        >
                          پروفایل
                        </Link>
                        <Link
                          href="/profile/orders"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-1"
                        >
                          سفارش ها
                        </Link>
                        <Link
                          href="/profile/wallet"
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-2"
                        >
                          کیف پول
                        </Link>

                        <form
                          method="POST"
                          action="#"
                          role="none"
                          className="hover:bg-gray-100"
                        >
                          <button
                            type="submit"
                            className="text-gray-700 px-4 py-2  text-sm "
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-3"
                          >
                            خروج
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {!isLoggedIn && (
              <div className="flex">
                <HiOutlineLogin className="text-2xl" />
                <Link href="/auth/check-login">
                  <span className="text-xs">ورود</span>
                </Link>
              </div>
            )}
          </div>
          <div className="cursor-pointer hover:text-gray-500">
            <Link href="/basket">
              <FiShoppingCart className="text-2xl mr-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileControl;
