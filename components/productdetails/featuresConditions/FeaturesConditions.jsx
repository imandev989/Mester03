// import ProductDescriptions from "../productDescriptions/ProductDescriptions";
import DesktopView from "./DesktopView";
import FeatureConditionDescriptionMobile from "./FeatureConditionDescriptionMobile";



const FeaturesConditions = () => {

    return (
        <>
            <div className="hidden lg:block">
                <DesktopView />
                {/* <ProductDescriptions /> */}
            </div>
            <div className="block lg:hidden">
                
                <FeatureConditionDescriptionMobile />

            </div>
        </>
    );
}

export default FeaturesConditions;