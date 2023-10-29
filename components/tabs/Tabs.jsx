"use client";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useRef } from 'react';

const Tabs = ({ children }) => {
  const tabRef = useRef(null);



  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className=" mx-2 md:mx-0  max-w-full p-2  bg-gray-100 rounded-lg">
      <div className="flex items-center gap-2">


        <div className="text-2xl text-blue-400 hover:text-blue-500 cursor-pointer hidden md:flex" onClick={() => {
          tabRef.current.scrollLeft = tabRef.current.scrollLeft + 150;
        }}><IoIosArrowForward /></div>
        <div
          // onScroll={onScroll}
          ref={tabRef}
          className="flex  relative border-b border-gray-300  gap-4  scroll-smooth scrollbar-hide overflow-x-scroll"
        >
          {children.map(child => (
            <button
              key={child.props.label}
              className={`${activeTab === child.props.label ? 'border-b-2 border-blue-500' : ''
                }  text-gray-700 font-medium text-xs md:text-sm py-2  shrink-0 px-4`}
              onClick={e => handleClick(e, child.props.label)}
            >
              {child.props.label}
            </button>
          ))}

        </div>
        <div className="text-2xl text-blue-400 hover:text-blue-500 cursor-pointer hidden md:flex" onClick={() => {
          tabRef.current.scrollLeft = tabRef.current.scrollLeft - 150;
        }}><IoIosArrowBack /></div>
      </div>
      <div className="py-4  mt-2">
        {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}

      </div>

    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden bg-red-600">
      {children}
    </div>
  );
};
export { Tabs, Tab };






{/* <div className=" hidden absolute -top-5 left-0 w-full h-full sm:flex justify-between  items-center">
          <button
            onClick={() => {
                tabRef.current.scrollLeft =
              tabRef.current.scrollLeft + 300;
            }}
          >
            <div
              className={`cursor-pointer  drop-shadow-lg filter visible
              `}
            >
              <FaArrowAltCircleRight className="text-3xl  text-white  opacity-30 hover:opacity-100 rounded-full" />
            </div>
          </button>

          <button
            onClick={() => {
                tabRef.current.scrollLeft =
                tabRef.current.scrollLeft - 300;
            }}
          >
            <div
              className={`cursor-pointer drop-shadow-lg filter visible
              `}
            >
              <FaArrowAltCircleLeft className="text-3xl  text-white  opacity-30 hover:opacity-100 rounded-full" />
            </div>
          </button>
        </div> */}
