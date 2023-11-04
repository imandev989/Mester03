import { BiStoreAlt } from "react-icons/bi";
import  Link  from "next/link";
import Menu from "./Menu";

const CategrozieList = () => {
  return (
    <div className="flex justify-between space-x-4 py-2 items-center">
      <Menu />

      <div className="flex gap-2">
        <div className="CitySelector flex lg:hidden  relative rounded-r-md h-[1.5em] cursor-pointer ">
          <label htmlFor="currency" className="sr-only">
            ci
          </label>
          <select
            id="city"
            name="city"
            className="h-full rounded-md  bg-transparent  text-white text-xs sm:text-sm"
          >
            <option>مشهد</option>
            <option>تهران</option>
            <option>اصفهان</option>
            <option>شیراز</option>
          </select>
        </div>
        <div className="flex">
          <BiStoreAlt className="text-xl" />
          <Link href="/myBussines">
            {" "}
            <span className="pr-1 text-xs sm:text-sm">کسب و کار من</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategrozieList;
