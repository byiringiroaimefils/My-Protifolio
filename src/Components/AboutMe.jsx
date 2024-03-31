// import React from 'react'
import Datas from '../Components/AboutmeData'
import { FaEnvelope, FaAddressBook, FaPhone} from "react-icons/fa"
import {useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import CV from "../assets/Profile.pdf";

export default function AboutMe() {
  useEffect(() => {
    Aos.init({duration:2000})
  })
  const Data = Datas.map(terms => {
    return (
      <div key={terms.id}>

        <div className='text-center'>
          <h3 className='hover:text-sky-700 transition-colors duration-300 text-lg font-semibold' >ABOUTME</h3>
          <p className='text-sm font-thin '>My life depends on coding ,Programing and being updates on new Version.</p>
        </div>

        <div className='centered-container flex justify-center mt-32 gap-24'>

          <div className='animation1 w-96'  data-aos="fade-right">
            <img src={terms.Image2} alt={terms.alt} className='Image' />
          </div>


          <div className='animation1 flex  flex-col Font text-base' data-aos="fade-left" >
            <span className='text-lg font-bold hover:text-sky-700 transition-colors duration-300'>{terms.Greeting}</span>
            <p className='font-thin mt-2 mb-2' dangerouslySetInnerHTML={{ __html: terms.aboutMe }} />
            <FaEnvelope className='translate-y-5 text-sky-700'/> 
            <label className='font-semibold translate-x-5 '>aimefils173@gmail.com</label>
            <FaAddressBook className='translate-y-5 text-sky-700'/>
            <label className='font-semibold translate-x-5 '>Rubavu-Gisa</label>
            <FaPhone className='translate-y-5 text-sky-700'/>
            <label className='font-semibold translate-x-5 '>0790154696</label>
            <label> Computer Language and Skills </label>
            <div className='flex'>
            <img src={terms.html} alt='' className='w-5 m-2' />
            <img src={terms.css} alt='' className='w-5 m-2' />
            <img src={terms.tailwind} alt='' className='w-5 m-2 ' />
            <img src={terms.javascritp} alt='' className='w-5 m-2'  />
            <img src={terms.Node} alt='' className='w-5 m-2'  />
            <img src={terms.php} alt='' className='w-5 m-2'  />
            <img src={terms.mysqli} alt='' className='w-5 m-2'  />
            <img src={terms.react} alt='' className='w-5 m-2'  />
            <img src={terms.figma} alt='' className='w-5 m-2'  />
            <img src={terms.Photoshop} alt='' className='w-5 m-2'  />
            <img src={terms.Illust} alt='' className='w-5 m-2'  />
            <img src={terms.version} alt='' className='w-5 m-2'  />
            </div> <br />
            <button className='Dowmload  CV buttonss bg-sky-700 rounded p-2 text-xs '> <a href="/src/assets/Profile.pdf" download={CV}>Dowmload CV</a> </button>
          </div>
        </div>
      </div>
    )

  })
  return (
    <div>
      {Data}
    </div>
  )
}
