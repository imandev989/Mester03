import { IoCloseOutline } from "react-icons/io5";


const MobileSortDrawer = ({showSort,setShowSort}) => {
    return (
        <div className="text-xl p-2 w-full bg-rose-300 absolute bottom-0 h-full ">
                  <div className="flex items-center gap-2" onClick={()=>setShowSort(false)}>
                    <div><IoCloseOutline className=" text-2xl cursor-pointer"/></div>
                    <div><span className="text-sm">مرتب سازی بر اساس :</span></div>
                  </div>
                  <div className="flex flex-col divide-y-2  divide-dashed gap-2 px-4 py-4">
                  <span className="text-sm py-2">پیشنهاد مستر</span>
                  <span className="text-sm py-2">محبوب ترین</span>
                  <span className="text-sm py-2">پربازدیدترین</span>
                  <span className="text-sm py-2">جدیدترین</span>
                  <span className="text-sm py-2">ارزان ترین</span>
                  <span className="text-sm py-2">گران ترین</span>
                  </div>
                  
               </div>

    )
}

export default MobileSortDrawer;