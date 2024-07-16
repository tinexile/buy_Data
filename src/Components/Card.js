import React from "react";
import { RiUserVoiceLine } from "react-icons/ri";

const Card = () => {
  return (
    <>
      <div className="max-w-[1340px] mx-auto py-16 grid items-center sm:justify-center sm:grid-cols-3 gap-5 px-4 ">
    


      {/* 1St card */}
          
        <div className="mx-auto text-center w-full shadow-xl rounded-lg hover:scale-105 duration-300">
          <div className="text-2xl font-bold grid gap-4 mb-4">
            <RiUserVoiceLine className=" size-8 mx-auto" />
            <h1>Single User</h1>
            <h3>$149</h3>
          </div>

          <div>
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8"> 1 user Allowed</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start trial
          </button>
        </div>
      {/* 2nd Card */}
      <div className=" bg-gray-300 mx-auto text-center w-full shadow-xl rounded-lg hover:scale-105 duration-300 py-4"  >
          <div className="text-2xl font-bold grid gap-4 mb-4">
            <RiUserVoiceLine className=" size-8 mx-auto" />
            <h1>Single User</h1>
            <h3>$149</h3>
          </div>

          <div>
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8"> 1 user Allowed</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start trial
          </button>
        </div>
         {/* third card */}
        
         <div className="mx-auto text-center w-full shadow-xl rounded-lg hover:scale-105 duration-300">
          <div className="text-2xl font-bold grid gap-4 mb-4">
            <RiUserVoiceLine className=" size-8 mx-auto" />
            <h1>Single User</h1>
            <h3>$149</h3>
          </div>

          <div>
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8"> 1 user Allowed</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start trial
          </button>
        </div>

      </div>
    </>
  );
};

export default Card;
