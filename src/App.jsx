import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './assets/logoipsum-245.png'
import './App.css'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Project from './Components/Project'
import Achivement from './Components/Achivement'
import Contct from './Components/Contact'

import { Analytics } from "@vercel/analytics/react"
import { FaSun, FaBars } from "react-icons/fa";


function App() {
  const [openLink, SetopenLink] = useState(false);
  const [bgcolor, Setbgcolor] = useState("Light");


  useEffect(() => {
    if (bgcolor === "Dark") {
      document.body.classList.add("Dark")
    }
    else {
      document.body.classList.remove("Dark")
    }
  }, [bgcolor]);

  const handlethemeswitch = () => {
    Setbgcolor(bgcolor === "Dark" ? "Light" : "Dark")

  }
  return (
    <div>
      <BrowserRouter>
        <header className="Header sticky top-0" >
          <div className="flex justify-between ml-8 ">
            <div className="logo ml-6 translate-y-4  translate-x-2">
              <Link to="/">
                <div className='flex h-6'>
                  <img src={Logo} alt="" className='translate-y-[-11px] translate-x-[-10px] translate-y-[-15px]' />
                  <h4 className='md:block'>BYIRINGIRO</h4>
                </div>
              </Link>
            </div>

            <nav className="ml-9  translate-x-2 transition-all duration-300">
              <ul className={openLink ? "open" : ""} >
                <Link className=" hover:text-sky-700 transition-colors duration-300 text-xs font-semibold " to="/">
                  HOME
                </Link>
                <Link className="hover:text-sky-700 transition-colors duration-300 text-xs font-semibold" to="AboutMe">
                  ABOUTME
                </Link>
                <Link className="hover:text-sky-700 transition-colors duration-300 text-xs font-semibold " to="Project">
                  PROJECT
                </Link>
                <Link className="hover:text-sky-700 transition-colors duration-300 text-xs font-semibold " to="Achivement">
                  ACHIVEMENT
                </Link>

              </ul>
            </nav>
            <div className="None  flex  mr-20">
              <Link to="Contct">
                <button className='buttons  p-1 text-sm  rounded-lg font-extrabold '>Contact me</button>
              </Link>
              <div className='translate-y-1 ml-5' onClick={handlethemeswitch}>
                {handlethemeswitch ? `${<FaSun className='cursor-pointer hover:text-sky-700' />}` : `${<FaSun className='cursor-pointer hover:text-sky-700' />}`}
              </div>
            </div>
            <div onClick={() => {SetopenLink(!openLink);}}>
            {openLink ? `${<  FaBars className="FaBars lg:hidden  mt-3 ml-6 mr-7 white cursor-pointer"  />}` : `${<FaSun className='cursor-pointer hover:text-sky-700' />}`}
            
              
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Project" element={<Project />} />
            <Route path="Contct" element={<Contct />} />
            <Route path="Achivement" element={<Achivement />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App
