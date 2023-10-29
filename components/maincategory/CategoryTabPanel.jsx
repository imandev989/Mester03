"use client";
import { Tabs, Tab } from '@/components/tabs/Tabs';

import { getItems } from "./categorize.js";
import RowCard from "./RowCard";
import GridCard from "./GridCard";
import SortFilter from "@/components/maincategory/SortFilter";
import MobileSortDrawer from "./MobileSortDrawer";

import MobileFilterDrawer from "./MobileFilterDrawer";

// import { IoCloseOutline } from "react-icons/io5";

import { useState } from "react";

const CategoryTabPanel = () => {
  const [rowShow, setRowShow] = useState(true);
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);


  const items = getItems();
  console.log("ITEMS", items);
  // console.log("ITEMS21231",items);
  return (
    <div>
      <div className="w-full mb-2">
        <SortFilter rowShow={rowShow} setRowShow={setRowShow} showSort={showSort} setShowSort={setShowSort} showFilter={showFilter} setShowFilter={setShowFilter} />
      </div>
      <div >
        <Tabs>
          {items.map((item, key) => (
            <Tab label={item.label} key={key}>
              <div className="py-4 relative">


                {
                  rowShow ? (
                    <div className=" w-full  flex flex-col gap-2">
                      <RowCard />
                      <RowCard />
                      <RowCard />
                      <RowCard />
                      <RowCard />
                      <RowCard />
                      <RowCard />
                      <RowCard />
                      <RowCard />
                      <RowCard />
                    </div>


                  ) : (
                    <div className="hidden sm:grid sm:grid-cols-3 gap-2">

                      <GridCard />
                      <GridCard />
                      <GridCard />
                      <GridCard />
                      <GridCard />
                      <GridCard />
                      <GridCard />
                      <GridCard />

                    </div>


                  )
                }

              </div>
            </Tab>
          ))}
        </Tabs>

      </div>
      {showSort && (
        <div className="h-full">

          <div
            className={`lg:hidden overflow-auto h-[50vh] rounded-lg shadow-lg bottom-0 right-0 left-0 w-full bg-white   fixed  z-40 ease-in-out duration-300 ${showSort ? "translate-x-0 " : "translate-x-full"
              }`}>


            <MobileSortDrawer showSort={showSort} setShowSort={setShowSort} />
          </div>
        </div>
      )}
      {showFilter && (
        <div className="h-full">

          <div
            className={`lg:hidden overflow-auto   shadow-lg top-0 bottom-0 right-0 left-0 w-full bg-white  text-white fixed  z-60 ease-in-out duration-300 ${showFilter ? "translate-x-0 " : "translate-x-full"
              }`}>
            <MobileFilterDrawer showFilter={showFilter} setShowFilter={setShowFilter} />



          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryTabPanel;



