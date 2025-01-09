import React from "react";

import pic from "../../public/252525.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { RiCss3Line } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { PiFileCppBold } from "react-icons/pi";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
 
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 "

      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h3>Hello, I'm a</h3>
        
       
              <ReactTyped 
              className="text-green-800"
              strings={["coder","developer","programmer"]}
               typeSpeed={40}
               backSpeed={50}
               loop={true} />

              
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              i am Surender.I am student studying Computer Science and
              Engineering. I've been learning all about computers and how to
              create cool stuff with them. Now, I'm excited to bring my tech
              skills to the real world. But I'm not just about tech – I'm also
              eager to explore new opportunities outside of compute
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer hover:scale-125 duration-150 rounded-full border-spacing-2" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-125 duration-150 rounded-full border-spacing-2" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer hover:scale-125 duration-150 rounded-full border-spacing-2" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer hover:scale-125 duration-150 rounded-full border-spacing-2" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">
                  Pursuing on <br />
                  <span className="text-red-700 font-bold">
                    {" "}
                    FULL STACK WEB DEVLOPMENT
                  </span>
                </h1>
                <div className="flex space-x-5">
                  <div className=" flex space-x-4 m-2 ">
                    <FaReact className="size-8 hover:scale-125 duration-150 rounded-full border-spacing-2" />
                    <IoLogoHtml5 className="size-8 hover:scale-125 duration-150 rounded-full border-spacing-2" />
                    <RiCss3Line className="size-8 hover:scale-125 duration-150 rounded-full border-spacing-2" />
                    <DiJavascript className="size-8 hover:scale-125 duration-150 rounded-full border-spacing-28" />
                    <PiFileCppBold className="size-8 hover:scale-125 duration-150 rounded-full border-spacing-28" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
