import React, { useState } from 'react';
import data from "./Dt";
import AboutMe from './AboutMe'
import Project from './Project'
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa"

export default function Home() {
  const Users = data.map(item => {
    return (
      <div className='Container flex justify-between h-50vh mt-36' key={item.id}>
        <div className=' icons ml-12 translate-y-28'>
          <FaFacebook className='m-2 hover:text-sky-700 transition-colors duration-300'  />
          <FaLinkedinIn className='m-2 hover:text-sky-700 transition-colors duration-300' />
          <FaTwitter className='m-2 hover:text-sky-700 transition-colors duration-300' />
        </div>
        <div className=' '>
          <img src={item.Image} alt={item.alt} className='w-96' />
        </div>
        <div className=' Desc translate-y-24 text-center font-bold lg:mr-32'>
          <h2>{item.Greeting}</h2>
          <h5 className='text-xs font-thin mb-2 tracking-widest animate-pulse '>{item.Name}</h5>
          <div className="line w-80 h-1 bg-sky-800 rounded"></div>
          <p className='text-sm mt-1 ' dangerouslySetInnerHTML={{ __html: item.Description }} />
        </div>
      </div>
    );
  });

  return (
    <div>
      {Users} <br /> <br /><br /><br /><br /> <br />
      <div className='footer flex justify-center gap-2'>
        {/* <div className='w-96 h-1 bg-sky-700 '></div> */}
        <div className='translate-y-[-14px] font-bold tracking-widest pl-5 pr-5'><h3>Software Developer</h3></div>
        {/* <div className='w-96 h-1 bg-sky-700 '></div> */}
      </div> <br /><br />
      <AboutMe/> <br />
      <div className="mt-32" >
      <Project />
      </div>
    </div>
  );

}



