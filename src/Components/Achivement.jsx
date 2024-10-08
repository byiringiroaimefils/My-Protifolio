
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

import achivementData from "./AchivementData"
export default function Achivement() {
  useEffect(() => {
    Aos.init({ duration: 2000, debounceDelay: 2000 })
  })
  return (
    <div>
      <div className='text-center'>
        <h3 className='hover:text-sky-700 transition-colors duration-300 text-lg font-semibold' >ACHIVEMENT</h3>
        <p className='text-sm font-thin '>My life depends on coding ,Programing and being updates on new Version.</p>
      </div>
      <div className="Container grid grid-cols-3 gap-10 justify-center mt-10 ml-5 mb-10" data-aos="zoom-in">
        {achivementData.map(item => (
          <div className="text-white " key={item.id}>
            <img src={item.Image} className="w-96" />
            <p className="w-96 text-center">{item.alt}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-start ml-20 mb-10'>
        <button className='buttonss Dowmload CV bg-sky-700 rounded p-1 text-xs w-40 h-8' > <a href="https://photos.google.com/"> More</a></button>
      </div>
    </div>
  )
}
