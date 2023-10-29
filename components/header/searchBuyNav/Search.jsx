import "./styles.css";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div className="container mx-auto max-w-[300px] sm:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px]">
      <div className="flex  mx-auto">
        <div className="CitySelector   bg-[#fff] shadow-[0_2px_12px_0px_rgba(0,0,0,0.14)] rounded-r-md h-[3em] sm:inline-block">
          <label htmlFor="currency" className="sr-only">
            city
          </label>
          <select
            id="city"
            name="city"
            className="h-full w-full rounded-md border-0 bg-transparent px-4 text-gray-500  sm:text-xs"
          >
            <option>مشهد</option>
            <option>تهران</option>
            <option>اصفهان</option>
            <option>شیراز</option>
          </select>
        </div>
        {/* <div className="flex w-full h-full justify-center items-center"> */}
          <SearchBar />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Search;
