import { IoClose } from "react-icons/io5";

const ProductExtraPopup = ({ showPopUp, setShowPopUp }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-orange-500">
      <div className="absolute top-0 right-0 bg-white text-white">
        <IoClose />
      </div>
      <p>asdsadas;dk;</p>
      {/* <IoClose className="bg-white text-white absolute top-0 right-0" /> */}
    </div>
  );
};

export default ProductExtraPopup;
