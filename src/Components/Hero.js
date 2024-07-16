import React from "react";

const Hero = () => {
  return (
    <div className="bg-black" >

    
    <div className="max-w-[1600px] mx-auto  text-white h-screen  grid justify-center items-center ">
      <div className=" max-w-[500px]   flex flex-col justify-center items-center  text-center ">
        <h3 className="text-green-400 font-bold ">
          GROWING WITH DATA ANALYTICS
        </h3>
        <h1 className="text-5xl font-bold my-5">Grow with data</h1>
        <h2 className="text-2xl font-bold my-4 ">
          Fast,flexible financing for BTB
        </h2>
        <p className="text-gray-400 text-xl ">
          Monitor your data analytics to increase revenue for BTB,BTC, & SASS
          platforms
        </p>
        <button className="mt-5 font-bold bg-white py-2 px-8 text-black rounded-lg">
          Get Started
        </button>
      </div>
    </div>
    </div>
  );
};

export default Hero;
