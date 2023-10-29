"use client";
import ProductRating from "@/components/cardscrolltype/ProductRating";
import React, { useState } from 'react'

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { getScoreParams } from "../formSection/scoreParams";


const Score = ({ scores }) => {
    const scoreParams = getScoreParams();
    const [showScore, setShowScore] = useState(false);

    console.log("SSCCOORRRESS", scores)
    return (
        <div className="felx  gap-2  items-center border border-dashed p-4 rounded-lg text-gray-500 cursor-pointer  relative w-full">
            <div className="flex gap-2 items-center " onClick={() => setShowScore((current) => !current)}>
                {
                    showScore ? (
                        <span><IoIosArrowUp className="text-lg" /></span>
                    ) : (
                        <span><IoIosArrowDown className="text-lg" /></span>

                    )
                }
                <span className="text-xs lg:text:sm">میانگین امتیازات : </span>


                <span><ProductRating showScore={showScore} setShowScore={setShowScore} /></span>

            </div>

        </div>
    );
}

export default Score;

// quality:4,
// quantity:4,
// answering:4,
// responseTime:4,
// hygiene:4,
// Discipline:4,
// politeTreatment:4,
// Variety:4,
// peace:4,
// suggest:3,
// unsuggest:3,
// MesterScore:4,