import React, { useState } from 'react'
import pic from "../../public/252525.jpg"
import { TiThMenuOutline } from "react-icons/ti";
import { FaRegWindowClose } from "react-icons/fa";
import { Link } from 'react-scroll';

export default function Napbar() {
  const[menu,setmenu]=useState(false)

  const navitems=[
    {
      id:1,
      text:"Home"
    },

    {
      id:2,
      text:"About"
  
    },

    {
      id:3,
      text:"Portfoliyo"
    },
    
    {
      id:4,
      text:"Experiance"
    },
    {
      id:5,
      text:"Content"
    },
  ]
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-neutral-400">

    <div className='flex justify-between h-16 items-center'>
      <div className='flex space-x-2'>
        <img src={pic} className="h-12 w-12 rounded-full" alt=''/>
        <h1 className='font-bold text-xl cursor-pointer'>SURENDER CHAUHAN
        <p className='text-sm'>Web Developer</p>
        </h1>
      </div>
      <div >
        <ul className='hidden md:flex space-x-8'>
          {
            navitems.map(({id,text}) => (
            <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>

                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass='active'>{text}
                  </Link>
             
              </li>
              ))
          }


        </ul>
      <div onClick={()=>setmenu(!menu)} className='md:hidden'>
      {menu ? <FaRegWindowClose size={24}/>:<TiThMenuOutline size={24}/>}
      </div>
      </div>
      </div>
      {menu &&(
      <div  className='bg-white'>
         {/* <ul className='md:hidden flex flex-col h-screen items-center justify-center space-x-3 text-xl'> */}
         <ul className='md:hidden flex flex-col h-screen   space-x-0 text-xl text-emerald-500'>
         {
            navitems.map(({id,text}) => (
            <li className='hover:scale-105 duration-200 cursor-pointer bg-stone-600' key={id} >
                <Link to={text}
                  onClick={()=>setmenu(!menu)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'>{text}
                  </Link>
              </li>
            ))
          }
        </ul>
      
      </div>
      )}
    </div>
    <div></div>
    </>
  )
}
