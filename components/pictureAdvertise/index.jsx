"use client";

import { useState, useEffect } from "react";

import OnePic from "./OnePic";
import TwoPic from "./TwoPic";
import FourPic from "./FourPic";

const PictureAdvertise = ({ count }) => {
  // console.log("COUNT:",count)
  const [picState, setPicState] = useState(0);
  useEffect(() => {
    setPicState(count);
  }, []);
  // console.log("STATE",picState);
  return (
    <div className=" bg-gray-100 py-4 mx-2">
      {picState && picState === "1" && <OnePic />}
      {picState && picState === "2" && <TwoPic />}
      {picState && picState === "4" && <FourPic />}
    </div>
  );
};

export default PictureAdvertise;
