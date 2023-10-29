
const Subscription = () => {
  return (
    <div className="mb-4 p-6 bg-gray-800" >
      <div className="flex-col space-y-4 sm:w-1/2 mx-auto justify-center ">
        <div className="text-center">
        <span  className="text-orange-600 text-2xl">
          اشتراک خبرنامه
        </span>
        </div>
       <div className="text-center">
       <p className="text-white text-xs sm:text-sm">
          جهت اطلاع از آخرین تخفیف های شهرستان، آدرس ایمیل خود را وارد کنید و در
          خبرنامه مشترک شوید
        </p>
       </div>
        <div className="flex relative shadow-sm overflow-hidden rounded-full lg:mx-28 ">
          <div className="grow-[1] bg-white items-center  sm:inline-block">
            <label htmlFor="currency" className="sr-only">
              city
            </label>
            <select
              id="city"
              name="city"
              className="h-full pr-4 rounded-md border-0 bg-transparent py-0  text-center text-gray-500 sm:text-sm"
            >
              <option>مشهد</option>
              <option>تهران</option>
              <option>اصفهان</option>
              <option>شیراز</option>
            </select>
          </div>

          <div className="grow-[10]">
            <input
              type="text"
              name="search"
              id="search"
              className=" border-0 py-1.5 pr-8 w-full text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              placeholder="ایمیل را وارد کنید"
            />
          </div>
          <div className=" subButton2 hidden lg:inline bg-orange-500 hover:bg-orange-600 px-2 py-1">
            <button className=" text-white sm:text-sm">
              اشتراک
            </button>
          </div>
          
        </div>{" "}
        <div  className="subButton2 lg:hidden text-center">
          {/* <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#f68e37",
              borderRadius: 50,
            }}
          >
            مشترک میشوم
          </Button> */}
          <button className="rounded-full bg-orange-500 hover:bg-orange-600 text-sm text-white py-2 px-4 ">
            مشترک میشوم
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
