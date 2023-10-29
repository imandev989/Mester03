
import { IoCloseOutline } from "react-icons/io5";


const MobileFilterDrawer = ({showFilter, setShowFilter}) => {
    return (
        <> 
        
        <div className="text-xl p-2 w-full z-[999999]">
             <div className="flex items-center justify-between gap-2 px-2 py-4" onClick={()=>setShowFilter(false)}>
                    <div><IoCloseOutline className=" text-3xl text-black"/></div>
                    <div><button className="text-xs bg-gray-700 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-500">اعمال فیلتر</button></div>
              </div>

       </div>
        
        
        </>
    )
}

export default MobileFilterDrawer;