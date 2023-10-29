"use client";
import { useState } from 'react';
import { getInformationData } from "../sliderDetails/informationData";
import Accordion from '@/components/hooks/Accordion';


const FeatureConditionDescriptionMobile = () => {
    const [data, setData] = useState([]);
    const informations = getInformationData()[0].features1;
    const conditions = getInformationData()[0].conditions1;
    const extraExplain = getInformationData()[0].extraExplain;
    // console.log("FeatureConditionDescriptionMobile", informations)
    // console.log("CONDITIOSN", conditions)
    // console.log("ExtraExplain", extraExplain)

    // const accordianArray = [];
    // informations.map((info) => {
    //     console.log("INFO", info);
    //     accordianArray.push(info);
    // })

    const [accordions, setAccordion] = useState(informations);
    const [conditionsAcc, setconditionsAcc] = useState(conditions);
    const [extraExplains, setExtraExplains] = useState(extraExplain);

    // console.log("ACCORDIAN", accordions)

    const toggleAccordion = (accordionkey) => {
        // const updatedAccordions = accordions.map((accord) => {
        // console.log("ACCCCORD", accord)
        if (accordions.id === accordionkey) {
            setAccordion({ ...accordions, isOpen: !accordions.isOpen });
        } else {
            setAccordion({ ...accordions, isOpen: false });
        }


        // });

        // setAccordion(updatedAccordions);
    };
    const toggleconditions = (conditionsKey) => {

        if (conditionsAcc.id === conditionsKey) {
            setconditionsAcc({ ...conditionsAcc, isOpen: !conditionsAcc.isOpen });
        } else {
            setconditionsAcc({ ...conditionsAcc, isOpen: false });
        }


    };
    const toggleDesc = (extraExplainsId) => {

        if (extraExplains.id === extraExplainsId) {
            setExtraExplains({ ...extraExplains, isOpen: !extraExplains.isOpen });
        } else {
            setExtraExplains({ ...extraExplains, isOpen: false });
        }


    };




    return (
        <div className="flex flex-col justify-start  gap-2  mt-4 rounded-lg shadow-lg p-4 bg-gray-100">
            {

                // accordions.map((accordian) => (
                <>

                    <Accordion
                        id={accordions.id}
                        title={accordions.title}
                        data={accordions.data}
                        isOpen={accordions.isOpen}
                        descTrue={accordions.textAccordian}
                        toggleAccordion={() => toggleAccordion(accordions.id)}


                    />

                    <Accordion
                        id={conditionsAcc.id}
                        title={conditionsAcc.title}
                        data={conditionsAcc.data}
                        isOpen={conditionsAcc.isOpen}
                        descTrue={conditionsAcc.textAccordian}

                        toggleAccordion={() => toggleconditions(conditionsAcc.id)}


                    />

                    <Accordion
                        id={extraExplains.id}
                        title={extraExplains.title}
                        data={extraExplains.desc}
                        isOpen={extraExplains.isOpen}
                        descTrue={extraExplains.textAccordian}

                        toggleAccordion={() => toggleDesc(extraExplains.id)}


                    />

                </>


                // ))
            }
        </div>
    );
}

export default FeatureConditionDescriptionMobile;