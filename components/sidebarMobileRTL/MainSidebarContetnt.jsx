
import { hasChildren } from "./listMenuUtils";

import { useState } from "react";
// import { menuItems } from "./categorize";
import ProfileAvatar from "./ProfileAvatar";
import { GiThreeFriends } from "react-icons/gi";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FiDownloadCloud } from "react-icons/fi";
import { IoInformationCircleSharp } from "react-icons/io5";
import { getItems } from "./categorize.js";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

const MainSidebarContent = () => {
    const menuItems = getItems();
    // console.log(menuItems);

      return (
        <div className="flex-col items-center bg-gray-300 rounded-md">
          <div className="p-2 flex-col items-center  w-full">
              <div><ProfileAvatar /></div>
            <div className="bg-white rounded-xl flex justify-between mx-5 py-1 px-3 border border-black divide-x-2 divide-x-reverse divide-black">
              <div className="flex-1 min-w-[60px] text-center">
               <span className="text-sm text-black">عضویت</span>
              </div>
              <div className="flex-1 min-w-[60px] text-center">
               <span className="text-sm text-black">ورود</span>
              </div>
            </div>
          </div>
          <div>
            <ul>
                <li          
                  className="w-full max-w-[360px] "
                >
                  {menuItems.map((item, key) => (
                    <MenuItem key={key} item={item} />
                  ))}
                </li>
            </ul>
          </div>
          <div>
          <ul>
            <li className="flex justify-start p-4 items-center">
            <div className="ml-2 text-white"><IoInformationCircleSharp/></div>
  
              <div className="text-white text-sm">درباره ما</div>
            </li>
            <li className="flex justify-start items-center p-4">
              <div className="ml-2 text-white"><BsFillTelephoneInboundFill/></div>
              <div className="text-white text-sm">پشتیبانی</div>
            </li>
            <li className="flex justify-start p-4 items-center">
            <div className="ml-2 text-white"><GiThreeFriends/></div>
              <div className="text-white text-sm">درخواست همکاری</div>
            </li>
            <li className="flex justify-start p-4 items-center">
            <div className="ml-2 text-white"><FiDownloadCloud/></div>
              <div className="text-white text-sm">دریافت نرم افزار</div>
            </li>
            
          </ul>
        </div>

        </div>
      )






}

const MenuItem = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} />;
  };


const SingleLevel = ({ item }) => {
  // console.log("SINGLE LEVEL", item);

    return (
      <ul className="py-2 px-4 bg-gray-400">
        <li className="hover:bg-gray-500 hover:rounded-full hover:px-4 hover:py-2">
          <span className="text-sm">{item.label}</span>
        </li>
      </ul>
    );
  };


  const MultiLevel = ({ item }) => {
    const { subItems: children } = item;
    // console.log("MULTILEVEL", children);
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen((prev) => !prev);
    };
    return (
      <>
        <ul>
          <li onClick={handleClick} className="flex justify-between px-4 py-4">
            <span >{item.icon}</span>
            <span className="text-sm">{item.label}</span>
            <span className="text-sm">{open ? <BiUpArrow /> : <BiDownArrow />}</span>
          </li>
        </ul>
          
          {
            open && (
              <div>
                  <ul className="divide-y-2 divide-gray-100">
                    <li>
                    {children.map((child, key) => (
                          <MenuItem key={key} item={child} />
                       ))}
                    </li>
                  </ul>
              </div>
              )
          }
      </>
    );
  };

export default MainSidebarContent;