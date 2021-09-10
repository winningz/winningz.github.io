import React from "react";
import profile from "./choi01.jpg";
import Name from "./Name";
import Position from "./Position";
 
import { FaCode } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
 
export default function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full bg-green-200"
            src={profile}
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <Name name="Jaemyun Lee" />
          <Position title="Software Engineer" />
          <div className="flex justify-center mt-4">
            <div className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white ">
              <FaCode />
              <span className="sr-only">Code</span>
            </div>
            <div className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-1000">
              <FaPlane />
              <span className="sr-only">Travel</span>
            </div>
            <div className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300">
              <FaSwimmer />
              <span className="sr-only">Swimmer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}