const ContactForm = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col gap-4 ">
        <div className="mx-auto">
          <span>فرم تماس</span>
        </div>
        <div className="flex flex-col gap-4 mt-2 px-4">
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <div className="border border-gray-400 hover:border-gray-50w-3 sm:w-[30%] rounded-full py-2 px-8 ">
              <input
                type="text rounded w-full sm:w-1/2 border"
                placeholder="نام"
                required
                className="focus:outline-none px-4"
              ></input>
            </div>
            <div className="border border-gray-400 hover:border-gray-50w-3 sm:w-[30%] rounded-full py-2 px-8 ">
              <input
                type="text rounded w-full sm:w-1/2"
                placeholder="نام خانوادگی"
                required
                className="focus:outline-none "
              ></input>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <div className="border border-gray-400 hover:border-gray-50w-3 sm:w-[30%] rounded-full py-2 px-8 ">
              <input
                type="text rounded "
                placeholder="ایمیل"
                required
                className="focus:outline-none "
              ></input>
            </div>
            <div className="border border-gray-400 hover:border-gray-50w-3 sm:w-[30%] rounded-full py-2 px-8 ">
              <input
                type="text rounded"
                placeholder="موبایل"
                required
                className="focus:outline-none "
              ></input>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" border border-gray-400 hover:border-gray-50w-3 w-full sm:w-[60.5%] rounded-2xl py-4 px-4 h-[15vh]">
              <textarea
                placeholder="پیام شما"
                required
                className="focus:outline-none resize-none"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="inline-block relative w-full sm:w-[60%] rounded-full">
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>انتخاب کنید</option>
                <option> پشتیبان مشتریان</option>
                <option>فنی</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="  px-8 py-2 bg-green-500 text-white rounded-full"
            >
              ارسال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
