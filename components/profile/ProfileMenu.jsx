import { ImProfile } from "react-icons/im";
import { GrFavorite } from "react-icons/gr";
import { GoComment } from "react-icons/go";
import { GiWallet } from "react-icons/gi";
// import { TiPhoneOutline } from "react-icons/ti";
import { MdOutlinePrivacyTip } from "react-icons/md";
// import { PiUsersThree } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import { BiMessageSquareError } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiExit } from "react-icons/bi";
import { RiShoppingBasketLine } from "react-icons/ri";
import Link from "next/link"; //import this
import { useState } from "react";
import "./styles.css";

const ProfileMenu = ({ showItem, setShowItem }) => {
  const [active, setActive] = useState(null);

  const handleSelect = (name) => {
    // console.log('name: ' + name)
    setShowItem(true);
    setActive(name);
    //alert(name)
    // console.log("ACTIVE", name)
  };

  return (
    <div className="p-2">
      <ul className="flex flex-col-reverse divide-y divide-y-reverse divide-gray-300">
        <li
          className={`my-2 py-2 px-2  flex justify-start items-center gap-4 ${
            active == "exit" && "active"
          }`}
        >
          <span>
            <BiExit className="text-blue-500 text-2xl" />
          </span>
          <span className="font-bold text-gray-500"> خروج</span>
        </li>

        <Link
          href="/profile/complaint"
          onClick={() => handleSelect("complaints")}
        >
          <li
            className={`my-2 py-2 px-2  flex justify-start items-center gap-4 ${
              active == "complaints" && "active"
            }`}
          >
            <span>
              <BiMessageSquareError className="text-blue-500 text-2xl" />
            </span>
            <span className="font-bold text-gray-500">ثبت شکایات</span>
          </li>
        </Link>

        <Link href="/profile/ticket" onClick={() => handleSelect("tickets")}>
          <li
            className={`my-2 py-2 px-2  flex justify-start items-center gap-4 ${
              active == "tickets" && "active"
            }`}
          >
            <span>
              <FaRegEnvelope className="text-blue-500 text-2xl" />
            </span>
            <span className="font-bold text-gray-500">تیکت ها</span>
          </li>
        </Link>

        <Link href="/profile/privacy" onClick={() => handleSelect("privacy")}>
          <li
            className={`my-2 py-2 px-2  flex justify-start items-center gap-4 ${
              active == "privacy" && "active"
            }`}
          >
            <span>
              <MdOutlinePrivacyTip className="text-blue-500 text-2xl" />
            </span>
            <span className="font-bold text-gray-500">حریم شخصی</span>
          </li>
        </Link>

        <Link href="/profile/wallet" onClick={() => handleSelect("wallet")}>
          <li
            className={`my-2 py-2 px-2  flex justify-start items-center gap-4 ${
              active == "wallet" && "active"
            }`}
          >
            <span>
              <GiWallet className="text-blue-500 text-2xl" />
            </span>
            <span className="font-bold text-gray-500">کیف پول</span>
          </li>
        </Link>

        <Link href="/profile/comments" onClick={() => handleSelect("comments")}>
          <li
            className={`my-2 py-2 px-2  flex justify-start items-center gap-4 ${
              active == "comments" && "active"
            }`}
          >
            <span>
              <GoComment className="text-blue-500 text-2xl" />
            </span>
            <span className="font-bold text-gray-500">نظرات</span>
          </li>
        </Link>

        <Link
          href="/profile/favorites"
          onClick={() => handleSelect("favorites")}
        >
          <li
            className={`my-2 py-2 px-2  flex justify-start items-center gap-4 ${
              active == "favorites" && "active"
            }`}
          >
            <span>
              <MdOutlineFavoriteBorder className="text-blue-500 text-2xl" />
            </span>
            <span className="font-bold text-gray-500">علاقه مندی ها</span>
          </li>
        </Link>

        <Link href="/profile/orders" onClick={() => handleSelect("orders")}>
          <li
            className={`my-2 py-2 px-2  flex justify-start items-center gap-4 ${
              active == "orders" && "active"
            }`}
          >
            <span>
              <RiShoppingBasketLine className="text-blue-500 text-2xl" />
            </span>
            <span className="font-bold text-gray-500 "> سفارش ها</span>
          </li>
        </Link>

        <Link
          href="/profile/personal-information"
          onClick={() => handleSelect("personalInformation")}
        >
          <li
            className={`my-2 py-2 px-2  flex justify-start items-center gap-4 ${
              active == "personalInformation" && "active"
            }`}
          >
            <span>
              <ImProfile className="text-blue-500 text-2xl" />
            </span>
            <span className="font-bold text-gray-500 ">اطلاعات شخصی</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ProfileMenu;
