import React from 'react'
import Dt from './Dt'
import { FaVoicemail, FaAddressBook, FaPhone, FaReact } from "react-icons/fa"



export default function AboutMe() {
  const Data = Dt.map(terms => {
    return (
      <div key={terms.id}>
        <div className='text-center'>
          <h3 className='hover:text-sky-700 transition-colors duration-300 text-lg font-semibold' >ABOUTME</h3>
          <p className='text-sm font-thin '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam!</p>
        </div>
        <div className='TX  flex justify-center mt-32 gap-24'>
          <div className='w-80'>
            <img src={terms.Image2} alt={terms.alt} className='Image' />
          </div>
          <div className=' Font text-base '>
            <span className='text-lg font-bold hover:text-sky-700 transition-colors duration-300'>{terms.Greeting}</span>
            <p className='font-thin mt-2 mb-2' dangerouslySetInnerHTML={{ __html: terms.aboutMe }} />
            <h6 className='font-semibold'><FaVoicemail/>  Email-Adress:aimefils173@gmail.com</h6>
            <h6 className='font-semibold'><FaAddressBook/>Adress:Rubavu-Gisa</h6>
            <h6 className='font-semibold'><FaPhone/>Contact:0790154696</h6> <br />
            <label> Computer Language and Skills </label>
            <div className='flex'>
              <FaReact />
              <FaReact />
              <FaReact />
              <FaReact />
              <FaReact />
              <FaReact />
            </div> <br />
            <button className='bg-sky-700 rounded p-2 text-xs'>Dowmload CV</button>
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
