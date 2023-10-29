import TopAdd from "./TopAdd";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 z-50">
      <TopAdd />
      <Navbar />
    </div>
  );
};

export default Header;
