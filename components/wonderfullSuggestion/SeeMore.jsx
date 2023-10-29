import { IoIosArrowBack } from "react-icons/io";

const SeeMore = () => {
    return (
        <div className="flex flex-col justify-center items-center align-middle mx-auto px-2 w-full ml-2">
            <div className="text-blue-500"><IoIosArrowBack className="text-4xl"/></div>
            <div className="mt-2"><span>مشاهده همه</span></div>
        </div>
    );
}

export default SeeMore;