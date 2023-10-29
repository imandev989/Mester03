import DesktopSlider from "./DesktopSlider";
import MobileSlider from "./MobileSlider";

const MainDetails = () => {
    return (
        <div>
           <div className="bg-gray-100 rounded-md shadow-lg"><DesktopSlider/></div>
           <div className="bg-gray-100 "><MobileSlider/> </div>

        </div>
    );
}

export default MainDetails;