"use client";
import { getCommentScore } from "./commentsScores";
import Image from "next/image";
import p1 from "@/public/icons/user-pic.png";
import Score from "./Score";
import { BsReply } from "react-icons/bs";
import FormSection from "../formSection/FormSection";
import { useState } from "react";



const CommentScore = () => {
    const comments = getCommentScore();
    const [userLoginned, setUserLoggined] = useState(true);


    // console.log("COMENTSSSSS", comments)
    // console.log("iman");
    return (
        <div className="flex flex-col  mt-4 rounded-lg p-4 bg-gray-100">
            {/* <div className="pb-2 border border-x-0 border-t-0 border-b-2 border-rose-300 border-solid">
                <span className="text-gray-500 text-sm">امتیاز و نظر خریداران این فروشنده</span>
            </div> */}
            <div>



                {
                    comments.map((comment, index) => {
                        return <div className="flex justify-between items-start gap-4  mt-4 " key={index}>
                            <div className="hidden lg:block lg:w-[5%]">
                                <Image
                                    src={p1}
                                    alt={"آواتار"}
                                    width={300}
                                    height={200}
                                    className="rounded-full w-[55px] h-[55px] sm:w-[64px] sm:h-[64px]"
                                />
                            </div>
                            <div className="flex flex-col  justify-between items-center gap-4 border border-solid border-gray-300 rounded-lg py-4 px-2  w-full lg:w-[95%]">

                                <div className="flex flex-col gap-4 w-full">
                                    <div className="flex flex-col md:flex-row justify-between gap-4  " >
                                        <div className="flex justify-start gap-4 divide-x-2 divide-x-reverse text-sm text-gray-500 items-center ">
                                            <span className="pr-4">{comment.name}</span>
                                            <span className="pr-4">{comment.dateTime}</span>
                                            <span className="pr-4">{comment.store}</span>
                                        </div>
                                        <div>
                                            <div className="text-xs flex justify-center "><Score scores={comment.score} /></div>

                                        </div>
                                    </div>

                                    <div className=" flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center  w-full">
                                        <div><p className="pr-4 ">{comment.comment}</p></div>

                                    </div>
                                </div>

                                <div className=" w-full flex flex-col gap-4 ">

                                    {

                                        comment.response?.map((res, index1) => {


                                            return <div className="flex gap-4 w-full items-center" key={index1}>

                                                <BsReply className="text-2xl text-green-500" />

                                                <div  className="border border-dotted  py-4 px-2 rounded-lg border-gray-500 w-full">

                                                    <div className="flex flex-col gap-4">

                                                        <div className="text-xs divide-x-2 divide-x-reverse gap-4 "><span className="pl-2">{res.name}</span><span className="pr-2">{res.dateTime}</span></div>
                                                        <div>{res.responseText}</div>

                                                    </div>
                                                </div>



                                            </div>


                                        })
                                    }

                                </div>

                            </div>

                        </div>

                    }
                    )
                }




                {/* <div className="flex justify-between items-start gap-4  mt-4 ">
                    <div className="hidden lg:block lg:w-[5%]">
                        <Image
                            src={p1}
                            alt={"آواتار"}
                            width={300}
                            height={200}
                            className="rounded-full w-[55px] h-[55px] sm:w-[64px] sm:h-[64px]"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 border border-solid border-gray-300 rounded-lg py-4 px-2  w-full lg:w-[95%]">
                        <div className="flex flex-col gap-4 w-full lg:w-[70%]">
                            <div className="flex justify-start gap-4 divide-x-2 divide-x-reverse text-sm text-gray-500">
                                <span className="pr-4">{comments[0].name}</span>
                                <span className="pr-4">{comments[0].dateTime}</span>
                                <span className="pr-4">{comments[0].store}</span>
                            </div>
                            <div><p className="pr-4">{comments[0].comment}</p></div>
                        </div>
                        <div className="w-full lg:w-[30%] "><Score scores={comments[0].score} /></div>
                    </div>

                </div> */}
                {
                    userLoginned && (
                        <FormSection title="نظر و امتیاز دهی " placeholdertext="متن نظر خود را وارد کنید ..." buttonText="ارسال نظر" isComment={true} />
                    )
                }
            </div>
        </div>
    );
}

export default CommentScore;