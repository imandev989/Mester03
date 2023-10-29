import Image from "next/image";


const WonderCard = () => {
    return (
        <div className="flex flex-col px-2 pt-4 justify-center items-center ">
            <div>
            <Image
            src="/images/wonderfullSuggestions/01.webp"
            width={150}
            height={150}
            alt="تبلیغ تخفیفانی"
            style={{ objectFit: "cover" }}
            
          />
            </div>
            <div className="flex justify-between px-2 gap-6 pt-4">
                <div>
                    <div className="bg-red-500 rounded-xl py-1 px-2 text-sm"><span className="text-white">۱۲٪</span></div>
                </div>
                <div>
                    <span className="text-black  text-sm ">۳۳۳۵۲۰۰ تومان</span>
                </div>
            </div>
            <div className="text-gray-400 text-sm py-2 flex justify-end pl-6"><span className="line-through">۳۷۹۰۰۰۰</span></div>
        </div>
    );
}

export default WonderCard;