import BreadCrumb from "@/components/productdetails/breadCrumb/BreadCrumb";
import CommentScore from "@/components/productdetails/commentScore/CommentScore";
import FeaturesConditions from "@/components/productdetails/featuresConditions/FeaturesConditions";
import LocationInformation from "@/components/productdetails/locationInfo/LocationInformation";
import NearStore from "@/components/productdetails/nearStores/NearStore";
import QuestionAnswer from "@/components/productdetails/questionAnswer/QuestionAnswer";
import MainDetails from "@/components/productdetails/sliderDetails/MainDetails";
import SimilarProducts from "@/components/productdetails/smilarProducts/SimilarProducts";
import "./styles.css";
import ProductDescriptions from "@/components/productdetails/productDescriptions/ProductDescriptions";
import QuestionComment from "@/components/productdetails/questionComment/QuestionComment";
import SmoothNavLink from "@/components/productdetails/smoothNavLink/SmoothNavLink";
import ProductsList from "@/components/productList/ProductsList";

const ProductDetails = ({ params, searchParams }) => {
  console.log("params", params);
  console.log("searchParams", searchParams);
  return (
    <>
      {/* <div className="py-4 w-full shadow-md sticky left-0 top-40 bg-white z-[99999999]" >این قسمت مدیریت اسکرول باز میباشد</div> */}
      <div className="container mx-auto w-full p-0 ">
        <div>
          <BreadCrumb />
        </div>
        <div>
          <MainDetails />
        </div>
        <div className="p-4 w-full shadow-sm sticky my-4 bg-gray-100 left-0 top-[7.3rem] lg:top-[9.5rem] z-40">
          <SmoothNavLink />
        </div>
        <div
          id="locationInformation"
          className="relative top-[-190px] lg:top-[-250px] "
        ></div>
        <div id="locationInformation1" className="mt-4">
          <LocationInformation />
        </div>

        <div id="featuresConditions" className="relative top-[-190px] "></div>
        <div id="featuresConditions1">
          <FeaturesConditions />
        </div>
        <div
          id="description"
          className="relative top-[-1000px] lg:top-[-200px] "
        ></div>

        <div id="description1" className="hidden lg:flex">
          <ProductDescriptions />
        </div>
        {/* <div id="commentScore"><CommentScore /></div> */}
        {/* <div id="questionAnswer"><QuestionAnswer /></div> */}
        <div
          id=""
          className="lg:p-4 w-full shadow-md sticky my-4 bg-gray-100 rounded-md"
        >
          <ProductsList />
        </div>
        <div id="questionComment" className="relative top-[-150px] "></div>
        <div id="questionComment1">
          <QuestionComment />
        </div>

        <div id="similarProducts">
          <SimilarProducts />
        </div>
        <div id="nearStores">
          <NearStore />
        </div>
        {/* <div className="bg-rose-300 h-full w-full absolute top-0 right-0 z-50">
                    safdasd
                </div> */}
      </div>
    </>
  );
};

export default ProductDetails;
