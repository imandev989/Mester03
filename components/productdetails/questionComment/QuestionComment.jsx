"use client";

import { Tabs2, Tab2 } from "@/components/tabs/Tabs2";


const items = ["Q", "A"]


const QuestionComment = () => {
    return (
        <div className="mt-4">
            <Tabs2>
                <Tab2 label="نظرات و امتیازات">
                    {/* <div className="bg-rose-300">
                        <p>SCORES</p>
                    </div> */}
                </Tab2>
                <Tab2 label="پرسش و پاسخ">
                    {/* <div className="bg-rose-300">
                        <p>Questions</p>
                    </div> */}
                </Tab2>
            </Tabs2>

        </div>
    );
}

export default QuestionComment;