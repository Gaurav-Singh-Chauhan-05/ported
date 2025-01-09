import React from "react";
import java from "../../public/jawascript.jpg";
import python from "../../public/pythons.jpg";
import css from "../../public/css.jpg";
import html from "../../public/htttml.jpg";
import react from "../../public/react.jpg";
import nodejs from "../../public/node.jpg"

function PortFolio() {
  const cardItem = [
    {

      logo: css,
      name: "css",
    },
    {
   
      logo: java,
      name: "Jawascript",
    },
    {
  
      logo: react,
      name: "ReactJS",
    },
    {
 
      logo: nodejs,
      name: "NodeJS",
    },
    {
   
      logo: python,
      name: "Python",
    },
    {
        logo: html,
        name: "HTML",
      },

  ];
  return (
    <div
      name="Portfoliyo"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 "
    >
        
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({   logo, name } ,index) => (
        
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={index}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt="index"
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
