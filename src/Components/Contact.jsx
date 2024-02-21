// import React from 'react'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import Photo from '../assets/contact-me.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
export default function Contct() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    < div className='CONTACTME' >
      <div className='text-center pt-5'>
        <h3 className='hover:text-sky-700 transition-colors duration-300 text-lg font-semibold ' >CONTACT ME</h3>
        <p className='text-sm font-thin '>My life depends on coding ,Programing and being updates on new Version.</p>
      </div>

      <div className='centered-container flex justify-center order-2  mt-8 gap-20  '>
        <div className='' data-aos="fade-left">
          <h3 className=' font-extrabold'>Get  In Touch</h3>
          <p className='text-sm'>I'm here for you! How can I help you.</p> <br />
          <form action="">
            <label htmlFor="">USERNAME</label><br />
            <input type="text" placeholder='Ex: aimefils' className='input  w-96 h-8 bg-black outline-none' /> <br />
            <label htmlFor="">EMAIL</label><br />
            <input type="email" placeholder='email@gmail.com' className='input  w-96 h-8  bg-black outline-none' /> <br />
            <label htmlFor="">MESSAGE</label>  <br />
            <textarea name="" id="" placeholder='Message' cols="30" rows="10" className='input w-96   bg-black outline-sky-900'></textarea> <br />
            <button className='Dowmload CV bg-sky-700 rounded p-1 text-xs w-96 h-8'>Submit</button>
          </form>
        </div><br />

        <div className=' mt-16' data-aos="fade-right">
          <div>
            <img src={Photo} alt="" className='w-80' />
          </div>

          <div className='flex mt-10'>
            <FaEnvelope className='w-16 animate-bounce hover:text-sky-700' />
            <FaFacebook className='w-16 animate-bounce hover:text-sky-700' />
            <FaInstagram className='w-16 animate-bounce hover:text-sky-700' />
            <FaTwitter className='w-16 animate-bounce hover:text-sky-700' />
            <FaLinkedinIn className='w-16 animate-bounce hover:text-sky-700' />
          </div><br />
          <p className='text-center'> BYIRINGIRO Aime Fils</p>
        </div>

      </div>
    </div >
  )
}
