import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-800 w-full flex md:flex-row flex-col justify-around items-start p-10">
        <div className="p-5 ">
          <ul>
            <p className=" font-bold text-2xl pb-4">Stay connected</p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="  font-bold text-2xl pb-4">Product</p>
            <li className="  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Futures & Options
            </li>
            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Mutual Funds
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="  font-bold text-2xl pb-4">Company</p>
            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Products
            </li>

            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="  font-bold text-2xl pb-4">Support</p>
            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-798">
        <h1 className=" text-white p-2  text-sm font-semibold transition-colors duration-300 lg:px-3 md:mx-2  font-semibold">
          ©2023-2022 Advanced Engineering Certification Program
          <span className="hover:text-blue-600 font-semibold cursor-pointer"></span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
