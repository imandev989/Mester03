
import { BiSortDown } from "react-icons/bi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { TbLayoutGrid, TbLayoutList } from "react-icons/tb";

const SortFilter = ({rowShow, setRowShow,showSort, setShowSort, showFilter, setShowFilter }) => {

  return (
    <>
    
    
    
    <div className="hidden lg:flex justify-between items-center bg-gray-100 rounded-lg p-4 ">
        <div className="flex justify-start items-center gap-4">
        <span><BiSortDown className="text-xl"/></span>
        <span className="text-xs text-gray-300 ">مرتب سازی بر اساس :</span>
          <span className="text-xs cursor-pointer">پیشنهاد مستر</span>
          <span className="text-xs cursor-pointer">محبوب ترین</span>
          <span className="text-xs cursor-pointer">پربازدیدترین</span>
          <span className="text-xs cursor-pointer">جدیدترین</span>
          <span className="text-xs cursor-pointer">ارزان ترین</span>
          <span className="text-xs cursor-pointer">گران ترین</span>
        </div>
        <div className=" rounded-xl flex justify-end  divide-x-2 divide-x-reverse divide-gray-800 ">
        <div className=" px-2 text-xl cursor-pointer" onClick={()=>setRowShow(true)} >
        <TbLayoutList/>

            </div>
            <div className="px-2  text-xl cursor-pointer" onClick={()=>setRowShow(false)}>
                <TbLayoutGrid/>

            </div>
        </div>

    </div>
    <div className="flex mx-2 md:mx-0 lg:hidden justify-start bg-gray-100 rounded-lg p-4 gap-4">
        <div className="flex gap-2 cursor-pointer items-center" onClick={()=>setShowFilter(true)}>
        <span><BiSortDown className="text-xl"/></span>
            <span>فیلتر</span>

        </div>
        <div className="flex gap-2 items-center cursor-pointer" onClick={()=>setShowSort(true)}>
        <span><HiOutlineAdjustmentsHorizontal className="text-xl"/></span>
            <span>مرتب سازی</span>

        </div>
    </div>
    
    </>

  )
};

export default SortFilter;
