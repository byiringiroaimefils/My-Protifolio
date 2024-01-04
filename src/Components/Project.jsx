import Photo from "../assets/Kirclinic.png";
import Photo1 from "../assets/Nike.png";
import Photo2 from "../assets/Profile.png";
import React from 'react'
import { FaGithub } from "react-icons/fa6";

export default function Project() {
  return (
    <div>
      <div className="text-center">
        <h3 className='hover:text-sky-700 transition-colors duration-300 text-lg font-semibold'>MY PROJECT</h3>
      </div>
      <div className='containers grid justify-center grid-cols-3 gap-y-7 ml-10 mt-10 mb-10'>
        <div className='container border-2 fit w-96 p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300'>
          <img src={Photo} alt="" className="w-96" />
          <label className="font-bold">Kira Clinic</label>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <h6>Computer Languages</h6>
          <p className="text-sm font-extrabold">HTML , CSS ,JS and PHP</p><br />
          <div className="flex gap-2 ">
            <span>Viewed</span>
            <FaGithub className="translate-y-1" />
          </div>
        </div>

        <div className='container border-2 fit w-96 p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300'>
          <img src={Photo1} alt="" className="w-96" />
          <label className="font-bold"> Nike Shoes Collection</label>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <h6>Computer Languages</h6>
          <p className="text-sm font-extrabold">React.js and CSS5</p><br />
          <div className="flex gap-2 ">
            <span>Viewed and Available</span>
            <FaGithub className="translate-y-1" />
          </div>
        </div>

        <div className='container border-2 fit w-96 p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300'>
          <img src={Photo2} alt="" className="w-96" />
          <label className="font-bold">My Portifolio</label>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <h6>Computer Languages</h6>
          <p className="text-sm font-extrabold">React.js and Tailwind</p><br />

          <div className="flex gap-2 ">
            <span>Viewed and Available</span>
            <FaGithub className="translate-y-1" />
          </div>
        </div>

        <div className='container border-2 fit w-96 p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300'>
          <img src={Photo} alt="" className="w-96" />
          <label className="font-bold">Kira Clinic</label>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <h6>Computer Language</h6>
          <p className="text-sm font-extrabold">HTML , CSS ,JS</p><br />
          <div className="flex gap-2 ">
            <span>Viewed and Available </span>
            <FaGithub className="translate-y-1" />
          </div>
        </div>

        <div className='container border-2 fit w-96 p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300'>
          <img src={Photo} alt="" className="w-96" />
          <label className="font-bold">Kira Clinic</label>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <h6>Computer Language</h6>
          <p className="text-sm font-extrabold">HTML , CSS ,JS</p><br />
          <div className="flex gap-2 ">
            <span>Viewed and Available</span>
            <FaGithub className="translate-y-1" />
          </div>
        </div>

        <div className='container border-2 fit w-96 p-2 hover:bg-sky-800 cursor-pointer transition-colors duration-300'>
          <img src={Photo} alt="" className="w-96" />
          <label className="font-bold">Kira Clinic</label>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <h6>Computer Language</h6>
          <p className="text-sm font-extrabold">HTML , CSS ,JS</p><br />
          <div className="flex gap-2 ">
            <span>Viewed and Available</span>
            <FaGithub className="translate-y-1" />
          </div>
        </div>
      </div>
    </div>
  )
}
