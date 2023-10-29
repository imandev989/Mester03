import { GiHamburger } from "react-icons/gi";
const SeeMore = () => {
  return (
    <div className="flex flex-col  justify-center align-middle items-center gap-4 " >
      <div className="text-orange-400">
        <GiHamburger className="text-4xl"/>
      </div>
      <div>
        <span> ۳۰ پیشنهاد رستوان و کافی شاپ</span>
      </div>
      <div>
        <button className="bg-orange-600 px-4 py-2 rounded-lg text-white hover:bg-orange-500">مشاهده همه</button>
      </div>
    </div>
  )
};

export default SeeMore;
