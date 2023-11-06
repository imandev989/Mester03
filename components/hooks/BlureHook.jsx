"use client";

import { useSelector, useDispatch } from "react-redux";

const BlureHook = () => {
  const blurPage = useSelector((state) => state.configs.blurPage);
  return <div className={`${blurPage ? "blur" : ""}`}></div>;
};

export default BlureHook;
