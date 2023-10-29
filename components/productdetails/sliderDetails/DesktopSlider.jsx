
import Informations from "./Informations";
// import SliderDesktop from "./SliderDesktop";
import SliderDesktop2 from "./SliderDesktop2";










const DesktopSlider = () => {
    
    return (
        <div className="hidden lg:flex px-2 py-4 gap-2">
            {/* <div className="w-[45%]"><SliderDesktop /></div> */}
            <div className="w-[45%]"><SliderDesktop2 /></div>

            <div className="w-[55%]" ><Informations/></div>
        </div>
    );
}

export default DesktopSlider;