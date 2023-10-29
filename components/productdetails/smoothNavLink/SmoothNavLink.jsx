"use client";

import Link from "next/link";
import { useState } from "react";


const SmoothNavLink = () => {
    const [active, setActive] = useState(null);
    return (
        <>
            <ul className="flex gap-4  text-[0.6rem] md:text-sm text-gray-500 ">
                <li className={active == "locationInformation" ? "active" : ""}>
                    <Link href="#locationInformation"  onClick={() => setActive("locationInformation")}>
                        آدرس
                    </Link></li>
                <li className={active == "featuresConditions" ? "active" : ""}>
                    <Link href="#featuresConditions" onClick={() => setActive("featuresConditions")}>
                        ویژگی و شرایط
                    </Link>
                </li>
                <li className={active == "description" ? "active" : ""}>
                    <Link href="#description" onClick={() => setActive("description")}>
                        توضیحات
                    </Link>
                </li>
                <li className={active == "questionComment" ? "active" : ""}>
                    <Link href="#questionComment" onClick={() => setActive("questionComment")}>
                        نظر و پرسش
                    </Link>
                </li>


            </ul>
        </>
    );
}

export default SmoothNavLink;