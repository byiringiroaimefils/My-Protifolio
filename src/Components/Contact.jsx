import React from 'react'
import Photo from '../assets/contact-me.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
export default function Contct() {
  return (

    <div className='CONTACTME'>
      <div className='text-center pt-5'>
        <h3 className='hover:text-sky-700 transition-colors duration-300 text-lg font-semibold ' >CONTACT ME</h3>
      </div>

      <div className='centered-container flex justify-center order-2  mt-8 gap-20  '>
        <div className='animation1'>
          <h3 className=' font-extrabold'>Get  In Touch</h3>
          <p className='text-sm'>I'm here for you! How can I help you.</p> <br />
          <label htmlFor="">Username</label><br />
          <input type="text" className='w-96 h-8 bg-gray-400 outline-sky-700' /> <br />
          <label htmlFor="">Email</label><br />
          <input type="email" className='w-96 h-8  bg-gray-400 outline-sky-700' /> <br />
          <label htmlFor="">Message</label>  <br />
          <textarea name="" id="" cols="30" rows="10" className='w-96  bg-gray-400 outline-sky-900'></textarea> <br />
          <button className='Dowmload CV bg-sky-700 rounded p-1 text-xs w-96 h-8'>Submit</button>
        </div>
        <br />
        <div className='animation1 mt-16'>
          <img src={Photo} alt="" className='w-80' />
          <div className='flex mt-10'>
            <FaEnvelope className='w-16 animate-bounce hover:text-sky-700' />
            <FaFacebook className='w-16 animate-bounce hover:text-sky-700' />
            <FaInstagram className='w-16 animate-bounce hover:text-sky-700' />
            <FaTwitter className='w-16 animate-bounce hover:text-sky-700' />
            <FaLinkedinIn className='w-16 animate-bounce hover:text-sky-700' />
          </div>
        </div>
      </div>
    </div>
  )
}
