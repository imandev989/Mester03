"use client";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useRef } from 'react';
import CommentScore from "../productdetails/commentScore/CommentScore";
import QuestionAnswer from "../productdetails/questionAnswer/QuestionAnswer";
import OfficalProductPics from "../productdetails/officalProductPics/OfficalProductPics";
import CustomerProductPics from "../productdetails/customersProductPics/CustomerProductPics";

const Tabs3 = () => {
  const tabRef = useRef(null);
  // const [userLoginned, setUserLoggined] = useState(true);

  const [activeTab, setActiveTab] = useState("tab1");

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  console.log("IMANTAB");

  return (
    <div className=" mx-2 md:mx-0  w-full h-full p-2  bg-gray-100 rounded-lg">

      <div
        ref={tabRef}
        className="flex  relative border-b border-gray-300  gap-4  scroll-smooth scrollbar-hide overflow-x-scroll"
      >
        <button
          className={`${activeTab === "tab1" ? 'border-b-2 border-blue-500' : ''
            }  text-gray-700 font-medium text-xs md:text-sm py-2  shrink-0 px-4`}
          onClick={e => handleClick(e, "tab1")}
        >
          تصاویر رسمی
        </button>
        <button
          className={`${activeTab === "tab2" ? 'border-b-2 border-blue-500' : ''
            }  text-gray-700 font-medium text-xs md:text-sm py-2  shrink-0 px-4`}
          onClick={e => handleClick(e, "tab2")}
        >
           تصاویر بازدیدکنندگان
        </button>
      </div>
      <div className="py-4  mt-2">
        {/* {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })} */}
        {
          activeTab === "tab1" ? (<OfficalProductPics/>) : (<CustomerProductPics />)
        }

      </div>
    </div>
  );
};

const Tab3 = ({ label, children }) => {
  return (
    <div label={label} >
      {children}
    </div>
  );
};
export { Tabs3 as Tabs3, Tab3 };






