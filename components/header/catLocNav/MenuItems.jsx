"use client";

import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { IoMdArrowDropleft } from "react-icons/io";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
    setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
    setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className={" menu-items menu-items-level-" + depthLevel}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
      
    >
      {items.url && items.subItems ? (
        <>
          <div
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            
            <div>
              {depthLevel === 0 ? (
                items.label
              ) : (
                <Link href={items.url}>{items.label}</Link>
              )}
            </div>

            <div>
              {depthLevel > 0 ? (
                <IoMdArrowDropleft className="text-black text-sm"/>
              ) : (
                ""
              )}
            </div>
          </div>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.subItems}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.subItems ? (
        <>
          
          <div
            className="flex justify-between gap-4"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <div>{items.icon}</div>
            <div className="text-gray-900" style={ { color: depthLevel == 0 ? 'white' : 'black'} }>{items.label}</div>
            <div>
              {" "}
              {depthLevel > 0 ? (
                <IoMdArrowDropleft className="text-black text-sm"/>
                ) : (
                ""
              )}
            </div>
          </div>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.subItems}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={items.url} >{items.label}</Link>
      )}
    </li>
  );
};

export default MenuItems;
