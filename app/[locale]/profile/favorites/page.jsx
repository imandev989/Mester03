

const Favorites = () => {
    return (
        <>
            <div className="hidden lg:flex lg:flex-col  w-full h-full">
                <div className="flex justify-between items-center">

                    <span className="text-blue-700  font-bold	 pt-4 pb-2 px-2 mx-4 text-center border-b-2 border-blue-500  w-[10%]">علاقه مندی ها</span>
                    <div className="pt-4 pb-8 px-8 border-b-2 mx-4 w-[90%]"> </div>
                </div>
                <div className=" p-4">
                    <span>هنوز هیچ علاقه مندی ثبت نکرده اید</span>
                </div>
            </div>

            {/* mobile section*/}

            <div className="flex flex-col lg:hidden p-4 mx-auto">
                <p>هنوز هیچ علاقه مندی ثبت نکرده اید</p>

            </div>

        </>

    )
}

export default Favorites;