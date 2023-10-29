"use client";

import { BsQuestionCircle } from "react-icons/bs";
import { getScoreParams } from "./scoreParams";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";


import { Rating } from 'react-simple-star-rating'
import { useState } from "react";


const FormSection = ({ title, placeholdertext, buttonText, isComment }) => {
  
    const [images, setImages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [fileLimit, setFileLimit] = useState(false);


    const handleFileUpload = (event) => {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {

                setImages((prevImages) => [
                    ...prevImages,
                    {
                        file: files[i],
                        previewUrl: e.target.result,
                    },
                ]);
            };
            reader.readAsDataURL(files[i]);
        }
    };

    const removeImage = (index) => {
        setImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages.splice(index, 1);
            return updatedImages;
        });
    };

    const showImage = (index) => {
        setSelectedImage(images[index]);
        setShowModal(true);
    };


    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };




    const scoreParams = getScoreParams();
    // console.log("SCOREPARAMS", scoreParams);
    // console.log(scoreParams[0].title)
    // console.log(scoreParams[0].score)
    return (
        <div className="flex flex-col  mt-4 rounded-lg shadow-lg p-4 bg-gray-100">
            <div className="flex justify-start  gap-2 lg:border lg:border-b-2 lg:border-solid lg:border-x-0 lg:border-t-0 lg:border-rose-300">
                <span className="mt-2 lg:hidden"><BsQuestionCircle /></span>
                <span className="font-bold border border-solid border-b-4 border-x-0 border-t-0 pb-2 border-rose-300 pl-2">{title}</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-8 lg:mt-8">
                <div className="lg:w-1/2 flex flex-col gap-4">
                    <div className="border border-solid border-gray-300 bg-gray-200 mb-4 rounded-sm lg:rounded-xl">
                        <textarea name="questionAnswer" id="questionAnswer" className="bg-gray-200 w-full p-4" placeholder={placeholdertext} >

                        </textarea>
                    </div>
                   

                    {
                        isComment && (
                            <div className="container">



                                <div className="custom-file flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg">
                                    <div>
                                        <AiOutlineCloudUpload className="text-2xl text-gray-500"/>
                                    </div>
                                    <label htmlFor="file-upload" className="cursor-pointer text-gray-500">عکس خود را وارد نمایید ...</label>
                                    <input type="file" className="custom-file-input" id="file-upload" multiple onChange={handleFileUpload} hidden/>
                                    

                                </div>
                                {/* <label htmlFor="file-upload"> انتخاب عکس ها</label> */}
                                {/* <input
                                hidden
                                    className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4 file:rounded-md
                                file:border-0 file:text-sm file:font-semibold
                                file:bg-pink-50 file:text-pink-700
                                hover:file:bg-pink-100"
                                    type="file"
                                    id="file-upload"
                                    multiple
                                    onChange={handleFileUpload}
                                    
                                    
                                /> */}
                                <div className="image-container flex flex-wrap gap-2 p-4  mt-4">
                                    {images.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img
                                                src={image.previewUrl}
                                                alt="Preview"
                                                className="profile-pic"
                                                onClick={() => showImage(index)}
                                                width={200}
                                                height={200}
                                            />
                                            <button
                                                className="remove-button"
                                                onClick={() => removeImage(index)}
                                            >
                                                <IoCloseCircleOutline className="text-3xl text-gray-500" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                {showModal && (
                                    <div className="modal" onClick={closeModal}>
                                        <div className="modal-content">
                                            <span className="close" onClick={closeModal}>
                                                &times;
                                            </span>
                                            <img
                                                src={selectedImage.previewUrl}
                                                alt="Preview"
                                                className="modal-image"
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                                )}

                            </div>

                        )
                    }
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" id="some_id" />
                            <label htmlFor="some_id" >  من ربات نیستم </label>
                        </div>
                        <div>
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm">{buttonText}</button>
                        </div>

                    </div>
                </div>
                {
                    !isComment && (
                        <div className="text-xs leading-relaxed lg:w-1/2">
                            <span >مستری عزیز :</span>
                            <ul className="list-disc text-gray-500 mt-1 pr-8">
                                <li>
                                    <p>متن سوالات خود را به فارسی تایپ نمایید.</p>

                                </li>
                                <li>
                                    <p>از درج سوالاتی که مغایر با شئونات اسلامی، سیاسی و مذهبی باشد معذوریم.</p>

                                </li>
                                <li>
                                    <p>صحت و سقم پرسش شما بررسی شده و در صورتی که در ارتباط با این پیشنهاد باشد نمایش داده می شود.</p>

                                </li>
                            </ul>

                        </div>
                    )
                }
                {
                    isComment && (
                        <div className=" p-4 flex flex-col gap-4 border-dotted border border-gray-500 rounded-lg lg:w-1/2 mt-4 lg:mt-0">
                            <div>
                                <span className="m-auto">امتیاز کلی :    </span>
                                <Rating size={35} rtl={true} initialValue={2} SVGstyle={{ 'display': 'inline' }} />                            </div>
                            <div>
                                <ul className="flex flex-col gap-2">
                                    {
                                        scoreParams?.map((param, index) => {
                                            return <li key={index} className="text-xs flex gap-4 justify-between items-center">
                                                <span>{param.title}</span>
                                                <span><Rating size={25} rtl={true} initialValue={2} SVGstyle={{ 'display': 'inline' }} /></span>
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>


                        </div>
                    )
                }


            </div>
        </div>
    );
}

export default FormSection;