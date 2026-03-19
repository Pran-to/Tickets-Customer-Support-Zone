import React from "react";
import img1 from "../assets/vector1.png"
const Banner = ({ progress ,resolve}) => {
  return (
    <div className=" flex max-w-300 mx-auto gap-5 my-10 p-7 ">
      <div className="relative bg-linear-to-r from-[#6b36e5] to-[#995cf0] text-white w-[50%] h-52 text-center content-center rounded-xl">
        <img src={img1} className="absolute left-0 top-0" alt="" />
        <img src={img1} className="absolute right-0 top-0  -scale-x-100"  alt="" />
        <h1 className="text-xl font-semibold">In-Progress</h1>
        <h1 className="text-5xl font-semibold">{progress}</h1>
      </div>
      <div className="relative bg-linear-to-r from-[#54CF68] to-[#00827A] text-white w-[50%] h-52    text-center content-center rounded-xl">
          <img src={img1} className="absolute left-0 top-0" alt="" />
        <img src={img1} className="absolute right-0 top-0  -scale-x-100"  alt="" />
        <h1 className="text-xl font-semibold">Resolved</h1>
        <h1 className="text-5xl font-semibold">{resolve}</h1>
      </div>
    </div>
  );
};

export default Banner;
