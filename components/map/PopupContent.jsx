import Image from 'next/image'
import "./styles.css";

const PopupContent = ({ name, imageUrl, description, price, discount }) => {
    // console.log(imageUrl)
    return (
        <div className='flex flex-col gap-1'>
            <div className="flex flex-col md:flex-row  w-full h-full gap-2 bg-gray-100 mt-2">
                <div className='flex w-[100%] md:w-[40%] relative md:justify-center '>
                    <Image
                        src={imageUrl}
                        width={280}
                        height={120}
                        alt="تبلیغ تخفیفانی"
                        // style={{ objectFit: "cover" }}
                        // style={{objectFit: "contain"}}	
                        // fill
                        // sizes="(max-width:640px) 50vw, (max-width:2048px) 10vw, 100vw"
                    />
                </div>
                <div className='flex flex-col gap-1 w-[100%] md:w-[60%]   py-1'>
                    <div className='flex justify-start mr-2 mt-2  text-md font-bold'>{name}</div>
                    <div className='flex justify-start text-xs mr-2'>{description}</div>
                    <div className='flex justify-between px-4 mt-2 items-center'>
                        <div className='text-green-500'>{price} تومان</div>
                        <div className='py-1 px-3 bg-orange-500 text-center text-white rounded-xl'>{discount} %</div>
                    </div>
                </div>

            </div>
            <div className='flex justify-end'>

                <div className='w-1/4 flex justify-center text-center  py-3 lg:py-2 text-white bg-blue-500 rounded-sm items-center cursor-pointer hover:bg-blue-700'>مشاهده</div>
            </div>
        </div>
    );
}

export default PopupContent;