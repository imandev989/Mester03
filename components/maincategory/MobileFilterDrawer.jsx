import { IoCloseOutline } from "react-icons/io5";

const MobileFilterDrawer = ({ showFilter, setShowFilter }) => {
  return (
    <>
      {/* <div className="blur"></div> */}
      <div className="text-xl p-2 w-full  bg-gray-300 fixed bottom-0 h-1/2 rounded-xl shadow-lg ">
        <div
          className="flex items-center justify-between gap-2 px-2 py-4"
          onClick={() => setShowFilter(false)}
        >
          <div>
            <IoCloseOutline className=" text-3xl text-gray-800" />
          </div>
          <div>
            <button className="text-xs bg-gray-700 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-500">
              اعمال فیلتر
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFilterDrawer;
