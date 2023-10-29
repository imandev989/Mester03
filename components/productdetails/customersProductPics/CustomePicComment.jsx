import { MdArrowForward } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";



const CustomePicComment = ({show,setShow, Popup, setShowPopUp}) => {
    return (
        <div className="flex flex-col gap-2 justify-between">
            <div className="w-full flex justify-between items-center p-4">
                <div className="flex justify-start gap-2">
                    <span className="text-2xl cursor-pointer" onClick={()=>setShow(false)}>
                        <MdArrowForward />
                    </span>
                    <span>دیدگاه خریدار</span>
                </div>
                <div>
                    <span className="text-2xl cursor-pointer" onClick={()=>setShowPopUp(false)}>
                        <IoCloseOutline />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CustomePicComment;