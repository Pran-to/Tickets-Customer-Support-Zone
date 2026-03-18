import React from "react";

const Banner = ({ progress }) => {
  return (
    <div className=" flex max-w-300 mx-auto gap-5 my-10 p-7 ">
      <div className="bg-linear-to-r from-[#6b36e5] to-[#995cf0] text-white w-[50%] h-52 text-center content-center rounded-xl">
        <h1 className="text-xl font-semibold">In-Progress</h1>
        <h1 className="text-5xl font-semibold">{progress}</h1>
      </div>
      <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] text-white w-[50%] h-52    text-center content-center rounded-xl">
        <h1 className="text-xl font-semibold">In-Progress</h1>
        <h1 className="text-5xl font-semibold">0</h1>
      </div>
    </div>
  );
};

export default Banner;
