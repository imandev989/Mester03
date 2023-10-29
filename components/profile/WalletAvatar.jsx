
import ProfileAvatar from "@/components/sidebarMobileRTL/ProfileAvatar";
import { BsPlusCircle } from "react-icons/bs";

const WalletAvatar = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center px-8 py-4 ">
                <div><ProfileAvatar/></div>
                <div><span className="text-xl"> ایمان نمازی بایگی </span></div>
            </div>
            <div className="flex justify-between items-center px-8 py-4">
            <div ><span>اعتبار کیف پول</span></div>
            <div className="flex justify-between items-center gap-4">
                <span className="text-blue-500 font-bold">۰ تومان</span>
                <span><BsPlusCircle className="text-blue-500 text-2xl font-bold cursor-pointer"/></span>

            </div>

            </div>
        </div>
    )
};

export default WalletAvatar;
