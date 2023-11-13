// "use client";
import CategoryTabPanel from "@/components/maincategory/CategoryTabPanel";
// import Sliders from "@/components/Sliders/index";
import BreadCrumb from "@/components/maincategory/BreadCrumb";
import PageTitle from "@/components/maincategory/PageTitle";
import Filters from "@/components/maincategory/Filters";
// import SortFilter from "@/components/maincategory/SortFilter";
// import {useState} from "react";
const MainCategory = ({ params, searchParams }) => {

  console.log("params", params);
  console.log("searchParams", searchParams);
  return (
    <div className="container mx-auto">
      <BreadCrumb />
      {/* <Sliders /> */}
      <PageTitle />

      <div className="flex mt-2 gap-4">
        <div className="hidden sm:flex sm:w-1/4 rounded-md">
          <Filters />
        </div>
        <div className="w-full sm:w-3/4 flex flex-col gap-2 rounded-md">
          {/* <div className="w-full">
            <SortFilter/>
          </div> */}
          <div className="w-full">

            <CategoryTabPanel />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MainCategory;
