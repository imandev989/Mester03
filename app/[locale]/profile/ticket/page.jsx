import { FiPlus } from "react-icons/fi";



const Ticket = () => {
    return (
        <>
            <div className="hidden lg:flex lg:flex-col  w-full h-full">
                <div className="flex justify-between items-center">
                    <div className="border-b-2 border-blue-500 pb-4 pt-4  px-2 mx-4  w-[10%] mb-4 text-center">
                        <span className="text-blue-700  font-bold	 text-center ">تیکت ها</span>
                    </div>
                    <div className="flex justify-end items-center pb-4 pt-4  px-2 mx-4 mb-4 gap-2 cursor-pointer   border-b-2 border-gray-300 w-[90%]">
                        <div><FiPlus className="text-blue-700" /></div>
                        <div><span>تیکت جدید</span></div>
                    </div>
                </div>

            </div>


            {/* mobile section*/}

            <div className="flex flex-col lg:hidden p-4 mx-auto">
                <p>هنوز هیچ تیکتی ثبت نکرده اید</p>

            </div>


        </>

    )
}

export default Ticket;