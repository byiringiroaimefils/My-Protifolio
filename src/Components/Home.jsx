import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

import data from "./Data";
import AboutMe from './AboutMe'
import Project from './Project'
import Contactme from "./Contact";
import Achivement from "./Achivement.jsx";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa"

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  const Users = data.map(item => {
    return (
      <div className='Container flex justify-between h-50vh mt-36' key={item.id}>

        <div className='iconss ml-12 translate-y-28'>
          <a href="https://web.facebook.com/byiringiro.aimefils">  <FaFacebook className='m-2 hover:text-sky-700 transition-colors duration-300 cursor-pointer' /></a>
          <a href="https://www.linkedin.com/in/byiringiro-aime-fils-281609296/">  <FaLinkedinIn className='m-2 hover:text-sky-700 transition-colors duration-300 cursor-pointer' /></a>
          <a href="https://linkbio.co/byiringiroaimefils"> <FaTwitter className='m-2 hover:text-sky-700 transition-colors duration-300 cursor-pointer' /></a>
        </div>

        <div className=''  >
          <img src={item.Image} alt={item.alt} className='w-96' />
        </div>

        <div className='mt-24 text-center font-bold lg:mr-32'>
          <h2>{item.Greeting}</h2>
          <h5 className='text-xs font-thin mb-2 tracking-widest animate-pulse '>{item.Name}</h5>
          <div className="line w-90 h-1 bg-sky-800 rounded"></div>
          <p className='text-xl mt-1 ' dangerouslySetInnerHTML={{ __html: item.Description }} />
        </div>

      </div>
    );
  });

  return (
    <div>

      <div className='mt-28 translate-y-10 ' data-aos="zoom-in">
        {Users} <br /> <br /><br /><br /><br /> <br />
      </div>

      <div className='mt-28'>
        <AboutMe />
      </div> <br /><br />
      <div className="mt-32" >
        <Project />
      </div>
      <div className="mt-32" >
        <Achivement />
      </div>

      <div className="mt-32 mb-7" >
        <Contactme />
      </div>

    </div>
  );

}



