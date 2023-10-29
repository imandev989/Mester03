import { BsArrowRightShort } from "react-icons/bs";
import { searchChange } from "@/redux/reducers/configSlice";
import { useSelector, useDispatch } from "react-redux";

const MobileSearch = () => {
  const searchShow = useSelector(state => state.configs.searchToggle);
  // console.log("S", searchShow)
  const dispatch = useDispatch();

  return (
    <div className="bg-white h-[100vh] flex-col justify-center p-6 z-[9999999]">
      <div className="flex p-2 border-b-2 border-blue-400">
        <div>
          <BsArrowRightShort className="cursor-pointer text-2xl text-black" onClick={() => dispatch(searchChange(searchShow))}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="جستجو"
            className="border-none pr-2"
          />
        </div>
      </div>
    </div>
  )
}
export default MobileSearch;