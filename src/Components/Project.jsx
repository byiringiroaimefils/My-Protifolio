import { useEffect } from 'react';
import Photo from "../assets/DashBoard.jpeg";
import Photo1 from "../assets/Nike.png";
import Photo2 from "../assets/Profile.png";
import Photo3 from "../assets/age.png";
import Photo4 from "../assets/Kirclinic.png";
// import React from 'react'

import Aos from "aos";
import "aos/dist/aos.css"

import { FaGithub } from "react-icons/fa6";

export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000, debounceDelay: 2000 })
  })

  return (
    <div>
      <div className="text-center">
        <h3 className='hover:text-sky-700 transition-colors duration-300 text-lg font-semibold'>MY PROJECT</h3>
      </div>
      {/* dd */}
      <div className='animation1 containers grid justify-center grid-cols-3 gap-y-7 ml-10 mt-10 mb-10 md:w-screen' >
        <div className='container fit w-full p-2  rounded-sm cursor-pointer transition-colors duration-300' data-aos="fade-right" >
          <img src={Photo} alt="" className="" />
          <label className="font-bold">STOCK MANAGEMENT</label>
          <p>This is Full stack Development of Saint Anne. It was challenge worked on within One month </p>
          <h6>Computer Languages</h6>
          <p className="text-sm font-extrabold">HTML,CSS ,JS,Mysql and PHP</p><br />
          <div className="flex gap-2 ">
            <a href="" >Viewed and Available </a>
            <FaGithub className="translate-y-1" />
          </div>
        </div>
        <div className='container fit w-full p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300' data-aos="fade-right">
          <img src={Photo3} alt="" className="" />
          <label className="font-bold">BABY STORY</label>
          <p>Beatiful web Application wher childern can improve art of reading.</p>
          <h6>Computer Language</h6>
          <p className="text-sm font-extrabold">MERN STACK Development</p><br />
          <div className="flex gap-2 ">
            <a href="">Viewed and Available </a>
            <FaGithub className="translate-y-1" />
          </div>
        </div>

        <div className='container fit w-full p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300' data-aos="fade-left">
          <img src={Photo2} alt="" className="" />
          <label className="font-bold">MY PORTIFOLIO</label>
          <p>This is My Profile where you can find all my full information and Achivement</p>
          <h6>Computer Languages</h6>
          <p className="text-sm font-extrabold">React.js and Tailwind</p><br />

          <div className="flex gap-2 ">
            <a href="https://github.com/byiringiroaimefils/My-Protifolio">Viewed and Available</a>
            <FaGithub className="translate-y-1" />
          </div>
        </div>

        <div className='container fit  w-full p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300' data-aos="zoom-in" >
          <img src={Photo1} alt="" className="" />
          <label className="font-bold"> NIKE SHOES COLLECTION</label>
          <p>This simple FrontENd website of Nike where you find different shoes of Nike</p>
          <h6>Computer Languages</h6>
          <p className="text-sm font-extrabold">React.js and CSS5</p><br />
          <div className="flex gap-2 ">
            <a href="https://github.com/byiringiroaimefils/NikeShoes">Viewed and Available</a>
            <FaGithub className="translate-y-1" />
          </div>
        </div>



        <div className='container fit w-full p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300' data-aos="zoom-in">
          <img src={Photo4} alt="" className="" />
          <label className="font-bold">KIRA CLINIC</label>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <h6>Computer Language</h6>
          <p className="text-sm font-extrabold">HTML,CSS ,JS</p><br />
          <div className="flex gap-2 ">
            <a href="">Viewed and Available</a>
            <FaGithub className="translate-y-1" />
          </div>
        </div>

        {/* <div className='container fit w-96 p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300'>
          <img src={Photo} alt="" className="w-96" />
          <label className="font-bold">Kira Clinic</label>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <h6>Computer Language</h6>
          <p className="text-sm font-extrabold">HTML , CSS ,JS</p><br />
          <div className="flex gap-2 ">
            <a href="">Viewed and Available</a>
            <FaGithub className="translate-y-1" />
          </div>
        </div> */}
      </div>
    </div>
  )
}
