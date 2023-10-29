import { getInformationData } from "../sliderDetails/informationData";

const ProductDescriptions = () => {
    const informations = getInformationData()[0];

    return (
        <div className="flex justify-between items-center gap-2  mt-4 rounded-lg shadow-lg p-4 bg-gray-100">
            <div className="flex flex-col justify-starth-full w-full border border-y-0 border-x-0  border-solid pl-4 border-rose-500">
                <div className="border border-b-solid  border-b-rose-500 border-x-0 border-t-0 pb-4 w-full mb-2"><span className="border border-bold-solid border-b-rose-500 border-x-0 border-t-0 pb-3 border-b-4 px-4 ">توضیحات</span></div>
                <div className={`px-2 py-4`}>
                    <span className="font-bold">{informations.extraExplain.title}</span>

                   <p className="mt-4 text-justify leading-8	">{informations.extraExplain.desc}</p>

                </div>
            </div>
        </div>
    );
}

export default ProductDescriptions;