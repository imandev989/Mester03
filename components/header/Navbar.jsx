import SearchBuyNav from "./searchBuyNav/index";
import CatLocNav from "./catLocNav/index";

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <div>
        <SearchBuyNav />
      </div>
      <div >
        <CatLocNav />
      </div>
    </div>
  );
};

export default Navbar;
