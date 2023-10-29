import { getInformationData } from "../sliderDetails/informationData";


const DesktopView = () => {
    const informations = getInformationData()[0];
    const features = informations.features;
    const conditions = informations.conditions;
    // console.log("IMANNNNN", informations)    
    // console.log("features", features)    

    return (
        <div className="flex justify-between  gap-2  mt-4 rounded-lg shadow-lg p-4 bg-gray-100">
            <div className="flex flex-col justify-start  w-[60%] h-[100%] border border-y-0 border-r-0 border-l-1 border-solid pl-4 border-rose-500">
                <div className="border border-b-solid  border-b-rose-500 border-x-0 border-t-0 pb-4 w-full"><span className="border border-bold-solid border-b-rose-500 border-x-0 border-t-0 pb-3 border-b-4 px-4 ">ویژگی ها</span></div>
                <div className={`px-2 py-4`}>

                    {
                        features.map((feature, index) => {

                            return <ul key={index}>
                                <li className="flex py-2 gap-2 justify-start items-center">
                                    <span>{feature.icon}</span><span className={(feature.important ? 'font-bold' : 'font-light') + ' ' + (feature.border ? ' border border-solid px-4 py-2 rounded-xl border-black' : '')}>{feature.title}</span>
                                </li>
                            </ul>
                        })
                    }

                    {/* {features.icon}<span>{features.title}</span> */}

                </div>
            </div>
            <div className="w-[40%] h-[100%] pr-2 flex flex-col content-start  ">
                <div className="border border-b-solid  border-b-rose-500 border-x-0 border-t-0 pb-4 w-full"><span className="border border-bold-solid border-b-rose-500 border-x-0 border-t-0 pb-3 border-b-4 px-4 ">شرایط استفاده</span></div>
                <div className={`px-2 py-4`}>

                    {
                        conditions.map((condition, index) => {

                            return <ul key={index}>
                                <li className="flex py-2 gap-2 justify-start items-center">
                                    <span>{condition.icon}</span><span className={(condition.important ? 'font-bold' : 'font-light') + ' ' + (condition.border ? ' border border-solid px-4 py-2 rounded-xl border-black' : '')}>{condition.title}</span>
                                </li>
                            </ul>
                        })
                    }

                    {/* {features.icon}<span>{features.title}</span> */}

                </div>
            </div>
        </div>
    );
}

export default DesktopView;