import React from "react";

const Newsletters = () => {

  return (
    <>
      <div className="bg-black text-white">
        <div className="max-w-[1000px] px-2 mx-auto py-20 grid gap-9 md:grid-cols-1 ">
          <div>
            <h1 className="text-3xl font-bold py-2" >Want tips & tricks to optimize your flow?</h1>
            <p>Sign up to newsletter and stay up to date.</p>
          </div>
          <div className="w-full ">
            <form className="w-full grid md:grid-cols-12 gap-4 ">
              <input
                type="text"
                placeholder="Enter your Email"
                className="md:col-span-8  py-3 rounded-md placeholder:px-4 "
              />
              <button className=" w-[300px] mx-auto md:col-span-4 rounded-lg text-black bg-green-500 py-3 px-4">Notify me </button>
             
            </form>
            <p className="mt-6ttext-right " >We care about the protection of your data. Read our <span className="text-green-400" >Privacy policy</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletters;
