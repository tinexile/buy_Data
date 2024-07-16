import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TiSocialGithubCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <>
    <div className="bg-black" >

   
      <div className="max-w-[1340px] text-white  mx-auto grid grid-cols-1 md:grid-cols-8 gap-12 px-6 py-16 justify-center items-center">
        {/* 1st div */}
        <div className="md:col-span-3 grid gap-y-5">
          <h1 className="text-3xl font-bold text-green-500">REACT</h1>
          <p>
            By default, Tailwind includes grid-column utilities for working with
            grids with up to 12 columns. You change, add, or remove these by
            customizing the gridColumn, gridColumnStart, and gridColumnEnd
            sections of your Tailwind theme config.
          </p>
          <div className="flex justify-between items-center">
            <FaFacebook size={30} />
            <FaInstagram   size={30 }/>
            <FaTwitter  size={30} />
            <FaGithub  size={30} />
            <TiSocialGithubCircular size={30} />
          </div>
        </div>

        {/* 2nd div */}
        <div className="md:col-span-5  flex justify-between itms-center">
          <div className="">
            <h3 className="font-bold" >Solutions</h3>
            <h3>Analytics</h3>
            <h3>Marketing</h3>
            <h3>Commerce</h3>
            <h3>Insights</h3>
          </div>

          <div className="" >
            <h3 className="font-bold" >Support</h3>
            <h3>Pricing</h3>
            <h3>documentation </h3>
            <h3>Guides</h3>
            <h3>API Status</h3>
          </div>

          <div className="" >
            <h3 className="font-bold" >Company</h3>
            <h3>About</h3>
            <h3>Blog </h3>
            <h3>Jobs</h3>
            <h3>Press</h3>
            <h3>Partners</h3>
          </div>

          <div className="" >
            <h3 className="font-bold" >Legal</h3>
            <h3>Claims</h3>
            <h3>Policy</h3>
            <h3>Terms</h3>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
