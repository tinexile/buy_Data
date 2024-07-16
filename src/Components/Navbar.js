import React from "react";
import { MdMenu } from "react-icons/md";

const Navbar = () => {

       

  return (
    <>
      <div className="bg-black text-white">
        <div className="max-w-[1200px] mx-auto py-5 w- flex items-center justify-between px-8">
          <h1 className="text-green-400 text-3xl font-bold ">REACT.</h1>
          <div className="sm:block hidden">
            <ul className="  flex justify-between items-center gap-8 text-xl">
              <li>Home</li>
              <li>Account</li>
              <li>Sign In</li>
              <li className="bg-white p-2 px-4 text-black rounded-md font-semibold">
                Get Started
              </li>
            </ul>
          </div>
          <MdMenu className="block sm:hidden text-white" size={30} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
