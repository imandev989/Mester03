const Orders = () => {
    return (
        <>
        <div className="hidden lg:flex lg:flex-col  w-full h-full">
            <div className="flex justify-between items-center">

                <span className="text-xs mx-2 text-blue-700  lg:text-lg lg:font-bold	pb-4 pt-4 lg:pb-1 px-2 lg:mx-4 text-center border-b-2 border-blue-500 w-[20%] lg:w-[10%]">سفارش ها</span>
                <div className="pt-4 pb-8 px-6 border-b-2 mx-4 w-[80%] lg:w-[90%]"> </div>
            </div>
            <div className=" p-4">
                <span>هنوز هیچ سفارشی ثبت نکرده اید</span>
            </div>
        </div>
        
        {/* mobile section*/}

        <div className="flex flex-col lg:hidden p-4 mx-auto">
            <p>هنوز هیچ سفارشی ثبت نکرده اید</p>

        </div>
        
        </>
        )
}

export default Orders;